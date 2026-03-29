// Vercel Serverless Function – Newsletter Signup + Bestätigungsmail via Resend + Supabase
import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email, role } = req.body || {}
  if (!email) return res.status(400).json({ error: 'E-Mail fehlt' })

  const resendKey = process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY
  let mailSent = false
  let mailError = null

  // 1. Bestätigungsmail via Resend
  if (resendKey) {
    try {
      // Ohne verifizierte Domain: onboarding@resend.dev als Absender
      // Mit verifizierter Domain: newsletter@cyberlage.io
      const fromAddress = process.env.RESEND_FROM_ADDRESS || 'onboarding@resend.dev'

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `CyberLage Newsletter <${fromAddress}>`,
          to: [email],
          subject: 'Willkommen beim CyberLage Security-Newsletter',
          html: `
            <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0C0F; color: #E8E6E0; padding: 40px 30px;">
              <div style="border-bottom: 2px solid #C8A96E; padding-bottom: 20px; margin-bottom: 30px;">
                <h1 style="font-size: 24px; margin: 0; color: #E8E6E0;">🛡️ CyberLage</h1>
                <p style="font-size: 12px; color: #7A7D83; margin: 5px 0 0;">Die tägliche Sicherheitslage für den DACH-Raum</p>
              </div>

              <h2 style="color: #C8A96E; font-size: 20px;">Willkommen an Bord!</h2>

              <p style="color: #E8E6E0; line-height: 1.8;">
                Du hast dich erfolgreich für den <strong>CyberLage Security-Newsletter</strong> angemeldet.
              </p>

              <p style="color: #7A7D83; line-height: 1.8;">
                Ab sofort erhältst du <strong style="color: #E8E6E0;">jeden Montag</strong> unser Security-Briefing mit:
              </p>

              <ul style="color: #7A7D83; line-height: 2;">
                <li>🔴 Top 5 Bedrohungen der Woche</li>
                <li>🔧 Kritische Patches die eingespielt werden müssen</li>
                <li>🇩🇪🇦🇹🇨🇭 DACH-spezifische Sicherheitsvorfälle</li>
                <li>🤖 KI-generierte Zusammenfassung</li>
              </ul>

              ${role ? `<p style="color: #3E4148; font-size: 12px;">Deine Rolle: ${role}</p>` : ''}

              <div style="border-top: 1px solid #1E2228; margin-top: 30px; padding-top: 20px;">
                <p style="color: #3E4148; font-size: 11px;">
                  CyberLage.io · Betrieben von Corelead Solutions · München, Deutschland<br>
                  <a href="https://cyberlage.io/about#datenschutz" style="color: #C8A96E;">Datenschutz</a> ·
                  Du kannst dich jederzeit abmelden.
                </p>
              </div>
            </div>
          `,
        }),
      })

      const resendData = await resendRes.json()

      if (resendRes.ok) {
        mailSent = true
        console.log(`Newsletter: Mail gesendet an ${email}`, resendData)
      } else {
        mailError = resendData.message || resendData.error || JSON.stringify(resendData)
        console.error(`Newsletter: Mail-Fehler für ${email}:`, mailError)
      }
    } catch (e) {
      mailError = e.message
      console.error(`Newsletter: Mail-Exception für ${email}:`, e.message)
    }
  } else {
    mailError = 'Kein Resend API Key konfiguriert'
    console.warn('Newsletter: RESEND_API_KEY nicht gesetzt, keine Mail versendet')
  }

  // Save subscriber to Supabase
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { error: dbError } = await supabase
        .from('newsletter_subscribers')
        .upsert([{ email, role: role || null, confirmed: true }], { onConflict: 'email' })
      if (dbError) console.error('Supabase save error:', dbError)
    } catch (e) {
      console.error('Supabase exception:', e.message)
    }
  } else {
    console.warn('Supabase nicht konfiguriert, Subscriber nur per Mail bestaetigt')
  }

  return res.status(200).json({
    success: true,
    mailSent,
    mailError: mailError || null,
    message: mailSent
      ? 'Anmeldung gespeichert und Bestätigungsmail versendet.'
      : 'Anmeldung gespeichert. Bestätigungsmail folgt in Kürze.',
  })
}

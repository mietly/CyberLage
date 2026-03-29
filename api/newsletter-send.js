// Vercel Serverless Function – Newsletter Send via Resend + Supabase
import { createClient } from '@supabase/supabase-js'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { subject, html, testEmail } = req.body || {}

  if (!subject || !html) {
    return res.status(400).json({ error: 'subject und html sind erforderlich' })
  }

  const resendKey = process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY
  if (!resendKey) {
    return res.status(500).json({ error: 'Resend API Key nicht konfiguriert' })
  }

  const fromAddress = process.env.RESEND_FROM_ADDRESS || 'onboarding@resend.dev'

  // If testEmail is provided, send only to that address
  if (testEmail) {
    const result = await sendEmail(resendKey, fromAddress, testEmail, subject, html)
    return res.status(200).json({
      sent: result.success ? 1 : 0,
      failed: result.success ? 0 : 1,
      total: 1,
      errors: result.error ? [{ email: testEmail, error: result.error }] : [],
    })
  }

  // Fetch all confirmed subscribers from Supabase
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({ error: 'Supabase nicht konfiguriert' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data: subscribers, error: dbError } = await supabase
    .from('newsletter_subscribers')
    .select('email')
    .eq('confirmed', true)
    .is('unsubscribed_at', null)

  if (dbError) {
    console.error('Supabase query error:', dbError)
    return res.status(500).json({ error: 'Fehler beim Laden der Abonnenten', details: dbError.message })
  }

  if (!subscribers || subscribers.length === 0) {
    return res.status(200).json({ sent: 0, failed: 0, total: 0, errors: [], message: 'Keine Abonnenten gefunden' })
  }

  let sent = 0
  let failed = 0
  const errors = []

  for (const subscriber of subscribers) {
    const result = await sendEmail(resendKey, fromAddress, subscriber.email, subject, html)

    if (result.success) {
      sent++
    } else {
      failed++
      errors.push({ email: subscriber.email, error: result.error })
    }

    // Rate limit: max 2 per second (500ms delay between sends)
    await sleep(500)
  }

  return res.status(200).json({
    sent,
    failed,
    total: subscribers.length,
    errors,
  })
}

async function sendEmail(resendKey, fromAddress, to, subject, html) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `CyberLage Newsletter <${fromAddress}>`,
        to: [to],
        subject,
        html,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      console.log(`Newsletter gesendet an ${to}`, data)
      return { success: true }
    } else {
      const errorMsg = data.message || data.error || JSON.stringify(data)
      console.error(`Newsletter-Fehler fuer ${to}:`, errorMsg)
      return { success: false, error: errorMsg }
    }
  } catch (e) {
    console.error(`Newsletter-Exception fuer ${to}:`, e.message)
    return { success: false, error: e.message }
  }
}

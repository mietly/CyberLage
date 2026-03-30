// Vercel Cron Job – Automatischer wöchentlicher Newsletter jeden Montag 7:00 CET
// Triggered by Vercel Cron: vercel.json → crons config

import { createClient } from '@supabase/supabase-js'

export const config = {
  maxDuration: 300, // 5 minutes max (batch sending takes time)
}

// Inline newsletter template (can't import from src/ in serverless)
function generateNewsletterHTML({ date, threatLevel, threats, patches, dachNews, unsubscribeUrl }) {
  const badgeColors = { HOCH: '#D97B5A', MITTEL: '#C8A96E', NIEDRIG: '#5A9A6B' }
  const riskColors = { Kritisch: '#D97B5A', Hoch: '#D97B5A', Mittel: '#C8A96E' }
  const bc = badgeColors[threatLevel] || '#C8A96E'

  const threatsRows = threats.map((t, i) => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #1E2228;color:#7A7D83;font-family:monospace;font-size:14px;width:30px;vertical-align:top;">${i + 1}.</td>
      <td style="padding:10px 12px;border-bottom:1px solid #1E2228;vertical-align:top;">
        <span style="color:#E8E6E0;font-size:14px;">${t.title}</span><br/>
        <span style="color:${riskColors[t.level] || '#C8A96E'};font-family:monospace;font-size:12px;text-transform:uppercase;letter-spacing:1px;">${t.level}</span>
      </td>
    </tr>`).join('')

  const patchRows = patches.map(p => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #1E2228;color:#E8E6E0;font-size:13px;font-family:monospace;">${p.software}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #1E2228;color:#D97B5A;font-size:13px;font-family:monospace;">${p.cve}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #1E2228;color:#7A7D83;font-size:13px;">${p.description}</td>
    </tr>`).join('')

  return `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>CyberLage Threat Report – ${date}</title></head>
<body style="margin:0;padding:0;background-color:#0A0C0F;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#0A0C0F;"><tr><td align="center" style="padding:32px 16px;">
<table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;">
  <tr><td style="background-color:#0F1215;border:1px solid #1E2228;padding:32px 24px;text-align:center;">
    <span style="font-size:28px;color:#C8A96E;font-family:Georgia,serif;letter-spacing:1px;">&#128737; CyberLage</span><br/>
    <span style="color:#7A7D83;font-family:monospace;font-size:12px;text-transform:uppercase;letter-spacing:2px;">W&ouml;chentlicher Threat Report</span><br/><br/>
    <span style="color:#3E4148;font-family:monospace;font-size:12px;">${date}</span><br/><br/>
    <table role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
      <td style="background-color:${bc};padding:6px 20px;">
        <span style="color:#0A0C0F;font-family:monospace;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;">Bedrohungslage: ${threatLevel}</span>
      </td>
    </tr></table>
  </td></tr>
  <tr><td style="height:16px;"></td></tr>
  <tr><td style="background-color:#0F1215;border:1px solid #1E2228;padding:24px;">
    <span style="color:#C8A96E;font-family:Georgia,serif;font-size:18px;">Top 5 Bedrohungen</span>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;">${threatsRows}</table>
  </td></tr>
  <tr><td style="height:16px;"></td></tr>
  <tr><td style="background-color:#0F1215;border:1px solid #1E2228;padding:24px;">
    <span style="color:#C8A96E;font-family:Georgia,serif;font-size:18px;">Kritische Patches</span>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;">
      <tr><td style="padding:8px 12px;border-bottom:1px solid #1E2228;color:#7A7D83;font-family:monospace;font-size:11px;text-transform:uppercase;">Software</td><td style="padding:8px 12px;border-bottom:1px solid #1E2228;color:#7A7D83;font-family:monospace;font-size:11px;text-transform:uppercase;">CVE</td><td style="padding:8px 12px;border-bottom:1px solid #1E2228;color:#7A7D83;font-family:monospace;font-size:11px;text-transform:uppercase;">Beschreibung</td></tr>
      ${patchRows}
    </table>
  </td></tr>
  <tr><td style="height:16px;"></td></tr>
  <tr><td style="background-color:#0F1215;border:1px solid #1E2228;padding:24px;">
    <span style="color:#C8A96E;font-family:Georgia,serif;font-size:18px;">DACH-Region</span>
    <div style="padding-top:16px;color:#E8E6E0;font-size:14px;line-height:1.6;">${dachNews}</div>
  </td></tr>
  <tr><td style="height:16px;"></td></tr>
  <tr><td style="background-color:#0F1215;border:1px solid #1E2228;padding:24px;text-align:center;">
    <a href="${unsubscribeUrl}" style="color:#7A7D83;font-family:monospace;font-size:12px;text-decoration:underline;">Newsletter abmelden</a><br/><br/>
    <span style="color:#3E4148;font-family:monospace;font-size:11px;">CyberLage.io &middot; Corelead Solutions &middot; M&uuml;nchen</span><br/>
    <a href="https://cyberlage.io/about#datenschutz" style="color:#3E4148;font-family:monospace;font-size:11px;text-decoration:underline;">Datenschutz</a>
  </td></tr>
</table></td></tr></table></body></html>`
}

export default async function handler(req, res) {
  // Verify this is a cron call (Vercel sets this header)
  const authHeader = req.headers['authorization']
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    console.warn('Cron: Unauthorized call attempt')
    return res.status(401).json({ error: 'Unauthorized' })
  }

  console.log('=== CyberLage Newsletter Cron gestartet ===')
  const startTime = Date.now()

  const claudeKey = process.env.CLAUDE_API_KEY || process.env.VITE_CLAUDE_API_KEY
  const resendKey = process.env.RESEND_API_KEY
  const fromAddress = process.env.RESEND_FROM_ADDRESS || 'newsletter@cyberlage.io'

  if (!resendKey) {
    console.error('RESEND_API_KEY fehlt!')
    return res.status(500).json({ error: 'RESEND_API_KEY nicht konfiguriert' })
  }

  // 1. Generate newsletter content with Claude
  let threatLevel = 'HOCH'
  let threats = []
  let patches = []
  let dachNews = ''

  if (claudeKey) {
    try {
      console.log('Generiere Newsletter-Inhalt mit Claude...')
      const prompt = `Du bist der CyberLage Newsletter-Redakteur. Erstelle den wöchentlichen Threat Report für den DACH-Raum.

Antworte NUR mit validem JSON (kein Markdown, kein Text drumherum):
{
  "threatLevel": "HOCH" oder "MITTEL" oder "NIEDRIG",
  "threats": [
    {"title": "Bedrohung 1", "level": "Kritisch"},
    {"title": "Bedrohung 2", "level": "Hoch"},
    {"title": "Bedrohung 3", "level": "Hoch"},
    {"title": "Bedrohung 4", "level": "Mittel"},
    {"title": "Bedrohung 5", "level": "Mittel"}
  ],
  "patches": [
    {"software": "Hersteller", "cve": "CVE-XXXX-XXXXX", "description": "Kurzbeschreibung"},
    {"software": "Hersteller", "cve": "CVE-XXXX-XXXXX", "description": "Kurzbeschreibung"},
    {"software": "Hersteller", "cve": "CVE-XXXX-XXXXX", "description": "Kurzbeschreibung"}
  ],
  "dachNews": "HTML-formatierter Text mit aktuellen DACH-Security-News (2-3 Absätze, <p> und <strong> Tags erlaubt)"
}

Fokussiere dich auf aktuelle, reale Bedrohungen für den DACH-Raum. Heute ist ${new Date().toLocaleDateString('de-DE')}.`

      const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': claudeKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2048,
          messages: [{ role: 'user', content: prompt }],
        }),
      })

      const claudeData = await claudeRes.json()
      const text = claudeData.content?.[0]?.text || ''
      console.log('Claude Antwort erhalten, parse JSON...')

      // Extract JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0])
        threatLevel = parsed.threatLevel || 'HOCH'
        threats = (parsed.threats || []).slice(0, 5)
        patches = (parsed.patches || []).slice(0, 5)
        dachNews = parsed.dachNews || ''
        console.log(`Claude Inhalt: ${threats.length} Threats, ${patches.length} Patches, Level: ${threatLevel}`)
      } else {
        throw new Error('Kein JSON in Claude-Antwort gefunden')
      }
    } catch (e) {
      console.error('Claude-Fehler, verwende Fallback:', e.message)
      // Fallback content
      threatLevel = 'HOCH'
      threats = [
        { title: 'Ransomware-Angriffe auf DACH-Unternehmen nehmen zu', level: 'Kritisch' },
        { title: 'Aktiv ausgenutzte Schwachstellen in Netzwerk-Geräten', level: 'Hoch' },
        { title: 'KI-gestützte Phishing-Kampagnen in deutscher Sprache', level: 'Hoch' },
        { title: 'Supply-Chain-Angriffe über Open-Source-Pakete', level: 'Mittel' },
        { title: 'Cloud-Fehlkonfigurationen als Einfallstor', level: 'Mittel' },
      ]
      patches = [
        { software: 'Microsoft', cve: 'Patch Tuesday', description: 'Monatliche Sicherheitsupdates prüfen' },
        { software: 'Fortinet', cve: 'FortiOS', description: 'Aktuelle Firmware-Updates einspielen' },
        { software: 'SAP', cve: 'Security Notes', description: 'SAP-Sicherheitshinweise prüfen' },
      ]
      dachNews = '<p>Die Bedrohungslage im DACH-Raum bleibt angespannt. Überprüfen Sie Ihre Sicherheitsmaßnahmen regelmäßig.</p>'
    }
  } else {
    console.warn('CLAUDE_API_KEY fehlt, verwende Fallback-Inhalt')
    threats = [
      { title: 'Ransomware bleibt Top-Bedrohung im DACH-Raum', level: 'Kritisch' },
      { title: 'Phishing-Kampagnen mit KI-generierten Inhalten', level: 'Hoch' },
      { title: 'Ungepatchte Schwachstellen in Perimeter-Geräten', level: 'Hoch' },
      { title: 'NIS2-Compliance-Druck steigt', level: 'Mittel' },
      { title: 'Shadow AI als Datenschutzrisiko', level: 'Mittel' },
    ]
    patches = [
      { software: 'Diverse', cve: 'Aktuell', description: 'Alle Systeme auf aktuelle Patches prüfen' },
    ]
    dachNews = '<p>Bleiben Sie wachsam. Aktuelle Security-News finden Sie auf <a href="https://cyberlage.io" style="color:#C8A96E;">cyberlage.io</a>.</p>'
  }

  // 2. Build newsletter HTML
  const today = new Date().toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
  const subject = `CyberLage Threat Report – KW ${getWeekNumber(new Date())} / ${new Date().getFullYear()}`

  // 3. Get subscribers from Supabase
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase nicht konfiguriert!')
    return res.status(500).json({ error: 'Supabase nicht konfiguriert' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data: subscribers, error: dbError } = await supabase
    .from('newsletter_subscribers')
    .select('email')
    .eq('confirmed', true)
    .is('unsubscribed_at', null)

  if (dbError) {
    console.error('Supabase Fehler:', dbError)
    return res.status(500).json({ error: 'Subscriber-Abfrage fehlgeschlagen' })
  }

  const emails = subscribers?.map(s => s.email) || []
  console.log(`${emails.length} Subscriber gefunden`)

  if (emails.length === 0) {
    console.log('Keine Subscriber, Newsletter wird nicht gesendet')
    return res.status(200).json({ message: 'Keine Subscriber vorhanden', sent: 0 })
  }

  // 4. Send to each subscriber
  let sent = 0
  let failed = 0
  const errors = []

  for (const email of emails) {
    const unsubscribeUrl = `https://cyberlage.io/abmelden?email=${encodeURIComponent(email)}`
    const html = generateNewsletterHTML({ date: today, threatLevel, threats, patches, dachNews, unsubscribeUrl })

    try {
      const mailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `CyberLage <${fromAddress}>`,
          to: [email],
          subject,
          html,
        }),
      })

      const mailData = await mailRes.json()

      if (mailRes.ok && mailData.id) {
        sent++
        console.log(`✓ ${email}`)
      } else {
        failed++
        const errMsg = mailData.message || JSON.stringify(mailData)
        errors.push({ email, error: errMsg })
        console.error(`✗ ${email}: ${errMsg}`)
      }
    } catch (e) {
      failed++
      errors.push({ email, error: e.message })
      console.error(`✗ ${email}: ${e.message}`)
    }

    // Rate limit: 500ms between sends
    if (emails.indexOf(email) < emails.length - 1) {
      await new Promise(r => setTimeout(r, 500))
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1)
  console.log(`=== Newsletter fertig: ${sent}/${emails.length} gesendet, ${failed} Fehler, ${duration}s ===`)

  return res.status(200).json({
    success: true,
    sent,
    failed,
    total: emails.length,
    subject,
    threatLevel,
    duration: `${duration}s`,
    errors: errors.slice(0, 10),
  })
}

function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
}

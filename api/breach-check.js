// Vercel Serverless Function – HaveIBeenPwned Breach Checker Proxy
// Checks if an email has been involved in data breaches

const demoBreaches = [
  {
    Name: 'Adobe',
    BreachDate: '2013-10-04',
    Description: 'Im Oktober 2013 wurden 153 Millionen Adobe-Konten kompromittiert. Die Daten enthielten IDs, Benutzernamen, E-Mails, verschlüsselte Passwörter und Passwort-Hinweise im Klartext.',
    DataClasses: ['E-Mail-Adressen', 'Passwort-Hinweise', 'Passwörter', 'Benutzernamen'],
    PwnCount: 152445165,
  },
  {
    Name: 'LinkedIn',
    BreachDate: '2012-05-05',
    Description: 'Im Mai 2016 wurden Daten aus dem LinkedIn-Hack von 2012 zum Verkauf angeboten. 164 Millionen E-Mail-Adressen und Passwörter waren betroffen.',
    DataClasses: ['E-Mail-Adressen', 'Passwörter'],
    PwnCount: 164611595,
  },
  {
    Name: 'Dropbox',
    BreachDate: '2012-07-01',
    Description: 'Mitte 2012 wurde Dropbox gehackt. Der Angriff betraf über 68 Millionen Nutzerkonten mit E-Mail-Adressen und gehashten Passwörtern.',
    DataClasses: ['E-Mail-Adressen', 'Passwörter'],
    PwnCount: 68648009,
  },
]

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const { email } = req.query
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Gültige E-Mail-Adresse erforderlich' })
  }

  const hibpKey = process.env.HIBP_API_KEY

  // If no API key configured, return demo response
  if (!hibpKey) {
    // Simulate a short delay
    await new Promise((r) => setTimeout(r, 800))
    return res.status(200).json({
      demo: true,
      breaches: demoBreaches,
      message: 'Demo-Modus: Kein HIBP API-Key konfiguriert. Dies sind Beispieldaten.',
    })
  }

  try {
    const hibpUrl = `https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`
    const response = await fetch(hibpUrl, {
      headers: {
        'hibp-api-key': hibpKey,
        'user-agent': 'CyberLage.de-BreachChecker/1.0',
      },
    })

    if (response.status === 404) {
      // No breaches found
      return res.status(200).json({ demo: false, breaches: [] })
    }

    if (response.status === 429) {
      return res.status(429).json({ error: 'Zu viele Anfragen. Bitte versuche es in einer Minute erneut.' })
    }

    if (!response.ok) {
      throw new Error(`HIBP API returned ${response.status}`)
    }

    const breaches = await response.json()
    return res.status(200).json({ demo: false, breaches })
  } catch (error) {
    console.error('Breach Check Error:', error.message)
    return res.status(500).json({ error: 'Fehler bei der Breach-Prüfung', message: error.message })
  }
}

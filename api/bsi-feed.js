// Vercel Serverless Function – BSI CERT-Bund RSS Feed Proxy
// Fetches and parses BSI security advisories

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=1800')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    const rssUrl = 'https://wid.cert-bund.de/content/public/securityAdvisory/rss'
    const response = await fetch(rssUrl, {
      headers: { 'User-Agent': 'CyberLage.de-BSI-Feed/1.0' },
    })

    if (!response.ok) {
      throw new Error(`BSI RSS returned ${response.status}`)
    }

    const xml = await response.text()

    // Simple XML parsing with regex - no external deps
    const items = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match

    while ((match = itemRegex.exec(xml)) !== null) {
      const itemXml = match[1]

      const getTag = (tag) => {
        const tagMatch = itemXml.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?<\\/${tag}>`, 's'))
        return tagMatch ? tagMatch[1].trim() : ''
      }

      const title = getTag('title')
      const description = getTag('description')
      const link = getTag('link')
      const pubDate = getTag('pubDate')

      // Try to extract severity from title or description
      let severity = 'mittel'
      const titleLower = (title + ' ' + description).toLowerCase()
      if (titleLower.includes('kritisch') || titleLower.includes('critical') || titleLower.includes('hoch') || titleLower.includes('high')) {
        severity = 'hoch'
      }
      if (titleLower.includes('kritisch') || titleLower.includes('critical')) {
        severity = 'kritisch'
      }
      if (titleLower.includes('niedrig') || titleLower.includes('low')) {
        severity = 'niedrig'
      }

      items.push({
        title,
        description: description.length > 250 ? description.substring(0, 250) + '...' : description,
        link,
        pubDate,
        severity,
      })
    }

    return res.status(200).json(items.slice(0, 20))
  } catch (error) {
    console.error('BSI Feed Error:', error.message)
    return res.status(500).json({ error: 'Fehler beim Abrufen der BSI-Warnmeldungen', message: error.message })
  }
}

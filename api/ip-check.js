// Vercel Serverless Function – Proxy für AbuseIPDB + VirusTotal
// Schützt API-Keys serverseitig

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const { query } = req.query
  if (!query) {
    return res.status(400).json({ error: 'Parameter "query" fehlt' })
  }

  const input = query.trim()
  const isIP = /^\d{1,3}(\.\d{1,3}){3}$/.test(input)
  const isDomain = !isIP && /^[a-zA-Z0-9][a-zA-Z0-9-]*(\.[a-zA-Z]{2,})+$/.test(input)

  if (!isIP && !isDomain) {
    return res.status(400).json({ error: 'Ungültige IP-Adresse oder Domain' })
  }

  const results = {
    input,
    type: isIP ? 'IP-Adresse' : 'Domain',
    abuseipdb: null,
    virustotal: null,
  }

  // --- AbuseIPDB (nur für IPs) ---
  const abuseKey = process.env.ABUSEIPDB_API_KEY
  if (abuseKey && isIP) {
    try {
      const abuseRes = await fetch(
        `https://api.abuseipdb.com/api/v2/check?ipAddress=${encodeURIComponent(input)}&maxAgeInDays=90&verbose`,
        {
          headers: {
            Key: abuseKey,
            Accept: 'application/json',
          },
        }
      )
      if (abuseRes.ok) {
        const abuseData = await abuseRes.json()
        const d = abuseData.data
        results.abuseipdb = {
          abuseConfidenceScore: d.abuseConfidenceScore,
          totalReports: d.totalReports,
          countryCode: d.countryCode,
          isp: d.isp,
          domain: d.domain,
          usageType: d.usageType,
          isWhitelisted: d.isWhitelisted,
          isTor: d.isTor,
          lastReportedAt: d.lastReportedAt,
          numDistinctUsers: d.numDistinctUsers,
        }
      }
    } catch (e) {
      console.error('AbuseIPDB Error:', e.message)
    }
  }

  // --- VirusTotal (IP oder Domain) ---
  const vtKey = process.env.VIRUSTOTAL_API_KEY
  if (vtKey) {
    try {
      const endpoint = isIP
        ? `https://www.virustotal.com/api/v3/ip_addresses/${encodeURIComponent(input)}`
        : `https://www.virustotal.com/api/v3/domains/${encodeURIComponent(input)}`

      const vtRes = await fetch(endpoint, {
        headers: { 'x-apikey': vtKey },
      })

      if (vtRes.ok) {
        const vtData = await vtRes.json()
        const attrs = vtData.data?.attributes || {}
        const stats = attrs.last_analysis_stats || {}
        const totalEngines = (stats.harmless || 0) + (stats.malicious || 0) + (stats.suspicious || 0) + (stats.undetected || 0)

        results.virustotal = {
          malicious: stats.malicious || 0,
          suspicious: stats.suspicious || 0,
          harmless: stats.harmless || 0,
          undetected: stats.undetected || 0,
          totalEngines,
          reputation: attrs.reputation,
          asOwner: attrs.as_owner || null,
          country: attrs.country || null,
          network: attrs.network || null,
          whois: attrs.whois ? attrs.whois.substring(0, 500) : null,
          lastAnalysisDate: attrs.last_analysis_date
            ? new Date(attrs.last_analysis_date * 1000).toISOString()
            : null,
          // SSL-Infos für Domains
          lastHttpsCertificate: attrs.last_https_certificate
            ? {
                issuer: attrs.last_https_certificate.issuer?.O || null,
                validFrom: attrs.last_https_certificate.validity?.not_before || null,
                validTo: attrs.last_https_certificate.validity?.not_after || null,
                subject: attrs.last_https_certificate.subject?.CN || null,
              }
            : null,
        }
      }
    } catch (e) {
      console.error('VirusTotal Error:', e.message)
    }
  }

  return res.status(200).json(results)
}

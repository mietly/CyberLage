import { useState } from 'react'
import { Globe, Search, ShieldAlert, ShieldCheck, MapPin, Server, AlertTriangle, Info } from 'lucide-react'

function generateMockResult(input) {
  const isIP = /^\d{1,3}(\.\d{1,3}){3}$/.test(input.trim())
  const hash = [...input].reduce((acc, c) => acc + c.charCodeAt(0), 0)

  // Deterministic mock data based on input
  const reputationScore = ((hash * 7) % 100)
  const isClean = reputationScore > 40
  const blacklists = [
    'Spamhaus ZEN', 'SURBL', 'Barracuda', 'SpamCop', 'UCEPROTECT',
    'Invaluement', 'SORBS', 'CBL', 'Abuseat',
  ]
  const listedOn = isClean ? [] : blacklists.slice(0, (hash % 3) + 1)

  const countries = ['Deutschland', 'USA', 'Niederlande', 'Frankreich', 'Irland', 'Finnland', 'Singapur']
  const cities = ['Frankfurt', 'New York', 'Amsterdam', 'Paris', 'Dublin', 'Helsinki', 'Singapur']
  const isps = ['Hetzner Online', 'Amazon AWS', 'Cloudflare', 'OVH', 'DigitalOcean', 'Google Cloud', 'Microsoft Azure']
  const idx = hash % countries.length

  const reverseDNS = isIP
    ? `host-${input.replace(/\./g, '-')}.${['provider.com', 'hosting.net', 'cloud.eu'][hash % 3]}`
    : input

  return {
    input,
    type: isIP ? 'IP-Adresse' : 'Domain',
    reputationScore,
    reputationLabel: reputationScore > 70 ? 'Gut' : reputationScore > 40 ? 'Neutral' : 'Verdächtig',
    reputationColor: reputationScore > 70 ? 'text-green-400' : reputationScore > 40 ? 'text-yellow-400' : 'text-red-400',
    reputationBg: reputationScore > 70 ? 'bg-green-500/10 border-green-500/30' : reputationScore > 40 ? 'bg-yellow-500/10 border-yellow-500/30' : 'bg-red-500/10 border-red-500/30',
    blacklists: listedOn,
    totalBlacklists: blacklists.length,
    country: countries[idx],
    city: cities[idx],
    isp: isps[idx],
    reverseDNS,
  }
}

export default function IPChecker() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleCheck() {
    if (!input.trim()) return
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResult(generateMockResult(input.trim()))
      setLoading(false)
    }, 800)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleCheck()
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="h-8 w-8 text-purple-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
              IP/Domain Reputation prüfen
            </h1>
          </div>
          <p className="text-gray-400">Prüfe die Reputation einer IP-Adresse oder Domain.</p>
        </div>

        {/* Demo Notice */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6 flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-blue-400">Demo-Modus</p>
            <p className="text-xs text-blue-400/70 mt-1">
              Dies ist eine Demo mit simulierten Ergebnissen. Vollständige Prüfung erfordert API-Integration
              (z.B. AbuseIPDB, VirusTotal, Shodan).
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <label htmlFor="ip-input" className="block text-sm font-medium text-gray-300 mb-2">
            IP-Adresse oder Domain eingeben
          </label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                id="ip-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="z.B. 192.168.1.1 oder example.com"
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
              />
            </div>
            <button
              onClick={handleCheck}
              disabled={!input.trim() || loading}
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
            >
              {loading ? 'Prüfe...' : 'Prüfen'}
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-4">
            {/* Reputation Score */}
            <div className={`border rounded-xl p-5 ${result.reputationBg}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {result.reputationScore > 40 ? (
                    <ShieldCheck className={`h-6 w-6 ${result.reputationColor}`} />
                  ) : (
                    <ShieldAlert className={`h-6 w-6 ${result.reputationColor}`} />
                  )}
                  <div>
                    <h3 className="text-sm font-bold text-gray-200">{result.input}</h3>
                    <span className="text-xs text-gray-500">{result.type}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${result.reputationColor}`}>
                    {result.reputationScore}/100
                  </div>
                  <div className={`text-xs font-medium ${result.reputationColor}`}>
                    {result.reputationLabel}
                  </div>
                </div>
              </div>

              {/* Score Bar */}
              <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden mt-3">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    result.reputationScore > 70 ? 'bg-green-500' : result.reputationScore > 40 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${result.reputationScore}%` }}
                />
              </div>
            </div>

            {/* Blacklist Status */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-gray-400" />
                <h3 className="text-sm font-bold text-gray-300">Blacklist-Status</h3>
              </div>

              {result.blacklists.length === 0 ? (
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <ShieldCheck className="h-4 w-4" />
                  Auf keiner der {result.totalBlacklists} geprüften Blacklists gefunden
                </div>
              ) : (
                <div>
                  <p className="text-sm text-red-400 mb-2">
                    Auf {result.blacklists.length} von {result.totalBlacklists} Blacklists gefunden:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {result.blacklists.map((bl) => (
                      <span key={bl} className="px-2.5 py-1 bg-red-500/15 border border-red-500/30 rounded-lg text-xs text-red-400">
                        {bl}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Geolocation */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <h3 className="text-sm font-bold text-gray-300">Geolokation</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-500 text-xs">Land</span>
                  <p className="text-gray-200">{result.country}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">Stadt</span>
                  <p className="text-gray-200">{result.city}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">ISP / Hosting</span>
                  <p className="text-gray-200">{result.isp}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">Reverse DNS</span>
                  <p className="text-gray-200 break-all">{result.reverseDNS}</p>
                </div>
              </div>
            </div>

            {/* Server Info */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Server className="h-4 w-4 text-gray-400" />
                <h3 className="text-sm font-bold text-gray-300">Zusätzliche Informationen</h3>
              </div>
              <p className="text-xs text-gray-500">
                Für detaillierte Analysen (offene Ports, SSL-Zertifikate, WHOIS-Daten, Malware-Scans)
                ist eine API-Integration mit Diensten wie AbuseIPDB, VirusTotal oder Shodan erforderlich.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

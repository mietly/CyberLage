import { useState } from 'react'
import {
  Globe, Search, ShieldAlert, ShieldCheck, ShieldX, MapPin, Server,
  AlertTriangle, Info, Lock, Wifi, Activity, ExternalLink, Clock,
  AlertCircle, CheckCircle, XCircle, Loader2,
} from 'lucide-react'

const API_BASE = import.meta.env.PROD ? '/api/ip-check' : 'http://localhost:3006/api/ip-check'

function getReputationFromData(data) {
  const vt = data.virustotal
  const abuse = data.abuseipdb

  let score = 80 // Start neutral-gut
  let flags = []

  if (vt) {
    if (vt.malicious > 0) {
      score -= vt.malicious * 8
      flags.push(`${vt.malicious} Security-Engines stufen als bösartig ein`)
    }
    if (vt.suspicious > 0) {
      score -= vt.suspicious * 4
      flags.push(`${vt.suspicious} Security-Engines stufen als verdächtig ein`)
    }
    if (vt.reputation !== null && vt.reputation < 0) {
      score -= 10
    }
  }

  if (abuse) {
    if (abuse.abuseConfidenceScore > 50) {
      score -= abuse.abuseConfidenceScore * 0.5
      flags.push(`AbuseIPDB Confidence Score: ${abuse.abuseConfidenceScore}%`)
    }
    if (abuse.totalReports > 0) {
      score -= Math.min(abuse.totalReports * 2, 20)
      flags.push(`${abuse.totalReports} Missbrauchs-Meldungen bei AbuseIPDB`)
    }
    if (abuse.isTor) {
      flags.push('Tor Exit Node erkannt')
      score -= 15
    }
  }

  score = Math.max(0, Math.min(100, Math.round(score)))

  let label, color, bg
  if (score >= 70) {
    label = 'Sauber'
    color = 'text-green-400'
    bg = 'bg-green-500/10 border-green-500/30'
  } else if (score >= 40) {
    label = 'Verdächtig'
    color = 'text-yellow-400'
    bg = 'bg-yellow-500/10 border-yellow-500/30'
  } else {
    label = 'Bösartig'
    color = 'text-red-400'
    bg = 'bg-red-500/10 border-red-500/30'
  }

  return { score, label, color, bg, flags }
}

export default function IPChecker() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleCheck() {
    const trimmed = input.trim()
    if (!trimmed) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch(`${API_BASE}?query=${encodeURIComponent(trimmed)}`)
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.error || `HTTP ${res.status}`)
      }
      const data = await res.json()

      if (!data.abuseipdb && !data.virustotal) {
        throw new Error('Keine API-Daten verfügbar. Bitte API-Keys in Vercel konfigurieren.')
      }

      const reputation = getReputationFromData(data)
      setResult({ ...data, reputation })
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleCheck()
  }

  const vt = result?.virustotal
  const abuse = result?.abuseipdb
  const rep = result?.reputation

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="h-8 w-8 text-purple-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
              IP/Domain Reputation prüfen
            </h1>
          </div>
          <p className="text-gray-400">
            Echtzeitanalyse über AbuseIPDB &amp; VirusTotal – offene Ports, Blacklists, SSL, WHOIS und mehr.
          </p>
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
                placeholder="z.B. 8.8.8.8 oder example.com"
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
              />
            </div>
            <button
              onClick={handleCheck}
              disabled={!input.trim() || loading}
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0 flex items-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              {loading ? 'Prüfe...' : 'Prüfen'}
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Daten von AbuseIPDB (IP-Reputation) und VirusTotal (70+ Security-Engines)
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-red-400">Fehler</p>
              <p className="text-xs text-red-400/70 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Results */}
        {result && rep && (
          <div className="space-y-4">
            {/* Overall Reputation */}
            <div className={`border rounded-xl p-5 ${rep.bg}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {rep.score >= 70 ? (
                    <ShieldCheck className={`h-8 w-8 ${rep.color}`} />
                  ) : rep.score >= 40 ? (
                    <ShieldAlert className={`h-8 w-8 ${rep.color}`} />
                  ) : (
                    <ShieldX className={`h-8 w-8 ${rep.color}`} />
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-gray-200">{result.input}</h3>
                    <span className="text-xs text-gray-500">{result.type}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${rep.color}`}>
                    {rep.score}/100
                  </div>
                  <div className={`text-sm font-medium ${rep.color}`}>
                    {rep.label}
                  </div>
                </div>
              </div>

              {/* Score Bar */}
              <div className="h-2.5 bg-gray-800/50 rounded-full overflow-hidden mt-3">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    rep.score >= 70 ? 'bg-green-500' : rep.score >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${rep.score}%` }}
                />
              </div>

              {/* Flags */}
              {rep.flags.length > 0 && (
                <div className="mt-4 space-y-1">
                  {rep.flags.map((flag, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <AlertTriangle className="w-3 h-3 text-yellow-500 shrink-0" />
                      {flag}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* VirusTotal Analysis */}
            {vt && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-blue-400" />
                    <h3 className="text-sm font-bold text-gray-300">VirusTotal Analyse</h3>
                  </div>
                  <span className="text-xs text-gray-600">{vt.totalEngines} Engines geprüft</span>
                </div>

                {/* Engine Results Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center">
                    <XCircle className="w-5 h-5 text-red-400 mx-auto mb-1" />
                    <div className="text-xl font-bold text-red-400">{vt.malicious}</div>
                    <div className="text-[10px] text-red-400/70">Bösartig</div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                    <div className="text-xl font-bold text-yellow-400">{vt.suspicious}</div>
                    <div className="text-[10px] text-yellow-400/70">Verdächtig</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-1" />
                    <div className="text-xl font-bold text-green-400">{vt.harmless}</div>
                    <div className="text-[10px] text-green-400/70">Sauber</div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-center">
                    <Info className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                    <div className="text-xl font-bold text-gray-400">{vt.undetected}</div>
                    <div className="text-[10px] text-gray-500">Unerkannt</div>
                  </div>
                </div>

                {/* Additional VT Info */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {vt.asOwner && (
                    <div>
                      <span className="text-gray-500 text-xs">AS Owner</span>
                      <p className="text-gray-200">{vt.asOwner}</p>
                    </div>
                  )}
                  {vt.country && (
                    <div>
                      <span className="text-gray-500 text-xs">Land</span>
                      <p className="text-gray-200">{vt.country}</p>
                    </div>
                  )}
                  {vt.network && (
                    <div>
                      <span className="text-gray-500 text-xs">Netzwerk</span>
                      <p className="text-gray-200">{vt.network}</p>
                    </div>
                  )}
                  {vt.reputation !== null && vt.reputation !== undefined && (
                    <div>
                      <span className="text-gray-500 text-xs">VT Community Score</span>
                      <p className={`font-medium ${vt.reputation >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {vt.reputation}
                      </p>
                    </div>
                  )}
                  {vt.lastAnalysisDate && (
                    <div>
                      <span className="text-gray-500 text-xs">Letzte Analyse</span>
                      <p className="text-gray-200">
                        {new Date(vt.lastAnalysisDate).toLocaleDateString('de-DE', {
                          day: '2-digit', month: '2-digit', year: 'numeric',
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* AbuseIPDB Results */}
            {abuse && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldAlert className="h-4 w-4 text-orange-400" />
                  <h3 className="text-sm font-bold text-gray-300">AbuseIPDB Analyse</h3>
                </div>

                {/* Abuse Confidence */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Missbrauchs-Wahrscheinlichkeit</span>
                    <span className={
                      abuse.abuseConfidenceScore > 50 ? 'text-red-400 font-bold' :
                      abuse.abuseConfidenceScore > 20 ? 'text-yellow-400 font-bold' :
                      'text-green-400 font-bold'
                    }>
                      {abuse.abuseConfidenceScore}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        abuse.abuseConfidenceScore > 50 ? 'bg-red-500' :
                        abuse.abuseConfidenceScore > 20 ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${abuse.abuseConfidenceScore}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500 text-xs">Meldungen (90 Tage)</span>
                    <p className={`font-medium ${abuse.totalReports > 0 ? 'text-red-400' : 'text-green-400'}`}>
                      {abuse.totalReports} {abuse.totalReports === 1 ? 'Meldung' : 'Meldungen'}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs">Melder</span>
                    <p className="text-gray-200">{abuse.numDistinctUsers || 0} verschiedene</p>
                  </div>
                  {abuse.isp && (
                    <div>
                      <span className="text-gray-500 text-xs">ISP</span>
                      <p className="text-gray-200">{abuse.isp}</p>
                    </div>
                  )}
                  {abuse.domain && (
                    <div>
                      <span className="text-gray-500 text-xs">Domain</span>
                      <p className="text-gray-200">{abuse.domain}</p>
                    </div>
                  )}
                  {abuse.countryCode && (
                    <div>
                      <span className="text-gray-500 text-xs">Land</span>
                      <p className="text-gray-200">{abuse.countryCode}</p>
                    </div>
                  )}
                  {abuse.usageType && (
                    <div>
                      <span className="text-gray-500 text-xs">Nutzungstyp</span>
                      <p className="text-gray-200">{abuse.usageType}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-500 text-xs">Tor Exit Node</span>
                    <p className={abuse.isTor ? 'text-red-400 font-medium' : 'text-green-400'}>
                      {abuse.isTor ? 'Ja' : 'Nein'}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs">Whitelisted</span>
                    <p className={abuse.isWhitelisted ? 'text-green-400' : 'text-gray-400'}>
                      {abuse.isWhitelisted ? 'Ja' : 'Nein'}
                    </p>
                  </div>
                  {abuse.lastReportedAt && (
                    <div className="col-span-2">
                      <span className="text-gray-500 text-xs">Letzte Meldung</span>
                      <p className="text-gray-200">
                        {new Date(abuse.lastReportedAt).toLocaleDateString('de-DE', {
                          day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SSL Certificate (Domains) */}
            {vt?.lastHttpsCertificate && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="h-4 w-4 text-green-400" />
                  <h3 className="text-sm font-bold text-gray-300">SSL-Zertifikat</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {vt.lastHttpsCertificate.subject && (
                    <div>
                      <span className="text-gray-500 text-xs">Subject</span>
                      <p className="text-gray-200">{vt.lastHttpsCertificate.subject}</p>
                    </div>
                  )}
                  {vt.lastHttpsCertificate.issuer && (
                    <div>
                      <span className="text-gray-500 text-xs">Aussteller</span>
                      <p className="text-gray-200">{vt.lastHttpsCertificate.issuer}</p>
                    </div>
                  )}
                  {vt.lastHttpsCertificate.validFrom && (
                    <div>
                      <span className="text-gray-500 text-xs">Gültig ab</span>
                      <p className="text-gray-200">{vt.lastHttpsCertificate.validFrom}</p>
                    </div>
                  )}
                  {vt.lastHttpsCertificate.validTo && (
                    <div>
                      <span className="text-gray-500 text-xs">Gültig bis</span>
                      <p className="text-gray-200">{vt.lastHttpsCertificate.validTo}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* WHOIS Snippet */}
            {vt?.whois && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="h-4 w-4 text-gray-400" />
                  <h3 className="text-sm font-bold text-gray-300">WHOIS-Daten (Auszug)</h3>
                </div>
                <pre className="text-xs text-gray-400 bg-gray-800 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap font-mono">
                  {vt.whois}
                </pre>
              </div>
            )}

            {/* Source Attribution */}
            <div className="flex items-center justify-center gap-4 text-[10px] text-gray-600 pt-2">
              {abuse && <span>Daten von AbuseIPDB</span>}
              {vt && <span>Daten von VirusTotal</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

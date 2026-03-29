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
    color = 'text-[#5A9A6B]'
    bg = 'bg-[#5A9A6B]/10 border-[#5A9A6B]/30'
  } else if (score >= 40) {
    label = 'Verdächtig'
    color = 'text-[#C8A96E]'
    bg = 'bg-[#C8A96E]/10 border-[#C8A96E]/30'
  } else {
    label = 'Bösartig'
    color = 'text-[#D97B5A]'
    bg = 'bg-[#D97B5A]/10 border-[#D97B5A]/30'
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
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="h-8 w-8 text-[#C8A96E]" />
            <h1 className="text-3xl font-display text-[#C8A96E]">
              IP/Domain Reputation prüfen
            </h1>
          </div>
          <p className="text-[#7A7D83]">
            Echtzeitanalyse über AbuseIPDB &amp; VirusTotal -- offene Ports, Blacklists, SSL, WHOIS und mehr.
          </p>
        </div>

        {/* Input */}
        <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 mb-6">
          <label htmlFor="ip-input" className="block text-sm font-medium text-[#7A7D83] mb-2">
            IP-Adresse oder Domain eingeben
          </label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3E4148]" />
              <input
                id="ip-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="z.B. 8.8.8.8 oder example.com"
                className="w-full pl-10 pr-4 py-3 bg-[#0A0C0F] border border-[#1E2228] rounded-none text-sm text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E]/50 focus:ring-1 focus:ring-[#C8A96E]/30"
              />
            </div>
            <button
              onClick={handleCheck}
              disabled={!input.trim() || loading}
              className="px-6 py-3 rounded-none bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0 flex items-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              {loading ? 'Prüfe...' : 'Prüfen'}
            </button>
          </div>
          <p className="text-xs font-mono text-[#3E4148] mt-2">
            Daten von AbuseIPDB (IP-Reputation) und VirusTotal (70+ Security-Engines)
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-[#D97B5A]/10 border border-[#D97B5A]/30 rounded-sm p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[#D97B5A] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-mono text-[#D97B5A]">Fehler</p>
              <p className="text-xs text-[#D97B5A]/70 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Results */}
        {result && rep && (
          <div className="space-y-4">
            {/* Overall Reputation */}
            <div className={`border rounded-sm p-5 ${rep.bg}`}>
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
                    <h3 className="text-lg font-display text-[#E8E6E0]">{result.input}</h3>
                    <span className="text-xs font-mono text-[#3E4148]">{result.type}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-mono ${rep.color}`}>
                    {rep.score}/100
                  </div>
                  <div className={`text-sm font-mono ${rep.color}`}>
                    {rep.label}
                  </div>
                </div>
              </div>

              {/* Score Bar */}
              <div className="h-2.5 bg-[#0A0C0F]/50 overflow-hidden mt-3">
                <div
                  className={`h-full transition-all duration-700 ${
                    rep.score >= 70 ? 'bg-[#5A9A6B]' : rep.score >= 40 ? 'bg-[#C8A96E]' : 'bg-[#D97B5A]'
                  }`}
                  style={{ width: `${rep.score}%` }}
                />
              </div>

              {/* Flags */}
              {rep.flags.length > 0 && (
                <div className="mt-4 space-y-1">
                  {rep.flags.map((flag, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#7A7D83]">
                      <AlertTriangle className="w-3 h-3 text-[#D97B5A] shrink-0" />
                      {flag}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* VirusTotal Analysis */}
            {vt && (
              <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-[#C8A96E]" />
                    <h3 className="text-sm font-display text-[#7A7D83]">VirusTotal Analyse</h3>
                  </div>
                  <span className="text-xs font-mono text-[#3E4148]">{vt.totalEngines} Engines geprüft</span>
                </div>

                {/* Engine Results Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="bg-[#D97B5A]/10 border border-[#D97B5A]/20 rounded-none p-3 text-center">
                    <XCircle className="w-5 h-5 text-[#D97B5A] mx-auto mb-1" />
                    <div className="text-xl font-mono text-[#D97B5A]">{vt.malicious}</div>
                    <div className="text-[10px] font-mono text-[#D97B5A]/70">Bösartig</div>
                  </div>
                  <div className="bg-[#C8A96E]/10 border border-[#C8A96E]/20 rounded-none p-3 text-center">
                    <AlertTriangle className="w-5 h-5 text-[#C8A96E] mx-auto mb-1" />
                    <div className="text-xl font-mono text-[#C8A96E]">{vt.suspicious}</div>
                    <div className="text-[10px] font-mono text-[#C8A96E]/70">Verdächtig</div>
                  </div>
                  <div className="bg-[#5A9A6B]/10 border border-[#5A9A6B]/20 rounded-none p-3 text-center">
                    <CheckCircle className="w-5 h-5 text-[#5A9A6B] mx-auto mb-1" />
                    <div className="text-xl font-mono text-[#5A9A6B]">{vt.harmless}</div>
                    <div className="text-[10px] font-mono text-[#5A9A6B]/70">Sauber</div>
                  </div>
                  <div className="bg-[#0A0C0F] border border-[#1E2228] rounded-none p-3 text-center">
                    <Info className="w-5 h-5 text-[#3E4148] mx-auto mb-1" />
                    <div className="text-xl font-mono text-[#7A7D83]">{vt.undetected}</div>
                    <div className="text-[10px] font-mono text-[#3E4148]">Unerkannt</div>
                  </div>
                </div>

                {/* Additional VT Info */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {vt.asOwner && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">AS Owner</span>
                      <p className="text-[#E8E6E0]">{vt.asOwner}</p>
                    </div>
                  )}
                  {vt.country && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Land</span>
                      <p className="text-[#E8E6E0]">{vt.country}</p>
                    </div>
                  )}
                  {vt.network && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Netzwerk</span>
                      <p className="text-[#E8E6E0]">{vt.network}</p>
                    </div>
                  )}
                  {vt.reputation !== null && vt.reputation !== undefined && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">VT Community Score</span>
                      <p className={`font-mono ${vt.reputation >= 0 ? 'text-[#5A9A6B]' : 'text-[#D97B5A]'}`}>
                        {vt.reputation}
                      </p>
                    </div>
                  )}
                  {vt.lastAnalysisDate && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Letzte Analyse</span>
                      <p className="text-[#E8E6E0] font-mono">
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
              <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldAlert className="h-4 w-4 text-[#C8A96E]" />
                  <h3 className="text-sm font-display text-[#7A7D83]">AbuseIPDB Analyse</h3>
                </div>

                {/* Abuse Confidence */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#3E4148] font-mono">Missbrauchs-Wahrscheinlichkeit</span>
                    <span className={`font-mono ${
                      abuse.abuseConfidenceScore > 50 ? 'text-[#D97B5A]' :
                      abuse.abuseConfidenceScore > 20 ? 'text-[#C8A96E]' :
                      'text-[#5A9A6B]'
                    }`}>
                      {abuse.abuseConfidenceScore}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#0A0C0F] overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        abuse.abuseConfidenceScore > 50 ? 'bg-[#D97B5A]' :
                        abuse.abuseConfidenceScore > 20 ? 'bg-[#C8A96E]' :
                        'bg-[#5A9A6B]'
                      }`}
                      style={{ width: `${abuse.abuseConfidenceScore}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-[#3E4148] text-xs font-mono">Meldungen (90 Tage)</span>
                    <p className={`font-mono ${abuse.totalReports > 0 ? 'text-[#D97B5A]' : 'text-[#5A9A6B]'}`}>
                      {abuse.totalReports} {abuse.totalReports === 1 ? 'Meldung' : 'Meldungen'}
                    </p>
                  </div>
                  <div>
                    <span className="text-[#3E4148] text-xs font-mono">Melder</span>
                    <p className="text-[#E8E6E0]">{abuse.numDistinctUsers || 0} verschiedene</p>
                  </div>
                  {abuse.isp && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">ISP</span>
                      <p className="text-[#E8E6E0]">{abuse.isp}</p>
                    </div>
                  )}
                  {abuse.domain && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Domain</span>
                      <p className="text-[#E8E6E0]">{abuse.domain}</p>
                    </div>
                  )}
                  {abuse.countryCode && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Land</span>
                      <p className="text-[#E8E6E0]">{abuse.countryCode}</p>
                    </div>
                  )}
                  {abuse.usageType && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Nutzungstyp</span>
                      <p className="text-[#E8E6E0]">{abuse.usageType}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-[#3E4148] text-xs font-mono">Tor Exit Node</span>
                    <p className={`font-mono ${abuse.isTor ? 'text-[#D97B5A]' : 'text-[#5A9A6B]'}`}>
                      {abuse.isTor ? 'Ja' : 'Nein'}
                    </p>
                  </div>
                  <div>
                    <span className="text-[#3E4148] text-xs font-mono">Whitelisted</span>
                    <p className={`font-mono ${abuse.isWhitelisted ? 'text-[#5A9A6B]' : 'text-[#7A7D83]'}`}>
                      {abuse.isWhitelisted ? 'Ja' : 'Nein'}
                    </p>
                  </div>
                  {abuse.lastReportedAt && (
                    <div className="col-span-2">
                      <span className="text-[#3E4148] text-xs font-mono">Letzte Meldung</span>
                      <p className="text-[#E8E6E0] font-mono">
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
              <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="h-4 w-4 text-[#5A9A6B]" />
                  <h3 className="text-sm font-display text-[#7A7D83]">SSL-Zertifikat</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {vt.lastHttpsCertificate.subject && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Subject</span>
                      <p className="text-[#E8E6E0]">{vt.lastHttpsCertificate.subject}</p>
                    </div>
                  )}
                  {vt.lastHttpsCertificate.issuer && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Aussteller</span>
                      <p className="text-[#E8E6E0]">{vt.lastHttpsCertificate.issuer}</p>
                    </div>
                  )}
                  {vt.lastHttpsCertificate.validFrom && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Gültig ab</span>
                      <p className="text-[#E8E6E0] font-mono">{vt.lastHttpsCertificate.validFrom}</p>
                    </div>
                  )}
                  {vt.lastHttpsCertificate.validTo && (
                    <div>
                      <span className="text-[#3E4148] text-xs font-mono">Gültig bis</span>
                      <p className="text-[#E8E6E0] font-mono">{vt.lastHttpsCertificate.validTo}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* WHOIS Snippet */}
            {vt?.whois && (
              <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="h-4 w-4 text-[#7A7D83]" />
                  <h3 className="text-sm font-display text-[#7A7D83]">WHOIS-Daten (Auszug)</h3>
                </div>
                <pre className="text-xs text-[#7A7D83] bg-[#0A0C0F] rounded-none p-3 overflow-x-auto whitespace-pre-wrap font-mono">
                  {vt.whois}
                </pre>
              </div>
            )}

            {/* Source Attribution */}
            <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-[#3E4148] pt-2">
              {abuse && <span>Daten von AbuseIPDB</span>}
              {vt && <span>Daten von VirusTotal</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

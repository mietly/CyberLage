import { useState, useMemo, useEffect } from 'react'
import { Search, Filter, ArrowUpDown, CheckCircle, XCircle, ExternalLink, ShieldAlert, ChevronDown, Loader2, Rss, AlertTriangle, RefreshCw } from 'lucide-react'
import { demoCVEs } from '../data/demoData'

const vendors = ['Alle', 'Microsoft', 'Apple', 'Linux', 'Cisco', 'Fortinet', 'VMware', 'SAP', 'Adobe']
const patchOptions = ['Alle', 'Patch verfügbar', 'Kein Patch']

function cvssColor(score) {
  if (score >= 9) return 'text-[#D97B5A] border-[#D97B5A]/40'
  if (score >= 7) return 'text-[#C8A96E] border-[#C8A96E]/40'
  if (score >= 4) return 'text-[#C8A96E]/70 border-[#C8A96E]/30'
  return 'text-[#5A9A6B] border-[#5A9A6B]/40'
}

function cvssLabel(score) {
  if (score >= 9) return 'Kritisch'
  if (score >= 7) return 'Hoch'
  if (score >= 4) return 'Mittel'
  return 'Niedrig'
}

function bsiSeverityColor(severity) {
  if (severity === 'kritisch') return 'text-[#D97B5A] border-[#D97B5A]/40'
  if (severity === 'hoch') return 'text-[#D97B5A] border-[#D97B5A]/40'
  if (severity === 'niedrig') return 'text-[#5A9A6B] border-[#5A9A6B]/40'
  return 'text-[#C8A96E] border-[#C8A96E]/40'
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
  } catch {
    return dateStr
  }
}

export default function CVEPage() {
  const [search, setSearch] = useState('')
  const [vendor, setVendor] = useState('Alle')
  const [patchFilter, setPatchFilter] = useState('Alle')
  const [cvssMin, setCvssMin] = useState(0)
  const [cvssMax, setCvssMax] = useState(10)
  const [sortBy, setSortBy] = useState('cvss')
  const [sortDir, setSortDir] = useState('desc')
  const [activeTab, setActiveTab] = useState('live')

  // Live CVE Feed state
  const [liveCves, setLiveCves] = useState([])
  const [liveCvesLoading, setLiveCvesLoading] = useState(true)
  const [liveCvesError, setLiveCvesError] = useState(null)

  // BSI Feed state
  const [bsiWarnings, setBsiWarnings] = useState([])
  const [bsiLoading, setBsiLoading] = useState(true)
  const [bsiError, setBsiError] = useState(null)

  useEffect(() => {
    fetchLiveCves()
    fetchBsiWarnings()
  }, [])

  async function fetchLiveCves() {
    setLiveCvesLoading(true)
    setLiveCvesError(null)
    try {
      const res = await fetch('/api/cve-feed')
      if (!res.ok) throw new Error('API-Fehler')
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setLiveCves(data)
    } catch (err) {
      setLiveCvesError(err.message)
    } finally {
      setLiveCvesLoading(false)
    }
  }

  async function fetchBsiWarnings() {
    setBsiLoading(true)
    setBsiError(null)
    try {
      const res = await fetch('/api/bsi-feed')
      if (!res.ok) throw new Error('API-Fehler')
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setBsiWarnings(data)
    } catch (err) {
      setBsiError(err.message)
    } finally {
      setBsiLoading(false)
    }
  }

  const filtered = useMemo(() => {
    let result = [...demoCVEs]

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (c) =>
          c.cve_id.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.affected_software.toLowerCase().includes(q)
      )
    }

    if (vendor !== 'Alle') {
      result = result.filter((c) => c.vendor === vendor)
    }

    if (patchFilter === 'Patch verfügbar') {
      result = result.filter((c) => c.patch_available)
    } else if (patchFilter === 'Kein Patch') {
      result = result.filter((c) => !c.patch_available)
    }

    result = result.filter((c) => c.cvss_score >= cvssMin && c.cvss_score <= cvssMax)

    result.sort((a, b) => {
      if (sortBy === 'cvss') {
        return sortDir === 'desc' ? b.cvss_score - a.cvss_score : a.cvss_score - b.cvss_score
      }
      return sortDir === 'desc'
        ? new Date(b.published_at) - new Date(a.published_at)
        : new Date(a.published_at) - new Date(b.published_at)
    })

    return result
  }, [search, vendor, patchFilter, cvssMin, cvssMax, sortBy, sortDir])

  const critical = filtered.filter((c) => c.cvss_score >= 9)

  function toggleSort(field) {
    if (sortBy === field) {
      setSortDir((d) => (d === 'desc' ? 'asc' : 'desc'))
    } else {
      setSortBy(field)
      setSortDir('desc')
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShieldAlert className="h-8 w-8 text-[#C8A96E]" />
            <h1 className="font-display text-3xl text-[#E8E6E0]">
              Schwachstellen-Datenbank
            </h1>
          </div>
          <p className="text-[#7A7D83]">
            Aktuelle CVEs und Sicherheitslücken im Überblick - fokussiert auf den DACH-Raum
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-0 mb-6 border-b border-[#1E2228] w-fit">
          <button
            onClick={() => setActiveTab('live')}
            className={`flex items-center gap-2 px-4 py-2 font-mono uppercase tracking-wider text-xs transition-colors ${
              activeTab === 'live'
                ? 'text-[#C8A96E] border-b-2 border-[#C8A96E]'
                : 'text-[#7A7D83] hover:text-[#E8E6E0]'
            }`}
          >
            <Rss className="h-4 w-4" />
            Live CVE Feed
          </button>
          <button
            onClick={() => setActiveTab('bsi')}
            className={`flex items-center gap-2 px-4 py-2 font-mono uppercase tracking-wider text-xs transition-colors ${
              activeTab === 'bsi'
                ? 'text-[#C8A96E] border-b-2 border-[#C8A96E]'
                : 'text-[#7A7D83] hover:text-[#E8E6E0]'
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            BSI Warnmeldungen
          </button>
          <button
            onClick={() => setActiveTab('db')}
            className={`flex items-center gap-2 px-4 py-2 font-mono uppercase tracking-wider text-xs transition-colors ${
              activeTab === 'db'
                ? 'text-[#C8A96E] border-b-2 border-[#C8A96E]'
                : 'text-[#7A7D83] hover:text-[#E8E6E0]'
            }`}
          >
            <ShieldAlert className="h-4 w-4" />
            DACH-Datenbank
          </button>
        </div>

        {/* Live CVE Feed Tab */}
        {activeTab === 'live' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl text-[#E8E6E0] flex items-center gap-2">
                <Rss className="h-5 w-5 text-[#C8A96E]" />
                Kritische CVEs (NVD Live-Daten)
              </h2>
              <button
                onClick={fetchLiveCves}
                disabled={liveCvesLoading}
                className="flex items-center gap-2 px-3 py-1.5 rounded-none text-xs font-mono border border-[#1E2228] text-[#7A7D83] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${liveCvesLoading ? 'animate-spin' : ''}`} />
                Aktualisieren
              </button>
            </div>

            {liveCvesLoading && (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 text-[#C8A96E] animate-spin" />
                <span className="ml-3 text-[#7A7D83] font-mono text-sm">Lade Live-CVE-Daten...</span>
              </div>
            )}

            {liveCvesError && !liveCvesLoading && (
              <div className="border border-[#C8A96E]/30 bg-[#0F1215] rounded-sm p-4 mb-4">
                <p className="text-sm text-[#C8A96E] font-mono">
                  Live-Daten konnten nicht geladen werden: {liveCvesError}. Statische Daten werden angezeigt.
                </p>
              </div>
            )}

            {!liveCvesLoading && !liveCvesError && liveCves.length === 0 && (
              <div className="text-center py-16 text-[#3E4148] font-mono">
                Keine Live-CVE-Daten verfügbar.
              </div>
            )}

            {/* Show live CVEs or fallback to static data on error */}
            {!liveCvesLoading && (
              <div className="space-y-0">
                {(liveCvesError ? demoCVEs.filter(c => c.cvss_score >= 9).slice(0, 10) : liveCves).map((cve, idx) => {
                  const isLive = !liveCvesError
                  const id = isLive ? cve.cveId : cve.cve_id
                  const score = isLive ? cve.cvssScore : cve.cvss_score
                  const desc = cve.description
                  const date = isLive ? formatDate(cve.published) : cve.published_at
                  const refs = isLive ? cve.references : []

                  return (
                    <div
                      key={id || idx}
                      className="border-b border-[#1E2228] py-5 first:pt-0"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="font-mono font-bold text-[#C8A96E] text-base">{id}</span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-mono font-bold border ${cvssColor(score)}`}>
                              CVSS {score} - {cvssLabel(score)}
                            </span>
                            <span className="text-xs font-mono text-[#3E4148]">{date}</span>
                            {isLive && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-mono text-[#5A9A6B] border border-[#5A9A6B]/30">
                                Live
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[#7A7D83] mb-3">{desc}</p>
                          {isLive && refs && refs.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {refs.map((ref, i) => (
                                <a
                                  key={i}
                                  href={ref.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 px-2.5 py-1 border border-[#1E2228] rounded-none text-xs text-[#C8A96E] hover:border-[#C8A96E] transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  {ref.source || 'Quelle'}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* BSI Warnmeldungen Tab */}
        {activeTab === 'bsi' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl text-[#E8E6E0] flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-[#C8A96E]" />
                BSI CERT-Bund Warnmeldungen
              </h2>
              <button
                onClick={fetchBsiWarnings}
                disabled={bsiLoading}
                className="flex items-center gap-2 px-3 py-1.5 rounded-none text-xs font-mono border border-[#1E2228] text-[#7A7D83] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${bsiLoading ? 'animate-spin' : ''}`} />
                Aktualisieren
              </button>
            </div>

            {bsiLoading && (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 text-[#C8A96E] animate-spin" />
                <span className="ml-3 text-[#7A7D83] font-mono text-sm">Lade BSI-Warnmeldungen...</span>
              </div>
            )}

            {bsiError && !bsiLoading && (
              <div className="border border-[#C8A96E]/30 bg-[#0F1215] rounded-sm p-4">
                <p className="text-sm text-[#C8A96E] font-mono">
                  BSI-Warnmeldungen konnten nicht geladen werden: {bsiError}
                </p>
              </div>
            )}

            {!bsiLoading && !bsiError && bsiWarnings.length === 0 && (
              <div className="text-center py-16 text-[#3E4148] font-mono">
                Keine BSI-Warnmeldungen verfügbar.
              </div>
            )}

            {!bsiLoading && !bsiError && bsiWarnings.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bsiWarnings.map((warning, idx) => (
                  <a
                    key={idx}
                    href={warning.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#1E2228] bg-[#0F1215] rounded-sm p-5 hover:border-[#C8A96E]/50 transition-colors group block"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-sm font-display text-[#E8E6E0] group-hover:text-[#C8A96E] transition-colors leading-snug flex-1">
                        {warning.title}
                      </h3>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-mono font-bold border shrink-0 ${bsiSeverityColor(warning.severity)}`}>
                        {warning.severity.charAt(0).toUpperCase() + warning.severity.slice(1)}
                      </span>
                    </div>
                    {warning.description && (
                      <p className="text-xs text-[#7A7D83] mb-3 leading-relaxed">{warning.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#3E4148]">
                        {warning.pubDate ? formatDate(warning.pubDate) : ''}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#C8A96E] group-hover:text-[#C8A96E]/80 transition-colors">
                        Details
                        <ExternalLink className="h-3 w-3" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DACH Database Tab (original content) */}
        {activeTab === 'db' && (
          <>
            {/* Filter Bar */}
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-4 mb-6">
              <div className="flex items-center gap-2 mb-3 text-sm text-[#7A7D83]">
                <Filter className="h-4 w-4" />
                <span className="font-mono uppercase tracking-wider text-xs">Filter</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative sm:col-span-2 lg:col-span-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3E4148]" />
                  <input
                    type="text"
                    placeholder="CVE-ID, Software, Beschreibung..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#0A0C0F] border border-[#1E2228] rounded-none text-sm font-mono text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E]/50"
                  />
                </div>

                <div className="relative">
                  <select
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    className="w-full appearance-none px-4 py-2.5 bg-[#0A0C0F] border border-[#1E2228] rounded-none text-sm font-mono text-[#E8E6E0] focus:outline-none focus:border-[#C8A96E]/50 pr-10"
                  >
                    {vendors.map((v) => (
                      <option key={v} value={v}>{v === 'Alle' ? 'Alle Hersteller' : v}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3E4148] pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={patchFilter}
                    onChange={(e) => setPatchFilter(e.target.value)}
                    className="w-full appearance-none px-4 py-2.5 bg-[#0A0C0F] border border-[#1E2228] rounded-none text-sm font-mono text-[#E8E6E0] focus:outline-none focus:border-[#C8A96E]/50 pr-10"
                  >
                    {patchOptions.map((p) => (
                      <option key={p} value={p}>{p === 'Alle' ? 'Patch-Status: Alle' : p}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3E4148] pointer-events-none" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#3E4148] whitespace-nowrap">CVSS:</span>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    step={0.1}
                    value={cvssMin}
                    onChange={(e) => setCvssMin(parseFloat(e.target.value) || 0)}
                    className="w-20 px-2 py-2.5 bg-[#0A0C0F] border border-[#1E2228] rounded-none text-sm font-mono text-[#E8E6E0] text-center focus:outline-none focus:border-[#C8A96E]/50"
                  />
                  <span className="text-[#3E4148]">&ndash;</span>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    step={0.1}
                    value={cvssMax}
                    onChange={(e) => setCvssMax(parseFloat(e.target.value) || 10)}
                    className="w-20 px-2 py-2.5 bg-[#0A0C0F] border border-[#1E2228] rounded-none text-sm font-mono text-[#E8E6E0] text-center focus:outline-none focus:border-[#C8A96E]/50"
                  />
                </div>
              </div>
            </div>

            {/* Critical Banner */}
            {critical.length > 0 && (
              <div className="mb-6 border-l-2 border-[#D97B5A] bg-[#0F1215] rounded-sm p-4">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="h-5 w-5 text-[#D97B5A]" />
                  <h2 className="font-display text-lg text-[#D97B5A]">
                    Kritische Schwachstellen (CVSS 9.0+)
                  </h2>
                  <span className="ml-auto text-sm font-mono text-[#D97B5A]/70">{critical.length} gefunden</span>
                </div>
                <div className="grid gap-3">
                  {critical.map((cve) => (
                    <div
                      key={cve.cve_id}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border border-[#1E2228] rounded-sm px-4 py-3"
                    >
                      <span className="font-mono font-bold text-[#C8A96E] text-sm shrink-0">{cve.cve_id}</span>
                      <span className="text-sm text-[#7A7D83] flex-1">{cve.description}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-mono font-bold border text-[#D97B5A] border-[#D97B5A]/40 shrink-0">
                        CVSS {cve.cvss_score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sort Controls */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono text-[#3E4148]">{filtered.length} Ergebnisse</span>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => toggleSort('cvss')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-none text-xs font-mono uppercase tracking-wider transition-colors ${
                    sortBy === 'cvss' ? 'text-[#C8A96E] border border-[#C8A96E]' : 'border border-[#1E2228] text-[#7A7D83] hover:text-[#E8E6E0]'
                  }`}
                >
                  <ArrowUpDown className="h-3 w-3" />
                  CVSS Score
                </button>
                <button
                  onClick={() => toggleSort('date')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-none text-xs font-mono uppercase tracking-wider transition-colors ${
                    sortBy === 'date' ? 'text-[#C8A96E] border border-[#C8A96E]' : 'border border-[#1E2228] text-[#7A7D83] hover:text-[#E8E6E0]'
                  }`}
                >
                  <ArrowUpDown className="h-3 w-3" />
                  Datum
                </button>
              </div>
            </div>

            {/* CVE Table / Cards */}
            <div className="space-y-0">
              {filtered.length === 0 && (
                <div className="text-center py-16 text-[#3E4148] font-mono">
                  Keine Schwachstellen gefunden. Passe deine Filter an.
                </div>
              )}

              {filtered.map((cve) => (
                <div
                  key={cve.cve_id}
                  className="border-b border-[#1E2228] py-5"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="font-mono font-bold text-[#C8A96E] text-base">{cve.cve_id}</span>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-mono font-bold border ${cvssColor(cve.cvss_score)}`}
                        >
                          CVSS {cve.cvss_score} - {cvssLabel(cve.cvss_score)}
                        </span>
                        <span className="text-xs font-mono text-[#3E4148]">{cve.published_at}</span>
                      </div>

                      <p className="text-sm text-[#7A7D83] mb-3">{cve.description}</p>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#7A7D83]">
                        <span>
                          <span className="text-[#3E4148]">Software:</span>{' '}
                          <span className="text-[#7A7D83]">{cve.affected_software}</span>
                        </span>
                        <span>
                          <span className="text-[#3E4148]">Hersteller:</span>{' '}
                          <span className="text-[#7A7D83]">{cve.vendor}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 shrink-0">
                      <div className="flex items-center gap-2">
                        {cve.patch_available ? (
                          <span className="flex items-center gap-1 text-xs font-mono text-[#5A9A6B]">
                            <CheckCircle className="h-4 w-4" />
                            Patch verfügbar
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-mono text-[#D97B5A]">
                            <XCircle className="h-4 w-4" />
                            Kein Patch
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {cve.workaround ? (
                          <span className="flex items-center gap-1 text-xs font-mono text-[#5A9A6B]">
                            <CheckCircle className="h-4 w-4" />
                            Workaround
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-mono text-[#D97B5A]">
                            <XCircle className="h-4 w-4" />
                            Kein Workaround
                          </span>
                        )}
                      </div>
                      <a
                        href={cve.advisory_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 border border-[#1E2228] rounded-none text-xs font-mono text-[#C8A96E] hover:border-[#C8A96E] transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Advisory
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

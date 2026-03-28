import { useState, useMemo, useEffect } from 'react'
import { Search, Filter, ArrowUpDown, CheckCircle, XCircle, ExternalLink, ShieldAlert, ChevronDown, Loader2, Rss, AlertTriangle, RefreshCw } from 'lucide-react'
import { demoCVEs } from '../data/demoData'

const vendors = ['Alle', 'Microsoft', 'Apple', 'Linux', 'Cisco', 'Fortinet', 'VMware', 'SAP', 'Adobe']
const patchOptions = ['Alle', 'Patch verfügbar', 'Kein Patch']

function cvssColor(score) {
  if (score >= 9) return 'bg-red-500/20 text-red-400 border-red-500/40'
  if (score >= 7) return 'bg-orange-500/20 text-orange-400 border-orange-500/40'
  if (score >= 4) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40'
  return 'bg-green-500/20 text-green-400 border-green-500/40'
}

function cvssLabel(score) {
  if (score >= 9) return 'Kritisch'
  if (score >= 7) return 'Hoch'
  if (score >= 4) return 'Mittel'
  return 'Niedrig'
}

function bsiSeverityColor(severity) {
  if (severity === 'kritisch') return 'bg-red-500/20 text-red-400 border-red-500/40'
  if (severity === 'hoch') return 'bg-orange-500/20 text-orange-400 border-orange-500/40'
  if (severity === 'niedrig') return 'bg-green-500/20 text-green-400 border-green-500/40'
  return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40'
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
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShieldAlert className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Schwachstellen-Datenbank
            </h1>
          </div>
          <p className="text-gray-400">
            Aktuelle CVEs und Sicherheitslücken im Überblick - fokussiert auf den DACH-Raum
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-6 bg-gray-900 rounded-xl border border-gray-800 p-1 w-fit">
          <button
            onClick={() => setActiveTab('live')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'live'
                ? 'bg-red-500/15 text-red-400'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Rss className="h-4 w-4" />
            Live CVE Feed
          </button>
          <button
            onClick={() => setActiveTab('bsi')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'bsi'
                ? 'bg-blue-500/15 text-blue-400'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            BSI Warnmeldungen
          </button>
          <button
            onClick={() => setActiveTab('db')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'db'
                ? 'bg-orange-500/15 text-orange-400'
                : 'text-gray-400 hover:text-gray-200'
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
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Rss className="h-5 w-5 text-red-400" />
                Kritische CVEs (NVD Live-Daten)
              </h2>
              <button
                onClick={fetchLiveCves}
                disabled={liveCvesLoading}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${liveCvesLoading ? 'animate-spin' : ''}`} />
                Aktualisieren
              </button>
            </div>

            {liveCvesLoading && (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 text-red-400 animate-spin" />
                <span className="ml-3 text-gray-400">Lade Live-CVE-Daten...</span>
              </div>
            )}

            {liveCvesError && !liveCvesLoading && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-4">
                <p className="text-sm text-yellow-400">
                  Live-Daten konnten nicht geladen werden: {liveCvesError}. Statische Daten werden angezeigt.
                </p>
              </div>
            )}

            {!liveCvesLoading && !liveCvesError && liveCves.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                Keine Live-CVE-Daten verfügbar.
              </div>
            )}

            {/* Show live CVEs or fallback to static data on error */}
            {!liveCvesLoading && (
              <div className="space-y-3">
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
                      className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="font-mono font-bold text-white text-base">{id}</span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${cvssColor(score)}`}>
                              CVSS {score} - {cvssLabel(score)}
                            </span>
                            <span className="text-xs text-gray-500">{date}</span>
                            {isLive && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/15 text-green-400 border border-green-500/30">
                                Live
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-300 mb-3">{desc}</p>
                          {isLive && refs && refs.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {refs.map((ref, i) => (
                                <a
                                  key={i}
                                  href={ref.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 px-2.5 py-1 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs text-gray-400 hover:text-gray-200 transition-colors"
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
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-blue-400" />
                BSI CERT-Bund Warnmeldungen
              </h2>
              <button
                onClick={fetchBsiWarnings}
                disabled={bsiLoading}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${bsiLoading ? 'animate-spin' : ''}`} />
                Aktualisieren
              </button>
            </div>

            {bsiLoading && (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 text-blue-400 animate-spin" />
                <span className="ml-3 text-gray-400">Lade BSI-Warnmeldungen...</span>
              </div>
            )}

            {bsiError && !bsiLoading && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <p className="text-sm text-yellow-400">
                  BSI-Warnmeldungen konnten nicht geladen werden: {bsiError}
                </p>
              </div>
            )}

            {!bsiLoading && !bsiError && bsiWarnings.length === 0 && (
              <div className="text-center py-16 text-gray-500">
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
                    className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors group block"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-snug flex-1">
                        {warning.title}
                      </h3>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold border shrink-0 ${bsiSeverityColor(warning.severity)}`}>
                        {warning.severity.charAt(0).toUpperCase() + warning.severity.slice(1)}
                      </span>
                    </div>
                    {warning.description && (
                      <p className="text-xs text-gray-400 mb-3 leading-relaxed">{warning.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {warning.pubDate ? formatDate(warning.pubDate) : ''}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
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
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-6">
              <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                <Filter className="h-4 w-4" />
                <span className="font-medium">Filter</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative sm:col-span-2 lg:col-span-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="CVE-ID, Software, Beschreibung..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
                  />
                </div>

                <div className="relative">
                  <select
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    className="w-full appearance-none px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 pr-10"
                  >
                    {vendors.map((v) => (
                      <option key={v} value={v}>{v === 'Alle' ? 'Alle Hersteller' : v}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={patchFilter}
                    onChange={(e) => setPatchFilter(e.target.value)}
                    className="w-full appearance-none px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 pr-10"
                  >
                    {patchOptions.map((p) => (
                      <option key={p} value={p}>{p === 'Alle' ? 'Patch-Status: Alle' : p}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 whitespace-nowrap">CVSS:</span>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    step={0.1}
                    value={cvssMin}
                    onChange={(e) => setCvssMin(parseFloat(e.target.value) || 0)}
                    className="w-20 px-2 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 text-center focus:outline-none focus:border-red-500/50"
                  />
                  <span className="text-gray-600">&ndash;</span>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    step={0.1}
                    value={cvssMax}
                    onChange={(e) => setCvssMax(parseFloat(e.target.value) || 10)}
                    className="w-20 px-2 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 text-center focus:outline-none focus:border-red-500/50"
                  />
                </div>
              </div>
            </div>

            {/* Critical Banner */}
            {critical.length > 0 && (
              <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="h-5 w-5 text-red-400" />
                  <h2 className="text-lg font-bold text-red-400">
                    Kritische Schwachstellen (CVSS 9.0+)
                  </h2>
                  <span className="ml-auto text-sm text-red-400/70">{critical.length} gefunden</span>
                </div>
                <div className="grid gap-3">
                  {critical.map((cve) => (
                    <div
                      key={cve.cve_id}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-red-500/5 border border-red-500/20 rounded-lg px-4 py-3"
                    >
                      <span className="font-mono font-bold text-red-300 text-sm shrink-0">{cve.cve_id}</span>
                      <span className="text-sm text-gray-300 flex-1">{cve.description}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border bg-red-500/20 text-red-400 border-red-500/40 shrink-0">
                        CVSS {cve.cvss_score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sort Controls */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-500">{filtered.length} Ergebnisse</span>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => toggleSort('cvss')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    sortBy === 'cvss' ? 'bg-red-500/15 text-red-400' : 'bg-gray-800 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <ArrowUpDown className="h-3 w-3" />
                  CVSS Score
                </button>
                <button
                  onClick={() => toggleSort('date')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    sortBy === 'date' ? 'bg-red-500/15 text-red-400' : 'bg-gray-800 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <ArrowUpDown className="h-3 w-3" />
                  Datum
                </button>
              </div>
            </div>

            {/* CVE Table / Cards */}
            <div className="space-y-3">
              {filtered.length === 0 && (
                <div className="text-center py-16 text-gray-500">
                  Keine Schwachstellen gefunden. Passe deine Filter an.
                </div>
              )}

              {filtered.map((cve) => (
                <div
                  key={cve.cve_id}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="font-mono font-bold text-white text-base">{cve.cve_id}</span>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${cvssColor(cve.cvss_score)}`}
                        >
                          CVSS {cve.cvss_score} - {cvssLabel(cve.cvss_score)}
                        </span>
                        <span className="text-xs text-gray-500">{cve.published_at}</span>
                      </div>

                      <p className="text-sm text-gray-300 mb-3">{cve.description}</p>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
                        <span>
                          <span className="text-gray-500">Software:</span>{' '}
                          <span className="text-gray-300">{cve.affected_software}</span>
                        </span>
                        <span>
                          <span className="text-gray-500">Hersteller:</span>{' '}
                          <span className="text-gray-300">{cve.vendor}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 shrink-0">
                      <div className="flex items-center gap-2">
                        {cve.patch_available ? (
                          <span className="flex items-center gap-1 text-xs text-green-400">
                            <CheckCircle className="h-4 w-4" />
                            Patch verfügbar
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs text-red-400">
                            <XCircle className="h-4 w-4" />
                            Kein Patch
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {cve.workaround ? (
                          <span className="flex items-center gap-1 text-xs text-green-400">
                            <CheckCircle className="h-4 w-4" />
                            Workaround
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs text-red-400">
                            <XCircle className="h-4 w-4" />
                            Kein Workaround
                          </span>
                        )}
                      </div>
                      <a
                        href={cve.advisory_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs text-gray-300 transition-colors"
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

import { useState } from 'react'
import { ShieldAlert, Search, Loader2, CheckCircle, XCircle, AlertTriangle, ExternalLink, Lock, Mail } from 'lucide-react'

export default function BreachChecker() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  async function handleCheck(e) {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch(`/api/breach-check?email=${encodeURIComponent(email)}`)
      if (res.status === 429) {
        setError('Zu viele Anfragen. Bitte warte eine Minute und versuche es erneut.')
        return
      }
      if (!res.ok) throw new Error('API-Fehler')
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setResult(data)
    } catch (err) {
      setError(err.message || 'Fehler bei der Prüfung. Bitte versuche es später erneut.')
    } finally {
      setLoading(false)
    }
  }

  const breachCount = result?.breaches?.length || 0
  const isClean = result && breachCount === 0
  const isBreached = result && breachCount > 0

  function formatNumber(num) {
    if (!num) return '0'
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)} Mio.`
    if (num >= 1_000) return `${(num / 1_000).toFixed(0)}.000`
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShieldAlert className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Breach Checker
            </h1>
          </div>
          <p className="text-gray-400">
            Wurde meine E-Mail gehackt? Prüfe, ob deine E-Mail-Adresse in bekannten Datenlecks aufgetaucht ist.
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleCheck} className="mb-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-gray-400" />
              <h2 className="text-lg font-bold text-white">E-Mail-Adresse prüfen</h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="email"
                  placeholder="deine@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !email.includes('@')}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-red-600 hover:bg-red-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Prüfe...
                  </>
                ) : (
                  'Jetzt prüfen'
                )}
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
              <Lock className="h-3 w-3" />
              Deine E-Mail wird nur für die Prüfung verwendet und nicht gespeichert.
            </p>
          </div>
        </form>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Demo Notice */}
        {result?.demo && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
            <p className="text-sm text-yellow-400">
              <AlertTriangle className="h-4 w-4 inline mr-1" />
              Demo-Modus: Dies sind Beispieldaten. Im Produktivbetrieb werden echte Breach-Daten von HaveIBeenPwned abgerufen.
            </p>
          </div>
        )}

        {/* Clean Result */}
        {isClean && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="h-8 w-8 text-green-400" />
              <div>
                <h2 className="text-xl font-bold text-green-400">Keine Datenlecks gefunden</h2>
                <p className="text-sm text-gray-400">Deine E-Mail-Adresse wurde in keinem bekannten Datenleck gefunden.</p>
              </div>
            </div>
            <div className="mt-4 bg-green-500/5 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-sm font-bold text-green-400 mb-2">Trotzdem sicher bleiben:</h3>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>- Verwende für jeden Dienst ein einzigartiges Passwort</li>
                <li>- Aktiviere Multi-Faktor-Authentifizierung wo möglich</li>
                <li>- Nutze einen Passwort-Manager</li>
                <li>- Prüfe regelmäßig, ob neue Leaks aufgetaucht sind</li>
              </ul>
            </div>
          </div>
        )}

        {/* Breached Result */}
        {isBreached && (
          <>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <XCircle className="h-8 w-8 text-red-400" />
                <div>
                  <h2 className="text-xl font-bold text-red-400">
                    {breachCount} {breachCount === 1 ? 'Datenleck' : 'Datenlecks'} gefunden
                  </h2>
                  <p className="text-sm text-gray-400">
                    Deine E-Mail-Adresse wurde in {breachCount} bekannten Datenlecks gefunden.
                  </p>
                </div>
              </div>
            </div>

            {/* Breach Details */}
            <div className="space-y-4 mb-6">
              {result.breaches.map((breach, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-white">{breach.Name}</h3>
                      <span className="text-xs text-gray-500">
                        Datum: {breach.BreachDate || 'Unbekannt'}
                      </span>
                    </div>
                    {breach.PwnCount && (
                      <span className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 px-2.5 py-1 rounded-full shrink-0">
                        {formatNumber(breach.PwnCount)} Betroffene
                      </span>
                    )}
                  </div>

                  {breach.Description && (
                    <p
                      className="text-xs text-gray-400 mb-3 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: breach.Description }}
                    />
                  )}

                  {breach.DataClasses && breach.DataClasses.length > 0 && (
                    <div>
                      <span className="text-xs text-gray-500 font-medium">Kompromittierte Daten:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {breach.DataClasses.map((dc, i) => (
                          <span
                            key={i}
                            className="inline-flex px-2 py-0.5 rounded-full text-xs bg-red-500/10 text-red-400 border border-red-500/20"
                          >
                            {dc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                Sofort-Maßnahmen
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-red-400">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Passwörter sofort ändern</h4>
                    <p className="text-xs text-gray-400">
                      Ändere das Passwort für jeden betroffenen Dienst. Wenn du dasselbe Passwort auch
                      anderswo verwendest, ändere es dort ebenfalls.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-orange-400">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Multi-Faktor-Authentifizierung aktivieren</h4>
                    <p className="text-xs text-gray-400">
                      Aktiviere 2FA/MFA für alle wichtigen Konten. Selbst wenn ein Passwort kompromittiert
                      wurde, schützt MFA vor unbefugtem Zugriff.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-yellow-400">3</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Passwort-Manager verwenden</h4>
                    <p className="text-xs text-gray-400">
                      Nutze einen Passwort-Manager, um für jeden Dienst ein einzigartiges, starkes
                      Passwort zu generieren. So begrenzt du den Schaden bei zukünftigen Leaks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-400">4</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Kontobewegungen überwachen</h4>
                    <p className="text-xs text-gray-400">
                      Prüfe deine Konten auf verdächtige Aktivitäten. Achte auf unbekannte Logins,
                      Passwortänderungen oder neue Geräte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* CTA */}
        {result && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Umfassende Sicherheitsanalyse</h3>
            <p className="text-sm text-gray-400 mb-4">
              Der Breach Checker prüft nur E-Mail-Adressen. Für eine vollständige Analyse deiner
              Unternehmens-IT-Sicherheit empfehlen wir ein professionelles Security Audit.
            </p>
            <a
              href="https://corelead.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-medium text-sm transition-all"
            >
              Professionelles Security Audit anfragen
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

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
    setLoading(true); setError(null); setResult(null)
    try {
      const res = await fetch(`/api/breach-check?email=${encodeURIComponent(email)}`)
      if (res.status === 429) { setError('Zu viele Anfragen. Bitte warte eine Minute und versuche es erneut.'); return }
      if (!res.ok) throw new Error('API-Fehler')
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setResult(data)
    } catch (err) { setError(err.message || 'Fehler bei der Prüfung. Bitte versuche es später erneut.') }
    finally { setLoading(false) }
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
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShieldAlert className="h-8 w-8 text-[#C8A96E]" />
            <h1 className="text-3xl font-display text-[#C8A96E]">Breach Checker</h1>
          </div>
          <p className="text-[#7A7D83]">Wurde meine E-Mail gehackt? Prüfe, ob deine E-Mail-Adresse in bekannten Datenlecks aufgetaucht ist.</p>
        </div>

        <form onSubmit={handleCheck} className="mb-6">
          <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-[#7A7D83]" />
              <h2 className="text-lg font-display text-[#E8E6E0]">E-Mail-Adresse prüfen</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3E4148]" />
                <input type="email" placeholder="deine@email.de" value={email} onChange={(e) => setEmail(e.target.value)} required
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0C0F] border border-[#1E2228] rounded-none text-sm text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E]/50 focus:ring-1 focus:ring-[#C8A96E]/30" />
              </div>
              <button type="submit" disabled={loading || !email.includes('@')}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-none text-sm font-mono uppercase tracking-wider bg-[#C8A96E] text-[#0A0C0F] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0">
                {loading ? (<><Loader2 className="h-4 w-4 animate-spin" />Prüfe...</>) : 'Jetzt prüfen'}
              </button>
            </div>
            <p className="text-xs font-mono text-[#3E4148] mt-3 flex items-center gap-1"><Lock className="h-3 w-3" />Deine E-Mail wird nur für die Prüfung verwendet und nicht gespeichert.</p>
          </div>
        </form>

        {error && (<div className="bg-[#D97B5A]/10 border border-[#D97B5A]/30 rounded-sm p-4 mb-6"><p className="text-sm font-mono text-[#D97B5A]">{error}</p></div>)}

        {result?.demo && (
          <div className="bg-[#C8A96E]/10 border border-[#C8A96E]/30 rounded-sm p-4 mb-6">
            <p className="text-sm text-[#C8A96E]"><AlertTriangle className="h-4 w-4 inline mr-1" />Demo-Modus: Dies sind Beispieldaten. Im Produktivbetrieb werden echte Breach-Daten von HaveIBeenPwned abgerufen.</p>
          </div>
        )}

        {isClean && (
          <div className="bg-[#5A9A6B]/10 border border-[#5A9A6B]/30 rounded-sm p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="h-8 w-8 text-[#5A9A6B]" />
              <div>
                <h2 className="text-xl font-display text-[#5A9A6B]">Keine Datenlecks gefunden</h2>
                <p className="text-sm text-[#7A7D83]">Deine E-Mail-Adresse wurde in keinem bekannten Datenleck gefunden.</p>
              </div>
            </div>
            <div className="mt-4 border border-[#5A9A6B]/20 rounded-none p-4">
              <h3 className="text-sm font-display text-[#5A9A6B] mb-2">Trotzdem sicher bleiben:</h3>
              <ul className="text-xs text-[#7A7D83] space-y-1">
                <li>- Verwende für jeden Dienst ein einzigartiges Passwort</li>
                <li>- Aktiviere Multi-Faktor-Authentifizierung wo möglich</li>
                <li>- Nutze einen Passwort-Manager</li>
                <li>- Prüfe regelmäßig, ob neue Leaks aufgetaucht sind</li>
              </ul>
            </div>
          </div>
        )}

        {isBreached && (
          <>
            <div className="bg-[#D97B5A]/10 border border-[#D97B5A]/30 rounded-sm p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <XCircle className="h-8 w-8 text-[#D97B5A]" />
                <div>
                  <h2 className="text-xl font-display text-[#D97B5A]">{breachCount} {breachCount === 1 ? 'Datenleck' : 'Datenlecks'} gefunden</h2>
                  <p className="text-sm text-[#7A7D83]">Deine E-Mail-Adresse wurde in {breachCount} bekannten Datenlecks gefunden.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {result.breaches.map((breach, idx) => (
                <div key={idx} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5 hover:border-[#C8A96E]/30 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-display text-[#E8E6E0]">{breach.Name}</h3>
                      <span className="text-xs font-mono text-[#3E4148]">Datum: {breach.BreachDate || 'Unbekannt'}</span>
                    </div>
                    {breach.PwnCount && (
                      <span className="text-xs font-mono text-[#D97B5A] border border-[#D97B5A]/30 px-2.5 py-1 rounded-none shrink-0">
                        {formatNumber(breach.PwnCount)} Betroffene
                      </span>
                    )}
                  </div>
                  {breach.Description && (<p className="text-xs text-[#7A7D83] mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: breach.Description }} />)}
                  {breach.DataClasses && breach.DataClasses.length > 0 && (
                    <div>
                      <span className="text-xs font-mono text-[#3E4148]">Kompromittierte Daten:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {breach.DataClasses.map((dc, i) => (
                          <span key={i} className="inline-flex px-2 py-0.5 rounded-none text-xs font-mono border border-[#D97B5A]/20 text-[#D97B5A]">{dc}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 mb-6">
              <h3 className="text-lg font-display text-[#E8E6E0] mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-[#D97B5A]" />Sofort-Maßnahmen
              </h3>
              <div className="space-y-4">
                {[
                  { num: '1', color: 'text-[#D97B5A] border-[#D97B5A]/20', title: 'Passwörter sofort ändern', desc: 'Ändere das Passwort für jeden betroffenen Dienst. Wenn du dasselbe Passwort auch anderswo verwendest, ändere es dort ebenfalls.' },
                  { num: '2', color: 'text-[#D97B5A] border-[#D97B5A]/20', title: 'Multi-Faktor-Authentifizierung aktivieren', desc: 'Aktiviere 2FA/MFA für alle wichtigen Konten. Selbst wenn ein Passwort kompromittiert wurde, schützt MFA vor unbefugtem Zugriff.' },
                  { num: '3', color: 'text-[#C8A96E] border-[#C8A96E]/20', title: 'Passwort-Manager verwenden', desc: 'Nutze einen Passwort-Manager, um für jeden Dienst ein einzigartiges, starkes Passwort zu generieren. So begrenzt du den Schaden bei zukünftigen Leaks.' },
                  { num: '4', color: 'text-[#C8A96E] border-[#C8A96E]/20', title: 'Kontobewegungen überwachen', desc: 'Prüfe deine Konten auf verdächtige Aktivitäten. Achte auf unbekannte Logins, Passwortänderungen oder neue Geräte.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className={`w-6 h-6 rounded-none border ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                      <span className="text-xs font-mono">{item.num}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-display text-[#E8E6E0]">{item.title}</h4>
                      <p className="text-xs text-[#7A7D83]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {result && (
          <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
            <h3 className="text-lg font-display text-[#E8E6E0] mb-2">Umfassende Sicherheitsanalyse</h3>
            <p className="text-sm text-[#7A7D83] mb-4">Der Breach Checker prüft nur E-Mail-Adressen. Für eine vollständige Analyse deiner Unternehmens-IT-Sicherheit empfehlen wir ein professionelles Security Audit.</p>
            <a href="https://corelead.org" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-none bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider text-sm transition-all">
              Professionelles Security Audit anfragen <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

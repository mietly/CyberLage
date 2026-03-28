import { useState } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Shield,
  Lock,
  Wifi,
  WifiOff,
  Mail,
  Bug,
} from 'lucide-react'

const STORAGE_KEY = 'cyberlage-incidents'

const incidentTypes = [
  { id: 'ransomware', label: 'Ransomware / Verschlüsselung', icon: Lock },
  { id: 'phishing', label: 'Phishing / Social Engineering', icon: Mail },
  { id: 'datenleck', label: 'Datenleck / Datenpanne', icon: Bug },
  { id: 'unauthorized', label: 'Unauthorized Access', icon: Shield },
  { id: 'ddos', label: 'DDoS-Angriff', icon: WifiOff },
  { id: 'sonstiges', label: 'Sonstiges', icon: AlertTriangle },
]

const immediateActions = {
  ransomware: {
    title: 'Sofortmaßnahmen bei Ransomware',
    steps: [
      'Betroffene Systeme sofort vom Netzwerk isolieren',
      'Kein Lösegeld zahlen',
      'Backups auf Integrität prüfen (offline Backups bevorzugen)',
      'Behörden informieren (Polizei, BSI)',
      'Incident-Response-Team einschalten',
      'Alle Zugangsdaten ändern',
    ],
  },
  phishing: {
    title: 'Sofortmaßnahmen bei Phishing',
    steps: [
      'Passwörter aller betroffenen Konten sofort ändern',
      'IT-Abteilung / IT-Sicherheitsbeauftragten informieren',
      'Verdächtige E-Mail als Anhang weiterleiten an die IT',
      'MFA aktivieren falls noch nicht geschehen',
      'Kollegen warnen (ohne E-Mail weiterzuleiten)',
      'Kontoaktivitäten auf verdächtige Zugriffe prüfen',
    ],
  },
  datenleck: {
    title: 'Sofortmaßnahmen bei Datenleck',
    steps: [
      'Ausmaß des Datenlecks feststellen',
      'Meldepflicht prüfen (72 Stunden nach DSGVO Art. 33)',
      'Betroffene Personen informieren (bei hohem Risiko)',
      'Datenschutzbeauftragten einschalten',
      'Zugangsweg identifizieren und schließen',
      'Alle betroffenen Zugangsdaten ändern',
    ],
  },
  unauthorized: {
    title: 'Sofortmaßnahmen bei unbefugtem Zugriff',
    steps: [
      'Betroffene Konten sofort sperren',
      'Session-Tokens und Zugangsdaten zurücksetzen',
      'Logs sichern und Zugriffswege analysieren',
      'Netzwerk-Segmentierung prüfen',
      'Laterale Bewegungen untersuchen',
      'Forensische Sicherung durchführen',
    ],
  },
  ddos: {
    title: 'Sofortmaßnahmen bei DDoS-Angriff',
    steps: [
      'DDoS-Mitigation-Service aktivieren (falls vorhanden)',
      'ISP/Hosting-Provider informieren',
      'Traffic-Analyse durchführen',
      'Kritische Dienste priorisieren',
      'Rate-Limiting und Geo-Blocking erwägen',
      'Kommunikationsplan aktivieren',
    ],
  },
  sonstiges: {
    title: 'Allgemeine Sofortmaßnahmen',
    steps: [
      'Situation dokumentieren (Zeitpunkte, Beobachtungen)',
      'IT-Sicherheitsbeauftragten informieren',
      'Betroffene Systeme isolieren falls nötig',
      'Beweise sichern (Logs, Screenshots)',
      'Nicht eigenständig "aufräumen"',
      'Professionelle Hilfe hinzuziehen',
    ],
  },
}

const importantLinks = [
  { label: 'BSI Meldestelle', url: 'https://www.bsi.bund.de/DE/IT-Sicherheitsvorfall/it-sicherheitsvorfall_node.html' },
  { label: 'Polizei Cybercrime', url: 'https://www.polizei.de/Polizei/DE/Einrichtungen/ZAC/zac_node.html' },
  { label: 'CERT-Bund', url: 'https://www.cert-bund.de/' },
]

export default function IncidentReporter() {
  const [step, setStep] = useState(1)
  const [incidentType, setIncidentType] = useState('')
  const [details, setDetails] = useState({
    discoveredAt: '',
    description: '',
    affectedSystems: '',
    actionsTaken: '',
  })
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  function handleSubmit() {
    const incident = {
      id: Date.now(),
      type: incidentType,
      details,
      contact,
      createdAt: new Date().toISOString(),
    }
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      existing.push(incident)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    } catch {
      // ignore storage errors
    }
    setSubmitted(true)
  }

  function canGoNext() {
    if (step === 1) return !!incidentType
    if (step === 2) return details.description.trim().length > 0
    if (step === 3) return true
    return false
  }

  function goNext() {
    if (step === 3) {
      handleSubmit()
      setStep(4)
    } else {
      setStep((s) => s + 1)
    }
  }

  function handleRestart() {
    setStep(1)
    setIncidentType('')
    setDetails({ discoveredAt: '', description: '', affectedSystems: '', actionsTaken: '' })
    setContact({ name: '', email: '', phone: '' })
    setSubmitted(false)
  }

  const actions = immediateActions[incidentType] || immediateActions.sonstiges

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Vorfall melden</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sicherheitsvorfall melden</h1>
          <p className="text-lg text-gray-400">
            Schnelle Hilfe bei Cyberangriffen
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Schritt {step} von {totalSteps}</span>
            <span>
              {step === 1 && 'Art des Vorfalls'}
              {step === 2 && 'Details'}
              {step === 3 && 'Kontakt (optional)'}
              {step === 4 && 'Sofortmaßnahmen'}
            </span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-red-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step 1: Incident Type */}
        {step === 1 && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Art des Vorfalls</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {incidentTypes.map((type) => {
                const Icon = type.icon
                const isSelected = incidentType === type.id
                return (
                  <button
                    key={type.id}
                    onClick={() => setIncidentType(type.id)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-lg border text-left text-sm font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-red-600/20 border-red-500/40 text-red-400'
                        : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    {type.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Details zum Vorfall</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">
                  Wann entdeckt?
                </label>
                <input
                  type="datetime-local"
                  value={details.discoveredAt}
                  onChange={(e) => setDetails({ ...details, discoveredAt: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">
                  Kurzbeschreibung *
                </label>
                <textarea
                  rows={4}
                  value={details.description}
                  onChange={(e) => setDetails({ ...details, description: e.target.value })}
                  placeholder="Was ist passiert? Was wurde beobachtet?"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">
                  Betroffene Systeme
                </label>
                <input
                  type="text"
                  value={details.affectedSystems}
                  onChange={(e) => setDetails({ ...details, affectedSystems: e.target.value })}
                  placeholder="z.B. Fileserver, E-Mail-System, ERP..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">
                  Bereits ergriffene Maßnahmen
                </label>
                <textarea
                  rows={3}
                  value={details.actionsTaken}
                  onChange={(e) => setDetails({ ...details, actionsTaken: e.target.value })}
                  placeholder="Welche Schritte wurden bereits unternommen?"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact */}
        {step === 3 && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Kontaktdaten</h2>
            <p className="text-sm text-gray-500 mb-6">Optional -- du kannst den Vorfall auch anonym melden.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Name</label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  placeholder="Optional"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">E-Mail</label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  placeholder="Optional"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Telefon</label>
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  placeholder="Optional"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Immediate Actions + Confirmation */}
        {step === 4 && (
          <div className="space-y-6">
            {/* Success */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h2 className="text-xl font-bold text-green-400 mb-1">Vorfall erfolgreich gemeldet</h2>
              <p className="text-sm text-gray-400">Deine Meldung wurde gespeichert.</p>
            </div>

            {/* Immediate Actions */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-400">{actions.title}</h2>
              <ol className="space-y-3">
                {actions.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-6 h-6 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            {/* Important Links */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Wichtige Anlaufstellen</h3>
              <div className="space-y-3">
                {importantLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-600 text-sm transition-colors"
                  >
                    <span className="text-gray-300">{link.label}</span>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://corelead.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl px-6 py-4 transition-colors text-center"
            >
              Professionelle Incident Response → corelead.org
            </a>

            {/* Restart */}
            <button
              onClick={handleRestart}
              className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium rounded-xl px-6 py-3 transition-colors cursor-pointer"
            >
              Neuen Vorfall melden
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="flex gap-3 mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium rounded-xl px-6 py-3 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </button>
            )}
            <button
              onClick={goNext}
              disabled={!canGoNext()}
              className={`flex-1 flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 transition-colors cursor-pointer ${
                canGoNext()
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-gray-800 text-gray-600 cursor-not-allowed'
              }`}
            >
              {step === 3 ? 'Vorfall melden' : 'Weiter'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

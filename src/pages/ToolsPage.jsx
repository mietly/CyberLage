import { Link } from 'react-router-dom'
import { KeyRound, ShieldCheck, Fish, Globe, ClipboardCheck, Lock, ArrowRight, Wrench, ShieldAlert, Calendar, BarChart3 } from 'lucide-react'

const tools = [
  {
    title: 'Passwort-Stärke testen',
    description: 'Prüfe wie sicher dein Passwort ist. Komplett lokal - dein Passwort verlässt nie deinen Browser.',
    icon: KeyRound,
    to: '/tools/password',
  },
  {
    title: 'NIS2 Quick-Check',
    description: 'Bin ich NIS2-pflichtig? Finde in wenigen Minuten heraus, ob dein Unternehmen von der NIS2-Richtlinie betroffen ist.',
    icon: ShieldCheck,
    to: '/tools/nis2-check',
  },
  {
    title: 'Phishing erkennen',
    description: 'Interaktiver Guide mit echten Beispielen. Trainiere dein Auge für Phishing-Mails und teste dein Wissen.',
    icon: Fish,
    to: '/tools/phishing',
  },
  {
    title: 'IP/Domain Reputation prüfen',
    description: 'Prüfe die Reputation einer IP-Adresse oder Domain. Blacklist-Status, Geolokation und mehr.',
    icon: Globe,
    to: '/tools/ip-check',
  },
  {
    title: 'DSGVO Basis-Check',
    description: 'Schnelle Checkliste für die wichtigsten DSGVO-Anforderungen. Finde heraus, wo dein Unternehmen steht.',
    icon: ClipboardCheck,
    to: '/tools/dsgvo',
  },
  {
    title: 'Passwort Manager Vergleich',
    description: 'Die besten Passwort-Manager im Vergleich. Features, Preise und Sicherheit auf einen Blick.',
    icon: Lock,
    to: '/tools/passwort-manager',
  },
  {
    title: 'Security Score',
    description: 'Wie sicher ist dein Unternehmen? 10 Fragen, die zeigen, wo du stehst - mit konkreten Empfehlungen.',
    icon: BarChart3,
    to: '/tools/security-score',
  },
  {
    title: 'Breach Checker',
    description: 'Wurde meine E-Mail gehackt? Prüfe, ob deine E-Mail in bekannten Datenlecks aufgetaucht ist.',
    icon: ShieldAlert,
    to: '/tools/breach-check',
  },
  {
    title: 'Patch-Kalender',
    description: 'Wichtige Patch-Termine von Microsoft, SAP, Adobe, Oracle und Fortinet im Überblick.',
    icon: Calendar,
    to: '/patch-kalender',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="h-8 w-8 text-[#C8A96E]" />
            <h1 className="text-3xl font-display text-[#C8A96E]">
              Security Tools
            </h1>
          </div>
          <p className="text-[#7A7D83] max-w-2xl">
            Kostenlose Werkzeuge für deine IT-Sicherheit. Alle Tools laufen direkt in deinem Browser -
            keine Daten werden an Server übertragen.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.to}
                to={tool.to}
                className="group bg-[#0F1215] border border-[#1E2228] hover:border-[#C8A96E]/40 rounded-sm p-6 transition-all duration-200"
              >
                <div className="inline-flex p-3 rounded-sm border border-[#1E2228] mb-4">
                  <Icon className="h-6 w-6 text-[#C8A96E]" />
                </div>

                <h3 className="text-lg font-display text-[#E8E6E0] mb-2 group-hover:text-[#C8A96E] transition-colors">
                  {tool.title}
                </h3>

                <p className="text-sm text-[#7A7D83] mb-5 leading-relaxed">
                  {tool.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-mono text-[#C8A96E] group-hover:text-[#E8E6E0] transition-colors">
                  Jetzt testen
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

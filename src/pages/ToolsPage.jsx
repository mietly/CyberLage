import { Link } from 'react-router-dom'
import { KeyRound, ShieldCheck, Fish, Globe, ClipboardCheck, Lock, ArrowRight, Wrench } from 'lucide-react'

const tools = [
  {
    title: 'Passwort-Stärke testen',
    description: 'Prüfe wie sicher dein Passwort ist. Komplett lokal - dein Passwort verlässt nie deinen Browser.',
    icon: KeyRound,
    to: '/tools/password',
    color: 'from-red-500 to-orange-500',
    borderColor: 'border-red-500/20 hover:border-red-500/40',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
  },
  {
    title: 'NIS2 Quick-Check',
    description: 'Bin ich NIS2-pflichtig? Finde in wenigen Minuten heraus, ob dein Unternehmen von der NIS2-Richtlinie betroffen ist.',
    icon: ShieldCheck,
    to: '/tools/nis2-check',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Phishing erkennen',
    description: 'Interaktiver Guide mit echten Beispielen. Trainiere dein Auge für Phishing-Mails und teste dein Wissen.',
    icon: Fish,
    to: '/tools/phishing',
    color: 'from-yellow-500 to-orange-500',
    borderColor: 'border-yellow-500/20 hover:border-yellow-500/40',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
  },
  {
    title: 'IP/Domain Reputation prüfen',
    description: 'Prüfe die Reputation einer IP-Adresse oder Domain. Blacklist-Status, Geolokation und mehr.',
    icon: Globe,
    to: '/tools/ip-check',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/20 hover:border-purple-500/40',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    title: 'DSGVO Basis-Check',
    description: 'Schnelle Checkliste für die wichtigsten DSGVO-Anforderungen. Finde heraus, wo dein Unternehmen steht.',
    icon: ClipboardCheck,
    to: '/tools/dsgvo',
    color: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-500/20 hover:border-green-500/40',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
  {
    title: 'Passwort Manager Vergleich',
    description: 'Die besten Passwort-Manager im Vergleich. Features, Preise und Sicherheit auf einen Blick.',
    icon: Lock,
    to: '/tools/passwort-manager',
    color: 'from-amber-500 to-red-500',
    borderColor: 'border-amber-500/20 hover:border-amber-500/40',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Security Tools
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl">
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
                className={`group bg-gray-900 border ${tool.borderColor} rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5`}
              >
                <div className={`inline-flex p-3 rounded-xl ${tool.iconBg} mb-4`}>
                  <Icon className={`h-6 w-6 ${tool.iconColor}`} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all">
                  {tool.title}
                </h3>

                <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                  {tool.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-red-400 group-hover:text-red-300 transition-colors">
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

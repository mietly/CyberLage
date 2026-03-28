import { useState } from 'react';
import {
  Users,
  MessageSquare,
  Wrench,
  AlertTriangle,
  Briefcase,
  ThumbsUp,
  Clock,
  User,
  PlusCircle,
  Lock,
  X,
} from 'lucide-react';

const communityCategories = [
  { id: 'alle', name: 'Alle', icon: Users },
  { id: 'fragen', name: 'Fragen & Antworten', icon: MessageSquare },
  { id: 'tools', name: 'Tool-Empfehlungen', icon: Wrench },
  { id: 'vorfaelle', name: 'Vorfälle', icon: AlertTriangle },
  { id: 'jobs', name: 'Jobs', icon: Briefcase },
];

const demoThreads = [
  {
    id: 1,
    title: 'Welches SIEM für mittelständisches Unternehmen (~500 MA)?',
    category: 'fragen',
    author: 'SecurityMax',
    replies: 23,
    upvotes: 47,
    date: '2026-03-28',
    preview:
      'Wir evaluieren gerade SIEM-Lösungen. Budget ca. 50k/Jahr. Welche Erfahrungen habt ihr mit Wazuh vs. Elastic Security?',
  },
  {
    id: 2,
    title: 'Bitwarden vs. 1Password für Unternehmen -- Erfahrungsbericht',
    category: 'tools',
    author: 'PasswortProfi',
    replies: 18,
    upvotes: 62,
    date: '2026-03-27',
    preview:
      'Wir haben beide Lösungen getestet. Hier mein ausführlicher Vergleich nach 6 Monaten im Einsatz...',
  },
  {
    id: 3,
    title: 'Phishing-Mail im Umlauf: Fake DHL-Sendungsverfolgung',
    category: 'vorfaelle',
    author: 'WarnBot',
    replies: 8,
    upvotes: 34,
    date: '2026-03-27',
    preview:
      'Achtung: Neue Phishing-Kampagne mit sehr realistischer DHL-Sendungsverfolgung. IoCs und Screenshots anbei.',
  },
  {
    id: 4,
    title: 'Senior Security Engineer (m/w/d) -- Remote, DACH',
    category: 'jobs',
    author: 'TechRecruiter',
    replies: 3,
    upvotes: 12,
    date: '2026-03-26',
    preview:
      'Suchen erfahrene/n Security Engineer für unser SOC-Team. Full Remote, 80-110k, DACH-Region.',
  },
  {
    id: 5,
    title: 'NIS2-Umsetzung: Wie weit seid ihr?',
    category: 'fragen',
    author: 'ComplianceChris',
    replies: 31,
    upvotes: 55,
    date: '2026-03-26',
    preview:
      'Würde gerne mal den Stand in der Community abfragen: Wie weit seid ihr mit der NIS2-Vorbereitung? Wir stecken noch bei der Asset-Inventarisierung...',
  },
  {
    id: 6,
    title: 'Empfehlung: Kostenlose Security-Awareness-Plattform',
    category: 'tools',
    author: 'AwarenessAnna',
    replies: 14,
    upvotes: 41,
    date: '2026-03-25',
    preview:
      'Habe eine tolle Open-Source-Plattform für Security Awareness Training gefunden. Unterstützt Deutsch und lässt sich gut anpassen.',
  },
];

const categoryIcons = {
  fragen: MessageSquare,
  tools: Wrench,
  vorfaelle: AlertTriangle,
  jobs: Briefcase,
};

const categoryColors = {
  fragen: 'bg-blue-500/20 text-blue-400',
  tools: 'bg-green-500/20 text-green-400',
  vorfaelle: 'bg-red-500/20 text-red-400',
  jobs: 'bg-purple-500/20 text-purple-400',
};

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState('alle');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const filteredThreads =
    activeCategory === 'alle'
      ? demoThreads
      : demoThreads.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tausche dich mit anderen Security-Experten aus dem DACH-Raum aus. Stelle Fragen,
            teile Erfahrungen und bleibe vernetzt.
          </p>
        </div>

        {/* Categories + New Thread */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {communityCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
          <div className="flex-1" />
          <button
            onClick={() => setShowLoginModal(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg px-4 py-2 text-sm transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            Neues Thema erstellen
          </button>
        </div>

        {/* Threads */}
        <div className="space-y-3">
          {filteredThreads.map((thread) => {
            const CatIcon = categoryIcons[thread.category] || MessageSquare;
            return (
              <div
                key={thread.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  {/* Upvotes */}
                  <div className="flex flex-col items-center gap-1 pt-1 min-w-[48px]">
                    <ThumbsUp className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition-colors" />
                    <span className="text-sm font-semibold text-gray-400">{thread.upvotes}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                          categoryColors[thread.category]
                        }`}
                      >
                        <CatIcon className="w-3 h-3" />
                        {communityCategories.find((c) => c.id === thread.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-red-400 transition-colors">
                      {thread.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{thread.preview}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {thread.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        {thread.replies} Antworten
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {thread.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Login Required Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md w-full relative">
              <button
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center">
                <Lock className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Anmeldung erforderlich</h3>
                <p className="text-gray-400 mb-6">
                  Um ein neues Thema zu erstellen oder zu antworten, musst du angemeldet sein.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg px-4 py-3 transition-colors cursor-pointer">
                    Anmelden
                  </button>
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium rounded-lg px-4 py-3 transition-colors cursor-pointer">
                    Registrieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

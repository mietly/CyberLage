import { useState } from 'react';
import { Users, MessageSquare, Wrench, AlertTriangle, Briefcase, ThumbsUp, Clock, User, PlusCircle, Lock, X } from 'lucide-react';

const communityCategories = [
  { id: 'alle', name: 'Alle', icon: Users },
  { id: 'fragen', name: 'Fragen & Antworten', icon: MessageSquare },
  { id: 'tools', name: 'Tool-Empfehlungen', icon: Wrench },
  { id: 'vorfaelle', name: 'Vorfälle', icon: AlertTriangle },
  { id: 'jobs', name: 'Jobs', icon: Briefcase },
];

const demoThreads = [
  { id: 1, title: 'Welches SIEM für mittelständisches Unternehmen (~500 MA)?', category: 'fragen', author: 'SecurityMax', replies: 23, upvotes: 47, date: '2026-03-28', preview: 'Wir evaluieren gerade SIEM-Lösungen. Budget ca. 50k/Jahr. Welche Erfahrungen habt ihr mit Wazuh vs. Elastic Security?' },
  { id: 2, title: 'Bitwarden vs. 1Password für Unternehmen -- Erfahrungsbericht', category: 'tools', author: 'PasswortProfi', replies: 18, upvotes: 62, date: '2026-03-27', preview: 'Wir haben beide Lösungen getestet. Hier mein ausführlicher Vergleich nach 6 Monaten im Einsatz...' },
  { id: 3, title: 'Phishing-Mail im Umlauf: Fake DHL-Sendungsverfolgung', category: 'vorfaelle', author: 'WarnBot', replies: 8, upvotes: 34, date: '2026-03-27', preview: 'Achtung: Neue Phishing-Kampagne mit sehr realistischer DHL-Sendungsverfolgung. IoCs und Screenshots anbei.' },
  { id: 4, title: 'Senior Security Engineer (m/w/d) -- Remote, DACH', category: 'jobs', author: 'TechRecruiter', replies: 3, upvotes: 12, date: '2026-03-26', preview: 'Suchen erfahrene/n Security Engineer für unser SOC-Team. Full Remote, 80-110k, DACH-Region.' },
  { id: 5, title: 'NIS2-Umsetzung: Wie weit seid ihr?', category: 'fragen', author: 'ComplianceChris', replies: 31, upvotes: 55, date: '2026-03-26', preview: 'Würde gerne mal den Stand in der Community abfragen: Wie weit seid ihr mit der NIS2-Vorbereitung? Wir stecken noch bei der Asset-Inventarisierung...' },
  { id: 6, title: 'Empfehlung: Kostenlose Security-Awareness-Plattform', category: 'tools', author: 'AwarenessAnna', replies: 14, upvotes: 41, date: '2026-03-25', preview: 'Habe eine tolle Open-Source-Plattform für Security Awareness Training gefunden. Unterstützt Deutsch und lässt sich gut anpassen.' },
];

const categoryIcons = { fragen: MessageSquare, tools: Wrench, vorfaelle: AlertTriangle, jobs: Briefcase };
const categoryColors = { fragen: 'border-[#C8A96E]/30 text-[#C8A96E]', tools: 'border-[#5A9A6B]/30 text-[#5A9A6B]', vorfaelle: 'border-[#D97B5A]/30 text-[#D97B5A]', jobs: 'border-[#C8A96E]/30 text-[#C8A96E]' };

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState('alle');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const filteredThreads = activeCategory === 'alle' ? demoThreads : demoThreads.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E]/30 text-[#C8A96E] rounded-none px-4 py-2 mb-6">
            <Users className="w-4 h-4" /><span className="text-sm font-mono">Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Community</h1>
          <p className="text-lg text-[#7A7D83] max-w-2xl mx-auto">Tausche dich mit anderen Security-Experten aus dem DACH-Raum aus. Stelle Fragen, teile Erfahrungen und bleibe vernetzt.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          {communityCategories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-none text-sm font-mono transition-colors cursor-pointer ${activeCategory === cat.id ? 'bg-[#C8A96E] text-[#0A0C0F]' : 'border border-[#1E2228] text-[#7A7D83] hover:border-[#C8A96E] hover:text-[#C8A96E]'}`}>
              <cat.icon className="w-4 h-4" />{cat.name}
            </button>
          ))}
          <div className="flex-1" />
          <button onClick={() => setShowLoginModal(true)} className="flex items-center gap-2 bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-4 py-2 text-sm transition-colors cursor-pointer">
            <PlusCircle className="w-4 h-4" />Neues Thema erstellen
          </button>
        </div>

        <div className="space-y-3">
          {filteredThreads.map((thread) => {
            const CatIcon = categoryIcons[thread.category] || MessageSquare;
            return (
              <div key={thread.id} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5 hover:border-[#C8A96E]/30 transition-colors cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-1 pt-1 min-w-[48px]">
                    <ThumbsUp className="w-4 h-4 text-[#3E4148] group-hover:text-[#C8A96E] transition-colors" />
                    <span className="text-sm font-mono text-[#7A7D83]">{thread.upvotes}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className={`inline-flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-none border ${categoryColors[thread.category]}`}>
                        <CatIcon className="w-3 h-3" />{communityCategories.find((c) => c.id === thread.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-display mb-1 group-hover:text-[#C8A96E] transition-colors">{thread.title}</h3>
                    <p className="text-[#7A7D83] text-sm mb-3 line-clamp-2">{thread.preview}</p>
                    <div className="flex items-center gap-4 text-xs font-mono text-[#3E4148]">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{thread.author}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{thread.replies} Antworten</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{thread.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showLoginModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-8 max-w-md w-full relative">
              <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-[#3E4148] hover:text-[#7A7D83] cursor-pointer"><X className="w-5 h-5" /></button>
              <div className="text-center">
                <Lock className="w-12 h-12 text-[#C8A96E] mx-auto mb-4" />
                <h3 className="text-xl font-display mb-2">Anmeldung erforderlich</h3>
                <p className="text-[#7A7D83] mb-6">Um ein neues Thema zu erstellen oder zu antworten, musst du angemeldet sein.</p>
                <div className="space-y-3">
                  <button className="w-full bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-4 py-3 transition-colors cursor-pointer">Anmelden</button>
                  <button className="w-full border border-[#1E2228] hover:border-[#C8A96E] text-[#7A7D83] hover:text-[#C8A96E] font-mono rounded-none px-4 py-3 transition-colors cursor-pointer">Registrieren</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

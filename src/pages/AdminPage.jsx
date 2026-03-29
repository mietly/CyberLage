import { useState } from 'react';
import { Shield, Lock, LayoutDashboard, FileText, Mail, Cpu, BarChart3, Users, Eye, Bug, PlusCircle, Edit3, Trash2, Send, Sparkles, Link as LinkIcon, LogOut } from 'lucide-react';
import { demoArticles } from '../data/demoData';

const statCards = [
  { label: 'Artikel', value: '47', icon: FileText, color: 'text-[#C8A96E]', bg: 'border-[#C8A96E]/20' },
  { label: 'Abonnenten', value: '2.340', icon: Users, color: 'text-[#5A9A6B]', bg: 'border-[#5A9A6B]/20' },
  { label: 'Seitenaufrufe', value: '89.120', icon: Eye, color: 'text-[#C8A96E]', bg: 'border-[#C8A96E]/20' },
  { label: 'CVEs getrackt', value: '156', icon: Bug, color: 'text-[#D97B5A]', bg: 'border-[#D97B5A]/20' },
];

const tabs = [
  { id: 'uebersicht', label: 'Übersicht', icon: LayoutDashboard },
  { id: 'artikel', label: 'Artikel', icon: FileText },
  { id: 'newsletter', label: 'Newsletter', icon: Mail },
  { id: 'ki-tools', label: 'KI-Tools', icon: Cpu },
];

const categoryOptions = ['ransomware', 'schwachstellen', 'phishing', 'dsgvo', 'nis2', 'ki-security', 'datenpannen', 'kritis'];

const demoAiIdeas = [
  '1. "Die 10 häufigsten Cloud-Fehlkonfigurationen in AWS und Azure" -- Praxisnaher Artikel mit konkreten Beispielen aus dem DACH-Raum.',
  '2. "NIS2 und die Geschäftsführerhaftung: Was CEOs jetzt wissen müssen" -- Fokus auf persönliche Haftungsrisiken und Handlungsempfehlungen.',
  '3. "Zero Trust Architecture: Ein Implementierungsleitfaden für den Mittelstand" -- Schrittweise Einführung ohne riesiges Budget.',
  '4. "Incident Response Playbook: Die ersten 24 Stunden nach einem Ransomware-Angriff" -- Detaillierter Ablaufplan mit Checklisten.',
  '5. "KI-gestützte Angriffe 2026: Was kommt auf uns zu?" -- Analyse neuer Angriffsvektoren durch LLMs und generative KI.',
];

const demoSummary = `**Zusammenfassung des Artikels:**

Der Artikel beschreibt eine neue Ransomware-Variante, die speziell auf VMware ESXi-Server im DACH-Raum abzielt. Die wichtigsten Punkte:

- **Angriffsvektor:** Ausnutzung einer bekannten Schwachstelle in ESXi (CVE-2026-XXXX)
- **Besonderheit:** Die Ransomware verschlüsselt gezielt VM-Snapshots und Konfigurationsdateien
- **Betroffene:** Mindestens 12 Unternehmen in Deutschland und Österreich
- **Empfohlene Maßnahmen:** ESXi-Patches einspielen, SSH-Zugang einschränken, Backup-Strategie überprüfen

**Relevanz für CyberLage:** Hoch -- direkt relevant für DACH-Zielgruppe, KRITIS-Bezug möglich.

**Empfohlene Tags:** #Ransomware #VMware #ESXi #DACH #KRITIS`;

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('uebersicht');
  const [showEditor, setShowEditor] = useState(false);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleCategory, setArticleCategory] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [nlSubject, setNlSubject] = useState('');
  const [nlContent, setNlContent] = useState('');
  const [nlSent, setNlSent] = useState(false);
  const [showIdeas, setShowIdeas] = useState(false);
  const [summaryUrl, setSummaryUrl] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleLogin = (e) => { e.preventDefault(); if (loginEmail === 'david@oberholzner.com') { setIsAdmin(true); setLoginError(''); } else { setLoginError('Zugriff verweigert. Nur für autorisierte Administratoren.'); } };
  const handleSendNewsletter = () => { if (nlSubject && nlContent) { setNlSent(true); setTimeout(() => setNlSent(false), 3000); } };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0] flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 border border-[#C8A96E]/30 rounded-none flex items-center justify-center mx-auto mb-4"><Lock className="w-8 h-8 text-[#C8A96E]" /></div>
            <h1 className="text-2xl font-display">Admin-Bereich</h1>
            <p className="text-[#7A7D83] mt-2">Anmeldung für autorisierte Benutzer</p>
          </div>
          <form onSubmit={handleLogin} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 space-y-4">
            {loginError && (<div className="bg-[#D97B5A]/10 border border-[#D97B5A]/30 text-[#D97B5A] text-sm font-mono rounded-none p-3">{loginError}</div>)}
            <div>
              <label htmlFor="admin-email" className="block text-sm font-medium text-[#7A7D83] mb-2">E-Mail</label>
              <input id="admin-email" type="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="admin@cyberlage.de" className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]" />
            </div>
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-[#7A7D83] mb-2">Passwort</label>
              <input id="admin-password" type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Passwort" className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]" />
            </div>
            <button type="submit" className="w-full bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-6 py-3 transition-colors cursor-pointer">Anmelden</button>
            <p className="text-xs font-mono text-[#3E4148] text-center">Demo: Verwende david@oberholzner.com mit beliebigem Passwort</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3"><Shield className="w-8 h-8 text-[#C8A96E]" /><div><h1 className="text-2xl font-display">Admin Dashboard</h1><p className="text-sm font-mono text-[#7A7D83]">Willkommen, David</p></div></div>
          <button onClick={() => setIsAdmin(false)} className="flex items-center gap-2 text-[#7A7D83] hover:text-[#E8E6E0] text-sm font-mono transition-colors cursor-pointer"><LogOut className="w-4 h-4" />Abmelden</button>
        </div>

        <div className="flex gap-1 mb-8 bg-[#0F1215] rounded-none p-1 border border-[#1E2228]">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-none text-sm font-mono transition-colors flex-1 justify-center cursor-pointer ${activeTab === tab.id ? 'bg-[#C8A96E] text-[#0A0C0F]' : 'text-[#7A7D83] hover:text-[#E8E6E0]'}`}>
              <tab.icon className="w-4 h-4" />{tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'uebersicht' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {statCards.map((stat) => (
                <div key={stat.label} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono text-[#7A7D83]">{stat.label}</span>
                    <div className={`p-2 rounded-none border ${stat.bg}`}><stat.icon className={`w-5 h-5 ${stat.color}`} /></div>
                  </div>
                  <p className="text-3xl font-mono">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <h2 className="text-lg font-display mb-4">Letzte Aktivitäten</h2>
              <div className="space-y-3">
                {[
                  { text: 'Neuer Artikel veröffentlicht: "Ransomware-Angriff auf Klinikverbund"', time: 'Vor 2 Stunden' },
                  { text: 'Newsletter KW 13 versendet an 2.340 Abonnenten', time: 'Vor 1 Tag' },
                  { text: 'CVE-2026-1234 zur Datenbank hinzugefügt', time: 'Vor 1 Tag' },
                  { text: '15 neue Newsletter-Abonnenten diese Woche', time: 'Vor 2 Tagen' },
                  { text: 'Community-Beitrag moderiert', time: 'Vor 3 Tagen' },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-[#1E2228] last:border-0">
                    <span className="text-sm text-[#E8E6E0]">{activity.text}</span>
                    <span className="text-xs font-mono text-[#3E4148] shrink-0 ml-4">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'artikel' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display">Artikel verwalten</h2>
              <button onClick={() => setShowEditor(!showEditor)} className="flex items-center gap-2 bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-4 py-2 text-sm transition-colors cursor-pointer"><PlusCircle className="w-4 h-4" />Neuer Artikel</button>
            </div>
            {showEditor && (
              <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 mb-6">
                <h3 className="text-lg font-display mb-4">Artikel erstellen</h3>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-[#7A7D83] mb-2">Titel</label><input type="text" value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} placeholder="Artikeltitel eingeben..." className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]" /></div>
                  <div><label className="block text-sm font-medium text-[#7A7D83] mb-2">Kategorie</label><select value={articleCategory} onChange={(e) => setArticleCategory(e.target.value)} className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]"><option value="">Kategorie wählen...</option>{categoryOptions.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}</select></div>
                  <div><label className="block text-sm font-medium text-[#7A7D83] mb-2">Inhalt (Markdown)</label><textarea value={articleContent} onChange={(e) => setArticleContent(e.target.value)} placeholder="## Überschrift&#10;&#10;Artikelinhalt in Markdown..." rows={12} className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] font-mono text-sm" /></div>
                  <div className="flex gap-3">
                    <button className="bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-6 py-2.5 text-sm transition-colors cursor-pointer">Veröffentlichen</button>
                    <button className="border border-[#1E2228] hover:border-[#C8A96E] text-[#7A7D83] hover:text-[#C8A96E] font-mono rounded-none px-6 py-2.5 text-sm transition-colors cursor-pointer">Als Entwurf speichern</button>
                    <button onClick={() => setShowEditor(false)} className="text-[#7A7D83] hover:text-[#E8E6E0] px-4 py-2.5 text-sm font-mono transition-colors cursor-pointer">Abbrechen</button>
                  </div>
                </div>
              </div>
            )}
            <div className="space-y-2">
              {demoArticles.map((article) => (
                <div key={article.id} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-4 flex items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-sm truncate">{article.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-mono text-[#3E4148]">{article.category}</span>
                      <span className="text-xs font-mono text-[#3E4148]">{new Date(article.published_at).toLocaleDateString('de-DE')}</span>
                      <span className="text-xs font-mono text-[#3E4148]">{article.views.toLocaleString('de-DE')} Aufrufe</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="p-2 text-[#7A7D83] hover:text-[#C8A96E] rounded-none transition-colors cursor-pointer"><Edit3 className="w-4 h-4" /></button>
                    <button className="p-2 text-[#7A7D83] hover:text-[#D97B5A] rounded-none transition-colors cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'newsletter' && (
          <div>
            <h2 className="text-xl font-display mb-6">Newsletter erstellen und versenden</h2>
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <div className="space-y-4">
                <div><label className="block text-sm font-medium text-[#7A7D83] mb-2">Betreff</label><input type="text" value={nlSubject} onChange={(e) => setNlSubject(e.target.value)} placeholder="CyberLage Threat Report KW 13/2026" className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]" /></div>
                <div><label className="block text-sm font-medium text-[#7A7D83] mb-2">Inhalt</label><textarea value={nlContent} onChange={(e) => setNlContent(e.target.value)} placeholder="Newsletter-Inhalt verfassen..." rows={10} className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] font-mono text-sm" /></div>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm text-[#3E4148]">Wird an <strong className="text-[#E8E6E0]">2.340 Abonnenten</strong> gesendet</p>
                  <button onClick={handleSendNewsletter} className="flex items-center gap-2 bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-6 py-2.5 text-sm transition-colors cursor-pointer"><Send className="w-4 h-4" />Newsletter versenden</button>
                </div>
                {nlSent && (<div className="bg-[#5A9A6B]/10 border border-[#5A9A6B]/30 text-[#5A9A6B] text-sm font-mono rounded-none p-3 mt-2">Newsletter wurde erfolgreich in die Warteschlange eingereiht!</div>)}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ki-tools' && (
          <div className="space-y-6">
            <h2 className="text-xl font-display">KI-Assistenten</h2>
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4"><Sparkles className="w-5 h-5 text-[#C8A96E]" /><h3 className="text-lg font-display">Artikel-Ideen generieren</h3></div>
              <p className="text-[#7A7D83] text-sm mb-4">Lass dir von der KI Vorschläge für neue Artikel basierend auf aktuellen Trends und Bedrohungen generieren.</p>
              <button onClick={() => setShowIdeas(!showIdeas)} className="bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-5 py-2.5 text-sm transition-colors cursor-pointer">{showIdeas ? 'Ausblenden' : 'Ideen generieren'}</button>
              {showIdeas && (
                <div className="mt-4 bg-[#0A0C0F] border border-[#1E2228] rounded-none p-4">
                  <p className="text-xs font-mono text-[#C8A96E] mb-3">KI-generierte Vorschläge:</p>
                  <div className="space-y-3">{demoAiIdeas.map((idea, idx) => (<p key={idx} className="text-sm text-[#E8E6E0] leading-relaxed">{idea}</p>))}</div>
                </div>
              )}
            </div>
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4"><LinkIcon className="w-5 h-5 text-[#C8A96E]" /><h3 className="text-lg font-display">Artikel aus URL zusammenfassen</h3></div>
              <p className="text-[#7A7D83] text-sm mb-4">Gib eine URL ein und die KI erstellt eine Zusammenfassung mit Relevanzeinschätzung für CyberLage.</p>
              <div className="flex gap-3">
                <input type="url" value={summaryUrl} onChange={(e) => setSummaryUrl(e.target.value)} placeholder="https://example.com/security-article" className="flex-1 bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-2.5 text-[#E8E6E0] text-sm placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]" />
                <button onClick={() => setShowSummary(true)} className="bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-5 py-2.5 text-sm transition-colors shrink-0 cursor-pointer">Zusammenfassen</button>
              </div>
              {showSummary && (
                <div className="mt-4 bg-[#0A0C0F] border border-[#1E2228] rounded-none p-4">
                  <p className="text-xs font-mono text-[#C8A96E] mb-3">KI-Zusammenfassung:</p>
                  <div className="text-sm text-[#E8E6E0] leading-relaxed whitespace-pre-line">{demoSummary}</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

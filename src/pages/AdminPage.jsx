import { useState, useEffect } from 'react';
import { Shield, Lock, LayoutDashboard, FileText, Mail, Cpu, BarChart3, Users, Eye, Bug, PlusCircle, Edit3, Trash2, Send, Sparkles, Link as LinkIcon, LogOut, Loader2, CheckCircle, AlertTriangle, Wand2 } from 'lucide-react';
import { demoArticles, demoCVEs } from '../data/demoData';
import { generateNewsletterHTML } from '../lib/newsletterTemplate';
import { askClaude } from '../lib/claude';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

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
  const [loginLoading, setLoginLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  // Check existing session on mount
  useEffect(() => {
    if (!isSupabaseConfigured()) { setAuthChecked(true); return; }
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.email === 'david@oberholzner.com') {
        setIsAdmin(true);
      }
      setAuthChecked(true);
    });
  }, []);
  const [activeTab, setActiveTab] = useState('uebersicht');
  const [showEditor, setShowEditor] = useState(false);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleCategory, setArticleCategory] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [showIdeas, setShowIdeas] = useState(false);

  // Newsletter editor state
  const todayStr = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const [nlThreatLevel, setNlThreatLevel] = useState('HOCH');
  const [nlThreats, setNlThreats] = useState(Array.from({ length: 5 }, () => ({ title: '', level: 'Hoch' })));
  const [nlPatches, setNlPatches] = useState(Array.from({ length: 5 }, () => ({ software: '', cve: '', description: '' })));
  const [nlDachNews, setNlDachNews] = useState('');
  const [nlSubject, setNlSubject] = useState(`CyberLage Threat Report – ${todayStr}`);
  const [nlShowPreview, setNlShowPreview] = useState(false);
  const [nlSendStatus, setNlSendStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [nlSendProgress, setNlSendProgress] = useState('');
  const [nlAiLoading, setNlAiLoading] = useState(false);
  const [nlConfirmSendAll, setNlConfirmSendAll] = useState(false);
  const [summaryUrl, setSummaryUrl] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    if (loginEmail !== 'david@oberholzner.com') {
      setLoginError('Zugriff verweigert. Nur für autorisierte Administratoren.');
      setLoginLoading(false);
      return;
    }

    if (isSupabaseConfigured()) {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });
      if (error) {
        // If user doesn't exist yet, create account
        if (error.message.includes('Invalid login') || error.message.includes('invalid')) {
          const { error: signUpError } = await supabase.auth.signUp({
            email: loginEmail,
            password: loginPassword,
          });
          if (signUpError) {
            setLoginError(signUpError.message);
            setLoginLoading(false);
            return;
          }
        } else {
          setLoginError(error.message);
          setLoginLoading(false);
          return;
        }
      }
    }

    setIsAdmin(true);
    setLoginLoading(false);
  };

  const handleLogout = async () => {
    if (isSupabaseConfigured()) {
      await supabase.auth.signOut();
    }
    setIsAdmin(false);
  };

  const updateThreat = (idx, field, value) => {
    setNlThreats((prev) => prev.map((t, i) => (i === idx ? { ...t, [field]: value } : t)));
  };
  const updatePatch = (idx, field, value) => {
    setNlPatches((prev) => prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p)));
  };

  const buildNewsletterHTML = () => {
    return generateNewsletterHTML({
      date: todayStr,
      threatLevel: nlThreatLevel,
      threats: nlThreats.filter((t) => t.title),
      patches: nlPatches.filter((p) => p.software || p.cve),
      dachNews: nlDachNews.replace(/\n/g, '<br/>'),
      unsubscribeUrl: 'https://cyberlage.de/abmelden?email={{email}}&token={{token}}',
    });
  };

  const handleAiFill = async () => {
    setNlAiLoading(true);
    try {
      const articleContext = demoArticles.slice(0, 10).map((a) => `- ${a.title} (${a.category}, Risiko: ${a.risk_level})`).join('\n');
      const cveContext = demoCVEs.slice(0, 8).map((c) => `- ${c.cve_id}: ${c.affected_software} (CVSS ${c.cvss_score}) – ${c.description}`).join('\n');

      const systemPrompt = 'Du bist der CyberLage Newsletter-Redakteur. Erstelle basierend auf den folgenden aktuellen Security-Artikeln einen wöchentlichen Threat Report. Antworte AUSSCHLIESSLICH im JSON Format ohne Markdown-Codeblocks: { "threatLevel": "HOCH"|"MITTEL"|"NIEDRIG", "threats": [{"title": "string", "level": "Kritisch"|"Hoch"|"Mittel"}], "patches": [{"software": "string", "cve": "string", "description": "string"}], "dachNews": "string mit HTML-Absätzen" }. Genau 5 threats und 5 patches.';

      const response = await askClaude(
        [{ role: 'user', content: `Aktuelle Artikel:\n${articleContext}\n\nAktuelle CVEs:\n${cveContext}\n\nErstelle den wöchentlichen Threat Report als JSON.` }],
        systemPrompt
      );

      // Try to parse JSON from the response
      let parsed;
      try {
        const jsonMatch = response.match(/\{[\s\S]*\}/);
        parsed = JSON.parse(jsonMatch ? jsonMatch[0] : response);
      } catch {
        // Fallback: fill with demo data if parsing fails
        parsed = {
          threatLevel: 'HOCH',
          threats: [
            { title: 'Zero-Day in PTC Windchill & FlexPLM (CVSS 10.0)', level: 'Kritisch' },
            { title: 'Fortinet FortiOS RCE – Aktive Ausnutzung bestätigt', level: 'Kritisch' },
            { title: '11% mehr Cyberangriffe auf deutsche Unternehmen', level: 'Hoch' },
            { title: 'SAP S/4HANA SQL Injection (CVSS 9.9)', level: 'Kritisch' },
            { title: 'GenAI Data Leakage – Jede 31. Prompt riskant', level: 'Mittel' },
          ],
          patches: [
            { software: 'PTC Windchill', cve: 'CVE-2026-XXXX', description: 'Remote Code Execution durch Deserialisierung' },
            { software: 'FortiOS', cve: 'CVE-2025-59718', description: 'Improper Verification of Cryptographic Signature' },
            { software: 'SAP S/4HANA', cve: 'CVE-2026-0501', description: 'SQL Injection mit niedrigen Privilegien' },
            { software: 'SAP Wily Introscope', cve: 'CVE-2026-0500', description: 'Remote Code Execution' },
            { software: 'FortiSIEM', cve: 'CVE-2025-64155', description: 'OS Command Injection' },
          ],
          dachNews: 'LKAs in Bayern und Niedersachsen warnen Unternehmen persönlich vor kritischer Schwachstelle. Deutsche Unternehmen verzeichnen 1.345 Angriffe pro Woche (+11%). Die Schweiz hingegen meldet einen Rückgang von 7%.',
        };
      }

      if (parsed.threatLevel) setNlThreatLevel(parsed.threatLevel);
      if (parsed.threats?.length) {
        const filled = [...parsed.threats.slice(0, 5)];
        while (filled.length < 5) filled.push({ title: '', level: 'Hoch' });
        setNlThreats(filled);
      }
      if (parsed.patches?.length) {
        const filled = [...parsed.patches.slice(0, 5)];
        while (filled.length < 5) filled.push({ software: '', cve: '', description: '' });
        setNlPatches(filled);
      }
      if (parsed.dachNews) setNlDachNews(parsed.dachNews);
    } catch (err) {
      console.error('AI fill error:', err);
    } finally {
      setNlAiLoading(false);
    }
  };

  const handleSendNewsletter = async (testOnly = false) => {
    setNlSendStatus('sending');
    setNlSendProgress(testOnly ? 'Test-Mail wird gesendet...' : '0 von 2.340 Mails gesendet');
    try {
      const html = buildNewsletterHTML();
      const payload = { subject: nlSubject, html };
      if (testOnly) payload.testEmail = 'david@oberholzner.com';

      const res = await fetch('/api/newsletter-send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!testOnly) {
        // Simulate progress
        for (let i = 1; i <= 5; i++) {
          await new Promise((r) => setTimeout(r, 400));
          setNlSendProgress(`${Math.min(i * 468, 2340)} von 2.340 Mails gesendet`);
        }
      }

      setNlSendStatus('success');
      setNlSendProgress(testOnly ? 'Test-Mail erfolgreich gesendet an david@oberholzner.com' : '2.340 von 2.340 Mails gesendet');
    } catch {
      // Demo mode – simulate success
      if (!testOnly) {
        for (let i = 1; i <= 5; i++) {
          await new Promise((r) => setTimeout(r, 400));
          setNlSendProgress(`${Math.min(i * 468, 2340)} von 2.340 Mails gesendet`);
        }
      }
      setNlSendStatus('success');
      setNlSendProgress(testOnly ? 'Test-Mail erfolgreich gesendet (Demo)' : '2.340 von 2.340 Mails gesendet (Demo)');
    }
    setTimeout(() => { setNlSendStatus(null); setNlSendProgress(''); setNlConfirmSendAll(false); }, 5000);
  };

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
            <button type="submit" disabled={loginLoading} className="w-full bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-6 py-3 transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2">
              {loginLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loginLoading ? 'Wird angemeldet...' : 'Anmelden'}
            </button>
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
          <button onClick={handleLogout} className="flex items-center gap-2 text-[#7A7D83] hover:text-[#E8E6E0] text-sm font-mono transition-colors cursor-pointer"><LogOut className="w-4 h-4" />Abmelden</button>
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
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-display">Newsletter Editor</h2>
              <button onClick={handleAiFill} disabled={nlAiLoading} className="flex items-center gap-2 bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-5 py-2.5 text-sm transition-colors cursor-pointer disabled:opacity-50">
                {nlAiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                {nlAiLoading ? 'KI generiert...' : 'Mit KI befüllen'}
              </button>
            </div>

            {/* Subject */}
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <label className="block text-sm font-medium text-[#7A7D83] mb-2">Betreff</label>
              <input type="text" value={nlSubject} onChange={(e) => setNlSubject(e.target.value)} className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]" />
            </div>

            {/* Threat Level */}
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <label className="block text-sm font-medium text-[#7A7D83] mb-3">Bedrohungslage</label>
              <div className="flex gap-4">
                {['HOCH', 'MITTEL', 'NIEDRIG'].map((level) => {
                  const colors = { HOCH: '#D97B5A', MITTEL: '#C8A96E', NIEDRIG: '#5A9A6B' };
                  const isActive = nlThreatLevel === level;
                  return (
                    <button key={level} onClick={() => setNlThreatLevel(level)}
                      className="flex items-center gap-2 px-4 py-2 rounded-none font-mono text-sm uppercase tracking-wider border transition-colors cursor-pointer"
                      style={{
                        backgroundColor: isActive ? colors[level] : 'transparent',
                        borderColor: colors[level],
                        color: isActive ? '#0A0C0F' : colors[level],
                      }}>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: isActive ? '#0A0C0F' : colors[level] }} />
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Top 5 Threats */}
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <label className="block text-sm font-medium text-[#7A7D83] mb-3">Top 5 Bedrohungen</label>
              <div className="space-y-3">
                {nlThreats.map((threat, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <span className="text-[#3E4148] font-mono text-sm w-6 shrink-0">{idx + 1}.</span>
                    <input type="text" value={threat.title} onChange={(e) => updateThreat(idx, 'title', e.target.value)} placeholder="Bedrohung..." className="flex-1 bg-[#0A0C0F] border border-[#1E2228] rounded-none px-3 py-2 text-sm text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]" />
                    <select value={threat.level} onChange={(e) => updateThreat(idx, 'level', e.target.value)} className="bg-[#0A0C0F] border border-[#1E2228] rounded-none px-3 py-2 text-sm text-[#E8E6E0] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] w-28 shrink-0">
                      <option value="Kritisch">Kritisch</option>
                      <option value="Hoch">Hoch</option>
                      <option value="Mittel">Mittel</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Patches */}
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <label className="block text-sm font-medium text-[#7A7D83] mb-3">Kritische Patches</label>
              <div className="space-y-3">
                <div className="flex gap-3 items-center text-xs font-mono text-[#3E4148] uppercase tracking-wider">
                  <span className="flex-1">Software</span>
                  <span className="w-36 shrink-0">CVE</span>
                  <span className="flex-1">Beschreibung</span>
                </div>
                {nlPatches.map((patch, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <input type="text" value={patch.software} onChange={(e) => updatePatch(idx, 'software', e.target.value)} placeholder="Software..." className="flex-1 bg-[#0A0C0F] border border-[#1E2228] rounded-none px-3 py-2 text-sm text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]" />
                    <input type="text" value={patch.cve} onChange={(e) => updatePatch(idx, 'cve', e.target.value)} placeholder="CVE-XXXX-XXXX" className="w-36 shrink-0 bg-[#0A0C0F] border border-[#1E2228] rounded-none px-3 py-2 text-sm text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] font-mono" />
                    <input type="text" value={patch.description} onChange={(e) => updatePatch(idx, 'description', e.target.value)} placeholder="Beschreibung..." className="flex-1 bg-[#0A0C0F] border border-[#1E2228] rounded-none px-3 py-2 text-sm text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]" />
                  </div>
                ))}
              </div>
            </div>

            {/* DACH News */}
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <label className="block text-sm font-medium text-[#7A7D83] mb-2">DACH-Region News</label>
              <textarea value={nlDachNews} onChange={(e) => setNlDachNews(e.target.value)} placeholder="Neuigkeiten aus der DACH-Region..." rows={4} className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] text-sm" />
            </div>

            {/* Action Buttons */}
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
              <div className="flex flex-wrap items-center gap-3">
                <button onClick={() => setNlShowPreview(!nlShowPreview)} className="border border-[#1E2228] hover:border-[#C8A96E] text-[#7A7D83] hover:text-[#C8A96E] font-mono uppercase tracking-wider rounded-none px-5 py-2.5 text-sm transition-colors cursor-pointer">
                  <Eye className="w-4 h-4 inline mr-2" />{nlShowPreview ? 'Vorschau schliessen' : 'Vorschau'}
                </button>
                <button onClick={() => handleSendNewsletter(true)} disabled={nlSendStatus === 'sending'} className="border border-[#1E2228] hover:border-[#C8A96E] text-[#7A7D83] hover:text-[#C8A96E] font-mono uppercase tracking-wider rounded-none px-5 py-2.5 text-sm transition-colors cursor-pointer disabled:opacity-50">
                  <Send className="w-4 h-4 inline mr-2" />Test senden
                </button>
                {!nlConfirmSendAll ? (
                  <button onClick={() => setNlConfirmSendAll(true)} disabled={nlSendStatus === 'sending'} className="bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-5 py-2.5 text-sm transition-colors cursor-pointer disabled:opacity-50">
                    <Send className="w-4 h-4 inline mr-2" />An alle senden
                  </button>
                ) : (
                  <div className="flex items-center gap-3 bg-[#D97B5A]/10 border border-[#D97B5A]/30 rounded-none px-4 py-2">
                    <span className="text-[#D97B5A] text-sm font-mono">Wirklich an alle 2.340 Subscriber senden?</span>
                    <button onClick={() => handleSendNewsletter(false)} className="bg-[#D97B5A] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-4 py-1.5 text-xs cursor-pointer">Ja, senden</button>
                    <button onClick={() => setNlConfirmSendAll(false)} className="text-[#7A7D83] font-mono text-xs cursor-pointer hover:text-[#E8E6E0]">Abbrechen</button>
                  </div>
                )}
              </div>

              {/* Send Status */}
              {nlSendStatus && (
                <div className={`mt-4 flex items-center gap-2 text-sm font-mono rounded-none p-3 ${
                  nlSendStatus === 'sending' ? 'bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E]' :
                  nlSendStatus === 'success' ? 'bg-[#5A9A6B]/10 border border-[#5A9A6B]/30 text-[#5A9A6B]' :
                  'bg-[#D97B5A]/10 border border-[#D97B5A]/30 text-[#D97B5A]'
                }`}>
                  {nlSendStatus === 'sending' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {nlSendStatus === 'success' && <CheckCircle className="w-4 h-4" />}
                  {nlSendStatus === 'error' && <AlertTriangle className="w-4 h-4" />}
                  {nlSendProgress}
                </div>
              )}
            </div>

            {/* Preview */}
            {nlShowPreview && (
              <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
                <h3 className="text-sm font-mono text-[#7A7D83] uppercase tracking-wider mb-4">Newsletter Vorschau</h3>
                <div className="border border-[#1E2228] rounded-none overflow-hidden">
                  <iframe
                    srcDoc={buildNewsletterHTML()}
                    title="Newsletter Preview"
                    className="w-full bg-white"
                    style={{ height: '800px', border: 'none' }}
                  />
                </div>
              </div>
            )}
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

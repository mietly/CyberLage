import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, AlertTriangle, Bug, MapPin, Cpu, CheckCircle, Calendar, ArrowRight, Lock } from 'lucide-react';

const features = [
  { icon: AlertTriangle, title: 'Top 5 Bedrohungen', description: 'Die wichtigsten Cyber-Bedrohungen der Woche kompakt zusammengefasst.' },
  { icon: Bug, title: 'Kritische Patches', description: 'Alle relevanten Sicherheitsupdates und Patches auf einen Blick.' },
  { icon: MapPin, title: 'DACH-Vorfälle', description: 'Sicherheitsvorfälle in Deutschland, Österreich und der Schweiz.' },
  { icon: Cpu, title: 'KI-Zusammenfassung', description: 'KI-gestützte Analyse und Einordnung der Bedrohungslage.' },
];

const sampleNewsletter = {
  date: '25. März 2026',
  threats: [
    { name: 'Ransomware-Welle trifft Kliniken', level: 'kritisch' },
    { name: 'SAP NetWeaver RCE (CVE-2026-1234)', level: 'kritisch' },
    { name: 'KI-Phishing-Kampagne im DACH-Raum', level: 'hoch' },
    { name: 'Exchange Server Zero-Day', level: 'hoch' },
    { name: 'Linux Kernel Privilege Escalation', level: 'mittel' },
  ],
  patches: ['SAP NetWeaver 7.50-7.93 -- Patch verfügbar', 'Fortinet FortiOS 7.2.x/7.4.x -- Patch verfügbar', 'VMware vCenter Server 8.x -- Patch verfügbar'],
};

const levelColors = {
  kritisch: 'border-[#D97B5A]/30 text-[#D97B5A]',
  hoch: 'border-[#D97B5A]/20 text-[#D97B5A]/80',
  mittel: 'border-[#C8A96E]/30 text-[#C8A96E]',
};

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); if (email && role) setSubmitted(true); };

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E]/30 text-[#C8A96E] rounded-none px-4 py-2 mb-6">
            <Mail className="w-4 h-4" /><span className="text-sm font-mono">Kostenloser Newsletter</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Wöchentlicher <span className="text-[#C8A96E]">Threat Report</span></h1>
          <p className="text-lg text-[#7A7D83] max-w-2xl mx-auto">Jeden Montag erhältst du die wichtigsten Cybersecurity-Nachrichten aus dem DACH-Raum direkt in dein Postfach. Kompakt, relevant, auf Deutsch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 hover:border-[#C8A96E]/30 transition-colors">
              <feature.icon className="w-8 h-8 text-[#C8A96E] mb-4" />
              <h3 className="font-display text-lg mb-2">{feature.title}</h3>
              <p className="text-[#7A7D83] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mb-16">
          <Calendar className="w-5 h-5 text-[#C8A96E]" />
          <span className="text-[#C8A96E] font-mono text-lg">Jeden Montag in deinem Postfach</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-display mb-6">Jetzt anmelden</h2>
            {submitted ? (
              <div className="bg-[#5A9A6B]/10 border border-[#5A9A6B]/30 rounded-sm p-8 text-center">
                <CheckCircle className="w-12 h-12 text-[#5A9A6B] mx-auto mb-4" />
                <h3 className="text-xl font-display text-[#5A9A6B] mb-2">Fast geschafft!</h3>
                <p className="text-[#E8E6E0]">Wir haben dir eine Bestätigungs-E-Mail an <strong>{email}</strong> gesendet. Bitte klicke auf den Link in der E-Mail, um dein Abonnement zu bestätigen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#7A7D83] mb-2">E-Mail-Adresse</label>
                  <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="deine@email.de"
                    className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] transition-colors" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-[#7A7D83] mb-2">Deine Rolle</label>
                  <select id="role" required value={role} onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-3 text-[#E8E6E0] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E] transition-colors">
                    <option value="">Bitte wählen...</option>
                    <option value="it-admin">IT-Admin</option>
                    <option value="ciso">CISO</option>
                    <option value="entwickler">Entwickler</option>
                    <option value="interessiert">Interessiert</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-6 py-3 flex items-center justify-center gap-2 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />Newsletter abonnieren<ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-start gap-2 text-xs text-[#3E4148] mt-3">
                  <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>Wir verwenden Double-Opt-in. Du erhältst eine Bestätigungs-E-Mail, bevor wir dir den Newsletter senden. Du kannst dich jederzeit abmelden. Mehr in unserer{' '}
                    <Link to="/ueber-uns" className="text-[#C8A96E] hover:text-[#E8E6E0]">Datenschutzerklärung</Link>.</p>
                </div>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-display mb-6">Newsletter-Vorschau</h2>
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm overflow-hidden">
              <div className="bg-[#C8A96E] p-6">
                <div className="flex items-center gap-3 mb-2"><Shield className="w-6 h-6 text-[#0A0C0F]" /><span className="font-display text-[#0A0C0F] text-lg">CyberLage.de</span></div>
                <p className="text-[#0A0C0F]/80 text-sm font-mono">Wöchentlicher Threat Report -- {sampleNewsletter.date}</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-mono text-[#3E4148] uppercase tracking-wider mb-3">Top 5 Bedrohungen dieser Woche</h3>
                  <div className="space-y-2">
                    {sampleNewsletter.threats.map((threat, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-3 text-sm">
                        <span className="text-[#E8E6E0]">{idx + 1}. {threat.name}</span>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded-none border ${levelColors[threat.level]}`}>{threat.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-[#3E4148] uppercase tracking-wider mb-3">Kritische Patches</h3>
                  <ul className="space-y-1">
                    {sampleNewsletter.patches.map((patch, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#E8E6E0]"><CheckCircle className="w-4 h-4 text-[#5A9A6B] shrink-0" />{patch}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0A0C0F]/50 rounded-none p-4">
                  <h3 className="text-sm font-mono text-[#3E4148] uppercase tracking-wider mb-2">DACH-Vorfall der Woche</h3>
                  <p className="text-sm text-[#E8E6E0]">Ransomware-Angriff legt süddeutschen Klinikverbund lahm. Drei Kliniken im Notbetrieb, BSI gibt Warnung heraus...</p>
                  <span className="text-[#C8A96E] text-xs font-mono mt-2 inline-block">Weiterlesen &rarr;</span>
                </div>
                <div className="border border-[#C8A96E]/20 rounded-none p-4">
                  <div className="flex items-center gap-2 mb-2"><Cpu className="w-4 h-4 text-[#C8A96E]" /><h3 className="text-sm font-mono text-[#C8A96E]">KI-Einschätzung</h3></div>
                  <p className="text-sm text-[#E8E6E0]">Die Bedrohungslage im DACH-Raum bleibt angespannt. Besonders Gesundheitssektor und KRITIS-Betreiber sollten ihre Schutzmaßnahmen verstärken. Die Kombination aus ungepatchten VPN-Systemen und zunehmenden RaaS-Angriffen erfordert sofortiges Handeln.</p>
                </div>
              </div>
              <div className="border-t border-[#1E2228] p-4 text-center text-xs font-mono text-[#3E4148]">CyberLage.de -- Dein wöchentlicher Cybersecurity-Briefing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

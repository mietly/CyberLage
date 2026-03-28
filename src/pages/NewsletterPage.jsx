import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Shield,
  AlertTriangle,
  Bug,
  MapPin,
  Cpu,
  CheckCircle,
  Calendar,
  ArrowRight,
  Lock,
} from 'lucide-react';

const features = [
  {
    icon: AlertTriangle,
    title: 'Top 5 Bedrohungen',
    description: 'Die wichtigsten Cyber-Bedrohungen der Woche kompakt zusammengefasst.',
  },
  {
    icon: Bug,
    title: 'Kritische Patches',
    description: 'Alle relevanten Sicherheitsupdates und Patches auf einen Blick.',
  },
  {
    icon: MapPin,
    title: 'DACH-Vorfälle',
    description: 'Sicherheitsvorfälle in Deutschland, Österreich und der Schweiz.',
  },
  {
    icon: Cpu,
    title: 'KI-Zusammenfassung',
    description: 'KI-gestützte Analyse und Einordnung der Bedrohungslage.',
  },
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
  patches: [
    'SAP NetWeaver 7.50-7.93 -- Patch verfügbar',
    'Fortinet FortiOS 7.2.x/7.4.x -- Patch verfügbar',
    'VMware vCenter Server 8.x -- Patch verfügbar',
  ],
};

const levelColors = {
  kritisch: 'bg-red-500/20 text-red-400 border-red-500/30',
  hoch: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  mittel: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && role) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Kostenloser Newsletter</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wöchentlicher <span className="text-red-500">Threat Report</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Jeden Montag erhältst du die wichtigsten Cybersecurity-Nachrichten aus dem DACH-Raum
            direkt in dein Postfach. Kompakt, relevant, auf Deutsch.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Monday badge */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <Calendar className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-medium text-lg">
            Jeden Montag in deinem Postfach
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Signup Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Jetzt anmelden</h2>
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  Fast geschafft!
                </h3>
                <p className="text-gray-300">
                  Wir haben dir eine Bestätigungs-E-Mail an <strong>{email}</strong> gesendet.
                  Bitte klicke auf den Link in der E-Mail, um dein Abonnement zu bestätigen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-Mail-Adresse
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.de"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                    Deine Rolle
                  </label>
                  <select
                    id="role"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="it-admin">IT-Admin</option>
                    <option value="ciso">CISO</option>
                    <option value="entwickler">Entwickler</option>
                    <option value="interessiert">Interessiert</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  Newsletter abonnieren
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-start gap-2 text-xs text-gray-500 mt-3">
                  <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>
                    Wir verwenden Double-Opt-in. Du erhältst eine Bestätigungs-E-Mail, bevor wir dir
                    den Newsletter senden. Du kannst dich jederzeit abmelden. Mehr in unserer{' '}
                    <Link to="/ueber-uns" className="text-red-400 hover:underline">
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Sample Newsletter Preview */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Newsletter-Vorschau</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-white" />
                  <span className="font-bold text-white text-lg">CyberLage.de</span>
                </div>
                <p className="text-white/80 text-sm">
                  Wöchentlicher Threat Report -- {sampleNewsletter.date}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Top Threats */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Top 5 Bedrohungen dieser Woche
                  </h3>
                  <div className="space-y-2">
                    {sampleNewsletter.threats.map((threat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="text-gray-200">{idx + 1}. {threat.name}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border ${levelColors[threat.level]}`}
                        >
                          {threat.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Patches */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Kritische Patches
                  </h3>
                  <ul className="space-y-1">
                    {sampleNewsletter.patches.map((patch, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                        {patch}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DACH highlight */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    DACH-Vorfall der Woche
                  </h3>
                  <p className="text-sm text-gray-300">
                    Ransomware-Angriff legt süddeutschen Klinikverbund lahm. Drei Kliniken im
                    Notbetrieb, BSI gibt Warnung heraus...
                  </p>
                  <span className="text-red-400 text-xs mt-2 inline-block">Weiterlesen &rarr;</span>
                </div>

                {/* KI summary */}
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <h3 className="text-sm font-semibold text-purple-400">KI-Einschätzung</h3>
                  </div>
                  <p className="text-sm text-gray-300">
                    Die Bedrohungslage im DACH-Raum bleibt angespannt. Besonders Gesundheitssektor
                    und KRITIS-Betreiber sollten ihre Schutzmaßnahmen verstärken. Die Kombination aus
                    ungepatchten VPN-Systemen und zunehmenden RaaS-Angriffen erfordert sofortiges
                    Handeln.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-800 p-4 text-center text-xs text-gray-500">
                CyberLage.de -- Dein wöchentlicher Cybersecurity-Briefing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

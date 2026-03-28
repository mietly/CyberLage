import { useState } from 'react';
import {
  KeyRound,
  Star,
  StarHalf,
  Check,
  X,
  Monitor,
  Smartphone,
  Globe,
  Shield,
  Users,
  User,
  Award,
} from 'lucide-react';

const passwordManagers = [
  {
    name: 'Bitwarden',
    logo: 'BW',
    color: 'from-blue-600 to-blue-800',
    category: ['privat', 'unternehmen'],
    pricePrivat: 'Kostenlos / 10 $/Jahr Premium',
    priceUnternehmen: 'Ab 4 $/Nutzer/Monat',
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Browser'],
    features: [
      'Open Source',
      'Self-Hosting möglich',
      'Passwort-Generator',
      'TOTP-Authentifizierung',
      'Sichere Notizen',
      'Zero-Knowledge-Architektur',
    ],
    rating: 4.5,
    highlight: true,
    pros: ['Open Source & transparent', 'Selbst hosten möglich', 'Sehr günstiger Preis'],
    cons: ['UI etwas schlicht', 'Weniger Zusatzfeatures als Konkurrenz'],
  },
  {
    name: '1Password',
    logo: '1P',
    color: 'from-blue-500 to-indigo-600',
    category: ['privat', 'unternehmen'],
    pricePrivat: '2,99 $/Monat',
    priceUnternehmen: 'Ab 7,99 $/Nutzer/Monat',
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Browser'],
    features: [
      'Watchtower (Sicherheitsprüfung)',
      'Travel Mode',
      'Passkeys-Unterstützung',
      'Familien-Sharing',
      'SSO-Integration',
      'Advanced Reporting',
    ],
    rating: 4.5,
    highlight: false,
    pros: ['Beste UX am Markt', 'Starke Enterprise-Features', 'Watchtower-Funktion'],
    cons: ['Kein kostenloser Plan', 'Kein Self-Hosting'],
  },
  {
    name: 'KeePass',
    logo: 'KP',
    color: 'from-green-600 to-green-800',
    category: ['privat'],
    pricePrivat: 'Kostenlos (Open Source)',
    priceUnternehmen: 'Nicht speziell für Unternehmen',
    platforms: ['Windows', 'macOS (Ports)', 'Linux (Ports)', 'Mobile (Ports)'],
    features: [
      'Vollständig Open Source',
      'Lokale Datenbank',
      'Plugin-System',
      'Starke Verschlüsselung (AES-256)',
      'Kein Cloud-Zwang',
      'Portabel',
    ],
    rating: 4.0,
    highlight: false,
    pros: ['Komplett kostenlos', 'Volle Datenkontrolle', 'Kein Cloud-Zwang'],
    cons: ['Veraltet wirkende UI', 'Kein nativer Sync', 'Technisches Know-how nötig'],
  },
  {
    name: 'Dashlane',
    logo: 'DL',
    color: 'from-emerald-500 to-teal-600',
    category: ['privat', 'unternehmen'],
    pricePrivat: '3,49 $/Monat',
    priceUnternehmen: 'Ab 8 $/Nutzer/Monat',
    platforms: ['Windows', 'macOS', 'iOS', 'Android', 'Browser'],
    features: [
      'Dark-Web-Monitoring',
      'VPN integriert (Premium)',
      'Passwort-Health-Score',
      'Automatischer Passwort-Wechsel',
      'SSO-Integration',
      'SCIM-Provisioning',
    ],
    rating: 4.0,
    highlight: false,
    pros: ['VPN inklusive', 'Dark-Web-Monitoring', 'Automatischer Passwort-Wechsel'],
    cons: ['Teuer', 'Kein Linux-Desktop-Client', 'Keine Self-Hosting-Option'],
  },
  {
    name: 'LastPass',
    logo: 'LP',
    color: 'from-red-600 to-red-800',
    category: ['privat', 'unternehmen'],
    pricePrivat: '3,00 $/Monat',
    priceUnternehmen: 'Ab 4 $/Nutzer/Monat',
    platforms: ['Windows', 'macOS', 'iOS', 'Android', 'Browser'],
    features: [
      'Passwort-Generator',
      'Dark-Web-Monitoring',
      'Emergency Access',
      'Sichere Notizen',
      'Admin-Dashboard',
      'MFA-Integration',
    ],
    rating: 3.0,
    highlight: false,
    pros: ['Bekannte Marke', 'Einfache Bedienung', 'Günstiger Enterprise-Plan'],
    cons: [
      'Mehrere Sicherheitsvorfälle in der Vergangenheit',
      'Kostenloser Plan stark eingeschränkt',
      'Vertrauen durch Breaches beschädigt',
    ],
  },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
      {hasHalf && <StarHalf className="w-4 h-4 text-yellow-400 fill-yellow-400" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-600" />
      ))}
      <span className="text-sm text-gray-400 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function PasswordManagerPage() {
  const [filter, setFilter] = useState('alle');

  const filteredManagers =
    filter === 'alle'
      ? passwordManagers
      : passwordManagers.filter((pm) => pm.category.includes(filter));

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <KeyRound className="w-4 h-4" />
            <span className="text-sm font-medium">Tool-Vergleich</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Passwort Manager Vergleich</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Die besten Passwort Manager im Vergleich. Finde die richtige Lösung für
            Privatpersonen oder Unternehmen.
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8 justify-center">
          {[
            { id: 'alle', label: 'Alle', icon: KeyRound },
            { id: 'privat', label: 'Für Privatpersonen', icon: User },
            { id: 'unternehmen', label: 'Für Unternehmen', icon: Users },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                filter === f.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700'
              }`}
            >
              <f.icon className="w-4 h-4" />
              {f.label}
            </button>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className="space-y-6 mb-12">
          {filteredManagers.map((pm) => (
            <div
              key={pm.name}
              className={`bg-gray-900 border rounded-xl overflow-hidden ${
                pm.highlight ? 'border-red-500/50 ring-1 ring-red-500/20' : 'border-gray-800'
              }`}
            >
              {pm.highlight && (
                <div className="bg-red-600 text-white text-xs font-semibold text-center py-1.5 flex items-center justify-center gap-1">
                  <Award className="w-3 h-3" />
                  Empfehlung der Redaktion
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Logo & Name */}
                  <div className="flex items-center gap-4 lg:w-48 shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pm.color} flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {pm.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{pm.name}</h3>
                      <StarRating rating={pm.rating} />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Preis */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Preis
                      </h4>
                      <p className="text-sm text-gray-300 mb-1">
                        <span className="text-gray-500">Privat:</span> {pm.pricePrivat}
                      </p>
                      <p className="text-sm text-gray-300">
                        <span className="text-gray-500">Business:</span> {pm.priceUnternehmen}
                      </p>
                    </div>

                    {/* Plattformen */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Plattformen
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {pm.platforms.map((p) => (
                          <span
                            key={p}
                            className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Features
                      </h4>
                      <ul className="space-y-1">
                        {pm.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-green-400 shrink-0" />
                            {f}
                          </li>
                        ))}
                        {pm.features.length > 4 && (
                          <li className="text-xs text-gray-500">
                            +{pm.features.length - 4} weitere
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pros / Cons */}
                <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">
                      Vorteile
                    </h4>
                    <ul className="space-y-1">
                      {pm.pros.map((pro) => (
                        <li key={pro} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                      Nachteile
                    </h4>
                    <ul className="space-y-1">
                      {pm.cons.map((con) => (
                        <li key={con} className="flex items-center gap-2 text-sm text-gray-300">
                          <X className="w-4 h-4 text-red-400 shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-500/20 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold">Unsere Empfehlung</h2>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-gray-100">Für Privatpersonen:</strong> Wir empfehlen{' '}
              <strong className="text-red-400">Bitwarden</strong>. Als Open-Source-Lösung bietet
              es maximale Transparenz, einen kostenlosen Plan mit allen wichtigen Funktionen und
              die Möglichkeit, den Server selbst zu hosten. Wer eine polierte UX bevorzugt, greift
              zu <strong className="text-red-400">1Password</strong>.
            </p>
            <p>
              <strong className="text-gray-100">Für Unternehmen:</strong> Für Unternehmen im
              DACH-Raum empfehlen wir{' '}
              <strong className="text-red-400">Bitwarden Business</strong> oder{' '}
              <strong className="text-red-400">1Password Business</strong>. Bitwarden punktet mit
              Self-Hosting (ideal für DSGVO-Compliance) und günstigen Preisen. 1Password bietet
              die bessere Enterprise-Integration (SSO, SCIM) und ein starkes Admin-Dashboard.
            </p>
            <p className="text-sm text-gray-500">
              Hinweis: Von <strong>LastPass</strong> raten wir aufgrund der vergangenen
              Sicherheitsvorfälle derzeit ab. Bestehende LastPass-Nutzer sollten einen Wechsel in
              Erwägung ziehen und alle Passwörter nach der Migration ändern.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

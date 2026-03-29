import { useState } from 'react';
import { KeyRound, Star, StarHalf, Check, X, Monitor, Smartphone, Globe, Shield, Users, User, Award } from 'lucide-react';

const passwordManagers = [
  { name: 'Bitwarden', logo: 'BW', category: ['privat', 'unternehmen'], pricePrivat: 'Kostenlos / 10 $/Jahr Premium', priceUnternehmen: 'Ab 4 $/Nutzer/Monat', platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Browser'], features: ['Open Source', 'Self-Hosting möglich', 'Passwort-Generator', 'TOTP-Authentifizierung', 'Sichere Notizen', 'Zero-Knowledge-Architektur'], rating: 4.5, highlight: true, pros: ['Open Source & transparent', 'Selbst hosten möglich', 'Sehr günstiger Preis'], cons: ['UI etwas schlicht', 'Weniger Zusatzfeatures als Konkurrenz'] },
  { name: '1Password', logo: '1P', category: ['privat', 'unternehmen'], pricePrivat: '2,99 $/Monat', priceUnternehmen: 'Ab 7,99 $/Nutzer/Monat', platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Browser'], features: ['Watchtower (Sicherheitsprüfung)', 'Travel Mode', 'Passkeys-Unterstützung', 'Familien-Sharing', 'SSO-Integration', 'Advanced Reporting'], rating: 4.5, highlight: false, pros: ['Beste UX am Markt', 'Starke Enterprise-Features', 'Watchtower-Funktion'], cons: ['Kein kostenloser Plan', 'Kein Self-Hosting'] },
  { name: 'KeePass', logo: 'KP', category: ['privat'], pricePrivat: 'Kostenlos (Open Source)', priceUnternehmen: 'Nicht speziell für Unternehmen', platforms: ['Windows', 'macOS (Ports)', 'Linux (Ports)', 'Mobile (Ports)'], features: ['Vollständig Open Source', 'Lokale Datenbank', 'Plugin-System', 'Starke Verschlüsselung (AES-256)', 'Kein Cloud-Zwang', 'Portabel'], rating: 4.0, highlight: false, pros: ['Komplett kostenlos', 'Volle Datenkontrolle', 'Kein Cloud-Zwang'], cons: ['Veraltet wirkende UI', 'Kein nativer Sync', 'Technisches Know-how nötig'] },
  { name: 'Dashlane', logo: 'DL', category: ['privat', 'unternehmen'], pricePrivat: '3,49 $/Monat', priceUnternehmen: 'Ab 8 $/Nutzer/Monat', platforms: ['Windows', 'macOS', 'iOS', 'Android', 'Browser'], features: ['Dark-Web-Monitoring', 'VPN integriert (Premium)', 'Passwort-Health-Score', 'Automatischer Passwort-Wechsel', 'SSO-Integration', 'SCIM-Provisioning'], rating: 4.0, highlight: false, pros: ['VPN inklusive', 'Dark-Web-Monitoring', 'Automatischer Passwort-Wechsel'], cons: ['Teuer', 'Kein Linux-Desktop-Client', 'Keine Self-Hosting-Option'] },
  { name: 'LastPass', logo: 'LP', category: ['privat', 'unternehmen'], pricePrivat: '3,00 $/Monat', priceUnternehmen: 'Ab 4 $/Nutzer/Monat', platforms: ['Windows', 'macOS', 'iOS', 'Android', 'Browser'], features: ['Passwort-Generator', 'Dark-Web-Monitoring', 'Emergency Access', 'Sichere Notizen', 'Admin-Dashboard', 'MFA-Integration'], rating: 3.0, highlight: false, pros: ['Bekannte Marke', 'Einfache Bedienung', 'Günstiger Enterprise-Plan'], cons: ['Mehrere Sicherheitsvorfälle in der Vergangenheit', 'Kostenloser Plan stark eingeschränkt', 'Vertrauen durch Breaches beschädigt'] },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 text-[#C8A96E] fill-[#C8A96E]" />
      ))}
      {hasHalf && <StarHalf className="w-4 h-4 text-[#C8A96E] fill-[#C8A96E]" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-[#3E4148]" />
      ))}
      <span className="text-sm font-mono text-[#7A7D83] ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function PasswordManagerPage() {
  const [filter, setFilter] = useState('alle');
  const filteredManagers = filter === 'alle' ? passwordManagers : passwordManagers.filter((pm) => pm.category.includes(filter));

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E]/30 text-[#C8A96E] rounded-none px-4 py-2 mb-6">
            <KeyRound className="w-4 h-4" />
            <span className="text-sm font-mono">Tool-Vergleich</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Passwort Manager Vergleich</h1>
          <p className="text-lg text-[#7A7D83] max-w-2xl mx-auto">
            Die besten Passwort Manager im Vergleich. Finde die richtige Lösung für Privatpersonen oder Unternehmen.
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
              className={`flex items-center gap-2 px-4 py-2 rounded-none text-sm font-mono transition-colors cursor-pointer ${
                filter === f.id
                  ? 'bg-[#C8A96E] text-[#0A0C0F]'
                  : 'border border-[#1E2228] text-[#7A7D83] hover:border-[#C8A96E] hover:text-[#C8A96E]'
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
              className={`bg-[#0F1215] border rounded-sm overflow-hidden ${
                pm.highlight ? 'border-[#C8A96E]/50' : 'border-[#1E2228]'
              }`}
            >
              {pm.highlight && (
                <div className="bg-[#C8A96E] text-[#0A0C0F] text-xs font-mono uppercase tracking-wider text-center py-1.5 flex items-center justify-center gap-1">
                  <Award className="w-3 h-3" />
                  Empfehlung der Redaktion
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-center gap-4 lg:w-48 shrink-0">
                    <div className="w-12 h-12 rounded-none border border-[#1E2228] bg-[#0A0C0F] flex items-center justify-center text-[#C8A96E] font-mono text-lg">
                      {pm.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-display">{pm.name}</h3>
                      <StarRating rating={pm.rating} />
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-mono text-[#3E4148] uppercase tracking-wider mb-2">Preis</h4>
                      <p className="text-sm text-[#E8E6E0] mb-1"><span className="text-[#3E4148]">Privat:</span> {pm.pricePrivat}</p>
                      <p className="text-sm text-[#E8E6E0]"><span className="text-[#3E4148]">Business:</span> {pm.priceUnternehmen}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-[#3E4148] uppercase tracking-wider mb-2">Plattformen</h4>
                      <div className="flex flex-wrap gap-1">
                        {pm.platforms.map((p) => (
                          <span key={p} className="text-xs font-mono border border-[#1E2228] text-[#7A7D83] px-2 py-0.5 rounded-none">{p}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-[#3E4148] uppercase tracking-wider mb-2">Features</h4>
                      <ul className="space-y-1">
                        {pm.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-xs text-[#E8E6E0]">
                            <Check className="w-3 h-3 text-[#5A9A6B] shrink-0" />
                            {f}
                          </li>
                        ))}
                        {pm.features.length > 4 && (
                          <li className="text-xs text-[#3E4148]">+{pm.features.length - 4} weitere</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#1E2228] grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-mono text-[#5A9A6B] uppercase tracking-wider mb-2">Vorteile</h4>
                    <ul className="space-y-1">
                      {pm.pros.map((pro) => (
                        <li key={pro} className="flex items-center gap-2 text-sm text-[#E8E6E0]">
                          <Check className="w-4 h-4 text-[#5A9A6B] shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[#D97B5A] uppercase tracking-wider mb-2">Nachteile</h4>
                    <ul className="space-y-1">
                      {pm.cons.map((con) => (
                        <li key={con} className="flex items-center gap-2 text-sm text-[#E8E6E0]">
                          <X className="w-4 h-4 text-[#D97B5A] shrink-0" />
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
        <div className="border border-[#C8A96E]/20 rounded-sm p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-[#C8A96E]" />
            <h2 className="text-2xl font-display">Unsere Empfehlung</h2>
          </div>
          <div className="space-y-4 text-[#E8E6E0] leading-relaxed">
            <p>
              <strong className="text-[#E8E6E0]">Für Privatpersonen:</strong> Wir empfehlen{' '}
              <strong className="text-[#C8A96E]">Bitwarden</strong>. Als Open-Source-Lösung bietet
              es maximale Transparenz, einen kostenlosen Plan mit allen wichtigen Funktionen und
              die Möglichkeit, den Server selbst zu hosten. Wer eine polierte UX bevorzugt, greift
              zu <strong className="text-[#C8A96E]">1Password</strong>.
            </p>
            <p>
              <strong className="text-[#E8E6E0]">Für Unternehmen:</strong> Für Unternehmen im
              DACH-Raum empfehlen wir{' '}
              <strong className="text-[#C8A96E]">Bitwarden Business</strong> oder{' '}
              <strong className="text-[#C8A96E]">1Password Business</strong>. Bitwarden punktet mit
              Self-Hosting (ideal für DSGVO-Compliance) und günstigen Preisen. 1Password bietet
              die bessere Enterprise-Integration (SSO, SCIM) und ein starkes Admin-Dashboard.
            </p>
            <p className="text-sm text-[#3E4148]">
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

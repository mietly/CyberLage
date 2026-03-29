import { useState, useMemo } from 'react';
import {
  ClipboardCheck, Download, CheckCircle, Circle, BarChart3,
  Building2, Server, FileText, UserCheck,
} from 'lucide-react';

const checklistCategories = [
  { id: 'organisatorisch', name: 'Organisatorisch', icon: Building2, items: [
    { id: 1, text: 'Datenschutzbeauftragten (DSB) bestellt' },
    { id: 2, text: 'Verarbeitungsverzeichnis (Art. 30 DSGVO) erstellt und aktuell' },
    { id: 3, text: 'Datenschutz-Folgenabschätzungen (DSFA) für risikoreiche Verarbeitungen durchgeführt' },
    { id: 4, text: 'Auftragsverarbeitungsverträge (AVV) mit allen Dienstleistern abgeschlossen' },
    { id: 5, text: 'Datenschutzrichtlinie für Mitarbeiter erstellt und kommuniziert' },
    { id: 6, text: 'Regelmäßige Datenschutz-Schulungen für Mitarbeiter durchgeführt' },
  ]},
  { id: 'technisch', name: 'Technisch', icon: Server, items: [
    { id: 7, text: 'SSL/TLS-Verschlüsselung für alle Webseiten und Dienste aktiv' },
    { id: 8, text: 'E-Mail-Verschlüsselung (TLS) konfiguriert' },
    { id: 9, text: 'Festplattenverschlüsselung auf allen Endgeräten aktiviert' },
    { id: 10, text: 'Zugriffskontrolle und Berechtigungskonzept implementiert' },
    { id: 11, text: 'Regelmäßige Backups mit verschlüsselter Speicherung' },
    { id: 12, text: 'Logging und Monitoring für datenschutzrelevante Systeme aktiv' },
    { id: 13, text: 'Pseudonymisierung/Anonymisierung wo möglich umgesetzt' },
  ]},
  { id: 'dokumentation', name: 'Dokumentation', icon: FileText, items: [
    { id: 14, text: 'Datenschutzerklärung auf der Webseite vollständig und aktuell' },
    { id: 15, text: 'Cookie-Banner mit Opt-in-Mechanismus implementiert' },
    { id: 16, text: 'Einwilligungen werden nachweisbar dokumentiert' },
    { id: 17, text: 'Löschkonzept erstellt und Löschfristen definiert' },
    { id: 18, text: 'Meldeprozess für Datenpannen (72-Stunden-Frist) dokumentiert' },
  ]},
  { id: 'betroffenenrechte', name: 'Betroffenenrechte', icon: UserCheck, items: [
    { id: 19, text: 'Prozess für Auskunftsanfragen (Art. 15 DSGVO) etabliert' },
    { id: 20, text: 'Prozess für Löschungsanfragen (Art. 17 DSGVO) etabliert' },
  ]},
];

const allItems = checklistCategories.flatMap((cat) => cat.items);
const totalItems = allItems.length;

export default function DsgvoChecklist() {
  const [checked, setChecked] = useState({});
  const [showPdfMessage, setShowPdfMessage] = useState(false);

  const toggleItem = (id) => { setChecked((prev) => ({ ...prev, [id]: !prev[id] })); };

  const checkedCount = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  const percentage = Math.round((checkedCount / totalItems) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-[#5A9A6B]';
    if (percentage >= 50) return 'text-[#C8A96E]';
    return 'text-[#D97B5A]';
  };
  const getScoreLabel = () => {
    if (percentage >= 80) return 'Gut aufgestellt';
    if (percentage >= 50) return 'Handlungsbedarf';
    return 'Dringender Handlungsbedarf';
  };
  const getBarColor = () => {
    if (percentage >= 80) return 'bg-[#5A9A6B]';
    if (percentage >= 50) return 'bg-[#C8A96E]';
    return 'bg-[#D97B5A]';
  };

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E]/30 text-[#C8A96E] rounded-none px-4 py-2 mb-6">
            <ClipboardCheck className="w-4 h-4" />
            <span className="text-sm font-mono">Interaktives Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display mb-4">DSGVO Basis-Checkliste</h1>
          <p className="text-lg text-[#7A7D83] max-w-2xl mx-auto">
            Prüfe den DSGVO-Reifegrad deiner Organisation mit dieser interaktiven Checkliste.
            20 grundlegende Maßnahmen in 4 Kategorien.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#7A7D83]" />
              <span className="font-display">Fortschritt</span>
            </div>
            <span className="text-sm font-mono text-[#7A7D83]">{checkedCount} von {totalItems} erledigt</span>
          </div>
          <div className="w-full bg-[#0A0C0F] h-4 mb-2 overflow-hidden">
            <div className={`h-full transition-all duration-500 ${getBarColor()}`} style={{ width: `${percentage}%` }} />
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-2xl font-mono ${getScoreColor()}`}>{percentage}%</span>
            <span className={`text-sm font-mono ${getScoreColor()}`}>{getScoreLabel()}</span>
          </div>
        </div>

        {/* Checklist Categories */}
        <div className="space-y-6 mb-8">
          {checklistCategories.map((category) => {
            const catChecked = category.items.filter((item) => checked[item.id]).length;
            return (
              <div key={category.id} className="bg-[#0F1215] border border-[#1E2228] rounded-sm overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-[#1E2228]">
                  <div className="flex items-center gap-3">
                    <category.icon className="w-5 h-5 text-[#C8A96E]" />
                    <h2 className="text-lg font-display">{category.name}</h2>
                  </div>
                  <span className="text-sm font-mono text-[#7A7D83]">{catChecked}/{category.items.length}</span>
                </div>
                <div className="divide-y divide-[#1E2228]">
                  {category.items.map((item) => (
                    <label key={item.id} className="flex items-start gap-4 p-4 hover:bg-[#0A0C0F]/50 transition-colors cursor-pointer">
                      <button onClick={() => toggleItem(item.id)} className="mt-0.5 shrink-0 cursor-pointer">
                        {checked[item.id] ? (
                          <CheckCircle className="w-5 h-5 text-[#5A9A6B]" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#3E4148]" />
                        )}
                      </button>
                      <span className={`text-sm leading-relaxed ${checked[item.id] ? 'text-[#3E4148] line-through' : 'text-[#E8E6E0]'}`}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Score Summary */}
        <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 mb-8">
          <h2 className="text-lg font-display mb-4">Ergebnis</h2>
          <div className="flex items-center gap-6">
            <div className={`text-5xl font-mono ${getScoreColor()}`}>{percentage}%</div>
            <div>
              <p className={`text-lg font-display ${getScoreColor()}`}>{getScoreLabel()}</p>
              <p className="text-sm text-[#7A7D83] mt-1">
                {percentage >= 80
                  ? 'Deine Organisation hat eine solide DSGVO-Basis. Halte die Maßnahmen aktuell und überprüfe sie regelmäßig.'
                  : percentage >= 50
                  ? 'Es gibt noch offene Punkte. Priorisiere die fehlenden Maßnahmen und arbeite sie systematisch ab.'
                  : 'Dringender Handlungsbedarf! Viele grundlegende DSGVO-Maßnahmen fehlen. Beginne mit den organisatorischen Grundlagen.'}
              </p>
            </div>
          </div>
        </div>

        {/* PDF Download */}
        <div className="text-center">
          <button
            onClick={() => { setShowPdfMessage(true); setTimeout(() => setShowPdfMessage(false), 3000); }}
            className="inline-flex items-center gap-2 border border-[#1E2228] hover:border-[#C8A96E] text-[#7A7D83] hover:text-[#C8A96E] font-mono rounded-none px-6 py-3 transition-colors cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Als PDF herunterladen
          </button>
          {showPdfMessage && (
            <p className="text-sm font-mono text-[#C8A96E] mt-3">
              PDF-Export kommt bald! Diese Funktion wird in Kürze verfügbar sein.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

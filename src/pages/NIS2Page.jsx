import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, ChevronDown, ChevronUp, ExternalLink, ArrowRight, Download, Clock, AlertTriangle, CheckCircle, Building2, FileText, HelpCircle, Zap, Users, Scale, ShieldCheck } from 'lucide-react'

const sectors = [
  { name: 'Energie', sub: 'Strom, Gas, Öl, Fernwärme, Wasserstoff', essential: true },
  { name: 'Transport', sub: 'Luft-, Schienen-, Wasser- und Straßenverkehr', essential: true },
  { name: 'Bankwesen', sub: 'Kreditinstitute', essential: true },
  { name: 'Finanzmarktinfrastruktur', sub: 'Handelsplätze, zentrale Gegenparteien', essential: true },
  { name: 'Gesundheit', sub: 'Krankenhäuser, Labore, Pharma, Medizinprodukte', essential: true },
  { name: 'Trinkwasser', sub: 'Wasserversorgung', essential: true },
  { name: 'Abwasser', sub: 'Abwasserentsorgung', essential: true },
  { name: 'Digitale Infrastruktur', sub: 'DNS, TLD, Rechenzentren, CDN, Vertrauensdienste', essential: true },
  { name: 'ICT-Service-Management', sub: 'Managed Service Provider, Managed Security', essential: true },
  { name: 'Öffentliche Verwaltung', sub: 'Zentral- und Regionalregierung', essential: true },
  { name: 'Weltraum', sub: 'Betreiber von Bodeninfrastruktur', essential: true },
  { name: 'Post & Kurier', sub: 'Post- und Kurierdienste', essential: false },
  { name: 'Abfallwirtschaft', sub: 'Abfallbewirtschaftung', essential: false },
  { name: 'Chemie', sub: 'Herstellung und Handel mit chemischen Stoffen', essential: false },
  { name: 'Lebensmittel', sub: 'Herstellung, Verarbeitung, Vertrieb', essential: false },
  { name: 'Verarbeitendes Gewerbe', sub: 'Medizinprodukte, Elektronik, Fahrzeugbau, Maschinenbau', essential: false },
  { name: 'Digitale Dienste', sub: 'Online-Marktplätze, Suchmaschinen, soziale Netzwerke', essential: false },
  { name: 'Forschung', sub: 'Forschungseinrichtungen', essential: false },
]

const timeline = [
  { date: 'Januar 2023', label: 'NIS2-Richtlinie in Kraft getreten', done: true },
  { date: 'Oktober 2024', label: 'Frist für nationale Umsetzung (EU)', done: true },
  { date: '2025', label: 'Verzögerte Umsetzung in Deutschland (NIS2UmsuCG)', done: true },
  { date: '2026', label: 'Erwartete Verabschiedung in Deutschland', done: false },
  { date: 'Nach Inkrafttreten', label: 'Registrierungspflicht für betroffene Einrichtungen', done: false },
  { date: '+3 Monate', label: 'Meldepflichten bei Sicherheitsvorfällen gelten', done: false },
]

const requirements = [
  { title: 'Risikomanagement', desc: 'Implementierung angemessener technischer und organisatorischer Maßnahmen zum Umgang mit Cyberrisiken' },
  { title: 'Meldepflichten', desc: 'Erhebliche Sicherheitsvorfälle innerhalb von 24 Stunden melden, Zwischenbericht nach 72 Stunden, Abschlussbericht nach einem Monat' },
  { title: 'Geschäftsführer-Haftung', desc: 'Geschäftsführer und Vorstände haften persönlich für die Einhaltung und müssen an Schulungen teilnehmen' },
  { title: 'Supply Chain Security', desc: 'Sicherheit in der gesamten Lieferkette sicherstellen, einschließlich Dienstleister und Zulieferer' },
  { title: 'Incident Response', desc: 'Funktionierendes Notfallmanagement und Business Continuity Management etablieren' },
  { title: 'Verschlüsselung', desc: 'Einsatz von Kryptografie und ggf. Multi-Faktor-Authentifizierung wo angemessen' },
  { title: 'Regelmäßige Audits', desc: 'Regelmäßige Sicherheitsüberprüfungen und Penetrationstests durchführen' },
  { title: 'Mitarbeiter-Schulung', desc: 'Regelmäßige Cybersecurity-Schulungen für alle Mitarbeiter, insbesondere Führungskräfte' },
]

const faqData = [
  { q: 'Was ist der Unterschied zwischen NIS1 und NIS2?', a: 'NIS2 erweitert den Anwendungsbereich erheblich: Mehr Sektoren, mehr Unternehmen, strengere Anforderungen, höhere Bußgelder (bis 10 Mio. EUR oder 2% des weltweiten Umsatzes) und persönliche Haftung der Geschäftsführung. Außerdem werden die Meldepflichten verschärft.' },
  { q: 'Bin ich als KMU von NIS2 betroffen?', a: 'Grundsätzlich gilt NIS2 für mittlere Unternehmen (ab 50 Mitarbeiter oder 10 Mio. EUR Umsatz) und große Unternehmen in den betroffenen Sektoren. Kleinere Unternehmen können aber betroffen sein, wenn sie als kritisch eingestuft werden oder digitale Infrastruktur betreiben.' },
  { q: 'Was passiert, wenn ich die Anforderungen nicht erfülle?', a: 'Es drohen Bußgelder von bis zu 10 Millionen Euro oder 2% des weltweiten Jahresumsatzes (für wesentliche Einrichtungen). Wichtige Einrichtungen: bis 7 Mio. EUR oder 1,4% des Umsatzes. Zusätzlich können Geschäftsführer persönlich haftbar gemacht werden.' },
  { q: 'Wie lange dauert die Umsetzung?', a: 'Erfahrungsgemäß benötigen Unternehmen 12 bis 18 Monate für eine vollständige Umsetzung. Je nach Reifegrad der bestehenden IT-Sicherheit kann es auch schneller gehen. Wichtig: Frühzeitig beginnen!' },
  { q: 'Reicht eine ISO 27001 Zertifizierung aus?', a: 'Eine ISO 27001 Zertifizierung ist eine hervorragende Basis und deckt viele NIS2-Anforderungen ab. Sie allein reicht aber nicht aus, da NIS2 spezifische Anforderungen wie Meldepflichten, Supply Chain Security und Geschäftsführer-Haftung hat.' },
  { q: 'Was bedeutet "Geschäftsführer-Haftung"?', a: 'Geschäftsführer und Vorstände sind persönlich dafür verantwortlich, dass die NIS2-Anforderungen umgesetzt werden. Sie müssen Risikomanagement-Maßnahmen genehmigen und an Cybersecurity-Schulungen teilnehmen. Bei Verstößen können sie persönlich haftbar gemacht werden.' },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#1E2228] rounded-sm overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#0F1215]/50 transition-colors">
        <span className="text-sm font-medium text-[#E8E6E0] pr-4">{item.q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-[#3E4148] shrink-0" /> : <ChevronDown className="h-5 w-5 text-[#3E4148] shrink-0" />}
      </button>
      {open && (<div className="px-5 pb-4 text-sm text-[#7A7D83] leading-relaxed border-t border-[#1E2228] pt-3">{item.a}</div>)}
    </div>
  )
}

export default function NIS2Page() {
  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-[#C8A96E]" />
              <span className="text-sm font-mono text-[#C8A96E]">EU-Richtlinie 2022/2555</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display mb-4">
              <span className="text-[#C8A96E]">NIS2</span>{' '}
              <span className="text-[#E8E6E0]">- Alles was du wissen musst</span>
            </h1>
            <p className="text-lg text-[#7A7D83] mb-8 leading-relaxed">
              Die NIS2-Richtlinie verschärft die Cybersecurity-Anforderungen für tausende Unternehmen im DACH-Raum. Hier findest du alles Wichtige auf einen Blick.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/tools/nis2-check" className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider text-sm transition-colors">
                Bin ich betroffen? Quick-Check <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://corelead.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-[#1E2228] hover:border-[#C8A96E] text-[#7A7D83] hover:text-[#C8A96E] font-mono text-sm transition-colors">
                NIS2 Gap-Analyse starten <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        <section>
          <div className="flex items-center gap-2 mb-6"><HelpCircle className="h-6 w-6 text-[#C8A96E]" /><h2 className="text-2xl font-display text-[#E8E6E0]">Was ist NIS2?</h2></div>
          <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
            <div className="prose-sm text-[#E8E6E0] space-y-4 leading-relaxed">
              <p>Die <strong className="text-[#E8E6E0]">NIS2-Richtlinie</strong> (Network and Information Security Directive 2) ist eine EU-Richtlinie, die am 16. Januar 2023 in Kraft getreten ist. Sie ersetzt die ursprüngliche NIS-Richtlinie von 2016 und stellt einen Meilenstein in der europäischen Cybersecurity-Regulierung dar.</p>
              <p>Ziel ist es, ein <strong className="text-[#E8E6E0]">hohes gemeinsames Cybersicherheitsniveau</strong> in der gesamten EU zu erreichen. Dafür wurden der Anwendungsbereich deutlich erweitert, die Anforderungen verschärft und die Sanktionen bei Nichteinhaltung massiv erhöht.</p>
              <p>In Deutschland wird NIS2 durch das <strong className="text-[#E8E6E0]">NIS2-Umsetzungs- und Cybersicherheitsstärkungsgesetz (NIS2UmsuCG)</strong> in nationales Recht überführt. Die Umsetzung hat sich verzögert, wird aber voraussichtlich 2026 erfolgen.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6"><Building2 className="h-6 w-6 text-[#C8A96E]" /><h2 className="text-2xl font-display text-[#E8E6E0]">Wer ist betroffen?</h2></div>
          <p className="text-sm text-[#7A7D83] mb-4">NIS2 unterscheidet zwischen <strong className="text-[#E8E6E0]">wesentlichen Einrichtungen</strong> (Essential Entities) und <strong className="text-[#E8E6E0]">wichtigen Einrichtungen</strong> (Important Entities).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sectors.map((s) => (
              <div key={s.name} className={`flex items-start gap-3 px-4 py-3 rounded-none border ${s.essential ? 'border-[#D97B5A]/20' : 'border-[#C8A96E]/20'}`}>
                <div className={`mt-1 w-2 h-2 shrink-0 ${s.essential ? 'bg-[#D97B5A]' : 'bg-[#C8A96E]'}`} />
                <div><span className="text-sm font-medium text-[#E8E6E0]">{s.name}</span><p className="text-xs text-[#3E4148] mt-0.5">{s.sub}</p></div>
                <span className={`ml-auto text-xs font-mono shrink-0 mt-0.5 ${s.essential ? 'text-[#D97B5A]' : 'text-[#C8A96E]'}`}>{s.essential ? 'Wesentlich' : 'Wichtig'}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6"><Clock className="h-6 w-6 text-[#C8A96E]" /><h2 className="text-2xl font-display text-[#E8E6E0]">Fristen & Deadlines</h2></div>
          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[#1E2228]" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 relative">
                  <div className={`w-10 h-10 rounded-none flex items-center justify-center shrink-0 z-10 ${item.done ? 'bg-[#5A9A6B]/20 border border-[#5A9A6B]/40' : 'bg-[#0F1215] border border-[#1E2228]'}`}>
                    {item.done ? <CheckCircle className="h-5 w-5 text-[#5A9A6B]" /> : <Clock className="h-5 w-5 text-[#3E4148]" />}
                  </div>
                  <div className="pt-2">
                    <span className={`text-xs font-mono ${item.done ? 'text-[#5A9A6B]' : 'text-[#3E4148]'}`}>{item.date}</span>
                    <p className={`text-sm ${item.done ? 'text-[#E8E6E0]' : 'text-[#7A7D83]'}`}>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6"><FileText className="h-6 w-6 text-[#C8A96E]" /><h2 className="text-2xl font-display text-[#E8E6E0]">Die wichtigsten Anforderungen</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((req, i) => (
              <div key={i} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5 hover:border-[#C8A96E]/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none border border-[#C8A96E]/30 flex items-center justify-center shrink-0"><span className="text-sm font-mono text-[#C8A96E]">{i + 1}</span></div>
                  <div><h3 className="text-sm font-display text-[#E8E6E0] mb-1">{req.title}</h3><p className="text-xs text-[#7A7D83] leading-relaxed">{req.desc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6"><Scale className="h-6 w-6 text-[#D97B5A]" /><h2 className="text-2xl font-display text-[#E8E6E0]">Bußgelder bei Nichteinhaltung</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#D97B5A]/10 border border-[#D97B5A]/30 rounded-sm p-5">
              <h3 className="text-sm font-display text-[#D97B5A] mb-2">Wesentliche Einrichtungen</h3>
              <p className="text-2xl font-mono text-[#E8E6E0] mb-1">Bis 10 Mio. EUR</p>
              <p className="text-xs text-[#7A7D83]">oder 2% des weltweiten Jahresumsatzes (je nachdem, welcher Betrag höher ist)</p>
            </div>
            <div className="bg-[#C8A96E]/10 border border-[#C8A96E]/30 rounded-sm p-5">
              <h3 className="text-sm font-display text-[#C8A96E] mb-2">Wichtige Einrichtungen</h3>
              <p className="text-2xl font-mono text-[#E8E6E0] mb-1">Bis 7 Mio. EUR</p>
              <p className="text-xs text-[#7A7D83]">oder 1,4% des weltweiten Jahresumsatzes (je nachdem, welcher Betrag höher ist)</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6"><HelpCircle className="h-6 w-6 text-[#C8A96E]" /><h2 className="text-2xl font-display text-[#E8E6E0]">Häufige Fragen (FAQ)</h2></div>
          <div className="space-y-3">{faqData.map((item, i) => (<FAQItem key={i} item={item} />))}</div>
        </section>

        <section>
          <div className="border border-[#C8A96E]/20 rounded-sm p-8 text-center">
            <ShieldCheck className="h-12 w-12 text-[#C8A96E] mx-auto mb-4" />
            <h2 className="text-2xl font-display text-[#E8E6E0] mb-2">Bist du von NIS2 betroffen?</h2>
            <p className="text-[#7A7D83] mb-6 max-w-md mx-auto">Mache unseren kostenlosen Quick-Check oder starte direkt mit einer professionellen Gap-Analyse.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/tools/nis2-check" className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider text-sm transition-colors">Kostenloser Quick-Check <ArrowRight className="h-4 w-4" /></Link>
              <a href="https://corelead.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-none border border-[#1E2228] hover:border-[#C8A96E] text-[#7A7D83] hover:text-[#C8A96E] font-mono text-sm transition-colors">Jetzt NIS2 Gap-Analyse starten <ExternalLink className="h-4 w-4" /></a>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6"><Download className="h-6 w-6 text-[#C8A96E]" /><h2 className="text-2xl font-display text-[#E8E6E0]">Downloads & Checklisten</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'NIS2 Anforderungs-Checkliste', desc: 'Alle Anforderungen auf einen Blick' },
              { title: 'NIS2 Betroffenheits-Check', desc: 'Ist dein Unternehmen betroffen?' },
              { title: 'Meldepflichten-Guide', desc: 'Fristen und Prozesse für Vorfallmeldungen' },
            ].map((dl, i) => (
              <button key={i} className="flex items-start gap-3 bg-[#0F1215] border border-[#1E2228] rounded-sm p-4 hover:border-[#C8A96E]/30 transition-colors text-left group" onClick={() => alert('Download-Funktion wird bald verfügbar sein.')}>
                <Download className="h-5 w-5 text-[#3E4148] group-hover:text-[#C8A96E] transition-colors shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#E8E6E0]">{dl.title}</h4>
                  <p className="text-xs text-[#3E4148] mt-0.5">{dl.desc}</p>
                  <span className="text-xs font-mono text-[#C8A96E] mt-1 inline-block">PDF - Demnächst verfügbar</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

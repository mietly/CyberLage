import { useState } from 'react'
import { Fish, CheckCircle, XCircle, AlertTriangle, ArrowRight, RotateCcw, Lightbulb, Mail, Trophy } from 'lucide-react'

const phishingExamples = [
  {
    id: 1,
    subject: 'Dringend: Ihr Konto wird gesperrt!',
    sender: 'sicherheit@sparkasse-online-verifizierung.com',
    senderDisplay: 'Sparkasse Kundendienst',
    body: `Sehr geehrter Kunde,

wir haben ungewöhnliche Aktivitäten auf Ihrem Konto festgestellt. Aus Sicherheitsgründen müssen Sie Ihre Identität innerhalb von 24 Stunden bestätigen, andernfalls wird Ihr Konto dauerhaft gesperrt.

Klicken Sie hier um Ihr Konto zu verifizieren:
[Jetzt verifizieren →]

Mit freundlichen Grüßen,
Ihr Sparkassen-Sicherheitsteam`,
    isPhishing: true,
    redFlags: [
      'Absender-Domain "sparkasse-online-verifizierung.com" ist nicht die echte Sparkassen-Domain',
      'Extreme Dringlichkeit und Drohung mit Kontosperrung',
      'Allgemeine Anrede "Sehr geehrter Kunde" statt persönlicher Name',
      'Aufforderung, auf einen Link zu klicken um persönliche Daten einzugeben',
      'Banken fordern nie per E-Mail zur Kontobestätigung auf',
    ],
  },
  {
    id: 2,
    subject: 'Rechnung Nr. 2026-0847 vom 28.03.2026',
    sender: 'buchhaltung@telekom.de',
    senderDisplay: 'Deutsche Telekom',
    body: `Guten Tag,

anbei erhalten Sie Ihre aktuelle Mobilfunkrechnung für März 2026.

Rechnungsbetrag: 47,99 EUR
Fälligkeitsdatum: 15.04.2026

Ihre Rechnung finden Sie wie gewohnt im Kundencenter unter:
https://www.telekom.de/kundencenter

Bei Fragen erreichen Sie uns unter 0800 330 1000.

Mit freundlichen Grüßen,
Ihre Telekom`,
    isPhishing: false,
    redFlags: [
      'Legitime Absender-Domain telekom.de',
      'Kein verdächtiger Link - verweist auf die offizielle Telekom-Website',
      'Keine extreme Dringlichkeit oder Drohungen',
      'Offizielle Kundenhotline angegeben',
      'Typischer Rechnungsaufbau wie von der Telekom gewohnt',
    ],
  },
  {
    id: 3,
    subject: 'RE: Gehaltsanpassung Q2 2026 - Vertraulich',
    sender: 'hr-team@firma-name.co',
    senderDisplay: 'HR Abteilung',
    body: `Hallo,

im Anhang findest du die Übersicht der geplanten Gehaltsanpassungen für Q2 2026. Bitte behandle diese Information streng vertraulich.

Für den Zugriff auf das Dokument musst du dich mit deinen Firmen-Zugangsdaten anmelden.

[Dokument öffnen - Gehaltsanpassungen_Q2_2026.xlsx]

Bitte bestätige den Erhalt.

Viele Grüße,
HR Team`,
    isPhishing: true,
    redFlags: [
      'Domain ".co" statt der üblichen Firmendomain - leicht zu übersehen',
      'Nutzt Neugier und Vertraulichkeit als psychologischen Trigger',
      'Verlangt Firmen-Zugangsdaten für ein angebliches Dokument',
      'Unpersönliche Anrede "Hallo" ohne Namen',
      '"RE:" im Betreff suggeriert eine laufende Konversation, die es nie gab',
    ],
  },
  {
    id: 4,
    subject: 'Ihr Microsoft 365 Speicher ist zu 95% voll',
    sender: 'no-reply@microsoft-365-storage.net',
    senderDisplay: 'Microsoft 365',
    body: `Sehr geehrte/r Nutzer/in,

Ihr Microsoft 365 OneDrive-Speicher hat 95% der Kapazität erreicht. Um Datenverlust zu vermeiden, erweitern Sie bitte umgehend Ihren Speicherplatz.

Aktuell: 4,75 GB / 5,00 GB belegt

[Speicher kostenlos erweitern →]

Sollten Sie nicht innerhalb von 48 Stunden reagieren, können neue Dateien nicht mehr synchronisiert werden.

Microsoft 365 Team`,
    isPhishing: true,
    redFlags: [
      'Domain "microsoft-365-storage.net" ist keine offizielle Microsoft-Domain',
      'Microsoft verwendet "microsoft.com" oder "office.com" als Absender',
      'Zeitdruck durch 48-Stunden-Frist',
      'Unpersönliche Anrede',
      '"Kostenlos erweitern" - klingt zu gut und soll zum Klicken verleiten',
    ],
  },
]

export default function PhishingGuide() {
  const [currentExample, setCurrentExample] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [revealed, setRevealed] = useState({})

  const example = phishingExamples[currentExample]
  const hasAnswered = userAnswers[example.id] !== undefined
  const isRevealed = revealed[example.id]
  const wasCorrect = userAnswers[example.id] === example.isPhishing

  const totalAnswered = Object.keys(userAnswers).length
  const totalCorrect = Object.entries(userAnswers).filter(
    ([id, answer]) => phishingExamples.find((e) => e.id === parseInt(id))?.isPhishing === answer
  ).length

  function handleAnswer(isPhishing) {
    if (hasAnswered) return
    setUserAnswers((prev) => ({ ...prev, [example.id]: isPhishing }))
    setRevealed((prev) => ({ ...prev, [example.id]: true }))
  }

  function goNext() {
    if (currentExample < phishingExamples.length - 1) {
      setCurrentExample(currentExample + 1)
    }
  }

  function goPrev() {
    if (currentExample > 0) {
      setCurrentExample(currentExample - 1)
    }
  }

  function restart() {
    setCurrentExample(0)
    setUserAnswers({})
    setRevealed({})
  }

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Fish className="h-8 w-8 text-[#C8A96E]" />
            <h1 className="text-3xl font-display text-[#C8A96E]">
              Phishing erkennen
            </h1>
          </div>
          <p className="text-[#7A7D83]">Trainiere dein Auge: Erkennst du die Phishing-Mails?</p>
        </div>

        {/* Score */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-[#0F1215] border border-[#1E2228] rounded-none px-4 py-2">
            <Trophy className="h-4 w-4 text-[#C8A96E]" />
            <span className="text-sm font-mono text-[#7A7D83]">
              Punkte: <span className="font-bold text-[#E8E6E0]">{totalCorrect}</span> / {totalAnswered}
            </span>
          </div>
          <span className="text-xs font-mono text-[#3E4148]">
            Beispiel {currentExample + 1} von {phishingExamples.length}
          </span>
          {totalAnswered > 0 && (
            <button
              onClick={restart}
              className="ml-auto flex items-center gap-1 text-xs text-[#3E4148] hover:text-[#7A7D83] transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              Neustart
            </button>
          )}
        </div>

        {/* Email Preview */}
        <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm overflow-hidden mb-6">
          {/* Email Header */}
          <div className="border-b border-[#1E2228] px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-[#3E4148]" />
              <span className="text-xs font-mono text-[#3E4148]">E-Mail</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="text-xs text-[#3E4148] w-12 shrink-0 mt-0.5">Von:</span>
                <div>
                  <span className="text-sm font-medium text-[#E8E6E0]">{example.senderDisplay}</span>
                  <span className="text-xs font-mono text-[#3E4148] ml-2">&lt;{example.sender}&gt;</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#3E4148] w-12 shrink-0">Betreff:</span>
                <span className="text-sm font-medium text-[#E8E6E0]">{example.subject}</span>
              </div>
            </div>
          </div>

          {/* Email Body */}
          <div className="px-5 py-5">
            <pre className="text-sm text-[#E8E6E0] whitespace-pre-wrap font-sans leading-relaxed">
              {example.body}
            </pre>
          </div>
        </div>

        {/* Answer Buttons */}
        {!hasAnswered ? (
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-none border border-[#D97B5A]/30 text-[#D97B5A] font-mono text-sm hover:border-[#D97B5A] transition-colors"
            >
              <AlertTriangle className="h-5 w-5" />
              Ja, das ist Phishing!
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-none border border-[#5A9A6B]/30 text-[#5A9A6B] font-mono text-sm hover:border-[#5A9A6B] transition-colors"
            >
              <CheckCircle className="h-5 w-5" />
              Nein, das ist echt
            </button>
          </div>
        ) : null}

        {/* Result / Explanation */}
        {isRevealed && (
          <div
            className={`rounded-sm border p-5 mb-6 ${
              wasCorrect
                ? 'bg-[#5A9A6B]/10 border-[#5A9A6B]/30'
                : 'bg-[#D97B5A]/10 border-[#D97B5A]/30'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              {wasCorrect ? (
                <>
                  <CheckCircle className="h-5 w-5 text-[#5A9A6B]" />
                  <span className="font-display text-[#5A9A6B]">Richtig!</span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-[#D97B5A]" />
                  <span className="font-display text-[#D97B5A]">Leider falsch!</span>
                </>
              )}
            </div>

            <p className="text-sm text-[#E8E6E0] mb-4">
              Diese E-Mail ist{' '}
              <span className={`font-mono ${example.isPhishing ? 'text-[#D97B5A]' : 'text-[#5A9A6B]'}`}>
                {example.isPhishing ? 'Phishing' : 'echt / legitim'}
              </span>
              .
            </p>

            <h4 className="text-sm font-display text-[#7A7D83] mb-2">
              {example.isPhishing ? 'Red Flags:' : 'Erkennungsmerkmale:'}
            </h4>
            <ul className="space-y-1.5">
              {example.redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#7A7D83]">
                  {example.isPhishing ? (
                    <AlertTriangle className="h-4 w-4 text-[#D97B5A] shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-[#5A9A6B] shrink-0 mt-0.5" />
                  )}
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={goPrev}
            disabled={currentExample === 0}
            className="px-4 py-2 rounded-none text-sm font-mono text-[#7A7D83] hover:text-[#E8E6E0] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Vorheriges Beispiel
          </button>
          {currentExample < phishingExamples.length - 1 && (
            <button
              onClick={goNext}
              className="flex items-center gap-2 px-5 py-2.5 rounded-none text-sm font-mono uppercase tracking-wider bg-[#C8A96E] text-[#0A0C0F] transition-colors"
            >
              Nächstes Beispiel
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Tips Section */}
        <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-[#C8A96E]" />
            <h3 className="text-lg font-display text-[#E8E6E0]">Tipps zum Erkennen von Phishing</h3>
          </div>

          <div className="space-y-4 text-sm text-[#E8E6E0]">
            <div>
              <h4 className="font-display text-[#E8E6E0] mb-1">1. Absender-Adresse prüfen</h4>
              <p className="text-[#7A7D83]">
                Schau dir immer die vollständige E-Mail-Adresse an, nicht nur den Anzeigenamen.
                Achte auf verdächtige Domains wie "sparkasse-online.com" statt "sparkasse.de".
              </p>
            </div>
            <div>
              <h4 className="font-display text-[#E8E6E0] mb-1">2. Dringlichkeit hinterfragen</h4>
              <p className="text-[#7A7D83]">
                Phishing-Mails setzen fast immer auf Zeitdruck. "Sofort handeln", "Konto wird gesperrt",
                "Innerhalb von 24 Stunden" - solche Formulierungen sind ein starkes Warnsignal.
              </p>
            </div>
            <div>
              <h4 className="font-display text-[#E8E6E0] mb-1">3. Links vor dem Klicken prüfen</h4>
              <p className="text-[#7A7D83]">
                Fahre mit der Maus über Links (ohne zu klicken) und prüfe die Ziel-URL.
                Stimmt die Domain nicht mit dem angeblichen Absender überein, ist es wahrscheinlich Phishing.
              </p>
            </div>
            <div>
              <h4 className="font-display text-[#E8E6E0] mb-1">4. Persönliche Anrede</h4>
              <p className="text-[#7A7D83]">
                Seriöse Unternehmen sprechen dich in der Regel mit deinem Namen an.
                "Sehr geehrter Kunde" oder "Lieber Nutzer" können auf Phishing hindeuten.
              </p>
            </div>
            <div>
              <h4 className="font-display text-[#E8E6E0] mb-1">5. Im Zweifel: Direkt beim Absender nachfragen</h4>
              <p className="text-[#7A7D83]">
                Bist du unsicher, kontaktiere das Unternehmen über die offizielle Website oder Telefonnummer -
                niemals über Links oder Kontaktdaten aus der verdächtigen E-Mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

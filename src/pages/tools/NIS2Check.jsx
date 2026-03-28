import { useState } from 'react'
import { ShieldCheck, ArrowRight, ArrowLeft, RotateCcw, ExternalLink, Building2, AlertTriangle, CheckCircle } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: 'In welchem Sektor ist dein Unternehmen primär tätig?',
    options: [
      { label: 'Energie (Strom, Gas, Öl, Fernwärme, Wasserstoff)', score: 3 },
      { label: 'Transport & Verkehr (Luft, Schiene, Wasser, Straße)', score: 3 },
      { label: 'Bankwesen & Finanzmarktinfrastruktur', score: 3 },
      { label: 'Gesundheitswesen', score: 3 },
      { label: 'Trinkwasser / Abwasser', score: 3 },
      { label: 'Digitale Infrastruktur (DNS, TLD, Rechenzentren, CDN)', score: 3 },
      { label: 'ICT-Service-Management (B2B)', score: 2 },
      { label: 'Öffentliche Verwaltung', score: 2 },
      { label: 'Weltraum', score: 2 },
      { label: 'Post- und Kurierdienste', score: 2 },
      { label: 'Abfallwirtschaft', score: 2 },
      { label: 'Chemie / Lebensmittel / Forschung', score: 2 },
      { label: 'Verarbeitendes Gewerbe / Herstellung', score: 2 },
      { label: 'Digitale Dienste (Marktplätze, Suchmaschinen, soziale Netzwerke)', score: 2 },
      { label: 'Keiner der genannten Sektoren', score: 0 },
    ],
  },
  {
    id: 2,
    question: 'Wie viele Mitarbeiter hat dein Unternehmen?',
    options: [
      { label: 'Weniger als 50 Mitarbeiter', score: 0 },
      { label: '50 bis 249 Mitarbeiter', score: 2 },
      { label: '250 oder mehr Mitarbeiter', score: 3 },
    ],
  },
  {
    id: 3,
    question: 'Wie hoch ist der Jahresumsatz deines Unternehmens?',
    options: [
      { label: 'Unter 10 Mio. Euro', score: 0 },
      { label: '10 bis 50 Mio. Euro', score: 2 },
      { label: 'Über 50 Mio. Euro', score: 3 },
    ],
  },
  {
    id: 4,
    question: 'Erbringt dein Unternehmen Dienstleistungen, die für die Aufrechterhaltung kritischer gesellschaftlicher oder wirtschaftlicher Tätigkeiten wesentlich sind?',
    options: [
      { label: 'Ja, wir sind essentieller Dienstleister', score: 3 },
      { label: 'Teilweise, wir unterstützen kritische Dienstleister', score: 2 },
      { label: 'Nein', score: 0 },
    ],
  },
  {
    id: 5,
    question: 'Betreibt dein Unternehmen IT-Infrastruktur für andere Unternehmen (z.B. Managed Services, Cloud, Hosting)?',
    options: [
      { label: 'Ja, als Hauptgeschäft', score: 3 },
      { label: 'Ja, als Nebenleistung', score: 1 },
      { label: 'Nein', score: 0 },
    ],
  },
  {
    id: 6,
    question: 'Ist dein Unternehmen Teil der Lieferkette eines KRITIS-Betreibers oder eines NIS2-pflichtigen Unternehmens?',
    options: [
      { label: 'Ja, direkt', score: 3 },
      { label: 'Ja, indirekt', score: 1 },
      { label: 'Nein / Nicht bekannt', score: 0 },
    ],
  },
  {
    id: 7,
    question: 'Verarbeitet dein Unternehmen sensible Daten in großem Umfang (personenbezogen, Gesundheit, Finanzen)?',
    options: [
      { label: 'Ja, in großem Umfang', score: 2 },
      { label: 'Ja, in begrenztem Umfang', score: 1 },
      { label: 'Nein', score: 0 },
    ],
  },
  {
    id: 8,
    question: 'Hat dein Unternehmen bereits ein formales Informationssicherheits-Managementsystem (ISMS)?',
    options: [
      { label: 'Ja, zertifiziert (z.B. ISO 27001)', score: 0 },
      { label: 'Ja, aber nicht zertifiziert', score: 0 },
      { label: 'Teilweise / in Planung', score: 1 },
      { label: 'Nein', score: 1 },
    ],
  },
  {
    id: 9,
    question: 'Operiert dein Unternehmen in mehreren EU-Mitgliedsstaaten?',
    options: [
      { label: 'Ja', score: 2 },
      { label: 'Nein, nur in einem Land', score: 0 },
    ],
  },
  {
    id: 10,
    question: 'Wurde dein Unternehmen von einer nationalen Behörde bereits als "wesentliche" oder "wichtige" Einrichtung identifiziert?',
    options: [
      { label: 'Ja, als wesentliche Einrichtung', score: 3 },
      { label: 'Ja, als wichtige Einrichtung', score: 2 },
      { label: 'Nein', score: 0 },
      { label: 'Nicht bekannt', score: 0 },
    ],
  },
]

function getResult(score) {
  if (score >= 15) {
    return {
      level: 'high',
      title: 'Wahrscheinlich betroffen',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10 border-red-500/30',
      icon: AlertTriangle,
      iconColor: 'text-red-400',
      description:
        'Basierend auf deinen Angaben ist dein Unternehmen mit hoher Wahrscheinlichkeit von der NIS2-Richtlinie betroffen. Du solltest zeitnah eine vollständige Gap-Analyse durchführen und mit der Umsetzung der Anforderungen beginnen.',
    }
  }
  if (score >= 8) {
    return {
      level: 'medium',
      title: 'Möglicherweise betroffen',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10 border-yellow-500/30',
      icon: ShieldCheck,
      iconColor: 'text-yellow-400',
      description:
        'Dein Unternehmen könnte von der NIS2-Richtlinie betroffen sein. Eine detaillierte Prüfung ist empfehlenswert, da die genaue Einordnung von weiteren Faktoren abhängt. Lass dich professionell beraten.',
    }
  }
  return {
    level: 'low',
    title: 'Wahrscheinlich nicht betroffen',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10 border-green-500/30',
    icon: CheckCircle,
    iconColor: 'text-green-400',
    description:
      'Basierend auf deinen Angaben ist dein Unternehmen wahrscheinlich nicht direkt von der NIS2-Richtlinie betroffen. Beachte jedoch, dass sich die Anforderungen über die Lieferkette auch indirekt auswirken können.',
  }
}

export default function NIS2Check() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const total = questions.length
  const progress = ((currentQ + (showResult ? 1 : 0)) / total) * 100

  function selectAnswer(optionIndex) {
    setAnswers((prev) => ({ ...prev, [currentQ]: optionIndex }))
  }

  function next() {
    if (currentQ < total - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setShowResult(true)
    }
  }

  function prev() {
    if (showResult) {
      setShowResult(false)
    } else if (currentQ > 0) {
      setCurrentQ(currentQ - 1)
    }
  }

  function restart() {
    setCurrentQ(0)
    setAnswers({})
    setShowResult(false)
  }

  const totalScore = Object.entries(answers).reduce((sum, [qIdx, optIdx]) => {
    return sum + questions[qIdx].options[optIdx].score
  }, 0)

  const result = getResult(totalScore)
  const ResultIcon = result.icon

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-8 w-8 text-blue-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              NIS2 Quick-Check
            </h1>
          </div>
          <p className="text-gray-400">Finde in wenigen Minuten heraus, ob dein Unternehmen von NIS2 betroffen ist.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2 text-xs text-gray-500">
            <span>Frage {Math.min(currentQ + 1, total)} von {total}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {!showResult ? (
          <>
            {/* Question */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <h2 className="text-lg font-bold text-white mb-6">
                {questions[currentQ].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQ].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                      answers[currentQ] === i
                        ? 'bg-blue-500/15 border-blue-500/40 text-blue-300'
                        : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-750'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prev}
                disabled={currentQ === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück
              </button>

              <button
                onClick={next}
                disabled={answers[currentQ] === undefined}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {currentQ === total - 1 ? 'Ergebnis anzeigen' : 'Weiter'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Result */}
            <div className={`border rounded-xl p-6 mb-6 ${result.bgColor}`}>
              <div className="flex items-center gap-3 mb-4">
                <ResultIcon className={`h-8 w-8 ${result.iconColor}`} />
                <h2 className={`text-2xl font-bold ${result.color}`}>{result.title}</h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{result.description}</p>
              <p className="text-xs text-gray-500 mt-3">
                Erreichte Punkte: {totalScore} / {total * 3} (Dieser Quick-Check ersetzt keine professionelle Beratung)
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Vollständige NIS2 Gap-Analyse</h3>
              <p className="text-sm text-gray-400 mb-5">
                Dieser Quick-Check bietet eine erste Einschätzung. Für eine vollständige und rechtssichere
                Analyse empfehlen wir das professionelle NIS2-Tool von Corelead Solutions.
              </p>

              <div className="space-y-3">
                <a
                  href="https://nis2.corelead-solutions.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-medium text-sm transition-all"
                >
                  Vollständige NIS2 Gap-Analyse starten
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://corelead-solutions.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg border border-gray-700 hover:border-gray-600 text-gray-300 font-medium text-sm transition-colors"
                >
                  Jetzt professionelle Analyse starten
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <button
                onClick={prev}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück
              </button>
              <button
                onClick={restart}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Erneut starten
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

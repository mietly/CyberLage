import { useState, useEffect } from 'react'
import { Award, CheckCircle, XCircle, RotateCcw, Share2, ArrowRight } from 'lucide-react'

const BEST_SCORE_KEY = 'cyberlage-quiz-best'

const questions = [
  {
    question: 'Was bedeutet die Abkürzung "APT"?',
    options: ['Advanced Persistent Threat', 'Automatic Penetration Testing', 'Applied Protection Technology', 'Advanced Protocol Transfer'],
    correct: 0,
    explanation: 'APT steht für Advanced Persistent Threat -- ein langfristiger, gezielter Cyberangriff, bei dem Angreifer unentdeckt im Netzwerk bleiben.',
  },
  {
    question: 'Welcher CVSS-Score gilt als "kritisch"?',
    options: ['7.0-8.9', '9.0-10.0', '5.0-6.9', '8.0-9.9'],
    correct: 1,
    explanation: 'Ein CVSS-Score von 9.0 bis 10.0 wird als "kritisch" eingestuft und erfordert sofortige Maßnahmen.',
  },
  {
    question: 'Was ist der Hauptzweck von MFA?',
    options: ['Schnellerer Login', 'Zusätzliche Authentifizierungsebene', 'Passwort-Verschlüsselung', 'Netzwerk-Monitoring'],
    correct: 1,
    explanation: 'Multi-Faktor-Authentifizierung (MFA) fügt eine zusätzliche Sicherheitsebene hinzu, indem mehrere Nachweise der Identität verlangt werden.',
  },
  {
    question: 'Was ist ein Zero-Day-Exploit?',
    options: ['Ein Angriff am ersten Arbeitstag', 'Schwachstelle ohne verfügbaren Patch', 'Ein Virus der nach 0 Tagen verschwindet', 'Ein Test-Exploit'],
    correct: 1,
    explanation: 'Ein Zero-Day-Exploit nutzt eine Schwachstelle aus, für die noch kein Patch oder Fix verfügbar ist.',
  },
  {
    question: 'Welche Meldepflicht gilt bei NIS2 für die Erstmeldung?',
    options: ['12 Stunden', '24 Stunden', '48 Stunden', '72 Stunden'],
    correct: 1,
    explanation: 'Die NIS2-Richtlinie schreibt eine Erstmeldung innerhalb von 24 Stunden nach Erkennung eines erheblichen Sicherheitsvorfalls vor.',
  },
  {
    question: 'Was bedeutet "Phishing"?',
    options: ['Netzwerk-Scanning', 'Social-Engineering per E-Mail', 'Firewall-Umgehung', 'Datenbank-Angriff'],
    correct: 1,
    explanation: 'Phishing ist eine Form des Social Engineering, bei der Angreifer per E-Mail oder gefälschten Websites versuchen, sensible Daten zu stehlen.',
  },
  {
    question: 'Was ist der Zweck eines SIEM?',
    options: ['E-Mail-Verschlüsselung', 'Zentrale Sicherheitsereignis-Analyse', 'Passwort-Management', 'Netzwerk-Geschwindigkeit messen'],
    correct: 1,
    explanation: 'Ein SIEM (Security Information and Event Management) sammelt und analysiert zentral Sicherheitsereignisse aus verschiedenen Quellen.',
  },
  {
    question: 'Wofür steht DSGVO?',
    options: ['Deutsche Sicherheits-Grundverordnung', 'Datenschutz-Grundverordnung', 'Digitale Sicherheits-Governance', 'Daten-Sicherungs-Grundverordnung'],
    correct: 1,
    explanation: 'DSGVO steht für Datenschutz-Grundverordnung, die europäische Verordnung zum Schutz personenbezogener Daten.',
  },
  {
    question: 'Was ist Ransomware?',
    options: ['Antivirus-Software', 'Schadsoftware die Daten verschlüsselt', 'Ein Backup-Tool', 'Eine Firewall-Konfiguration'],
    correct: 1,
    explanation: 'Ransomware ist Schadsoftware, die Daten verschlüsselt und ein Lösegeld für die Entschlüsselung fordert.',
  },
  {
    question: 'Was ist der sicherste zweite Faktor für MFA?',
    options: ['SMS-Code', 'E-Mail-Code', 'Hardware Security Key', 'Sicherheitsfrage'],
    correct: 2,
    explanation: 'Hardware Security Keys (z.B. YubiKey) gelten als sicherster zweiter Faktor, da sie nicht aus der Ferne abgefangen werden können.',
  },
  {
    question: 'Was bedeutet "Lateral Movement"?',
    options: ['Datenübertragung ins Ausland', 'Seitliche Bewegung im Netzwerk', 'Hardware-Migration', 'Backup-Rotation'],
    correct: 1,
    explanation: 'Lateral Movement beschreibt die seitliche Ausbreitung eines Angreifers innerhalb eines Netzwerks nach dem initialen Zugang.',
  },
  {
    question: 'Welches Protokoll ist für verschlüsselte Websites zuständig?',
    options: ['FTP', 'HTTPS/TLS', 'SMTP', 'DNS'],
    correct: 1,
    explanation: 'HTTPS nutzt TLS (Transport Layer Security), um die Kommunikation zwischen Browser und Webserver zu verschlüsseln.',
  },
  {
    question: 'Was ist ein SOC?',
    options: ['System Operation Command', 'Security Operations Center', 'Software Optimization Core', 'Server Online Control'],
    correct: 1,
    explanation: 'Ein SOC (Security Operations Center) ist eine zentrale Einheit, die die IT-Sicherheit eines Unternehmens überwacht und auf Vorfälle reagiert.',
  },
  {
    question: 'Was sollte man bei einem Phishing-Verdacht tun?',
    options: ['Link anklicken um zu prüfen', 'Melden und nicht klicken', 'E-Mail weiterleiten an Kollegen', 'Ignorieren und löschen'],
    correct: 1,
    explanation: 'Bei Phishing-Verdacht sollte man nicht auf Links klicken und den Vorfall an die IT-Abteilung melden.',
  },
  {
    question: 'Wie oft sollten Backups mindestens getestet werden?',
    options: ['Jährlich', 'Vierteljährlich', 'Einmalig bei Einrichtung', 'Nur nach einem Vorfall'],
    correct: 1,
    explanation: 'Backups sollten mindestens vierteljährlich getestet werden, um sicherzustellen, dass die Wiederherstellung im Ernstfall funktioniert.',
  },
]

function getRating(score) {
  if (score >= 13) return { label: 'Security-Experte', color: 'text-green-400' }
  if (score >= 10) return { label: 'Fortgeschritten', color: 'text-blue-400' }
  if (score >= 6) return { label: 'Grundkenntnisse', color: 'text-yellow-400' }
  return { label: 'Einsteiger', color: 'text-red-400' }
}

export default function SecurityQuiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [bestScore, setBestScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem(BEST_SCORE_KEY)) || 0
    } catch {
      return 0
    }
  })
  const [copied, setCopied] = useState(false)

  const q = questions[currentQ]
  const progress = ((currentQ + (answered ? 1 : 0)) / questions.length) * 100

  function handleAnswer(index) {
    if (answered) return
    setSelected(index)
    setAnswered(true)
    if (index === q.correct) {
      setScore((s) => s + 1)
    }
  }

  function handleNext() {
    if (currentQ + 1 >= questions.length) {
      const finalScore = score
      setFinished(true)
      if (finalScore > bestScore) {
        setBestScore(finalScore)
        localStorage.setItem(BEST_SCORE_KEY, finalScore.toString())
      }
    } else {
      setCurrentQ((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  function handleRestart() {
    setCurrentQ(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setFinished(false)
  }

  function handleShare() {
    const rating = getRating(score)
    const text = `Ich habe ${score}/15 beim CyberLage Security-Quiz erreicht! Bewertung: ${rating.label}. Teste dein Wissen: cyberlage.de/quiz`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (finished) {
    const rating = getRating(score)
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Ergebnis</span>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
            <Award className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-3xl font-bold mb-2">{score} / 15</h2>
            <p className={`text-xl font-semibold mb-6 ${rating.color}`}>{rating.label}</p>
            {bestScore > 0 && (
              <p className="text-sm text-gray-500 mb-6">
                Dein Bestwert: {bestScore}/15
              </p>
            )}

            <div className="w-full bg-gray-800 rounded-full h-3 mb-8">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 transition-all duration-500"
                style={{ width: `${(score / 15) * 100}%` }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleRestart}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg px-6 py-3 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Nochmal versuchen
              </button>
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium rounded-lg px-6 py-3 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                {copied ? 'Kopiert!' : 'Ergebnis teilen'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Security-Quiz</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Security-Quiz</h1>
          <p className="text-lg text-gray-400">
            Teste dein Cybersecurity-Wissen!
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Frage {currentQ + 1} von {questions.length}</span>
            <span>{score} richtig</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-red-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6">{q.question}</h2>

          <div className="space-y-3">
            {q.options.map((option, i) => {
              let style = 'bg-gray-800 border-gray-700 hover:border-gray-600 text-gray-300'
              if (answered) {
                if (i === q.correct) {
                  style = 'bg-green-500/20 border-green-500/40 text-green-400'
                } else if (i === selected && i !== q.correct) {
                  style = 'bg-red-500/20 border-red-500/40 text-red-400'
                } else {
                  style = 'bg-gray-800 border-gray-700 text-gray-500'
                }
              } else if (i === selected) {
                style = 'bg-red-600/20 border-red-500/40 text-white'
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={answered}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${style}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {option}
                    {answered && i === q.correct && <CheckCircle className="w-4 h-4 ml-auto shrink-0" />}
                    {answered && i === selected && i !== q.correct && <XCircle className="w-4 h-4 ml-auto shrink-0" />}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {answered && (
            <div className={`mt-6 p-4 rounded-lg text-sm ${
              selected === q.correct
                ? 'bg-green-500/10 border border-green-500/20 text-green-300'
                : 'bg-red-500/10 border border-red-500/20 text-red-300'
            }`}>
              <p className="font-semibold mb-1">
                {selected === q.correct ? 'Richtig!' : 'Falsch!'}
              </p>
              <p className="text-gray-400">{q.explanation}</p>
            </div>
          )}
        </div>

        {/* Next Button */}
        {answered && (
          <button
            onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl px-6 py-3 transition-colors cursor-pointer"
          >
            {currentQ + 1 >= questions.length ? 'Ergebnis anzeigen' : 'Nächste Frage'}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}

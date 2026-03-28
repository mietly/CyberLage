import { useState } from 'react'
import { ShieldCheck, ArrowRight, ArrowLeft, RotateCcw, ExternalLink, Share2, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: 'Ist Multi-Faktor-Authentifizierung (MFA) für alle Mitarbeiter aktiviert?',
    area: 'MFA',
    options: [
      { label: 'Ja, für alle Mitarbeiter und alle Systeme', score: 3 },
      { label: 'Teilweise (nur für bestimmte Systeme oder Nutzer)', score: 1 },
      { label: 'Nein', score: 0 },
    ],
    recommendation: 'Aktiviere MFA für alle Benutzerkonten, insbesondere für Admin-Zugänge, E-Mail und VPN. Microsoft Authenticator, YubiKey oder FIDO2 sind empfehlenswert.',
  },
  {
    id: 2,
    question: 'Werden regelmäßige Backups mit Offline-Kopie erstellt?',
    area: 'Backups',
    options: [
      { label: 'Ja, nach der 3-2-1-Regel mit Offline-Kopie', score: 3 },
      { label: 'Teilweise (Backups vorhanden, aber ohne Offline-Kopie)', score: 1 },
      { label: 'Nein', score: 0 },
    ],
    recommendation: 'Implementiere die 3-2-1-Backup-Regel: 3 Kopien, 2 verschiedene Medien, 1 Offline/Offsite. Teste regelmäßig die Wiederherstellung.',
  },
  {
    id: 3,
    question: 'Gibt es einen strukturierten Patch-Management-Prozess?',
    area: 'Patching',
    options: [
      { label: 'Ja, mit definierten SLAs und automatischem Deployment', score: 3 },
      { label: 'Teilweise (manuelle Updates ohne festen Prozess)', score: 1 },
      { label: 'Nein', score: 0 },
    ],
    recommendation: 'Etabliere einen Patch-Management-Prozess mit klaren SLAs: Kritische Patches innerhalb von 24-72h, reguläre innerhalb von 30 Tagen. Nutze WSUS, SCCM oder ähnliche Tools.',
  },
  {
    id: 4,
    question: 'Erhalten alle Mitarbeiter regelmäßig Security Awareness Training?',
    area: 'Awareness',
    options: [
      { label: 'Ja, regelmäßig mit Phishing-Simulationen', score: 3 },
      { label: 'Teilweise (gelegentliche Schulungen)', score: 1 },
      { label: 'Nein', score: 0 },
    ],
    recommendation: 'Führe mindestens vierteljährliche Security-Awareness-Trainings durch. Ergänze mit monatlichen Phishing-Simulationen. Menschliche Fehler sind der häufigste Angriffsvektor.',
  },
  {
    id: 5,
    question: 'Ist eine Netzwerksegmentierung implementiert?',
    area: 'Netzwerk',
    options: [
      { label: 'Ja, mit VLANs, Firewalls und Zero-Trust-Ansatz', score: 3 },
      { label: 'Teilweise (grundlegende Segmentierung vorhanden)', score: 1 },
      { label: 'Nein, flaches Netzwerk', score: 0 },
    ],
    recommendation: 'Segmentiere dein Netzwerk in Zonen (Server, Clients, IoT, Gäste). Implementiere Micro-Segmentierung und Zero-Trust-Prinzipien, um laterale Bewegungen zu verhindern.',
  },
  {
    id: 6,
    question: 'Gibt es einen Incident Response Plan, der regelmäßig getestet wird?',
    area: 'Incident Response',
    options: [
      { label: 'Ja, dokumentiert und regelmäßig getestet (Tabletop-Übungen)', score: 3 },
      { label: 'Teilweise (Plan vorhanden, aber nicht getestet)', score: 1 },
      { label: 'Nein', score: 0 },
    ],
    recommendation: 'Erstelle einen Incident Response Plan mit klaren Rollen, Eskalationswegen und Kommunikationsvorlagen. Teste ihn mindestens jährlich mit Tabletop-Übungen.',
  },
  {
    id: 7,
    question: 'Ist eine Endpoint Detection & Response (EDR) Lösung im Einsatz?',
    area: 'EDR',
    options: [
      { label: 'Ja, EDR/XDR auf allen Endpoints', score: 3 },
      { label: 'Teilweise (nur klassischer Antivirus oder nicht flächendeckend)', score: 1 },
      { label: 'Nein', score: 0 },
    ],
    recommendation: 'Ersetze klassischen Antivirus durch eine EDR/XDR-Lösung (z.B. CrowdStrike, SentinelOne, Microsoft Defender for Endpoint). EDR erkennt auch fortgeschrittene Angriffe.',
  },
  {
    id: 8,
    question: 'Werden regelmäßig Penetrationstests durchgeführt?',
    area: 'Pentests',
    options: [
      { label: 'Ja, mindestens jährlich durch externe Spezialisten', score: 3 },
      { label: 'Teilweise (nur interne Scans oder unregelmäßig)', score: 1 },
      { label: 'Nein', score: 0 },
    ],
    recommendation: 'Führe mindestens jährlich einen externen Penetrationstest durch. Ergänze mit regelmäßigen Vulnerability Scans und Bug-Bounty-Programmen.',
  },
  {
    id: 9,
    question: 'Werden sensible Daten verschlüsselt (at rest und in transit)?',
    area: 'Verschlüsselung',
    options: [
      { label: 'Ja, vollständige Verschlüsselung (at rest + in transit)', score: 3 },
      { label: 'Teilweise (nur in transit oder nur teilweise)', score: 1 },
      { label: 'Nein', score: 0 },
    ],
    recommendation: 'Verschlüssele alle sensiblen Daten: TLS 1.3 für Datenübertragung, AES-256 für gespeicherte Daten, Festplattenverschlüsselung (BitLocker/FileVault) auf allen Geräten.',
  },
  {
    id: 10,
    question: 'Ist ein zentrales Logging und Monitoring (SIEM) im Einsatz?',
    area: 'SIEM',
    options: [
      { label: 'Ja, SIEM mit 24/7-Monitoring und Alerting', score: 3 },
      { label: 'Teilweise (Logging vorhanden, aber kein aktives Monitoring)', score: 1 },
      { label: 'Nein', score: 0 },
    ],
    recommendation: 'Implementiere ein SIEM-System (z.B. Microsoft Sentinel, Splunk, Elastic SIEM) mit zentralem Log-Management. Definiere Alerts für verdächtige Aktivitäten und stelle 24/7-Monitoring sicher.',
  },
]

function getResult(score) {
  if (score >= 25) {
    return {
      level: 'excellent',
      title: 'Sehr gut',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10 border-green-500/30',
      description: 'Dein Unternehmen verfügt über ein starkes Sicherheitsfundament. Halte dieses Niveau und optimiere kontinuierlich.',
    }
  }
  if (score >= 18) {
    return {
      level: 'good',
      title: 'Gut',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/30',
      description: 'Solide Basis vorhanden. Einige Bereiche haben noch Optimierungspotenzial. Fokussiere dich auf die identifizierten Schwachstellen.',
    }
  }
  if (score >= 10) {
    return {
      level: 'improvement',
      title: 'Verbesserungsbedarf',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10 border-yellow-500/30',
      description: 'Mehrere wichtige Sicherheitsmaßnahmen fehlen oder sind unvollständig. Priorisiere die kritischsten Bereiche und handle zeitnah.',
    }
  }
  return {
    level: 'critical',
    title: 'Kritisch',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10 border-red-500/30',
    description: 'Dein Unternehmen hat erhebliche Sicherheitslücken. Sofortige Maßnahmen sind erforderlich, um grundlegende Risiken zu minimieren.',
  }
}

function RadarChart({ scores }) {
  // Simple CSS-based radar/spider chart
  const areas = questions.map((q) => q.area)
  const maxScore = 3
  const centerX = 150
  const centerY = 150
  const radius = 120
  const n = areas.length
  const angleStep = (2 * Math.PI) / n
  const startAngle = -Math.PI / 2

  function getPoint(index, value) {
    const angle = startAngle + index * angleStep
    const r = (value / maxScore) * radius
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    }
  }

  // Grid levels
  const levels = [1, 2, 3]
  const gridPaths = levels.map((level) => {
    const points = Array.from({ length: n }).map((_, i) => getPoint(i, level))
    return points.map((p) => `${p.x},${p.y}`).join(' ')
  })

  // Data polygon
  const dataPoints = scores.map((score, i) => getPoint(i, score))
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(' ')

  // Label positions
  const labelPoints = Array.from({ length: n }).map((_, i) => {
    const angle = startAngle + i * angleStep
    const r = radius + 24
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
      label: areas[i],
    }
  })

  return (
    <div className="flex justify-center">
      <svg viewBox="0 0 300 300" className="w-full max-w-[320px]">
        {/* Grid lines */}
        {gridPaths.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="rgb(55, 65, 81)"
            strokeWidth="0.5"
            opacity={0.6}
          />
        ))}

        {/* Axis lines */}
        {Array.from({ length: n }).map((_, i) => {
          const p = getPoint(i, maxScore)
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={p.x}
              y2={p.y}
              stroke="rgb(55, 65, 81)"
              strokeWidth="0.5"
              opacity={0.4}
            />
          )
        })}

        {/* Data polygon */}
        <polygon
          points={dataPath}
          fill="rgba(59, 130, 246, 0.15)"
          stroke="rgb(59, 130, 246)"
          strokeWidth="2"
        />

        {/* Data points */}
        {dataPoints.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill={scores[i] === 3 ? 'rgb(34, 197, 94)' : scores[i] === 1 ? 'rgb(234, 179, 8)' : 'rgb(239, 68, 68)'}
          />
        ))}

        {/* Labels */}
        {labelPoints.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgb(156, 163, 175)"
            fontSize="8"
            fontWeight="500"
          >
            {p.label}
          </text>
        ))}
      </svg>
    </div>
  )
}

export default function SecurityScore() {
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

  const scores = questions.map((q, i) => {
    if (answers[i] === undefined) return 0
    return q.options[answers[i]].score
  })

  // Find areas that need improvement
  const weakAreas = questions.filter((q, i) => answers[i] !== undefined && q.options[answers[i]].score < 3)

  function handleShare() {
    const text = `Mein Unternehmen hat ${totalScore}/30 Punkte im Security Score erreicht: ${result.title}. Teste deinen Score auf CyberLage.de!`
    if (navigator.share) {
      navigator.share({ title: 'Security Score - CyberLage.de', text, url: window.location.href })
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert('Score wurde in die Zwischenablage kopiert!')
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="h-8 w-8 text-blue-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Security Score
            </h1>
          </div>
          <p className="text-gray-400">Wie sicher ist dein Unternehmen? Finde es in 10 Fragen heraus.</p>
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
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-500 font-medium">{questions[currentQ].area}</span>
              </div>
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
                        ? opt.score === 3
                          ? 'bg-green-500/15 border-green-500/40 text-green-300'
                          : opt.score === 1
                            ? 'bg-yellow-500/15 border-yellow-500/40 text-yellow-300'
                            : 'bg-red-500/15 border-red-500/40 text-red-300'
                        : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-750'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{opt.label}</span>
                      {answers[currentQ] === i && (
                        <span className="text-xs font-medium opacity-70">
                          {opt.score === 3 ? '+3' : opt.score === 1 ? '+1' : '0'} Pkt.
                        </span>
                      )}
                    </div>
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
            {/* Score Result */}
            <div className={`border rounded-xl p-6 mb-6 ${result.bgColor}`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-2xl font-bold ${result.color}`}>{result.title}</h2>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${result.color}`}>{totalScore}</div>
                  <div className="text-xs text-gray-500">von 30 Punkten</div>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{result.description}</p>
            </div>

            {/* Radar Chart */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Sicherheitsprofil</h3>
              <RadarChart scores={scores} />
            </div>

            {/* Recommendations */}
            {weakAreas.length > 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Empfehlungen</h3>
                <div className="space-y-4">
                  {weakAreas.map((q, idx) => {
                    const answerScore = q.options[answers[questions.indexOf(q)]].score
                    return (
                      <div key={idx} className="flex gap-3">
                        <div className="shrink-0 mt-0.5">
                          {answerScore === 0 ? (
                            <XCircle className="h-5 w-5 text-red-400" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-yellow-400" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white mb-1">{q.area}</h4>
                          <p className="text-xs text-gray-400 leading-relaxed">{q.recommendation}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Professionelles Security Audit</h3>
              <p className="text-sm text-gray-400 mb-5">
                Dieser Score gibt eine erste Einschätzung. Für eine vollständige Analyse deiner
                IT-Sicherheit empfehlen wir ein professionelles Security Audit.
              </p>
              <a
                href="https://corelead.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-medium text-sm transition-all"
              >
                Professionelles Security Audit starten
                <ExternalLink className="h-4 w-4" />
              </a>
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
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-gray-300 hover:text-white transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  Teilen
                </button>
                <button
                  onClick={restart}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                  Erneut starten
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

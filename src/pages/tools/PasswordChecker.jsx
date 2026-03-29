import { useState, useMemo } from 'react'
import { KeyRound, Eye, EyeOff, ShieldCheck, ShieldAlert, Info, CheckCircle, XCircle } from 'lucide-react'

const commonPatterns = [
  '123456', 'password', 'passwort', 'qwerty', 'abc123', 'letmein',
  '123456789', '12345678', '1234567', '123123', '111111', 'admin',
  'welcome', 'monkey', 'master', 'dragon', 'login', 'princess',
  'qwertz', 'hallo', 'schatz', 'geheim',
]

const commonSequences = [
  'abcdefgh', '12345678', 'qwertyui', 'qwertzui', 'asdfghjk',
]

function analyzePassword(pw) {
  if (!pw) return null

  const checks = {
    length8: pw.length >= 8,
    length12: pw.length >= 12,
    length16: pw.length >= 16,
    hasUpper: /[A-Z]/.test(pw),
    hasLower: /[a-z]/.test(pw),
    hasNumber: /[0-9]/.test(pw),
    hasSpecial: /[^A-Za-z0-9]/.test(pw),
    noCommon: !commonPatterns.some((p) => pw.toLowerCase().includes(p)),
    noSequence: !commonSequences.some((s) => pw.toLowerCase().includes(s.slice(0, 4))),
    noRepeat: !/(.)\1{2,}/.test(pw),
  }

  let score = 0
  if (checks.length8) score += 1
  if (checks.length12) score += 1
  if (checks.length16) score += 1
  if (checks.hasUpper) score += 1
  if (checks.hasLower) score += 1
  if (checks.hasNumber) score += 1
  if (checks.hasSpecial) score += 1.5
  if (checks.noCommon) score += 1
  if (checks.noSequence) score += 0.5
  if (checks.noRepeat) score += 0.5

  // Bonus for length beyond 16
  if (pw.length > 20) score += 0.5

  let level, label, color, barColor
  if (score < 3) {
    level = 0; label = 'Sehr schwach'; color = 'text-[#D97B5A]'; barColor = 'bg-[#D97B5A]'
  } else if (score < 5) {
    level = 1; label = 'Schwach'; color = 'text-[#D97B5A]'; barColor = 'bg-[#D97B5A]'
  } else if (score < 7) {
    level = 2; label = 'Mittel'; color = 'text-[#C8A96E]'; barColor = 'bg-[#C8A96E]'
  } else if (score < 8.5) {
    level = 3; label = 'Stark'; color = 'text-[#5A9A6B]'; barColor = 'bg-[#5A9A6B]'
  } else {
    level = 4; label = 'Sehr stark'; color = 'text-[#5A9A6B]'; barColor = 'bg-[#5A9A6B]'
  }

  // Estimated crack time (simplified)
  const charsetSize =
    (checks.hasLower ? 26 : 0) +
    (checks.hasUpper ? 26 : 0) +
    (checks.hasNumber ? 10 : 0) +
    (checks.hasSpecial ? 33 : 0)
  const combinations = Math.pow(charsetSize || 1, pw.length)
  const guessesPerSecond = 10_000_000_000 // 10 billion (modern GPU)
  const seconds = combinations / guessesPerSecond

  let crackTime
  if (seconds < 1) crackTime = 'Sofort'
  else if (seconds < 60) crackTime = `${Math.round(seconds)} Sekunden`
  else if (seconds < 3600) crackTime = `${Math.round(seconds / 60)} Minuten`
  else if (seconds < 86400) crackTime = `${Math.round(seconds / 3600)} Stunden`
  else if (seconds < 31536000) crackTime = `${Math.round(seconds / 86400)} Tage`
  else if (seconds < 31536000 * 1000) crackTime = `${Math.round(seconds / 31536000)} Jahre`
  else if (seconds < 31536000 * 1_000_000) crackTime = `${Math.round(seconds / (31536000 * 1000))} Tausend Jahre`
  else crackTime = 'Millionen+ Jahre'

  const tips = []
  if (!checks.length8) tips.push('Verwende mindestens 8 Zeichen.')
  else if (!checks.length12) tips.push('Verwende mindestens 12 Zeichen für besseren Schutz.')
  else if (!checks.length16) tips.push('16+ Zeichen bieten exzellenten Schutz.')
  if (!checks.hasUpper) tips.push('Füge Großbuchstaben hinzu.')
  if (!checks.hasLower) tips.push('Füge Kleinbuchstaben hinzu.')
  if (!checks.hasNumber) tips.push('Füge Zahlen hinzu.')
  if (!checks.hasSpecial) tips.push('Füge Sonderzeichen hinzu (!@#$%&*).')
  if (!checks.noCommon) tips.push('Vermeide häufig verwendete Passwörter und Begriffe.')
  if (!checks.noSequence) tips.push('Vermeide Tastatur-Sequenzen (qwerty, 1234...).')
  if (!checks.noRepeat) tips.push('Vermeide wiederholte Zeichen (aaa, 111...).')

  return { checks, score, level, label, color, barColor, crackTime, tips }
}

export default function PasswordChecker() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const analysis = useMemo(() => analyzePassword(password), [password])

  const barWidth = analysis ? Math.min(100, (analysis.level + 1) * 20) : 0

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <KeyRound className="h-8 w-8 text-[#C8A96E]" />
            <h1 className="text-3xl font-display text-[#C8A96E]">
              Passwort-Stärke testen
            </h1>
          </div>
          <p className="text-[#7A7D83]">Prüfe wie sicher dein Passwort wirklich ist.</p>
        </div>

        {/* Privacy Notice */}
        <div className="bg-[#0F1215] border border-[#5A9A6B]/30 rounded-sm p-4 mb-6 flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-[#5A9A6B] shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-mono text-[#5A9A6B]">Dein Passwort wird NICHT übertragen!</p>
            <p className="text-xs text-[#5A9A6B]/70 mt-1">
              Die gesamte Analyse findet lokal in deinem Browser statt. Keinerlei Daten werden an einen Server gesendet.
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 mb-6">
          <label htmlFor="password-input" className="block text-sm font-medium text-[#7A7D83] mb-2">
            Passwort eingeben
          </label>
          <div className="relative">
            <input
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Dein Passwort hier eingeben..."
              className="w-full px-4 py-3 pr-12 bg-[#0A0C0F] border border-[#1E2228] rounded-none text-lg text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E]/50 focus:ring-1 focus:ring-[#C8A96E]/30 font-mono"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#3E4148] hover:text-[#7A7D83] transition-colors"
              aria-label={showPassword ? 'Passwort verbergen' : 'Passwort anzeigen'}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Results */}
        {analysis && (
          <>
            {/* Strength Bar */}
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#7A7D83]">Stärke</span>
                <span className={`text-sm font-mono ${analysis.color}`}>{analysis.label}</span>
              </div>
              <div className="h-3 bg-[#0A0C0F] overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${analysis.barColor}`}
                  style={{ width: `${barWidth}%` }}
                />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Info className="h-4 w-4 text-[#3E4148] shrink-0" />
                <p className="text-sm text-[#7A7D83]">
                  Geschätzte Crack-Zeit (Brute Force, 10 Mrd. Versuche/s):{' '}
                  <span className={`font-mono ${analysis.color}`}>{analysis.crackTime}</span>
                </p>
              </div>
            </div>

            {/* Detail Checks */}
            <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 mb-6">
              <h3 className="text-sm font-display text-[#7A7D83] mb-4">Detail-Analyse</h3>
              <div className="space-y-2.5">
                {[
                  { ok: analysis.checks.length8, label: 'Mindestens 8 Zeichen' },
                  { ok: analysis.checks.length12, label: 'Mindestens 12 Zeichen (empfohlen)' },
                  { ok: analysis.checks.length16, label: '16+ Zeichen (optimal)' },
                  { ok: analysis.checks.hasUpper, label: 'Großbuchstaben (A-Z)' },
                  { ok: analysis.checks.hasLower, label: 'Kleinbuchstaben (a-z)' },
                  { ok: analysis.checks.hasNumber, label: 'Zahlen (0-9)' },
                  { ok: analysis.checks.hasSpecial, label: 'Sonderzeichen (!@#$%&*)' },
                  { ok: analysis.checks.noCommon, label: 'Kein häufiges Passwort' },
                  { ok: analysis.checks.noSequence, label: 'Keine Tastatur-Sequenz' },
                  { ok: analysis.checks.noRepeat, label: 'Keine wiederholten Zeichen' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    {item.ok ? (
                      <CheckCircle className="h-4 w-4 text-[#5A9A6B] shrink-0" />
                    ) : (
                      <XCircle className="h-4 w-4 text-[#D97B5A] shrink-0" />
                    )}
                    <span className={`text-sm ${item.ok ? 'text-[#E8E6E0]' : 'text-[#3E4148]'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            {analysis.tips.length > 0 && (
              <div className="bg-[#0F1215] border border-[#D97B5A]/30 rounded-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="h-5 w-5 text-[#D97B5A]" />
                  <h3 className="text-sm font-display text-[#D97B5A]">Verbesserungsvorschläge</h3>
                </div>
                <ul className="space-y-2">
                  {analysis.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#D97B5A]/80">
                      <span className="text-[#D97B5A] mt-0.5">-</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

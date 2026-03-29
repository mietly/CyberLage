import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

const roles = [
  { value: '', label: 'Rolle auswählen (optional)' },
  { value: 'it-admin', label: 'IT-Admin' },
  { value: 'ciso', label: 'CISO' },
  { value: 'entwickler', label: 'Entwickler' },
  { value: 'interessiert', label: 'Interessiert' },
]

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setErrorMsg('')

    try {
      // 1. Save to Supabase (if configured)
      if (isSupabaseConfigured()) {
        const { error } = await supabase
          .from('newsletter_subscribers')
          .insert([{ email, role: role || null }])

        if (error) {
          if (error.code === '23505') {
            setErrorMsg('Diese E-Mail ist bereits angemeldet.')
            setStatus('error')
            return
          }
          console.error('Supabase save error:', error)
          // Continue anyway — mail is more important
        }
      }

      // 2. Send confirmation mail via serverless function
      try {
        const res = await fetch('/api/newsletter-signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, role: role || null }),
        })
        const data = await res.json()

        if (data.mailSent) {
          console.log(`Newsletter: Mail gesendet an ${email}`)
        } else {
          console.warn(`Newsletter: Mail-Fehler: ${data.mailError}`)
        }
      } catch (mailErr) {
        // Mail failure should not block signup
        console.error('Newsletter: Mail-Versand fehlgeschlagen:', mailErr.message)
      }

      setStatus('success')
      setEmail('')
      setRole('')
    } catch (err) {
      console.error('Newsletter signup error:', err)
      setErrorMsg('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-[#5A9A6B]/30 rounded-sm p-6 text-center">
        <CheckCircle className="h-10 w-10 text-[#5A9A6B] mx-auto mb-3" />
        <p className="text-[#5A9A6B] font-semibold">Erfolgreich angemeldet!</p>
        <p className="text-[#7A7D83] text-sm mt-1">
          Du erhältst ab sofort jeden Montag unser Security-Briefing.
        </p>
      </div>
    )
  }

  return (
    <div className="border border-[#1E2228] rounded-sm p-6">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="h-5 w-5 text-[#C8A96E]" />
        <h3 className="text-[#E8E6E0] font-semibold">Security-Newsletter</h3>
      </div>
      <p className="text-[#7A7D83] text-sm mb-4">
        Jeden Montag in deinem Postfach: Die wichtigsten Security-News der Woche.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.de"
          required
          className="w-full px-4 py-2.5 rounded-none bg-[#0A0C0F] border border-[#1E2228] text-[#E8E6E0] placeholder-[#3E4148] text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-colors"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2.5 rounded-none bg-[#0A0C0F] border border-[#1E2228] text-[#7A7D83] text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-colors"
        >
          {roles.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-2.5 rounded-none bg-[#C8A96E] hover:bg-[#C8A96E]/90 text-[#0A0C0F] font-mono font-semibold text-sm uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Wird angemeldet...' : 'Jetzt anmelden'}
        </button>
      </form>

      {status === 'error' && (
        <div className="flex items-center gap-2 mt-3 text-[#D97B5A] text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}
    </div>
  )
}

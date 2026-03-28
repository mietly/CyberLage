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
      if (isSupabaseConfigured()) {
        const { error } = await supabase
          .from('subscribers')
          .insert([{ email, role: role || null }])

        if (error) {
          if (error.code === '23505') {
            setErrorMsg('Diese E-Mail ist bereits angemeldet.')
            setStatus('error')
            return
          }
          throw error
        }
      } else {
        // Demo fallback -- simulate a short delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        console.log('Newsletter signup (demo):', { email, role })
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
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
        <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-3" />
        <p className="text-green-400 font-semibold">Erfolgreich angemeldet!</p>
        <p className="text-gray-400 text-sm mt-1">
          Du erhältst ab sofort jeden Montag unser Security-Briefing.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="h-5 w-5 text-red-400" />
        <h3 className="text-white font-semibold">Security-Newsletter</h3>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        Jeden Montag in deinem Postfach: Die wichtigsten Security-News der Woche.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.de"
          required
          className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-colors"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-colors"
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
          className="w-full px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Wird angemeldet...' : 'Jetzt anmelden'}
        </button>
      </form>

      {status === 'error' && (
        <div className="flex items-center gap-2 mt-3 text-red-400 text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}
    </div>
  )
}

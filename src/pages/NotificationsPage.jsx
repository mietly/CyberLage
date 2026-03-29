import { useState, useEffect } from 'react'
import { Bell, Mail, Info } from 'lucide-react'

const STORAGE_KEY = 'cyberlage-notification-prefs'

const notificationCategories = [
  { id: 'critical-cves', label: 'Kritische CVEs (CVSS 9.0+)', description: 'Sofortige Benachrichtigung bei kritischen Schwachstellen' },
  { id: 'ransomware-dach', label: 'Ransomware-Angriffe im DACH-Raum', description: 'Meldungen zu Ransomware-Vorfällen in Deutschland, Österreich und der Schweiz' },
  { id: 'bsi-warnings', label: 'BSI Warnmeldungen', description: 'Offizielle Warnungen des Bundesamts für Sicherheit in der Informationstechnik' },
  { id: 'nis2-updates', label: 'NIS2 Updates', description: 'Neuigkeiten zur NIS2-Richtlinie und Umsetzung' },
  { id: 'new-articles', label: 'Neue Artikel', description: 'Benachrichtigung bei neuen Artikeln auf CyberLage.de' },
]

const vendorFilters = ['Microsoft', 'SAP', 'Fortinet', 'Cisco', 'VMware', 'Linux', 'Apple']

function loadPrefs() { try { const stored = localStorage.getItem(STORAGE_KEY); return stored ? JSON.parse(stored) : null } catch { return null } }

function Toggle({ checked, onChange }) {
  return (
    <button type="button" onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-none transition-colors cursor-pointer ${checked ? 'bg-[#C8A96E]' : 'bg-[#1E2228]'}`}>
      <span className={`inline-block h-4 w-4 rounded-none bg-[#0A0C0F] transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  )
}

export default function NotificationsPage() {
  const saved = loadPrefs()
  const [categories, setCategories] = useState(saved?.categories || notificationCategories.reduce((acc, c) => ({ ...acc, [c.id]: false }), {}))
  const [vendors, setVendors] = useState(saved?.vendors || [])
  const [email, setEmail] = useState(saved?.email || '')
  const [emailEnabled, setEmailEnabled] = useState(saved?.emailEnabled || false)
  const [submitted, setSubmitted] = useState(false)

  function toggleCategory(id) { setCategories((prev) => ({ ...prev, [id]: !prev[id] })) }
  function toggleVendor(vendor) { setVendors((prev) => prev.includes(vendor) ? prev.filter((v) => v !== vendor) : [...prev, vendor]) }
  function handleSubmit(e) { e.preventDefault(); localStorage.setItem(STORAGE_KEY, JSON.stringify({ categories, vendors, email, emailEnabled })); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000) }

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E]/30 text-[#C8A96E] rounded-none px-4 py-2 mb-6">
            <Bell className="w-4 h-4" /><span className="text-sm font-mono">Benachrichtigungen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Benachrichtigungen</h1>
          <p className="text-lg text-[#7A7D83] max-w-2xl mx-auto">Werde informiert bei kritischen Sicherheitsereignissen</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
            <h2 className="text-xl font-display mb-6">Kategorien</h2>
            <div className="space-y-4">
              {notificationCategories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between gap-4">
                  <div><p className="text-sm font-medium text-[#E8E6E0]">{cat.label}</p><p className="text-xs text-[#3E4148]">{cat.description}</p></div>
                  <Toggle checked={categories[cat.id]} onChange={() => toggleCategory(cat.id)} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
            <h2 className="text-xl font-display mb-2">Software / Hersteller Filter</h2>
            <p className="text-sm text-[#3E4148] mb-6">Erhalte nur Benachrichtigungen, die diese Produkte betreffen</p>
            <div className="flex flex-wrap gap-3">
              {vendorFilters.map((vendor) => (
                <label key={vendor}
                  className={`flex items-center gap-2 px-4 py-2 rounded-none text-sm font-mono border cursor-pointer transition-colors ${vendors.includes(vendor) ? 'border-[#C8A96E]/40 text-[#C8A96E]' : 'border-[#1E2228] text-[#7A7D83] hover:border-[#C8A96E]/30'}`}>
                  <input type="checkbox" checked={vendors.includes(vendor)} onChange={() => toggleVendor(vendor)} className="sr-only" />
                  {vendor}
                </label>
              ))}
            </div>
          </div>

          <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6">
            <h2 className="text-xl font-display mb-6">Zustellmethode</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#7A7D83]" /><span className="text-sm font-medium">E-Mail</span></div>
                <Toggle checked={emailEnabled} onChange={() => setEmailEnabled(!emailEnabled)} />
              </div>
              {emailEnabled && (
                <input type="email" placeholder="deine@email.de" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0A0C0F] border border-[#1E2228] rounded-none px-4 py-2.5 text-sm text-[#E8E6E0] placeholder-[#3E4148] focus:outline-none focus:border-[#C8A96E] transition-colors" />
              )}
            </div>
          </div>

          <div className="flex items-start gap-3 border border-[#C8A96E]/20 rounded-sm p-4">
            <Info className="w-5 h-5 text-[#C8A96E] mt-0.5 shrink-0" />
            <p className="text-sm text-[#C8A96E]">In der Vollversion werden Benachrichtigungen per E-Mail und Browser-Push versendet.</p>
          </div>

          <button type="submit" className="w-full bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-6 py-3 transition-colors cursor-pointer">
            {submitted ? 'Einstellungen gespeichert!' : 'Benachrichtigungen aktivieren'}
          </button>
        </form>
      </div>
    </div>
  )
}

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

function loadPrefs() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
        checked ? 'bg-red-600' : 'bg-gray-700'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

export default function NotificationsPage() {
  const saved = loadPrefs()
  const [categories, setCategories] = useState(
    saved?.categories || notificationCategories.reduce((acc, c) => ({ ...acc, [c.id]: false }), {})
  )
  const [vendors, setVendors] = useState(saved?.vendors || [])
  const [email, setEmail] = useState(saved?.email || '')
  const [emailEnabled, setEmailEnabled] = useState(saved?.emailEnabled || false)
  const [submitted, setSubmitted] = useState(false)

  function toggleCategory(id) {
    setCategories((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function toggleVendor(vendor) {
    setVendors((prev) =>
      prev.includes(vendor) ? prev.filter((v) => v !== vendor) : [...prev, vendor]
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    const prefs = { categories, vendors, email, emailEnabled }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Bell className="w-4 h-4" />
            <span className="text-sm font-medium">Benachrichtigungen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Benachrichtigungen</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Werde informiert bei kritischen Sicherheitsereignissen
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Notification Categories */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Kategorien</h2>
            <div className="space-y-4">
              {notificationCategories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-white">{cat.label}</p>
                    <p className="text-xs text-gray-500">{cat.description}</p>
                  </div>
                  <Toggle
                    checked={categories[cat.id]}
                    onChange={() => toggleCategory(cat.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Vendor Filters */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Software / Hersteller Filter</h2>
            <p className="text-sm text-gray-500 mb-6">
              Erhalte nur Benachrichtigungen, die diese Produkte betreffen
            </p>
            <div className="flex flex-wrap gap-3">
              {vendorFilters.map((vendor) => (
                <label
                  key={vendor}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-colors ${
                    vendors.includes(vendor)
                      ? 'bg-red-600/20 border-red-500/40 text-red-400'
                      : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={vendors.includes(vendor)}
                    onChange={() => toggleVendor(vendor)}
                    className="sr-only"
                  />
                  {vendor}
                </label>
              ))}
            </div>
          </div>

          {/* Delivery Method */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Zustellmethode</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium">E-Mail</span>
                </div>
                <Toggle checked={emailEnabled} onChange={() => setEmailEnabled(!emailEnabled)} />
              </div>
              {emailEnabled && (
                <input
                  type="email"
                  placeholder="deine@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              )}
            </div>
          </div>

          {/* Info Note */}
          <div className="flex items-start gap-3 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <Info className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
            <p className="text-sm text-blue-300">
              In der Vollversion werden Benachrichtigungen per E-Mail und Browser-Push versendet.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl px-6 py-3 transition-colors cursor-pointer"
          >
            {submitted ? 'Einstellungen gespeichert!' : 'Benachrichtigungen aktivieren'}
          </button>
        </form>
      </div>
    </div>
  )
}

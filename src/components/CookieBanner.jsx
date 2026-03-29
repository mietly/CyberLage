import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cyberlage-cookies-accepted')
    if (!accepted) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cyberlage-cookies-accepted', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-[#0F1215] border border-[#1E2228] rounded-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Cookie className="h-6 w-6 text-[#C8A96E] shrink-0 hidden sm:block" />
          <p className="text-sm text-[#7A7D83] flex-1">
            Diese Website verwendet ausschließlich technisch notwendige Cookies.{' '}
            <Link
              to="/about#datenschutz"
              className="text-[#C8A96E] hover:text-[#E8E6E0] underline underline-offset-2 transition-colors"
            >
              Mehr erfahren
            </Link>
          </p>
          <button
            onClick={handleAccept}
            className="shrink-0 px-5 py-2 bg-[#C8A96E] hover:bg-[#C8A96E]/90 text-[#0A0C0F] text-sm font-mono font-semibold uppercase tracking-wider rounded-none transition-colors"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  )
}

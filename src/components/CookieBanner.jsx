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
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Cookie className="h-6 w-6 text-orange-400 shrink-0 hidden sm:block" />
          <p className="text-sm text-gray-300 flex-1">
            Diese Website verwendet ausschließlich technisch notwendige Cookies.{' '}
            <Link
              to="/about#datenschutz"
              className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors"
            >
              Mehr erfahren
            </Link>
          </p>
          <button
            onClick={handleAccept}
            className="shrink-0 px-5 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  )
}

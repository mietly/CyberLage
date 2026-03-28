import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Shield, Menu, X, AlertTriangle, Rss, Bookmark } from 'lucide-react'
import { breakingNews } from '../data/demoData'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { to: '/news', label: 'News' },
  { to: '/schwachstellen', label: 'Schwachstellen' },
  { to: '/tools', label: 'Tools' },
  { to: '/newsletter', label: 'Newsletter' },
  { to: '/nis2', label: 'NIS2' },
  { to: '/ueber-uns', label: 'Über uns' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const tickerText = breakingNews.join('  +++  ')

  return (
    <header className="sticky top-0 z-50">
      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white text-sm py-1 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4 font-semibold">+++ BREAKING +++</span>
          {tickerText}
          <span className="mx-4 font-semibold">+++ BREAKING +++</span>
          {tickerText}
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                CyberLage
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-red-500/10 text-red-400'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Threat Level Badge + Theme Toggle + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30">
                <AlertTriangle className="h-4 w-4 text-orange-400" />
                <span className="text-xs font-semibold text-orange-400">
                  Bedrohungslage: HOCH
                </span>
              </div>

              <Link
                to="/merkliste"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                title="Merkliste"
              >
                <Bookmark className="h-4 w-4" />
              </Link>
              <a
                href="/feed.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-orange-400 hover:bg-gray-800 transition-colors"
                title="RSS Feed"
              >
                <Rss className="h-4 w-4" />
              </a>

              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Menü öffnen"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-950">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-red-500/10 text-red-400'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center justify-between px-3 py-2 mt-2">
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-orange-400" />
                  <span className="text-xs font-semibold text-orange-400">
                    Bedrohungslage: HOCH
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

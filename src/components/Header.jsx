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
      <div className="bg-[#0F1215] border-b border-[#1E2228] text-[#C8A96E] text-sm py-1 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap font-mono">
          <span className="mx-4 font-semibold">+++ BREAKING +++</span>
          {tickerText}
          <span className="mx-4 font-semibold">+++ BREAKING +++</span>
          {tickerText}
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-[#0A0C0F] border-b border-[#1E2228]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <Shield className="h-8 w-8 text-[#C8A96E]" />
              <span className="text-xl font-display text-[#E8E6E0]">
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
                    `px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#C8A96E]'
                        : 'text-[#7A7D83] hover:text-[#E8E6E0]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Threat Level Badge + Theme Toggle + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 threat-indicator">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97B5A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97B5A]" />
                </span>
                <span className="text-xs font-mono font-semibold text-[#D97B5A] uppercase tracking-wider">
                  Bedrohungslage: HOCH
                </span>
              </div>

              <Link
                to="/merkliste"
                className="p-2 text-[#7A7D83] hover:text-[#C8A96E] transition-colors"
                title="Merkliste"
              >
                <Bookmark className="h-4 w-4" />
              </Link>
              <a
                href="/feed.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#7A7D83] hover:text-[#C8A96E] transition-colors"
                title="RSS Feed"
              >
                <Rss className="h-4 w-4" />
              </a>

              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-[#7A7D83] hover:text-[#E8E6E0] transition-colors"
                aria-label="Menü öffnen"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#1E2228] bg-[#0A0C0F]">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#C8A96E]'
                        : 'text-[#7A7D83] hover:text-[#E8E6E0]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center justify-between px-3 py-2 mt-2">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97B5A] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97B5A]" />
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#D97B5A] uppercase tracking-wider">
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

import { Link } from 'react-router-dom'
import { Shield, Globe, MessageCircle, Briefcase, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A0C0F] border-t border-[#1E2228]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-[#C8A96E]" />
              <span className="text-lg font-display text-[#E8E6E0]">
                CyberLage
              </span>
            </Link>
            <p className="text-[#7A7D83] text-sm leading-relaxed max-w-md">
              Die zentrale Plattform für IT-Sicherheit im DACH-Raum. Aktuelle Bedrohungen,
              Schwachstellen und Security-News -- verständlich aufbereitet.
            </p>
            <p className="text-[#3E4148] text-sm mt-4">
              CyberLage wird betrieben von{' '}
              <a
                href="https://corelead.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A96E] hover:text-[#E8E6E0] transition-colors"
              >
                Corelead Solutions
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#E8E6E0] font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/news" className="text-[#7A7D83] text-sm hover:text-[#C8A96E] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/schwachstellen" className="text-[#7A7D83] text-sm hover:text-[#C8A96E] transition-colors">
                  Schwachstellen
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-[#7A7D83] text-sm hover:text-[#C8A96E] transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/nis2" className="text-[#7A7D83] text-sm hover:text-[#C8A96E] transition-colors">
                  NIS2
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-[#7A7D83] text-sm hover:text-[#C8A96E] transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#E8E6E0] font-semibold text-sm mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about#impressum" className="text-[#7A7D83] text-sm hover:text-[#C8A96E] transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/about#datenschutz" className="text-[#7A7D83] text-sm hover:text-[#C8A96E] transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#7A7D83] text-sm hover:text-[#C8A96E] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="text-[#3E4148] hover:text-[#C8A96E] transition-colors" aria-label="GitHub">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#3E4148] hover:text-[#C8A96E] transition-colors" aria-label="Twitter">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#3E4148] hover:text-[#C8A96E] transition-colors" aria-label="LinkedIn">
                <Briefcase className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#3E4148] hover:text-[#C8A96E] transition-colors" aria-label="E-Mail">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1E2228] mt-10 pt-6 text-center">
          <p className="text-[#3E4148] text-sm">
            &copy; {new Date().getFullYear()} CyberLage.de -- Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { Shield, Globe, MessageCircle, Briefcase, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-red-500" />
              <span className="text-lg font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                CyberLage
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Die zentrale Plattform für IT-Sicherheit im DACH-Raum. Aktuelle Bedrohungen,
              Schwachstellen und Security-News -- verständlich aufbereitet.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              CyberLage wird betrieben von{' '}
              <a
                href="https://corelead.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Corelead Solutions
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/news" className="text-gray-400 text-sm hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/schwachstellen" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Schwachstellen
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/nis2" className="text-gray-400 text-sm hover:text-white transition-colors">
                  NIS2
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <Briefcase className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="E-Mail">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CyberLage.de -- Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

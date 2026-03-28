import { Link } from 'react-router-dom'
import {
  Shield,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Bug,
  CheckCircle,
  XCircle,
  TrendingUp,
} from 'lucide-react'
import NewsCard from '../components/NewsCard'
import NewsletterSignup from '../components/NewsletterSignup'
import RiskBadge from '../components/RiskBadge'
import { demoArticles, demoCVEs, topThreats } from '../data/demoData'

const heroArticle = demoArticles[0]
const newsArticles = demoArticles.slice(1, 7)

const heroDate = new Date(heroArticle.published_at).toLocaleDateString('de-DE', {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})

function cvssColor(score) {
  if (score >= 9.0) return 'text-red-400 bg-red-500/20'
  if (score >= 7.0) return 'text-orange-400 bg-orange-500/20'
  if (score >= 4.0) return 'text-yellow-400 bg-yellow-500/20'
  return 'text-green-400 bg-green-500/20'
}

function threatLevelBg(level) {
  if (level === 'kritisch') return 'bg-red-500/15 border-red-500/30 text-red-400'
  if (level === 'hoch') return 'bg-orange-500/15 border-orange-500/30 text-orange-400'
  return 'bg-yellow-500/15 border-yellow-500/30 text-yellow-400'
}

const dachCards = [
  {
    flag: '\ud83c\udde9\ud83c\uddea',
    country: 'Deutschland',
    org: 'BSI',
    alert:
      'Das BSI warnt vor aktiver Ausnutzung kritischer Schwachstellen in Perimeter-Geräten. IT-Sicherheitsverantwortliche sollen Patches umgehend einspielen.',
    link: 'https://www.bsi.bund.de',
  },
  {
    flag: '\ud83c\udde6\ud83c\uddf9',
    country: '\u00d6sterreich',
    org: 'CERT.at',
    alert:
      'CERT.at meldet erhöhte Phishing-Aktivitäten gegen österreichische Bankkunden. Neue Kampagne nutzt täuschend echte FinanzOnline-Mails.',
    link: 'https://www.cert.at',
  },
  {
    flag: '\ud83c\udde8\ud83c\udded',
    country: 'Schweiz',
    org: 'NCSC',
    alert:
      'Das NCSC beobachtet gezielte Ransomware-Angriffe auf Schweizer KMU im Industriesektor. Backup-Strategie und Netzwerksegmentierung dringend empfohlen.',
    link: 'https://www.ncsc.admin.ch',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-sm text-gray-400">{heroDate}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Bedrohungslage: HOCH
                </span>
              </div>

              <span className="inline-block text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">
                Top-Thema
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                {heroArticle.title}
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                {heroArticle.excerpt}
              </p>

              <Link
                to={`/news/${heroArticle.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors"
              >
                Jetzt lesen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-red-500/10">
                <img
                  src={heroArticle.image}
                  alt={heroArticle.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <RiskBadge level={heroArticle.risk_level} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NEWS GRID ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Aktuelle Sicherheitsnews
          </h2>
          <Link
            to="/news"
            className="hidden sm:inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
          >
            Alle News anzeigen
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/news"
            className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
          >
            Alle News anzeigen
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ==================== TOP RISIKEN + CVE WIDGETS ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Risiken */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-red-400" />
              <h2 className="text-xl font-bold text-white">
                Top 5 Bedrohungen diese Woche
              </h2>
            </div>

            <div className="space-y-3">
              {topThreats.map((threat, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 p-4 rounded-lg border ${threatLevelBg(threat.level)}`}
                >
                  <span className="text-2xl font-extrabold opacity-40 leading-none mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white text-sm">
                        {threat.name}
                      </span>
                      <RiskBadge level={threat.level} />
                    </div>
                    <p className="text-gray-400 text-xs">{threat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CVE Widget */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Bug className="w-5 h-5 text-red-400" />
                <h2 className="text-xl font-bold text-white">
                  Kritische Schwachstellen aktuell
                </h2>
              </div>
              <Link
                to="/schwachstellen"
                className="text-red-400 hover:text-red-300 text-xs font-medium flex items-center gap-1 transition-colors"
              >
                Alle anzeigen
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="space-y-3">
              {demoCVEs.map((cve) => (
                <div
                  key={cve.cve_id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50 border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-mono font-bold text-white">
                        {cve.cve_id}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-bold ${cvssColor(cve.cvss_score)}`}
                      >
                        {cve.cvss_score}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs truncate">
                      {cve.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    {cve.patch_available ? (
                      <span className="inline-flex items-center gap-1 text-green-400 text-xs">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Patch
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-red-400 text-xs">
                        <XCircle className="w-3.5 h-3.5" />
                        Kein Patch
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DACH SECTION ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Was bewegt die DACH-Region?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {dachCards.map((card) => (
            <div
              key={card.org}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{card.flag}</span>
                <div>
                  <h3 className="text-white font-bold">{card.org}</h3>
                  <span className="text-gray-500 text-xs">{card.country}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {card.alert}
              </p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
              >
                Zum {card.org}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== NEWSLETTER ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">
                Wöchentlicher Threat Report
              </h2>
            </div>
            <p className="text-gray-400 mb-6">
              Erhalte jeden Montag die wichtigsten Cyberbedrohungen, CVEs und
              Compliance-Updates direkt in dein Postfach -- kostenlos und auf
              Deutsch.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  )
}

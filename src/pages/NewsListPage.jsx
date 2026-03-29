import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, ChevronDown, Archive } from 'lucide-react'
import NewsCard from '../components/NewsCard'
import { demoArticles, categories } from '../data/demoData'

const sortOptions = [
  { value: 'newest', label: 'Neueste' },
  { value: 'popular', label: 'Beliebteste' },
  { value: 'risk', label: 'Höchstes Risiko' },
]

const riskOrder = { kritisch: 0, hoch: 1, mittel: 2, niedrig: 3, info: 4 }

const ARTICLES_PER_PAGE = 9
const RECENT_DAYS = 14

export default function NewsListPage() {
  const [activeCategory, setActiveCategory] = useState('alle')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [showArchive, setShowArchive] = useState(false)
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE)

  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - RECENT_DAYS)

  const { recent, archived, filtered } = useMemo(() => {
    let all = [...demoArticles]

    // Category filter
    if (activeCategory !== 'alle') {
      all = all.filter((a) => a.category === activeCategory)
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      all = all.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    // Sort
    if (sortBy === 'newest') {
      all.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    } else if (sortBy === 'popular') {
      all.sort((a, b) => b.views - a.views)
    } else if (sortBy === 'risk') {
      all.sort(
        (a, b) => (riskOrder[a.risk_level] ?? 4) - (riskOrder[b.risk_level] ?? 4)
      )
    }

    // Split into recent and archived (only when sorted by newest and no search)
    const isDefaultView = sortBy === 'newest' && !searchQuery.trim()
    const recentArticles = isDefaultView
      ? all.filter((a) => new Date(a.published_at) >= cutoffDate)
      : all
    const archivedArticles = isDefaultView
      ? all.filter((a) => new Date(a.published_at) < cutoffDate)
      : []

    return { recent: recentArticles, archived: archivedArticles, filtered: all }
  }, [activeCategory, searchQuery, sortBy])

  const displayedRecent = recent.slice(0, visibleCount)
  const hasMoreRecent = visibleCount < recent.length

  return (
    <div className="min-h-screen bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-3xl sm:text-4xl text-[#E8E6E0] mb-2">
            Security News
          </h1>
          <p className="text-[#7A7D83]">
            Alle aktuellen Cybersecurity-Nachrichten aus dem DACH-Raum
          </p>
        </div>

        {/* Filter Bar */}
        <div className="border border-[#1E2228] rounded-none p-4 mb-8 space-y-4">
          {/* Search + Sort row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3E4148]" />
              <input
                type="text"
                placeholder="News durchsuchen..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ARTICLES_PER_PAGE) }}
                className="w-full pl-10 pr-4 py-2.5 rounded-none bg-[#0A0C0F] border border-[#1E2228] text-[#E8E6E0] placeholder-[#3E4148] text-sm font-mono focus:outline-none focus:border-[#C8A96E] transition-colors"
              />
            </div>

            <div className="relative">
              <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3E4148] pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => { setSortBy(e.target.value); setVisibleCount(ARTICLES_PER_PAGE); setShowArchive(false) }}
                className="pl-10 pr-8 py-2.5 rounded-none bg-[#0A0C0F] border border-[#1E2228] text-[#7A7D83] text-sm font-mono focus:outline-none focus:border-[#C8A96E] transition-colors appearance-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveCategory('alle'); setVisibleCount(ARTICLES_PER_PAGE) }}
              className={`px-3 py-1.5 rounded-none text-xs font-mono uppercase tracking-wider border transition-colors ${
                activeCategory === 'alle'
                  ? 'border-[#C8A96E] text-[#C8A96E]'
                  : 'border-[#1E2228] text-[#7A7D83] hover:border-[#3E4148] hover:text-[#E8E6E0]'
              }`}
            >
              Alle
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setVisibleCount(ARTICLES_PER_PAGE) }}
                className={`px-3 py-1.5 rounded-none text-xs font-mono uppercase tracking-wider border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-[#C8A96E] text-[#C8A96E]'
                    : 'border-[#1E2228] text-[#7A7D83] hover:border-[#3E4148] hover:text-[#E8E6E0]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="font-mono text-[#7A7D83] text-sm mb-6">
          {filtered.length} {filtered.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
          {archived.length > 0 && !showArchive && (
            <span className="text-[#3E4148]"> · {archived.length} im Archiv</span>
          )}
        </p>

        {/* Recent Articles Grid */}
        {displayedRecent.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedRecent.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMoreRecent && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleCount((prev) => prev + ARTICLES_PER_PAGE)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#1E2228] text-[#7A7D83] hover:border-[#C8A96E] hover:text-[#C8A96E] font-mono text-sm uppercase tracking-wider transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                  Mehr laden
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-[#1E2228] mx-auto mb-4" />
            <p className="text-[#7A7D83] text-lg font-display">
              Keine Ergebnisse gefunden
            </p>
            <p className="text-[#3E4148] text-sm mt-1 font-mono">
              Versuche einen anderen Suchbegriff oder wähle eine andere Kategorie.
            </p>
          </div>
        )}

        {/* Archive Section */}
        {archived.length > 0 && (
          <div className="mt-16 border-t border-[#1E2228] pt-10">
            <button
              onClick={() => setShowArchive(!showArchive)}
              className="flex items-center gap-3 mb-8 group"
            >
              <Archive className="w-5 h-5 text-[#3E4148] group-hover:text-[#C8A96E] transition-colors" />
              <h2 className="font-display text-xl text-[#7A7D83] group-hover:text-[#E8E6E0] transition-colors">
                Archiv
              </h2>
              <span className="font-mono text-xs text-[#3E4148]">
                {archived.length} {archived.length === 1 ? 'Artikel' : 'Artikel'}
              </span>
              <ChevronDown className={`w-4 h-4 text-[#3E4148] transition-transform ${showArchive ? 'rotate-180' : ''}`} />
            </button>

            {showArchive && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archived.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

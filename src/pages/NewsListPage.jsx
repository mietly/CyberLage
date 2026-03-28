import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import NewsCard from '../components/NewsCard'
import { demoArticles, categories } from '../data/demoData'

const sortOptions = [
  { value: 'newest', label: 'Neueste' },
  { value: 'popular', label: 'Beliebteste' },
  { value: 'risk', label: 'Höchstes Risiko' },
]

const riskOrder = { kritisch: 0, hoch: 1, mittel: 2, niedrig: 3, info: 4 }

export default function NewsListPage() {
  const [activeCategory, setActiveCategory] = useState('alle')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')

  const filtered = useMemo(() => {
    let result = [...demoArticles]

    // Category filter
    if (activeCategory !== 'alle') {
      result = result.filter((a) => a.category === activeCategory)
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    // Sort
    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.views - a.views)
    } else if (sortBy === 'risk') {
      result.sort(
        (a, b) => (riskOrder[a.risk_level] ?? 4) - (riskOrder[b.risk_level] ?? 4)
      )
    }

    return result
  }, [activeCategory, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Security News
          </h1>
          <p className="text-gray-400">
            Alle aktuellen Cybersecurity-Nachrichten aus dem DACH-Raum
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-8 space-y-4">
          {/* Search + Sort row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="News durchsuchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-colors"
              />
            </div>

            <div className="relative">
              <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-10 pr-8 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-colors appearance-none cursor-pointer"
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
              onClick={() => setActiveCategory('alle')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                activeCategory === 'alle'
                  ? 'bg-red-500/20 text-red-400 border-red-500/40'
                  : 'bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600 hover:text-gray-300'
              }`}
            >
              Alle
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-red-500/20 text-red-400 border-red-500/40'
                    : 'bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600 hover:text-gray-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-6">
          {filtered.length} {filtered.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
        </p>

        {/* Articles Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-medium">
              Keine Ergebnisse gefunden
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Versuche einen anderen Suchbegriff oder wähle eine andere
              Kategorie.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

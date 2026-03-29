import { Link } from 'react-router-dom'
import { Bookmark, ArrowLeft } from 'lucide-react'
import NewsCard from '../components/NewsCard'
import useBookmarks from '../hooks/useBookmarks'
import { demoArticles } from '../data/demoData'

export default function BookmarksPage() {
  const { bookmarks } = useBookmarks()

  const bookmarkedArticles = demoArticles.filter((a) =>
    bookmarks.includes(a.id)
  )

  return (
    <div className="min-h-screen bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Bookmark className="w-7 h-7 text-[#C8A96E]" />
          <h1 className="text-3xl font-display text-[#E8E6E0]">
            Meine Merkliste
          </h1>
        </div>

        {bookmarkedArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkedArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Bookmark className="w-12 h-12 text-[#3E4148] mx-auto mb-4" />
            <p className="text-[#7A7D83] text-lg mb-6">
              Noch keine Artikel gespeichert. Klicke auf das
              Lesezeichen-Symbol um Artikel zu merken.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zu den News
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

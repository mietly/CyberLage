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
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Bookmark className="w-7 h-7 text-red-400" />
          <h1 className="text-3xl font-extrabold text-white">
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
            <Bookmark className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-6">
              Noch keine Artikel gespeichert. Klicke auf das
              Lesezeichen-Symbol um Artikel zu merken.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-colors"
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

import { Bookmark } from 'lucide-react'
import useBookmarks from '../hooks/useBookmarks'

export default function BookmarkButton({ articleId, className = '' }) {
  const { toggleBookmark, isBookmarked } = useBookmarks()
  const bookmarked = isBookmarked(articleId)

  function handleClick(e) {
    e.preventDefault()
    e.stopPropagation()
    toggleBookmark(articleId)
  }

  return (
    <button
      onClick={handleClick}
      className={`p-1.5 rounded-lg transition-colors ${
        bookmarked
          ? 'text-red-400 bg-red-500/20 hover:bg-red-500/30'
          : 'text-gray-400 bg-gray-900/60 hover:bg-gray-900/80 hover:text-white backdrop-blur-sm'
      } ${className}`}
      title={bookmarked ? 'Lesezeichen entfernen' : 'Lesezeichen setzen'}
      aria-label={bookmarked ? 'Lesezeichen entfernen' : 'Lesezeichen setzen'}
    >
      <Bookmark
        className="w-4 h-4"
        fill={bookmarked ? 'currentColor' : 'none'}
      />
    </button>
  )
}

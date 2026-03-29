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
      className={`p-1.5 transition-colors ${
        bookmarked
          ? 'text-[#C8A96E]'
          : 'text-[#3E4148] hover:text-[#7A7D83]'
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

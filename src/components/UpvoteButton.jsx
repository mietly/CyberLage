import { ThumbsUp } from 'lucide-react'
import useUpvotes from '../hooks/useUpvotes'

export default function UpvoteButton({ articleId, initialCount = 0 }) {
  const { upvote, getUpvotes, hasUpvoted } = useUpvotes()
  const voted = hasUpvoted(articleId)
  const count = initialCount + getUpvotes(articleId)

  function handleClick(e) {
    e.preventDefault()
    e.stopPropagation()
    upvote(articleId)
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-1 text-xs transition-colors cursor-pointer ${
        voted
          ? 'text-[#C8A96E]'
          : 'text-[#3E4148] hover:text-[#7A7D83]'
      }`}
      title={voted ? 'Bereits positiv bewertet' : 'Positiv bewerten'}
      aria-label={voted ? 'Bereits positiv bewertet' : 'Positiv bewerten'}
    >
      <ThumbsUp
        className="h-3.5 w-3.5"
        fill={voted ? 'currentColor' : 'none'}
      />
      {count > 0 && <span className="font-mono">{count.toLocaleString('de-DE')}</span>}
    </button>
  )
}

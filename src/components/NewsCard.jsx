import { Link } from 'react-router-dom'
import { Clock, Eye, ThumbsUp } from 'lucide-react'
import UpvoteButton from './UpvoteButton'
import { formatDistanceToNow } from 'date-fns'
import { de } from 'date-fns/locale'
import RiskBadge from './RiskBadge'
import BookmarkButton from './BookmarkButton'

const categoryLabels = {
  ransomware: 'Ransomware',
  phishing: 'Phishing',
  schwachstellen: 'Schwachstellen',
  dsgvo: 'DSGVO',
  nis2: 'NIS2',
  'ki-security': 'KI & Security',
  datenpannen: 'Datenpannen',
  kritis: 'KRITIS',
}

export default function NewsCard({ article }) {
  const {
    slug,
    title,
    excerpt,
    category,
    risk_level,
    image,
    published_at,
    reading_time,
    views,
  } = article

  const timeAgo = formatDistanceToNow(new Date(published_at), {
    addSuffix: true,
    locale: de,
  })

  return (
    <Link
      to={`/news/${slug}`}
      className="group block bg-transparent border border-[#1E2228] rounded-none overflow-hidden hover:border-l-2 hover:border-l-[#C8A96E] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badges overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="tag-editorial font-mono text-xs uppercase tracking-wider px-2 py-0.5 border border-[#7A7D83]/50 text-[#E8E6E0] bg-[#0A0C0F]/80">
            {categoryLabels[category] || category}
          </span>
          <RiskBadge level={risk_level} />
        </div>
        {/* Bookmark */}
        <div className="absolute top-3 right-3">
          <BookmarkButton articleId={article.id} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-[#E8E6E0] text-lg leading-snug mb-2 group-hover:text-[#C8A96E] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-[#7A7D83] text-sm leading-relaxed mb-3 line-clamp-2">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 font-mono text-[#7A7D83] text-xs">
          <span>{timeAgo}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {reading_time} Min.
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {views?.toLocaleString('de-DE')}
          </span>
          <UpvoteButton articleId={article.id} initialCount={0} />
        </div>
      </div>
    </Link>
  )
}

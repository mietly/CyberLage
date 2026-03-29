import { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import {
  Calendar,
  Clock,
  Eye,
  User,
  Tag,
  Share2,
  ExternalLink,
  MessageCircle,
  Copy,
  CheckCircle,
  Sparkles,
  MessageSquare,
  Send,
  ArrowLeft,
  Download,
} from 'lucide-react'
import RiskBadge from '../components/RiskBadge'
import NewsCard from '../components/NewsCard'
import BookmarkButton from '../components/BookmarkButton'
import { demoArticles, categories } from '../data/demoData'

export default function ArticlePage() {
  const { slug } = useParams()
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [commentAuthor, setCommentAuthor] = useState('')
  const [linkCopied, setLinkCopied] = useState(false)

  const article = demoArticles.find((a) => a.slug === slug)

  const relatedArticles = useMemo(() => {
    if (!article) return []
    return demoArticles
      .filter((a) => a.id !== article.id && a.category === article.category)
      .slice(0, 3)
  }, [article])

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0A0C0F] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-[#E8E6E0] mb-4">404</h1>
          <p className="text-[#7A7D83] mb-6">Artikel nicht gefunden.</p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase text-sm tracking-wider transition-colors hover:bg-[#C8A96E]/90"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zu den News
          </Link>
        </div>
      </div>
    )
  }

  const categoryObj = categories.find((c) => c.id === article.category)
  const categoryName = categoryObj ? categoryObj.name : article.category

  const dateStr = new Date(article.published_at).toLocaleDateString('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''

  function shareLinkedIn() {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
      '_blank'
    )
  }

  function shareTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(pageUrl)}`,
      '_blank'
    )
  }

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  function handleCommentSubmit(e) {
    e.preventDefault()
    if (!newComment.trim() || !commentAuthor.trim()) return

    const today = new Date().toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: commentAuthor,
        date: today,
        text: newComment,
      },
    ])
    setNewComment('')
    setCommentAuthor('')
  }

  return (
    <div className="min-h-screen bg-[#0A0C0F]">
      {/* Hero Image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0C0F]/80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-16">
        {/* Back link */}
        <Link
          to="/news"
          className="inline-flex items-center gap-1 text-[#7A7D83] hover:text-[#C8A96E] text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Alle News
        </Link>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="px-2.5 py-0.5 rounded-sm text-xs font-mono uppercase tracking-wider border border-[#1E2228] bg-[#0F1215] text-[#C8A96E]"
          >
            {categoryName}
          </span>
          <RiskBadge level={article.risk_level} />
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#E8E6E0] leading-tight mb-6">
          {article.title}
        </h1>

        {/* Meta Row */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#7A7D83] mb-8 pb-6 border-b border-[#1E2228]">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            {article.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {dateStr}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {article.reading_time} Min. Lesezeit
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            {article.views.toLocaleString('de-DE')} Aufrufe
          </span>
        </div>

        {/* AI Summary */}
        <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#C8A96E]" />
            <h3 className="text-[#E8E6E0] font-display text-lg">
              In 30 Sekunden erklärt
            </h3>
            <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold text-[#C8A96E] border border-[#C8A96E]/30">
              KI
            </span>
          </div>
          <p className="text-[#7A7D83] leading-relaxed text-sm">
            {article.excerpt} Die wichtigsten Maßnahmen: Systeme umgehend
            patchen, Netzwerk-Logs auf verdächtige Aktivitäten prüfen und
            Incident-Response-Pläne aktualisieren. Betroffene Organisationen
            sollten zusätzlich ihre Backup-Strategien validieren.
          </p>
        </div>

        {/* Table of Contents */}
        {(() => {
          const headings = (article.content.match(/^#{2,3}\s.+$/gm) || []).map((h) => {
            const level = h.startsWith('### ') ? 3 : 2
            const text = h.replace(/^#{2,3}\s/, '')
            const id = text.toLowerCase().replace(/[^a-zäöüß0-9]+/gi, '-').replace(/-+$/, '')
            return { level, text, id }
          })
          if (headings.length < 3) return null
          return (
            <nav className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5 mb-8">
              <p className="font-mono text-xs uppercase tracking-wider text-[#3E4148] mb-3">Inhalt</p>
              <ul className="space-y-1.5">
                {headings.map((h, i) => (
                  <li key={i} style={{ paddingLeft: h.level === 3 ? '1rem' : 0 }}>
                    <a
                      href={`#${h.id}`}
                      className="text-sm text-[#7A7D83] hover:text-[#C8A96E] transition-colors"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )
        })()}

        {/* Article Content */}
        <article className="article-prose mb-10">
          <ReactMarkdown
            components={{
              h2: ({ children }) => {
                const id = String(children).toLowerCase().replace(/[^a-zäöüß0-9]+/gi, '-').replace(/-+$/, '')
                return <h2 id={id}>{children}</h2>
              },
              h3: ({ children }) => {
                const id = String(children).toLowerCase().replace(/[^a-zäöüß0-9]+/gi, '-').replace(/-+$/, '')
                return <h3 id={id}>{children}</h3>
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-8 border-b border-[#1E2228]">
          <Tag className="w-4 h-4 text-[#3E4148]" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-sm text-xs font-mono uppercase tracking-wider border border-[#1E2228] bg-[#0F1215] text-[#C8A96E]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-3 mb-12 no-print">
          <span className="flex items-center gap-1.5 text-sm text-[#7A7D83]">
            <Share2 className="w-4 h-4" />
            Teilen:
          </span>
          <button
            onClick={shareLinkedIn}
            className="p-2 rounded-none bg-transparent border border-[#1E2228] text-[#7A7D83] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-colors"
            title="Auf LinkedIn teilen"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
          <button
            onClick={shareTwitter}
            className="p-2 rounded-none bg-transparent border border-[#1E2228] text-[#7A7D83] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-colors"
            title="Auf X teilen"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
          <button
            onClick={copyLink}
            className="p-2 rounded-none bg-transparent border border-[#1E2228] text-[#7A7D83] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-colors"
            title="Link kopieren"
          >
            {linkCopied ? (
              <CheckCircle className="w-4 h-4 text-[#5A9A6B]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
          {linkCopied && (
            <span className="text-[#5A9A6B] text-xs font-mono">Link kopiert!</span>
          )}
          <div className="w-px h-6 bg-[#1E2228]" />
          <BookmarkButton articleId={article.id} className="p-2 rounded-none border border-[#1E2228]" />
          <button
            onClick={() => window.print()}
            className="p-2 rounded-none bg-transparent border border-[#1E2228] text-[#7A7D83] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-colors"
            title="Als PDF speichern"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-xl text-[#E8E6E0] mb-6">
              Verwandte Artikel
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}

        {/* Comments Section */}
        <section className="border-t border-[#1E2228] pt-8">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-[#C8A96E]" />
            <h2 className="font-display text-xl text-[#E8E6E0]">
              Kommentare ({comments.length})
            </h2>
          </div>

          {/* Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            className="border border-[#1E2228] bg-[#0F1215] rounded-sm p-5 mb-6 space-y-3"
          >
            <input
              type="text"
              placeholder="Dein Name"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-none bg-[#0A0C0F] border border-[#1E2228] text-[#E8E6E0] placeholder-[#3E4148] text-sm font-mono focus:outline-none focus:border-[#C8A96E]/50 transition-colors"
            />
            <textarea
              placeholder="Schreibe einen Kommentar..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
              rows={3}
              className="w-full px-4 py-2.5 rounded-none bg-[#0A0C0F] border border-[#1E2228] text-[#E8E6E0] placeholder-[#3E4148] text-sm font-mono focus:outline-none focus:border-[#C8A96E]/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase text-sm tracking-wider transition-colors hover:bg-[#C8A96E]/90"
            >
              <Send className="w-4 h-4" />
              Kommentar senden
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-0">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="border-b border-[#1E2228] py-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-none bg-[#0F1215] border border-[#1E2228] flex items-center justify-center text-sm font-mono text-[#C8A96E]">
                    {comment.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <span className="text-[#E8E6E0] text-sm font-mono">
                      {comment.author}
                    </span>
                    <span className="text-[#3E4148] text-xs font-mono ml-2">
                      {comment.date}
                    </span>
                  </div>
                </div>
                <p className="text-[#7A7D83] text-sm leading-relaxed">
                  {comment.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

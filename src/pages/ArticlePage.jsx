import { useState, useMemo } from 'react'
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
} from 'lucide-react'
import RiskBadge from '../components/RiskBadge'
import NewsCard from '../components/NewsCard'
import { demoArticles, categories } from '../data/demoData'

export default function ArticlePage() {
  const { slug } = useParams()
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Max Mueller',
      date: '27.03.2026',
      text: 'Sehr guter Artikel! Wir haben bei uns im Unternehmen direkt die empfohlenen Massnahmen umgesetzt.',
    },
    {
      id: 2,
      author: 'Anna Schmidt',
      date: '27.03.2026',
      text: 'Danke fuer die schnelle Berichterstattung. Koennt ihr auch ueber die technischen IoCs berichten?',
    },
  ])
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
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-400 mb-6">Artikel nicht gefunden.</p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurueck zu den News
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
    <div className="min-h-screen bg-gray-950">
      {/* Hero Image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-16">
        {/* Back link */}
        <Link
          to="/news"
          className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Alle News
        </Link>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-800 ${categoryObj?.color || 'text-gray-300'}`}
          >
            {categoryName}
          </span>
          <RiskBadge level={article.risk_level} />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          {article.title}
        </h1>

        {/* Meta Row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-800">
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
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <h3 className="text-white font-bold text-lg">
              In 30 Sekunden erklaert
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold text-orange-400 bg-orange-500/15 border border-orange-500/30">
              KI
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            {article.excerpt} Die wichtigsten Massnahmen: Systeme umgehend
            patchen, Netzwerk-Logs auf verdaechtige Aktivitaeten pruefen und
            Incident-Response-Plaene aktualisieren. Betroffene Organisationen
            sollten zusaetzlich ihre Backup-Strategien validieren.
          </p>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-red max-w-none mb-10 prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-red-400 hover:prose-a:text-red-300">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-8 border-b border-gray-800">
          <Tag className="w-4 h-4 text-gray-500" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-3 mb-12">
          <span className="flex items-center gap-1.5 text-sm text-gray-400">
            <Share2 className="w-4 h-4" />
            Teilen:
          </span>
          <button
            onClick={shareLinkedIn}
            className="p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
            title="Auf LinkedIn teilen"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
          <button
            onClick={shareTwitter}
            className="p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
            title="Auf X teilen"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
          <button
            onClick={copyLink}
            className="p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
            title="Link kopieren"
          >
            {linkCopied ? (
              <CheckCircle className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
          {linkCopied && (
            <span className="text-green-400 text-xs">Link kopiert!</span>
          )}
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6">
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
        <section>
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-red-400" />
            <h2 className="text-xl font-bold text-white">
              Kommentare ({comments.length})
            </h2>
          </div>

          {/* Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6 space-y-3"
          >
            <input
              type="text"
              placeholder="Dein Name"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-colors"
            />
            <textarea
              placeholder="Schreibe einen Kommentar..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-colors"
            >
              <Send className="w-4 h-4" />
              Kommentar senden
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold text-gray-400">
                    {comment.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <span className="text-white text-sm font-semibold">
                      {comment.author}
                    </span>
                    <span className="text-gray-500 text-xs ml-2">
                      {comment.date}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
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

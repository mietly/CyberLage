import { useState, useCallback } from 'react'

const STORAGE_KEY = 'cyberlage-bookmarks'

function loadBookmarks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveBookmarks(bookmarks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
}

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(loadBookmarks)

  const toggleBookmark = useCallback((articleId) => {
    setBookmarks((prev) => {
      const next = prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId]
      saveBookmarks(next)
      return next
    })
  }, [])

  const isBookmarked = useCallback(
    (articleId) => bookmarks.includes(articleId),
    [bookmarks]
  )

  return { bookmarks, toggleBookmark, isBookmarked }
}

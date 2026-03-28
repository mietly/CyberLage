import { useState, useCallback } from 'react'

const UPVOTES_KEY = 'cyberlage-upvotes'
const USER_UPVOTES_KEY = 'cyberlage-user-upvotes'

function loadUpvotes() {
  try {
    const stored = localStorage.getItem(UPVOTES_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

function saveUpvotes(upvotes) {
  localStorage.setItem(UPVOTES_KEY, JSON.stringify(upvotes))
}

function loadUserUpvotes() {
  try {
    const stored = localStorage.getItem(USER_UPVOTES_KEY)
    return stored ? new Set(JSON.parse(stored)) : new Set()
  } catch {
    return new Set()
  }
}

function saveUserUpvotes(userUpvotes) {
  localStorage.setItem(USER_UPVOTES_KEY, JSON.stringify([...userUpvotes]))
}

export default function useUpvotes() {
  const [upvotes, setUpvotes] = useState(loadUpvotes)
  const [userUpvotes, setUserUpvotes] = useState(loadUserUpvotes)

  const getUpvotes = useCallback(
    (articleId) => upvotes[articleId] || 0,
    [upvotes]
  )

  const hasUpvoted = useCallback(
    (articleId) => userUpvotes.has(articleId),
    [userUpvotes]
  )

  const upvote = useCallback((articleId) => {
    setUserUpvotes((prevUser) => {
      if (prevUser.has(articleId)) return prevUser
      const nextUser = new Set(prevUser)
      nextUser.add(articleId)
      saveUserUpvotes(nextUser)

      setUpvotes((prevUp) => {
        const nextUp = { ...prevUp, [articleId]: (prevUp[articleId] || 0) + 1 }
        saveUpvotes(nextUp)
        return nextUp
      })

      return nextUser
    })
  }, [])

  return { upvote, getUpvotes, hasUpvoted }
}

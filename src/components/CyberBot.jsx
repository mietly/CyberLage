import { useState, useRef, useEffect } from 'react'
import { Bot, X, Send, Lock } from 'lucide-react'
import { askClaude } from '../lib/claude'

const quickQuestions = [
  'Was ist Ransomware?',
  'NIS2 kurz erklärt',
  'Phishing erkennen',
  'Was bedeutet CVSS?',
]

export default function CyberBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Hallo! Ich bin CyberBot, dein Security-Assistent. Stell mir eine Frage zu IT-Sicherheit, Datenschutz oder aktuellen Bedrohungen.',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const messagesEndRef = useRef(null)

  const maxFreeQuestions = 5

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text) => {
    const question = text || input.trim()
    if (!question || loading) return

    if (questionCount >= maxFreeQuestions) return

    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: question }])
    setLoading(true)

    const newCount = questionCount + 1
    setQuestionCount(newCount)

    try {
      const chatMessages = [
        ...messages
          .filter((m) => m.role !== 'system')
          .map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: question },
      ]

      const reply = await askClaude(chatMessages)
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      console.error('CyberBot error:', err)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Entschuldigung, es gab einen Fehler. Bitte versuche es erneut.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const limitReached = questionCount >= maxFreeQuestions

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-105"
          aria-label="CyberBot öffnen"
        >
          <Bot className="h-6 w-6" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-25" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-4rem)] flex flex-col bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700 shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-red-400" />
              <div>
                <h3 className="text-white text-sm font-semibold leading-tight">
                  CyberBot
                </h3>
                <p className="text-gray-400 text-xs">Dein Security-Assistent</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              aria-label="Chat schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-red-600 text-white rounded-br-sm'
                      : 'bg-gray-800 text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-400 px-3 py-2 rounded-xl rounded-bl-sm text-sm">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}

            {limitReached && (
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-3 text-center">
                <Lock className="h-5 w-5 text-orange-400 mx-auto mb-1" />
                <p className="text-orange-400 text-sm font-semibold">Anmeldung nötig</p>
                <p className="text-gray-400 text-xs mt-1">
                  Du hast dein Limit von {maxFreeQuestions} kostenlosen Fragen erreicht.
                  Melde dich an, um unbegrenzt zu fragen.
                </p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && !limitReached && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="px-2.5 py-1 rounded-full text-xs bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-700 shrink-0">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={limitReached || loading}
                placeholder={
                  limitReached
                    ? 'Limit erreicht - bitte anmelden'
                    : 'Frage stellen...'
                }
                className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-colors disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage()}
                disabled={limitReached || loading || !input.trim()}
                className="p-2 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Nachricht senden"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {!limitReached && (
              <p className="text-gray-500 text-xs mt-1.5 text-center">
                {maxFreeQuestions - questionCount} von {maxFreeQuestions} kostenlosen Fragen übrig
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

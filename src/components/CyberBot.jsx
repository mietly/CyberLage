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
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-sm bg-[#C8A96E] hover:bg-[#C8A96E]/90 text-[#0A0C0F] transition-all duration-300"
          aria-label="CyberBot öffnen"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-4rem)] flex flex-col bg-[#0F1215] border border-[#1E2228] rounded-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0A0C0F] border-b border-[#1E2228] shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-[#C8A96E]" />
              <div>
                <h3 className="text-[#E8E6E0] text-sm font-semibold leading-tight">
                  CyberBot
                </h3>
                <p className="text-[#7A7D83] text-xs">Dein Security-Assistent</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-[#7A7D83] hover:text-[#E8E6E0] transition-colors"
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
                  className={`max-w-[85%] px-3 py-2 rounded-sm text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#1E2228] text-[#E8E6E0]'
                      : 'bg-[#0A0C0F] text-[#E8E6E0]'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#0A0C0F] text-[#7A7D83] px-3 py-2 rounded-sm text-sm">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#7A7D83] rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-[#7A7D83] rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-[#7A7D83] rounded-full animate-bounce [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}

            {limitReached && (
              <div className="bg-transparent border border-[#C8A96E]/30 rounded-sm p-3 text-center">
                <Lock className="h-5 w-5 text-[#C8A96E] mx-auto mb-1" />
                <p className="text-[#C8A96E] text-sm font-semibold">Anmeldung nötig</p>
                <p className="text-[#7A7D83] text-xs mt-1">
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
                  className="px-2.5 py-1 rounded-none text-xs font-mono bg-transparent text-[#7A7D83] hover:text-[#C8A96E] border border-[#1E2228] hover:border-[#C8A96E]/30 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-[#1E2228] shrink-0">
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
                className="flex-1 px-3 py-2 rounded-none bg-[#0A0C0F] border border-[#1E2228] text-[#E8E6E0] placeholder-[#3E4148] text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-colors disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage()}
                disabled={limitReached || loading || !input.trim()}
                className="p-2 rounded-sm bg-[#C8A96E] hover:bg-[#C8A96E]/90 text-[#0A0C0F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Nachricht senden"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {!limitReached && (
              <p className="text-[#3E4148] text-xs mt-1.5 text-center font-mono">
                {maxFreeQuestions - questionCount} von {maxFreeQuestions} kostenlosen Fragen übrig
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

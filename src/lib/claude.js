const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY || ''

export const isClaudeConfigured = () => !!CLAUDE_API_KEY && CLAUDE_API_KEY !== 'your-claude-api-key'

export async function askClaude(messages, systemPrompt) {
  if (!isClaudeConfigured()) {
    return 'CyberBot ist im Demo-Modus. Bitte konfiguriere den Claude API Key in der .env Datei.'
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': CLAUDE_API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt || 'Du bist CyberBot, ein hilfreicher IT-Security Assistent für CyberLage.de. Antworte immer auf Deutsch, verständlich und präzise. Fokussiere dich auf IT-Sicherheit, Datenschutz, NIS2, DSGVO und Cybersecurity-Themen im DACH-Raum.',
      messages,
    }),
  })

  const data = await response.json()
  return data.content?.[0]?.text || 'Entschuldigung, es gab ein Problem bei der Verarbeitung.'
}

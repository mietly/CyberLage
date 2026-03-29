// Vercel Serverless Function – Newsletter Unsubscribe via Supabase
import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const { email, token } = req.query || {}

  if (!email) {
    return res.status(400).json({ error: 'E-Mail Parameter fehlt' })
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({ error: 'Supabase nicht konfiguriert' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .update({ unsubscribed_at: new Date().toISOString() })
      .eq('email', email)

    if (error) {
      console.error('Supabase unsubscribe error:', error)
      return res.status(500).json({ error: 'Fehler bei der Abmeldung', details: error.message })
    }

    return res.status(200).json({
      success: true,
      message: 'Abmeldung erfolgreich',
    })
  } catch (e) {
    console.error('Unsubscribe exception:', e.message)
    return res.status(500).json({ error: 'Interner Fehler', details: e.message })
  }
}

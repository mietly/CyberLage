-- ============================================
-- CyberLage.de - Supabase Database Schema
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- ARTICLES
-- ============================================
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'ransomware', 'phishing', 'schwachstellen', 'dsgvo',
    'nis2', 'ki-security', 'datenpannen', 'kritis'
  )),
  risk_level TEXT NOT NULL DEFAULT 'info' CHECK (risk_level IN (
    'kritisch', 'hoch', 'mittel', 'niedrig', 'info'
  )),
  image TEXT,
  tags TEXT[] DEFAULT '{}',
  author TEXT DEFAULT 'David Oberholzner',
  reading_time INTEGER DEFAULT 5,
  views INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX idx_articles_slug ON articles(slug);

-- ============================================
-- CVEs / SCHWACHSTELLEN
-- ============================================
CREATE TABLE cves (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cve_id TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  cvss_score DECIMAL(3,1) NOT NULL CHECK (cvss_score >= 0 AND cvss_score <= 10),
  affected_software TEXT NOT NULL,
  vendor TEXT NOT NULL,
  patch_available BOOLEAN DEFAULT false,
  workaround BOOLEAN DEFAULT false,
  advisory_url TEXT,
  published_at DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_cves_cvss ON cves(cvss_score DESC);
CREATE INDEX idx_cves_vendor ON cves(vendor);

-- ============================================
-- NEWSLETTER SUBSCRIBERS
-- ============================================
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  role TEXT CHECK (role IN ('IT-Admin', 'CISO', 'Entwickler', 'Interessiert')),
  confirmed BOOLEAN DEFAULT false,
  confirmation_token UUID DEFAULT uuid_generate_v4(),
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  confirmed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ
);

CREATE INDEX idx_subscribers_email ON newsletter_subscribers(email);

-- ============================================
-- COMMENTS
-- ============================================
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  article_id UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT DEFAULT 'Anonym',
  content TEXT NOT NULL,
  upvotes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_comments_article ON comments(article_id);

-- ============================================
-- COMMUNITY DISCUSSIONS
-- ============================================
CREATE TABLE discussions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'fragen', 'tools', 'vorfaelle', 'jobs'
  )),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT DEFAULT 'Anonym',
  upvotes INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- AI CONVERSATIONS
-- ============================================
CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  messages JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TOOLS USAGE (Analytics)
-- ============================================
CREATE TABLE tools_usage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_name TEXT NOT NULL,
  usage_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_tools_usage_name ON tools_usage(tool_name);

-- ============================================
-- NEWSLETTER EDITIONS
-- ============================================
CREATE TABLE newsletter_editions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subject TEXT NOT NULL,
  content TEXT NOT NULL,
  sent_at TIMESTAMPTZ,
  recipient_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE cves ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools_usage ENABLE ROW LEVEL SECURITY;

-- Public read access for articles and CVEs
CREATE POLICY "Articles are publicly readable"
  ON articles FOR SELECT USING (published = true);

CREATE POLICY "CVEs are publicly readable"
  ON cves FOR SELECT USING (true);

-- Authenticated users can create comments
CREATE POLICY "Anyone can read comments"
  ON comments FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON comments FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Newsletter subscription is public
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Tools usage is public for write
CREATE POLICY "Anyone can log tool usage"
  ON tools_usage FOR INSERT WITH CHECK (true);

-- Discussions are public read
CREATE POLICY "Discussions are publicly readable"
  ON discussions FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create discussions"
  ON discussions FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Admin policies (for david@oberholzner.com)
-- Note: Set up admin role in Supabase Dashboard
CREATE POLICY "Admin full access to articles"
  ON articles FOR ALL USING (
    auth.jwt() ->> 'email' = 'david@oberholzner.com'
  );

CREATE POLICY "Admin full access to newsletter_subscribers"
  ON newsletter_subscribers FOR ALL USING (
    auth.jwt() ->> 'email' = 'david@oberholzner.com'
  );

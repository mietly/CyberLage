# CyberLage.de

**Die tägliche Sicherheitslage für den DACH-Raum**
Aktuell. Relevant. Verständlich.

IT-Security News & Knowledge Portal für IT-Mitarbeiter, Security-Coaches und technikaffine Menschen im DACH-Raum.

## Tech Stack

- **Frontend:** React 19 + Vite 8
- **Styling:** Tailwind CSS 4
- **Backend:** Supabase (Auth, Database, Storage)
- **KI:** Claude API (CyberBot Assistant)
- **Newsletter:** Resend API

## Schnellstart

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten (Port 3006)
npm run dev

# Production Build
npm run build
```

Die App läuft auf **http://localhost:3006**

## Umgebungsvariablen

Erstelle eine `.env` Datei im Projektroot (oder kopiere `.env.example`):

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Claude API (für CyberBot KI-Assistent)
VITE_CLAUDE_API_KEY=your-claude-api-key

# Resend (für Newsletter-Versand)
VITE_RESEND_API_KEY=your-resend-api-key

# Site URL
VITE_SITE_URL=http://localhost:3006
```

> **Hinweis:** Die App ist auch ohne echte Keys kompilierbar und zeigt Demo-Daten an.

## Supabase Setup

1. Erstelle ein neues Supabase-Projekt unter [supabase.com](https://supabase.com)
2. Führe das SQL-Schema aus: `supabase-schema.sql`
3. Aktiviere Auth (Email/Password) in den Supabase-Einstellungen
4. Trage URL und Anon-Key in die `.env` ein

## Seiten & Features

| Route | Seite | Beschreibung |
|-------|-------|--------------|
| `/` | Homepage | Hero, News Grid, Top Risiken, CVE Widget, DACH News |
| `/news` | News Liste | Alle Artikel mit Filter, Suche, Sortierung |
| `/news/:slug` | Artikel | Vollständiger Artikel mit Kommentaren |
| `/schwachstellen` | CVE Datenbank | Schwachstellen-Tracker mit Filtern |
| `/tools` | Tools Übersicht | Kostenlose Security-Tools |
| `/tools/password` | Passwort-Check | Lokaler Passwort-Stärke-Tester |
| `/tools/nis2-check` | NIS2 Quick-Check | 10-Fragen NIS2-Pflicht-Test |
| `/tools/phishing` | Phishing Guide | Interaktiver Phishing-Erkenner |
| `/tools/ip-check` | IP/Domain Check | Reputation-Prüfung |
| `/tools/dsgvo` | DSGVO Checkliste | Interaktive 20-Punkte-Checkliste |
| `/tools/passwort-manager` | PM Vergleich | Passwort-Manager Vergleichstabelle |
| `/nis2` | NIS2 Hub | Alles zu NIS2 |
| `/newsletter` | Newsletter | Anmeldung + Vorschau |
| `/knowledge` | Knowledge Base | Wiki + Glossar |
| `/community` | Community | Diskussionsforum |
| `/about` | Über uns | Impressum, Datenschutz, Kontakt |
| `/admin` | Admin | Artikel-Editor, Newsletter, Statistiken |

## Admin-Zugang

Login: `david@oberholzner.com` (Demo-Passwort: beliebig)

## Projektstruktur

```
src/
├── components/
│   ├── Header.jsx          # Navigation + Breaking News Ticker
│   ├── Footer.jsx          # Footer mit Links
│   ├── Layout.jsx          # App-Layout Shell
│   ├── NewsCard.jsx        # Artikel-Vorschau-Karte
│   ├── CyberBot.jsx        # KI-Chat-Widget
│   ├── RiskBadge.jsx       # Risiko-Level Badge
│   └── NewsletterSignup.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── NewsListPage.jsx
│   ├── ArticlePage.jsx
│   ├── CVEPage.jsx
│   ├── ToolsPage.jsx
│   ├── NIS2Page.jsx
│   ├── NewsletterPage.jsx
│   ├── KnowledgePage.jsx
│   ├── CommunityPage.jsx
│   ├── AboutPage.jsx
│   ├── AdminPage.jsx
│   └── tools/
│       ├── PasswordChecker.jsx
│       ├── NIS2Check.jsx
│       ├── PhishingGuide.jsx
│       ├── IPChecker.jsx
│       ├── DsgvoChecklist.jsx
│       └── PasswordManagerPage.jsx
├── data/
│   └── demoData.js         # Demo-Artikel, CVEs, Glossar
├── lib/
│   ├── supabase.js         # Supabase Client
│   └── claude.js           # Claude API Client
├── App.jsx                 # Router
├── main.jsx                # Entry Point
└── index.css               # Tailwind + Custom Styles
```

## Betrieben von

**Corelead Solutions** - [corelead.solutions](https://corelead.solutions)

David Oberholzner - IT Director & NIS2 Experte

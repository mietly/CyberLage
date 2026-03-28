import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NewsListPage from './pages/NewsListPage'
import ArticlePage from './pages/ArticlePage'
import CVEPage from './pages/CVEPage'
import ToolsPage from './pages/ToolsPage'
import PasswordChecker from './pages/tools/PasswordChecker'
import NIS2Check from './pages/tools/NIS2Check'
import PhishingGuide from './pages/tools/PhishingGuide'
import IPChecker from './pages/tools/IPChecker'
import DsgvoChecklist from './pages/tools/DsgvoChecklist'
import PasswordManagerPage from './pages/tools/PasswordManagerPage'
import NIS2Page from './pages/NIS2Page'
import NewsletterPage from './pages/NewsletterPage'
import KnowledgePage from './pages/KnowledgePage'
import CommunityPage from './pages/CommunityPage'
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsListPage />} />
        <Route path="/news/:slug" element={<ArticlePage />} />
        <Route path="/schwachstellen" element={<CVEPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/password" element={<PasswordChecker />} />
        <Route path="/tools/nis2-check" element={<NIS2Check />} />
        <Route path="/tools/phishing" element={<PhishingGuide />} />
        <Route path="/tools/ip-check" element={<IPChecker />} />
        <Route path="/tools/dsgvo" element={<DsgvoChecklist />} />
        <Route path="/tools/passwort-manager" element={<PasswordManagerPage />} />
        <Route path="/nis2" element={<NIS2Page />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  )
}

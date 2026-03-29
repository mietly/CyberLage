import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CyberBot from './CyberBot'
import CookieBanner from './CookieBanner'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0C0F] text-[#E8E6E0]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CyberBot />
      <CookieBanner />
    </div>
  )
}

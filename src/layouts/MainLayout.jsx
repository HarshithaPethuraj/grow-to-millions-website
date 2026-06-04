import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Questionnaire from '../components/Questionnaire'

export default function MainLayout() {
  const { pathname } = useLocation()
  const [showQ, setShowQ] = useState(false)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])

  // Prevent body scroll when questionnaire is open
  useEffect(() => {
    document.body.style.overflow = showQ ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showQ])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenQuestionnaire={() => setShowQ(true)} />
      <main className="flex-1">
        {/* Pass openQuestionnaire down via context alternative - cloneElement on Outlet won't work,
            so we pass it through location state instead and each page can call it via prop drilling.
            Simplest approach: expose via window event */}
        <Outlet context={{ openQuestionnaire: () => setShowQ(true) }} />
      </main>
      <Footer />

      {/* Questionnaire overlay */}
      <AnimatePresence>
        {showQ && <Questionnaire onClose={() => setShowQ(false)} />}
      </AnimatePresence>
    </div>
  )
}

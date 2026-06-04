import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../constants'
import { useSticky } from '../hooks/useSticky'
import logo from '../assets/logo.png'

export default function Navbar({ onOpenQuestionnaire }) {
  const [open, setOpen] = useState(false)
  const sticky = useSticky(30)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        sticky
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="flex items-center justify-between">

          {/* Logo - large and prominent */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src={logo}
              alt="Grow to Millions"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-accent-600 bg-accent-50'
                      : sticky
                      ? 'text-gray-600 hover:text-navy-800 hover:bg-gray-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA - "Start Growing" */}
          <div className="hidden lg:block">
            <button
              onClick={onOpenQuestionnaire}
              className="bg-accent-600 hover:bg-accent-700 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent-600/25 active:scale-95"
            >
              Start Growing
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              sticky ? 'text-navy-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-6 py-5 space-y-1">
              {NAV_LINKS.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? 'text-accent-600 bg-accent-50' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => { setOpen(false); onOpenQuestionnaire() }}
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-3.5 rounded-full text-sm transition-colors"
                >
                  Start Growing
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

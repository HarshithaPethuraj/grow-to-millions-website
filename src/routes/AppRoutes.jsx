import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

// Lazy-loaded pages — each ships as its own chunk.
const Home          = lazy(() => import('../pages/Home'))
const Services      = lazy(() => import('../pages/Services'))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'))
const About         = lazy(() => import('../pages/About'))
const Blog          = lazy(() => import('../pages/Blog'))
const BlogPost      = lazy(() => import('../pages/BlogPost'))
const Contact       = lazy(() => import('../pages/Contact'))

// Minimal fallback — single screen height so layout doesn't jump.
function PageFallback() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-navy-800"
      role="status"
      aria-live="polite"
    >
      <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/"               element={<Suspense fallback={<PageFallback />}><Home /></Suspense>}          />
        <Route path="/services"       element={<Suspense fallback={<PageFallback />}><Services /></Suspense>}      />
        <Route path="/services/:slug" element={<Suspense fallback={<PageFallback />}><ServiceDetail /></Suspense>} />
        <Route path="/about"          element={<Suspense fallback={<PageFallback />}><About /></Suspense>}         />
        <Route path="/blog"           element={<Suspense fallback={<PageFallback />}><Blog /></Suspense>}          />
        <Route path="/blog/:slug"     element={<Suspense fallback={<PageFallback />}><BlogPost /></Suspense>}      />
        <Route path="/contact"        element={<Suspense fallback={<PageFallback />}><Contact /></Suspense>}       />
      </Route>
    </Routes>
  )
}

import { useState, useEffect } from 'react'

export function useSticky(offset = 20) {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > offset)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [offset])
  return sticky
}

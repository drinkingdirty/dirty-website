'use client'

import { useState, useEffect } from 'react'

/**
 * Returns true when the page has been scrolled past the given threshold.
 * Used by the Navigation component to trigger the transparent → solid transition.
 *
 * @param threshold - Scroll distance in pixels before returning true (default: 80)
 */
export function useScrolled(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Set initial state in case page loads mid-scroll (e.g. browser back)
    setScrolled(window.scrollY > threshold)

    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    // Passive listener for scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

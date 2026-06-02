'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────────────────
interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

// ── Nav Items ──────────────────────────────────────────────────────
const navItems = [
  { label: 'Our Story', href: '/story' },
  { label: 'Menu',      href: '/menu' },
  { label: 'Find Dirty', href: '/find' },
  { label: 'Events',    href: '/events' },
  { label: 'Loyalty',   href: '/loyalty' },
  { label: 'FAQ',       href: '/faq' },
  { label: 'Contact',   href: '/contact' },
] as const

// ── Animation Variants ─────────────────────────────────────────────
const overlayVariants = {
  closed: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
}

const listVariants = {
  closed:  {},
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
}

const itemVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

// ── Component ──────────────────────────────────────────────────────
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on route change
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-[90] flex flex-col bg-cream"
          aria-modal="true"
          role="dialog"
          aria-label="Navigation menu"
        >
          {/* Close button row — mirrors nav height */}
          <div className="flex h-[60px] items-center justify-between px-5">
            {/* Logo / Wordmark */}
            <Link
              href="/"
              onClick={onClose}
              className="font-display-italic text-[1.6rem] leading-none text-coral"
              aria-label="Dirty — go home"
            >
              Dirty
            </Link>

            {/* Close button */}
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full text-espresso transition-colors hover:bg-blush"
              aria-label="Close navigation menu"
            >
              <XIcon />
            </button>
          </div>

          {/* Nav Items */}
          <motion.nav
            variants={listVariants}
            initial="closed"
            animate="open"
            className="flex flex-1 flex-col items-center justify-center gap-2 px-5 pb-8"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <motion.div key={item.href} variants={itemVariants} className="w-full text-center">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'block py-3 font-sans text-[1.75rem] font-medium tracking-[-0.01em] text-espresso',
                      'transition-colors duration-200 hover:text-coral',
                      isActive && 'text-coral'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}

            {/* Book CTA */}
            <motion.div variants={itemVariants} className="mt-8 w-full">
              <Link
                href="/events"
                onClick={onClose}
                className="btn-coral w-full text-center"
                aria-label="Book an event with Dirty"
              >
                Book an Event
              </Link>
            </motion.div>

            {/* Instagram handle */}
            <motion.div variants={itemVariants} className="mt-4">
              <a
                href="https://instagram.com/dirtyslo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-text-secondary transition-colors hover:text-coral"
              >
                @dirtyslo
              </a>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ── X Icon ─────────────────────────────────────────────────────────
function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 5L5 15M5 5l10 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

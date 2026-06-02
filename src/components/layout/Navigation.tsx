'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useScrolled } from '@/hooks/useScrolled'
import MobileMenu from './MobileMenu'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Our Story', href: '/story' },
  { label: 'Menu',      href: '/menu' },
  { label: 'Find Dirty', href: '/find' },
  { label: 'Events',    href: '/events' },
  { label: 'Loyalty',   href: '/loyalty' },
  { label: 'FAQ',       href: '/faq' },
  { label: 'Contact',   href: '/contact' },
] as const

export default function Navigation() {
  const scrolled = useScrolled(80)
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu  = useCallback(() => setMenuOpen(true), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const isHeroPage    = pathname === '/'
  const isTransparent = isHeroPage && !scrolled

  return (
    <>
      <motion.header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-[400ms]',
          isTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(44,26,18,0.06)]'
        )}
        initial={false}
      >
        <div className="container-default flex h-[var(--nav-height)] items-center justify-between max-md:h-[var(--nav-height-mobile)]">

          <Link href="/" className="relative z-10 shrink-0" aria-label="Dirty — go to homepage">
            <Image
              src="/images/logo/dirty-logo.png"
              alt="Dirty — Premium Dirty Soda"
              width={56}
              height={56}
              className="h-[56px] w-[56px] object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'nav-link transition-colors duration-[400ms]',
                    isTransparent ? 'text-cream/90 hover:text-cream' : 'text-espresso hover:text-coral',
                    isActive && (isTransparent ? 'text-cream' : 'text-coral')
                  )}
                  data-active={isActive}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/events"
              className={cn(
                'rounded-pill px-6 py-2.5 font-sans text-label transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]',
                isTransparent
                  ? 'border border-cream/60 text-cream hover:border-cream hover:bg-cream/15'
                  : 'bg-coral text-cream hover:bg-terracotta'
              )}
            >
              Book an Event
            </Link>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/events"
              className={cn(
                'rounded-pill px-4 py-2 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] transition-all duration-200',
                isTransparent ? 'border border-cream/60 text-cream' : 'bg-coral text-cream'
              )}
            >
              Book
            </Link>
            <button
              onClick={openMenu}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full transition-colors',
                isTransparent ? 'hover:bg-cream/10' : 'hover:bg-blush'
              )}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                <path
                  d="M1 1h20M1 8h20M1 15h20"
                  stroke={isTransparent ? '#FAF7F2' : '#2C1A12'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ transition: 'stroke 400ms ease' }}
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  )
}
'use client'

import Link from 'next/link'
import { useState } from 'react'

const exploreLinks = [
  { label: 'Our Story',  href: '/story' },
  { label: 'The Menu',   href: '/menu' },
  { label: 'Find Dirty', href: '/find' },
  { label: 'Events & Catering', href: '/events' },
] as const

const connectLinks = [
  { label: 'Loyalty Program', href: '/loyalty' },
  { label: 'FAQ',             href: '/faq' },
  { label: 'Contact',         href: '/contact' },
  { label: '@drinking.dirty on Instagram', href: 'https://instagram.com/drinking.dirty', external: true },
] as const

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-espresso text-cream" role="contentinfo">
      <div className="container-default py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" aria-label="Dirty — go to homepage">
              <span className="font-display-italic text-[2.5rem] leading-none text-coral">Dirty</span>
            </Link>
            <p className="mt-3 font-display-italic text-lg text-cream/60">Never Tasted This Good.</p>
            <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 font-sans text-sm text-cream/70 transition-colors hover:text-coral">
              <InstagramIcon />
              <span>@drinking.dirty</span>
            </a>
            <a href="https://tiktok.com/@drinkingdirty" target="_blank" rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 font-sans text-sm text-cream/70 transition-colors hover:text-coral">
              <TikTokIcon />
              <span>@drinkingdirty</span>
            </a>
            <p className="mt-4 font-sans text-[0.75rem] text-cream/40">San Luis Obispo, California</p>
          </div>

          <div>
            <p className="text-label text-cream/50 mb-5">Explore</p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-[0.9375rem] text-cream/75 transition-colors duration-200 hover:text-coral">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label text-cream/50 mb-5">Connect</p>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  {'external' in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-sans text-[0.9375rem] text-cream/75 transition-colors duration-200 hover:text-coral">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="font-sans text-[0.9375rem] text-cream/75 transition-colors duration-200 hover:text-coral">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label text-cream/50 mb-5">Stay in the Loop</p>
            <p className="font-sans text-sm text-cream/70 leading-relaxed mb-4">Get weekly location drops before they go public.</p>
            <FooterEmailForm />
          </div>
        </div>

        <div className="mt-16 border-t border-cream/10 pt-10">
          <p className="font-display-italic text-center text-2xl text-cream/30">Dirty. Never Tasted This Good.</p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="font-sans text-xs text-cream/35">© {currentYear} Dirty. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-sans text-xs text-cream/35 transition-colors hover:text-cream/60">Privacy Policy</Link>
            <Link href="/terms" className="font-sans text-xs text-cream/35 transition-colors hover:text-cream/60">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterEmailForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setState('success')
        setEmail('')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return <p className="font-sans text-sm text-coral">You&apos;re in! We&apos;ll keep you posted.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex overflow-hidden rounded-full border border-cream/20 focus-within:border-cream/40 transition-colors duration-200">
        <input
          type="email"
          placeholder="your email"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-label="Email address for location drops"
          className="flex-1 bg-transparent px-4 py-2.5 font-sans text-sm text-cream placeholder:text-cream/35 outline-none min-w-0"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="shrink-0 rounded-full bg-cream/10 px-4 py-2 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-coral disabled:opacity-50"
        >
          {state === 'loading' ? '...' : 'Go'}
        </button>
      </div>
      {state === 'error' && <p className="font-sans text-[0.7rem] text-coral">Something went wrong. Try again.</p>}
      {state === 'idle' && <p className="font-sans text-[0.7rem] text-cream/30">Unsubscribe anytime.</p>}
    </form>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  )
}

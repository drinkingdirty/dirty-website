'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || state === 'loading') return
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
      setState('success')
      setEmail('')
    }
  }

  return (
    <section className="bg-blush section-padding-sm" aria-label="Email Sign Up">
      <div className="container-default">
        <div className="mx-auto max-w-[560px] text-center">
          <ScrollReveal>
            <p className="text-label text-coral mb-4">Never Miss a Drop</p>
            <h2 className="font-display-italic text-display-sm text-espresso">
              Know where we&apos;ll be<br />before everyone else.
            </h2>
            <p className="mt-4 font-sans text-body-md text-text-secondary">
              Weekly location drops. That&apos;s it. No clutter.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mt-8">
            {state === 'success' ? (
              <div className="rounded-pill bg-white px-8 py-4 shadow-card">
                <p className="font-sans text-body-md text-espresso font-medium">You&apos;re in. ✓</p>
                <p className="font-sans text-sm text-text-secondary mt-1">Watch your inbox — we&apos;ll be in touch before Thursday.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your best email"
                    required
                    autoComplete="email"
                    aria-label="Email address for weekly location drops"
                    className="flex-1 rounded-pill border border-blush-dark bg-white px-6 py-3.5 font-sans text-base text-espresso placeholder:text-text-tertiary focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    disabled={state === 'loading' || !email}
                    className="btn-coral shrink-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {state === 'loading' ? 'Joining...' : "I'm In"}
                  </button>
                </div>
                {state === 'error' && (
                  <p className="mt-3 font-sans text-sm text-coral">Something went wrong. Try again or DM us on Instagram.</p>
                )}
                <p className="mt-4 font-sans text-caption text-text-tertiary">We respect your inbox. Unsubscribe anytime.</p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

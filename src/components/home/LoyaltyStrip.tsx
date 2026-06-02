'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

function CupIcon({ filled = false, delay = 0 }: { filled?: boolean; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
    >
      <svg width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden="true">
        <path d="M5 8 L7 30 Q7 32 9 32 L19 32 Q21 32 21 30 L23 8 Z" fill={filled ? '#E8523A' : 'none'} stroke={filled ? '#E8523A' : '#2C1A12'} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 8 Q4 6 6 6 L22 6 Q24 6 24 8 L24 9 Q24 10 22 10 L6 10 Q4 10 4 9 Z" fill={filled ? '#C9412A' : 'none'} stroke={filled ? '#C9412A' : '#2C1A12'} strokeWidth="1.5" />
        <line x1="16" y1="6" x2="18" y2="0" stroke={filled ? '#C9412A' : '#7A5C50'} strokeWidth="1.5" strokeLinecap="round" />
        {filled && <text x="14" y="24" textAnchor="middle" fontSize="8" fill="white">★</text>}
      </svg>
    </motion.div>
  )
}

export default function LoyaltyStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="bg-cream section-padding" aria-label="Loyalty Program">
      <div className="container-default">
        <div className="mx-auto max-w-[720px] text-center">
          <ScrollReveal>
            <p className="text-label text-gold mb-4">The Regulars Club</p>
            <h2 className="font-display text-display-md text-espresso">Buy 8. Your 9th is on us.</h2>
          </ScrollReveal>
          <div ref={ref} className="mt-10 mb-10 flex items-end justify-center gap-3 flex-wrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <CupIcon key={`cup-${i}`} filled={false} delay={inView ? i * 0.07 : 0} />
            ))}
            <span className="font-sans text-xl text-text-tertiary mb-1 mx-1">+</span>
            <CupIcon filled delay={inView ? 8 * 0.07 + 0.1 : 0} />
          </div>
          <ScrollReveal delay={0.1}>
            <p className="font-sans text-body-md text-text-secondary leading-relaxed max-w-[520px] mx-auto">
              Dirty always leaves you wanting more. That&apos;s why you can pick up a loyalty card at any Dirty location and get it punched with every drink. Buy 8, and your 9th is completely on us.
            </p>
            <Link href="/loyalty" className="btn-text-arrow mt-8 inline-flex mx-auto">
              Learn more about the program
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

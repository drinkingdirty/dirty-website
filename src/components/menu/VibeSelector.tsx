'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { DrinkItem } from '@/types/menu'

interface VibeSelectorProps {
  sweetFruity: DrinkItem[]
  boldCreamy: DrinkItem[]
  classicClean: DrinkItem[]
}

const q1 = [
  { key: 'bright', label: 'Bright & bubbly', sub: 'Something light and refreshing' },
  { key: 'rich',   label: 'Rich & indulgent', sub: 'Something creamy and layered' },
  { key: 'easy',   label: 'Easy & classic', sub: 'Something simple and always right' },
]

const q2: Record<string, { a: string; sub: string; result: string }[]> = {
  bright: [
    { a: 'Fruity and tropical', sub: 'The more flavor, the better', result: 'sweet' },
    { a: 'Citrusy and clean', sub: 'Light but interesting', result: 'classic' },
  ],
  rich: [
    { a: 'Something bold', sub: 'I want it to hit', result: 'bold' },
    { a: 'Something smooth', sub: 'Creamy and dreamy', result: 'sweet' },
  ],
  easy: [
    { a: 'The one everyone orders', sub: 'Tried and true', result: 'classic' },
    { a: 'A little extra energy', sub: 'Red Bull base, please', result: 'bold' },
  ],
}

const resultCopy: Record<string, { headline: string; sub: string }> = {
  sweet: { headline: 'You want something fun.', sub: 'Start here.' },
  bold:  { headline: 'You want the good stuff.', sub: 'These are yours.' },
  classic: { headline: 'You know what you like.', sub: 'Classic taste, every time.' },
}

export default function VibeSelector({ sweetFruity, boldCreamy, classicClean }: VibeSelectorProps) {
  const [q1Answer, setQ1Answer] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const drinks = result === 'sweet' ? sweetFruity : result === 'bold' ? boldCreamy : classicClean
  const copy = result ? resultCopy[result] : null

  function reset() { setQ1Answer(null); setResult(null) }

  return (
    <section className="bg-[#FAF7F2] section-padding">
      <div className="container-default max-w-[860px]">

        {/* Header */}
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-label text-coral mb-1">Find Your Drink</p>
            <h2 className="font-display-italic text-display-sm text-espresso">
              What&apos;s your Dirty?
            </h2>
          </div>
          {(q1Answer || result) && (
            <button onClick={reset}
              className="font-sans text-xs text-text-secondary hover:text-coral transition-colors tracking-wide uppercase">
              Start over
            </button>
          )}
        </div>

        {/* Q1 */}
        {!q1Answer && (
          <div>
            <p className="font-sans text-sm text-text-secondary mb-4">How are you feeling right now?</p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {q1.map((opt) => (
                <button key={opt.key} onClick={() => setQ1Answer(opt.key)}
                  className="rounded-xl px-5 py-4 text-left border border-blush-dark bg-white hover:border-coral hover:shadow-card transition-all duration-200">
                  <p className="font-display text-[1.05rem] text-espresso mb-0.5">{opt.label}</p>
                  <p className="font-sans text-xs text-text-secondary">{opt.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Q2 */}
        {q1Answer && !result && (
          <div>
            <p className="font-sans text-sm text-text-secondary mb-4">What sounds better right now?</p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {(q2[q1Answer] ?? []).map((opt) => (
                <button key={opt.a} onClick={() => setResult(opt.result)}
                  className="rounded-xl px-5 py-4 text-left border border-blush-dark bg-white hover:border-coral hover:shadow-card transition-all duration-200">
                  <p className="font-display text-[1.05rem] text-espresso mb-0.5">{opt.a}</p>
                  <p className="font-sans text-xs text-text-secondary">{opt.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {result && copy && (
          <div>
            <div className="mb-6">
              <p className="font-display-italic text-display-sm text-espresso mb-1">{copy.headline}</p>
              <p className="font-sans text-sm text-text-secondary">{copy.sub}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {drinks.map((drink) => (
                <div key={drink.id} className="flex flex-col items-center text-center">
                  <div className="relative w-full bg-cream rounded-2xl mb-2" style={{ aspectRatio: '1/1' }}>
                    <Image
                      src={'/images/drinks/' + drink.id + '.png'}
                      alt={drink.name}
                      fill
                      className="object-contain object-center p-3"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h4 className="font-display text-[0.95rem] text-espresso mb-0.5">{drink.name}</h4>
                  <p className="font-sans text-xs text-text-secondary">{drink.flavorTags.slice(0, 2).join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

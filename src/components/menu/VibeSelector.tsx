'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { DrinkItem } from '@/types/menu'

interface VibeSelectorProps {
  sweetFruity: DrinkItem[]
  boldCreamy: DrinkItem[]
  classicClean: DrinkItem[]
}

const vibes = [
  { key: 'sweet', label: 'Sweet & Fruity', emoji: '🍓', desc: 'Light, bright, and full of fruit' },
  { key: 'bold',  label: 'Bold & Creamy',  emoji: '🍦', desc: 'Rich, layered, and indulgent' },
  { key: 'classic', label: 'Classic & Clean', emoji: '✨', desc: 'Simple, balanced, timeless' },
]

export default function VibeSelector({ sweetFruity, boldCreamy, classicClean }: VibeSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null)

  const drinks = selected === 'sweet' ? sweetFruity : selected === 'bold' ? boldCreamy : classicClean

  return (
    <section className="bg-[#FAF7F2] section-padding">
      <div className="container-default">
        <div className="text-center mb-10">
          <p className="text-label text-coral mb-3">Find Your Drink</p>
          <h2 className="font-display-italic text-display-md text-espresso mb-4">
            What&apos;s your Dirty?
          </h2>
          <p className="font-sans text-body-md text-text-secondary max-w-[400px] mx-auto">
            Pick a vibe and we&apos;ll show you where to start.
          </p>
        </div>

        {/* Vibe buttons */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-12">
          {vibes.map((v) => (
            <button
              key={v.key}
              onClick={() => setSelected(selected === v.key ? null : v.key)}
              className={`rounded-2xl p-6 text-left transition-all duration-200 border-2 ${
                selected === v.key
                  ? 'border-coral bg-white shadow-card'
                  : 'border-blush-dark bg-white/50 hover:bg-white hover:border-coral/40'
              }`}
            >
              <h3 className="font-display text-[1.25rem] text-espresso mb-1">{v.label}</h3>
              <p className="font-sans text-sm text-text-secondary">{v.desc}</p>
            </button>
          ))}
        </div>

        {/* Drink results */}
        {selected && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 animate-fade-in">
            {drinks.map((drink) => (
              <div key={drink.id} className="flex flex-col items-center text-center">
                <div className="relative w-full bg-cream rounded-2xl mb-3" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src={'/images/drinks/' + drink.id + '.png'}
                    alt={drink.name}
                    fill
                    className="object-contain object-center p-3"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h4 className="font-display text-[1rem] text-espresso mb-1">{drink.name}</h4>
                <p className="font-sans text-xs text-text-secondary">{drink.flavorTags.slice(0, 2).join(' · ')}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

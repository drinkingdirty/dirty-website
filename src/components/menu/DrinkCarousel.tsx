'use client'

import Image from 'next/image'
import { useRef } from 'react'
import type { DrinkItem } from '@/types/menu'

interface DrinkCarouselProps {
  drinks: DrinkItem[]
  label: string
  priceRange: string
}

export default function DrinkCarousel({ drinks, label, priceRange }: DrinkCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <div className="container-default">
        <div className="flex items-center gap-6 mb-10">
          <h2 className="font-display text-display-sm text-espresso">{label}</h2>
          <div className="flex-1 h-px bg-blush-dark" />
          <p className="text-label text-text-secondary shrink-0">{priceRange}</p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-8 px-6 md:px-[max(24px,calc((100vw-980px)/2))] scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {drinks.map((drink) => (
          <div key={drink.id} className="flex-shrink-0 w-[340px] md:w-[400px] flex flex-col">
            <div className="relative mb-6" style={{ height: '520px' }}>
              <Image
                src={'/images/drinks/' + drink.id + '.png'}
                alt={drink.name}
                fill
                className="object-contain object-bottom"
                sizes="400px"
              />
            </div>
            <div className="px-1">
              <h3 className="font-display text-[1.75rem] text-espresso mb-1">{drink.name}</h3>
              <p className="text-label text-sage mb-3">{drink.flavorTags.join(' · ')}</p>
              <p className="font-sans text-body-md text-text-secondary leading-relaxed">{drink.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

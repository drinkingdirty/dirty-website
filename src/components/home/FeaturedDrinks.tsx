import Image from 'next/image'
import Link from 'next/link'
import { featuredDrinks } from '@/data/menu'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { cn } from '@/lib/utils'

export default function FeaturedDrinks() {
  const drinks = featuredDrinks.slice(0, 2)
  if (drinks.length === 0) return null

  return (
    <section className="bg-white section-padding" aria-label="Featured Drinks">
      <div className="container-default">
        <ScrollReveal>
          <div className="mb-16 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-label text-sage mb-3">The Drinks</p>
              <h2 className="font-display text-display-md text-espresso">Crafted to be craved.</h2>
            </div>
            <Link href="/menu" className="btn-text-arrow hidden md:flex shrink-0">View full menu</Link>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-24">
          {drinks.map((drink, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div key={drink.id} className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 items-center">
                <ScrollReveal className={cn('md:col-span-7', isReversed && 'md:order-2')} distance={40}>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] w-full">
                    <Image
                      src={drink.imagePath}
                      alt={`${drink.name} — ${drink.flavorTags.join(', ')}`}
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 58vw"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal className={cn('md:col-span-5', isReversed && 'md:order-1')} delay={0.15} distance={30}>
                  <div className={cn('flex flex-col', isReversed ? 'md:items-end md:text-right' : 'md:items-start')}>
                    <p className="text-label text-coral mb-4">Signature Series</p>
                    <h3 className="font-display-italic text-display-sm text-espresso">{drink.name}</h3>
                    <p className="mt-3 font-sans text-caption text-text-secondary tracking-wide">{drink.flavorTags.join(' · ')}</p>
                    <div className={cn('mt-5 mb-5 h-px w-10 bg-blush-dark', isReversed && 'md:self-end')} />
                    <p className="font-sans text-body-md text-text-secondary leading-relaxed max-w-[360px]">{drink.description}</p>
                    <Link href="/menu" className="btn-text-arrow mt-8">See full menu</Link>
                  </div>
                </ScrollReveal>
              </div>
            )
          })}
        </div>
        <ScrollReveal className="mt-12 flex justify-center md:hidden">
          <Link href="/menu" className="btn-ghost">View Full Menu</Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'
import DrinkCarousel from '@/components/menu/DrinkCarousel'
import VibeSelector from '@/components/menu/VibeSelector'
import { menuItems } from '@/data/menu'

export const metadata: Metadata = {
  title: 'Menu | Dirty',
  description: 'Handcrafted dirty sodas made to order. Signatures, Bombers, Seasonal specials, and Craft Your Own.',
}

export default function MenuPage() {
  const signatures = menuItems.filter((d) => d.category === 'signature' && d.isAvailable)
  const bombers    = menuItems.filter((d) => d.category === 'bomber'    && d.isAvailable)
  const seasonal   = menuItems.filter((d) => d.category === 'seasonal'  && d.isAvailable)

  const sweetFruity  = signatures.filter(d => ['pink-wave','fruity-fizz','the-squeeze','galaxy'].includes(d.id))
  const boldCreamy   = [...signatures.filter(d => ['razz-rush','lime-in-the-coconut','dirty-float'].includes(d.id)), ...bombers.filter(d => ['peach-pom','jolly-rancher'].includes(d.id))]
  const classicClean = [...signatures.filter(d => ['the-classic'].includes(d.id)), ...bombers.filter(d => ['breeze','island-time','cherry-pie'].includes(d.id))]

  return (
    <>
      {/* SPLIT SCREEN HERO */}
      <section className="relative w-full overflow-hidden min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

          {/* Left — lifestyle photo */}
          <div className="relative min-h-[50vh] md:min-h-screen order-2 md:order-1">
            <Image
              src="/images/hero/instagram/ig-06.jpg"
              alt="The Golden Hour — Dirty Summer Drink"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right — editorial copy */}
          <div className="flex flex-col justify-center px-8 md:px-14 py-24 bg-[#FAF7F2] order-1 md:order-2 pt-36 md:pt-32">
            <ScrollReveal>
              <p className="font-sans text-xs font-bold tracking-[0.28em] uppercase text-[#A8916A] mb-6">
                Dirty. &nbsp;·&nbsp; San Luis Obispo, CA
              </p>
              <h1
                className="font-display-italic text-[#2C1A12] mb-6"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', lineHeight: 1.05 }}
              >
                Drinks worth<br />the detour.
              </h1>
              <p className="font-sans text-body-lg text-[#6B5248] leading-relaxed mb-10 max-w-[380px]">
                Handcrafted dirty sodas. Made in SLO. Found at the Thursday market and everywhere worth being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/find" className="btn-coral">Find Us This Week</Link>
                <Link href="#signatures" className="btn-ghost">See the Menu</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-[#2C1A12] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 22s linear infinite' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 mx-8 font-sans text-xs font-bold tracking-[0.2em] uppercase text-[rgba(250,247,242,0.55)]">
              <span>Made in SLO</span>
              <span className="text-[#E8523A]">&#10022;</span>
              <span>Summer 2026</span>
              <span className="text-[#E8523A]">&#10022;</span>
              <span>Never Tasted This Good</span>
              <span className="text-[#E8523A]">&#10022;</span>
              <span>Handcrafted to Order</span>
              <span className="text-[#E8523A]">&#10022;</span>
            </span>
          ))}
        </div>
      </div>

      {/* GOLDEN HOUR DROP CARD */}
      {seasonal.length > 0 && seasonal.map((drink) => (
        <section key={drink.id} className="bg-[#C97A3A] section-padding overflow-hidden">
          <div className="container-default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Drink image */}
              <ScrollReveal delay={0.1} className="flex justify-center order-1 md:order-2">
                <div className="relative w-full max-w-[420px]">
                  <svg viewBox="0 0 400 110" className="w-full -mb-2" aria-hidden="true">
                    <defs>
                      <path id="goldenCurve" d="M 20,95 Q 200,5 380,95" />
                    </defs>
                    <text fill="rgba(250,247,242,0.95)" fontFamily="Georgia, serif" fontStyle="italic" fontSize="40" textAnchor="middle">
                      <textPath href="#goldenCurve" startOffset="50%">The Golden Hour</textPath>
                    </text>
                  </svg>
                  <div className="relative" style={{ aspectRatio: '3/4' }}>
                    {/* Radial glow behind drink */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,240,180,0.85) 0%, rgba(255,200,80,0.5) 35%, rgba(255,160,40,0.2) 60%, transparent 78%)',
                        transform: 'scale(1.2)',
                      }}
                      aria-hidden="true"
                    />
                    <Image
                      src="/images/drinks/golden-hour.png"
                      alt="The Golden Hour"
                      fill
                      className="object-contain object-center drop-shadow-2xl relative z-10"
                      sizes="420px"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Copy */}
              <ScrollReveal className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-[rgba(250,247,242,0.2)] rounded-full px-5 py-2 mb-8">
                  <span className="text-[#FAF7F2] text-sm">&#9728;</span>
                  <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#FAF7F2]">
                    Limited Drop &nbsp;&#183;&nbsp; Summer 2026
                  </span>
                </div>
                <h2
                  className="font-display-italic text-[#FAF7F2] mb-4"
                  style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
                >
                  Warm, golden,<br />and made for right now.
                </h2>
                <p className="font-sans text-body-lg text-[rgba(250,247,242,0.8)] leading-relaxed mb-4">
                  {drink.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {drink.flavorTags.map((tag) => (
                    <span key={tag} className="rounded-pill px-4 py-1.5 font-sans text-label bg-[rgba(250,247,242,0.2)] text-[#FAF7F2]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-display-italic text-[rgba(250,247,242,0.7)] text-lg mb-8">
                  Spend your summer the right way. Dirty.
                </p>
                <Link href="/find" className="btn-ghost-inverse">
                  Pre-Order at Next Event
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* VIBE SELECTOR */}
      <VibeSelector sweetFruity={sweetFruity} boldCreamy={boldCreamy} classicClean={classicClean} />

      {/* SIGNATURES */}
      <section id="signatures" className="bg-white section-padding overflow-hidden">
        <ScrollReveal>
          <DrinkCarousel drinks={signatures} label="Signatures" priceRange="$6.00 – $6.50" />
        </ScrollReveal>
      </section>

      {/* TRENDING */}
      <section className="bg-[#FAF7F2] section-padding">
        <div className="container-default">
          <ScrollReveal>
            <p className="text-label text-coral mb-3">Trending This Week</p>
            <h2 className="font-display-italic text-display-md text-espresso mb-12">Hot at <span className="text-coral">Dirty</span> this week.</h2>
          </ScrollReveal>
          <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              signatures.find(d => d.id === 'pink-wave'),
              signatures.find(d => d.id === 'the-classic'),
              bombers.find(d => d.id === 'peach-pom'),
            ].filter(Boolean).map((drink) => drink && (
              <StaggerItem key={drink.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="relative bg-cream" style={{ aspectRatio: '1/1' }}>
                    <Image
                      src={'/images/drinks/' + drink.id + '.png'}
                      alt={drink.name}
                      fill
                      className="object-contain object-center p-6"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-sans text-xs font-semibold text-coral tracking-widest uppercase mb-2">
                      Hot at <span style={{color: '#E8523A'}}>Dirty</span> this week
                    </p>
                    <h3 className="font-display text-[1.5rem] text-espresso mb-1">{drink.name}</h3>
                    <p className="text-label text-sage mb-3">{drink.flavorTags.join(' · ')}</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{drink.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* BOMBERS */}
      <section className="bg-blush section-padding overflow-hidden">
        <ScrollReveal>
          <DrinkCarousel drinks={bombers} label="Bombers" priceRange="$7.00 – $7.50" />
        </ScrollReveal>
        <div className="container-default mt-6">
          <p className="font-sans text-body-md text-text-secondary max-w-[480px]">
            Red Bull base. A little extra energy, a lot more flavor.
          </p>
        </div>
      </section>

      {/* CRAFT YOUR OWN */}
      <section className="bg-cream section-padding">
        <div className="container-default">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-4">
              <h2 className="font-display text-display-sm text-espresso">Craft Your Own</h2>
              <div className="flex-1 h-px bg-blush-dark" />
              <p className="text-label text-text-secondary shrink-0">From $6.00</p>
            </div>
            <p className="font-sans text-body-md text-text-secondary mb-12 max-w-[480px]">
              Start with a base, pick your syrups, add a creamer. Creamer +$0.50 &nbsp;·&nbsp; Extra syrup +$0.50
            </p>
          </ScrollReveal>
          <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StaggerItem>
              <div className="bg-white rounded-xl p-7">
                <p className="text-label text-coral mb-5">Base</p>
                <ul className="font-sans text-body-md text-text-secondary space-y-2">
                  {['Coca-Cola','Diet Coca-Cola','Dr. Pepper','Diet Dr. Pepper','Fresca','Orange Fanta','Root Beer','Sprite','Red Bull'].map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-xl p-7">
                <p className="text-label text-coral mb-5">Syrups</p>
                <ul className="font-sans text-body-md text-text-secondary space-y-2">
                  {['Blue Raspberry','Cherry','Coconut','Lime','Mango','Peach','Pineapple','Pomegranate','Raspberry','Sour Candy','Strawberry','Sugar Free Vanilla','Vanilla','Watermelon'].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-xl p-7">
                <p className="text-label text-coral mb-5">Creamers</p>
                <ul className="font-sans text-body-md text-text-secondary space-y-3">
                  {['Sweet & Creamy','Coconut Cream','French Vanilla'].map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* SEASONAL SPECIALS */}
      <section className="bg-white section-padding-sm">
        <div className="container-default text-center">
          <ScrollReveal>
            <p className="text-label text-coral mb-4">Seasonal Specials</p>
            <h2 className="font-display-italic text-display-sm text-espresso mb-4">
              Something new is always coming.
            </h2>
            <p className="font-sans text-body-md text-text-secondary max-w-[480px] mx-auto mb-8">
              The Golden Hour is here for summer. Fall and holiday drops are already in the works — follow us so you hear it first.
            </p>
            <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="btn-coral">
              Follow @drinking.dirty
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* READY TO ORDER */}
      <section className="bg-blush section-padding-sm">
        <div className="container-default text-center">
          <ScrollReveal>
            <h2 className="font-display-italic text-display-sm text-espresso mb-6">Ready to order?</h2>
            <p className="font-sans text-body-md text-text-secondary mb-8">
              Come find us. Every drink is made to order, fresh, in person.
            </p>
            <Link href="/find" className="btn-coral">Find Us This Week</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* MARQUEE ANIMATION */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  )
}

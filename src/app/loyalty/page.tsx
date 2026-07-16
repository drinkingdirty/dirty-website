import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Loyalty Program | Dirty',
  description: 'Buy 8 Dirty drinks and your 9th is completely free. Pick up a loyalty card at any Dirty location.',
}

export default function LoyaltyPage() {
  return (
    <>
      {/* Hero with video background */}
      <section className="relative overflow-hidden" style={{ minHeight: '55vh' }}>
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/videos/loyalty-hero-01.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(44,26,18,0.35) 0%, rgba(44,26,18,0.70) 100%)',
            }}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-end px-5 pb-16 container-default text-center" style={{ minHeight: '55vh' }}>
          <ScrollReveal>
            <p className="text-label text-cream/75 mb-4">The Regulars Club</p>
            <h1 className="font-display-italic text-display-lg text-cream">Come back for more.</h1>
            <p className="mt-4 font-sans text-body-lg text-cream/90 max-w-[480px] mx-auto">
              The more you drink, the better it gets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Card Section */}
      <section className="bg-coral section-padding">
        <div className="container-default">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
            {/* Real loyalty card image */}
            <ScrollReveal>
              <div className="relative mx-auto max-w-[440px]">
                <div className="relative overflow-hidden rounded-2xl shadow-deep aspect-[3/2]">
                  <Image
                    src="/images/loyalty-card-01.jpg"
                    alt="Dirty Loyalty Card"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 440px"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={0.1}>
              <p className="text-label text-cream/70 mb-4">Buy 8, Get Your 9th Free</p>
              <h2 className="font-display-italic text-display-md text-cream mb-6">
                The world&apos;s easiest rewards program.
              </h2>
              <p className="font-sans text-body-lg text-cream/90 leading-relaxed mb-6">
                Every time you order a Dirty, ask for a punch on your loyalty card. Fill the card and your next drink is completely on us.
              </p>
              <p className="font-sans text-body-md text-cream/80">
                A card, a punch, and a free drink waiting.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream section-padding">
        <div className="container-default">
          <ScrollReveal>
            <h2 className="font-display-italic text-display-md text-espresso text-center mb-16">
              Three steps. That&apos;s it.
            </h2>
          </ScrollReveal>
          <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { number: '01', title: 'Get Your Card', desc: 'Pick up a free loyalty card at any Dirty location. Just ask when you order — no sign-up required.' },
              { number: '02', title: 'Collect Your Punches', desc: 'Every drink gets you one punch. Ask when you order each time.' },
              { number: '03', title: 'Drink 8 Is Free', desc: 'Fill the card and your next drink is completely on us. No catches, no expiry.' },
            ].map((step) => (
              <StaggerItem key={step.number}>
                <div className="bg-white rounded-xl p-8 text-center h-full">
                  <p className="font-display-italic text-[4rem] leading-none text-blush-dark mb-4">{step.number}</p>
                  <h3 className="font-display text-display-sm text-espresso mb-3">{step.title}</h3>
                  <p className="font-sans text-body-md text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Where to Get */}
      <section className="bg-blush section-padding-sm text-center">
        <div className="container-default max-w-[600px]">
          <ScrollReveal>
            <h2 className="font-display-italic text-display-sm text-espresso mb-4">
              Cards are free. Find us to grab yours.
            </h2>
            <p className="font-sans text-body-md text-text-secondary mb-8">
              Pick one up at any Dirty location — just ask when you order. Nothing to download, nothing to sign up for.
            </p>
            <Link href="/find" className="btn-coral">See This Week&apos;s Locations</Link>
          </ScrollReveal>
        </div>
      </section>

    </>
  )
}

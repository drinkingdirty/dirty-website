import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Our Story | Dirty',
  description: 'Meet Delainee and Madison — two Cal Poly students who turned a break room experiment into SLO\'s favorite dirty soda brand.',
}

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/story/founders-popup-01.jpg"
            alt="Delainee and Madison at a Dirty pop-up event"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,26,18,0.20) 0%, rgba(44,26,18,0.55) 100%)' }} />
        </div>
        <div className="relative z-10 flex min-h-[70vh] flex-col items-start justify-end px-5 pb-16 container-default">
          <ScrollReveal>
            <p className="text-label text-cream/75 mb-4">Our Story</p>
            <h1 className="font-display-italic text-display-lg text-cream max-w-[600px]">
              Built in SLO.<br />Served with intention.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="bg-cream section-padding-lg">
        <div className="container-default">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-[900px] text-center">
              <p className="font-display-italic text-display-md text-espresso leading-tight">
                &ldquo;We didn&apos;t open a store. We showed up where the people already were.&rdquo;
              </p>
              <footer className="mt-6 font-sans text-sm text-text-secondary">
                — Delainee &amp; Madison, Co-Founders of Dirty
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <p className="text-label text-sage mb-4">How It Started</p>
            <h2 className="font-display text-display-sm text-espresso mb-8">
              From a break room to SLO&apos;s favorite pop-up.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="font-sans text-body-lg text-text-secondary leading-relaxed space-y-5">
              <p>
                We&apos;ve pretty much done everything together — from growing up as dancers and showing dairy cattle against each other to becoming sorority sisters, roommates, and even interning at the same company.
              </p>
              <p>
                During our internship, we&apos;d make dirty sodas in the break room just for fun — never thinking it would spark something bigger. But on a summer drive home together from SLO, Madison had an idea: what if we actually started our own dirty soda business?
              </p>
              <p>
                From that moment on, we&apos;ve hit the ground running and never looked back. Now, we finally get to add business partners to our list of shared adventures.
              </p>
            </div>
          </ScrollReveal>

          {/* Together photo */}
          <ScrollReveal delay={0.15} className="mt-14">
            <div className="relative overflow-hidden rounded-2xl aspect-[16/9] w-full">
              <Image
                src="/images/story/founders-aprons-01.jpg"
                alt="Delainee Fernandes and Madison Andrade — Co-Founders of Dirty"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 760px"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="bg-blush section-padding">
        <div className="container-default">
          <ScrollReveal>
            <p className="text-label text-coral mb-4 text-center">Meet the Founders</p>
            <h2 className="font-display-italic text-display-md text-espresso text-center mb-16">
              The girls behind the drinks.
            </h2>
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Delainee */}
            <StaggerItem>
              <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/story/delainee-01.jpg"
                    alt="Delainee Fernandes — Co-Founder of Dirty"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-label text-coral mb-2">Co-Founder</p>
                  <h3 className="font-display text-display-sm text-espresso mb-4">Delainee Fernandes</h3>
                  <p className="font-sans text-body-md text-text-secondary leading-relaxed">
                    I am a 4th year Ag Business Major with a Minor in Accounting from Tulare, California. I grew up doing competitive dance and cheer, while staying active in FFA through dairy cattle showing and judging. At Cal Poly, I am the outgoing VP of Membership Recruitment in Alpha Omicron Pi. This journey has already taught me so much, and I can&apos;t wait to keep learning and sharing it with you all!
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Madison */}
            <StaggerItem>
              <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/story/madison-01.jpg"
                    alt="Madison Andrade — Co-Founder of Dirty"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-label text-coral mb-2">Co-Founder</p>
                  <h3 className="font-display text-display-sm text-espresso mb-4">Madison Andrade</h3>
                  <p className="font-sans text-body-md text-text-secondary leading-relaxed">
                    I am a third year Ag Business Major with a Minor in Entrepreneurship from Visalia, California. I grew up doing competitive dance and showing cattle in FFA, both of which have shaped me to be the person I am today. At Cal Poly I am Secretary of the ABM club as well as Director of Panhellenic Relations for Alpha Omicron Pi. Starting my own business has always been a dream of mine and I can&apos;t wait to share this journey with you all!
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* The Dirty Difference */}
      <section className="bg-cream section-padding">
        <div className="container-default">
          <ScrollReveal>
            <p className="text-label text-coral mb-4 text-center">What Sets Us Apart</p>
            <h2 className="font-display-italic text-display-md text-espresso text-center mb-16">
              Three things we never compromise on.
            </h2>
          </ScrollReveal>
          <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { number: '01', title: 'Made to Order', body: 'Every drink is made fresh when you order it. No pre-made batches, no shortcuts. Just the real thing, every time.' },
              { number: '02', title: 'Community First', body: 'We show up for SLO — at Thursday markets, campus events, ranch pop-ups, and the moments that matter most to this community.' },
              { number: '03', title: 'Every Drink, an Experience', body: 'From the first sip to the last, we want every Dirty drink to be worth talking about. The presentation, the flavor, the moment.' },
            ].map((item) => (
              <StaggerItem key={item.number}>
                <div className="text-center md:text-left">
                  <p className="font-display-italic text-[5rem] leading-none text-blush-dark mb-4">{item.number}</p>
                  <h3 className="font-display text-display-sm text-espresso mb-3">{item.title}</h3>
                  <p className="font-sans text-body-md text-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA Row */}
      <section className="bg-espresso section-padding-sm">
        <div className="container-default">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:divide-x md:divide-cream/10">
            <ScrollReveal className="text-center md:text-left md:pr-10">
              <h3 className="font-display-italic text-display-sm text-cream mb-6">See where we&apos;ll be this week.</h3>
              <Link href="/find" className="btn-ghost-inverse">Find Dirty</Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="text-center md:text-left md:pl-10">
              <h3 className="font-display-italic text-display-sm text-cream mb-6">Planning an event?</h3>
              <Link href="/events" className="btn-coral">Book an Event</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}

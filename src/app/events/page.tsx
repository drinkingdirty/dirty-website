import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'
import { testimonials } from '@/data/testimonials'
import BookingFormClient from '@/components/events/BookingFormClient'

export const metadata: Metadata = {
  title: 'Events & Catering | Dirty',
  description: 'Book Dirty for your next event. Sorority events, bachelorette parties, private pop-ups, and more. $7 per drink, 50 drink minimum.',
}

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/events/event-setup-01.jpg"
            alt="Dirty event setup"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,26,18,0.25) 0%, rgba(44,26,18,0.62) 100%)' }} />
        </div>
        <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-5 py-24 text-center">
          <ScrollReveal>
            <p className="text-label text-cream/75 mb-6 tracking-[0.20em]">Private Events · Sorority · Bachelorette · Pop-Ups</p>
            <h1 className="font-display-italic text-display-lg text-cream max-w-[700px] mx-auto">
              Get Dirty with us. Book today to host the event of the year.
            </h1>
            <p className="mt-6 font-sans text-body-lg text-cream/85 max-w-[480px] mx-auto leading-relaxed">
              We bring everything. You bring the people.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
              <a href="#booking" className="btn-coral">Book an Event</a>
              <a href="#pricing" className="btn-ghost-inverse">See Pricing</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-default">
          <ScrollReveal>
            <p className="text-label text-coral mb-4 text-center">We&apos;ve Done It All</p>
            <h2 className="font-display-italic text-display-md text-espresso text-center mb-16">What kind of event are you planning?</h2>
          </ScrollReveal>
          <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '◇', title: 'Bachelorette Parties', desc: 'The most instagrammable favor you can give your bride.' },
              { icon: '◈', title: 'Sorority Events', desc: 'From recruitment to formals — we make the drink table the destination.' },
              { icon: '○', title: 'Private Parties', desc: 'Birthday, milestone, celebration — we show up for all of it.' },
              { icon: '◻', title: 'Brand Pop-Ups', desc: 'Custom cups, signature flavors, a setup that turns heads.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <span className="font-display text-3xl text-espresso mb-4">{item.icon}</span>
                  <h3 className="font-display text-[1.5rem] text-espresso mb-3">{item.title}</h3>
                  <p className="font-sans text-body-md text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-default">
          <ScrollReveal>
            <p className="text-label text-sage mb-4">Past Events</p>
            <h2 className="font-display-italic text-display-md text-espresso mb-12">The Dirty experience, in full.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ScrollReveal className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image src="/images/events/event-setup-01.jpg" alt="Dirty event setup" fill className="object-cover hover:scale-[1.03] transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image src="/images/events/event-crowd-01.jpg" alt="Customers at a Dirty pop-up" fill className="object-cover hover:scale-[1.03] transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-blush section-padding">
        <div className="container-default">
          <ScrollReveal>
            <p className="text-label text-coral mb-4 text-center">The Process</p>
            <h2 className="font-display-italic text-display-md text-espresso text-center mb-16">Simple. Seamless. Dirty.</h2>
          </ScrollReveal>
          <StaggerGroup className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { number: '01', title: 'Reach Out', desc: 'Fill out our inquiry form with your event details. We\'ll respond within 48 hours.' },
              { number: '02', title: 'We Plan Together', desc: 'A 1-on-1 meeting to go over your date, menu, guest count, and all the details.' },
              { number: '03', title: 'We Show Up', desc: 'Day-of, we arrive fully set up and ready. You enjoy your event. We handle the drinks.' },
            ].map((step) => (
              <StaggerItem key={step.number}>
                <div className="text-center">
                  <p className="font-display-italic text-[5rem] leading-none text-blush-dark mb-4">{step.number}</p>
                  <h3 className="font-display text-display-sm text-espresso mb-3">{step.title}</h3>
                  <p className="font-sans text-body-md text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="pricing" className="bg-espresso section-padding">
        <div className="container-default">
          <ScrollReveal>
            <p className="text-label text-coral mb-4 text-center">Catering Pricing</p>
            <h2 className="font-display-italic text-display-md text-cream text-center mb-4">Transparent pricing. No surprises.</h2>
            <p className="font-sans text-body-md text-cream/70 text-center mb-16 max-w-[480px] mx-auto">All packages priced at $7 per drink. 50 drink minimum.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-[860px] mx-auto">
            <ScrollReveal>
              <div className="bg-cream/10 rounded-2xl p-8">
                <h3 className="font-display text-display-sm text-cream mb-6">Service Time</h3>
                <div className="space-y-4">
                  {[
                    { range: '50 – 150 drinks', time: '2 Hours' },
                    { range: '150 – 200 drinks', time: '3 Hours' },
                    { range: '200+ drinks', time: '4 Hours' },
                  ].map((row) => (
                    <div key={row.range} className="flex justify-between items-center border-b border-cream/10 pb-4">
                      <span className="font-sans text-cream/80">{row.range}</span>
                      <span className="font-sans font-medium text-cream">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-cream/10 rounded-2xl p-8">
                <h3 className="font-display text-display-sm text-cream mb-6">Add-Ons</h3>
                <div className="space-y-4">
                  {[
                    { item: 'Custom Menu', price: '$25' },
                    { item: 'Extra Service Time', price: '$50 / hour' },
                    { item: 'Travel (outside 25 mi)', price: 'Per event' },
                  ].map((row) => (
                    <div key={row.item} className="flex justify-between items-center border-b border-cream/10 pb-4">
                      <span className="font-sans text-cream/80">{row.item}</span>
                      <span className="font-sans font-medium text-cream">{row.price}</span>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-sm text-cream/50 mt-6">25% deposit due at booking. Refundable until 1 week before your event.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-default">
          <ScrollReveal>
            <p className="text-label text-sage mb-4 text-center">What They Said</p>
            <h2 className="font-display-italic text-display-md text-espresso text-center mb-16">From people who booked Dirty.</h2>
          </ScrollReveal>
          <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <div className="border-l-[3px] border-coral pl-8 pr-6 py-2">
                  <p className="font-display-italic text-[1.375rem] text-espresso leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-sans text-sm text-text-secondary">— {t.name}, {t.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="booking" className="bg-white section-padding">
        <div className="container-default max-w-[680px]">
          <ScrollReveal>
            <h2 className="font-display-italic text-display-md text-espresso mb-4">
              Let&apos;s talk Dirty.
            </h2>
            <p className="font-sans text-body-md text-text-secondary mb-12">
              Fill out the form and we&apos;ll be in touch within 48 hours. No commitment required to inquire.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <BookingFormClient />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

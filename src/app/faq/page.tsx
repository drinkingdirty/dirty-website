import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQAccordion from '@/components/ui/Accordion'

export const metadata: Metadata = {
  title: 'FAQ | Dirty',
  description: 'Answers to common questions about Dirty — finding us, booking events, the loyalty program, and our menu.',
}

const faqCategories = [
  {
    label: 'General',
    items: [
      { q: 'What is Dirty?', a: 'Handcrafted dirty sodas, made to order, found at farmers markets, campus events, and private bookings across San Luis Obispo. No storefront. Just really good soda.' },
      { q: 'Do you have a physical location?', a: 'No storefront — we come to you. Check the Find Dirty page for this week\'s schedule, or follow @drinking.dirty for same-day updates.' },
      { q: 'Do you offer online ordering or delivery?', a: 'Every drink is made to order, in person, fresh. Come find us — it\'s worth it.' },
      { q: 'What payment methods do you accept?', a: 'Cash, card, tap — we take it all.' },
    ],
  },
  {
    label: 'Finding Us',
    items: [
      { q: 'Where do you typically set up?', a: 'We regularly appear at the SLO Thursday Night Farmers Market on Higuera Street, SLO Ranch pop-ups, Cal Poly campus events, and various private and community pop-ups throughout San Luis Obispo.' },
      { q: 'How do I know where you\'ll be this week?', a: 'Our schedule is updated every Monday on the Find Dirty page. You can also follow @drinking.dirty on Instagram for same-day updates and surprise pop-ups.' },
      { q: 'Do you always do the Thursday Farmers Market?', a: 'Yes! The Thursday Night Farmers Market on Higuera Street is our regular weekly location, running 6–9 PM. Come find us there every Thursday.' },
      { q: 'How far in advance is your schedule posted?', a: 'Every Monday on the Find Dirty page. Follow us on Instagram for anything last-minute.' },
    ],
  },
  {
    label: 'Events & Bookings',
    items: [
      { q: 'How do I book Dirty for my event?', a: 'Fill out the inquiry form on our Events & Catering page. We\'ll respond within 48 hours to discuss your date, needs, and details. No commitment required to inquire.' },
      { q: 'How far in advance do I need to book?', a: 'We recommend at least 2 weeks for smaller events. For larger events or busy weekends, 4+ weeks ensures we can accommodate you.' },
      { q: 'How does pricing work?', a: 'All packages are priced at $7 per drink with a 50 drink minimum. Service time is based on quantity: 50–150 drinks = 2 hours, 150–200 = 3 hours, 200+ = 4 hours. Add-ons include custom menu ($25) and extra service time ($50/hour).' },
      { q: 'What is the deposit and payment process?', a: 'A 25% deposit is due on the day of scheduling. This deposit is refundable until one week before your event. The remaining balance is billed after the event.' },
      { q: 'What area do you serve for events?', a: 'We primarily serve San Luis Obispo County. Events outside a 25-mile radius may incur a travel fee, determined on a per-event basis.' },
      { q: 'What\'s included when we book?', a: 'Everything. Setup, breakdown, supplies, and every drink made fresh to order. You provide the space. We handle the rest.' },
      { q: 'Can you do custom flavors or branded cups?', a: 'Yes! A custom menu is available as an add-on for $25. Reach out and we\'ll build something tailored to your event.' },
    ],
  },
  {
    label: 'Loyalty Program',
    items: [
      { q: 'How does the loyalty program work?', a: 'Buy 8 drinks and your 9th is completely free. Each time you order, ask for a punch on your loyalty card. Fill the card, get a free drink.' },
      { q: 'Where do I get a loyalty card?', a: 'Pick one up at any Dirty location — just ask when you order. Cards are free and no sign-up is required.' },
      { q: 'Do you have a digital or app-based card?', a: 'Not at this time. Our loyalty cards are physical — pick one up next time you find us.' },
      { q: 'What if I lose my card?', a: 'We can\'t recover lost cards — grab a new one next time you find us and start fresh. Treat it like cash.' },
      { q: 'Can I use my card at any Dirty location?', a: 'Yes — your card is valid at any Dirty pop-up or event.' },
    ],
  },
  {
    label: 'The Menu',
    items: [
      { q: 'What makes it a "dirty soda"?', a: 'A base soda — Sprite, Dr. Pepper, Red Bull, whatever — mixed with syrups and a cream top. Simple concept. Endlessly customizable. Dangerously good.' },
      { q: 'Are drinks customizable?', a: 'Yes. Every drink is made to order so we can adjust anything — swap the base, change the syrups, skip the cream. Just tell us what you want.' },
      { q: 'What\'s the difference between Signatures and Bombers?', a: 'Signatures use a soda base (Dr. Pepper, Sprite, Coca-Cola, etc.). Bombers use a Red Bull base for an extra energy kick. Both are equally delicious.' },
      { q: 'Do you have seasonal drinks?', a: 'Yes — and they go fast. Right now it\'s The Golden Hour (Sprite, peach, mango, coconut cream). Follow @drinking.dirty so you don\'t miss the next one.' },
      { q: 'Do you have any non-dairy options?', a: 'Yes — you can order any drink without a creamer, or ask about our available options when you visit.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="relative">
      {/* Video background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/faq-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[rgba(250,247,242,0.82)]" aria-hidden="true" />
      </div>

      {/* Page content */}
      <div className="relative z-10">

      {/* Header */}
      <section className="bg-transparent pt-40 pb-16 text-center">
        <div className="container-default">
          <ScrollReveal>
            <p className="text-label text-sage mb-4">Good questions.</p>
            <h1 className="font-display-italic text-display-lg text-espresso">We&apos;ve heard them all.</h1>
            <p className="mt-6 font-sans text-body-lg text-text-secondary max-w-[480px] mx-auto">
              Find your answers below. If it&apos;s not here, reach out — we&apos;re easy to talk to.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-transparent section-padding">
        <div className="container-narrow">
          {faqCategories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 0.05} className="mb-14">
              <h2 className="font-display text-display-sm text-espresso mb-6 pb-4 border-b border-blush-dark">
                {cat.label}
              </h2>
              <FAQAccordion items={cat.items} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-transparent section-padding-sm text-center">
        <div className="container-default">
          <ScrollReveal>
            <h2 className="font-display-italic text-display-sm text-espresso mb-4">Still have questions?</h2>
            <p className="font-sans text-body-md text-text-secondary mb-8">We&apos;re real people. Reach out and we&apos;ll get back to you.</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
              <Link href="/contact" className="btn-ghost">Send a Message</Link>
              <Link href="/events" className="btn-coral">Book an Event</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </div>
    </div>
  )
}

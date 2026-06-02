import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function EventsCTA() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '80vh' }} aria-label="Events and Catering">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-drink-01.jpg"
          alt="Dirty at an event — the setup your guests won't stop talking about"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(44,26,18,0.35) 0%, rgba(44,26,18,0.60) 100%)' }}
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-5 py-24 text-center">
        <ScrollReveal distance={24}>
          <p className="text-label text-cream/75 mb-6 tracking-[0.20em]">
            Private Events · Sorority · Bachelorette · Pop-Ups
          </p>
          <h2 className="font-display-italic text-display-lg text-cream max-w-[700px] mx-auto">
            Bring Dirty to your next event.
          </h2>
          <p className="mt-6 font-sans text-body-lg text-cream/85 max-w-[480px] mx-auto leading-relaxed">
            We set up, serve every drink to order, and make your guests talk about it long after. You handle the fun — we handle the drinks.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <Link href="/events" className="btn-coral">Book an Event</Link>
            <Link href="/events" className="btn-ghost-inverse">See How It Works</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

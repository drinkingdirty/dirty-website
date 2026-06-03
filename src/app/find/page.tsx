import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'
import { getUpcomingEvents, eventTypeLabels } from '@/data/events'
import { preOrderConfig } from '@/data/preorder'
import FindPageClient from '@/components/find/FindPageClient'

export const metadata: Metadata = {
  title: 'Find Dirty | Dirty',
  description: 'Find Dirty at SLO Thursday Night Farmers Market, SLO Ranch pop-ups, and private events. Updated every week.',
}

function formatDate(dateStr: string): { weekday: string; month: string; day: string } {
  const date = new Date(dateStr + 'T12:00:00')
  return {
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
    month: date.toLocaleDateString('en-US', { month: 'long' }),
    day: date.getDate().toString(),
  }
}

export default function FindPage() {
  const events = getUpcomingEvents()

  const eventsWithPreOrder = events.map((e, index) => ({
    ...e,
    preOrderEnabled: index === 0 && (preOrderConfig[e.id] ?? true),
  }))

  return (
    <>
      <section className="bg-cream pt-40 pb-16">
        <div className="container-default text-center">
          <ScrollReveal>
            <p className="text-label text-coral mb-4">We Come to You</p>
            <h1 className="font-display-italic text-display-lg text-espresso">Find Dirty.</h1>
            <p className="mt-6 font-sans text-body-lg text-text-secondary max-w-[520px] mx-auto">
              No storefront. No drive-through. We show up where the good things happen — updated every week.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-default max-w-[860px]">
          <ScrollReveal>
            <h2 className="font-display text-display-sm text-espresso mb-2">Upcoming Locations</h2>
            <p className="font-sans text-body-md text-text-secondary mb-12">
              Schedule updated every Monday. Follow{' '}
              <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
                @drinking.dirty
              </a>{' '}
              for same-day updates and surprise pop-ups.
            </p>
          </ScrollReveal>

          {eventsWithPreOrder.length > 0 ? (
            <FindPageClient events={eventsWithPreOrder} />
          ) : (
            <div className="text-center py-20">
              <p className="font-display-italic text-display-sm text-text-secondary mb-4">
                Nothing public scheduled right now.
              </p>
              <p className="font-sans text-body-md text-text-secondary mb-8">
                Follow us on Instagram for last-minute pop-ups and surprise locations.
              </p>
              <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="btn-coral">
                Follow @drinking.dirty
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="bg-blush section-padding-sm">
        <div className="container-default">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <ScrollReveal>
              <h2 className="font-display-italic text-display-sm text-espresso">
                For same-day updates and surprise pop-ups...
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex flex-col gap-4">
              <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="font-display-italic text-display-sm text-coral">
                @drinking.dirty
              </a>
              <p className="font-sans text-body-md text-text-secondary">
                We post stories when we&apos;re live. Turn on notifications so you never miss us.
              </p>
              <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="btn-ghost w-fit">
                Follow on Instagram
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-cream section-padding-sm">
        <div className="container-default text-center max-w-[560px]">
          <ScrollReveal>
            <p className="text-label text-coral mb-4">Never Miss a Drop</p>
            <h2 className="font-display-italic text-display-sm text-espresso mb-4">
              Get Monday&apos;s location drop first.
            </h2>
            <p className="font-sans text-body-md text-text-secondary mb-8">
              Weekly schedule delivered to your inbox before it goes public.
            </p>
            <Link href="/" className="btn-coral">Sign Up for Location Drops</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

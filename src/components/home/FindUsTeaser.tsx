import Link from 'next/link'
import { getNextEvents, eventTypeLabels } from '@/data/events'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/ui/ScrollReveal'

function formatDate(dateStr: string): { weekday: string; month: string; day: string } {
  const date = new Date(dateStr + 'T12:00:00')
  return {
    weekday: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.getDate().toString(),
  }
}

export default function FindUsTeaser() {
  const upcomingEvents = getNextEvents(3)

  return (
    <section className="bg-blush section-padding" aria-label="Upcoming Locations">
      <div className="container-default">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="text-label text-coral mb-4">This Week</p>
            <h2 className="font-display-italic text-display-md text-espresso">We come to you.</h2>
            <p className="mt-4 font-sans text-body-md text-text-secondary max-w-[480px] mx-auto">
              No storefront. Just great locations. Follow{' '}
              <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
                @drinking.dirty
              </a>{' '}
              for same-day updates.
            </p>
          </div>
        </ScrollReveal>
        {upcomingEvents.length > 0 ? (
          <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => {
              const { weekday, month, day } = formatDate(event.date)
              return (
                <StaggerItem key={event.id}>
                  <div className="group flex flex-col bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-[280ms] ease-out-expo h-full">
                    <p className="text-label text-coral mb-4">
                      {event.isRecurring && event.recurringLabel ? event.recurringLabel : eventTypeLabels[event.type]}
                    </p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-display text-[3rem] leading-none text-espresso">{day}</span>
                      <div className="flex flex-col">
                        <span className="font-sans text-xs font-semibold text-text-secondary tracking-widest">{weekday}</span>
                        <span className="font-sans text-xs font-semibold text-text-secondary tracking-widest">{month}</span>
                      </div>
                    </div>
                    <h3 className="font-sans font-medium text-heading-sm text-espresso mt-2">{event.locationName}</h3>
                    <p className="font-sans text-sm text-text-secondary mt-1">{event.startTime} – {event.endTime}</p>
                    <div className="my-5 h-px bg-blush-dark" />
                    <a href={event.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-text-arrow mt-auto text-sm">
                      Get Directions
                    </a>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        ) : (
          <div className="text-center py-12">
            <p className="font-display-italic text-display-sm text-text-secondary">Nothing public scheduled right now.</p>
            <p className="mt-3 font-sans text-body-md text-text-secondary">
              Follow{' '}
              <a href="https://instagram.com/drinking.dirty" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">
                @drinking.dirty
              </a>{' '}
              for last-minute pop-ups.
            </p>
          </div>
        )}
        <ScrollReveal className="mt-12 flex justify-center">
          <Link href="/find" className="btn-ghost">See Full Schedule</Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

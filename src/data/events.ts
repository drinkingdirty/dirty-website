import type { DirtyEvent } from '@/types/events'

export const events: DirtyEvent[] = [
  {
    id: 'sean-hurley-private-jun-08',
    title: "Sean Hurley's Favorite Class",
    type: 'private',
    date: '2026-06-08',
    startTime: '1:00 PM',
    endTime: '4:00 PM',
    locationName: "Sean Hurley's Favorite Class",
    address: 'Cal Poly San Luis Obispo, San Luis Obispo, CA',
    googleMapsUrl: 'https://maps.google.com/?q=Cal+Poly+San+Luis+Obispo',
    isPublic: false,
    isRecurring: false,
  },
  {
    id: 'slo-farmers-market-thu-jun-04',
    title: 'SLO Thursday Night Farmers Market',
    type: 'farmers-market',
    date: '2026-06-04',
    startTime: '6:00 PM',
    endTime: '9:00 PM',
    locationName: 'Downtown SLO Farmers Market',
    address: 'Higuera Street, San Luis Obispo, CA 93401',
    googleMapsUrl: 'https://maps.google.com/?q=SLO+Thursday+Farmers+Market+Higuera+Street',
    isPublic: true,
    isRecurring: true,
    recurringLabel: 'Every Thursday',
  },
  {
    id: 'slo-farmers-market-thu-jun-11',
    title: 'SLO Thursday Night Farmers Market',
    type: 'farmers-market',
    date: '2026-06-11',
    startTime: '6:00 PM',
    endTime: '9:00 PM',
    locationName: 'Downtown SLO Farmers Market',
    address: 'Higuera Street, San Luis Obispo, CA 93401',
    googleMapsUrl: 'https://maps.google.com/?q=SLO+Thursday+Farmers+Market+Higuera+Street',
    isPublic: true,
    isRecurring: true,
    recurringLabel: 'Every Thursday',
  },
  {
    id: 'slo-farmers-market-thu-jun-18',
    title: 'SLO Thursday Night Farmers Market',
    type: 'farmers-market',
    date: '2026-06-18',
    startTime: '6:00 PM',
    endTime: '9:00 PM',
    locationName: 'Downtown SLO Farmers Market',
    address: 'Higuera Street, San Luis Obispo, CA 93401',
    googleMapsUrl: 'https://maps.google.com/?q=SLO+Thursday+Farmers+Market+Higuera+Street',
    isPublic: true,
    isRecurring: true,
    recurringLabel: 'Every Thursday',
  },
  {
    id: 'slo-farmers-market-thu-jun-25',
    title: 'SLO Thursday Night Farmers Market',
    type: 'farmers-market',
    date: '2026-06-25',
    startTime: '6:00 PM',
    endTime: '9:00 PM',
    locationName: 'Downtown SLO Farmers Market',
    address: 'Higuera Street, San Luis Obispo, CA 93401',
    googleMapsUrl: 'https://maps.google.com/?q=SLO+Thursday+Farmers+Market+Higuera+Street',
    isPublic: true,
    isRecurring: true,
    recurringLabel: 'Every Thursday',
  },
  {
    id: 'slo-farmers-market-thu-jul-02',
    title: 'SLO Thursday Night Farmers Market',
    type: 'farmers-market',
    date: '2026-07-02',
    startTime: '6:00 PM',
    endTime: '9:00 PM',
    locationName: 'Downtown SLO Farmers Market',
    address: 'Higuera Street, San Luis Obispo, CA 93401',
    googleMapsUrl: 'https://maps.google.com/?q=SLO+Thursday+Farmers+Market+Higuera+Street',
    isPublic: true,
    isRecurring: true,
    recurringLabel: 'Every Thursday',
  },
]

export function getUpcomingEvents(): DirtyEvent[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return events
    .filter((e) => e.isPublic && new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getNextEvents(n: number): DirtyEvent[] {
  return getUpcomingEvents().slice(0, n)
}

export function getEventsByType(type: DirtyEvent['type'] | 'all'): DirtyEvent[] {
  return type === 'all'
    ? getUpcomingEvents()
    : getUpcomingEvents().filter((e) => e.type === type)
}

export const eventTypeLabels: Record<DirtyEvent['type'], string> = {
  'farmers-market': 'Farmers Market',
  'slo-ranch': 'SLO Ranch',
  'cal-poly': 'Cal Poly',
  'pop-up': 'Pop-Up',
  'private': 'Private Event',
}

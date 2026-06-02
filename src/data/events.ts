import type { DirtyEvent } from '@/types/events'

export const events: DirtyEvent[] = [
  {
    id: 'slo-farmers-market-thu-jun-05',
    title: 'SLO Thursday Night Farmers Market',
    type: 'farmers-market',
    date: '2025-06-05',
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
    id: 'slo-farmers-market-thu-jun-12',
    title: 'SLO Thursday Night Farmers Market',
    type: 'farmers-market',
    date: '2025-06-12',
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
    id: 'slo-farmers-market-thu-jun-19',
    title: 'SLO Thursday Night Farmers Market',
    type: 'farmers-market',
    date: '2025-06-19',
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
    id: 'slo-farmers-market-thu-jun-26',
    title: 'SLO Thursday Night Farmers Market',
    type: 'farmers-market',
    date: '2025-06-26',
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
    id: 'slo-ranch-jun-05',
    title: 'SLO Ranch Pop-Up',
    type: 'slo-ranch',
    date: '2025-06-05',
    startTime: '10:00 AM',
    endTime: '3:00 PM',
    locationName: 'SLO Ranch',
    address: 'SLO Ranch, San Luis Obispo, CA',
    googleMapsUrl: 'https://maps.google.com/?q=SLO+Ranch+San+Luis+Obispo',
    isPublic: true,
    isRecurring: false,
  },
  {
    id: 'slo-ranch-jun-12',
    title: 'SLO Ranch Pop-Up',
    type: 'slo-ranch',
    date: '2025-06-12',
    startTime: '10:00 AM',
    endTime: '3:00 PM',
    locationName: 'SLO Ranch',
    address: 'SLO Ranch, San Luis Obispo, CA',
    googleMapsUrl: 'https://maps.google.com/?q=SLO+Ranch+San+Luis+Obispo',
    isPublic: true,
    isRecurring: false,
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

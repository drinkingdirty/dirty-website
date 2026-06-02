export type EventType =
  | 'farmers-market'
  | 'slo-ranch'
  | 'cal-poly'
  | 'pop-up'
  | 'private'

export interface DirtyEvent {
  id: string
  title: string
  type: EventType
  date: string
  startTime: string
  endTime: string
  locationName: string
  address: string
  googleMapsUrl: string
  isPublic: boolean
  isRecurring?: boolean
  recurringLabel?: string
}

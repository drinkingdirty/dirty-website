export type DrinkCategory = 'signature' | 'bomber' | 'seasonal'

export interface DrinkItem {
  id: string
  name: string
  category: DrinkCategory
  description: string
  flavorTags: string[]
  imagePath: string
  isFeatured: boolean
  isSeasonal: boolean
  isAvailable: boolean
  seasonalLabel?: string
}

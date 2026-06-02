import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes without conflicts.
 * Combines clsx (conditional classes) with tailwind-merge (conflict resolution).
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-coral', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

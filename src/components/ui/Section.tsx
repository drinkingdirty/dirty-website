import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean      // espresso background
  cream?: boolean     // cream/blush background
  id?: string
}

// Use this wrapper for every page section to enforce consistent
// vertical rhythm and horizontal padding.
export function Section({ children, className, dark, cream, id }: SectionProps) {
  const bg = dark ? 'bg-[#2C1A12]' : cream ? 'bg-[#FAF7F2]' : 'bg-white'

  return (
    <section
      id={id}
      className={cn(
        'px-6 py-16 md:py-24',
        bg,
        className
      )}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  )
}

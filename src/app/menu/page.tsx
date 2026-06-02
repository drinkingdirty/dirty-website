import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu | Dirty',
}

// This page will be fully built in subsequent phases.
// Placeholder keeps the route active and build passing.
export default function MenuPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <div className="text-center">
        <p className="font-display-italic text-display-md text-espresso">
          Coming soon.
        </p>
        <p className="mt-4 font-sans text-body-md text-text-secondary">
          This page is under construction.
        </p>
      </div>
    </div>
  )
}

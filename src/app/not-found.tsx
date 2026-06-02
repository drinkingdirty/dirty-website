import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Dirty',
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-5 text-center">
      {/* Large decorative number */}
      <p
        className="font-display-italic select-none text-[10rem] leading-none text-blush-dark"
        aria-hidden="true"
      >
        404
      </p>

      {/* Headline */}
      <h1 className="font-display-italic text-display-md text-espresso -mt-4">
        This page doesn&apos;t exist.
      </h1>

      {/* Brand-voice sub-text */}
      <p className="mt-4 max-w-[360px] font-sans text-body-md text-text-secondary leading-relaxed">
        But your next Dirty does.
        <br />
        Find us at an upcoming location.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
        <Link href="/find" className="btn-coral">
          Find Us This Week
        </Link>
        <Link href="/" className="btn-ghost">
          Go Home
        </Link>
      </div>
    </div>
  )
}

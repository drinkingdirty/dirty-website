import Link from 'next/link'

// ── Nav Groups ─────────────────────────────────────────────────────
const exploreLinks = [
  { label: 'Our Story',  href: '/story' },
  { label: 'The Menu',   href: '/menu' },
  { label: 'Find Dirty', href: '/find' },
  { label: 'Events & Catering', href: '/events' },
] as const

const connectLinks = [
  { label: 'Loyalty Program', href: '/loyalty' },
  { label: 'FAQ',             href: '/faq' },
  { label: 'Contact',         href: '/contact' },
  { label: '@dirtyslo on Instagram', href: 'https://instagram.com/dirtyslo', external: true },
] as const

// ── Component ──────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-espresso text-cream" role="contentinfo">
      <div className="container-default py-16">

        {/* ── Top Grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">

          {/* Col 1 — Brand */}
          <div className="md:col-span-1">
            <Link href="/" aria-label="Dirty — go to homepage">
              <span className="font-display-italic text-[2.5rem] leading-none text-coral">
                Dirty
              </span>
            </Link>

            <p className="mt-3 font-display-italic text-lg text-cream/60">
              Never Tasted This Good.
            </p>

            {/* Instagram */}
            <a
              href="https://instagram.com/dirtyslo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 font-sans text-sm text-cream/70 transition-colors hover:text-coral"
              aria-label="Follow Dirty on Instagram"
            >
              <InstagramIcon />
              <span>@dirtyslo</span>
            </a>

            {/* Location note */}
            <p className="mt-4 font-sans text-[0.75rem] text-cream/40">
              San Luis Obispo, California
            </p>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <p className="text-label text-cream/50 mb-5">Explore</p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[0.9375rem] text-cream/75 transition-colors duration-200 hover:text-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div>
            <p className="text-label text-cream/50 mb-5">Connect</p>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[0.9375rem] text-cream/75 transition-colors duration-200 hover:text-coral"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-sans text-[0.9375rem] text-cream/75 transition-colors duration-200 hover:text-coral"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Email Capture */}
          <div>
            <p className="text-label text-cream/50 mb-5">Stay in the Loop</p>
            <p className="font-sans text-sm text-cream/70 leading-relaxed mb-4">
              Get weekly location drops before they go public.
            </p>
            <FooterEmailForm />
          </div>
        </div>

        {/* ── Closing Tagline ──────────────────────────── */}
        <div className="mt-16 border-t border-cream/10 pt-10">
          <p className="font-display-italic text-center text-2xl text-cream/30">
            Dirty. Never Tasted This Good.
          </p>
        </div>

        {/* ── Bottom Bar ──────────────────────────────── */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="font-sans text-xs text-cream/35">
            © {currentYear} Dirty. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-sans text-xs text-cream/35 transition-colors hover:text-cream/60"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs text-cream/35 transition-colors hover:text-cream/60"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── Footer Email Form (Server Component — no JS needed for basic submit) ──
// Upgrade to react-hook-form client component when building email API route
function FooterEmailForm() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex overflow-hidden rounded-full border border-cream/20 bg-cream/8 focus-within:border-cream/40 transition-colors duration-200">
        <input
          type="email"
          name="email"
          placeholder="your email"
          autoComplete="email"
          required
          aria-label="Email address for location drops"
          className="
            flex-1 bg-transparent px-4 py-2.5
            font-sans text-sm text-cream placeholder:text-cream/35
            outline-none min-w-0
          "
        />
        <button
          type="submit"
          className="
            shrink-0 rounded-full bg-cream/10 px-4 py-2
            font-sans text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-cream
            transition-colors hover:bg-coral
          "
          aria-label="Subscribe to location drops"
        >
          Go
        </button>
      </div>
      <p className="font-sans text-[0.7rem] text-cream/30">
        Unsubscribe anytime.
      </p>
    </div>
  )
}

// ── Instagram Icon ─────────────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}

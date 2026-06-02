import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'

// ── Page Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Dirty — Premium Handcrafted Dirty Soda | San Luis Obispo, CA',
  description:
    'Handcrafted dirty sodas found at SLO\'s best farmers markets, Cal Poly events, sorority events, and private bookings. Dirty. Never Tasted This Good.',
  openGraph: {
    title: 'Dirty — Premium Handcrafted Dirty Soda | San Luis Obispo, CA',
    description:
      'Handcrafted dirty sodas found at SLO\'s best farmers markets and events. No storefront. Just really good soda.',
    url: '/',
  },
}

// ── Page ───────────────────────────────────────────────────────────
// Sections are added here as they are built in subsequent phases.
// Each section is a standalone component for clean separation of concerns.

export default function HomePage() {
  return (
    <>
      {/* Phase 1: Hero */}
      <HeroSection />

      {/*
        ── Upcoming Sections (Phase 2+) ──────────────────────────────
        Uncomment each as the component is built:

        <BrandStatement />
        <FeaturedDrinks />
        <FindUsTeaser />
        <EventsCTA />
        <LoyaltyStrip />
        <InstagramGrid />
        <EmailCapture />
      */}
    </>
  )
}

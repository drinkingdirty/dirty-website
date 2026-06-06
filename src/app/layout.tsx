import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import './globals.css'

// ── Fonts ──────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

// ── Site Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://drinkingdirtysoda.com'),

  title: {
    default: 'Dirty. — Never Tasted This Good',
    template: '%s | Dirty.',
  },

  description:
    'Handcrafted dirty sodas made fresh at pop-up events across San Luis Obispo. Signatures, Bombers, and Build Your Own starting at $6.',

  keywords: [
    'dirty soda',
    'San Luis Obispo',
    'SLO',
    'handcrafted soda',
    'farmers market',
    'Cal Poly',
    'event catering',
    'dirty soda SLO',
  ],

  authors: [{ name: 'Dirty' }],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dirty.',
    title: 'Dirty. — Never Tasted This Good',
    description:
      'Handcrafted dirty sodas made fresh at pop-up events across San Luis Obispo.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dirty. — Handcrafted Dirty Soda, San Luis Obispo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dirty. — Never Tasted This Good',
    description: 'Handcrafted dirty sodas. Found in the wild.',
    images: ['/images/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
// ── Root Layout ────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-cream text-espresso antialiased">
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-pill focus:bg-coral focus:px-6 focus:py-3 focus:text-cream focus:text-label"
        >
          Skip to content
        </a>

        <Navigation />

        <main id="main-content">
          {children}
        </main>

        <Footer />

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

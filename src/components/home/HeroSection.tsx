'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const textVariants = (delay: number) => ({
  hidden:  { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  },
})

const fadeVariants = (delay: number) => ({
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay } },
})

const imageVariants = {
  hidden:  { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen-safe min-h-[600px] w-full flex-col items-center justify-center overflow-hidden"
      aria-label="Dirty — Hero"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/hero/hero-events-01.jpg"
          alt="A handcrafted Dirty soda — condensation on glass, warm California light"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(44,26,18,0.30) 0%, rgba(44,26,18,0.55) 60%, rgba(44,26,18,0.68) 100%)',
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-5 text-center">

        {/* Category Label */}
        <motion.p
          className="text-label text-cream/80 mb-6 tracking-[0.20em] mt-16"
          variants={textVariants(0.18)}
          initial="hidden"
          animate="visible"
        >
          San Luis Obispo, CA
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="font-display-italic text-display-xl text-cream leading-[1.0] tracking-[-0.02em]"
          variants={textVariants(0.32)}
          initial="hidden"
          animate="visible"
        >
          <span className="block">Dirty.</span>
          <span className="block">Never Tasted</span>
          <span className="block">This Good.</span>
        </motion.h1>

        {/* CTA Row */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          variants={fadeVariants(0.52)}
          initial="hidden"
          animate="visible"
        >
          <Link href="/find" className="btn-ghost-inverse">
            Find Us This Week
          </Link>
          <span className="hidden h-1 w-1 rounded-full bg-cream/40 sm:block" aria-hidden="true" />
          <Link href="/events" className="btn-ghost-inverse">
            Book an Event
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────────────────
interface ScrollRevealProps {
  children:    React.ReactNode
  className?:  string
  /** Distance to travel upward on reveal (default: 28px) */
  distance?:   number
  /** Animation duration in seconds (default: 0.64) */
  duration?:   number
  /** Delay before animation starts in seconds (default: 0) */
  delay?:      number
  /** Fraction of element visible before triggering (default: 0.12) */
  threshold?:  number
  /** Only animate once, not on every enter/leave (default: true) */
  once?:       boolean
  /** Disable animation entirely (for prefers-reduced-motion or SSR) */
  disabled?:   boolean
}

// ── Animation Variants ─────────────────────────────────────────────
const createVariants = (distance: number, duration: number, delay: number) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1] as const, // --ease-out-expo
    },
  },
})

// ── Component ──────────────────────────────────────────────────────
export default function ScrollReveal({
  children,
  className,
  distance  = 28,
  duration  = 0.64,
  delay     = 0,
  threshold = 0.12,
  once      = true,
  disabled  = false,
}: ScrollRevealProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: threshold })

  // Skip animation if disabled (respects prefers-reduced-motion via CSS)
  if (disabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={createVariants(distance, duration, delay)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

// ── StaggerGroup ───────────────────────────────────────────────────
// Wraps multiple children and staggers their reveal animations.

interface StaggerGroupProps {
  children:        React.ReactNode
  className?:      string
  /** Delay between each child in seconds (default: 0.11) */
  staggerDelay?:   number
  /** Initial delay before first child animates (default: 0) */
  initialDelay?:   number
  distance?:       number
  duration?:       number
  threshold?:      number
  once?:           boolean
}

const createStaggerVariants = (
  distance: number,
  duration: number,
  staggerDelay: number,
  initialDelay: number
) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren:   initialDelay,
    },
  },
  item: {
    hidden:  { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  },
})

export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.11,
  initialDelay = 0,
  distance     = 28,
  duration     = 0.6,
  threshold    = 0.1,
  once         = true,
}: StaggerGroupProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: threshold })

  const groupVariants = createStaggerVariants(distance, duration, staggerDelay, initialDelay)

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={groupVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

// ── StaggerItem ────────────────────────────────────────────────────
// Must be a direct child of StaggerGroup.

interface StaggerItemProps {
  children:   React.ReactNode
  className?: string
  distance?:  number
  duration?:  number
}

export function StaggerItem({
  children,
  className,
  distance = 28,
  duration = 0.6,
}: StaggerItemProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden:  { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

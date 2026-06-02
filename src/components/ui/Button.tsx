import Link from 'next/link'
import { cn } from '@/lib/utils'

// ── Types ──────────────────────────────────────────────────────────
type ButtonVariant = 'coral' | 'ghost' | 'ghost-inverse' | 'text-arrow' | 'text-arrow-inverse'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?:   ButtonVariant
  size?:      ButtonSize
  fullWidth?: boolean
  className?: string
  children:   React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = ButtonBaseProps & {
  href:     string
  external?: boolean
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

type ButtonProps = ButtonAsButton | ButtonAsLink

// ── Style Maps ─────────────────────────────────────────────────────
const variantStyles: Record<ButtonVariant, string> = {
  'coral': cn(
    'inline-flex items-center justify-center gap-2',
    'rounded-pill bg-coral px-8 py-3.5',
    'font-sans text-label text-cream',
    'transition-all duration-200',
    'hover:bg-terracotta hover:scale-[1.02]',
    'active:scale-[0.98]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
  ),
  'ghost': cn(
    'inline-flex items-center justify-center gap-2',
    'rounded-pill border border-espresso px-8 py-3.5',
    'font-sans text-label text-espresso bg-transparent',
    'transition-all duration-200',
    'hover:bg-espresso hover:text-cream hover:scale-[1.02]',
    'active:scale-[0.98]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
  ),
  'ghost-inverse': cn(
    'inline-flex items-center justify-center gap-2',
    'rounded-pill border border-cream/60 px-8 py-3.5',
    'font-sans text-label text-cream bg-transparent',
    'transition-all duration-200',
    'hover:border-cream hover:bg-cream/15 hover:scale-[1.02]',
    'active:scale-[0.98]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
  ),
  'text-arrow':         'btn-text-arrow',
  'text-arrow-inverse': 'btn-text-arrow-inverse',
}

const sizeOverrides: Partial<Record<ButtonSize, Record<ButtonVariant, string>>> = {
  sm: {
    coral:          'px-5 py-2 text-[0.625rem]',
    ghost:          'px-5 py-2 text-[0.625rem]',
    'ghost-inverse':'px-5 py-2 text-[0.625rem]',
    'text-arrow':    'text-sm',
    'text-arrow-inverse': 'text-sm',
  },
  lg: {
    coral:          'px-10 py-4 text-xs',
    ghost:          'px-10 py-4 text-xs',
    'ghost-inverse':'px-10 py-4 text-xs',
    'text-arrow':    'text-lg',
    'text-arrow-inverse': 'text-lg',
  },
}

// ── Component ──────────────────────────────────────────────────────
export default function Button(props: ButtonProps) {
  const {
    variant   = 'coral',
    size      = 'md',
    fullWidth = false,
    className,
    children,
  } = props

  const baseClass = cn(
    variantStyles[variant],
    size !== 'md' && sizeOverrides[size]?.[variant],
    fullWidth && 'w-full',
    className
  )

  // Render as Next.js Link
  if ('href' in props && props.href !== undefined) {
    const { href, external, ...rest } = props
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    )
  }

  // Render as <button>
  const { ...rest } = props as ButtonAsButton
  return (
    <button className={baseClass} {...rest}>
      {children}
    </button>
  )
}

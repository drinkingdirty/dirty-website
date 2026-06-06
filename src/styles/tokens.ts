// Dirty Design System Tokens
// Reference these instead of hardcoding values in components

export const colors = {
  espresso: '#2C1A12',
  coral:    '#E8523A',
  cream:    '#FAF7F2',
  blush:    '#F5E6DF',
  sage:     '#A8916A',
  // Text
  textPrimary:   '#2C1A12',
  textSecondary: '#6B5248',
  textMuted:     '#A8916A',
} as const

export const fontFamily = {
  serif:      'Georgia, serif',
  sansSerif:  'Arial, Helvetica, sans-serif',
} as const

export const borderRadius = {
  sm:   '8px',
  md:   '12px',
  lg:   '16px',
  full: '9999px',
} as const

export const spacing = {
  sectionY:  '80px',  // vertical padding for page sections
  cardPad:   '32px',  // internal card padding
  containerX: '24px', // horizontal page margin on mobile
} as const

// Button variants — use only these two
export const buttonStyles = {
  primary: {
    background: colors.coral,
    color: colors.cream,
    borderRadius: borderRadius.full,
  },
  secondary: {
    background: 'transparent',
    color: colors.espresso,
    border: `1.5px solid ${colors.espresso}`,
    borderRadius: borderRadius.full,
  },
} as const

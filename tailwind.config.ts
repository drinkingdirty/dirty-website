import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand Primary ──────────────────────────────
        coral:        '#E8523A',
        terracotta:   '#C9412A',
        cream:        '#FAF7F2',
        blush:        '#F5E6DF',
        'blush-dark': '#EDDDD3',
        espresso:     '#2C1A12',

        // ── Brand Secondary ────────────────────────────
        sage:  '#A8B89A',
        gold:  '#D4A853',
        white: '#FFFFFF',

        // ── Text Shades ────────────────────────────────
        'text-primary':   '#2C1A12',
        'text-secondary': '#7A5C50',
        'text-tertiary':  '#B09080',
        'text-inverse':   '#FAF7F2',
      },

      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },

      fontSize: {
        // Display scale — used for hero, section openers
        'display-xl': ['clamp(4.5rem,11vw,8rem)',   { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem,7vw,5.25rem)',    { lineHeight: '1.00', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2.25rem,5vw,3.5rem)',  { lineHeight: '1.10', letterSpacing: '-0.005em' }],
        'display-sm': ['clamp(1.75rem,4vw,2.5rem)',  { lineHeight: '1.15' }],

        // UI scale
        'heading-lg': ['1.375rem', { lineHeight: '1.3',  letterSpacing: '-0.01em' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.4' }],
        'body-lg':    ['1.125rem', { lineHeight: '1.7' }],
        'body-md':    ['1rem',     { lineHeight: '1.65' }],
        'label':      ['0.6875rem',{ lineHeight: '1.5',  letterSpacing: '0.16em' }],
        'caption':    ['0.8125rem',{ lineHeight: '1.5' }],
      },

      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },

      maxWidth: {
        'narrow':    '760px',
        'content':   '1280px',
        'statement': '820px',
        'form':      '680px',
      },

      borderRadius: {
        'pill': '100px',
      },

      boxShadow: {
        'card':       '0 2px 20px rgba(44, 26, 18, 0.07)',
        'card-hover': '0 10px 40px rgba(44, 26, 18, 0.13)',
        'card-lift':  '0 12px 48px rgba(44, 26, 18, 0.12)',
        'deep':       '0 20px 60px rgba(0, 0, 0, 0.28)',
      },

      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring':   'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      backgroundImage: {
        'overlay-hero':   'linear-gradient(to bottom, rgba(44,26,18,0.20) 0%, rgba(44,26,18,0.50) 100%)',
        'overlay-events': 'linear-gradient(to bottom, rgba(44,26,18,0.25) 0%, rgba(44,26,18,0.55) 100%)',
        'overlay-subtle': 'linear-gradient(to right, rgba(44,26,18,0.08) 0%, transparent 60%)',
      },

      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'fade-in':      'fadeIn 0.6s ease-out forwards',
      },

      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(0.5) translateY(-4px)' },
          '50%':       { opacity: '0.9', transform: 'scaleY(1) translateY(4px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config

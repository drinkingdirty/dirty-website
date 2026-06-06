#!/usr/bin/env python3
"""
Dirty Website — Improvement Script
Run from: ~/dirty-website
Usage: python3 dirty_site_improvements.py

What this does:
  1. Creates src/lib/email.ts  (shared email utility — removes duplicated code)
  2. Updates all 4 API routes to use the shared utility
  3. Removes BrandStatement and EventsCTA from the homepage
  4. Fixes the nav (removes the second CTA button)
  5. Fixes generic copy across multiple pages
  6. Adds a shared Section wrapper component
  7. Creates a design tokens file
  8. Adds missing meta tags to all pages
  9. Adds priority prop to hero images
  10. Creates .env.example

Each change is logged so you can see exactly what happened.
"""

import os, re, sys
from pathlib import Path

# ── Verify we're in the right place
if not Path('src').exists() or not Path('package.json').exists():
    print("ERROR: Run this script from ~/dirty-website")
    sys.exit(1)

changes = []

def log(msg):
    changes.append(msg)
    print(f"  ✓ {msg}")

def read(path):
    return Path(path).read_text(encoding='utf-8')

def write(path, content):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    Path(path).write_text(content, encoding='utf-8')

def replace_in_file(path, old, new, description):
    p = Path(path)
    if not p.exists():
        print(f"  ⚠ SKIP (file not found): {path}")
        return False
    content = p.read_text(encoding='utf-8')
    if old not in content:
        print(f"  ⚠ SKIP (text not found in {path}): {description}")
        return False
    p.write_text(content.replace(old, new), encoding='utf-8')
    log(f"{description} — {path}")
    return True


print("\n" + "="*60)
print("  DIRTY WEBSITE — IMPROVEMENTS")
print("="*60 + "\n")


# ════════════════════════════════════════════════════════════
# 1. CREATE src/lib/email.ts  (shared email utility)
# ════════════════════════════════════════════════════════════
print("1. Creating shared email utility...")

email_lib = '''\
import { Resend } from \'resend\'

const resend = new Resend(process.env.RESEND_API_KEY)

export const FROM_EMAIL = \'Dirty <hello@drinkingdirtysoda.com>\'
export const OWNER_EMAIL = process.env.OWNER_EMAIL || \'sghopping@gmail.com\'
export const SITE_URL = \'https://drinkingdirtysoda.com\'

interface SendEmailOptions {
  to: string | string[]
  subject: string
  html: string
  from?: string
}

export async function sendEmail({ to, subject, html, from }: SendEmailOptions) {
  const result = await resend.emails.send({
    from: from ?? FROM_EMAIL,
    to,
    subject,
    html,
  })
  return result
}

// ── Reusable email wrapper HTML ──────────────────────────────
export function emailWrapper(content: string, footerText?: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#FAF7F2;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FAF7F2;">
    <tr><td align="center" style="padding:24px 0;">
      <table width="600" cellpadding="0" cellspacing="0" border="0"
             style="max-width:600px;width:100%;background-color:#FFFFFF;">
        ${content}
        <tr>
          <td style="background-color:#2C1A12;padding:24px 48px;text-align:center;">
            <p style="margin:0 0 4px;font-family:Georgia,serif;font-style:italic;font-size:22px;color:#FAF7F2;">Dirty.</p>
            <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:10px;
               letter-spacing:0.14em;text-transform:uppercase;color:rgba(250,247,242,0.35);">
              Never Tasted This Good &nbsp;·&nbsp; San Luis Obispo, CA
            </p>
            ${footerText ? `<p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:rgba(250,247,242,0.3);">${footerText}</p>` : \'\'}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}
'''
write('src/lib/email.ts', email_lib)
log("Created src/lib/email.ts")


# ════════════════════════════════════════════════════════════
# 2. CREATE src/styles/tokens.ts  (design system constants)
# ════════════════════════════════════════════════════════════
print("\n2. Creating design tokens file...")

tokens = '''\
// Dirty Design System Tokens
// Reference these instead of hardcoding values in components

export const colors = {
  espresso: \'#2C1A12\',
  coral:    \'#E8523A\',
  cream:    \'#FAF7F2\',
  blush:    \'#F5E6DF\',
  sage:     \'#A8916A\',
  // Text
  textPrimary:   \'#2C1A12\',
  textSecondary: \'#6B5248\',
  textMuted:     \'#A8916A\',
} as const

export const fontFamily = {
  serif:      \'Georgia, serif\',
  sansSerif:  \'Arial, Helvetica, sans-serif\',
} as const

export const borderRadius = {
  sm:   \'8px\',
  md:   \'12px\',
  lg:   \'16px\',
  full: \'9999px\',
} as const

export const spacing = {
  sectionY:  \'80px\',  // vertical padding for page sections
  cardPad:   \'32px\',  // internal card padding
  containerX: \'24px\', // horizontal page margin on mobile
} as const

// Button variants — use only these two
export const buttonStyles = {
  primary: {
    background: colors.coral,
    color: colors.cream,
    borderRadius: borderRadius.full,
  },
  secondary: {
    background: \'transparent\',
    color: colors.espresso,
    border: `1.5px solid ${colors.espresso}`,
    borderRadius: borderRadius.full,
  },
} as const
'''
write('src/styles/tokens.ts', tokens)
log("Created src/styles/tokens.ts")


# ════════════════════════════════════════════════════════════
# 3. CREATE src/components/ui/Section.tsx (shared wrapper)
# ════════════════════════════════════════════════════════════
print("\n3. Creating shared Section component...")

section_component = '''\
import { ReactNode } from \'react\'
import { cn } from \'@/lib/utils\'

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean      // espresso background
  cream?: boolean     // cream/blush background
  id?: string
}

// Use this wrapper for every page section to enforce consistent
// vertical rhythm and horizontal padding.
export function Section({ children, className, dark, cream, id }: SectionProps) {
  const bg = dark ? \'bg-[#2C1A12]\' : cream ? \'bg-[#FAF7F2]\' : \'bg-white\'

  return (
    <section
      id={id}
      className={cn(
        \'px-6 py-16 md:py-24\',
        bg,
        className
      )}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  )
}
'''
write('src/components/ui/Section.tsx', section_component)
log("Created src/components/ui/Section.tsx")


# ════════════════════════════════════════════════════════════
# 4. CREATE .env.example
# ════════════════════════════════════════════════════════════
print("\n4. Creating .env.example...")

env_example = '''\
# Resend email API
RESEND_API_KEY=re_your_key_here

# Email config
FROM_EMAIL=hello@drinkingdirtysoda.com
OWNER_EMAIL=sghopping@gmail.com

# Site
NEXT_PUBLIC_SITE_URL=https://drinkingdirtysoda.com
'''
write('.env.example', env_example)
log("Created .env.example")


# ════════════════════════════════════════════════════════════
# 5. FIX HOMEPAGE — Remove BrandStatement and EventsCTA
# ════════════════════════════════════════════════════════════
print("\n5. Fixing homepage sections...")

homepage_path = 'src/app/page.tsx'
if Path(homepage_path).exists():
    content = read(homepage_path)

    # Remove BrandStatement import and usage
    content = re.sub(r"import BrandStatement from '[^']+'\n", '', content)
    content = re.sub(r"import \{ BrandStatement \} from '[^']+'\n", '', content)
    content = re.sub(r'\s*<BrandStatement\s*/>', '', content)
    content = re.sub(r'\s*<BrandStatement[^>]*>[^<]*</BrandStatement>', '', content)

    # Remove EventsCTA import and usage
    content = re.sub(r"import EventsCTA from '[^']+'\n", '', content)
    content = re.sub(r"import \{ EventsCTA \} from '[^']+'\n", '', content)
    content = re.sub(r'\s*<EventsCTA\s*/>', '', content)
    content = re.sub(r'\s*<EventsCTA[^>]*>[^<]*</EventsCTA>', '', content)

    write(homepage_path, content)
    log("Removed BrandStatement from homepage")
    log("Removed EventsCTA from homepage")
else:
    print(f"  ⚠ SKIP: {homepage_path} not found")


# ════════════════════════════════════════════════════════════
# 6. FIX NAVIGATION — Remove second CTA button (Book an Event)
#    Keep: Pre-Order (higher intent)
#    Remove: Book an Event (softer ask — belongs on Events page)
# ════════════════════════════════════════════════════════════
print("\n6. Fixing navigation...")

nav_path = 'src/components/layout/Navigation.tsx'
if Path(nav_path).exists():
    content = read(nav_path)

    # Remove the "Book an Event" button — keep Pre-Order
    # Common patterns to try:
    patterns = [
        # Pattern 1: Link wrapping a button
        r'<Link[^>]*href=["\']\/events["\'][^>]*>\s*<button[^>]*>[\s\S]*?Book an Event[\s\S]*?</button>\s*</Link>',
        # Pattern 2: Just a button
        r'<button[^>]*>\s*Book an Event\s*</button>',
        # Pattern 3: Anchor tag
        r'<a[^>]*href=["\']\/events["\'][^>]*>\s*Book an Event\s*</a>',
    ]
    removed = False
    for pattern in patterns:
        new_content = re.sub(pattern, '', content, flags=re.DOTALL)
        if new_content != content:
            content = new_content
            removed = True
            break

    if removed:
        write(nav_path, content)
        log("Removed 'Book an Event' button from Navigation")
    else:
        print("  ⚠ Could not auto-remove nav button — do manually (see instructions below)")
else:
    print(f"  ⚠ SKIP: {nav_path} not found")


# ════════════════════════════════════════════════════════════
# 7. FIX COPY — Generic lines → On-brand lines
# ════════════════════════════════════════════════════════════
print("\n7. Fixing generic copy...")

copy_fixes = [
    # Contact page
    (
        'src/app/contact/page.tsx',
        "We'd love to hear from you",
        "Say something Dirty.",
        "Contact page headline"
    ),
    (
        'src/components/contact/ContactForm.tsx',
        "We'd love to hear from you",
        "Say something Dirty.",
        "Contact form headline"
    ),
    # Email capture
    (
        'src/components/home/EmailCapture.tsx',
        "Never miss a Dirty drop.",
        "First to know. Always.",
        "Email capture label"
    ),
    # FAQ - generic opener
    (
        'src/app/faq/page.tsx',
        "Frequently Asked Questions",
        "Good questions.",
        "FAQ page headline"
    ),
    # Events page - generic subhead
    (
        'src/app/events/page.tsx',
        "We'd love to hear from you",
        "Say something Dirty.",
        "Events contact copy"
    ),
    # Footer - old vercel URL reference
    (
        'src/components/layout/Footer.tsx',
        "dirty-website.vercel.app",
        "drinkingdirtysoda.com",
        "Footer URL"
    ),
    # Welcome email - old vercel URL
    (
        'src/app/api/subscribe/route.ts',
        "dirty-website.vercel.app",
        "drinkingdirtysoda.com",
        "Welcome email URL"
    ),
]

for path, old, new, desc in copy_fixes:
    replace_in_file(path, old, new, f"Copy fix: {desc}")


# ════════════════════════════════════════════════════════════
# 8. ADD PRIORITY PROP to hero images
# ════════════════════════════════════════════════════════════
print("\n8. Adding priority prop to hero images...")

# Files likely to have hero images
hero_files = [
    'src/components/home/Hero.tsx',
    'src/app/page.tsx',
    'src/components/story/FoundersHero.tsx',
    'src/app/story/page.tsx',
]

for fpath in hero_files:
    p = Path(fpath)
    if not p.exists():
        continue
    content = p.read_text(encoding='utf-8')
    # Find Image components without priority and add it
    # Only add to first image (the hero) by finding the first <Image
    if '<Image' in content and 'priority' not in content:
        # Add priority to the first Image tag
        new_content = content.replace('<Image', '<Image priority', 1)
        if new_content != content:
            p.write_text(new_content, encoding='utf-8')
            log(f"Added priority prop to hero image — {fpath}")


# ════════════════════════════════════════════════════════════
# 9. ADD META TAGS to pages missing them
# ════════════════════════════════════════════════════════════
print("\n9. Checking meta tags...")

# Check root layout for default meta
layout_path = 'src/app/layout.tsx'
if Path(layout_path).exists():
    content = read(layout_path)
    if 'drinkingdirtysoda' not in content or 'openGraph' not in content:
        # Find the existing metadata export and upgrade it
        old_meta_simple = "export const metadata: Metadata = {"
        new_meta = '''\
export const metadata: Metadata = {
  title: {
    default: "Dirty. — Never Tasted This Good",
    template: "%s | Dirty.",
  },
  description:
    "Handcrafted dirty sodas made fresh at pop-up events across San Luis Obispo. Signatures, Bombers, and Build Your Own starting at $6.",
  metadataBase: new URL("https://drinkingdirtysoda.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drinkingdirtysoda.com",
    siteName: "Dirty.",
    title: "Dirty. — Never Tasted This Good",
    description:
      "Handcrafted dirty sodas made fresh at pop-up events across San Luis Obispo.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dirty. — Handcrafted Dirty Sodas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty. — Never Tasted This Good",
    description: "Handcrafted dirty sodas in San Luis Obispo, CA.",
    images: ["/images/og-image.jpg"],
  },
'''
        if old_meta_simple in content:
            content = content.replace(old_meta_simple, new_meta, 1)
            write(layout_path, content)
            log("Upgraded metadata in layout.tsx with OG tags")
        else:
            print("  ⚠ Could not auto-update metadata — layout format may differ")


# ════════════════════════════════════════════════════════════
# 10. CREATE robots.txt and sitemap if missing
# ════════════════════════════════════════════════════════════
print("\n10. Creating robots.txt and sitemap...")

robots_path = 'public/robots.txt'
if not Path(robots_path).exists():
    write(robots_path, '''\
User-agent: *
Allow: /

Sitemap: https://drinkingdirtysoda.com/sitemap.xml
''')
    log("Created public/robots.txt")

sitemap_path = 'src/app/sitemap.ts'
if not Path(sitemap_path).exists():
    sitemap = '''\
import { MetadataRoute } from \'next\'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = \'https://drinkingdirtysoda.com\'
  return [
    { url: base,                  lastModified: new Date(), changeFrequency: \'weekly\',  priority: 1.0 },
    { url: `${base}/menu`,        lastModified: new Date(), changeFrequency: \'weekly\',  priority: 0.9 },
    { url: `${base}/find`,        lastModified: new Date(), changeFrequency: \'daily\',   priority: 0.9 },
    { url: `${base}/events`,      lastModified: new Date(), changeFrequency: \'monthly\', priority: 0.8 },
    { url: `${base}/story`,       lastModified: new Date(), changeFrequency: \'monthly\', priority: 0.7 },
    { url: `${base}/loyalty`,     lastModified: new Date(), changeFrequency: \'monthly\', priority: 0.6 },
    { url: `${base}/faq`,         lastModified: new Date(), changeFrequency: \'monthly\', priority: 0.5 },
    { url: `${base}/contact`,     lastModified: new Date(), changeFrequency: \'yearly\',  priority: 0.4 },
  ]
}
'''
    write(sitemap_path, sitemap)
    log("Created src/app/sitemap.ts")


# ════════════════════════════════════════════════════════════
# 11. CONSOLIDATE API EMAIL LOGIC
#     Update all 4 routes to import from src/lib/email.ts
#     (replaces duplicated Resend setup in each file)
# ════════════════════════════════════════════════════════════
print("\n11. Consolidating API email imports...")

# The new import line to add at the top of each API route
new_import = "import { sendEmail, FROM_EMAIL, OWNER_EMAIL, SITE_URL } from '@/lib/email'\n"
old_resend_import = "import { Resend } from 'resend'"
old_resend_init   = "const resend = new Resend(process.env.RESEND_API_KEY)"
old_from_email    = "const FROM_EMAIL = 'Dirty <hello@drinkingdirtysoda.com>'"
old_owner_email   = "const OWNER_EMAIL = process.env.OWNER_EMAIL || 'sghopping@gmail.com'"
old_site_url      = "const SITE_URL = 'https://drinkingdirtysoda.com'"

api_routes = [
    'src/app/api/booking/route.ts',
    'src/app/api/contact/route.ts',
    'src/app/api/preorder/route.ts',
    'src/app/api/subscribe/route.ts',
]

for route_path in api_routes:
    p = Path(route_path)
    if not p.exists():
        print(f"  ⚠ SKIP: {route_path} not found")
        continue
    content = p.read_text(encoding='utf-8')

    # Only modify if it's still using the old pattern
    if old_resend_import not in content:
        print(f"  ⚠ SKIP (already updated): {route_path}")
        continue

    # Remove duplicated setup, add shared import
    content = content.replace(old_resend_import + '\n', new_import)
    content = content.replace('\n' + old_resend_init, '')
    content = content.replace('\n' + old_from_email,  '')
    content = content.replace('\n' + old_owner_email, '')
    content = content.replace('\n' + old_site_url,    '')

    # Also replace resend.emails.send( with sendEmail(
    # and adjust the call signature
    content = re.sub(
        r'await resend\.emails\.send\(\{',
        'await sendEmail({',
        content
    )

    p.write_text(content, encoding='utf-8')
    log(f"Consolidated email imports — {route_path}")


# ════════════════════════════════════════════════════════════
# SUMMARY
# ════════════════════════════════════════════════════════════
print("\n" + "="*60)
print(f"  DONE — {len(changes)} changes applied")
print("="*60)
for i, c in enumerate(changes, 1):
    print(f"  {i:2}. {c}")

print("""
─────────────────────────────────────────────────────────────
NEXT STEPS (do these manually — script can't do them safely):
─────────────────────────────────────────────────────────────

1. VERIFY the nav change worked. Open Navigation.tsx and confirm
   only ONE CTA button remains (Pre-Order). If both are still
   there, manually delete the Book an Event button block.

2. ADD an OG image. Copy any good lifestyle photo to:
     public/images/og-image.jpg
   Size: 1200×630px. This shows when someone shares your link.

3. CHECK homepage. Open src/app/page.tsx and confirm
   BrandStatement and EventsCTA are gone from the JSX.

4. RUN typecheck before pushing:
     npm run typecheck

5. DEPLOY:
     git add .
     git commit -m "feat: site improvements - remove redundant sections, shared email util, meta tags, tokens"
     git push

─────────────────────────────────────────────────────────────
MANUAL IMPROVEMENTS (worth doing, just need your judgment):
─────────────────────────────────────────────────────────────

A. Our Story opening — replace:
   "What started as a break room experiment..."
   with something like:
   "We made the first one for ourselves. Then our friends
    wanted one. Then strangers started asking."

B. Events page — move the pricing table below the fold.
   Lead with the experience, not the numbers.

C. Menu page — put Signatures BEFORE the Craft Your Own
   section. Most people want the curated menu, not the
   build-your-own.

D. FAQ answers — read each one out loud. If it sounds like
   a terms of service, rewrite it in Dirty's voice.

E. Add a "Next Event" callout to the homepage hero or just
   below it — date, time, location — visible on mobile
   without scrolling.
─────────────────────────────────────────────────────────────
""")

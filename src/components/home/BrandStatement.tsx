import ScrollReveal from '@/components/ui/ScrollReveal'

export default function BrandStatement() {
  return (
    <section className="bg-cream section-padding-lg" aria-label="About Dirty">
      <div className="container-default">
        <div className="mx-auto max-w-[860px] text-center">
          <ScrollReveal>
            <p className="text-label text-sage mb-6">Est. 2025 · San Luis Obispo, CA</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display-italic text-display-lg text-espresso">
              Not your average soda stand.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 font-sans text-body-lg text-text-secondary leading-relaxed max-w-[640px] mx-auto">
              What started as a break room experiment turned into something we couldn&apos;t stop thinking about.
              Now we bring handcrafted dirty sodas to Thursday night markets, SLO Ranch pop-ups, sorority events,
              and everything in between.
            </p>
            <p className="mt-4 font-sans text-body-lg text-text-secondary leading-relaxed">
              Every drink is made to order. Come find us.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

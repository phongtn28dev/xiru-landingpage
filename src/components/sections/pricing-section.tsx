/* Pricing section — 3-tier grid with POPULAR highlight and gold border */


import { Check, Minus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { PRICING_TIERS, SITE_CONFIG } from '@/lib/constants';

export function PricingSection() {
  return (
    <section
      aria-label="Pricing"
      className="px-6 py-[128px]"
      style={{ background: 'linear-gradient(180deg, #19150D 0%, #19150D 55%, #19150D 100%)' }}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionHeading
            tag="Pricing"
            title="Transparent, simple"
            goldWord="simple"
            subtitle="No hidden fees. No surprises. Start free and scale when you're ready."
          />
        </ScrollReveal>

        <div id="pricing" className="mt-16 grid gap-6 md:grid-cols-3 scroll-mt-24">
          {PRICING_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.12}>
              <Card
                variant={tier.popular ? 'featured' : 'default'}
                className="relative flex h-full flex-col"
                style={tier.popular ? { background: 'linear-gradient(180deg, rgba(227, 198, 158, 0.06) 0%, rgba(0, 0, 0, 0) 40%)' } : undefined}
              >
                {tier.popular && (
                  <Badge>Popular</Badge>
                )}
                <h3 className="font-body text-[20px] font-medium text-white">
                  {tier.name}
                </h3>
                <p className="mt-1 font-body text-[13px] font-light text-text-muted">
                  {tier.description}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-body text-[40px] font-bold leading-none text-white">
                    ${tier.price}
                  </span>
                  <span className="font-body text-[13px] text-text-dim">/mo</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-2">
                      {f.included ? (
                        <Check className="h-4 w-4 shrink-0 text-accent-gold" />
                      ) : (
                        <Minus className="h-4 w-4 shrink-0 text-text-dim" />
                      )}
                      <span
                        className={`font-body text-[13.6px] ${
                          f.included ? 'text-text-muted' : 'text-text-dim'
                        }`}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? 'primary' : 'ghost'}
                  size="md"
                  href={`${SITE_CONFIG.appUrl}/en/onboarding/starter-type?plan=${tier.name.toLowerCase()}`}
                  className={`mt-6 w-full ${tier.popular ? 'text-bg-primary font-semibold' : 'border border-white/10 text-text-muted'}`}
                  style={tier.popular ? { background: 'linear-gradient(180deg, #E3C69E 0%, #C9A574 100%)' } : undefined}
                >
                  {tier.cta}
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

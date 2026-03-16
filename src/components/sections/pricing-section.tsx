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
      id="pricing"
      aria-label="Pricing"
      className="px-6 py-[128px]"
      style={{ background: 'linear-gradient(180deg, #19150D 0%, #1C241C 50%, #1C241C 100%)' }}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionHeading
            tag="Pricing"
            title="Transparent, simple pricing"
            goldWord="simple"
            subtitle="Start free for 14 days. No credit card required."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.12}>
              <Card
                variant={tier.popular ? 'featured' : 'default'}
                className="relative flex h-full flex-col"
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 right-4">Popular</Badge>
                )}
                <h3 className="font-heading text-[20px] font-medium text-white">
                  {tier.name}
                </h3>
                <p className="mt-1 font-body-alt text-[13px] font-light text-text-muted">
                  {tier.description}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-[40px] font-bold leading-none text-white">
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
                  variant={tier.popular ? 'primary' : 'outline'}
                  size="md"
                  href={`${SITE_CONFIG.appUrl}/signup?plan=${tier.name.toLowerCase()}`}
                  className="mt-6 w-full"
                >
                  Get started
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

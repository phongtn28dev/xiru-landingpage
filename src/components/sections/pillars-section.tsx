/* Pillars/Features section — 3-column grid with icon cards and scroll reveals */


import { Zap, Shield, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { PILLARS } from '@/lib/constants';

const iconMap = { Zap, Shield, Eye } as const;

export function PillarsSection() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="bg-transparent px-6 py-[128px]"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="How it works"
            title="Everything you need, nothing you don't"
            goldWord="need"
            subtitle="Three pillars that power your long-term crypto strategy."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.15}>
                <Card className="h-full text-center md:text-left">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10">
                    <Icon className="h-6 w-6 text-accent-gold" />
                  </div>
                  <h3 className="font-heading text-[20px] font-medium text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 font-body text-[13px] font-semibold uppercase tracking-[2px] text-accent-gold-dark">
                    {pillar.highlight}
                  </p>
                  <p className="mt-3 font-body-alt text-[14px] leading-[22px] font-light text-text-muted">
                    {pillar.description}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

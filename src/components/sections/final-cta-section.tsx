/* Final CTA section — radial gold glow background with two action buttons */


import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SITE_CONFIG } from '@/lib/constants';

export function FinalCtaSection() {
  return (
    <section
      aria-label="Get started"
      className="relative overflow-hidden px-6 py-[128px]"
      style={{ background: 'linear-gradient(180deg, #19150D 0%, #1C241C 50%, #1C241C 100%)' }}
    >
      {/* Radial gold glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(227,198,158,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-[40px] font-medium leading-[1.15] text-white md:text-[56px]">
            Try for{' '}
            <em className="font-heading italic text-accent-gold">free</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body-alt text-[15.2px] leading-[25.84px] font-light text-text-muted">
            14 days. No credit card. Full access to every feature.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg" href={`${SITE_CONFIG.appUrl}/signup`}>
              Start free trial
            </Button>
            <Button variant="outline" size="lg" href={`${SITE_CONFIG.appUrl}/login`}>
              Log in
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

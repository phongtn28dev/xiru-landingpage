/* How It Works — 4 alternating steps with center gold timeline and scroll reveals */


import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { STEPS } from '@/lib/constants';

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-label="How it works"
      className="px-6 py-[128px]"
      style={{ background: 'linear-gradient(180deg, transparent 0%, #19150D 45%, #1C241C 100%)' }}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div data-waterfall-end>
            <SectionHeading
              tag="How it works"
              title="Strategy, not speculation"
              goldWord="Strategy"
            />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center gold line — visible on md+ */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent-gold/40 via-accent-gold/20 to-transparent md:block" />

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.step} className="relative flex w-full flex-col items-center py-4 md:flex-row md:justify-between">
                  {/* Timeline dot — visible on md+ */}
                  <ScrollReveal delay={i * 0.1 + 0.2} direction="none" className="absolute left-1/2 top-[10px] hidden -translate-x-1/2 md:block">
                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-accent-gold/30 bg-bg-card/30">
                      <div className="h-[6px] w-[6px] rounded-full bg-accent-gold" />
                    </div>
                  </ScrollReveal>

                  {/* Left side */}
                  <div className={`w-full text-center md:w-[45%] ${isEven ? 'md:text-left' : 'hidden md:block'}`}>
                    {isEven && (
                      <ScrollReveal delay={i * 0.1} direction="left">
                        <span className="mb-2 block font-heading text-[28px] font-medium text-white md:text-[36px]">
                          0{step.step}
                        </span>
                        <h3 className="font-heading text-[24px] font-medium tracking-tight text-accent-gold leading-[1.2] md:text-[36px]">
                          {step.title}
                        </h3>
                        <p className="mt-3 font-body-alt text-[14px] font-light leading-[22px] text-text-muted md:max-w-[420px]">
                          {step.description}
                        </p>
                      </ScrollReveal>
                    )}
                  </div>

                  {/* Right side */}
                  <div className={`w-full mt-8 md:mt-0 text-center md:w-[45%] ${!isEven ? 'md:text-right' : 'hidden md:block'}`}>
                    {!isEven && (
                      <ScrollReveal delay={i * 0.1} direction="right">
                        <div className="md:ml-auto md:max-w-[420px]">
                          <span className="mb-2 block font-heading text-[28px] font-medium text-white md:text-[36px]">
                            0{step.step}
                          </span>
                          <h3 className="font-heading text-[24px] font-medium tracking-tight text-accent-gold leading-[1.2] md:text-[36px]">
                            {step.title}
                          </h3>
                          <p className="mt-3 font-body-alt text-[14px] font-light leading-[22px] text-text-muted">
                            {step.description}
                          </p>
                        </div>
                      </ScrollReveal>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

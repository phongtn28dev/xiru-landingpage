/* FAQ section with accordion — uses client Accordion component */


import { SectionHeading } from '@/components/ui/section-heading';
import { Accordion } from '@/components/ui/accordion';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FAQ_ITEMS } from '@/lib/constants';

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="px-6 py-[128px] h-[726px]"
      style={{ background: 'linear-gradient(180deg, var(--color-bg-card) 0%, var(--color-bg-secondary) 50%, var(--color-bg-card) 100%)' }}
    >
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <SectionHeading
            tag="FAQ"
            title="Questions? "
            goldWord="Answered."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

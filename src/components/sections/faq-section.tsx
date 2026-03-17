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
      style={{ background: 'linear-gradient(180deg, #19150D 0%, #1C241C 55%, #19150D 100%)' }}
    >
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <SectionHeading
            tag="FAQ"
            title="Common questions"
            goldWord="questions"
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

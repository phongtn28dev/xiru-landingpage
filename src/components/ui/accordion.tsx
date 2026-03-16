/* FAQ accordion with smooth height animation — client component */
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: readonly AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-[14px] border border-border-subtle bg-bg-card overflow-hidden"
        >
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between p-5 text-left font-body text-[15.2px] font-medium text-white transition-colors hover:text-accent-gold"
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
          >
            {item.question}
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                id={`faq-panel-${i}`}
                role="region"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p className="px-5 pb-5 font-body-alt text-[14px] leading-[22px] font-light text-text-muted">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

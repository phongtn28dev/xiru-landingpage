/* FAQ accordion with CSS height animation — no framer-motion dependency */
'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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
          <AccordionPanel isOpen={openIndex === i} id={`faq-panel-${i}`}>
            <p className="px-5 pb-5 font-body-alt text-[14px] leading-[22px] font-light text-text-muted">
              {item.answer}
            </p>
          </AccordionPanel>
        </div>
      ))}
    </div>
  );
}

/* CSS grid-template-rows trick for smooth height animation */
function AccordionPanel({
  isOpen,
  id,
  children,
}: {
  isOpen: boolean;
  id: string;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={id}
      role="region"
      style={{
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        opacity: isOpen ? 1 : 0,
        transition: 'grid-template-rows 0.3s ease-in-out, opacity 0.3s ease-in-out',
      }}
    >
      <div ref={contentRef} style={{ overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

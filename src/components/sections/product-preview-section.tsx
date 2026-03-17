/* Product preview with browser frame mockup for dashboard screenshot */


import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function ProductPreviewSection() {
  return (
    <section
      aria-label="Product preview"
      className="px-6 py-[128px]"
      style={{ background: 'linear-gradient(180deg, #19150D 0%, #19150D 100%)' }}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionHeading
            tag="Product"
            title="See it in action"
            goldWord="action"
            subtitle="A workspace designed for flow. Every pixel serves a purpose."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-4xl">
            {/* Browser frame chrome */}
            <div className="overflow-hidden rounded-2xl border border-border-subtle shadow-2xl shadow-accent-gold/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-card px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/60" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <span className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-bg-primary/50 px-3 py-1 text-center">
                  <span className="font-body text-[11px] text-text-dim">
                    app.xiru.io
                  </span>
                </div>
              </div>
              {/* Screenshot placeholder */}
              <div className="flex h-[250px] items-center justify-center bg-bg-card md:h-[400px]">
                <p className="font-body text-[14px] text-text-dim">
                  Dashboard screenshot — image coming soon
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

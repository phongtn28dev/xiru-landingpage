/* Homepage — assembles all sections in cinematic scroll order.
   Waterfall canvas spans hero + pillars sections via shared wrapper */

import { HeroSection } from '@/components/sections/hero-section';
import { PillarsSection } from '@/components/sections/pillars-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { ProductPreviewSection } from '@/components/sections/product-preview-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FaqSection } from '@/components/sections/faq-section';
import { FinalCtaSection } from '@/components/sections/final-cta-section';
import { JsonLdScript } from '@/components/seo/json-ld-script';
import { WaterfallWrapper } from '@/components/hero/waterfall-wrapper';

export default function HomePage() {
  return (
    <>
      <JsonLdScript />
      {/* Waterfall canvas spans from hero subtitle through How It Works title */}
      <WaterfallWrapper>
        <HeroSection />
        <HowItWorksSection />
      </WaterfallWrapper>
      <ProductPreviewSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}

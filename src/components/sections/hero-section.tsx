/* Hero section — headline with gold accents, CTAs, CSS stagger animation (no framer-motion) */

import { Button } from '@/components/ui/button';
import { GoldText } from '@/components/ui/gold-text';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center bg-transparent px-6 pt-24 pb-16"
    >
      {/* Content — CSS stagger via animation-delay */}
      <div className="relative z-10 mx-auto max-w-4xl text-center animate-[fadeIn_0.6s_ease-out_forwards]">
        <h1
          className="font-heading text-[40px] leading-[1.1] font-medium text-white md:text-[56px] lg:text-[68.58px] lg:leading-[75.438px] opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]"
          style={{ animationDelay: '0.15s' }}
        >
          Invest in <GoldText>crypto</GoldText>
          <br />
          <GoldText>with strategy,</GoldText>
          {" "}not chaos.
        </h1>

        <p
          data-waterfall-start
          className="mx-auto mt-6 max-w-2xl font-body-alt text-[15.2px] leading-[25.84px] font-light text-text-muted md:text-[17px] md:leading-7 opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]"
          style={{ animationDelay: '0.3s' }}
        >
          Xiru helps you build a long-term crypto buying strategy designed to grow your wealth with intelligent guidance,{' '}
          <span className="text-accent-gold">non-custodial execution, and full control of your assets at every step.</span>
        </p>

        <div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]"
          style={{ animationDelay: '0.45s' }}
        >
          <Button variant="primary" size="lg" href={`${SITE_CONFIG.appUrl}/signup`} className='border-2 border-accent-gold'>
            Start free trial
          </Button>
          <Button variant="primary" size="lg" href={`${SITE_CONFIG.appUrl}/login`} className='bg-[#14211F]! border-2 border-accent-gold hover:text-white/90 focus:ring-accent-gold/50'>
            Log in
          </Button>
        </div>
      </div>
    </section>
  );
}

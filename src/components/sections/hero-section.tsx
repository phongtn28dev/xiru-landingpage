/* Hero section — globe bg at lowest z, text content layered above */

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GoldText } from '@/components/ui/gold-text';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex flex-col px-6 pt-24 pb-0 overflow-hidden min-h-[80svh] sm:min-h-[85svh] lg:min-h-svh"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #000000 60%, #1C241C 100%)' }}
    >
      {/* Globe background image — fixed height on mobile/tablet, auto on desktop */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-[360px] sm:h-[560px] md:h-[600px] lg:h-auto opacity-0 animate-[fadeIn_1.2s_ease-out_0.5s_forwards]">
        <Image
          src="/images/hero/image.png"
          alt=""
          width={1280}
          height={600}
          priority
          className="mx-auto w-full h-full object-cover object-bottom lg:object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Hero text content — higher z-index, above the globe */}
      <div className="relative z-10 mx-auto max-w-7xl pt-8 sm:pt-16 text-center animate-[fadeIn_0.6s_ease-out_forwards]">
        <h1
          className="font-heading text-[24px] leading-[1.15] font-medium text-white sm:text-[32px] md:text-[56px] lg:text-[68.58px] lg:leading-[75.438px] opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]"
          style={{ animationDelay: '0.15s' }}
        >
          Invest in <GoldText>crypto</GoldText>
          <br />
          <GoldText>with strategy,</GoldText>
          {" "}not speculation.
        </h1>

        <p
          data-waterfall-start
          className="mx-auto mt-6 max-w-4xl font-body-alt text-[13px] leading-[21px] font-light text-white sm:text-[15.2px] sm:leading-[25.84px] md:text-[17px] md:leading-7 opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]"
          style={{ animationDelay: '0.3s' }}
        >
          XIRU helps you build a long-term crypto buying strategy designed to grow your wealth with intelligent guidance,{' '}
          <span className="text-accent-gold">non-custodial execution, and full control of your assets at every step.</span>
        </p>

        <div
          className="mt-10 flex items-center gap-3 sm:mt-16 flex-row justify-center opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]"
          style={{ animationDelay: '0.45s' }}
        >
          <Button variant="primary" size="lg" href={`${SITE_CONFIG.appUrl}/en/onboarding/starter-type`} className='border-2 border-accent-gold bg-[#69644F]/60! hover:bg-[#69644F]/80 focus:ring-accent-gold/50 hover:text-white/60'>
            Start free trial &rarr;
          </Button>
          <Button variant="primary" size="lg" href={`${SITE_CONFIG.appUrl}/en/sign-in`} className='bg-[#14211F]! border-2 border-accent-gold bg-[#14211F]/60! hover:text-white/60 focus:ring-accent-gold/50'>
            Log in
          </Button>
        </div>
      </div>

      {/* "AI-powered" text — close to buttons on mobile, pushed to bottom on sm+ */}
      <div className="relative z-10 mt-4 pb-8 text-center px-6 sm:mt-auto lg:pt-[60vh]">
        <p className="font-heading text-[20px] leading-[1.3] sm:text-[26px] md:text-[40px] lg:text-[48px]">
          <em className="text-accent-gold italic">AI-powered long-term</em>
          <br />
          <span className="text-white not-italic">crypto investment system</span>
        </p>
      </div>
    </section>
  );
}

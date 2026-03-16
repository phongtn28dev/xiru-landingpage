/* Hero section — headline with gold accents, CTAs */
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GoldText } from '@/components/ui/gold-text';
import { SITE_CONFIG } from '@/lib/constants';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center bg-transparent px-6 pt-24 pb-16"
    >
      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-heading text-[40px] leading-[1.1] font-medium text-white md:text-[56px] lg:text-[68.58px] lg:leading-[75.438px]"
        >
          Invest in <GoldText>crypto</GoldText>
          <br />
          <GoldText>with strategy,</GoldText>
          {" "}not chaos.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          data-waterfall-start
          className="mx-auto mt-6 max-w-xl font-body-alt text-[15.2px] leading-[25.84px] font-light text-text-muted md:text-[17px] md:leading-7"
        >
          AI-powered market analysis, non-custodial wallet integration, and
          monthly portfolio rebalancing — designed for long-term investors.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Button variant="primary" size="lg" href={`${SITE_CONFIG.appUrl}/signup`}>
            Start free trial
          </Button>
          <Button variant="outline" size="lg" href={`${SITE_CONFIG.appUrl}/login`}>
            Log in
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

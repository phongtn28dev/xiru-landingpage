/* Site-wide configuration, navigation links, and content data */

export const SITE_CONFIG = {
  name: 'XIRU',
  tagline: 'Long-term crypto buying strategy',
  url: 'https://xiru.io',
  appUrl: 'https://app.xiru.io',
  email: 'hello@xiru.io',
} as const;

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const FOOTER_LINKS = {
  contact: [
    { label: 'hello@xiru.io', href: 'mailto:hello@xiru.io' },
    { label: 'Support Center', href: `${SITE_CONFIG.appUrl}/support` },
    { label: 'Twitter / X', href: 'https://twitter.com/xiru' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/xiru' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR', href: '/gdpr' },
  ],
} as const;

export const PILLARS = [
  {
    icon: 'Zap' as const,
    title: 'Effortless Speed',
    highlight: '10x faster',
    description:
      'Set up your strategy in minutes. Our streamlined flow eliminates complexity so you can start investing immediately.',
  },
  {
    icon: 'Shield' as const,
    title: 'Built-in Trust',
    highlight: 'Enterprise-grade',
    description:
      'Non-custodial wallet integration means you always own your keys. Your assets never leave your control.',
  },
  {
    icon: 'Eye' as const,
    title: 'Clarity at Scale',
    highlight: '360° visibility',
    description:
      'Real-time dashboards, performance tracking, and market insights — all in one place.',
  },
] as const;

export const STEPS = [
  {
    step: 1,
    title: 'Clarity beyond\n the noise',
    description:
      'Xiru helps you understand the logic behind every\n move through long-term market analysis,\n not short-term speculation.',
  },
  {
    step: 2,
    title: 'Strategy tailored to\n your holdings',
    description:
      'By connecting your wallet, Xiru builds personalized\n guidance around your existing assets and updates\n it through monthly rebalancing.',
  },
  {
    step: 3,
    title: 'You stay in\n full control',
    description:
      'Your crypto stays in your wallet at all times. Xiru\n guides the strategy, but every decision remains\n entirely in your hands.',
  },
  {
    step: 4,
    title: 'Monthly\n rebalancing',
    description:
      'Your strategy is reviewed and adjusted every\n month to stay aligned with market conditions while\n maintaining a long-term direction.',
  },
] as const;

export const PRICING_TIERS = [
  {
    name: 'Basic',
    price: 5,
    popular: false,
    description: 'For individuals getting started',
    features: [
      { label: '1 portfolio', included: true },
      { label: 'Monthly rebalancing', included: true },
      { label: 'Basic market insights', included: true },
      { label: 'Email support', included: true },
      { label: 'Custom strategies', included: false },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Regular',
    price: 8,
    popular: true,
    description: 'For active investors',
    features: [
      { label: '5 portfolios', included: true },
      { label: 'Weekly rebalancing', included: true },
      { label: 'Advanced AI insights', included: true },
      { label: 'Priority support', included: true },
      { label: 'Custom strategies', included: true },
      { label: 'API access', included: false },
    ],
  },
  {
    name: 'Professional',
    price: 20,
    popular: false,
    description: 'For serious portfolio managers',
    features: [
      { label: 'Unlimited portfolios', included: true },
      { label: 'Daily rebalancing', included: true },
      { label: 'Full AI suite', included: true },
      { label: 'Dedicated support', included: true },
      { label: 'Custom strategies', included: true },
      { label: 'API access', included: true },
    ],
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'How long is the free trial?',
    answer:
      '14 days with full access to all Pro features. No credit card required to start.',
  },
  {
    question: 'Can I switch plans or cancel at any time?',
    answer:
      'Absolutely. Upgrade, downgrade, or cancel anytime.',
  },
  {
    question: 'What wallets do you support?',
    answer:
      'Our system only supports EVM compatible platforms wallets like MetaMask, Rabby,  Coinbase Wallet.',
  },
  {
    question: 'Can I make short-term investment?',
    answer:
      'Because short-term investing is driven more by noise, volatility, and reaction than by real conviction. Xiru is built around long-term strategy, where disciplined positioning and patience create stronger, more sustainable growth over time.',
  },
] as const;

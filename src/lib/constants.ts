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
    title: 'Clarity beyond the noise',
    description:
      'Our AI analyzes market trends, on-chain data, and macro indicators to cut through the noise and surface what matters.',
  },
  {
    step: 2,
    title: 'Strategy tailored to you',
    description:
      'Choose from proven allocation models or customize your own. Set risk tolerance, asset mix, and rebalancing frequency.',
  },
  {
    step: 3,
    title: 'Full control, always',
    description:
      'Connect your non-custodial wallet. We never touch your funds — you approve every transaction directly from your wallet.',
  },
  {
    step: 4,
    title: 'Monthly rebalancing',
    description:
      'Each month, XIRU suggests portfolio adjustments based on the latest data. Review, approve, and execute in one click.',
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
      'You get a 14-day free trial with full access to all features. No credit card required to start.',
  },
  {
    question: 'Can I switch plans?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What wallets are supported?',
    answer:
      'XIRU supports all major non-custodial wallets including MetaMask, Ledger, Trezor, and WalletConnect-compatible wallets.',
  },
  {
    question: 'Is this for short-term investment?',
    answer:
      'XIRU is designed for long-term crypto buying strategies. Our approach focuses on disciplined accumulation and monthly rebalancing rather than day trading.',
  },
] as const;

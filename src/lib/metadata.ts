/* Centralized SEO metadata constants and helpers */

import type { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

const siteUrl = SITE_CONFIG.url;
const title = 'XIRU - Long-term Crypto Buying Strategy';
const description =
  'Invest in crypto with strategy, not chaos. AI-powered market analysis, non-custodial wallet integration, and monthly portfolio rebalancing.';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/images/logo/favicon.ico',
    shortcut: '/images/logo/favicon.ico',
  },
  title: {
    default: title,
    template: '%s | XIRU',
  },
  description,
  keywords: [
    'crypto investment',
    'portfolio rebalancing',
    'crypto strategy',
    'non-custodial wallet',
    'DCA crypto',
    'crypto portfolio management',
    'long-term crypto',
    'bitcoin strategy',
  ],
  authors: [{ name: 'XIRU' }],
  creator: 'XIRU',
  publisher: 'XIRU',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'XIRU',
    title,
    description,
    images: [
      {
        url: '/images/og/xiru-og.png',
        width: 1200,
        height: 630,
        alt: 'XIRU - Crypto Strategy Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og/xiru-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  alternates: { canonical: siteUrl },
};

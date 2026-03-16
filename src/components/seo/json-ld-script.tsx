/* JSON-LD structured data — Organization, SoftwareApplication, FAQPage schemas */

import { SITE_CONFIG, FAQ_ITEMS } from '@/lib/constants';

function buildJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/images/logo/xiru-logo.svg`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: SITE_CONFIG.email,
      },
      sameAs: [
        'https://twitter.com/xiru',
        'https://linkedin.com/company/xiru',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: SITE_CONFIG.name,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '5',
        highPrice: '20',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];
}

export function JsonLdScript() {
  const schemas = buildJsonLd();
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/<\/script/gi, '<\\/script') }}
        />
      ))}
    </>
  );
}

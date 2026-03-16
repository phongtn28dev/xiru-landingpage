/* Robots.txt configuration — allow all, point to sitemap */

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://xiru.io/sitemap.xml',
  };
}

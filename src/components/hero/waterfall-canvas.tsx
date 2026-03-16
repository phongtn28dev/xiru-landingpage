/* Waterfall decorative image — lazy-loaded WebP via next/image */

import Image from 'next/image';

export function WaterfallCanvas() {
  return (
    <Image
      src="/images/hero/waterfall-bg.webp"
      alt=""
      fill
      className="pointer-events-none top-10 object-contain object-top"
      aria-hidden="true"
      loading="lazy"
      sizes="(max-width: 1080px) 100vw, 1080px"
    />
  );
}

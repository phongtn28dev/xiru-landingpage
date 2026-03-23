/* 4-column footer — server component, no interactivity */

import Link from 'next/link';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-primary px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link
            href="/"
            className="font-heading text-[24px] font-bold text-accent-gold"
          >
            {SITE_CONFIG.name}
          </Link>
          <p className="mt-3 max-w-xs font-body-alt text-[14px] leading-[22px] font-light text-text-muted">
            {SITE_CONFIG.tagline}. Invest with clarity, not chaos.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-body text-[13px] font-semibold uppercase tracking-[2px] text-white/50">
            Contact
          </h3>
          <ul className="space-y-3">
            {FOOTER_LINKS.contact.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-body text-[13.6px] text-white/30 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-4 font-body text-[13px] font-semibold uppercase tracking-[2px] text-white/50">
            Legal
          </h3>
          <ul className="space-y-3">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-[13.6px] text-white/30 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-[12px] text-text-dim md:flex-row">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="transition-colors hover:text-text-muted">Status</a>
          <a href="#" className="transition-colors hover:text-text-muted">Security</a>
        </div>
      </div>
    </footer>
  );
}

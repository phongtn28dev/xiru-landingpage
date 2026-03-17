/* Floating pill navbar with blur backdrop — client component for mobile toggle */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on anchor click */
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`relative flex w-full max-w-full items-center justify-between rounded-full border border-nav-border px-6 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-nav-bg/90 backdrop-blur-md shadow-lg'
            : 'bg-nav-bg/70 backdrop-blur-sm'
        }`}
      >
        {/* Logo — left */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo/logo (1).svg"
            alt={SITE_CONFIG.name}
            width={80}
            height={32}
            priority
          />
        </Link>

        {/* Desktop nav links — absolutely centered */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[13.6px] leading-[20.4px] text-text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs — right */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" href={`${SITE_CONFIG.appUrl}/login`}>
            Log in
          </Button>
          <Button variant="primary" size="sm" href={`${SITE_CONFIG.appUrl}/signup`}>
            Start free trial
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-bg-primary/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center gap-6 pt-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-body text-[18px] text-text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button variant="outline" href={`${SITE_CONFIG.appUrl}/login`}>
                Log in
              </Button>
              <Button variant="primary" href={`${SITE_CONFIG.appUrl}/signup`}>
                Start free trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

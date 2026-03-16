/* Root layout — fonts, metadata, navbar + footer wrapper */

import type { Metadata } from 'next';
import { Playfair_Display, Inter, Poppins } from 'next/font/google';
import { siteMetadata } from '@/lib/metadata';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import '@/styles/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="https://app.xiru.io" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

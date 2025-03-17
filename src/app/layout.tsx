import React from 'react';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Providers from '@/components/Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Prakriti Diamonds | Exquisite Jewelry Collection',
  description: 'Discover our stunning collection of ethically sourced diamonds and fine jewelry.',
  keywords: 'diamonds, jewelry, rings, necklaces, earrings, bracelets',
  openGraph: {
    title: 'Prakriti Diamonds | Exquisite Jewelry Collection',
    description: 'Discover our stunning collection of ethically sourced diamonds and fine jewelry.',
    url: 'https://prakritidiamonds.com',
    siteName: 'Prakriti Diamonds',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prakriti Diamonds Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakriti Diamonds | Exquisite Jewelry Collection',
    description: 'Discover our stunning collection of ethically sourced diamonds and fine jewelry.',
    images: ['/images/twitter-image.jpg'],
    creator: '@prakritidiamonds',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
} 
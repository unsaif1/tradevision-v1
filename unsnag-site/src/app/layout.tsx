import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UnSnag.io — Forensic Data Clarity',
  description:
    'The AI-powered swarm that turns web noise into actionable signals. Stop the friction. Start UnSnagging.',
  keywords: [
    'web data extraction', 'signal intelligence', 'AI swarm',
    'forensic data', 'data pipeline', 'UnSnag',
  ],
  openGraph: {
    title: 'UnSnag.io — Stop the Friction. Start UnSnagging.',
    description: 'The AI-powered swarm that turns web noise into actionable signals.',
    type: 'website',
    siteName: 'UnSnag.io',
    url: 'https://unsnag.io',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'UnSnag.io' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnSnag.io — Forensic Data Clarity',
    description: 'The AI-powered swarm that turns web noise into actionable signals.',
    images: ['/twitter-image'],
  },
  metadataBase: new URL('https://unsnag.io'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

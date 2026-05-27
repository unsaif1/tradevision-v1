import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UnSnag.io — Forensic Data Clarity',
  description:
    'The AI-powered swarm that turns web noise into actionable signals. Stop the friction. Start UnSnagging.',
  keywords: [
    'web data extraction',
    'signal intelligence',
    'AI swarm',
    'forensic data',
    'data pipeline',
    'UnSnag',
  ],
  openGraph: {
    title: 'UnSnag.io — Stop the Friction. Start UnSnagging.',
    description: 'The AI-powered swarm that turns web noise into actionable signals.',
    type: 'website',
    siteName: 'UnSnag.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnSnag.io — Forensic Data Clarity',
    description: 'The AI-powered swarm that turns web noise into actionable signals.',
  },
};

export default function UnsnagLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
      />
      {children}
    </>
  );
}

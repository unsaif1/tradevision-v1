import type { Metadata } from 'next';
import StitchAuthGuard from './StitchAuthGuard';

export const metadata: Metadata = {
  title: 'TradeVision C.A.R.E.',
  description: 'Claims Analysis & Resolution Engine — C.A.R.E. Stack',
};

export default function StitchLayout({ children }: { children: React.ReactNode }) {
  return <StitchAuthGuard>{children}</StitchAuthGuard>;
}

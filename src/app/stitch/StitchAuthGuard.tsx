'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function StitchAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('tv_token');
    const onLogin = pathname === '/stitch/login';

    if (token && onLogin) {
      router.replace('/stitch');
    } else if (!token && !onLogin) {
      router.replace('/stitch/login');
    }
  }, [pathname, router]);

  return <>{children}</>;
}

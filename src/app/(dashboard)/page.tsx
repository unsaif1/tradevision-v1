'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRootPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('tv_token');
    if (!token) {
      router.replace('/stitch/login');
      return;
    }
    const role = localStorage.getItem('tv_role') ?? 'contractor';
    if (role === 'adjuster') {
      router.replace('/adjuster');
    } else if (role === 'policyholder') {
      router.replace('/policyholder');
    } else {
      router.replace('/contractor');
    }
  }, [router]);

  return (
    <div className="bg-[#0D0F11] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-8 h-8 border-2 border-[#00D4AA] border-t-transparent rounded-full animate-spin"
        />
        <p className="font-['JetBrains_Mono',monospace] text-[11px] text-[#8B95A1] uppercase tracking-widest">
          Loading portal...
        </p>
      </div>
    </div>
  );
}

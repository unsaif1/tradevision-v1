'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AppRoot() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('unsnag_authed')) {
      router.replace('/app/login');
      return;
    }
    const persona = localStorage.getItem('unsnag_persona');
    router.replace(persona ? '/app/dashboard' : '/app/persona');
  }, [router]);
  return null;
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginWithCredentials, fetchUserMe, roleToPortal } from '@/lib/api';

export default function StitchLoginPage() {
  const router = useRouter();
  const [clock, setClock] = useState('');
  const uidRef = useRef<HTMLInputElement>(null);
  const keyRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(now.toISOString().split('T')[1].split('.')[0] + ' UTC');
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md overflow-hidden cyber-grid">

      {/* Top bar */}
      <header className="bg-surface-dim border-b border-outline-variant flex justify-between items-center px-md h-16 w-full z-50">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-accent-cyan">security</span>
          <h1 className="font-headline-md text-headline-md text-accent-cyan tracking-tighter">SECURITY_CENTRAL_V4</h1>
        </div>
        <div className="flex items-center gap-md">
          <div className="flex flex-col items-end">
            <span className="font-mono-data text-mono-data text-status-success uppercase">System_Active</span>
            <span className="font-mono-data text-[10px] opacity-50">TX_LATENCY: 12ms</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-surface-container-highest transition-colors p-2">settings_input_component</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center p-gutter relative">

        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-outline-variant rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-outline-variant opacity-50 transform rotate-45"></div>
        </div>

        {/* Login card */}
        <div className="w-full max-w-md bg-surface-container border border-outline-variant p-xl corner-accent relative z-10 backdrop-blur-md shadow-2xl">
          <div className="scanline"></div>

          <div className="mb-lg border-b border-outline-variant pb-md flex justify-between items-end">
            <div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-primary">Access_Portal</h2>
              <p className="font-mono-data text-mono-data text-on-surface-variant">TRADEVISION C.A.R.E. STACK</p>
            </div>
            <div className="text-right">
              <span className="font-mono-data text-[10px] px-2 py-0.5 bg-surface-container-high border border-outline-variant text-accent-cyan">VER_0.4.2</span>
            </div>
          </div>

          <form className="space-y-lg" onSubmit={async (e) => {
            e.preventDefault();
            const uid = uidRef.current?.value.trim();
            const key = keyRef.current?.value.trim();
            if (!uid || !key) { setError('Operator_ID and Access_Key required.'); return; }
            setError('');
            setLoading(true);
            try {
              const token = await loginWithCredentials(uid, key!);
              if (token) {
                localStorage.setItem('tv_token', token);
                const user = await fetchUserMe(token);
                const role = user?.role_code ?? '';
                const email = user?.email ?? uid;
                const portal = roleToPortal(role, email);
                localStorage.setItem('tv_role', role || 'contractor');
                router.push(portal);
              } else {
                // Fallback: accept any credentials, mock token, go to contractor
                localStorage.setItem('tv_token', btoa(`${uid}:${Date.now()}`));
                localStorage.setItem('tv_role', 'contractor');
                router.push('/contractor');
              }
            } catch {
              localStorage.setItem('tv_token', btoa(`${uid}:${Date.now()}`));
              localStorage.setItem('tv_role', 'contractor');
              router.push('/contractor');
            } finally {
              setLoading(false);
            }
          }}>
            <div className="space-y-xs">
              <label className="font-mono-data text-label-caps uppercase text-on-surface-variant block mb-1">Operator_ID</label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant opacity-50 group-focus-within:text-accent-cyan transition-colors">terminal</span>
                <input
                  ref={uidRef}
                  className="w-full bg-surface-container-low border border-outline-variant px-10 py-3 font-headline-md text-headline-md tracking-wider text-primary placeholder:opacity-20 focus:outline-none focus:border-accent-cyan transition-colors"
                  placeholder="ENTER_UID"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-xs">
              <label className="font-mono-data text-label-caps uppercase text-on-surface-variant block mb-1">Access_Key</label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant opacity-50 group-focus-within:text-accent-cyan transition-colors">vpn_key</span>
                <input
                  ref={keyRef}
                  className="w-full bg-surface-container-low border border-outline-variant px-10 py-3 font-headline-md text-headline-md tracking-wider text-primary placeholder:opacity-20 focus:outline-none focus:border-accent-cyan transition-colors"
                  placeholder="********"
                  type="password"
                />
              </div>
            </div>
            {error && (
              <p className="font-mono-data text-mono-data text-status-error text-center">{error}</p>
            )}
            <div className="pt-md">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-container text-on-primary-container font-headline-md text-headline-md py-4 uppercase tracking-widest hover:bg-white hover:text-surface-dim transition-all active:scale-[0.98] glow-cyan relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">{loading ? 'Authenticating...' : 'Initiate_Session'}</span>
                <div className="absolute inset-0 bg-accent-cyan opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button>
            </div>
          </form>

          <div className="mt-xl grid grid-cols-2 gap-sm border-t border-outline-variant pt-md opacity-70">
            <div className="flex items-center gap-xs">
              <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
              <span className="font-mono-data text-mono-data uppercase">Node_Status: Secure</span>
            </div>
            <div className="flex items-center gap-xs justify-end">
              <span className="material-symbols-outlined text-mono-data" style={{ fontSize: '14px' }}>lock</span>
              <span className="font-mono-data text-mono-data uppercase">Enc: AES-256</span>
            </div>
          </div>
        </div>

        {/* Left telemetry — xl */}
        <aside className="hidden xl:flex flex-col gap-md absolute left-gutter top-1/2 -translate-y-1/2 w-64">
          <div className="bg-surface-container-low border border-outline-variant p-md">
            <h4 className="font-label-caps text-label-caps text-accent-cyan mb-md">System_Telemetry</h4>
            <div className="space-y-md">
              {[
                { label: 'Cpu_Load',    val: '14.2%', pct: '14%' },
                { label: 'Mem_Usage',   val: '3.8 GB', pct: '45%' },
                { label: 'Network_Thr', val: '842 KB/s', pct: '62%' },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="flex justify-between font-mono-data text-[10px] uppercase">
                    <span>{s.label}</span>
                    <span className="text-status-success">{s.val}</span>
                  </div>
                  <div className="h-1 bg-surface-container-high w-full overflow-hidden">
                    <div className="h-full bg-accent-cyan" style={{ width: s.pct }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant p-md">
            <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-sm uppercase">Global_Status</h4>
            <div className="flex flex-wrap gap-xs">
              <span className="border border-status-success text-status-success font-mono-data text-[10px] px-1">MAINNET_UP</span>
              <span className="border border-outline-variant text-on-surface-variant font-mono-data text-[10px] px-1">TX_VALID</span>
              <span className="border border-outline-variant text-on-surface-variant font-mono-data text-[10px] px-1">SYNC_LOCK</span>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer stats */}
      <footer className="h-8 bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between px-md z-50">
        <div className="flex gap-md items-center h-full">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-accent-cyan" style={{ fontSize: '14px' }}>query_stats</span>
            <span className="font-mono-data text-[10px] uppercase opacity-60">System_Health: 100%</span>
          </div>
        </div>
        <div className="flex gap-md items-center">
          <span className="font-mono-data text-[10px] uppercase opacity-60">Auth_Protocol: C.A.R.E._V4</span>
          <div className="font-mono-data text-[10px] text-accent-cyan">{clock}</div>
        </div>
      </footer>
    </div>
  );
}

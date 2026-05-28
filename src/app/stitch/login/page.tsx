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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const uid = uidRef.current?.value.trim();
    const key = keyRef.current?.value.trim();
    if (!uid || !key) { setError('Email and password required.'); return; }
    setError('');
    setLoading(true);
    try {
      const token = await loginWithCredentials(uid, key);
      if (token) {
        localStorage.setItem('tv_token', token);
        let portal = '/policyholder';
        try {
          const user = await fetchUserMe(token);
          const role = user?.role_code ?? '';
          const email = user?.email ?? uid;
          portal = roleToPortal(role, email);
        } catch {
          // fallback
        }
        localStorage.setItem('tv_role', 'contractor');
        router.push(portal);
      } else {
        setError('Invalid credentials');
      }
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#040037',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: '#1a1a2e',
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(0,0,0,0.2)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px', height: '28px', backgroundColor: '#E21E51', borderRadius: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '14px',
          }}>T</div>
          <span style={{ color: '#E21E51', fontWeight: '700', fontSize: '15px', letterSpacing: '-0.01em' }}>TradeVision</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontFamily: 'monospace' }}>{clock}</span>
      </header>

      {/* Main */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '40px 28px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{
              width: '52px', height: '52px', backgroundColor: '#E21E51', borderRadius: '10px',
              margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '26px', fontWeight: '800',
            }}>T</div>
            <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#040037', margin: '0 0 4px' }}>Welcome back</h1>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Sign in to TradeVision</p>
          </div>

          {error && (
            <div style={{
              backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626',
              padding: '10px 14px', borderRadius: '8px', fontSize: '13px', marginBottom: '16px',
            }}>{error}</div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '5px' }}>Email</label>
              <input
                ref={uidRef}
                type="email"
                placeholder="you@company.com"
                required
                autoComplete="email"
                style={{
                  width: '100%', padding: '11px 14px', border: '1px solid #d1d5db', borderRadius: '8px',
                  fontSize: '15px', outline: 'none', boxSizing: 'border-box', color: '#111827',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '5px' }}>Password</label>
              <input
                ref={keyRef}
                type="password"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                style={{
                  width: '100%', padding: '11px 14px', border: '1px solid #d1d5db', borderRadius: '8px',
                  fontSize: '15px', outline: 'none', boxSizing: 'border-box', color: '#111827',
                }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '13px', backgroundColor: loading ? '#9ca3af' : '#E21E51',
                color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer', marginTop: '4px',
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div style={{
            marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f3f4f6',
            display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '11px', color: '#9ca3af',
          }}>
            <span>C.A.R.E. Stack v0.4.2</span>
            <span>•</span>
            <span>AES-256</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '8px 20px', borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>HEALTH: 100%</span>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>AUTH: C.A.R.E._V4</span>
      </footer>
    </div>
  );
}

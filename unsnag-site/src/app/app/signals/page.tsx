'use client';

import { useState } from 'react';

const SIGNALS = [
  { name: 'Financial Data', type: 'Regex', rules: 3, active: true },
  { name: 'No-Script Layouts', type: 'CSS', rules: 1, active: true },
  { name: 'E-commerce SKUs', type: 'Regex', rules: 5, active: false },
];

export default function SignalsPage() {
  const [signals, setSignals] = useState(SIGNALS);

  return (
    <div style={{ fontFamily: 'Geist, system-ui, sans-serif', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#2e5bff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
            Custom Signals
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>
            Signal Configuration
          </h1>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2e5bff', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 18px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
          New Signal
        </button>
      </div>

      <p style={{ fontSize: 14, color: '#8e90a2', marginBottom: 28, lineHeight: 1.6 }}>
        Define precise extraction logic for your reading queue.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {signals.map((sig, i) => (
          <div key={i} style={{ background: '#171f33', border: '1px solid #2d3449', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#4a6fff' }}>biotech</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>{sig.name}</div>
              <div style={{ fontSize: 12, color: '#8e90a2' }}>{sig.type} · {sig.rules} Rule{sig.rules !== 1 ? 's' : ''}</div>
            </div>
            <div
              style={{
                fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer',
                background: sig.active ? 'rgba(52,199,89,0.1)' : 'rgba(142,144,162,0.1)',
                color: sig.active ? '#34c759' : '#8e90a2',
                border: `1px solid ${sig.active ? 'rgba(52,199,89,0.2)' : 'rgba(142,144,162,0.2)'}`,
              }}
              onClick={() => setSignals((prev) => prev.map((s, j) => j === i ? { ...s, active: !s.active } : s))}
            >
              {sig.active ? 'Active' : 'Paused'}
            </div>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#434656', cursor: 'pointer' }}>more_vert</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28, background: 'rgba(46,91,255,0.05)', border: '1px dashed rgba(46,91,255,0.2)', borderRadius: 12, padding: '24px', textAlign: 'center', color: '#434656', fontSize: 13 }}>
        <span className="material-symbols-outlined" style={{ fontSize: 28, display: 'block', marginBottom: 8 }}>add_circle</span>
        Add a new signal to start extracting
      </div>
    </div>
  );
}

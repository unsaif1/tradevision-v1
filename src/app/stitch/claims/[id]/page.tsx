'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type Doc = { icon: string; name: string; size: string; hash: string };
type TrailItem = { label: string; time: string; desc: string; active: boolean };

type ClaimDetail = {
  title: string;
  location: string;
  recordedAt: string;
  analyst: string;
  risk: string;
  telemetry: string;
  status: string;
  docs: Doc[];
  trail: TrailItem[];
};

const FALLBACK: ClaimDetail = {
  title: 'Structural Integrity Failure',
  location: 'Sector 7G, Primary Coolant Tower',
  recordedAt: '2023-10-24 08:45:00Z',
  analyst: 'Dr. E. Vance',
  risk: 'Critical / Tier 1',
  telemetry: 'Online (Degraded)',
  status: 'Review',
  docs: [
    { icon: 'description', name: 'incident_report_final_signed.pdf', size: '4.2 MB',  hash: '8f4e9a3b...2c1d5e6f' },
    { icon: 'image',       name: 'drone_survey_fracture_site.jpg',   size: '12.8 MB', hash: 'd4735e3a...9f11a2b0' },
    { icon: 'terminal',    name: 'sensor_telemetry_dump.json',       size: '845 KB',  hash: '1a9b2c3d...4e5f6g7h' },
  ],
  trail: [
    { label: 'Legal Review Started', time: 'Today, 14:30',     desc: 'Assigned to External Counsel group (ID: GRP-442) for preliminary liability assessment.', active: true  },
    { label: 'Metadata Validated',   time: 'Yesterday, 09:15', desc: 'Automated system verified cryptographic hashes against origin chain.',                    active: false },
    { label: 'Evidence Ingested',    time: 'Oct 24, 08:45',    desc: 'Initial packet received from field operative terminal.',                                   active: false },
  ],
};

export default function ClaimDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const [claim, setClaim] = useState<ClaimDetail>(FALLBACK);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  useEffect(() => {
    async function fetchClaim() {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('tv_token') : null;
        const res = await fetch(`/api/claims/${id}`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json() as ClaimDetail;
        setClaim(data);
      } catch {
        // API not ready — silently fall back to sample data
      } finally {
        setLoading(false);
      }
    }
    fetchClaim();
  }, [id]);

  function copyHash(hash: string) {
    navigator.clipboard.writeText(hash).catch(() => {});
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 1500);
  }

  const displayId = id ? id.toUpperCase() : 'CLM-894-XQ';

  if (loading) {
    return (
      <div className="bg-surface-deep text-text-primary antialiased font-body-md min-h-screen flex justify-center">
        <div className="w-full max-w-md bg-surface-deep h-screen flex flex-col items-center justify-center gap-4">
          <span className="material-symbols-outlined text-neon-pink text-4xl animate-spin">progress_activity</span>
          <p className="font-label-caps text-label-caps text-text-secondary uppercase tracking-widest">Loading claim...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-deep text-text-primary antialiased font-body-md min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-surface-deep h-screen flex flex-col relative overflow-hidden shadow-2xl sm:border-x sm:border-border-subtle">

        {/* Header */}
        <header className="h-16 shrink-0 bg-surface/90 backdrop-blur-md border-b border-border-subtle flex items-center px-4 sticky top-0 z-50">
          <Link
            href="/stitch/claims"
            className="w-10 h-10 flex items-center justify-center -ml-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-surface-container-highest transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 300" }}>arrow_back</span>
          </Link>
          <div className="ml-2 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-text-secondary uppercase tracking-widest">Incident File</span>
            <span className="font-headline-md text-headline-md text-text-primary leading-tight">{displayId}</span>
          </div>
          <div className="ml-auto flex items-center gap-2 bg-surface-container-highest px-3 py-1.5 rounded-full border border-border-subtle">
            <span className="w-2 h-2 rounded-full bg-accent-active shadow-[0_0_8px_rgba(226,30,81,0.8)] animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-text-primary uppercase tracking-wide">{claim.status}</span>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto pb-24">

          {error && (
            <div className="mx-4 mt-4 p-3 bg-error/10 border border-error/30 rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-error text-sm">error</span>
              <span className="font-body-sm text-body-sm text-error">{error}</span>
            </div>
          )}

          {/* Context card */}
          <section className="m-4 p-5 rounded-lg bg-surface border border-border-subtle relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h1 className="font-headline-lg text-headline-lg text-text-primary mb-1">{claim.title}</h1>
              <div className="flex items-center gap-2 text-text-secondary mb-6">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span className="font-body-sm text-body-sm">{claim.location}</span>
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-t border-border-subtle pt-4">
                {[
                  { label: 'Recorded Vector',  val: claim.recordedAt, accent: false },
                  { label: 'Primary Analyst',  val: claim.analyst,    accent: false },
                  { label: 'Risk Exposure',    val: claim.risk,       accent: true  },
                  { label: 'Telemetry Status', val: claim.telemetry,  accent: false },
                ].map((f) => (
                  <div key={f.label}>
                    <span className="block font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-0.5">{f.label}</span>
                    <span className={`block font-body-sm text-body-sm ${f.accent ? 'text-primary font-medium' : 'text-text-primary'}`}>{f.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Documentation stack */}
          <section className="mt-8">
            <div className="px-4 mb-3 flex items-end justify-between">
              <h2 className="font-headline-md text-headline-md text-text-primary">DOCUMENTATION STACK</h2>
              <span className="font-label-sm text-label-sm text-text-secondary">{claim.docs.length} ITEMS</span>
            </div>
            <div className="mx-4 border border-border-subtle rounded-lg bg-surface overflow-hidden">
              {claim.docs.map((d, i) => (
                <div key={d.name} className={`group flex items-start gap-3 p-4 hover:bg-surface-container-highest/30 transition-colors ${i < claim.docs.length - 1 ? 'border-b border-border-subtle' : ''}`}>
                  <div className="w-10 h-10 shrink-0 rounded bg-surface-container-highest border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{d.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-label-md text-label-md text-text-primary truncate pr-2">{d.name}</h3>
                      <span className="font-label-sm text-label-sm text-text-secondary shrink-0">{d.size}</span>
                    </div>
                    <div className="flex items-center justify-between bg-surface-deep px-2 py-1.5 rounded border border-border-subtle mt-2">
                      <code className="font-mono text-[10px] text-text-secondary truncate pr-2 tracking-tighter">SHA256: {d.hash}</code>
                      <button
                        className="text-text-secondary hover:text-primary transition-colors"
                        onClick={() => copyHash(d.hash)}
                        aria-label="Copy hash"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {copiedHash === d.hash ? 'check' : 'content_copy'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Audit trail */}
          <section className="mt-8 mb-6">
            <div className="px-4 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-text-secondary text-[20px]">history</span>
              <h2 className="font-headline-md text-headline-md text-text-primary">AUDIT TRAIL</h2>
            </div>
            <div className="mx-4 relative">
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-border-subtle"></div>
              <div className="space-y-6">
                {claim.trail.map((t) => (
                  <div key={t.label} className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-deep border border-border-subtle flex items-center justify-center z-10">
                      {t.active
                        ? <div className="w-2.5 h-2.5 rounded-full bg-accent-active shadow-[0_0_6px_rgba(226,30,81,0.8)]"></div>
                        : <div className="w-2 h-2 rounded-full bg-text-secondary"></div>
                      }
                    </div>
                    <div className={`border border-border-subtle rounded-lg p-3 ${t.active ? 'bg-surface' : 'bg-surface/50'}`}>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-label-md text-label-md text-text-primary">{t.label}</h3>
                        <span className="font-label-sm text-label-sm text-text-secondary whitespace-nowrap ml-2">{t.time}</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-text-secondary">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Fixed action bar */}
        <div className="absolute bottom-0 left-0 w-full bg-surface/95 backdrop-blur-md border-t border-border-subtle p-4 flex gap-3 z-50">
          <button className="flex-1 bg-surface-container-highest text-text-primary border border-border-subtle font-label-md text-label-md h-12 rounded-lg flex items-center justify-center gap-2 hover:bg-surface-bright transition-colors active:scale-[0.98]">
            <span className="material-symbols-outlined text-[18px]">gavel</span>
            ESCALATE
          </button>
          <button className="flex-[2] bg-primary-container text-text-primary font-label-md text-label-md h-12 rounded-lg flex items-center justify-center gap-2 hover:bg-inverse-primary transition-colors active:scale-[0.98]">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
}

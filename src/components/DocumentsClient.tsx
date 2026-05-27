'use client';

import { useState, useRef, useEffect } from 'react';
import type { Document } from '@/lib/api';
import { fetchDocuments, uploadDocument, getStoredToken } from '@/lib/api';
import { Badge, Button } from '@/components/ui';

const TYPE_ICON: Record<string, string> = {
  Estimate:   'receipt_long',
  Photos:     'photo_library',
  Invoice:    'description',
  Contract:   'handshake',
  Report:     'summarize',
  Legal:      'gavel',
  Policy:     'shield',
  Xactimate:  'rule',
  Other:      'folder',
};

const STATUS_VARIANT: Record<Document['status'], 'success' | 'warning' | 'error' | 'cyan'> = {
  approved:       'success',
  pending:        'warning',
  needs_revision: 'error',
  rejected:       'error',
};

const STATUS_LABEL: Record<Document['status'], string> = {
  approved:       'Approved',
  pending:        'Pending',
  needs_revision: 'Needs Revision',
  rejected:       'Rejected',
};

export type DocumentsMode = 'contractor' | 'adjuster' | 'policyholder';

interface DocumentRequest {
  id: string;
  from: string;
  description: string;
  claimId: string;
  urgent: boolean;
}

const PENDING_REQUESTS: DocumentRequest[] = [
  { id: 'req1', from: 'S. Reyes (Adjuster)', description: 'Pre-storm photos of roof — CLM-8841 N elevation', claimId: 'CLM-8841', urgent: true },
  { id: 'req2', from: 'Marcus Chen (Contractor)', description: 'Insurance declaration page', claimId: 'CLM-8841', urgent: false },
];

export default function DocumentsClient({
  initialDocs,
  mode,
  accent,
  fetchOnMount = false,
}: {
  initialDocs: Document[];
  mode: DocumentsMode;
  accent: string;
  fetchOnMount?: boolean;
}) {
  const [docs, setDocs] = useState(initialDocs);
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Approved' | 'Needs Revision'>('All');
  const [dragging, setDragging] = useState(false);
  const [shareToggles, setShareToggles] = useState<Record<string, { adjuster: boolean; policyholder: boolean }>>(
    Object.fromEntries(initialDocs.map(d => [d.id, { adjuster: d.sharedWithAdjuster, policyholder: d.sharedWithPolicyholder }]))
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!fetchOnMount) return;
    const token = getStoredToken();
    fetchDocuments(undefined, token).then(liveDocs => {
      if (liveDocs.length > 0) {
        setDocs(liveDocs);
        setShareToggles(Object.fromEntries(liveDocs.map(d => [d.id, { adjuster: d.sharedWithAdjuster, policyholder: d.sharedWithPolicyholder }])));
      }
    }).catch(() => {/* keep initial mock data */});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFiles(files: FileList | null) {
    if (!files) return;
    Array.from(files).forEach(file => {
      const role = mode === 'contractor' ? 'contractor' : mode === 'adjuster' ? 'adjuster' : 'policyholder';
      const optimistic: Document = {
        id: `DOC-NEW-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name: file.name,
        type: 'Other',
        claimId: null,
        size: `${(file.size / 1048576).toFixed(1)} MB`,
        uploadedBy: { name: 'You', role, initials: 'YU' },
        uploadedAt: 'Just now',
        status: 'pending',
        sharedWithAdjuster: false,
        sharedWithPolicyholder: false,
      };
      setDocs(prev => [optimistic, ...prev]);
      setShareToggles(prev => ({ ...prev, [optimistic.id]: { adjuster: false, policyholder: false } }));
      // Try to upload via API (fire-and-forget, optimistic doc already visible)
      uploadDocument(file, undefined, undefined, getStoredToken()).then(saved => {
        if (saved.id !== optimistic.id) {
          setDocs(prev => prev.map(d => d.id === optimistic.id ? saved : d));
        }
      }).catch(() => {/* keep optimistic */});
    });
  }

  function toggleShare(docId: string, key: 'adjuster' | 'policyholder') {
    setShareToggles(prev => ({
      ...prev,
      [docId]: { ...prev[docId], [key]: !prev[docId]?.[key] },
    }));
  }

  function approveDoc(docId: string) {
    setDocs(prev => prev.map(d => d.id === docId ? { ...d, status: 'approved' } : d));
  }

  function rejectDoc(docId: string) {
    setDocs(prev => prev.map(d => d.id === docId ? { ...d, status: 'needs_revision' } : d));
  }

  const FILTERS = ['All', 'Pending', 'Approved', 'Needs Revision'] as const;

  const filtered = filter === 'All' ? docs : docs.filter(d => {
    if (filter === 'Approved') return d.status === 'approved';
    if (filter === 'Pending') return d.status === 'pending';
    if (filter === 'Needs Revision') return d.status === 'needs_revision' || d.status === 'rejected';
    return true;
  });

  // Adjuster: xactimate files + review queue
  const xactFiles = docs.filter(d => d.type === 'Xactimate');
  const reviewQueue = docs.filter(d => d.status === 'pending' && d.type !== 'Xactimate');

  // Policyholder: shared docs
  const sharedWithMe = docs.filter(d => d.uploadedBy.role !== 'policyholder');

  return (
    <div className="flex flex-col gap-6">

      {/* ── Upload zone ─────────────────────────────────────────────── */}
      {mode !== 'adjuster' && (
        <div
          className={`border-2 border-dashed rounded-sm p-10 text-center transition-all cursor-pointer group ${dragging ? 'border-opacity-100' : 'border-[#2A2D35] hover:border-opacity-60'}`}
          style={{ background: dragging ? `${accent}06` : `${accent}03`, borderColor: dragging ? accent : undefined }}
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
          onClick={() => fileInputRef.current?.click()}
        >
          <span
            className="material-symbols-outlined text-[48px] block mx-auto mb-3 transition-colors"
            style={{ color: dragging ? accent : '#2A2D35' }}
          >
            cloud_upload
          </span>
          <p className="font-['Barlow_Condensed',sans-serif] text-[16px] tracking-wider uppercase text-[#8B95A1] mb-1">
            {dragging ? 'Drop to upload' : 'Drop files here to upload'}
          </p>
          <p className="font-['Manrope',sans-serif] text-[12px] text-[#8B95A1] mb-4">
            PDF, JPG, PNG, MP4, ZIP — Max 500 MB
          </p>
          <Button variant="ghost" accent={accent} icon="upload_file">Browse Files</Button>
          <input ref={fileInputRef} type="file" multiple className="hidden" onChange={e => handleFiles(e.target.files)} />
        </div>
      )}

      {/* ── Policyholder: pending requests ────────────────────────── */}
      {mode === 'policyholder' && (
        <div className="bg-[#1A1D23] border border-[#2A2D35] overflow-hidden" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: '#ff9100' }}>
          <div className="flex items-center gap-2.5 px-5 py-3 border-b border-[#2A2D35]">
            <span className="material-symbols-outlined text-[18px] text-[#ff9100]">pending</span>
            <h2 className="font-['Barlow_Condensed',sans-serif] text-[13px] font-semibold tracking-[0.1em] uppercase text-[#FFFFFF]">
              Document Requests ({PENDING_REQUESTS.length})
            </h2>
          </div>
          <div className="divide-y divide-[#2A2D35]">
            {PENDING_REQUESTS.map(req => (
              <div key={req.id} className="flex items-center gap-4 p-4">
                <span className="material-symbols-outlined text-[20px] text-[#ff9100]">request_page</span>
                <div className="flex-1">
                  <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF]">{req.description}</p>
                  <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">From: {req.from}</p>
                  <span className="font-['JetBrains_Mono',monospace] text-[9px]" style={{ color: accent }}>{req.claimId}</span>
                </div>
                {req.urgent && <Badge variant="error">Urgent</Badge>}
                <Button variant="primary" accent={accent} size="sm" icon="upload_file" onClick={() => fileInputRef.current?.click()}>
                  Upload Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Adjuster: Xactimate files ──────────────────────────────── */}
      {mode === 'adjuster' && xactFiles.length > 0 && (
        <div className="bg-[#1A1D23] border border-[#2A2D35] overflow-hidden" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: accent }}>
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#2A2D35]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[18px]" style={{ color: accent }}>rule</span>
              <h2 className="font-['Barlow_Condensed',sans-serif] text-[13px] font-semibold tracking-[0.1em] uppercase text-[#FFFFFF]">Xactimate Files ({xactFiles.length})</h2>
            </div>
            <Button variant="primary" accent={accent} size="sm" icon="upload_file" onClick={() => fileInputRef.current?.click()}>Upload Xactimate</Button>
            <input ref={fileInputRef} type="file" className="hidden" accept=".esx,.xml" onChange={e => handleFiles(e.target.files)} />
          </div>
          <div className="divide-y divide-[#2A2D35]">
            {xactFiles.map(d => (
              <DocRow key={d.id} d={d} mode={mode} accent={accent} shareToggles={shareToggles} toggleShare={toggleShare} approveDoc={approveDoc} rejectDoc={rejectDoc} />
            ))}
          </div>
        </div>
      )}

      {/* ── Adjuster: review queue ─────────────────────────────────── */}
      {mode === 'adjuster' && reviewQueue.length > 0 && (
        <div className="bg-[#1A1D23] border border-[#2A2D35] overflow-hidden" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: '#ff9100' }}>
          <div className="flex items-center gap-2.5 px-5 py-3 border-b border-[#2A2D35]">
            <span className="material-symbols-outlined text-[18px] text-[#ff9100]">rate_review</span>
            <h2 className="font-['Barlow_Condensed',sans-serif] text-[13px] font-semibold tracking-[0.1em] uppercase text-[#FFFFFF]">Pending Review ({reviewQueue.length})</h2>
          </div>
          <div className="divide-y divide-[#2A2D35]">
            {reviewQueue.map(d => (
              <DocRow key={d.id} d={d} mode={mode} accent={accent} shareToggles={shareToggles} toggleShare={toggleShare} approveDoc={approveDoc} rejectDoc={rejectDoc} showActions />
            ))}
          </div>
        </div>
      )}

      {/* ── Policyholder: shared with me ─────────────────────────── */}
      {mode === 'policyholder' && sharedWithMe.length > 0 && (
        <div className="bg-[#1A1D23] border border-[#2A2D35] overflow-hidden" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: accent }}>
          <div className="flex items-center gap-2.5 px-5 py-3 border-b border-[#2A2D35]">
            <span className="material-symbols-outlined text-[18px]" style={{ color: accent }}>folder_shared</span>
            <h2 className="font-['Barlow_Condensed',sans-serif] text-[13px] font-semibold tracking-[0.1em] uppercase text-[#FFFFFF]">Shared with You ({sharedWithMe.length})</h2>
          </div>
          <div className="divide-y divide-[#2A2D35]">
            {sharedWithMe.map(d => (
              <DocRow key={d.id} d={d} mode={mode} accent={accent} shareToggles={shareToggles} toggleShare={toggleShare} approveDoc={approveDoc} rejectDoc={rejectDoc} />
            ))}
          </div>
        </div>
      )}

      {/* ── Main document list ─────────────────────────────────────── */}
      <div className="bg-[#1A1D23] border border-[#2A2D35] overflow-hidden" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: accent }}>
        {/* Header + filter */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#2A2D35]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[18px]" style={{ color: accent }}>folder_open</span>
            <h2 className="font-['Barlow_Condensed',sans-serif] text-[13px] font-semibold tracking-[0.1em] uppercase text-[#FFFFFF]">
              {mode === 'policyholder' ? 'My Uploads' : 'All Documents'} ({filtered.length})
            </h2>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-2.5 py-1 font-['JetBrains_Mono',monospace] text-[9px] tracking-wider uppercase border transition-colors"
                style={
                  filter === f
                    ? { background: `${accent}18`, borderColor: accent, color: accent, borderRadius: '0.125rem' }
                    : { background: 'transparent', borderColor: '#2A2D35', color: '#8B95A1', borderRadius: '0.125rem' }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Doc list */}
        <div className="divide-y divide-[#2A2D35]">
          {filtered.length === 0 && (
            <p className="p-6 text-center font-['Manrope',sans-serif] text-[12px] text-[#8B95A1]">No documents match the current filter.</p>
          )}
          {filtered
            .filter(d => mode !== 'policyholder' || d.uploadedBy.role === 'policyholder')
            .map(d => (
              <DocRow key={d.id} d={d} mode={mode} accent={accent} shareToggles={shareToggles} toggleShare={toggleShare} approveDoc={approveDoc} rejectDoc={rejectDoc} showShareToggles={mode === 'contractor'} />
            ))}
        </div>
      </div>
    </div>
  );
}

function ShareToggle({ on, label, onChange, accent }: { on: boolean; label: string; onChange: () => void; accent: string }) {
  return (
    <button onClick={onChange} className="flex items-center gap-1.5 group">
      <div className="w-7 h-4 rounded-full relative transition-colors" style={{ background: on ? accent : '#2A2D35' }}>
        <div className="w-3 h-3 rounded-full bg-white absolute top-0.5 transition-all" style={{ left: on ? '14px' : '2px' }} />
      </div>
      <span className="font-['JetBrains_Mono',monospace] text-[8px] uppercase tracking-wider text-[#8B95A1] group-hover:text-[#FFFFFF] transition-colors">{label}</span>
    </button>
  );
}

function DocRow({
  d, mode, accent, shareToggles, toggleShare, approveDoc, rejectDoc, showActions, showShareToggles,
}: {
  d: Document;
  mode: DocumentsMode;
  accent: string;
  shareToggles: Record<string, { adjuster: boolean; policyholder: boolean }>;
  toggleShare: (id: string, key: 'adjuster' | 'policyholder') => void;
  approveDoc: (id: string) => void;
  rejectDoc: (id: string) => void;
  showActions?: boolean;
  showShareToggles?: boolean;
}) {
  const toggles = shareToggles[d.id] ?? { adjuster: false, policyholder: false };

  return (
    <div className="flex items-center gap-3 p-4 hover:bg-white/[0.02] transition-colors group">
      {/* Icon */}
      <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: `${accent}10`, border: `1px solid ${accent}20` }}>
        <span className="material-symbols-outlined text-[18px]" style={{ color: accent }}>{TYPE_ICON[d.type] ?? 'description'}</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF] truncate">{d.name}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
          <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{d.size}</span>
          <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{d.uploadedAt}</span>
          {d.claimId && <span className="font-['JetBrains_Mono',monospace] text-[9px]" style={{ color: accent }}>{d.claimId}</span>}
          <span className="font-['Manrope',sans-serif] text-[9px] text-[#8B95A1]">{d.uploadedBy.name}</span>
        </div>
      </div>

      {/* Share toggles (contractor only) */}
      {showShareToggles && (
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ShareToggle on={toggles.adjuster} label="Adjuster" onChange={() => toggleShare(d.id, 'adjuster')} accent={accent} />
          <ShareToggle on={toggles.policyholder} label="PH" onChange={() => toggleShare(d.id, 'policyholder')} accent={accent} />
        </div>
      )}

      {/* Type + status */}
      <div className="flex items-center gap-2 shrink-0">
        <Badge variant="tertiary">{d.type}</Badge>
        <Badge variant={STATUS_VARIANT[d.status]}>{STATUS_LABEL[d.status]}</Badge>
      </div>

      {/* Actions */}
      {showActions && mode === 'adjuster' && d.status === 'pending' ? (
        <div className="flex gap-1.5 shrink-0">
          <button onClick={() => approveDoc(d.id)} className="flex items-center gap-1 px-2.5 py-1 font-['JetBrains_Mono',monospace] text-[9px] uppercase tracking-wider transition-colors" style={{ background: 'rgba(74,222,128,0.1)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '0.125rem' }}>
            <span className="material-symbols-outlined text-[12px]">check_circle</span> Approve
          </button>
          <button onClick={() => rejectDoc(d.id)} className="flex items-center gap-1 px-2.5 py-1 font-['JetBrains_Mono',monospace] text-[9px] uppercase tracking-wider transition-colors" style={{ background: 'rgba(244,63,94,0.1)', color: '#f43f5e', border: '1px solid rgba(244,63,94,0.25)', borderRadius: '0.125rem' }}>
            <span className="material-symbols-outlined text-[12px]">cancel</span> Revise
          </button>
        </div>
      ) : (
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <button className="p-1.5 text-[#8B95A1] hover:text-[#FFFFFF] transition-colors">
            <span className="material-symbols-outlined text-[16px]">visibility</span>
          </button>
          <button className="p-1.5 text-[#8B95A1] hover:text-[#FFFFFF] transition-colors">
            <span className="material-symbols-outlined text-[16px]">download</span>
          </button>
        </div>
      )}
    </div>
  );
}

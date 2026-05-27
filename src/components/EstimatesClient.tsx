'use client';

import { useState } from 'react';
import type { Estimate, LineItem } from '@/lib/api';
import { Badge, Button, Card, CardHeader } from '@/components/ui';

const STATUS_VARIANT: Record<Estimate['status'], 'tertiary' | 'warning' | 'cyan' | 'success' | 'error'> = {
  draft:        'tertiary',
  submitted:    'warning',
  under_review: 'cyan',
  approved:     'success',
  rejected:     'error',
};

const STATUS_LABEL: Record<Estimate['status'], string> = {
  draft:        'Draft',
  submitted:    'Submitted',
  under_review: 'Under Review',
  approved:     'Approved',
  rejected:     'Rejected',
};

function newLineItem(): LineItem {
  return { id: `li-${Date.now()}`, description: '', quantity: 1, unit: 'lot', unitPrice: 0 };
}

function LineItemEditor({
  items,
  onChange,
  accent,
}: {
  items: LineItem[];
  onChange: (items: LineItem[]) => void;
  accent: string;
}) {
  function update(id: string, field: keyof LineItem, value: string | number) {
    onChange(items.map(li => li.id === id ? { ...li, [field]: value } : li));
  }
  function remove(id: string) { onChange(items.filter(li => li.id !== id)); }
  function add() { onChange([...items, newLineItem()]); }

  const subtotal = items.reduce((s, li) => s + li.quantity * li.unitPrice, 0);
  const tax = subtotal * 0.055;
  const total = subtotal + tax;

  return (
    <div>
      <div className="overflow-x-auto mb-3">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-[#2A2D35]">
              {['Description', 'Qty', 'Unit', 'Unit Price', 'Total', ''].map(h => (
                <th key={h} className="px-3 py-2 text-left font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-[0.1em]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2D35]">
            {items.map(li => (
              <tr key={li.id}>
                <td className="px-3 py-2">
                  <input
                    value={li.description}
                    onChange={e => update(li.id, 'description', e.target.value)}
                    placeholder="Line item description"
                    className="w-full bg-transparent font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF] placeholder:text-[#8B95A1] outline-none border-b border-[#2A2D35] focus:border-[#8B95A1] pb-0.5 min-w-[200px]"
                  />
                </td>
                <td className="px-3 py-2 w-16">
                  <input
                    type="number"
                    value={li.quantity}
                    onChange={e => update(li.id, 'quantity', parseFloat(e.target.value) || 0)}
                    className="w-full bg-transparent font-['JetBrains_Mono',monospace] text-[12px] text-[#FFFFFF] outline-none border-b border-[#2A2D35] focus:border-[#8B95A1] pb-0.5"
                  />
                </td>
                <td className="px-3 py-2 w-20">
                  <input
                    value={li.unit}
                    onChange={e => update(li.id, 'unit', e.target.value)}
                    className="w-full bg-transparent font-['JetBrains_Mono',monospace] text-[11px] text-[#8B95A1] outline-none border-b border-[#2A2D35] focus:border-[#8B95A1] pb-0.5"
                  />
                </td>
                <td className="px-3 py-2 w-24">
                  <div className="flex items-center gap-0.5">
                    <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#8B95A1]">$</span>
                    <input
                      type="number"
                      value={li.unitPrice}
                      onChange={e => update(li.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                      className="w-full bg-transparent font-['JetBrains_Mono',monospace] text-[12px] text-[#FFFFFF] outline-none border-b border-[#2A2D35] focus:border-[#8B95A1] pb-0.5"
                    />
                  </div>
                </td>
                <td className="px-3 py-2 w-24">
                  <span className="font-['JetBrains_Mono',monospace] text-[12px] font-bold text-[#FFFFFF]">
                    ${(li.quantity * li.unitPrice).toLocaleString()}
                  </span>
                </td>
                <td className="px-3 py-2 w-8">
                  <button onClick={() => remove(li.id)} className="text-[#8B95A1] hover:text-[#f43f5e] transition-colors">
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={add}
        className="flex items-center gap-1.5 font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-wider px-3 py-1.5 mb-4 transition-colors"
        style={{ color: accent, border: `1px dashed ${accent}40`, borderRadius: '0.125rem' }}
      >
        <span className="material-symbols-outlined text-[14px]">add</span>
        Add Line Item
      </button>

      {/* Totals */}
      <div className="flex justify-end">
        <div className="min-w-[200px] space-y-1.5">
          {[
            { label: 'Subtotal', val: subtotal },
            { label: 'Tax (5.5%)', val: tax },
          ].map(row => (
            <div key={row.label} className="flex justify-between items-center">
              <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">{row.label}</span>
              <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#FFFFFF]">${row.val.toLocaleString('en', { minimumFractionDigits: 2 })}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-1.5 border-t border-[#2A2D35]">
            <span className="font-['Barlow_Condensed',sans-serif] text-[13px] font-bold text-[#FFFFFF] uppercase tracking-wider">Total</span>
            <span className="font-['Barlow_Condensed',sans-serif] text-[20px] font-bold" style={{ color: accent }}>
              ${total.toLocaleString('en', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EstimatesClient({
  initialEstimates,
  accent,
}: {
  initialEstimates: Estimate[];
  accent: string;
}) {
  const [estimates, setEstimates] = useState(initialEstimates);
  const [showNew, setShowNew] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newLineItems, setNewLineItems] = useState<LineItem[]>([newLineItem()]);
  const [newClaim, setNewClaim] = useState('CLM-8841');
  const [newProject, setNewProject] = useState('');

  function submitNew() {
    if (!newProject.trim()) return;
    const subtotal = newLineItems.reduce((s, li) => s + li.quantity * li.unitPrice, 0);
    const tax = subtotal * 0.055;
    const est: Estimate = {
      id: `EST-${4410 + estimates.length}`,
      claimId: newClaim,
      project: newProject,
      status: 'draft',
      lineItems: newLineItems,
      subtotal,
      tax,
      total: subtotal + tax,
      submittedAt: null,
      updatedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      adjuster: 'S. Reyes',
    };
    setEstimates(prev => [est, ...prev]);
    setShowNew(false);
    setNewLineItems([newLineItem()]);
    setNewProject('');
  }

  function submitEst(id: string) {
    setEstimates(prev => prev.map(e => e.id === id ? { ...e, status: 'submitted', submittedAt: new Date().toLocaleDateString() } : e));
  }

  return (
    <div className="flex flex-col gap-5">

      {/* New Estimate form */}
      {showNew && (
        <Card accent={accent}>
          <CardHeader title="New Estimate" icon="add_circle" accent={accent} action={
            <button onClick={() => setShowNew(false)} className="p-1 text-[#8B95A1] hover:text-[#FFFFFF]">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          } />
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-1.5">Claim ID</label>
                <select
                  value={newClaim}
                  onChange={e => setNewClaim(e.target.value)}
                  className="w-full bg-[#0D0F11] border border-[#2A2D35] px-3 py-2 font-['JetBrains_Mono',monospace] text-[12px] text-[#FFFFFF] outline-none focus:border-[#8B95A1] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                >
                  {['CLM-8841', 'CLM-8872', 'CLM-8933', 'CLM-8958'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-1.5">Project Name</label>
                <input
                  value={newProject}
                  onChange={e => setNewProject(e.target.value)}
                  placeholder="e.g. Riverside Commons"
                  className="w-full bg-[#0D0F11] border border-[#2A2D35] px-3 py-2 font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF] placeholder:text-[#8B95A1] outline-none focus:border-[#8B95A1] transition-colors"
                  style={{ borderRadius: '0.125rem' }}
                />
              </div>
            </div>

            <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-3">Line Items</p>
            <LineItemEditor items={newLineItems} onChange={setNewLineItems} accent={accent} />

            <div className="flex gap-3 mt-5 pt-4 border-t border-[#2A2D35]">
              <Button variant="ghost" accent={accent} icon="save" onClick={() => { submitNew(); }}>Save Draft</Button>
              <Button variant="primary" accent={accent} icon="send" onClick={() => { submitNew(); }}>Submit Estimate</Button>
            </div>
          </div>
        </Card>
      )}

      {/* Estimate list */}
      {estimates.map(e => (
        <Card key={e.id} accent={e.status === 'approved' ? '#4ade80' : e.status === 'rejected' ? '#f43f5e' : e.status === 'under_review' ? accent : undefined}>
          <div className="p-5">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-['JetBrains_Mono',monospace] text-[10px]" style={{ color: accent }}>{e.id}</span>
                  <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{e.claimId}</span>
                  <Badge variant={STATUS_VARIANT[e.status]}>{STATUS_LABEL[e.status]}</Badge>
                </div>
                <h3 className="font-['Barlow_Condensed',sans-serif] text-[18px] font-bold text-[#FFFFFF]">{e.project}</h3>
                <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">
                  Adjuster: {e.adjuster} · Updated: {e.updatedAt}
                  {e.submittedAt && ` · Submitted: ${e.submittedAt}`}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-['Barlow_Condensed',sans-serif] text-[24px] font-bold text-[#FFFFFF]">${e.total.toLocaleString()}</p>
                <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">incl. tax</p>
              </div>
            </div>

            {/* Revision note */}
            {e.revisionNote && (
              <div className="flex gap-2 p-3 mb-3" style={{ background: 'rgba(255,145,0,0.06)', border: '1px solid rgba(255,145,0,0.25)', borderLeft: '2px solid #ff9100', borderRadius: '0.125rem' }}>
                <span className="material-symbols-outlined text-[16px] text-[#ff9100] mt-0.5 shrink-0">edit_note</span>
                <div>
                  <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#ff9100] uppercase tracking-widest mb-0.5">Revision Requested</p>
                  <p className="font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF]">{e.revisionNote}</p>
                </div>
              </div>
            )}

            {/* Expand: line items */}
            <button
              onClick={() => setExpandedId(expandedId === e.id ? null : e.id)}
              className="flex items-center gap-1.5 font-['JetBrains_Mono',monospace] text-[9px] uppercase tracking-wider text-[#8B95A1] hover:text-[#FFFFFF] transition-colors mb-3"
            >
              <span className="material-symbols-outlined text-[14px]">{expandedId === e.id ? 'expand_less' : 'expand_more'}</span>
              {expandedId === e.id ? 'Hide' : `Show ${e.lineItems.length} line items`}
            </button>

            {expandedId === e.id && (
              <div className="mb-3 overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-[#2A2D35]">
                      {['Description', 'Qty', 'Unit', 'Unit Price', 'Total'].map(h => (
                        <th key={h} className="px-3 py-2 text-left font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-[0.1em]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2A2D35]">
                    {e.lineItems.map(li => (
                      <tr key={li.id} className="hover:bg-white/[0.02]">
                        <td className="px-3 py-2.5"><span className="font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF]">{li.description}</span></td>
                        <td className="px-3 py-2.5"><span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#FFFFFF]">{li.quantity}</span></td>
                        <td className="px-3 py-2.5"><span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">{li.unit}</span></td>
                        <td className="px-3 py-2.5"><span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#FFFFFF]">${li.unitPrice.toLocaleString()}</span></td>
                        <td className="px-3 py-2.5"><span className="font-['Barlow_Condensed',sans-serif] text-[13px] font-bold text-[#FFFFFF]">${(li.quantity * li.unitPrice).toLocaleString()}</span></td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-[#2A2D35]">
                      <td colSpan={4} className="px-3 py-2 text-right font-['Barlow_Condensed',sans-serif] text-[11px] text-[#8B95A1] uppercase tracking-wider">Total</td>
                      <td className="px-3 py-2"><span className="font-['Barlow_Condensed',sans-serif] text-[16px] font-bold" style={{ color: accent }}>${e.total.toLocaleString()}</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-2 pt-3 border-t border-[#2A2D35]">
              <Button variant="ghost" accent={accent} size="sm" icon="visibility">View</Button>
              {e.status === 'draft' && (
                <Button variant="ghost" accent={accent} size="sm" icon="edit">Edit</Button>
              )}
              {(e.status === 'draft' || e.status === 'rejected') && (
                <Button variant="primary" accent={accent} size="sm" icon="send" onClick={() => submitEst(e.id)}>Submit</Button>
              )}
              <Button variant="ghost" accent={accent} size="sm" icon="picture_as_pdf">Export PDF</Button>
            </div>
          </div>
        </Card>
      ))}

      {/* New estimate button (bottom) */}
      {!showNew && (
        <button
          onClick={() => setShowNew(true)}
          className="flex items-center justify-center gap-2 p-4 font-['Barlow_Condensed',sans-serif] text-[12px] tracking-[0.1em] uppercase transition-all hover:opacity-80"
          style={{ border: `1px dashed ${accent}40`, color: accent, borderRadius: '0.125rem' }}
        >
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          New Estimate
        </button>
      )}
    </div>
  );
}

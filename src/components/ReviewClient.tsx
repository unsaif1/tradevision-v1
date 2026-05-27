'use client';

import { useState } from 'react';
import type { Claim, Estimate } from '@/lib/api';
import { Badge, Button, Card, CardHeader, ProgressBar } from '@/components/ui';

const PINK = '#E21E51';

type Decision = 'approved' | 'revision' | 'rejected';

interface ReviewState {
  decision: Decision | null;
  note: string;
  settled: boolean;
  settlementAmount: number;
}

function XactimateLineItems({ claimId }: { claimId: string }) {
  const XACT: Record<string, { desc: string; amount: number }[]> = {
    'CLM-8841': [
      { desc: 'TPO Membrane 60-mil (4,200 sq ft)', amount: 15960 },
      { desc: 'Labor — Tear-Off', amount: 8400 },
      { desc: 'Flashing — All Penetrations', amount: 5800 },
      { desc: 'Ridge Cap — Aluminum', amount: 2940 },
      { desc: 'Disposal / Haul-Away', amount: 2800 },
      { desc: 'Decking Replacement (800 sq ft)', amount: 4300 },
    ],
    'CLM-8872': [
      { desc: 'Arch. Shingles — Charcoal (28 sq)', amount: 7700 },
      { desc: 'Labor — Tear-Off', amount: 5600 },
      { desc: 'Labor — Install Shingles', amount: 0 },
      { desc: 'Ridge Cap Shingles', amount: 1600 },
      { desc: 'Gutters — Aluminum 5"', amount: 2200 },
    ],
    'CLM-8933': [
      { desc: 'EPDM Membrane (7,100 sq ft)', amount: 24850 },
      { desc: 'Labor — Multi-Unit', amount: 17200 },
      { desc: 'Drainage / Scupper Repair', amount: 8200 },
      { desc: 'Insulation Board', amount: 4550 },
    ],
  };
  return XACT[claimId] ?? [];
}

export default function ReviewClient({
  claims,
  estimates,
}: {
  claims: Claim[];
  estimates: Estimate[];
}) {
  const reviewable = claims.filter(c => c.status === 'active' && ['Review', 'Estimate', 'Approval'].includes(c.stage));

  const [states, setStates] = useState<Record<string, ReviewState>>(
    Object.fromEntries(reviewable.map(c => [c.id, { decision: null, note: '', settled: false, settlementAmount: c.xactimateAmount }]))
  );

  function update(claimId: string, patch: Partial<ReviewState>) {
    setStates(prev => ({ ...prev, [claimId]: { ...prev[claimId], ...patch } }));
  }

  function decide(claimId: string, dec: Decision) {
    const cur = states[claimId];
    if (cur.decision === dec) {
      update(claimId, { decision: null });
    } else {
      update(claimId, { decision: dec, settled: dec === 'approved' });
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {reviewable.map(claim => {
        const est = estimates.find(e => e.claimId === claim.id && ['submitted', 'under_review'].includes(e.status));
        const xact = XactimateLineItems({ claimId: claim.id }) as { desc: string; amount: number }[];
        const state = states[claim.id];
        const delta = est ? est.total - claim.xactimateAmount : 0;
        const xactTotal = xact.reduce((s, x) => s + x.amount, 0);

        return (
          <Card key={claim.id} accent={
            state.decision === 'approved' ? '#4ade80' :
            state.decision === 'rejected' ? '#f43f5e' :
            state.decision === 'revision' ? '#ff9100' : PINK
          }>
            <div className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-['JetBrains_Mono',monospace] text-[10px]" style={{ color: PINK }}>{claim.id}</span>
                    <Badge variant="tertiary">{claim.stage}</Badge>
                    <Badge variant="tertiary">{claim.peril}</Badge>
                    {state.decision && (
                      <Badge variant={state.decision === 'approved' ? 'success' : state.decision === 'rejected' ? 'error' : 'warning'}>
                        {state.decision === 'approved' ? 'Approved' : state.decision === 'rejected' ? 'Rejected' : 'Revision Requested'}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-['Barlow_Condensed',sans-serif] text-[20px] font-bold text-[#FFFFFF]">{claim.project}</h3>
                  <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">
                    Contractor: {claim.contractor} · PH: {claim.policyholder}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest">Delta</p>
                  <p className="font-['Barlow_Condensed',sans-serif] text-[20px] font-bold" style={{ color: delta > 0 ? '#ff9100' : '#4ade80' }}>
                    {delta >= 0 ? '+' : ''}${delta.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Side-by-side comparison */}
              {est && (
                <div className="overflow-x-auto mb-5">
                  <table className="w-full min-w-[560px]">
                    <thead>
                      <tr className="border-b border-[#2A2D35]">
                        <th className="px-3 py-2 text-left font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-[0.1em]">Line Item</th>
                        <th className="px-3 py-2 text-right font-['JetBrains_Mono',monospace] text-[9px] uppercase tracking-[0.1em]" style={{ color: PINK }}>Contractor</th>
                        <th className="px-3 py-2 text-right font-['JetBrains_Mono',monospace] text-[9px] text-[#4ade80] uppercase tracking-[0.1em]">Xactimate</th>
                        <th className="px-3 py-2 text-right font-['JetBrains_Mono',monospace] text-[9px] text-[#ff9100] uppercase tracking-[0.1em]">Δ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2A2D35]">
                      {est.lineItems.map((li, i) => {
                        const xa = xact[i];
                        const diff = xa ? li.quantity * li.unitPrice - xa.amount : null;
                        return (
                          <tr key={li.id} className="hover:bg-white/[0.02]">
                            <td className="px-3 py-2.5"><span className="font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF]">{li.description}</span></td>
                            <td className="px-3 py-2.5 text-right"><span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#FFFFFF]">${(li.quantity * li.unitPrice).toLocaleString()}</span></td>
                            <td className="px-3 py-2.5 text-right"><span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#FFFFFF]">{xa ? `$${xa.amount.toLocaleString()}` : '—'}</span></td>
                            <td className="px-3 py-2.5 text-right">
                              {diff !== null && (
                                <span className="font-['JetBrains_Mono',monospace] text-[11px]" style={{ color: diff > 0 ? '#ff9100' : diff < 0 ? '#4ade80' : '#8B95A1' }}>
                                  {diff === 0 ? '—' : `${diff > 0 ? '+' : ''}$${Math.abs(diff).toLocaleString()}`}
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="border-t-2 border-[#2A2D35]">
                        <td className="px-3 py-2 font-['Barlow_Condensed',sans-serif] text-[11px] text-[#8B95A1] uppercase tracking-wider">Total</td>
                        <td className="px-3 py-2 text-right"><span className="font-['Barlow_Condensed',sans-serif] text-[15px] font-bold" style={{ color: PINK }}>${est.total.toLocaleString()}</span></td>
                        <td className="px-3 py-2 text-right"><span className="font-['Barlow_Condensed',sans-serif] text-[15px] font-bold text-[#4ade80]">${xactTotal.toLocaleString()}</span></td>
                        <td className="px-3 py-2 text-right"><span className="font-['Barlow_Condensed',sans-serif] text-[15px] font-bold text-[#ff9100]">{delta >= 0 ? '+' : ''}${delta.toLocaleString()}</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Revision note input */}
              {state.decision === 'revision' && (
                <div className="mb-4">
                  <label className="block font-['JetBrains_Mono',monospace] text-[9px] text-[#ff9100] uppercase tracking-widest mb-1.5">Revision Note (sent to contractor)</label>
                  <textarea
                    rows={3}
                    value={state.note}
                    onChange={e => update(claim.id, { note: e.target.value })}
                    placeholder="Describe what needs to be revised..."
                    className="w-full bg-[#0D0F11] border border-[#ff9100]/40 px-3 py-2 font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF] placeholder:text-[#8B95A1] outline-none focus:border-[#ff9100] transition-colors resize-none"
                    style={{ borderRadius: '0.125rem' }}
                  />
                </div>
              )}

              {/* Settlement input */}
              {state.decision === 'approved' && (
                <div className="flex items-center gap-4 mb-4 p-3" style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '0.125rem' }}>
                  <span className="material-symbols-outlined text-[20px] text-[#4ade80]">check_circle</span>
                  <div className="flex items-center gap-3">
                    <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF]">ACV Settlement Amount</p>
                    <div className="flex items-center gap-1 bg-[#0D0F11] border border-[#2A2D35] px-3 py-1.5" style={{ borderRadius: '0.125rem' }}>
                      <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#8B95A1]">$</span>
                      <input
                        type="number"
                        value={state.settlementAmount}
                        onChange={e => update(claim.id, { settlementAmount: parseFloat(e.target.value) || 0 })}
                        className="bg-transparent font-['JetBrains_Mono',monospace] text-[14px] font-bold text-[#4ade80] outline-none w-28"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex gap-3 pt-3 border-t border-[#2A2D35]">
                <button
                  onClick={() => decide(claim.id, 'approved')}
                  className="flex-1 flex items-center justify-center gap-2 py-2 font-['Barlow_Condensed',sans-serif] text-[12px] tracking-[0.08em] uppercase transition-all"
                  style={{
                    background: state.decision === 'approved' ? '#4ade80' : 'rgba(74,222,128,0.1)',
                    color: state.decision === 'approved' ? '#0D0F11' : '#4ade80',
                    border: '1px solid rgba(74,222,128,0.3)',
                    borderRadius: '0.125rem',
                  }}
                >
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {state.decision === 'approved' ? '✓ Approved' : 'Approve'}
                </button>
                <button
                  onClick={() => decide(claim.id, 'revision')}
                  className="flex-1 flex items-center justify-center gap-2 py-2 font-['Barlow_Condensed',sans-serif] text-[12px] tracking-[0.08em] uppercase transition-all"
                  style={{
                    background: state.decision === 'revision' ? '#ff9100' : 'rgba(255,145,0,0.1)',
                    color: state.decision === 'revision' ? '#0D0F11' : '#ff9100',
                    border: '1px solid rgba(255,145,0,0.3)',
                    borderRadius: '0.125rem',
                  }}
                >
                  <span className="material-symbols-outlined text-[16px]">edit_note</span>
                  Request Revision
                </button>
                <button
                  onClick={() => decide(claim.id, 'rejected')}
                  className="flex-1 flex items-center justify-center gap-2 py-2 font-['Barlow_Condensed',sans-serif] text-[12px] tracking-[0.08em] uppercase transition-all"
                  style={{
                    background: state.decision === 'rejected' ? '#f43f5e' : 'rgba(244,63,94,0.1)',
                    color: state.decision === 'rejected' ? '#0D0F11' : '#f43f5e',
                    border: '1px solid rgba(244,63,94,0.3)',
                    borderRadius: '0.125rem',
                  }}
                >
                  <span className="material-symbols-outlined text-[16px]">cancel</span>
                  Reject
                </button>
              </div>

              {/* Confirm */}
              {state.decision && (
                <div className="mt-3 flex justify-end">
                  <Button variant="primary" accent={state.decision === 'approved' ? '#4ade80' : state.decision === 'revision' ? '#ff9100' : '#f43f5e'} icon="send" size="sm">
                    Confirm & Notify Contractor
                  </Button>
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

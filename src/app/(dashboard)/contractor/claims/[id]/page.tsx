import PortalLayout from '@/components/PortalLayout';
import MessagesClient from '@/components/MessagesClient';
import { Badge, Card, CardHeader, SectionHeader, Button, ProgressBar } from '@/components/ui';
import { CLAIMS, THREADS, ESTIMATES, PARTICIPANTS } from '@/lib/api';

const CYAN = '#00D4AA';
const STAGES = ['Filed', 'Inspection', 'Estimate', 'Review', 'Approval', 'Settlement'] as const;

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ContractorClaimDetailPage({ params }: Props) {
  const { id } = await params;
  const claim = CLAIMS.find(c => c.id === id) ?? CLAIMS[0];
  const estimate = ESTIMATES.find(e => e.claimId === claim.id);
  const claimThreads = THREADS.filter(t => t.claimId === claim.id);
  const stageIdx = STAGES.indexOf(claim.stage as typeof STAGES[number]);

  return (
    <PortalLayout role="contractor">
      <SectionHeader
        title={claim.project}
        subtitle={claim.address}
        action={
          <div className="flex gap-2">
            <Button variant="ghost" accent={CYAN} icon="folder_open">Documents</Button>
            <Button variant="primary" accent={CYAN} icon="receipt_long">Add Estimate</Button>
          </div>
        }
      />

      {/* Claim header card */}
      <Card accent={CYAN} className="mb-6">
        <div className="p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
            {[
              { label: 'Claim ID',     val: claim.id,         color: CYAN },
              { label: 'Peril',        val: claim.peril,      color: '#8B95A1' },
              { label: 'Adjuster',     val: claim.adjuster,   color: '#E21E51' },
              { label: 'Filed',        val: claim.filedDate,  color: '#8B95A1' },
            ].map(f => (
              <div key={f.label}>
                <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-0.5">{f.label}</p>
                <p className="font-['Manrope',sans-serif] text-[13px] font-semibold" style={{ color: f.color }}>{f.val}</p>
              </div>
            ))}
          </div>

          {/* Stage progress */}
          <div className="mb-1">
            <div className="flex justify-between mb-2.5">
              {STAGES.map((s, i) => (
                <div key={s} className="flex-1 text-center">
                  <div
                    className="w-3 h-3 rounded-full mx-auto mb-1.5 border-2 transition-colors"
                    style={{ background: i < stageIdx ? CYAN : i === stageIdx ? CYAN : 'transparent', borderColor: i <= stageIdx ? CYAN : '#2A2D35' }}
                  />
                  <span className="font-['JetBrains_Mono',monospace] text-[8px] uppercase tracking-wider" style={{ color: i === stageIdx ? CYAN : '#8B95A1' }}>{s}</span>
                </div>
              ))}
            </div>
            <ProgressBar value={stageIdx + 1} max={STAGES.length} showPct={false} accent={CYAN} />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        {/* Estimate summary */}
        {estimate && (
          <div className="lg:col-span-1">
            <Card accent={CYAN}>
              <CardHeader title="Current Estimate" icon="receipt_long" accent={CYAN} />
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['JetBrains_Mono',monospace] text-[10px]" style={{ color: CYAN }}>{estimate.id}</span>
                  <Badge variant={
                    estimate.status === 'approved' ? 'success' :
                    estimate.status === 'rejected' ? 'error' :
                    estimate.status === 'under_review' ? 'cyan' : 'warning'
                  }>
                    {estimate.status.replace('_', ' ')}
                  </Badge>
                </div>
                <p className="font-['Barlow_Condensed',sans-serif] text-[28px] font-bold leading-none mb-1" style={{ color: CYAN }}>
                  ${estimate.total.toLocaleString()}
                </p>
                <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] mb-3">
                  {estimate.lineItems.length} line items · Updated {estimate.updatedAt}
                </p>
                {estimate.revisionNote && (
                  <div className="p-2.5 mb-3" style={{ background: 'rgba(255,145,0,0.08)', border: '1px solid rgba(255,145,0,0.2)', borderRadius: '0.125rem' }}>
                    <p className="font-['JetBrains_Mono',monospace] text-[8px] text-[#ff9100] uppercase tracking-widest mb-0.5">Revision Note</p>
                    <p className="font-['Manrope',sans-serif] text-[11px] text-[#FFFFFF]">{estimate.revisionNote}</p>
                  </div>
                )}
                <Button variant="ghost" accent={CYAN} size="sm" icon="visibility" className="w-full justify-center">View Estimate</Button>
              </div>
            </Card>
          </div>
        )}

        {/* Parties */}
        <div className={estimate ? 'lg:col-span-2' : 'lg:col-span-3'}>
          <Card>
            <CardHeader title="Claim Parties" icon="groups" accent={CYAN} />
            <div className="divide-y divide-[#2A2D35]">
              {[
                { label: 'Contractor',     name: claim.contractor,   role: 'contractor',   color: CYAN },
                { label: 'Adjuster',       name: claim.adjuster,     role: 'adjuster',     color: '#E21E51' },
                { label: 'Policyholder',   name: claim.policyholder, role: 'policyholder', color: '#e21e51' },
              ].map(p => (
                <div key={p.role} className="flex items-center gap-3 p-4">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center font-['Barlow_Condensed',sans-serif] font-bold text-[13px] shrink-0"
                    style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                  >
                    {p.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF]">{p.name}</p>
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest">{p.label}</p>
                  </div>
                  <Button variant="ghost" accent={p.color as string} size="sm" icon="chat">Message</Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Threaded messages for this claim */}
      <div>
        <h2 className="font-['Barlow_Condensed',sans-serif] text-[16px] font-bold tracking-[0.08em] uppercase text-[#FFFFFF] mb-3">
          Claim Messages
        </h2>
        {claimThreads.length > 0 ? (
          <MessagesClient
            threads={claimThreads}
            me={PARTICIPANTS.marcus}
            accent={CYAN}
          />
        ) : (
          <div className="flex items-center justify-center p-10 bg-[#1A1D23] border border-[#2A2D35]" style={{ borderRadius: '0.125rem' }}>
            <div className="text-center">
              <span className="material-symbols-outlined text-[40px] text-[#2A2D35] block mb-2">chat</span>
              <p className="font-['Manrope',sans-serif] text-[12px] text-[#8B95A1]">No messages for this claim yet.</p>
              <Button variant="ghost" accent={CYAN} size="sm" icon="edit_note" className="mt-3">Start Thread</Button>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}

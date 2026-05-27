import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, SectionHeader, Button, ProgressBar } from '@/components/ui';

const RED = '#e21e51';

const STAGES = ['Filed', 'Inspection', 'Estimate', 'Review', 'Approval', 'Settlement'];

const CLAIMS = [
  {
    id: 'CLM-8841',
    address: '1420 NW 12th Ave, Miami FL 33125',
    peril: 'Wind / Hail',
    filed: 'Oct 14, 2024',
    adjuster: 'S. Reyes',
    contractor: 'Marcus Chen · Chen Roofing',
    stage: 'Approval',
    status: 'active',
    estimateAmount: 42850,
    notes: 'Estimate approved. Settlement authorization form is ready for your signature.',
  },
  {
    id: 'CLM-8904',
    address: '7810 Commerce Pkwy, Miami FL 33126',
    peril: 'Fire / Smoke',
    filed: 'Oct 3, 2024',
    adjuster: 'M. Torres',
    contractor: 'Marcus Chen · Chen Roofing',
    stage: 'Settlement',
    status: 'closed',
    estimateAmount: 98700,
    notes: 'Claim fully settled. ACV payment of $98,700 issued Oct 10.',
  },
];

const STATUS_VARIANT: Record<string, 'primary' | 'success'> = {
  active: 'primary',
  closed: 'success',
};

export default function PolicyholderClaimsPage() {
  return (
    <PortalLayout role="policyholder">
      <SectionHeader
        title="My Claims"
        subtitle="All claims associated with your policy"
        action={<Button variant="primary" accent={RED} icon="add">File New Claim</Button>}
      />

      {/* Summary */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: 'Total Claims', val: CLAIMS.length, color: RED },
          { label: 'Active', val: CLAIMS.filter(c => c.status === 'active').length, color: '#ff9100' },
          { label: 'Settled', val: CLAIMS.filter(c => c.status === 'closed').length, color: '#4ade80' },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1D23] border border-[#2A2D35] p-4 text-center" style={{ borderRadius: '0.125rem' }}>
            <p className="font-['Barlow_Condensed',sans-serif] text-[32px] font-bold leading-none mb-1" style={{ color: s.color }}>{s.val}</p>
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        {CLAIMS.map((c) => {
          const idx = STAGES.indexOf(c.stage);
          return (
            <Card key={c.id} accent={c.status === 'active' ? RED : undefined}>
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-['JetBrains_Mono',monospace] text-[11px]" style={{ color: RED }}>{c.id}</span>
                      <Badge variant={STATUS_VARIANT[c.status]}>{c.status}</Badge>
                      <Badge variant="tertiary">{c.peril}</Badge>
                    </div>
                    <h3 className="font-['Barlow_Condensed',sans-serif] text-[20px] font-bold text-[#FFFFFF]">{c.address}</h3>
                    <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1] mt-0.5">Filed {c.filed}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-0.5">Estimate</p>
                    <p className="font-['Barlow_Condensed',sans-serif] text-[24px] font-bold text-[#FFFFFF]">${c.estimateAmount.toLocaleString()}</p>
                  </div>
                </div>

                {/* Stage progress */}
                <div className="mb-5">
                  <div className="flex justify-between mb-2.5">
                    {STAGES.map((s, i) => (
                      <div key={s} className="flex-1 text-center">
                        <div
                          className="w-3 h-3 rounded-full mx-auto mb-1.5 border-2"
                          style={{
                            background: i < idx ? RED : i === idx ? RED : 'transparent',
                            borderColor: i <= idx ? RED : '#2A2D35',
                          }}
                        />
                        <span className="font-['JetBrains_Mono',monospace] text-[9px] uppercase tracking-wider" style={{ color: i === idx ? RED : '#8B95A1' }}>
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                  <ProgressBar value={idx + 1} max={STAGES.length} showPct={false} accent={RED} />
                </div>

                {/* Parties */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#0D0F11] border border-[#2A2D35] p-3 rounded-sm">
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-1">Your Adjuster</p>
                    <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF]">{c.adjuster}</p>
                  </div>
                  <div className="bg-[#0D0F11] border border-[#2A2D35] p-3 rounded-sm">
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-1">Contractor</p>
                    <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF]">{c.contractor}</p>
                  </div>
                </div>

                {/* Note */}
                {c.notes && (
                  <div
                    className="p-3 mb-4"
                    style={{ background: `${RED}08`, border: `1px solid ${RED}30`, borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: RED }}
                  >
                    <p className="font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF]">{c.notes}</p>
                  </div>
                )}

                <div className="flex gap-2 pt-3 border-t border-[#2A2D35]">
                  <Button variant="ghost" accent={RED} size="sm" icon="folder_open" className="flex-1 justify-center">View Documents</Button>
                  <Button variant="ghost" accent={RED} size="sm" icon="forum" className="flex-1 justify-center">Message Adjuster</Button>
                  {c.status === 'active' && (
                    <Button variant="primary" accent={RED} size="sm" icon="draw" className="flex-1 justify-center">Sign & Approve</Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </PortalLayout>
  );
}

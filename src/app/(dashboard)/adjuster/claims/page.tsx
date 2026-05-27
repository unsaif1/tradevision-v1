import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, SectionHeader, Button, ProgressBar } from '@/components/ui';

const PINK = '#E21E51';

const STAGES = ['Filed', 'Inspection', 'Estimate', 'Review', 'Approval', 'Settlement'];

const CLAIMS = [
  {
    id: 'CLM-8841',
    project: 'Riverside Commons',
    contractor: 'Marcus Chen',
    policyholder: 'R. Callahan',
    amount: 42850,
    stage: 'Approval',
    status: 'active',
    filed: 'Oct 14',
    lastActivity: 'Oct 27',
    adjuster: 'S. Reyes',
    peril: 'Wind / Hail',
  },
  {
    id: 'CLM-8872',
    project: 'Highland Oaks Estate',
    contractor: 'Lupita Garza',
    policyholder: 'T. Okonkwo',
    amount: 18300,
    stage: 'Estimate',
    status: 'active',
    filed: 'Oct 21',
    lastActivity: 'Oct 26',
    adjuster: 'M. Torres',
    peril: 'Hail',
  },
  {
    id: 'CLM-8933',
    project: 'Lakeview Townhomes',
    contractor: 'Jerome Banks',
    policyholder: 'HOA Board',
    amount: 61900,
    stage: 'Review',
    status: 'active',
    filed: 'Oct 20',
    lastActivity: 'Oct 24',
    adjuster: 'S. Reyes',
    peril: 'Storm Damage',
  },
  {
    id: 'CLM-8958',
    project: 'Pinecrest Industrial',
    contractor: 'Travis Okafor',
    policyholder: 'PCI Holdings',
    amount: 78200,
    stage: 'Inspection',
    status: 'active',
    filed: 'Oct 25',
    lastActivity: 'Oct 25',
    adjuster: 'K. Walsh',
    peril: 'Hurricane',
  },
  {
    id: 'CLM-8904',
    project: 'Meridian Warehouse',
    contractor: 'Marcus Chen',
    policyholder: 'MWG LLC',
    amount: 98700,
    stage: 'Settlement',
    status: 'closed',
    filed: 'Oct 3',
    lastActivity: 'Oct 10',
    adjuster: 'M. Torres',
    peril: 'Fire / Smoke',
  },
  {
    id: 'CLM-8811',
    project: 'Suncoast Condos',
    contractor: 'Darius Webb',
    policyholder: 'Suncoast HOA',
    amount: 33400,
    stage: 'Settlement',
    status: 'closed',
    filed: 'Sep 22',
    lastActivity: 'Oct 5',
    adjuster: 'S. Reyes',
    peril: 'Wind',
  },
];

const STATUS_VARIANT: Record<string, 'cyan' | 'tertiary'> = {
  active: 'cyan',
  closed: 'tertiary',
};

function stageIndex(stage: string) {
  return STAGES.indexOf(stage);
}

export default function AdjusterClaimsPage() {
  const active = CLAIMS.filter(c => c.status === 'active').length;
  const closed = CLAIMS.filter(c => c.status === 'closed').length;
  const totalActive = CLAIMS.filter(c => c.status === 'active').reduce((s, c) => s + c.amount, 0);

  return (
    <PortalLayout role="adjuster">
      <SectionHeader
        title="Claims"
        subtitle="All assigned claims with status, contractor, and policyholder"
        action={<Button variant="primary" accent={PINK} icon="add">New Claim</Button>}
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Total Claims', val: CLAIMS.length, color: PINK },
          { label: 'Active', val: active, color: '#ff9100' },
          { label: 'Closed', val: closed, color: '#4ade80' },
          { label: 'Active Value', val: `$${(totalActive / 1000).toFixed(0)}K`, color: PINK },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1D23] border border-[#2A2D35] p-4" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: s.color }}>
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest block mb-2">{s.label}</span>
            <p className="font-['Barlow_Condensed',sans-serif] text-[28px] font-bold leading-none" style={{ color: s.color }}>{s.val}</p>
          </div>
        ))}
      </div>

      {/* Filter strip */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {['All', 'Active', 'Closed', 'High Value'].map((f, i) => (
          <button
            key={f}
            className="px-3 py-1.5 font-['JetBrains_Mono',monospace] text-[10px] tracking-wider uppercase border transition-colors"
            style={
              i === 0
                ? { background: `${PINK}18`, borderColor: PINK, color: PINK, borderRadius: '0.125rem' }
                : { background: 'transparent', borderColor: '#2A2D35', color: '#8B95A1', borderRadius: '0.125rem' }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Claims list */}
      <div className="flex flex-col gap-4">
        {CLAIMS.map((c) => {
          const idx = stageIndex(c.stage);
          return (
            <Card key={c.id} accent={c.status === 'active' ? PINK : undefined}>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-['JetBrains_Mono',monospace] text-[11px]" style={{ color: PINK }}>{c.id}</span>
                      <Badge variant={STATUS_VARIANT[c.status]}>{c.status}</Badge>
                      <Badge variant="tertiary">{c.peril}</Badge>
                    </div>
                    <h3 className="font-['Barlow_Condensed',sans-serif] text-[20px] font-bold text-[#FFFFFF]">{c.project}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-['Barlow_Condensed',sans-serif] text-[22px] font-bold text-[#FFFFFF]">${c.amount.toLocaleString()}</p>
                    <p className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">Filed {c.filed}</p>
                  </div>
                </div>

                {/* Stage progress */}
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    {STAGES.map((s, i) => (
                      <div key={s} className="flex-1 text-center">
                        <div
                          className="w-2 h-2 rounded-full mx-auto mb-1"
                          style={{ background: i <= idx ? PINK : '#2A2D35' }}
                        />
                        <span className="font-['JetBrains_Mono',monospace] text-[8px] uppercase tracking-wider" style={{ color: i === idx ? PINK : '#8B95A1' }}>
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                  <ProgressBar value={idx + 1} max={STAGES.length} showPct={false} accent={PINK} />
                </div>

                {/* Parties */}
                <div className="grid grid-cols-3 gap-3 mb-4 text-[11px]">
                  <div>
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-1">Contractor</p>
                    <p className="font-['Manrope',sans-serif] text-[#FFFFFF]">{c.contractor}</p>
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-1">Policyholder</p>
                    <p className="font-['Manrope',sans-serif] text-[#FFFFFF]">{c.policyholder}</p>
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-1">Last Activity</p>
                    <p className="font-['JetBrains_Mono',monospace] text-[#8B95A1]">{c.lastActivity}</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-3 border-t border-[#2A2D35]">
                  <Button variant="ghost" accent={PINK} size="sm" icon="rate_review" className="flex-1 justify-center">Review</Button>
                  <Button variant="ghost" accent={PINK} size="sm" icon="forum" className="flex-1 justify-center">Message</Button>
                  <Button variant="ghost" accent={PINK} size="sm" icon="description" className="flex-1 justify-center">Docs</Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </PortalLayout>
  );
}

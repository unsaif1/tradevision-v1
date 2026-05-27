import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, ProgressBar, SectionHeader, Button } from '@/components/ui';

const CYAN = '#00D4AA';

const PROJECTS = [
  { id: 'PRJ-2024-001', name: 'Riverside Commons', location: 'Miami, FL', claimId: 'CLM-8841', stage: 'Estimate', status: 'active', claims: 2, crew: 4, pct: 62, materialCost: 28400, laborCost: 14200 },
  { id: 'PRJ-2024-002', name: 'Highland Oaks Estate', location: 'Austin, TX', claimId: 'CLM-8872', stage: 'Inspection', status: 'active', claims: 1, crew: 2, pct: 28, materialCost: 11600, laborCost: 6800 },
  { id: 'PRJ-2024-003', name: 'Meridian Warehouse', location: 'Denver, CO', claimId: 'CLM-8904', stage: 'Settlement', status: 'complete', claims: 3, crew: 6, pct: 100, materialCost: 67200, laborCost: 31500 },
  { id: 'PRJ-2024-004', name: 'Sunset Ridge HOA', location: 'Phoenix, AZ', claimId: 'CLM-8917', stage: 'Filed', status: 'pending', claims: 1, crew: 0, pct: 8, materialCost: 0, laborCost: 0 },
  { id: 'PRJ-2024-005', name: 'Lakeview Townhomes', location: 'Tampa, FL', claimId: 'CLM-8933', stage: 'Approval', status: 'review', claims: 4, crew: 5, pct: 88, materialCost: 42100, laborCost: 19800 },
  { id: 'PRJ-2024-006', name: 'Pinecrest Industrial', location: 'Atlanta, GA', claimId: 'CLM-8958', stage: 'Repair', status: 'active', claims: 2, crew: 8, pct: 54, materialCost: 53900, laborCost: 24300 },
];

const STATUS_BADGE: Record<string, 'cyan' | 'success' | 'warning' | 'tertiary'> = {
  active:   'cyan',
  complete: 'success',
  pending:  'warning',
  review:   'tertiary',
};

const STAGES = ['Filed', 'Inspection', 'Estimate', 'Review', 'Approval', 'Settlement'];

export default function ContractorProjectsPage() {
  return (
    <PortalLayout role="contractor">
      <SectionHeader
        title="Projects"
        subtitle="Active roofing projects and claim assignments"
        action={<Button variant="primary" accent={CYAN} icon="add">New Project</Button>}
      />

      {/* Summary strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Total Active', val: '4', icon: 'construction' },
          { label: 'Completed', val: '1', icon: 'check_circle' },
          { label: 'Pending', val: '1', icon: 'schedule' },
          { label: 'Total Value', val: '$289K', icon: 'payments' },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1D23] border border-[#2A2D35] p-4" style={{ borderRadius: '0.125rem' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest">{s.label}</span>
              <span className="material-symbols-outlined text-[18px] text-[#8B95A1]">{s.icon}</span>
            </div>
            <p className="font-['Barlow_Condensed',sans-serif] text-[28px] font-bold text-[#00D4AA] leading-none">{s.val}</p>
          </div>
        ))}
      </div>

      {/* Stage pipeline */}
      <Card className="mb-8">
        <CardHeader title="Pipeline Overview" icon="timeline" accent={CYAN} />
        <div className="p-5">
          <div className="flex items-center gap-0">
            {STAGES.map((s, i) => {
              const count = PROJECTS.filter(p => p.stage === s).length;
              const isLast = i === STAGES.length - 1;
              return (
                <div key={s} className="flex items-center flex-1 min-w-0">
                  <div className="flex-1 text-center">
                    <div
                      className="h-8 flex items-center justify-center font-['Barlow_Condensed',sans-serif] text-[12px] tracking-wider uppercase border"
                      style={{
                        borderRadius: '0.125rem',
                        background: count ? `${CYAN}18` : '#1A1D23',
                        borderColor: count ? `${CYAN}44` : '#2A2D35',
                        color: count ? CYAN : '#8B95A1',
                      }}
                    >
                      {s}
                      {count > 0 && <span className="ml-1.5 font-bold text-[10px] bg-[#00D4AA] text-[#0D0F11] px-1 rounded-sm">{count}</span>}
                    </div>
                  </div>
                  {!isLast && <div className="w-3 shrink-0 border-t border-dashed border-[#2A2D35]" />}
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Project list */}
      <Card>
        <CardHeader
          title="All Projects"
          icon="folder_open"
          accent={CYAN}
          action={
            <div className="flex gap-2">
              <Button variant="ghost" accent={CYAN} size="sm" icon="filter_list">Filter</Button>
              <Button variant="ghost" accent={CYAN} size="sm" icon="download">Export</Button>
            </div>
          }
        />
        <div className="divide-y divide-[#2A2D35]">
          {PROJECTS.map((p) => (
            <div key={p.id} className="p-5 hover:bg-white/[0.02] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Left: name + meta */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <h3 className="font-['Barlow_Condensed',sans-serif] text-[17px] font-semibold text-[#FFFFFF]">{p.name}</h3>
                    <Badge variant={STATUS_BADGE[p.status]}>{p.status}</Badge>
                    <Badge variant="tertiary">{p.stage}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-[#8B95A1] font-['Manrope',sans-serif] mb-4">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>{p.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">assignment</span>{p.claimId}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">groups</span>{p.crew} crew
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">receipt_long</span>{p.claims} claim{p.claims !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <ProgressBar value={p.pct} accent={CYAN} label={`Completion`} />
                </div>

                {/* Right: costs + action */}
                <div className="md:w-48 shrink-0 flex flex-col gap-2">
                  <div className="bg-[#0D0F11] border border-[#2A2D35] p-3 text-right" style={{ borderRadius: '0.125rem' }}>
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-wider mb-1">Materials</p>
                    <p className="font-['Barlow_Condensed',sans-serif] text-[16px] font-bold text-[#FFFFFF]">
                      {p.materialCost > 0 ? `$${p.materialCost.toLocaleString()}` : '—'}
                    </p>
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-wider mt-2 mb-1">Labor</p>
                    <p className="font-['Barlow_Condensed',sans-serif] text-[16px] font-bold text-[#FFFFFF]">
                      {p.laborCost > 0 ? `$${p.laborCost.toLocaleString()}` : '—'}
                    </p>
                  </div>
                  <Button variant="ghost" accent={CYAN} size="sm" icon="open_in_new" className="w-full justify-center">
                    View Detail
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </PortalLayout>
  );
}

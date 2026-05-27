import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, SectionHeader, Button } from '@/components/ui';

const PINK = '#E21E51';

const APPROVALS = [
  { id: 'APR-1081', claimId: 'CLM-8904', project: 'Meridian Warehouse', contractor: 'Marcus Chen', type: 'Full Approval', amount: 98700, rcv: 102800, acv: 98700, date: 'Oct 10', adjuster: 'M. Torres', notes: 'All scopes verified. 3-ply system confirmed code compliant. ACV issued.' },
  { id: 'APR-1073', claimId: 'CLM-8811', project: 'Suncoast Condos', contractor: 'Darius Webb', type: 'Full Approval', amount: 33400, rcv: 35600, acv: 33400, date: 'Oct 5', adjuster: 'S. Reyes', notes: 'Wind damage confirmed by field inspector. Shingle scope approved as submitted.' },
  { id: 'APR-1067', claimId: 'CLM-8790', project: 'Oaktree Office Park', contractor: 'Jerome Banks', type: 'Partial Approval', amount: 55200, rcv: 68100, acv: 55200, date: 'Sep 28', adjuster: 'K. Walsh', notes: 'Skylight line items excluded — not covered under current policy. Remainder approved.' },
  { id: 'APR-1055', claimId: 'CLM-8762', project: 'Harbor View Apts', contractor: 'Travis Okafor', type: 'Full Approval', amount: 24800, rcv: 28400, acv: 24800, date: 'Sep 22', adjuster: 'S. Reyes', notes: 'Full approval after supplemental documentation received.' },
  { id: 'APR-1048', claimId: 'CLM-8741', project: 'Coral Gables Estate', contractor: 'Lupita Garza', type: 'Partial Approval', amount: 17900, rcv: 22100, acv: 17900, date: 'Sep 15', adjuster: 'M. Torres', notes: 'Gutter work not covered. Shingle scope approved at Xactimate rate.' },
  { id: 'APR-1039', claimId: 'CLM-8720', project: 'Westshore Plaza', contractor: 'Marcus Chen', type: 'Rejected', amount: 0, rcv: 41800, acv: 0, date: 'Sep 8', adjuster: 'K. Walsh', notes: 'Claim denied — damage predates policy effective date. Documentation insufficient.' },
];

const TYPE_VARIANT: Record<string, 'success' | 'warning' | 'error'> = {
  'Full Approval': 'success',
  'Partial Approval': 'warning',
  'Rejected': 'error',
};

const TYPE_COLOR: Record<string, string> = {
  'Full Approval': '#4ade80',
  'Partial Approval': '#ff9100',
  'Rejected': '#f43f5e',
};

export default function AdjusterApprovalsPage() {
  const totalApproved = APPROVALS.filter(a => a.type !== 'Rejected').reduce((s, a) => s + a.amount, 0);
  const fullCount = APPROVALS.filter(a => a.type === 'Full Approval').length;
  const partialCount = APPROVALS.filter(a => a.type === 'Partial Approval').length;
  const rejectedCount = APPROVALS.filter(a => a.type === 'Rejected').length;

  return (
    <PortalLayout role="adjuster">
      <SectionHeader
        title="Approvals"
        subtitle="Approval history, decisions, and disposition notes"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Full Approvals', val: fullCount, color: '#4ade80' },
          { label: 'Partial', val: partialCount, color: '#ff9100' },
          { label: 'Rejected', val: rejectedCount, color: '#f43f5e' },
          { label: 'Total Issued', val: `$${(totalApproved / 1000).toFixed(0)}K`, color: PINK },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1D23] border border-[#2A2D35] p-4" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: s.color }}>
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest block mb-2">{s.label}</span>
            <p className="font-['Barlow_Condensed',sans-serif] text-[28px] font-bold leading-none" style={{ color: s.color }}>{s.val}</p>
          </div>
        ))}
      </div>

      <Card>
        <CardHeader
          title="Approval History"
          icon="fact_check"
          accent={PINK}
          action={
            <div className="flex gap-2">
              <Button variant="ghost" accent={PINK} size="sm" icon="filter_list">Filter</Button>
              <Button variant="ghost" accent={PINK} size="sm" icon="download">Export</Button>
            </div>
          }
        />
        <div className="divide-y divide-[#2A2D35]">
          {APPROVALS.map((a) => (
            <div
              key={a.id}
              className="p-4 hover:bg-white/[0.02] transition-colors"
              style={{ borderLeft: `3px solid ${TYPE_COLOR[a.type]}` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-['JetBrains_Mono',monospace] text-[10px]" style={{ color: PINK }}>{a.id}</span>
                    <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">{a.claimId}</span>
                    <Badge variant={TYPE_VARIANT[a.type]}>{a.type}</Badge>
                  </div>
                  <p className="font-['Manrope',sans-serif] text-[14px] font-semibold text-[#FFFFFF] mb-0.5">{a.project}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 mb-2">
                    <span className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">Contractor: {a.contractor}</span>
                    <span className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">Adjuster: {a.adjuster}</span>
                    <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">{a.date}</span>
                  </div>
                  <div className="bg-[#0D0F11] border border-[#2A2D35] p-2.5 rounded-sm">
                    <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1] italic">{a.notes}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  {a.amount > 0 ? (
                    <>
                      <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-0.5">ACV Issued</p>
                      <p className="font-['Barlow_Condensed',sans-serif] text-[20px] font-bold" style={{ color: TYPE_COLOR[a.type] }}>${a.amount.toLocaleString()}</p>
                      <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">RCV ${a.rcv.toLocaleString()}</p>
                    </>
                  ) : (
                    <p className="font-['Barlow_Condensed',sans-serif] text-[16px] font-bold text-[#f43f5e]">DENIED</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </PortalLayout>
  );
}

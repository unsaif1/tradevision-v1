import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, StatCard, SectionHeader, Button } from '@/components/ui';

const PINK = '#E21E51';
const CYAN = '#00D4AA';

const QUEUE = [
  { id: 'CLM-8841', project: 'Riverside Commons', contractor: 'Marcus Chen', stage: 'Approval', amount: 42850, urgency: 'high', daysOpen: 14 },
  { id: 'CLM-8872', project: 'Highland Oaks Estate', contractor: 'Lupita Garza', stage: 'Estimate', amount: 18300, urgency: 'medium', daysOpen: 7 },
  { id: 'CLM-8933', project: 'Lakeview Townhomes', contractor: 'Jerome Banks', stage: 'Review', amount: 61900, urgency: 'high', daysOpen: 8 },
  { id: 'CLM-8958', project: 'Pinecrest Industrial', contractor: 'Travis Okafor', stage: 'Inspection', amount: 78200, urgency: 'low', daysOpen: 3 },
];

const RECENT_APPROVALS = [
  { id: 'CLM-8904', project: 'Meridian Warehouse', amount: 98700, date: 'Oct 10', type: 'Full Approval' },
  { id: 'CLM-8811', project: 'Suncoast Condos', amount: 33400, date: 'Oct 5', type: 'Partial Approval' },
  { id: 'CLM-8790', project: 'Oaktree Office Park', amount: 55200, date: 'Sep 28', type: 'Full Approval' },
];

const NEEDS_RESPONSE = [
  { id: 'THR-001', claimId: 'CLM-8841', from: 'Marcus Chen', preview: 'Decking supplement documentation ready for review', time: '10:42 AM' },
  { id: 'THR-003', claimId: 'CLM-8872', from: 'Lupita Garza', preview: 'Revised EST-4402 with itemized labor breakdown attached', time: '2:15 PM' },
  { id: 'THR-005', claimId: 'CLM-8958', from: 'Travis Okafor', preview: 'Drone video review completed — full scope confirmed', time: 'Oct 25' },
];

const URGENCY_COLOR: Record<string, string> = { high: '#f43f5e', medium: '#ff9100', low: '#4ade80' };

export default function AdjusterDashboardPage() {
  return (
    <PortalLayout role="adjuster">
      <SectionHeader
        title="Adjuster Dashboard"
        subtitle="Claims queue, pending actions, and recent decisions"
      />

      {/* Stat row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Active Claims" value={QUEUE.length} accent={PINK} icon="assignment_late" />
        <StatCard label="Pending Review" value={3} accent="#ff9100" icon="rate_review" />
        <StatCard label="Unread Messages" value={7} accent={CYAN} icon="forum" />
        <StatCard label="Approved This Month" value="$132K" accent="#4ade80" icon="fact_check" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        {/* Claims queue */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader
              title="Active Claims Queue"
              icon="assignment_late"
              accent={PINK}
              action={<Button variant="ghost" accent={PINK} size="sm" icon="open_in_new">All Claims</Button>}
            />
            <div className="divide-y divide-[#2A2D35]">
              {QUEUE.map((c) => (
                <div key={c.id} className="flex items-center gap-4 p-4 hover:bg-white/[0.02] transition-colors group">
                  <div className="w-1.5 h-10 rounded-full shrink-0" style={{ background: URGENCY_COLOR[c.urgency] }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-['JetBrains_Mono',monospace] text-[10px]" style={{ color: PINK }}>{c.id}</span>
                      <Badge variant="tertiary">{c.stage}</Badge>
                    </div>
                    <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF] truncate">{c.project}</p>
                    <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">{c.contractor} · {c.daysOpen}d open</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-['Barlow_Condensed',sans-serif] text-[15px] font-bold text-[#FFFFFF]">${c.amount.toLocaleString()}</p>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity font-['JetBrains_Mono',monospace] text-[9px] uppercase tracking-widest mt-1" style={{ color: PINK }}>
                      Review →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {/* Responses needed */}
          <Card>
            <CardHeader title="Response Needed" icon="mark_unread_chat_alt" accent="#ff9100" />
            <div className="divide-y divide-[#2A2D35]">
              {NEEDS_RESPONSE.map((r) => (
                <div key={r.id} className="p-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="font-['JetBrains_Mono',monospace] text-[9px]" style={{ color: PINK }}>{r.claimId}</span>
                    <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{r.time}</span>
                  </div>
                  <p className="font-['Manrope',sans-serif] text-[11px] font-semibold text-[#FFFFFF] mb-0.5">{r.from}</p>
                  <p className="font-['Manrope',sans-serif] text-[10px] text-[#8B95A1] truncate">{r.preview}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent approvals */}
          <Card>
            <CardHeader title="Recent Approvals" icon="fact_check" accent="#4ade80" />
            <div className="divide-y divide-[#2A2D35]">
              {RECENT_APPROVALS.map((a) => (
                <div key={a.id} className="p-3">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="font-['JetBrains_Mono',monospace] text-[9px]" style={{ color: PINK }}>{a.id}</span>
                    <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{a.date}</span>
                  </div>
                  <p className="font-['Manrope',sans-serif] text-[11px] font-semibold text-[#FFFFFF] truncate">{a.project}</p>
                  <div className="flex justify-between items-center mt-0.5">
                    <Badge variant="success">{a.type}</Badge>
                    <span className="font-['Barlow_Condensed',sans-serif] text-[13px] font-bold text-[#4ade80]">${a.amount.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}

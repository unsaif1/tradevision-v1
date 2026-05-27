import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, SectionHeader, Button, ProgressBar } from '@/components/ui';

const RED = '#e21e51';
const CYAN = '#00D4AA';

const STAGES = ['Filed', 'Inspection', 'Estimate', 'Review', 'Approval', 'Settlement'];

const CLAIMS = [
  { id: 'CLM-8841', project: '1420 NW 12th Ave', stage: 'Approval', amount: 42850, adjuster: 'S. Reyes', lastUpdate: 'Oct 27' },
  { id: 'CLM-8904', project: '7810 Commerce Pkwy', stage: 'Settlement', amount: 98700, adjuster: 'M. Torres', lastUpdate: 'Oct 10' },
];

const RECENT_DOCS = [
  { name: 'Riverside_Estimate_v2_Final.pdf', type: 'Estimate', date: 'Oct 24', status: 'approved' },
  { name: 'Site_Photos_Pre_Oct22.zip', type: 'Photos', date: 'Oct 22', status: 'approved' },
  { name: 'Material_Invoice_ABC_Oct.pdf', type: 'Invoice', date: 'Oct 20', status: 'approved' },
];

const STATUS_COLOR: Record<string, string> = { approved: '#4ade80', pending: '#ff9100', rejected: '#f43f5e' };

export default function PolicyholderDashboardPage() {
  return (
    <PortalLayout role="policyholder">
      <SectionHeader
        title="My Dashboard"
        subtitle="Claim status, recent activity, and quick actions"
      />

      {/* Overview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {[
          { label: 'Active Claims', val: CLAIMS.filter(c => c.stage !== 'Settlement').length, color: RED, icon: 'assignment' },
          { label: 'Unread Messages', val: 2, color: '#ff9100', icon: 'forum' },
          { label: 'Documents', val: 8, color: '#4ade80', icon: 'folder_open' },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1D23] border border-[#2A2D35] p-5 flex items-center gap-4" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: s.color }}>
            <span className="material-symbols-outlined text-[28px] shrink-0" style={{ color: s.color }}>{s.icon}</span>
            <div>
              <p className="font-['Barlow_Condensed',sans-serif] text-[32px] font-bold leading-none" style={{ color: s.color }}>{s.val}</p>
              <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Claims */}
        <div className="flex flex-col gap-4">
          {CLAIMS.map((c) => {
            const idx = STAGES.indexOf(c.stage);
            return (
              <Card key={c.id} accent={c.stage !== 'Settlement' ? RED : undefined}>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="font-['JetBrains_Mono',monospace] text-[10px]" style={{ color: RED }}>{c.id}</span>
                      <h3 className="font-['Barlow_Condensed',sans-serif] text-[17px] font-bold text-[#FFFFFF] mt-0.5">{c.project}</h3>
                      <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">Adjuster: {c.adjuster}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-['Barlow_Condensed',sans-serif] text-[20px] font-bold text-[#FFFFFF]">${c.amount.toLocaleString()}</p>
                      <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">Updated {c.lastUpdate}</p>
                    </div>
                  </div>

                  {/* Stage */}
                  <div className="mb-1">
                    <div className="flex justify-between mb-2">
                      {STAGES.map((s, i) => (
                        <div key={s} className="flex-1 text-center">
                          <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ background: i <= idx ? RED : '#2A2D35' }} />
                          <span className="font-['JetBrains_Mono',monospace] text-[7px] uppercase tracking-wider" style={{ color: i === idx ? RED : '#8B95A1' }}>{s}</span>
                        </div>
                      ))}
                    </div>
                    <ProgressBar value={idx + 1} max={STAGES.length} showPct={false} accent={RED} />
                  </div>

                  <div className="flex gap-2 mt-3 pt-3 border-t border-[#2A2D35]">
                    <Button variant="ghost" accent={RED} size="sm" icon="visibility" className="flex-1 justify-center">View Claim</Button>
                    <Button variant="ghost" accent={RED} size="sm" icon="forum" className="flex-1 justify-center">Message</Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Right: recent docs + quick actions */}
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader title="Recent Documents" icon="folder_open" accent={RED} action={<Button variant="ghost" accent={RED} size="sm" icon="open_in_new">All Docs</Button>} />
            <div className="divide-y divide-[#2A2D35]">
              {RECENT_DOCS.map((d) => (
                <div key={d.name} className="flex items-center gap-3 p-3">
                  <span className="material-symbols-outlined text-[18px]" style={{ color: RED }}>description</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-['Manrope',sans-serif] text-[12px] font-semibold text-[#FFFFFF] truncate">{d.name}</p>
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{d.type} · {d.date}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: STATUS_COLOR[d.status] }} title={d.status} />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader title="Quick Actions" icon="bolt" accent={RED} />
            <div className="p-4 flex flex-col gap-3">
              <Button variant="primary" accent={RED} icon="upload_file" className="w-full justify-center">Upload Document</Button>
              <Button variant="ghost" accent={RED} icon="edit_note" className="w-full justify-center">Send Message to Adjuster</Button>
              <Button variant="ghost" accent={RED} icon="phone" className="w-full justify-center">Contact SaifHaven Support</Button>
            </div>
          </Card>

          {/* Alert */}
          <div
            className="border p-4"
            style={{ background: `${RED}08`, borderColor: `${RED}30`, borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: RED }}
          >
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[20px] mt-0.5 shrink-0" style={{ color: RED }}>notifications_active</span>
              <div>
                <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF] mb-0.5">Approval Pending — Action Required</p>
                <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">
                  CLM-8841 is awaiting your signature on the settlement authorization form. Please review and sign to proceed.
                </p>
                <Button variant="ghost" accent={RED} size="sm" icon="draw" className="mt-2">Review & Sign</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}

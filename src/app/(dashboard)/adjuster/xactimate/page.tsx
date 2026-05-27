import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, SectionHeader, Button } from '@/components/ui';

const PINK = '#E21E51';

const FILES = [
  { id: 'XA-2024-8841', claimId: 'CLM-8841', project: 'Riverside Commons', version: 'v3.1', scope: 'Full Re-Roof', amount: 40200, status: 'current', modified: 'Oct 27', analyst: 'S. Reyes', rcv: 44800, acv: 40200 },
  { id: 'XA-2024-8872', claimId: 'CLM-8872', project: 'Highland Oaks Estate', version: 'v1.2', scope: 'Shingle + Gutter', amount: 17100, status: 'in-review', modified: 'Oct 26', analyst: 'M. Torres', rcv: 19400, acv: 17100 },
  { id: 'XA-2024-8933', claimId: 'CLM-8933', project: 'Lakeview Townhomes', version: 'v2.0', scope: 'Flat Roof Multi-Unit', amount: 54800, status: 'in-review', modified: 'Oct 24', analyst: 'S. Reyes', rcv: 61200, acv: 54800 },
  { id: 'XA-2024-8958', claimId: 'CLM-8958', project: 'Pinecrest Industrial', version: 'v1.0', scope: 'Metal Roof System', amount: 68400, status: 'draft', modified: 'Oct 25', analyst: 'K. Walsh', rcv: 78200, acv: 68400 },
  { id: 'XA-2024-8904', claimId: 'CLM-8904', project: 'Meridian Warehouse', version: 'v4.0', scope: '3-Ply Commercial', amount: 95100, status: 'finalized', modified: 'Oct 9', analyst: 'M. Torres', rcv: 102800, acv: 95100 },
  { id: 'XA-2024-8811', claimId: 'CLM-8811', project: 'Suncoast Condos', version: 'v2.2', scope: 'Wind — Shingles', amount: 31800, status: 'finalized', modified: 'Oct 4', analyst: 'S. Reyes', rcv: 35600, acv: 31800 },
];

const STATUS_VARIANT: Record<string, 'success' | 'warning' | 'cyan' | 'tertiary'> = {
  current:    'cyan',
  'in-review': 'warning',
  draft:      'tertiary',
  finalized:  'success',
};

export default function AdjusterXactimatePage() {
  return (
    <PortalLayout role="adjuster">
      <SectionHeader
        title="Xactimate"
        subtitle="Estimate files, RCV/ACV values, and version history"
        action={<Button variant="primary" accent={PINK} icon="add">New Estimate File</Button>}
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Files', val: FILES.length, color: PINK },
          { label: 'In Review', val: FILES.filter(f => f.status === 'in-review').length, color: '#ff9100' },
          { label: 'Finalized', val: FILES.filter(f => f.status === 'finalized').length, color: '#4ade80' },
          { label: 'Total ACV', val: `$${(FILES.reduce((s, f) => s + f.acv, 0) / 1000).toFixed(0)}K`, color: PINK },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1D23] border border-[#2A2D35] p-4" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: s.color }}>
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest block mb-2">{s.label}</span>
            <p className="font-['Barlow_Condensed',sans-serif] text-[28px] font-bold leading-none" style={{ color: s.color }}>{s.val}</p>
          </div>
        ))}
      </div>

      <Card>
        <CardHeader
          title="Xactimate File Browser"
          icon="description"
          accent={PINK}
          action={
            <div className="flex gap-2">
              <Button variant="ghost" accent={PINK} size="sm" icon="filter_list">Filter</Button>
              <Button variant="ghost" accent={PINK} size="sm" icon="download">Export All</Button>
            </div>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="border-b border-[#2A2D35]">
                {['File ID', 'Claim / Project', 'Scope', 'Version', 'RCV', 'ACV', 'Analyst', 'Modified', 'Status', ''].map(h => (
                  <th key={h} className="px-4 py-3 text-left font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-[0.1em]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2D35]">
              {FILES.map((f) => (
                <tr key={f.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-4 py-3.5">
                    <span className="font-['JetBrains_Mono',monospace] text-[10px]" style={{ color: PINK }}>{f.id}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF]">{f.project}</p>
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] mt-0.5">{f.claimId}</p>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['Manrope',sans-serif] text-[12px] text-[#8B95A1]">{f.scope}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#FFFFFF]">{f.version}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['Barlow_Condensed',sans-serif] text-[14px] font-bold text-[#FFFFFF]">${f.rcv.toLocaleString()}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['Barlow_Condensed',sans-serif] text-[14px] font-bold" style={{ color: PINK }}>${f.acv.toLocaleString()}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['Manrope',sans-serif] text-[12px] text-[#8B95A1]">{f.analyst}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">{f.modified}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <Badge variant={STATUS_VARIANT[f.status]}>{f.status.replace('-', ' ')}</Badge>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-[#8B95A1] hover:text-[#ff007a] transition-colors">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                      </button>
                      <button className="p-1.5 text-[#8B95A1] hover:text-[#ff007a] transition-colors">
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                      </button>
                      <button className="p-1.5 text-[#8B95A1] hover:text-[#ff007a] transition-colors">
                        <span className="material-symbols-outlined text-[16px]">download</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PortalLayout>
  );
}

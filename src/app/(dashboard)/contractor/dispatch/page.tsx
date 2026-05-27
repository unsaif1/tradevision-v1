import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, SectionHeader, Button } from '@/components/ui';

const CYAN = '#00D4AA';

const ASSIGNMENTS = [
  {
    id: 'DSP-001',
    project: 'Riverside Commons',
    address: '1420 NW 12th Ave, Miami FL 33125',
    crew: ['Darius Webb', 'Marco López', 'James Cole'],
    lead: 'Darius Webb',
    date: 'Oct 28, 2024',
    startTime: '07:00',
    endTime: '16:00',
    status: 'active',
    task: 'TPO membrane install — North slope',
    vehicles: ['TR-04 (Ram 2500)', 'VN-07 (Transit)'],
  },
  {
    id: 'DSP-002',
    project: 'Pinecrest Industrial',
    address: '800 Fulton Industrial Blvd, Atlanta GA 30336',
    crew: ['Travis Okafor', 'Hector Fuentes', 'Leon Ward', 'Ray Simmons'],
    lead: 'Travis Okafor',
    date: 'Oct 28, 2024',
    startTime: '06:30',
    endTime: '17:00',
    status: 'active',
    task: 'Metal panel removal + substrate inspection',
    vehicles: ['TR-01 (F-350)', 'TR-08 (F-250)', 'VN-02 (Transit)'],
  },
  {
    id: 'DSP-003',
    project: 'Highland Oaks Estate',
    address: '2204 Barton Hills Dr, Austin TX 78704',
    crew: ['Hector Fuentes', 'Carmen Vega'],
    lead: 'Jerome Banks',
    date: 'Oct 28, 2024',
    startTime: '08:00',
    endTime: '15:00',
    status: 'scheduled',
    task: 'Shingle tear-off, ice & water shield install',
    vehicles: ['TR-06 (Ram 1500)'],
  },
  {
    id: 'DSP-004',
    project: 'Lakeview Townhomes',
    address: '5901 Park Blvd N, Seminole FL 33781',
    crew: ['Jerome Banks', 'Tamara Wills', 'Eddie Cruz', 'Sam Patel', 'Dana Moore'],
    lead: 'Jerome Banks',
    date: 'Oct 29, 2024',
    startTime: '07:00',
    endTime: '16:30',
    status: 'scheduled',
    task: 'Multi-unit flat roof — units 12–20',
    vehicles: ['TR-02 (F-350)', 'VN-05 (Transit)', 'VN-09 (Transit)'],
  },
];

const STATUS_VARIANT: Record<string, 'cyan' | 'success' | 'tertiary' | 'warning'> = {
  active:    'cyan',
  complete:  'success',
  scheduled: 'tertiary',
  delayed:   'warning',
};

export default function ContractorDispatchPage() {
  return (
    <PortalLayout role="contractor">
      <SectionHeader
        title="Dispatch Board"
        subtitle="Crew assignments and daily scheduling"
        action={<Button variant="primary" accent={CYAN} icon="add">New Assignment</Button>}
      />

      {/* Date strip */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
        {['Oct 26', 'Oct 27', 'Oct 28 (Today)', 'Oct 29', 'Oct 30', 'Oct 31'].map((d, i) => (
          <div
            key={d}
            className="shrink-0 px-4 py-2 font-['Barlow_Condensed',sans-serif] text-[13px] tracking-wider uppercase cursor-pointer border transition-colors"
            style={
              i === 2
                ? { background: `${CYAN}18`, borderColor: CYAN, color: CYAN, borderRadius: '0.125rem' }
                : { background: 'transparent', borderColor: '#2A2D35', color: '#8B95A1', borderRadius: '0.125rem' }
            }
          >
            {d}
          </div>
        ))}
      </div>

      {/* Map placeholder */}
      <Card className="mb-8">
        <CardHeader title="Active Field Map" icon="map" accent={CYAN} />
        <div
          className="h-48 flex items-center justify-center bg-[#0D0F11] border-t border-[#2A2D35]"
          style={{
            backgroundImage: 'radial-gradient(rgba(0,240,255,0.06) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          <div className="text-center">
            <span className="material-symbols-outlined text-[40px] text-[#2A2D35] block">map</span>
            <p className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] mt-2 uppercase tracking-widest">
              Map Integration — GPS tracking 4 active units
            </p>
          </div>
        </div>
      </Card>

      {/* Assignment cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {ASSIGNMENTS.map((a) => (
          <Card key={a.id} accent={a.status === 'active' ? CYAN : undefined}>
            <div className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1]">{a.id}</span>
                    <Badge variant={STATUS_VARIANT[a.status]}>{a.status}</Badge>
                  </div>
                  <h3 className="font-['Barlow_Condensed',sans-serif] text-[18px] font-bold text-[#FFFFFF]">{a.project}</h3>
                  <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1] mt-0.5">{a.address}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-['JetBrains_Mono',monospace] text-[11px]" style={{ color: CYAN }}>{a.date}</p>
                  <p className="font-['JetBrains_Mono',monospace] text-[13px] font-bold text-[#FFFFFF]">{a.startTime} – {a.endTime}</p>
                </div>
              </div>

              {/* Task */}
              <div className="bg-[#0D0F11] border border-[#2A2D35] p-3 mb-4" style={{ borderRadius: '0.125rem' }}>
                <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-1">Task</p>
                <p className="font-['Manrope',sans-serif] text-[13px] text-[#FFFFFF]">{a.task}</p>
              </div>

              {/* Crew */}
              <div className="mb-4">
                <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-2">
                  Crew ({a.crew.length}) · Lead: {a.lead}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {a.crew.map((name) => (
                    <span
                      key={name}
                      className="font-['Manrope',sans-serif] text-[11px] px-2 py-0.5 bg-[#1A1D23] border border-[#2A2D35] text-[#FFFFFF]"
                      style={{ borderRadius: '0.125rem' }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vehicles */}
              <div className="mb-4">
                <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] uppercase tracking-widest mb-1.5">Vehicles</p>
                <div className="flex flex-wrap gap-2">
                  {a.vehicles.map((v) => (
                    <div key={v} className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[12px]" style={{ color: CYAN }}>local_shipping</span>
                      <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#FFFFFF]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-3 border-t border-[#2A2D35]">
                <Button variant="ghost" accent={CYAN} size="sm" icon="edit" className="flex-1 justify-center">Edit</Button>
                <Button variant="ghost" accent={CYAN} size="sm" icon="person_add" className="flex-1 justify-center">Add Crew</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PortalLayout>
  );
}

import PortalLayout from '@/components/PortalLayout';
import { Badge, Card, CardHeader, SectionHeader, Button } from '@/components/ui';

const CYAN = '#00D4AA';

const CREW = [
  { id: 'CRW-001', name: 'Darius Webb',    role: 'Lead Installer',   status: 'dispatched', assignment: 'Riverside Commons', phone: '(305) 442-8821', cert: 'GAF Master Elite', since: '2019' },
  { id: 'CRW-002', name: 'Lupita Garza',   role: 'Estimator',        status: 'available',  assignment: null,                phone: '(512) 319-0044', cert: 'Xactimate L3',     since: '2021' },
  { id: 'CRW-003', name: 'Travis Okafor',  role: 'Roofer II',        status: 'dispatched', assignment: 'Pinecrest Industrial', phone: '(404) 558-2310', cert: 'OSHA 30',       since: '2020' },
  { id: 'CRW-004', name: 'Maria Solis',    role: 'Safety Inspector', status: 'available',  assignment: null,                phone: '(813) 677-1904', cert: 'OSHA 30, RRC',   since: '2018' },
  { id: 'CRW-005', name: 'Kevin Park',     role: 'Roofer I',         status: 'off',        assignment: null,                phone: '(602) 213-0098', cert: 'OSHA 10',         since: '2023' },
  { id: 'CRW-006', name: 'Jerome Banks',   role: 'Crew Leader',      status: 'dispatched', assignment: 'Lakeview Townhomes', phone: '(813) 440-2291', cert: 'GAF, CertainTeed', since: '2016' },
  { id: 'CRW-007', name: 'Tamara Wills',   role: 'Inspector',        status: 'available',  assignment: null,                phone: '(404) 881-5533', cert: 'HAAG Certified',   since: '2022' },
  { id: 'CRW-008', name: 'Hector Fuentes', role: 'Roofer II',        status: 'dispatched', assignment: 'Highland Oaks Estate', phone: '(512) 903-7102', cert: 'OSHA 10',      since: '2021' },
];

const STATUS_VARIANT: Record<string, 'cyan' | 'success' | 'tertiary'> = {
  dispatched: 'cyan',
  available:  'success',
  off:        'tertiary',
};

const STATUS_DOT: Record<string, string> = {
  dispatched: '#00D4AA',
  available:  '#4ade80',
  off:        '#8B95A1',
};

export default function ContractorCrewPage() {
  const dispatched = CREW.filter(c => c.status === 'dispatched').length;
  const available  = CREW.filter(c => c.status === 'available').length;
  const off        = CREW.filter(c => c.status === 'off').length;

  return (
    <PortalLayout role="contractor">
      <SectionHeader
        title="Crew Roster"
        subtitle="Field personnel, roles, and current assignments"
        action={<Button variant="primary" accent={CYAN} icon="person_add">Add Member</Button>}
      />

      {/* Status summary */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: 'Dispatched', val: dispatched, color: CYAN },
          { label: 'Available',  val: available,  color: '#4ade80' },
          { label: 'Off Duty',   val: off,         color: '#8B95A1' },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1D23] border border-[#2A2D35] p-4 text-center" style={{ borderRadius: '0.125rem' }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
              <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest">{s.label}</span>
            </div>
            <p className="font-['Barlow_Condensed',sans-serif] text-[36px] font-bold leading-none" style={{ color: s.color }}>{s.val}</p>
          </div>
        ))}
      </div>

      {/* Crew cards */}
      <Card>
        <CardHeader
          title={`All Personnel (${CREW.length})`}
          icon="groups"
          accent={CYAN}
          action={<Button variant="ghost" accent={CYAN} size="sm" icon="filter_list">Filter</Button>}
        />
        <div className="divide-y divide-[#2A2D35]">
          {CREW.map((c) => (
            <div key={c.id} className="p-4 hover:bg-white/[0.02] transition-colors flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center font-['Barlow_Condensed',sans-serif] font-bold text-[15px] shrink-0"
                style={{ background: `${STATUS_DOT[c.status]}18`, color: STATUS_DOT[c.status], border: `1px solid ${STATUS_DOT[c.status]}30` }}
              >
                {c.name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap mb-0.5">
                  <span className="font-['Manrope',sans-serif] text-[14px] font-semibold text-[#FFFFFF]">{c.name}</span>
                  <Badge variant={STATUS_VARIANT[c.status]}>{c.status}</Badge>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-[11px] text-[#8B95A1] font-['Manrope',sans-serif]">
                  <span>{c.role}</span>
                  <span className="font-['JetBrains_Mono',monospace] text-[10px]">{c.id}</span>
                  <span>Since {c.since}</span>
                </div>
                {c.assignment && (
                  <div className="flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[12px]" style={{ color: CYAN }}>location_on</span>
                    <span className="font-['Manrope',sans-serif] text-[11px]" style={{ color: CYAN }}>{c.assignment}</span>
                  </div>
                )}
              </div>

              {/* Right: cert + contact */}
              <div className="shrink-0 text-right hidden sm:block">
                <p className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] mb-1">{c.cert}</p>
                <p className="font-['JetBrains_Mono',monospace] text-[11px] text-[#FFFFFF]">{c.phone}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-1.5 shrink-0">
                <Button variant="ghost" accent={CYAN} size="sm" icon="edit">Edit</Button>
                {c.status === 'available' && (
                  <Button variant="ghost" accent={CYAN} size="sm" icon="local_shipping">Dispatch</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </PortalLayout>
  );
}

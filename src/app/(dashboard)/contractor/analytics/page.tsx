import PortalLayout from '@/components/PortalLayout';
import { Card, CardHeader, SectionHeader, StatCard } from '@/components/ui';
import { CLAIMS, ESTIMATES } from '@/lib/api';

const CYAN = '#00D4AA';

const STAGES = ['Filed', 'Inspection', 'Estimate', 'Review', 'Approval', 'Settlement'];

const MONTHLY = [
  { month: 'May',  revenue: 48200 },
  { month: 'Jun',  revenue: 61800 },
  { month: 'Jul',  revenue: 39500 },
  { month: 'Aug',  revenue: 72400 },
  { month: 'Sep',  revenue: 85100 },
  { month: 'Oct',  revenue: 98700 },
];

const CONVERSION = [
  { label: 'Estimates Submitted', val: ESTIMATES.length, color: '#adc6ff' },
  { label: 'Under Review',        val: ESTIMATES.filter(e => e.status === 'under_review').length, color: '#ff9100' },
  { label: 'Approved',            val: ESTIMATES.filter(e => e.status === 'approved').length, color: '#4ade80' },
  { label: 'Rejected',            val: ESTIMATES.filter(e => e.status === 'rejected').length, color: '#f43f5e' },
];

function BarChart({ data, maxVal, accent }: { data: { label: string; value: number }[]; maxVal: number; accent: string }) {
  return (
    <div className="flex items-end gap-3 h-32 px-2">
      {data.map(d => {
        const pct = maxVal > 0 ? (d.value / maxVal) * 100 : 0;
        return (
          <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
            <span className="font-['Barlow_Condensed',sans-serif] text-[11px] font-bold" style={{ color: accent }}>
              {d.value}
            </span>
            <div className="w-full flex flex-col justify-end" style={{ height: '80px' }}>
              <div
                className="w-full transition-all duration-500"
                style={{ height: `${pct}%`, background: `linear-gradient(180deg, ${accent} 0%, ${accent}60 100%)`, borderRadius: '2px 2px 0 0', minHeight: pct > 0 ? 4 : 0 }}
              />
            </div>
            <span className="font-['JetBrains_Mono',monospace] text-[8px] text-[#8B95A1] uppercase tracking-wider text-center leading-tight">
              {d.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function LineChart({ data, accent }: { data: { month: string; revenue: number }[]; accent: string }) {
  const max = Math.max(...data.map(d => d.revenue));
  const W = 400; const H = 100; const PAD = 16;
  const pts = data.map((d, i) => ({
    x: PAD + (i / (data.length - 1)) * (W - PAD * 2),
    y: H - PAD - ((d.revenue / max) * (H - PAD * 2)),
    ...d,
  }));
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const area = `${path} L ${pts[pts.length - 1].x} ${H - PAD} L ${pts[0].x} ${H - PAD} Z`;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: '120px' }}>
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#lineGrad)" />
        <path d={path} fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map(p => (
          <circle key={p.month} cx={p.x} cy={p.y} r="3" fill={accent} stroke="#1A1D23" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="flex justify-between px-4 mt-1">
        {data.map(d => (
          <span key={d.month} className="font-['JetBrains_Mono',monospace] text-[8px] text-[#8B95A1]">{d.month}</span>
        ))}
      </div>
    </div>
  );
}

export default function ContractorAnalyticsPage() {
  const stageCounts = STAGES.map(s => ({
    label: s,
    value: CLAIMS.filter(c => c.stage === s).length,
  }));
  const maxStage = Math.max(...stageCounts.map(s => s.value), 1);

  const totalRevenue = MONTHLY.reduce((s, m) => s + m.revenue, 0);
  const avgClaimValue = Math.round(CLAIMS.reduce((s, c) => s + c.estimateAmount, 0) / CLAIMS.length);
  const approvedEsts = ESTIMATES.filter(e => e.status === 'approved');
  const conversionRate = Math.round((approvedEsts.length / ESTIMATES.length) * 100);

  const topClaims = [...CLAIMS].sort((a, b) => b.estimateAmount - a.estimateAmount).slice(0, 5);

  return (
    <PortalLayout role="contractor">
      <SectionHeader
        title="Analytics"
        subtitle="Revenue trends, claims funnel, and performance metrics"
      />

      {/* KPI row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Total Revenue"     value={`$${(totalRevenue / 1000).toFixed(0)}K`} accent={CYAN}    icon="paid"           delta="+14%" />
        <StatCard label="Avg Claim Value"   value={`$${(avgClaimValue / 1000).toFixed(1)}K`} accent="#4ade80" icon="analytics"       delta="+8%" />
        <StatCard label="Conversion Rate"   value={`${conversionRate}%`}                    accent="#ff9100"  icon="percent"         sub="Estimates → Approved" />
        <StatCard label="Avg Days to Close" value="24"                                       accent="#adc6ff"  icon="schedule"        sub="Days" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* Monthly revenue */}
        <Card accent={CYAN}>
          <CardHeader title="Monthly Revenue" icon="paid" accent={CYAN} />
          <div className="p-4">
            <div className="flex items-end justify-between mb-2">
              <span className="font-['Barlow_Condensed',sans-serif] text-[24px] font-bold" style={{ color: CYAN }}>
                ${(MONTHLY[MONTHLY.length - 1].revenue / 1000).toFixed(1)}K
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#4ade80]">+16% MoM</span>
            </div>
            <LineChart data={MONTHLY} accent={CYAN} />
          </div>
        </Card>

        {/* Claims funnel */}
        <Card accent={CYAN}>
          <CardHeader title="Claims Funnel" icon="analytics" accent={CYAN} />
          <div className="p-4">
            <BarChart data={stageCounts} maxVal={maxStage} accent={CYAN} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Estimate conversion */}
        <Card accent={CYAN}>
          <CardHeader title="Estimate Pipeline" icon="receipt_long" accent={CYAN} />
          <div className="p-5 flex flex-col gap-3">
            {CONVERSION.map(item => (
              <div key={item.label}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF]">{item.label}</span>
                  <span className="font-['Barlow_Condensed',sans-serif] text-[16px] font-bold" style={{ color: item.color }}>{item.val}</span>
                </div>
                <div className="w-full h-1.5 bg-[#1A1D23]" style={{ borderRadius: '0.125rem' }}>
                  <div
                    className="h-full transition-all duration-500"
                    style={{ width: `${(item.val / ESTIMATES.length) * 100}%`, background: item.color, borderRadius: '0.125rem' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top claims by value */}
        <Card accent={CYAN}>
          <CardHeader title="Top Claims by Value" icon="leaderboard" accent={CYAN} />
          <div className="divide-y divide-[#2A2D35]">
            {topClaims.map((c, i) => (
              <div key={c.id} className="flex items-center gap-3 px-5 py-3">
                <span className="font-['Barlow_Condensed',sans-serif] text-[18px] font-bold text-[#2A2D35] w-6 shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-['Manrope',sans-serif] text-[13px] font-semibold text-[#FFFFFF] truncate">{c.project}</p>
                  <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{c.id} · {c.stage}</p>
                </div>
                <span className="font-['Barlow_Condensed',sans-serif] text-[15px] font-bold shrink-0" style={{ color: CYAN }}>
                  ${c.estimateAmount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PortalLayout>
  );
}

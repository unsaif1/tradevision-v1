'use client';

import { useEffect, useState } from 'react';
import ActivityFeed from '@/components/ActivityFeed';
import { Badge, Card, CardHeader, StatCard, SectionHeader, Button, ProgressBar } from '@/components/ui';
import { ACTIVITY, CLAIMS, fetchClaims, fetchNotifications, getStoredToken, type Claim, type Notification } from '@/lib/api';

const CYAN = '#00D4AA';

const STAGE_PROGRESS: Record<string, number> = {
  Filed: 5, Inspection: 20, Estimate: 40, Review: 60, Approval: 85, Settlement: 100,
};

export default function ContractorDashboardClient() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getStoredToken();
    Promise.all([
      fetchClaims(token),
      fetchNotifications('contractor', token),
    ]).then(([c, n]) => {
      setClaims(c);
      setNotifications(n);
    }).finally(() => setLoading(false));
  }, []);

  const activeClaims = claims.filter(c => c.status === 'active').slice(0, 5);
  const pendingEsts = claims.filter(c => c.stage === 'Estimate').length;
  const revenue = claims.reduce((s, c) => s + c.estimateAmount, 0);

  const alertLowStock = { label: 'Low Stock', count: 3, color: '#ff9100', icon: 'inventory_2', detail: 'Ice & Water Shield, Shingles, Nails' };
  const alertRevision = claims.filter(c => c.stage === 'Review').length;

  return (
    <>
      <SectionHeader
        title="Dashboard"
        subtitle="Active jobs, crew status, and key metrics"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Active Claims"     value={loading ? '—' : activeClaims.length} accent={CYAN}     icon="construction" />
        <StatCard label="Crew Dispatched"   value={7}                                   accent="#4ade80"  icon="groups" />
        <StatCard label="Pending Estimates" value={loading ? '—' : pendingEsts}         accent="#ff9100"  icon="receipt_long" />
        <StatCard label="Monthly Revenue"   value={loading ? '—' : `$${Math.round(revenue / 1000)}K`} accent={CYAN} icon="paid" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Active jobs */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Card>
            <CardHeader
              title="Active Jobs"
              icon="construction"
              accent={CYAN}
              action={<Button variant="ghost" accent={CYAN} size="sm" icon="open_in_new">All Projects</Button>}
            />
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-6 h-6 border-2 border-[#00D4AA] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="divide-y divide-[#2A2D35]">
                {(activeClaims.length > 0 ? activeClaims : CLAIMS.filter(c => c.status === 'active').slice(0, 3)).map((c) => (
                  <div key={c.id} className="p-4 hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-['JetBrains_Mono',monospace] text-[10px]" style={{ color: CYAN }}>{c.id}</span>
                          <Badge variant="tertiary">{c.stage}</Badge>
                        </div>
                        <p className="font-['Manrope',sans-serif] text-[14px] font-semibold text-[#FFFFFF]">{c.project}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-['Barlow_Condensed',sans-serif] text-[16px] font-bold text-[#FFFFFF]">
                          ${c.estimateAmount.toLocaleString()}
                        </p>
                        <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{c.lastUpdate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <ProgressBar value={STAGE_PROGRESS[c.stage] ?? 0} max={100} showPct accent={CYAN} />
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className="material-symbols-outlined text-[14px]" style={{ color: CYAN }}>location_on</span>
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] truncate max-w-[80px]">{c.peril}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Alerts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              alertLowStock,
              { label: 'Revision Needed', count: alertRevision || 1, color: '#f43f5e', icon: 'edit_note', detail: 'EST pending review' },
            ].map((a) => (
              <div
                key={a.label}
                className="p-4 cursor-pointer hover:opacity-90 transition-opacity"
                style={{ background: `${a.color}08`, border: `1px solid ${a.color}30`, borderLeft: `3px solid ${a.color}`, borderRadius: '0.125rem' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-[18px]" style={{ color: a.color }}>{a.icon}</span>
                  <span className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-widest" style={{ color: a.color }}>{a.label}</span>
                  <span className="font-['Barlow_Condensed',sans-serif] text-[16px] font-bold ml-auto" style={{ color: a.color }}>{a.count}</span>
                </div>
                <p className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: activity feed */}
        <ActivityFeed events={ACTIVITY} accent={CYAN} />
      </div>
    </>
  );
}

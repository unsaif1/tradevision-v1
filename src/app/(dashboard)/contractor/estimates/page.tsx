import PortalLayout from '@/components/PortalLayout';
import EstimatesClient from '@/components/EstimatesClient';
import { SectionHeader, StatCard } from '@/components/ui';
import { ESTIMATES } from '@/lib/api';

const CYAN = '#00D4AA';

export default function ContractorEstimatesPage() {
  const approved = ESTIMATES.filter(e => e.status === 'approved');
  const pending  = ESTIMATES.filter(e => e.status === 'submitted' || e.status === 'under_review');
  const total    = approved.reduce((s, e) => s + e.total, 0);

  return (
    <PortalLayout role="contractor">
      <SectionHeader
        title="Estimates"
        subtitle="Submitted and draft estimates across all claims"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Total Estimates"  value={ESTIMATES.length}  accent={CYAN}    icon="receipt_long" />
        <StatCard label="Approved"         value={approved.length}   accent="#4ade80" icon="check_circle" />
        <StatCard label="Pending Review"   value={pending.length}    accent="#ff9100" icon="pending" />
        <StatCard label="Approved Value"   value={`$${(total / 1000).toFixed(0)}K`} accent="#4ade80" icon="payments" />
      </div>

      <EstimatesClient initialEstimates={ESTIMATES} accent={CYAN} />
    </PortalLayout>
  );
}

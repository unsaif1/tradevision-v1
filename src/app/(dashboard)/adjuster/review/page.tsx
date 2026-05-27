import PortalLayout from '@/components/PortalLayout';
import ReviewClient from '@/components/ReviewClient';
import { SectionHeader, StatCard } from '@/components/ui';
import { CLAIMS, ESTIMATES } from '@/lib/api';

const PINK = '#E21E51';

const reviewable = CLAIMS.filter(c => c.status === 'active' && ['Review', 'Estimate', 'Approval'].includes(c.stage));

export default function AdjusterReviewPage() {
  const totalDelta = reviewable.reduce((s, c) => {
    const est = ESTIMATES.find(e => e.claimId === c.id);
    return s + (est ? est.total - c.xactimateAmount : 0);
  }, 0);

  return (
    <PortalLayout role="adjuster">
      <SectionHeader
        title="Review Queue"
        subtitle="Side-by-side estimate comparison — approve, request revision, or reject"
      />

      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard label="Pending Review" value={reviewable.length}    accent={PINK}    icon="rate_review" />
        <StatCard label="Total Delta"    value={`$${(totalDelta / 1000).toFixed(1)}K`} accent="#ff9100" icon="balance" />
        <StatCard label="High Priority"  value={reviewable.filter(c => c.stage === 'Review').length} accent="#f43f5e" icon="priority_high" />
      </div>

      <ReviewClient claims={reviewable} estimates={ESTIMATES} />
    </PortalLayout>
  );
}

import PortalLayout from '@/components/PortalLayout';
import DocumentsClient from '@/components/DocumentsClient';
import { SectionHeader, StatCard } from '@/components/ui';
import { DOCUMENTS } from '@/lib/api';

const PINK = '#E21E51';

const adjDocs = DOCUMENTS.filter(d => d.sharedWithAdjuster || d.uploadedBy.role === 'adjuster');

export default function AdjusterDocumentsPage() {
  const pending  = adjDocs.filter(d => d.status === 'pending').length;
  const approved = adjDocs.filter(d => d.status === 'approved').length;
  const xact     = adjDocs.filter(d => d.type === 'Xactimate').length;

  return (
    <PortalLayout role="adjuster">
      <SectionHeader
        title="Documents"
        subtitle="Contractor submissions, Xactimate files, and review queue"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Total Files"    value={adjDocs.length} accent={PINK}    icon="folder_open" />
        <StatCard label="Pending Review" value={pending}        accent="#ff9100"  icon="rate_review" />
        <StatCard label="Approved"       value={approved}       accent="#4ade80"  icon="check_circle" />
        <StatCard label="Xactimate"      value={xact}           accent={PINK}     icon="rule" />
      </div>

      <DocumentsClient initialDocs={adjDocs} mode="adjuster" accent={PINK} fetchOnMount />
    </PortalLayout>
  );
}

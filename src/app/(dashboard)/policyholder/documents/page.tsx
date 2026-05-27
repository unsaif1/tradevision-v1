import PortalLayout from '@/components/PortalLayout';
import DocumentsClient from '@/components/DocumentsClient';
import { SectionHeader, StatCard } from '@/components/ui';
import { DOCUMENTS } from '@/lib/api';

const RED = '#e21e51';

export default function PolicyholderDocumentsPage() {
  const allDocs  = DOCUMENTS.filter(d => d.sharedWithPolicyholder || d.uploadedBy.role === 'policyholder');
  const pending  = allDocs.filter(d => d.status === 'pending').length;
  const approved = allDocs.filter(d => d.status === 'approved').length;

  return (
    <PortalLayout role="policyholder">
      <SectionHeader
        title="My Documents"
        subtitle="Documents shared with you, your uploads, and pending requests"
      />

      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard label="Total Files"  value={allDocs.length} accent={RED}      icon="folder_open" />
        <StatCard label="From Team"    value={allDocs.filter(d => d.uploadedBy.role !== 'policyholder').length} accent="#adc6ff" icon="folder_shared" />
        <StatCard label="Approved"     value={approved}       accent="#4ade80"   icon="check_circle" />
      </div>

      <DocumentsClient initialDocs={allDocs} mode="policyholder" accent={RED} fetchOnMount />
    </PortalLayout>
  );
}

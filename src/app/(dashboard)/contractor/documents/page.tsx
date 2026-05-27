import PortalLayout from '@/components/PortalLayout';
import DocumentsClient from '@/components/DocumentsClient';
import { SectionHeader, Button, StatCard } from '@/components/ui';
import { DOCUMENTS } from '@/lib/api';

const CYAN = '#00D4AA';

const ctxDocs = DOCUMENTS.filter(d => d.uploadedBy.role === 'contractor' || d.type === 'Xactimate');

export default function ContractorDocumentsPage() {
  const pending  = ctxDocs.filter(d => d.status === 'pending').length;
  const approved = ctxDocs.filter(d => d.status === 'approved').length;
  const revision = ctxDocs.filter(d => d.status === 'needs_revision' || d.status === 'rejected').length;

  return (
    <PortalLayout role="contractor">
      <SectionHeader
        title="Documents"
        subtitle="Claim documents, photos, invoices, and certifications"
        action={<Button variant="ghost" accent={CYAN} icon="request_page">Request from Policyholder</Button>}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Total Files"    value={ctxDocs.length} accent={CYAN}    icon="folder_open" />
        <StatCard label="Pending Review" value={pending}        accent="#ff9100"  icon="pending" />
        <StatCard label="Approved"       value={approved}       accent="#4ade80"  icon="check_circle" />
        <StatCard label="Needs Revision" value={revision}       accent="#f43f5e"  icon="edit_note" />
      </div>

      <DocumentsClient initialDocs={ctxDocs} mode="contractor" accent={CYAN} fetchOnMount />
    </PortalLayout>
  );
}

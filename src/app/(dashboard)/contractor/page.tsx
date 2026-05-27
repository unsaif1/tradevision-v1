import PortalLayout from '@/components/PortalLayout';
import ContractorDashboardClient from '@/components/ContractorDashboardClient';

export default function ContractorDashboardPage() {
  return (
    <PortalLayout role="contractor">
      <ContractorDashboardClient />
    </PortalLayout>
  );
}

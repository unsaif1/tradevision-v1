import PortalLayout from '@/components/PortalLayout';
import MessagesClient from '@/components/MessagesClient';
import { SectionHeader } from '@/components/ui';
import { THREADS, PARTICIPANTS } from '@/lib/api';

const CYAN = '#00D4AA';

export default function ContractorMessagesPage() {
  return (
    <PortalLayout role="contractor">
      <SectionHeader
        title="Messages"
        subtitle="Claim threads with adjusters and policyholders"
      />
      <MessagesClient
        threads={THREADS}
        me={PARTICIPANTS.marcus}
        accent={CYAN}
        fetchOnMount
      />
    </PortalLayout>
  );
}

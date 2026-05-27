import PortalLayout from '@/components/PortalLayout';
import MessagesClient from '@/components/MessagesClient';
import { SectionHeader } from '@/components/ui';
import { THREADS, PARTICIPANTS } from '@/lib/api';

const PINK = '#E21E51';

export default function AdjusterMessagesPage() {
  return (
    <PortalLayout role="adjuster">
      <SectionHeader
        title="Messages"
        subtitle="Claim threads with contractors and policyholders"
      />
      <MessagesClient
        threads={THREADS}
        me={PARTICIPANTS.reyes}
        accent={PINK}
        fetchOnMount
      />
    </PortalLayout>
  );
}

import PortalLayout from '@/components/PortalLayout';
import MessagesClient from '@/components/MessagesClient';
import { SectionHeader } from '@/components/ui';
import { THREADS, PARTICIPANTS } from '@/lib/api';

const RED = '#e21e51';

// Policyholder only sees threads they're part of
const PH_THREADS = THREADS.filter(t =>
  t.participants.some(p => p.role === 'policyholder')
);

export default function PolicyholderMessagesPage() {
  return (
    <PortalLayout role="policyholder">
      <SectionHeader
        title="Messages"
        subtitle="Your threads with adjusters and contractors"
      />
      <MessagesClient
        threads={PH_THREADS.length > 0 ? PH_THREADS : THREADS.slice(0, 1)}
        me={PARTICIPANTS.callahan}
        accent={RED}
        fetchOnMount
      />
    </PortalLayout>
  );
}

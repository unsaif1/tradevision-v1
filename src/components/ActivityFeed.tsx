import type { ActivityEvent } from '@/lib/api';

const TYPE_ICON: Record<ActivityEvent['type'], string> = {
  claim_created:       'add_circle',
  document_uploaded:   'upload_file',
  message_sent:        'chat',
  estimate_submitted:  'receipt_long',
  estimate_approved:   'check_circle',
  revision_requested:  'edit_note',
  status_changed:      'sync',
};

const ROLE_COLOR: Record<string, string> = {
  contractor:   '#00D4AA',
  adjuster:     '#E21E51',
  policyholder: '#e21e51',
  system:       '#8B95A1',
};

const TYPE_COLOR: Record<ActivityEvent['type'], string> = {
  claim_created:       '#4ade80',
  document_uploaded:   '#adc6ff',
  message_sent:        '#00D4AA',
  estimate_submitted:  '#ff9100',
  estimate_approved:   '#4ade80',
  revision_requested:  '#ff9100',
  status_changed:      '#8B95A1',
};

export default function ActivityFeed({
  events,
  accent,
  maxItems = 8,
}: {
  events: ActivityEvent[];
  accent: string;
  maxItems?: number;
}) {
  const visible = events.slice(0, maxItems);

  return (
    <div className="bg-[#1A1D23] border border-[#2A2D35] overflow-hidden" style={{ borderRadius: '0.125rem', borderLeftWidth: 3, borderLeftColor: accent }}>
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-3 border-b border-[#2A2D35]">
        <span className="material-symbols-outlined text-[18px]" style={{ color: accent }}>history</span>
        <h2 className="font-['Barlow_Condensed',sans-serif] text-[13px] font-semibold tracking-[0.1em] uppercase text-[#FFFFFF]">
          Recent Activity
        </h2>
      </div>

      {/* Events */}
      <div className="divide-y divide-[#2A2D35]">
        {visible.map((ev, i) => (
          <div key={ev.id} className="flex items-start gap-3 px-4 py-3 hover:bg-white/[0.02] transition-colors">
            {/* Icon + timeline line */}
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-7 h-7 rounded-sm flex items-center justify-center"
                style={{ background: `${TYPE_COLOR[ev.type]}12`, border: `1px solid ${TYPE_COLOR[ev.type]}25` }}
              >
                <span className="material-symbols-outlined text-[14px]" style={{ color: TYPE_COLOR[ev.type] }}>
                  {TYPE_ICON[ev.type]}
                </span>
              </div>
              {i < visible.length - 1 && (
                <div className="w-px h-4 bg-[#2A2D35] mt-1" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-1">
              <p className="font-['Manrope',sans-serif] text-[12px] text-[#FFFFFF] leading-snug">{ev.description}</p>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span
                  className="font-['JetBrains_Mono',monospace] text-[9px] px-1.5 py-0.5"
                  style={{
                    background: `${ROLE_COLOR[ev.actorRole]}12`,
                    color: ROLE_COLOR[ev.actorRole],
                    border: `1px solid ${ROLE_COLOR[ev.actorRole]}25`,
                    borderRadius: '0.125rem',
                  }}
                >
                  {ev.actor}
                </span>
                <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{ev.timestamp}</span>
                {ev.claimId && (
                  <span className="font-['JetBrains_Mono',monospace] text-[9px]" style={{ color: accent }}>{ev.claimId}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

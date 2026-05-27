'use client';

import { useState } from 'react';
import type { Notification } from '@/lib/api';

const TYPE_ICON: Record<Notification['type'], string> = {
  new_message:         'chat',
  document_shared:     'folder_open',
  estimate_approved:   'check_circle',
  estimate_rejected:   'cancel',
  revision_requested:  'edit_note',
  claim_update:        'assignment_late',
};

const TYPE_COLOR: Record<Notification['type'], string> = {
  new_message:         '#00D4AA',
  document_shared:     '#adc6ff',
  estimate_approved:   '#4ade80',
  estimate_rejected:   '#f43f5e',
  revision_requested:  '#ff9100',
  claim_update:        '#E21E51',
};

export default function NotificationBell({
  notifications,
  accent,
}: {
  notifications: Notification[];
  accent: string;
}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(notifications);
  const unread = items.filter(n => !n.read).length;

  function markAllRead() {
    setItems(prev => prev.map(n => ({ ...n, read: true })));
  }

  return (
    <div className="relative">
      <button
        className="p-1.5 text-[#8B95A1] hover:text-[#FFFFFF] transition-colors relative"
        onClick={() => setOpen(o => !o)}
        aria-label="Notifications"
      >
        <span className="material-symbols-outlined">notifications</span>
        {unread > 0 && (
          <span
            className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 rounded-full text-[9px] font-bold font-['JetBrains_Mono',monospace] flex items-center justify-center px-0.5"
            style={{ background: accent, color: '#0D0F11' }}
          >
            {unread}
          </span>
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div
            className="absolute right-0 top-full mt-2 w-80 bg-[#1A1D23] border border-[#2A2D35] shadow-2xl z-50 overflow-hidden"
            style={{ borderRadius: '0.125rem' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#2A2D35]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]" style={{ color: accent }}>notifications</span>
                <span className="font-['Barlow_Condensed',sans-serif] text-[13px] font-semibold tracking-[0.1em] uppercase text-[#FFFFFF]">
                  Notifications
                </span>
                {unread > 0 && (
                  <span
                    className="text-[9px] font-['JetBrains_Mono',monospace] font-bold px-1.5 py-0.5 rounded-sm"
                    style={{ background: `${accent}22`, color: accent }}
                  >
                    {unread} new
                  </span>
                )}
              </div>
              {unread > 0 && (
                <button
                  className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] hover:text-[#FFFFFF] uppercase tracking-wider transition-colors"
                  onClick={markAllRead}
                >
                  Mark all read
                </button>
              )}
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto divide-y divide-[#2A2D35]">
              {items.length === 0 && (
                <p className="p-4 text-center font-['Manrope',sans-serif] text-[12px] text-[#8B95A1]">No notifications</p>
              )}
              {items.map(n => (
                <div
                  key={n.id}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  style={!n.read ? { borderLeft: `2px solid ${accent}` } : { borderLeft: '2px solid transparent' }}
                  onClick={() => {
                    setItems(prev => prev.map(x => x.id === n.id ? { ...x, read: true } : x));
                    setOpen(false);
                  }}
                >
                  <span
                    className="material-symbols-outlined text-[16px] mt-0.5 shrink-0"
                    style={{ color: TYPE_COLOR[n.type] }}
                  >
                    {TYPE_ICON[n.type]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-['Manrope',sans-serif] text-[12px] leading-snug ${n.read ? 'text-[#8B95A1]' : 'text-[#FFFFFF] font-semibold'}`}>
                      {n.text}
                    </p>
                    <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] mt-0.5">{n.timestamp}</p>
                  </div>
                  {!n.read && (
                    <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: accent }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

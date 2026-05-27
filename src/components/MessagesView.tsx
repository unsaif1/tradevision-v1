"use client";

import React, { useState } from "react";
import { Card, CardHeader, SectionHeader, Button } from "@/components/ui";

const CYAN = "#00f0ff";
const PINK = "#ff007a";
const RED = "#e21e51";

interface Thread {
  id: string;
  claimId: string | null;
  project?: string;
  address?: string;
  subject: string;
  preview: string;
  participants?: { name: string; role: string }[];
  from?: string;
  fromRole?: string;
  unread: number;
  lastTime?: string;
  time?: string;
  lastDate?: string;
  date?: string;
  pinned?: boolean;
}

interface MessagesViewProps {
  role: "contractor" | "adjuster" | "policyholder";
  threads: Thread[];
  accentColor: string;
}

const ROLE_BORDER: Record<string, string> = {
  adjuster: PINK,
  contractor: CYAN,
  policyholder: RED,
};

export default function MessagesView({ role, threads, accentColor }: MessagesViewProps) {
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const [showCompose, setShowCompose] = useState(false);
  const [composeText, setComposeText] = useState("");
  const [sentMessages, setSentMessages] = useState<Array<{ id: string; text: string; time: string; from: string }>>([]);
  const [filterUnread, setFilterUnread] = useState(false);

  const totalUnread = threads.reduce((s, t) => s + t.unread, 0);
  const displayThreads = filterUnread ? threads.filter(t => t.unread > 0) : threads;

  const handleSend = () => {
    if (!composeText.trim()) return;
    const newMsg = {
      id: `msg-${Date.now()}`,
      text: composeText.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      from: "You",
    };
    setSentMessages(prev => [...prev, newMsg]);
    setComposeText("");
  };

  const handleMarkAllRead = () => {
    // In a real app this would call the API
    alert("All messages marked as read");
  };

  return (
    <>
      <SectionHeader
        title="Messages"
        subtitle="Threads with your adjuster and contractor"
        action={
          <Button variant="primary" accent={accentColor} icon="edit_note" onClick={() => setShowCompose(true)}>
            New Message
          </Button>
        }
      />

      {/* Unread indicator */}
      {totalUnread > 0 && (
        <div
          className="flex items-center gap-3 p-4 mb-6"
          style={{ background: `${accentColor}08`, border: `1px solid ${accentColor}30`, borderLeft: `3px solid ${accentColor}`, borderRadius: "0.125rem" }}
        >
          <span className="material-symbols-outlined text-[20px]" style={{ color: accentColor }}>notifications_active</span>
          <p className="font-['Manrope',sans-serif] text-[13px] text-[#dee2ec]">
            You have <span className="font-bold" style={{ color: accentColor }}>{totalUnread} unread messages</span> — review and respond when ready.
          </p>
          <Button variant="ghost" accent={accentColor} size="sm" icon="done_all" className="ml-auto shrink-0" onClick={handleMarkAllRead}>
            Mark All Read
          </Button>
        </div>
      )}

      {/* Stats strip */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {[
          { label: "Unread", val: totalUnread, color: accentColor },
          { label: "Active Threads", val: threads.filter(t => t.unread > 0).length, color: "#ff9100" },
          { label: "Total", val: threads.length, color: "#4ade80" },
        ].map((s) => (
          <div key={s.label} className="bg-[#111820] border border-[#2D3748] px-5 py-3 flex items-center gap-3" style={{ borderRadius: "0.125rem", borderLeftWidth: 2, borderLeftColor: s.color }}>
            <p className="font-['Barlow_Condensed',sans-serif] text-[24px] font-bold leading-none" style={{ color: s.color }}>{s.val}</p>
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8896A8] uppercase tracking-widest">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Thread list */}
      <Card>
        <CardHeader
          title={`All Threads (${displayThreads.length})`}
          icon="forum"
          accent={accentColor}
          action={
            <div className="flex gap-2">
              <Button variant="ghost" accent={accentColor} size="sm" icon="filter_list" onClick={() => setFilterUnread(!filterUnread)}>
                {filterUnread ? "Show All" : "Unread Only"}
              </Button>
            </div>
          }
        />
        <div className="divide-y divide-[#2D3748]">
          {displayThreads.map((t) => {
            const otherRole = t.participants?.find(p => p.role !== role)?.role || t.fromRole || "";
            const borderColor = ROLE_BORDER[otherRole] || accentColor;
            const isSelected = selectedThread?.id === t.id;

            return (
              <div
                key={t.id}
                className={`flex items-start gap-4 p-4 transition-colors cursor-pointer group ${isSelected ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"}`}
                style={{ borderLeft: `3px solid ${t.unread > 0 ? borderColor : "#2D3748"}` }}
                onClick={() => setSelectedThread(isSelected ? null : t)}
              >
                {/* Unread dot */}
                <div className="mt-1.5 shrink-0 w-2 h-2">
                  {t.unread > 0 && (
                    <span className="w-2 h-2 rounded-full block" style={{ background: borderColor }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {t.claimId && (
                        <span className="font-['JetBrains_Mono',monospace] text-[10px]" style={{ color: accentColor }}>{t.claimId}</span>
                      )}
                      {t.project && (
                        <span className="font-['Manrope',sans-serif] text-[10px] text-[#8896A8]">{t.project}</span>
                      )}
                      {t.address && (
                        <span className="font-['Manrope',sans-serif] text-[10px] text-[#8896A8]">{t.address}</span>
                      )}
                      {t.pinned && (
                        <span className="material-symbols-outlined text-[12px] text-[#ff9100]">push_pin</span>
                      )}
                    </div>
                    <p className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8896A8] shrink-0">{t.lastDate || t.date}</p>
                  </div>

                  <p className={`font-['Manrope',sans-serif] text-[13px] mb-1 ${t.unread > 0 ? "font-bold text-[#dee2ec]" : "font-medium text-[#aab3c0]"}`}>
                    {t.subject}
                  </p>
                  <p className="font-['Manrope',sans-serif] text-[11px] text-[#8896A8] truncate">{t.preview}</p>

                  {/* Participants or sender */}
                  <div className="flex items-center gap-1.5 mt-2">
                    {t.participants?.map((p) => (
                      <span
                        key={p.name}
                        className="font-['JetBrains_Mono',monospace] text-[9px] px-1.5 py-0.5"
                        style={{
                          background: `${ROLE_BORDER[p.role] || accentColor}15`,
                          color: ROLE_BORDER[p.role] || accentColor,
                          border: `1px solid ${ROLE_BORDER[p.role] || accentColor}30`,
                          borderRadius: "0.125rem",
                        }}
                      >
                        {p.role.slice(0, 3).toUpperCase()} · {p.name}
                      </span>
                    ))}
                    {t.from && t.fromRole && (
                      <span
                        className="font-['JetBrains_Mono',monospace] text-[9px] px-1.5 py-0.5"
                        style={{
                          background: `${ROLE_BORDER[t.fromRole] || accentColor}15`,
                          color: ROLE_BORDER[t.fromRole] || accentColor,
                          border: `1px solid ${ROLE_BORDER[t.fromRole] || accentColor}30`,
                          borderRadius: "0.125rem",
                        }}
                      >
                        {t.fromRole === "adjuster" ? "ADJ" : t.fromRole === "contractor" ? "CTR" : "PH"} · {t.from}
                      </span>
                    )}
                  </div>

                  {/* Expanded thread view */}
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-[#2D3748]">
                      <div className="bg-[#0a0e14] p-4 mb-3" style={{ borderLeft: `2px solid ${borderColor}` }}>
                        <p className="font-['Manrope',sans-serif] text-[12px] text-[#aab3c0] leading-relaxed">{t.preview}</p>
                      </div>

                      {sentMessages.filter(m => m.id.startsWith(`msg-`)).length > 0 && (
                        <div className="space-y-2 mb-3">
                          {sentMessages.map((msg) => (
                            <div key={msg.id} className="bg-[#0a0e14] p-3 ml-8" style={{ borderLeft: `2px solid ${accentColor}` }}>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-['JetBrains_Mono',monospace] text-[9px]" style={{ color: accentColor }}>{msg.from}</span>
                                <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8896A8]">{msg.time}</span>
                              </div>
                              <p className="font-['Manrope',sans-serif] text-[12px] text-[#dee2ec]">{msg.text}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply input */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={composeText}
                          onChange={(e) => setComposeText(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleSend()}
                          placeholder="Type a reply..."
                          className="flex-1 bg-[#0a0e14] border border-[#2D3748] px-3 py-2 font-['Manrope',sans-serif] text-[12px] text-[#dee2ec] placeholder:text-[#8896A8] focus:outline-none focus:border-[#00f0ff] rounded-sm"
                        />
                        <Button variant="primary" accent={accentColor} size="sm" icon="send" onClick={handleSend}>
                          Send
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Unread count + arrow */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  {t.unread > 0 && (
                    <span
                      className="font-['JetBrains_Mono',monospace] text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center"
                      style={{ background: borderColor, color: "#0f141a" }}
                    >
                      {t.unread}
                    </span>
                  )}
                  <span className="material-symbols-outlined text-[16px] text-[#8896A8] group-hover:text-[#00f0ff] transition-colors">
                    {isSelected ? "expand_less" : "chevron_right"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Compose modal */}
      {showCompose && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShowCompose(false)}>
          <div className="bg-[#111820] border border-[#2D3748] w-full max-w-lg mx-4 p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Barlow_Condensed',sans-serif] text-[18px] font-bold text-[#dee2ec] uppercase tracking-wide">New Message</h3>
              <button onClick={() => setShowCompose(false)} className="text-[#8896A8] hover:text-[#dee2ec]">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8896A8] uppercase tracking-widest block mb-1">Claim ID</label>
                <input
                  type="text"
                  placeholder="CLM-XXXX"
                  className="w-full bg-[#0a0e14] border border-[#2D3748] px-3 py-2 font-['JetBrains_Mono',monospace] text-[12px] text-[#dee2ec] placeholder:text-[#8896A8] focus:outline-none focus:border-[#00f0ff] rounded-sm"
                />
              </div>
              <div>
                <label className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8896A8] uppercase tracking-widest block mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Message subject"
                  className="w-full bg-[#0a0e14] border border-[#2D3748] px-3 py-2 font-['Manrope',sans-serif] text-[12px] text-[#dee2ec] placeholder:text-[#8896A8] focus:outline-none focus:border-[#00f0ff] rounded-sm"
                />
              </div>
              <div>
                <label className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8896A8] uppercase tracking-widest block mb-1">Message</label>
                <textarea
                  value={composeText}
                  onChange={(e) => setComposeText(e.target.value)}
                  placeholder="Type your message..."
                  rows={4}
                  className="w-full bg-[#0a0e14] border border-[#2D3748] px-3 py-2 font-['Manrope',sans-serif] text-[12px] text-[#dee2ec] placeholder:text-[#8896A8] focus:outline-none focus:border-[#00f0ff] rounded-sm resize-none"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-4 justify-end">
              <Button variant="ghost" accent={accentColor} onClick={() => { setShowCompose(false); setComposeText(""); }}>
                Cancel
              </Button>
              <Button variant="primary" accent={accentColor} icon="send" onClick={() => {
                handleSend();
                setShowCompose(false);
              }}>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

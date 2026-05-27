'use client';

import { useState, useRef, useEffect } from 'react';
import type { Thread, Message, Participant } from '@/lib/api';
import { fetchThreads, sendMessage as apiSendMessage, getStoredToken } from '@/lib/api';

const ROLE_ACCENT: Record<string, string> = {
  contractor:   '#00D4AA',
  adjuster:     '#E21E51',
  policyholder: '#E21E51',
  system:       '#5A6170',
};

function Avatar({ p, size = 8 }: { p: Participant; size?: number }) {
  const color = ROLE_ACCENT[p.role];
  return (
    <div
      className={`w-${size} h-${size} rounded-sm flex items-center justify-center font-['Barlow_Condensed',sans-serif] font-bold text-[11px] shrink-0`}
      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
    >
      {p.initials}
    </div>
  );
}

function AttachmentChip({ a }: { a: { id: string; name: string; size: string; type: string } }) {
  return (
    <div
      className="flex items-center gap-2 px-2.5 py-1.5 mt-1.5 cursor-pointer hover:opacity-80 transition-opacity"
      style={{ background: 'rgba(173,198,255,0.06)', border: '1px solid rgba(173,198,255,0.15)', borderRadius: '0.125rem' }}
    >
      <span className="material-symbols-outlined text-[14px] text-[#adc6ff]">insert_drive_file</span>
      <div className="min-w-0">
        <p className="font-['Manrope',sans-serif] text-[11px] text-[#FFFFFF] truncate max-w-[160px]">{a.name}</p>
        <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{a.size}</p>
      </div>
      <span className="material-symbols-outlined text-[14px] text-[#8B95A1] ml-1">download</span>
    </div>
  );
}

function MessageBubble({ msg, me }: { msg: Message; me: Participant }) {
  const isMine = msg.sender.name === me.name;
  const color = ROLE_ACCENT[msg.sender.role];

  if (msg.isSystem) {
    return (
      <div className="flex items-center gap-3 my-3">
        <div className="flex-1 h-px bg-[#2A2D35]" />
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#1A1D23] border border-[#2A2D35]" style={{ borderRadius: '0.125rem' }}>
          <span className="material-symbols-outlined text-[12px] text-[#8B95A1]">info</span>
          <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{msg.content}</span>
          <span className="font-['JetBrains_Mono',monospace] text-[8px] text-[#8B95A1] ml-1">· {msg.timestamp}</span>
        </div>
        <div className="flex-1 h-px bg-[#2A2D35]" />
      </div>
    );
  }

  return (
    <div className={`flex gap-2.5 mb-4 ${isMine ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar p={msg.sender} />
      <div className={`flex flex-col max-w-[70%] ${isMine ? 'items-end' : 'items-start'}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-['Manrope',sans-serif] text-[11px] font-semibold" style={{ color }}>{msg.sender.name}</span>
          <span
            className="font-['JetBrains_Mono',monospace] text-[8px] uppercase px-1.5 py-0.5"
            style={{ background: `${color}15`, color, border: `1px solid ${color}20`, borderRadius: '0.125rem' }}
          >
            {msg.sender.role}
          </span>
          <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{msg.timestamp}</span>
        </div>
        <div
          className="px-3.5 py-2.5"
          style={{
            background: isMine ? `${color}12` : '#1A1D23',
            border: `1px solid ${isMine ? color + '30' : '#2A2D35'}`,
            borderLeft: isMine ? undefined : `2px solid ${color}`,
            borderRadius: '0.125rem',
          }}
        >
          <p className="font-['Manrope',sans-serif] text-[13px] text-[#FFFFFF] leading-relaxed whitespace-pre-wrap">{msg.content}</p>
          {msg.attachments?.map(a => <AttachmentChip key={a.id} a={a} />)}
        </div>
        {isMine && (
          <span className="font-['JetBrains_Mono',monospace] text-[8px] text-[#8B95A1] mt-0.5">Delivered</span>
        )}
      </div>
    </div>
  );
}

export default function MessagesClient({
  threads: initialThreads,
  me,
  accent,
  fetchOnMount = false,
}: {
  threads: Thread[];
  me: Participant;
  accent: string;
  fetchOnMount?: boolean;
}) {
  const [threadMeta, setThreadMeta] = useState(initialThreads);
  const [messagesByThread, setMessagesByThread] = useState<Record<string, Message[]>>(
    Object.fromEntries(initialThreads.map(t => [t.id, t.messages]))
  );
  const [selectedId, setSelectedId] = useState<string>(initialThreads[0]?.id ?? '');
  const [compose, setCompose] = useState('');
  const [fetchingThreads, setFetchingThreads] = useState(fetchOnMount);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!fetchOnMount) return;
    const token = getStoredToken();
    fetchThreads(token).then(liveThreads => {
      setThreadMeta(liveThreads);
      setMessagesByThread(Object.fromEntries(liveThreads.map(t => [t.id, t.messages ?? []])));
      setSelectedId(prev => liveThreads.find(t => t.id === prev)?.id ?? liveThreads[0]?.id ?? '');
    }).finally(() => setFetchingThreads(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedThread = threadMeta.find(t => t.id === selectedId);
  const messages = messagesByThread[selectedId] ?? [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedId, messages.length]);

  function send() {
    if (!compose.trim() || !selectedId) return;
    const text = compose.trim();
    const optimistic: Message = {
      id: `msg-${Date.now()}`,
      threadId: selectedId,
      sender: me,
      content: text,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessagesByThread(prev => ({ ...prev, [selectedId]: [...(prev[selectedId] ?? []), optimistic] }));
    setThreadMeta(prev => prev.map(t => t.id === selectedId ? { ...t, lastMessage: text, lastTime: 'Just now', unread: 0 } : t));
    setCompose('');
    textareaRef.current?.focus();
    // Attempt to persist to API (fire-and-forget; optimistic message already shown)
    apiSendMessage(selectedId, text, me, getStoredToken()).catch(() => {/* noop */});
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function selectThread(id: string) {
    setSelectedId(id);
    setThreadMeta(prev => prev.map(t => t.id === id ? { ...t, unread: 0 } : t));
  }

  const totalUnread = threadMeta.reduce((s, t) => s + t.unread, 0);

  if (fetchingThreads) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-10rem)] min-h-[500px] bg-[#1A1D23] border border-[#2A2D35]" style={{ borderRadius: '0.125rem' }}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: `${accent} transparent transparent transparent` }} />
          <p className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-widest">Loading threads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-0 h-[calc(100vh-10rem)] min-h-[500px] bg-[#1A1D23] border border-[#2A2D35] overflow-hidden" style={{ borderRadius: '0.125rem' }}>

      {/* ── Left: thread list ────────────────────────────────────────── */}
      <div className="w-72 shrink-0 border-r border-[#2A2D35] flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b border-[#2A2D35] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]" style={{ color: accent }}>forum</span>
            <span className="font-['Barlow_Condensed',sans-serif] text-[12px] font-semibold tracking-[0.1em] uppercase text-[#FFFFFF]">Threads</span>
            {totalUnread > 0 && (
              <span className="font-['JetBrains_Mono',monospace] text-[9px] font-bold px-1.5 py-0.5 rounded-sm" style={{ background: `${accent}22`, color: accent }}>{totalUnread}</span>
            )}
          </div>
          <button className="p-1 text-[#8B95A1] hover:text-[#FFFFFF] transition-colors">
            <span className="material-symbols-outlined text-[16px]">edit_note</span>
          </button>
        </div>

        {/* Thread list */}
        <div className="flex-1 overflow-y-auto">
          {threadMeta.map(t => {
            const active = t.id === selectedId;
            const other = t.participants.find(p => p.name !== me.name);
            const otherColor = other ? ROLE_ACCENT[other.role] : accent;
            return (
              <button
                key={t.id}
                onClick={() => selectThread(t.id)}
                className="w-full text-left px-4 py-3 border-b border-[#2A2D35] hover:bg-white/[0.03] transition-colors"
                style={active ? { background: `${accent}08`, borderLeft: `2px solid ${accent}` } : { borderLeft: '2px solid transparent' }}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-['JetBrains_Mono',monospace] text-[9px]" style={{ color: otherColor }}>
                    {t.claimId ?? 'General'}
                  </span>
                  <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1]">{t.lastTime}</span>
                </div>
                <p className={`font-['Manrope',sans-serif] text-[12px] truncate mb-0.5 ${t.unread > 0 ? 'font-bold text-[#FFFFFF]' : 'text-[#aab3c0]'}`}>
                  {t.subject}
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-['Manrope',sans-serif] text-[10px] text-[#8B95A1] truncate flex-1">{t.lastMessage}</p>
                  {t.unread > 0 && (
                    <span className="ml-2 min-w-[16px] h-4 rounded-full text-[8px] font-bold font-['JetBrains_Mono',monospace] flex items-center justify-center px-1 shrink-0" style={{ background: otherColor, color: '#0D0F11' }}>
                      {t.unread}
                    </span>
                  )}
                </div>
                {/* Participant chips */}
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {t.participants.map(p => (
                    <span
                      key={p.name}
                      className="font-['JetBrains_Mono',monospace] text-[8px] px-1 py-0.5"
                      style={{ background: `${ROLE_ACCENT[p.role]}12`, color: ROLE_ACCENT[p.role], border: `1px solid ${ROLE_ACCENT[p.role]}20`, borderRadius: '0.125rem' }}
                    >
                      {p.initials}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Right: message thread ─────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        {selectedThread ? (
          <>
            {/* Thread header */}
            <div className="px-5 py-3 border-b border-[#2A2D35] flex items-start justify-between gap-3 shrink-0">
              <div>
                <p className="font-['Barlow_Condensed',sans-serif] text-[15px] font-bold text-[#FFFFFF] uppercase">{selectedThread.subject}</p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  {selectedThread.claimId && (
                    <span className="font-['JetBrains_Mono',monospace] text-[9px]" style={{ color: accent }}>{selectedThread.claimId}</span>
                  )}
                  <span className="font-['Manrope',sans-serif] text-[11px] text-[#8B95A1]">{selectedThread.project}</span>
                  {selectedThread.participants.map(p => (
                    <span
                      key={p.name}
                      className="font-['JetBrains_Mono',monospace] text-[8px] px-1.5 py-0.5"
                      style={{ background: `${ROLE_ACCENT[p.role]}12`, color: ROLE_ACCENT[p.role], border: `1px solid ${ROLE_ACCENT[p.role]}20`, borderRadius: '0.125rem' }}
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-1 shrink-0">
                <button className="p-1.5 text-[#8B95A1] hover:text-[#FFFFFF] transition-colors">
                  <span className="material-symbols-outlined text-[18px]">attach_file</span>
                </button>
                <button className="p-1.5 text-[#8B95A1] hover:text-[#FFFFFF] transition-colors">
                  <span className="material-symbols-outlined text-[18px]">more_vert</span>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {messages.map(msg => (
                <MessageBubble key={msg.id} msg={msg} me={me} />
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Compose */}
            <div className="border-t border-[#2A2D35] p-4 shrink-0">
              <div
                className="flex items-end gap-3 bg-[#0D0F11] border border-[#2A2D35] p-3"
                style={{ borderRadius: '0.125rem' }}
              >
                <textarea
                  ref={textareaRef}
                  rows={2}
                  value={compose}
                  onChange={e => setCompose(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Type a message… (Enter to send, Shift+Enter for newline)"
                  className="flex-1 bg-transparent font-['Manrope',sans-serif] text-[13px] text-[#FFFFFF] placeholder:text-[#8B95A1] outline-none resize-none"
                />
                <div className="flex items-center gap-2 shrink-0">
                  <button className="p-1.5 text-[#8B95A1] hover:text-[#FFFFFF] transition-colors">
                    <span className="material-symbols-outlined text-[18px]">attach_file</span>
                  </button>
                  <button
                    onClick={send}
                    disabled={!compose.trim()}
                    className="flex items-center gap-1.5 px-3 py-1.5 font-['Barlow_Condensed',sans-serif] text-[11px] tracking-[0.08em] uppercase transition-all active:scale-95 disabled:opacity-40"
                    style={{ background: accent, color: '#0D0F11', borderRadius: '0.125rem' }}
                  >
                    <span className="material-symbols-outlined text-[14px]">send</span>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="font-['Manrope',sans-serif] text-[13px] text-[#8B95A1]">Select a thread to view messages</p>
          </div>
        )}
      </div>
    </div>
  );
}

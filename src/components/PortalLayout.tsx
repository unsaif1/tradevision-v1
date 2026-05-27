'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NotificationBell from '@/components/NotificationBell';
import { getNotifications } from '@/lib/api';

type Role = 'contractor' | 'adjuster' | 'policyholder';

interface NavItem { icon: string; label: string; href: string; badge?: number }

const NAV: Record<Role, NavItem[]> = {
  contractor: [
    { icon: 'dashboard',       label: 'Dashboard',  href: '/contractor' },
    { icon: 'construction',    label: 'Projects',   href: '/contractor/projects' },
    { icon: 'receipt_long',    label: 'Estimates',  href: '/contractor/estimates' },
    { icon: 'groups',          label: 'Crew',       href: '/contractor/crew' },
    { icon: 'local_shipping',  label: 'Dispatch',   href: '/contractor/dispatch' },
    { icon: 'inventory_2',     label: 'Materials',  href: '/contractor/materials' },
    { icon: 'folder_open',     label: 'Documents',  href: '/contractor/documents' },
    { icon: 'forum',           label: 'Messages',   href: '/contractor/messages', badge: 4 },
    { icon: 'analytics',       label: 'Analytics',  href: '/contractor/analytics' },
  ],
  adjuster: [
    { icon: 'dashboard',       label: 'Dashboard',     href: '/adjuster' },
    { icon: 'assignment_late', label: 'Claims',        href: '/adjuster/claims', badge: 7 },
    { icon: 'rate_review',     label: 'Review Queue',  href: '/adjuster/review', badge: 3 },
    { icon: 'description',     label: 'Xactimate',     href: '/adjuster/xactimate' },
    { icon: 'fact_check',      label: 'Approvals',     href: '/adjuster/approvals' },
    { icon: 'folder_open',     label: 'Documents',     href: '/adjuster/documents' },
    { icon: 'forum',           label: 'Messages',      href: '/adjuster/messages', badge: 4 },
  ],
  policyholder: [
    { icon: 'dashboard',        label: 'Dashboard',   href: '/policyholder' },
    { icon: 'assignment',       label: 'My Claims',   href: '/policyholder/claims' },
    { icon: 'folder_open',      label: 'Documents',   href: '/policyholder/documents' },
    { icon: 'forum',            label: 'Messages',    href: '/policyholder/messages', badge: 2 },
    { icon: 'manage_accounts',  label: 'Profile',     href: '/policyholder/profile' },
  ],
};

const ACCENT: Record<Role, string> = {
  contractor:   '#00D4AA',
  adjuster:     '#E21E51',
  policyholder: '#E21E51',
};

const ROLE_LABEL: Record<Role, string> = {
  contractor:   'CONTRACTOR PORTAL',
  adjuster:     'ADJUSTER PORTAL',
  policyholder: 'MY ACCOUNT',
};

const USER_INFO: Record<Role, { name: string; sub: string }> = {
  contractor:   { name: 'Marcus Chen',   sub: 'APEX ROOFING CO.' },
  adjuster:     { name: 'Sarah Reyes',   sub: 'PUBLIC ADJUSTER' },
  policyholder: { name: 'James Walker',  sub: 'POLICY #TRV-2024-884' },
};

export default function PortalLayout({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = NAV[role];
  const accent = ACCENT[role];
  const user = USER_INFO[role];
  const notifications = getNotifications(role);

  function isActive(href: string) {
    if (href === `/${role}`) return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <div className="bg-[#0D0F11] text-[#FFFFFF] min-h-screen flex font-[Manrope,sans-serif]">

      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside
        className={[
          'fixed inset-y-0 left-0 z-50 w-64 bg-[#0A0C0E] border-r border-[#2A2D35] flex flex-col transition-transform duration-200',
          open ? 'translate-x-0' : '-translate-x-full',
          'md:relative md:translate-x-0 md:flex md:shrink-0',
        ].join(' ')}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-[#2A2D35] gap-3 shrink-0">
          <span className="material-symbols-outlined text-[#e21e51] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
          <span className="font-['Barlow_Condensed',sans-serif] text-[18px] font-bold tracking-[0.12em] text-[#FFFFFF] uppercase">TradeVision</span>
        </div>

        {/* Role label */}
        <div className="px-5 py-2.5 border-b border-[#2A2D35] shrink-0">
          <span
            className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.15em] uppercase"
            style={{ color: accent }}
          >
            {ROLE_LABEL[role]}
          </span>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-3 overflow-y-auto">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={[
                  'flex items-center gap-3 px-4 py-2.5 mx-2 mb-0.5 transition-all text-sm',
                  active
                    ? 'rounded-sm font-semibold border-l-2'
                    : 'rounded-sm text-[#8B95A1] hover:bg-[#1A1D23] hover:text-[#FFFFFF]',
                ].join(' ')}
                style={active ? { color: accent, borderColor: accent, background: 'rgba(255,255,255,0.04)' } : {}}
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {item.badge ? (
                  <span
                    className="text-[10px] font-['JetBrains_Mono',monospace] px-1.5 py-0.5 rounded-sm font-bold"
                    style={{ background: `${accent}22`, color: accent }}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-[#2A2D35] flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-sm bg-[#1A1D23] border border-[#2A2D35] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#8B95A1] text-[18px]">person</span>
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-[#FFFFFF] truncate">{user.name}</p>
            <p className="font-['JetBrains_Mono',monospace] text-[9px] text-[#8B95A1] truncate">{user.sub}</p>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── Main area ───────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-[#0A0C0E] border-b border-[#2A2D35] flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 shrink-0">
          <button
            className="md:hidden p-1.5 text-[#8B95A1] hover:text-[#FFFFFF] transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="hidden md:block" />
          <div className="flex items-center gap-2">
            <NotificationBell notifications={notifications} accent={accent} />
            <div
              className="w-8 h-8 rounded-sm border flex items-center justify-center text-[11px] font-bold"
              style={{ background: `${accent}18`, borderColor: `${accent}44`, color: accent }}
            >
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8 overflow-auto pb-20 md:pb-8">
          {children}
        </main>
      </div>

      {/* ── Mobile bottom nav ────────────────────────────────── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0A0C0E] border-t border-[#2A2D35] flex justify-around items-center h-16 z-30">
        {nav.slice(0, 5).map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 py-2 px-2 transition-colors relative"
              style={active ? { color: accent } : { color: '#8B95A1' }}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="font-['Barlow_Condensed',sans-serif] text-[9px] tracking-wide uppercase">
                {item.label}
              </span>
              {item.badge ? (
                <span
                  className="absolute top-1 right-1 text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold"
                  style={{ background: accent, color: '#0D0F11' }}
                >
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const metrics = [
  { label: 'ACTIVE PROJECTS',   val: '24', icon: 'construction',   border: 'border-neon-pink',   iconColor: 'text-neon-pink',   bg: 'bg-neon-pink/5',   sub: '+3 this week',          subColor: 'text-neon-green'  },
  { label: 'OPEN CLAIMS',       val: '11', icon: 'gavel',          border: 'border-neon-orange', iconColor: 'text-neon-orange', bg: 'bg-neon-orange/5', sub: '4 awaiting docs',       subColor: 'text-neon-orange' },
  { label: 'APPROVED SOWS',     val: '8',  icon: 'task_alt',       border: 'border-neon-green',  iconColor: 'text-neon-green',  bg: 'bg-neon-green/5',  sub: 'ready to invoice',      subColor: 'text-text-muted'  },
  { label: 'PENDING TRANSFERS', val: '36', icon: 'sync_alt',       border: 'border-neon-blue',   iconColor: 'text-neon-blue',   bg: 'bg-neon-blue/5',   sub: 'files awaiting review', subColor: 'text-text-muted'  },
];

const projects = [
  { id: 'prj-001', name: 'Riverside Commons', phase: 'Phase 3 Framing',  dot: 'bg-neon-green', glow: 'shadow-[0_0_8px_rgba(74,222,128,0.5)]',  tags: ['PA', 'GC'] },
  { id: 'prj-002', name: 'Highland Oaks',     phase: 'Permit Delay',     dot: 'bg-error',      glow: 'shadow-[0_0_8px_rgba(255,180,171,0.5)]', tags: ['PA']       },
  { id: 'prj-003', name: 'Meridian Warehouse',phase: 'Site Prep',        dot: 'bg-neon-blue',  glow: 'shadow-[0_0_8px_rgba(59,130,246,0.5)]',  tags: ['GC']       },
  { id: 'prj-004', name: 'Oak Park',          phase: 'Final Inspection', dot: 'bg-neon-green', glow: 'shadow-[0_0_8px_rgba(74,222,128,0.5)]',  tags: ['PA', 'GC'] },
];

const navLinks = [
  { icon: 'dashboard',     label: 'Dashboard', href: '/stitch',        active: true  },
  { icon: 'construction',  label: 'Projects',  href: '#',              active: false },
  { icon: 'gavel',         label: 'Claims',    href: '/stitch/claims', active: false },
  { icon: 'notifications', label: 'Alerts',    href: '#',              active: false },
];

const mobileNav = [
  { icon: 'dashboard',     label: 'DASHBOARD', href: '/stitch',        active: true  },
  { icon: 'construction',  label: 'PROJECTS',  href: '#',              active: false },
  { icon: 'gavel',         label: 'CLAIMS',    href: '/stitch/claims', active: false },
  { icon: 'notifications', label: 'ALERTS',    href: '#',              active: false },
];

export default function StitchPage() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  function logout() {
    localStorage.removeItem('tv_token');
    router.push('/stitch/login');
  }

  function toggleMenu(id: string) {
    setOpenMenu((prev) => (prev === id ? null : id));
  }

  return (
    <div className="bg-surface-base text-on-surface min-h-screen font-body-md antialiased pb-16 md:pb-0 md:pl-72 pt-16 md:pt-0">

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* TopAppBar — mobile only */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-surface border-b border-surface-stroke">
        <button
          className="text-neon-pink active:scale-90 transition-transform"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
        </button>
        <span className="font-label-caps text-label-caps tracking-widest text-neon-pink">TRADEVISION</span>
        <button className="text-neon-pink opacity-80" onClick={logout} aria-label="Account">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
        </button>
      </header>

      {/* Navigation Drawer */}
      <nav className={`
        flex flex-col bg-surface-elevated border-r border-surface-stroke w-72 fixed inset-y-0 left-0 z-50 py-4
        transition-transform duration-300
        md:translate-x-0
        ${drawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Mobile close button */}
        <button
          className="md:hidden absolute top-4 right-4 text-text-muted hover:text-on-surface transition-colors"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="px-8 mb-8 flex flex-col gap-2">
          <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-surface-stroke overflow-hidden mb-2">
            <span className="material-symbols-outlined text-text-muted">person</span>
          </div>
          <h2 className="font-label-caps text-label-caps text-neon-orange">COMMANDER ALPHA</h2>
          <p className="font-body-md text-body-md text-neon-green">Site Supervisor</p>
          <p className="font-caption text-caption text-text-muted">Sector 7G</p>
        </div>

        <ul className="flex flex-col flex-grow">
          {navLinks.map((n) => (
            <li key={n.label}>
              <Link
                href={n.href}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center gap-4 px-8 py-4 transition-all ${
                  n.active
                    ? 'bg-surface-container-highest text-neon-green font-bold border-l-4 border-neon-green'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <span className="material-symbols-outlined" style={n.active ? { fontVariationSettings: "'FILL' 1" } : {}}>{n.icon}</span>
                <span className="font-label-caps text-label-caps">{n.label}</span>
              </Link>
            </li>
          ))}
          <li className="mt-auto">
            <button
              onClick={logout}
              className="w-full flex items-center gap-4 px-8 py-4 text-on-surface-variant hover:bg-surface-container-high transition-all border-t border-surface-stroke"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-caps text-label-caps">Logout</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Main */}
      <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">

        {/* Header & Quick Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-surface-stroke pb-6">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-2">COMMAND CENTER</h1>
            <p className="font-body-md text-body-md text-text-muted flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">corporate_fare</span>
              Turner Industries Group · GC View
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-neon-pink text-white font-label-caps text-label-caps rounded uppercase hover:opacity-90 transition-opacity active:scale-95">
              <span className="material-symbols-outlined text-sm">add</span>
              NEW PROJECT
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-surface-stroke text-text-muted font-label-caps text-label-caps rounded uppercase hover:bg-surface-container transition-colors active:scale-95">
              <span className="material-symbols-outlined text-sm">upload_file</span>
              UPLOAD DOCS
            </button>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className={`bg-surface-elevated p-6 rounded-lg border ${m.border} relative overflow-hidden group cursor-pointer`}>
              <div className={`absolute inset-0 ${m.bg} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative flex justify-between items-start mb-4">
                <h3 className="font-label-caps text-label-caps text-text-muted">{m.label}</h3>
                <span className={`material-symbols-outlined ${m.iconColor}`}>{m.icon}</span>
              </div>
              <div className="relative flex items-baseline gap-3">
                <span className="font-stat-display text-stat-display text-on-surface">{m.val}</span>
                <span className={`font-caption text-caption ${m.subColor} flex items-center`}>{m.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Two-column section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — alert + projects list */}
          <div className="lg:col-span-2 space-y-6">

            {/* Alert Banner */}
            <div className="bg-surface-container border-t-4 border-neon-orange rounded-b p-6 flex items-start gap-4">
              <div className="p-3 bg-neon-orange/10 rounded-full text-neon-orange shrink-0">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div className="flex-1">
                <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1 flex items-center gap-2">
                  Noble Public Adjusting
                  <span className="px-2 py-0.5 bg-surface-stroke text-text-muted text-xs rounded uppercase font-label-caps">Priority</span>
                </h4>
                <p className="font-body-md text-body-md text-text-muted">
                  3 active claims currently require contractor estimates. Action requested by End of Day.
                </p>
              </div>
              <Link href="/stitch/claims" className="mt-2 text-neon-orange hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            {/* Active Projects List */}
            <div className="bg-surface-elevated rounded border-t-4 border-neon-pink">
              <div className="p-6 border-b border-surface-stroke flex justify-between items-center">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">ACTIVE PROJECTS</h2>
                <Link href="#" className="font-label-caps text-label-caps text-neon-pink hover:underline flex items-center gap-1">
                  VIEW ALL
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </Link>
              </div>
              <ul className="flex flex-col">
                {projects.map((p, i) => (
                  <li
                    key={p.id}
                    className={`p-4 hover:bg-surface-container-high transition-colors flex items-center gap-4 cursor-pointer ${i < projects.length - 1 ? 'border-b border-surface-stroke' : ''}`}
                    onClick={() => router.push('/stitch/claims')}
                  >
                    <div className={`w-2 h-2 rounded-full ${p.dot} ${p.glow} shrink-0`}></div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-body-lg text-body-lg text-on-surface font-semibold truncate">{p.name}</h4>
                      <p className="font-caption text-caption text-text-muted">{p.phase}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {p.tags.map((t) => (
                        <span key={t} className={`px-2 py-1 text-xs rounded uppercase font-label-caps border ${
                          t === 'GC'
                            ? 'bg-neon-blue/10 text-neon-blue border-neon-blue/30'
                            : 'bg-surface-container text-text-muted border-surface-stroke'
                        }`}>{t}</span>
                      ))}
                    </div>

                    {/* more_vert dropdown */}
                    <div className="relative ml-2" onClick={(e) => e.stopPropagation()}>
                      <button
                        className="text-text-muted hover:text-on-surface transition-colors p-1 rounded hover:bg-surface-container"
                        onClick={() => toggleMenu(p.id)}
                        aria-label="More options"
                      >
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                      {openMenu === p.id && (
                        <div className="absolute right-0 top-8 z-20 w-40 bg-surface-container border border-surface-stroke rounded shadow-lg overflow-hidden">
                          <button className="w-full text-left px-4 py-2.5 font-label-caps text-label-caps text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">open_in_new</span> View
                          </button>
                          <button className="w-full text-left px-4 py-2.5 font-label-caps text-label-caps text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">edit</span> Edit
                          </button>
                          <button className="w-full text-left px-4 py-2.5 font-label-caps text-label-caps text-neon-orange hover:bg-surface-container-high transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">archive</span> Archive
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — visualization */}
          <div className="lg:col-span-1">
            <div className="bg-surface-elevated rounded border border-surface-stroke overflow-hidden h-full min-h-[400px] flex flex-col relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-surface-base to-neon-blue/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 relative z-10">
                  <span className="material-symbols-outlined text-neon-pink text-6xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                  <p className="font-label-caps text-label-caps text-neon-pink uppercase tracking-widest mb-2">C.A.R.E. Stack</p>
                  <p className="font-caption text-caption text-text-muted">System visualization active</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface-base to-transparent p-6">
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">C.A.R.E. Stack Visualization</h3>
                <p className="font-caption text-caption text-text-muted">System preview generated from current context.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar — mobile only */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-2 bg-surface-container border-t border-surface-stroke">
        {mobileNav.map((n) => (
          <Link
            key={n.label}
            href={n.href}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
              n.active ? 'bg-primary-container text-on-primary-container scale-95' : 'text-text-muted hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined" style={n.active ? { fontVariationSettings: "'FILL' 1" } : {}}>{n.icon}</span>
            <span className="font-label-caps text-label-caps mt-1">{n.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

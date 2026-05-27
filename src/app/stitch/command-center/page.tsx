import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Command Center | TradeVision C.A.R.E.' };

const metrics = [
  { label: 'Active Projects',   val: '24', icon: 'location_city',   accent: 'secondary-fixed' },
  { label: 'Open Claims',       val: '11', icon: 'assignment_late',  accent: 'error' },
  { label: 'Approved SOWs',     val: '8',  icon: 'task_alt',         accent: '[#4ade80]' },
  { label: 'Pending Transfers', val: '36', icon: 'sync',             accent: 'tertiary' },
];

const projects = [
  { name: 'Riverside Commons', loc: 'Miami, FL',  tags: ['PA'],      pct: 75,  phase: 'Estimate Review',  barColor: 'bg-primary-container' },
  { name: 'Highland Oaks',     loc: 'Austin, TX', tags: ['GC'],      pct: 30,  phase: 'Site Inspection',  barColor: 'bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.4)]' },
  { name: 'Meridian Warehouse',loc: 'Denver, CO', tags: ['PA','GC'], pct: 90,  phase: 'Final Settlement', barColor: 'bg-primary-container shadow-[0_0_8px_rgba(226,30,81,0.4)]' },
];

const navLinks = [
  { icon: 'dashboard',          label: 'Command',  href: '/stitch',        active: true  },
  { icon: 'location_city',      label: 'Projects', href: '#',              active: false },
  { icon: 'assignment_late',    label: 'Claims',   href: '/stitch/claims', active: false },
  { icon: 'notifications_active', label: 'Alerts', href: '#',              active: false },
];

export default function CommandCenterPage() {
  return (
    <div className="bg-surface-deep text-on-surface font-body-md antialiased pb-24 md:pb-0">

      {/* TopAppBar */}
      <header className="bg-surface border-b border-border-subtle sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-lg py-md max-w-[1440px] mx-auto">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary-container text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            <h1 className="font-headline-md text-headline-md font-bold text-primary-container tracking-tight">TradeVision C.A.R.E.</h1>
          </div>
          <div className="hidden md:flex flex-1 justify-center px-8">
            <nav className="flex gap-lg">
              {navLinks.map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  className={`flex flex-col items-center justify-center hover:bg-surface-bright/10 transition-colors px-4 py-2 rounded ${
                    n.active ? 'text-primary-container font-bold' : 'text-on-surface-variant'
                  }`}
                >
                  <span className="material-symbols-outlined mb-1" style={n.active ? { fontVariationSettings: "'FILL' 1" } : {}}>{n.icon}</span>
                  <span className="font-label-md text-label-md">{n.label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-md">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-2 top-1.5 text-text-secondary text-sm">search</span>
              <input
                className="bg-surface-deep border border-border-subtle rounded-lg py-1 pl-8 pr-3 text-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all w-64"
                placeholder="Global Search..."
                type="text"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-surface-muted border border-border-subtle flex items-center justify-center overflow-hidden cursor-pointer hover:border-primary-container transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[1440px] mx-auto px-gutter py-lg md:py-xl grid grid-cols-1 md:grid-cols-12 gap-md">

        {/* Left — 8 cols */}
        <div className="md:col-span-8 flex flex-col gap-lg">

          {/* Quick actions */}
          <section className="flex flex-wrap gap-md items-center justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Command Center</h2>
              <p className="font-body-sm text-body-sm text-text-secondary">Overview of current operations and pending tasks.</p>
            </div>
            <div className="flex gap-sm">
              <button className="bg-surface-bright/50 text-on-surface border border-border-subtle hover:bg-surface-bright transition-all font-label-md text-label-md px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm active:scale-95">
                <span className="material-symbols-outlined text-[18px]">upload_file</span>Upload Docs
              </button>
              <button className="bg-gradient-to-br from-primary-container to-accent-active text-white hover:brightness-110 transition-all font-label-md text-label-md px-4 py-2 rounded-lg flex items-center gap-2 shadow-md active:scale-95">
                <span className="material-symbols-outlined text-[18px]">add</span>New Project
              </button>
            </div>
          </section>

          {/* Priority alert */}
          <section className="bg-surface-container rounded-xl p-md border-l-2 border-l-error shadow-sm">
            <div className="flex items-start gap-md">
              <div className="p-2 rounded-full bg-error/10 text-error mt-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Action Required</h3>
                  <span className="font-label-sm text-label-sm bg-error/20 text-error px-2 py-0.5 rounded-full uppercase tracking-wider">High Priority</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-3">Noble Public Adjusting - 3 active claims require contractor estimates.</p>
                <Link href="/stitch/claims" className="font-label-md text-label-md text-primary-container hover:text-primary-fixed transition-colors flex items-center gap-1">
                  Review Claims <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-md">
            {metrics.map((m) => (
              <div
                key={m.label}
                className={`bg-surface-muted border border-border-subtle border-t-2 border-t-${m.accent} rounded-lg p-md hover:bg-surface-bright transition-colors cursor-pointer group hover:shadow-md`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-md text-label-md text-text-secondary uppercase">{m.label}</span>
                  <span className={`material-symbols-outlined text-${m.accent} opacity-70 group-hover:opacity-100 transition-opacity`}>{m.icon}</span>
                </div>
                <div className={`font-headline-xl text-headline-xl text-on-surface`}>{m.val}</div>
              </div>
            ))}
          </section>
        </div>

        {/* Right — 4 cols */}
        <div className="md:col-span-4">
          <section className="bg-surface-muted border border-border-subtle rounded-xl h-full flex flex-col">
            <div className="p-md border-b border-border-subtle flex justify-between items-center bg-surface-container-high/30 rounded-t-xl">
              <h3 className="font-headline-md text-headline-md text-on-surface">Recent Projects</h3>
              <button className="material-symbols-outlined text-text-secondary hover:text-on-surface transition-colors">more_horiz</button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-px">
              {projects.map((p) => (
                <div key={p.name} className="p-md hover:bg-surface-bright/30 transition-all group cursor-pointer border-b border-border-subtle/50 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-body-md text-body-md text-on-surface font-semibold group-hover:text-primary-container transition-colors">{p.name}</h4>
                    <div className="flex gap-1">
                      {p.tags.map((t) => (
                        <span key={t} className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                          t === 'GC' ? 'bg-tertiary/10 text-tertiary border-tertiary/20' : 'bg-secondary-fixed/10 text-secondary-fixed border-secondary-fixed/20'
                        }`}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-text-secondary">
                    <span className="material-symbols-outlined text-[14px]">map</span>
                    <span className="font-body-sm text-body-sm">{p.loc}</span>
                  </div>
                  <div className="w-full bg-surface-deep rounded-full h-1 overflow-hidden mb-1.5">
                    <div className={`${p.barColor} h-full rounded-full`} style={{ width: `${p.pct}%` }}></div>
                  </div>
                  <div className="flex justify-between font-label-sm text-[10px] uppercase tracking-wider text-text-secondary">
                    <span>{p.phase}</span>
                    <span className="font-bold">{p.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 text-center bg-surface-container-low rounded-b-xl">
              <button className="font-label-md text-label-md text-text-secondary hover:text-primary-container transition-colors uppercase tracking-widest">View All Projects</button>
            </div>
          </section>
        </div>
      </main>

      {/* BottomNavBar — mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center px-gutter py-sm bg-surface-container-high shadow-lg z-50">
        {navLinks.concat([{ icon: 'person', label: 'Account', href: '#', active: false }]).map((n) => (
          <Link
            key={n.label}
            href={n.href}
            className={`flex flex-col items-center justify-center hover:text-primary-container transition-all active:translate-y-[-2px] duration-200 w-16 ${
              n.active ? 'text-primary-container font-bold' : 'text-text-secondary'
            }`}
          >
            <span className="material-symbols-outlined mb-1 text-[24px]" style={n.active ? { fontVariationSettings: "'FILL' 1" } : {}}>{n.icon}</span>
            <span className="font-label-sm text-[10px]">{n.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

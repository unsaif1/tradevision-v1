export default function DispatchPage() {
  return (
    <div className="bg-background text-on-background font-body-fixed min-h-screen pb-24 pt-20">
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-surface dark:bg-surface border-b border-outline-variant flex justify-between items-center px-margin-mobile h-16 w-full">
<div className="flex items-center gap-density-compact">
<span className="material-symbols-outlined text-primary-container dark:text-primary-container text-[24px]">precision_manufacturing</span>
<span className="text-headline-md-mobile font-headline-md text-primary-container tracking-tighter uppercase font-bold text-primary-container dark:text-primary-container">TradeVision</span>
</div>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">person</span>
</div>
</div>
</header>
{/* Main Content */}
<main className="px-margin-mobile flex flex-col gap-density-comfortable">
{/* Header Section */}
<section className="flex flex-col gap-density-compact pt-density-comfortable">
<h1 className="font-display-lg-mobile text-display-lg-mobile text-on-surface">Crew Allocation</h1>
<p className="font-body-fixed text-body-fixed text-on-surface-variant">Real-time deployment and status tracking for field units.</p>
</section>
{/* Stats Overview */}
<section className="grid grid-cols-2 gap-gutter"><div className="bg-surface-container border border-outline-variant rounded p-density-compact flex flex-col gap-unit relative overflow-hidden">
<div className="absolute top-0 right-0 w-12 h-[2px] bg-primary-container/30"></div>
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">SYSTEM: ACTIVE_CREWS</span>
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-unit">
<span className="font-data-point text-display-lg-mobile text-primary-container">08</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">/ 12</span>
</div>
<div className="h-4 flex items-end gap-[2px]">
<div className="w-1 h-2 bg-primary-container/20"></div>
<div className="w-1 h-3 bg-primary-container/40"></div>
<div className="w-1 h-1 bg-primary-container/20"></div>
<div className="w-1 h-4 bg-primary-container"></div>
</div>
</div>
</div>
<div className="bg-surface-container border border-outline-variant rounded p-density-compact flex flex-col gap-unit relative overflow-hidden">
<div className="absolute top-0 right-0 w-12 h-[2px] bg-secondary-container/30"></div>
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">SYSTEM: DEPLOYED_UNITS</span>
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-unit">
<span className="font-data-point text-display-lg-mobile text-secondary-container">34</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">PRS</span>
</div>
<div className="h-4 flex items-end gap-[2px]">
<div className="w-1 h-1 bg-secondary-container/20"></div>
<div className="w-1 h-2 bg-secondary-container/40"></div>
<div className="w-1 h-4 bg-secondary-container"></div>
<div className="w-1 h-3 bg-secondary-container/60"></div>
</div>
</div>
</div></section>
{/* Crew List */}
<section className="flex flex-col gap-gutter">
{/* Crew: Alpha (Active/On-Site) */}
<div className="bg-surface-container border border-primary-container/50 rounded flex flex-col relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-container shadow-[0_0_8px_rgba(0,219,233,0.5)]"></div>
<div className="p-4 border-b border-outline-variant/30 flex justify-between items-center">
<div className="flex flex-col">
<span className="font-label-caps text-[10px] text-primary-container tracking-widest opacity-70">UNIT_ID</span>
<span className="font-display-lg-mobile text-[20px] text-on-surface">CRW-ALPHA</span>
</div>
<div className="bg-primary-container/5 border border-primary-container/40 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(0,219,233,0.1)] flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-primary-container animate-pulse shadow-[0_0_4px_#00dbe9]"></span>
<span className="font-label-caps text-[10px] text-primary-container font-bold">ON-SITE</span>
</div>
</div>
<div className="p-4 grid grid-cols-2 gap-4 bg-surface-container-low/50">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-on-surface-variant">OPERATIONAL_SPEC</span>
<div className="flex flex-col">
<span className="font-body-fixed text-[13px] text-on-surface"><span className="text-on-surface-variant">FM:</span> J. Riker</span>
<span className="font-body-fixed text-[13px] text-on-surface"><span className="text-on-surface-variant">ST:</span> 6 Units</span>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-on-surface-variant">CURRENT_LOCATION</span>
<span className="font-body-fixed text-[13px] text-on-surface truncate">Riverside Commons</span>
</div>
</div>
<div className="px-4 py-3 border-t border-outline-variant/20 flex flex-col gap-2 bg-surface-container-lowest">
<div className="flex justify-between items-center opacity-60">
<span className="font-label-caps text-[9px] text-on-surface-variant">SIG_STR: 5/5</span>
<span className="font-label-caps text-[9px] text-on-surface-variant">SYNC: 2M_AGO</span>
<span className="font-label-caps text-[9px] text-on-surface-variant">40.7128'N / 74.0060'W</span>
</div>
<button className="w-full bg-primary-container/5 border border-primary-container/20 hover:bg-primary-container/10 text-primary-container font-label-caps text-[11px] py-2 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[14px]">alt_route</span>
            RE-DISPATCH_UNIT
        </button>
</div>
</div>
{/* Crew: Bravo (En-Route) */}
<div className="bg-surface-container border border-secondary-container/50 rounded flex flex-col relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary-container shadow-[0_0_8px_rgba(254,183,0,0.5)]"></div>
<div className="p-4 border-b border-outline-variant/30 flex justify-between items-center">
<div className="flex flex-col">
<span className="font-label-caps text-[10px] text-secondary-container tracking-widest opacity-70">UNIT_ID</span>
<span className="font-display-lg-mobile text-[20px] text-on-surface">CRW-BRAVO</span>
</div>
<div className="bg-secondary-container/5 border border-secondary-container/40 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(254,183,0,0.1)] flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary-container text-[12px]">local_shipping</span>
<span className="font-label-caps text-[10px] text-secondary-container font-bold">EN-ROUTE</span>
</div>
</div>
<div className="p-4 grid grid-cols-2 gap-4 bg-surface-container-low/50">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-on-surface-variant">OPERATIONAL_SPEC</span>
<div className="flex flex-col">
<span className="font-body-fixed text-[13px] text-on-surface"><span className="text-on-surface-variant">FM:</span> S. Vance</span>
<span className="font-body-fixed text-[13px] text-secondary-container font-bold">ETA: 14M</span>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-on-surface-variant">DESTINATION</span>
<span className="font-body-fixed text-[13px] text-on-surface truncate">Oakwood Estate</span>
</div>
</div>
<div className="px-4 py-3 border-t border-outline-variant/20 flex flex-col gap-2 bg-surface-container-lowest">
<div className="flex justify-between items-center opacity-60">
<span className="font-label-caps text-[9px] text-on-surface-variant">SIG_STR: 4/5</span>
<span className="font-label-caps text-[9px] text-on-surface-variant">SYNC: 5M_AGO</span>
<span className="font-label-caps text-[9px] text-on-surface-variant">34.0522'N / 118.2437'W</span>
</div>
<button className="w-full bg-secondary-container/5 border border-secondary-container/20 hover:bg-secondary-container/10 text-secondary-container font-label-caps text-[11px] py-2 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[14px]">send</span>
            DISPATCH_OVERRIDE
        </button>
</div>
</div>
{/* Crew: Charlie (Off-Duty) */}
<div className="bg-surface-container border border-outline-variant/30 rounded flex flex-col relative overflow-hidden opacity-60 grayscale-[0.5]">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-outline"></div>
<div className="p-4 border-b border-outline-variant/30 flex justify-between items-center">
<div className="flex flex-col">
<span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest">UNIT_ID</span>
<span className="font-display-lg-mobile text-[20px] text-on-surface-variant">CRW-CHARLIE</span>
</div>
<div className="bg-surface-variant/20 border border-outline-variant px-2 py-0.5 rounded flex items-center gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[12px]">bedtime</span>
<span className="font-label-caps text-[10px] text-on-surface-variant font-bold">OFF-DUTY</span>
</div>
</div>
<div className="p-4 grid grid-cols-2 gap-4 bg-surface-container-low/50">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-on-surface-variant">OPERATIONAL_SPEC</span>
<div className="flex flex-col">
<span className="font-body-fixed text-[13px] text-on-surface-variant"><span className="text-on-surface-variant/50">FM:</span> M. Chen</span>
<span className="font-body-fixed text-[13px] text-on-surface-variant">STATUS: STANDBY</span>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-[10px] text-on-surface-variant">AVAILABILITY</span>
<span className="font-data-point text-[16px] text-on-surface-variant tracking-widest">08:00 HRS</span>
</div>
</div>
<div className="px-4 py-3 border-t border-outline-variant/20 flex flex-col gap-2 bg-surface-container-lowest">
<div className="flex justify-between items-center opacity-40">
<span className="font-label-caps text-[9px] text-on-surface-variant">SIG_STR: 0/5</span>
<span className="font-label-caps text-[9px] text-on-surface-variant">SYNC: 8H_AGO</span>
<span className="font-label-caps text-[9px] text-on-surface-variant">OFFLINE_MODE</span>
</div>
<button className="w-full bg-surface-variant border border-outline-variant text-on-surface-variant font-label-caps text-[11px] py-2 uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[14px]">schedule_send</span>
            SCHEDULE_DEPLOYMENT
        </button>
</div>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full z-50 bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant bg-surface-container-lowest fixed bottom-0 left-0 w-full flex justify-around items-center h-20 md:hidden">
<div className="flex flex-col items-center justify-center text-on-surface-variant py-2 px-4 hover:text-on-surface transition-all active:bg-surface-variant duration-150 cursor-pointer">
<span className="material-symbols-outlined mb-1">assignment</span>
<span className="font-label-caps text-label-caps">Claims</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant py-2 px-4 hover:text-on-surface transition-all active:bg-surface-variant duration-150 cursor-pointer">
<span className="material-symbols-outlined mb-1">roofing</span>
<span className="font-label-caps text-label-caps">Inspections</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant py-2 px-4 hover:text-on-surface transition-all active:bg-surface-variant duration-150 cursor-pointer">
<span className="material-symbols-outlined mb-1">layers</span>
<span className="font-label-caps text-label-caps">Materials</span>
</div>
<div className="flex flex-col items-center justify-center text-primary-container bg-primary-container/10 border-t-2 border-primary-container py-2 px-4 hover:text-on-surface transition-all active:bg-surface-variant duration-150 cursor-pointer">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
<span className="font-label-caps text-label-caps">Settings</span>
</div>
</nav>
    </div>
  );
}

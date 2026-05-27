export default function ContractorSchedulePage() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col antialiased selection:bg-neon-blue selection:text-white">
{/* TopAppBar (from JSON) */}
<header className="fixed top-0 w-full z-50 bg-surface-container dark:bg-surface-container border-b border-outline-variant flex justify-between items-center px-gutter h-16 flat no shadows">
<div className="flex items-center gap-unit">
<span className="material-symbols-outlined text-primary dark:text-primary font-headline-sm">terminal</span>
<span className="text-headline-md font-headline-md font-bold tracking-tighter text-neon-blue font-headline-sm">TRADEVISION C.A.R.E.</span>
</div>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant overflow-hidden" title="Contractor Profile">
<span className="material-symbols-outlined text-on-surface-variant text-sm font-headline-sm">person</span>
</div>
</div>
</header>
{/* Main Content Area */}
<main className="flex-1 mt-16 mb-16 px-margin-mobile py-4 flex flex-col gap-4 overflow-x-hidden md:pl-[288px] md:mb-0">
{/* Header Section: Context & Optimization */}
<section className="flex flex-col gap-unit">
<div className="flex justify-between items-end">
<div>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-headline-sm">Schedule</h1>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-1 font-headline-sm">Route & Timeline Control</p>
</div>
<div className="flex items-center gap-unit">
<span className="material-symbols-outlined text-neon-blue text-sm font-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_sync</span>
<span className="font-label-sm text-label-sm text-neon-blue uppercase font-headline-sm">Synced</span>
</div>
</div>
</section>
{/* Horizontal Weekly Date Picker */}
<section className="w-full overflow-x-auto pb-2 -mx-margin-mobile px-margin-mobile">
<div className="flex gap-2 min-w-max"><button className="flex flex-col items-center justify-center w-14 h-16 bg-surface-container-low border border-outline-variant rounded hover:bg-surface-bright transition-colors font-headline-sm"><span className="font-headline-sm text-[10px] text-on-surface-variant uppercase">Mon</span><span className="font-headline-sm text-headline-sm text-on-surface-variant">12</span><div className="flex gap-0.5 mt-1"><div className="w-1 h-1 rounded-full bg-tertiary-container"></div><div className="w-1 h-1 rounded-full bg-tertiary-container"></div></div></button><button className="flex flex-col items-center justify-center w-14 h-16 bg-surface-container-low border border-outline-variant rounded hover:bg-surface-bright transition-colors font-headline-sm"><span className="font-headline-sm text-[10px] text-on-surface-variant uppercase">Tue</span><span className="font-headline-sm text-headline-sm text-on-surface-variant">13</span><div className="flex gap-0.5 mt-1"><div className="w-1 h-1 rounded-full bg-tertiary-container"></div></div></button><button className="flex flex-col items-center justify-center w-14 h-16 bg-primary-container border border-neon-blue rounded shadow-[0_0_8px_rgba(37,99,235,0.4)] font-headline-sm"><span className="font-headline-sm text-[10px] text-on-primary-container uppercase">Wed</span><span className="font-headline-sm text-headline-sm text-on-primary-container">14</span><div className="flex gap-0.5 mt-1"><div className="w-1 h-1 rounded-full bg-on-primary-container"></div><div className="w-1 h-1 rounded-full bg-error animate-pulse"></div><div className="w-1 h-1 rounded-full bg-on-primary-container opacity-50"></div></div></button><button className="flex flex-col items-center justify-center w-14 h-16 bg-surface-container-low border border-outline-variant rounded hover:bg-surface-bright transition-colors font-headline-sm"><span className="font-headline-sm text-[10px] text-on-surface-variant uppercase">Thu</span><span className="font-headline-sm text-headline-sm text-on-surface">15</span><div className="flex gap-0.5 mt-1"><div className="w-1 h-1 rounded-full bg-on-surface-variant opacity-30"></div></div></button><button className="flex flex-col items-center justify-center w-14 h-16 bg-surface-container-low border border-outline-variant rounded hover:bg-surface-bright transition-colors font-headline-sm"><span className="font-headline-sm text-[10px] text-on-surface-variant uppercase">Fri</span><span className="font-headline-sm text-headline-sm text-on-surface">16</span></button><button className="flex flex-col items-center justify-center w-14 h-16 bg-surface-container-low border border-outline-variant rounded hover:bg-surface-bright transition-colors font-headline-sm"><span className="font-headline-sm text-[10px] text-on-surface-variant uppercase">Sat</span><span className="font-headline-sm text-headline-sm text-on-surface">17</span></button><button className="flex flex-col items-center justify-center w-14 h-16 bg-surface-container-low border border-outline-variant rounded hover:bg-surface-bright transition-colors font-headline-sm"><span className="font-headline-sm text-[10px] text-on-surface-variant uppercase">Sun</span><span className="font-headline-sm text-headline-sm text-on-surface">18</span></button></div>
</section>
{/* Route Map Widget & Optimization Action */}
<section className="bg-surface-card border border-outline-variant rounded-lg overflow-hidden flex flex-col relative group">
{/* Technical Header */}
<div className="bg-surface-container-highest px-3 py-2 flex justify-between items-center border-b border-outline-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant text-sm font-headline-sm">route</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-headline-sm">Tactical Route</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse font-headline-sm"></span>
<span className="font-label-sm text-label-sm text-neon-blue uppercase font-headline-sm">Live Tracking</span>
</div>
</div>
{/* Map Area Placeholder (Data Store) */}
<div className="h-40 w-full bg-surface-container-lowest relative bg-cyber-pattern flex items-center justify-center"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div><div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.4) 0%, transparent 60%)' }}></div><svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 160"><path className="opacity-40" d="M 40,120 C 100,120 150,40 220,60 C 280,80 320,100 360,40" fill="none" stroke="#2563EB" strokeDasharray="2 2" strokeWidth="1.5"></path><circle cx="40" cy="120" fill="#2563EB" r="3"></circle><circle className="opacity-50" cx="110" cy="95" fill="#2563EB" r="1.5"></circle><circle className="opacity-50" cx="180" cy="65" fill="#2563EB" r="1.5"></circle><circle cx="220" cy="60" fill="#1E293B" r="4" stroke="#2563EB" strokeWidth="2"></circle><circle className="opacity-50" cx="290" cy="70" fill="#2563EB" r="1.5"></circle><circle cx="360" cy="40" fill="#1E293B" r="4" stroke="#2563EB" strokeWidth="2"></circle></svg><div className="absolute top-2 left-2 flex gap-1"><button className="bg-surface-container-highest/80 backdrop-blur-sm border border-outline-variant px-2 py-0.5 rounded text-[8px] font-headline-sm text-on-surface-variant hover:text-neon-blue transition-colors uppercase tracking-tighter flex items-center gap-1"><span className="material-symbols-outlined text-[10px] font-headline-sm">layers</span> Heatmap</button></div><div className="z-10 bg-surface-container/80 backdrop-blur-sm border border-outline-variant px-2 py-0.5 rounded"><span className="font-label-sm text-[10px] font-headline-sm text-on-surface-variant">GPS_LOCATING_TR_v2.0</span></div></div>
{/* AI Optimize Button Overlaid */}
<div className="absolute bottom-3 right-3">
<button className="bg-neon-blue text-on-primary hover:bg-blue-500 font-label-md text-label-md px-3 py-2 rounded shadow-lg flex items-center gap-2 transition-colors border border-blue-400 font-headline-sm">
<span className="material-symbols-outlined text-sm font-headline-sm">auto_awesome</span>
                    OPTIMIZE ROUTE
                </button>
</div>
{/* Route Stats */}
<div className="bg-surface-container-low px-3 py-2 flex justify-between items-center border-t border-outline-variant">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-headline-sm">Est. Distance</span>
<span className="font-label-md text-label-md text-on-surface font-headline-sm">42.5 MI</span>
</div>
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-headline-sm">Est. Duration</span>
<span className="font-label-md text-label-md text-on-surface font-headline-sm">6H 15M</span>
</div>
</div>
</section>
{/* Vertical Timeline / Agenda */}
<section className="flex flex-col mt-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-4">Agenda: AUG 14</h2>
<div className="relative pl-6">
{/* Vertical Spine */}
<div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-outline-variant opacity-50"></div>
{/* Job 1 (Completed/In Progress conceptually) */}
<div className="relative mb-6">
{/* Timeline Node */}
<div className="absolute -left-[29px] top-3 w-4 h-4 rounded-full bg-surface-card border-2 border-tertiary-container z-10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></div>
</div>
{/* Job Card: Normal Priority */}
<div className="bg-surface-card border border-outline-variant rounded relative overflow-hidden group hover:border-primary transition-colors"><div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container"></div><div className="p-2.5 pl-4"><div className="flex justify-between items-start mb-1"><div className="flex flex-col"><span className="font-headline-sm text-[12px] text-on-surface">JOB-9902-A</span><span className="font-headline-sm text-[10px] text-on-surface-variant uppercase tracking-wider">HVAC Diagnostic</span></div><div className="flex flex-col items-end"><span className="font-headline-sm text-[12px] text-on-surface">08:00 AM</span><div className="flex items-center gap-1 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-ping"></div><span className="font-headline-sm text-[10px] text-tertiary-container uppercase tracking-tight">Arrived</span></div></div></div><div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/30"><div className="flex items-center gap-1 text-on-surface-variant"><span className="material-symbols-outlined text-xs font-headline-sm">location_on</span><span className="font-headline-sm text-[10px]">S4, IND PARK</span></div><div className="bg-tertiary-container/10 text-tertiary border border-tertiary/20 px-1.5 py-0.5 rounded text-[9px] font-headline-sm uppercase">EVIDENCE: 2/2</div></div></div></div>
</div>
{/* Job 2 (Active/Next) */}
<div className="relative mb-6">
{/* Timeline Node */}
<div className="absolute -left-[29px] top-3 w-4 h-4 rounded-full bg-surface-card border-2 border-neon-blue z-10 flex items-center justify-center shadow-[0_0_8px_rgba(37,99,235,0.6)]">
<div className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse"></div>
</div>
{/* Job Card: Urgent Priority */}
<div className="bg-surface-card border-2 border-error-container rounded relative overflow-hidden shadow-[0_0_12px_rgba(147,0,10,0.2)]"><div className="absolute left-0 top-0 bottom-0 w-1.5 bg-error-container"></div><div className="p-2.5 pl-4"><div className="flex justify-between items-start mb-1"><div className="flex flex-col gap-0.5"><div className="flex items-center gap-2"><span className="font-headline-sm text-[12px] text-on-surface">JOB-9904-X</span><span className="bg-error-container text-on-error-container px-1.5 py-0 rounded text-[8px] font-headline-sm uppercase animate-pulse">URGENT</span></div><span className="font-headline-sm text-[10px] text-on-surface-variant uppercase">Mainframe Power Fail</span></div><div className="flex flex-col items-end"><span className="font-headline-sm text-[12px] text-neon-blue neon-glow">10:30 AM</span><span className="font-headline-sm text-[10px] text-on-surface-variant opacity-70 tracking-tight">IN 45m</span></div></div><div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/30"><div className="flex items-center gap-1 text-on-surface-variant"><span className="material-symbols-outlined text-xs font-headline-sm">navigation</span><span className="font-headline-sm text-[10px]">12.4 MI DIST</span></div><button className="bg-neon-blue text-on-primary font-headline-sm text-[10px] px-3 py-1 rounded uppercase hover:bg-blue-500 transition-colors tracking-widest">TRANSIT</button></div></div></div>
</div>
{/* Job 3 (Pending) */}
<div className="relative mb-6">
{/* Timeline Node */}
<div className="absolute -left-[29px] top-3 w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-outline-variant z-10"></div>
{/* Job Card: Normal Priority */}
<div className="bg-surface-container-lowest border border-outline-variant rounded relative overflow-hidden opacity-75">
{/* Left Accent Stripe - Normal (Blue, muted) */}
<div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
<div className="p-3 pl-4">
<div className="flex justify-between items-start mb-2">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant font-headline-sm">JOB-9907-C</span>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-0.5 font-headline-sm">Routine Inspection</span>
</div>
<div className="flex flex-col items-end">
<span className="font-label-md text-label-md text-on-surface-variant font-headline-sm">02:00 PM</span>
<span className="font-label-sm text-label-sm text-outline mt-0.5 uppercase font-headline-sm">Pending</span>
</div>
</div>
<div className="flex items-center justify-between mt-3 pt-3 border-t border-outline-variant/30">
<div className="flex items-center gap-1 text-outline">
<span className="material-symbols-outlined text-sm font-headline-sm">location_on</span>
<span className="font-label-sm text-label-sm font-headline-sm">Sector 9, Comm Hub</span>
</div>
<div className="flex items-center gap-1 text-outline">
<span className="material-symbols-outlined text-sm font-headline-sm">sync_disabled</span>
</div>
</div>
</div>
</div>
</div>
{/* End of Day Indicator */}
<div className="relative mt-2 flex items-center justify-center py-4">
<span className="font-label-sm text-label-sm text-outline-variant uppercase bg-background px-2 z-10 relative font-headline-sm">End of Roster</span>
<div className="absolute w-full h-[1px] bg-outline-variant/30 top-1/2"></div>
</div>
</div>
</section>
</main>
{/* BottomNavBar (from JSON) */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-margin-mobile md:hidden bg-surface-container-highest dark:bg-surface-container-highest fixed bottom-0 w-full z-50 rounded-t-xl border-t border-outline-variant shadow-lg">
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:bg-surface-bright transition-all w-full h-full font-headline-sm">
<span className="material-symbols-outlined text-xl mb-1 font-headline-sm">dashboard</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest font-headline-sm">Jobs</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:bg-surface-bright transition-all w-full h-full font-headline-sm">
<span className="material-symbols-outlined text-xl mb-1 font-headline-sm">upload_file</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest font-headline-sm">Evidence</span>
</button>
{/* Active Tab: Schedule is a subset of Sync/Operations in this hypothetical structure, but let's highlight 'Sync' as the closest operational hub if 'Schedule' isn't explicitly there, actually wait, the prompt is 'Contractor Scheduling & Dispatch'. 'Sync' is for syncing data. Let's assume 'Jobs' is the closest to Scheduling if it's the main dashboard. Wait, looking at JSON: NavigationDrawer has "Schedule". BottomNav has "Jobs", "Evidence", "Sync", "Comms". "Jobs" is the most appropriate active tab for a daily roster/agenda. */}
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl p-unit w-16 h-[80%] my-auto font-headline-sm">
<span className="material-symbols-outlined text-xl mb-0.5 font-headline-sm">sensors</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[8px] font-headline-sm">Sync</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:bg-surface-bright transition-all w-full h-full font-headline-sm">
<span className="material-symbols-outlined text-xl mb-1 font-headline-sm">forum</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest font-headline-sm">Comms</span>
</button>
</nav>
{/* NavigationDrawer (from JSON) - Hidden on mobile, visible on md+ */}
<aside className="hidden md:flex flex-col h-full py-6 bg-surface-container-low dark:bg-surface-container-low h-full w-72 docked left-0 border-r border-outline-variant flat no shadows fixed top-0 bottom-0 pt-20">
{/* Profile Header Layout: left_align */}
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-variant border border-outline-variant flex items-center justify-center overflow-hidden shrink-0">
<span aria-label="Field Operator" className="material-symbols-outlined text-on-surface-variant font-headline-sm">person</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">OP-7742</span>
<span className="font-label-md text-label-md text-on-surface-variant font-headline-sm">Verified Contractor</span>
<span className="font-label-sm text-label-sm text-tertiary mt-1 font-headline-sm">Status: Online</span>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1 px-3">
<a className="flex items-center gap-3 px-3 py-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-200 ease-in-out font-headline-sm" href="#">
<span className="material-symbols-outlined font-headline-sm">construction</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-headline-sm">Job Terminal</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-200 ease-in-out font-headline-sm" href="#">
<span className="material-symbols-outlined font-headline-sm">camera_enhance</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-headline-sm">Evidence Hub</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-200 ease-in-out font-headline-sm" href="#">
<span className="material-symbols-outlined font-headline-sm">sync_alt</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-headline-sm">Sync Engine</span>
</a>
{/* Active Tab */}
<a className="flex items-center gap-3 px-3 py-3 rounded bg-primary-container text-on-primary-container border-l-4 border-neon-blue transition-all duration-200 ease-in-out font-headline-sm" href="#">
<span className="material-symbols-outlined font-headline-sm">route</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-headline-sm">Schedule</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-200 ease-in-out font-headline-sm" href="#">
<span className="material-symbols-outlined font-headline-sm">account_balance_wallet</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-headline-sm">Financials</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-200 ease-in-out font-headline-sm" href="#">
<span className="material-symbols-outlined font-headline-sm">description</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-headline-sm">Protocols</span>
</a>
</nav>
</aside>
    </div>
  );
}

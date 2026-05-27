export default function EvidencePage() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
{/* TopAppBar (Web & Mobile Shell Anchor) */}
<header className="bg-surface dark:bg-surface border-b border-surface-variant flex justify-between items-center w-full px-6 py-4 max-w-[1440px] mx-auto docked full-width top-0 z-50 flat no shadows">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container text-2xl" data-icon="analytics" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
<span className="font-headline-md text-headline-md font-bold text-primary-container tracking-tight">TradeVision C.A.R.E.</span>
</div>
{/* Desktop Navigation Cluster (Responsive Pivot) */}
<nav className="hidden md:flex items-center gap-8">
<a className="text-on-surface-variant hover:text-primary-container transition-colors flex items-center gap-2 font-label-caps text-label-caps tracking-wider" href="#">
<span className="material-symbols-outlined text-[18px]">dashboard</span>
                Command
            </a>
<a className="text-primary-container dark:text-primary-fixed font-bold flex items-center gap-2 font-label-caps text-label-caps tracking-wider relative after:content-[''] after:absolute after:-bottom-[22px] after:left-0 after:w-full after:h-[2px] after:bg-primary-container" href="#">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_city</span>
                Projects
            </a>
<a className="text-on-surface-variant hover:text-primary-container transition-colors flex items-center gap-2 font-label-caps text-label-caps tracking-wider" href="#">
<span className="material-symbols-outlined text-[18px]">assignment_late</span>
                Claims
            </a>
<a className="text-on-surface-variant hover:text-primary-container transition-colors flex items-center gap-2 font-label-caps text-label-caps tracking-wider" href="#">
<span className="material-symbols-outlined text-[18px]">notifications_active</span>
                Alerts
            </a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-high border border-surface-variant hover:bg-surface-bright/10 transition-colors">
<span className="material-symbols-outlined text-on-surface text-[18px]" data-icon="person">person</span>
</button>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-margin py-8 mb-20 md:mb-0">
{/* Page Header & Controls */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h1 className="font-display-md text-display-md text-on-surface tracking-tight mb-2 uppercase">Evidence Log</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Active project field submissions and documentation.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
{/* Search Component */}
<div className="relative w-full sm:w-64 kinetic-border-active border-b border-surface-variant transition-all bg-surface-container-low rounded-t-sm">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
<input className="w-full bg-transparent border-none pl-10 pr-3 py-2 text-on-surface font-mono-data text-mono-data focus:ring-0 placeholder:text-surface-variant" placeholder="Search projects, ID..." type="text" />
</div>
{/* Filter Component */}
<div className="relative w-full sm:w-48 kinetic-border-active border-b border-surface-variant transition-all bg-surface-container-low rounded-t-sm flex items-center">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">filter_list</span>
<select className="w-full bg-transparent border-none pl-10 pr-8 py-2 text-on-surface font-mono-data text-mono-data focus:ring-0 appearance-none cursor-pointer">
<option className="bg-surface-container text-on-surface" value="all">All Statuses</option>
<option className="bg-surface-container text-on-surface" value="verified">Verified</option>
<option className="bg-surface-container text-on-surface" value="pending">Pending</option>
<option className="bg-surface-container text-on-surface" value="flagged">Flagged</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px] pointer-events-none">expand_more</span>
</div>
</div>
</div>
{/* High-Density Data Grid */}
<div className="flex flex-col gap-unit">
{/* Grid Header */}
<div className="grid grid-cols-12 gap-4 px-4 py-2 border-b border-surface-variant text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest hidden md:grid"><div className="col-span-3">Project & ID</div>
<div className="col-span-2">Status</div>
<div className="col-span-2">Activity</div>
<div className="col-span-1 text-right">Count</div>
<div className="col-span-2 text-right pr-4">Timestamp</div>
<div className="col-span-2 text-right">Action</div></div>
{/* Data Row 1 (Verified) */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-2 items-center bg-surface-container-low border border-surface-variant rounded-none hover:bg-surface-bright/5 transition-colors group border-l-2 border-l-tertiary">
<div className="md:col-span-3 flex flex-col justify-center">
<span className="font-headline-sm text-[18px] text-on-surface truncate">Sector 7 Pipeline Retrofit</span>
<span className="font-mono-data text-[11px] text-primary tracking-tighter uppercase opacity-80">PRJ-2094-A</span>
</div>
<div className="md:col-span-2 flex items-center">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-none bg-tertiary-container/20 border border-tertiary/40 text-tertiary font-label-caps text-[9px] uppercase tracking-tighter">
<span className="w-1 h-1 bg-tertiary shadow-[0_0_4px_currentColor]"></span>
            Verified
        </span>
</div>
<div className="md:col-span-2 flex items-center gap-1">
<div className="flex gap-0.5">
<span className="w-1.5 h-3 bg-tertiary/60"></span>
<span className="w-1.5 h-3 bg-tertiary/60"></span>
<span className="w-1.5 h-3 bg-tertiary/20"></span>
<span className="w-1.5 h-3 bg-tertiary/60"></span>
<span className="w-1.5 h-3 bg-tertiary/80 shadow-[0_0_4px_#72daad]"></span>
</div>
<span className="font-label-caps text-[9px] text-on-surface-variant ml-1">TREND</span>
</div>
<div className="md:col-span-1 flex md:justify-end items-center gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[14px]">folder_data</span>
<span className="font-mono-data text-mono-data text-on-surface">142</span>
</div>
<div className="md:col-span-2 flex flex-col justify-center text-right md:pr-4">
<span className="font-mono-data text-[11px] text-on-surface-variant">2023-10-24</span>
<span className="font-mono-data text-[9px] text-surface-variant uppercase">14:32 UTC</span>
</div>
<div className="md:col-span-2 flex justify-end">
<button className="border border-primary-container text-primary-container hover:bg-primary-container hover:text-on-primary-container px-3 py-1 text-[10px] font-label-caps uppercase tracking-widest transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">add</span>
            Evidence
        </button>
</div>
</div>
{/* Data Row 2 (Flagged) */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-2 items-center bg-surface-container-low border border-error-container/50 rounded-none hover:bg-surface-bright/5 transition-colors group relative border-l-2 border-l-error">
<div className="md:col-span-3 flex flex-col justify-center pl-1">
<span className="font-headline-sm text-[18px] text-on-surface truncate">Nexus Array Foundation</span>
<span className="font-mono-data text-[11px] text-error tracking-tighter uppercase opacity-80">PRJ-8821-C</span>
</div>
<div className="md:col-span-2 flex items-center">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-none bg-error-container/20 border border-error/40 text-error font-label-caps text-[9px] uppercase tracking-tighter animate-pulse">
<span className="w-1 h-1 bg-error"></span>
            Flagged
        </span>
</div>
<div className="md:col-span-2 flex items-center gap-1">
<div className="flex gap-0.5">
<span className="w-1.5 h-3 bg-error/40"></span>
<span className="w-1.5 h-3 bg-error/60"></span>
<span className="w-1.5 h-3 bg-error/80"></span>
<span className="w-1.5 h-3 bg-error/20"></span>
<span className="w-1.5 h-3 bg-error shadow-[0_0_4px_#ffb4ab]"></span>
</div>
<span className="font-label-caps text-[9px] text-on-surface-variant ml-1">TREND</span>
</div>
<div className="md:col-span-1 flex md:justify-end items-center gap-1.5">
<span className="material-symbols-outlined text-error text-[14px]">warning</span>
<span className="font-mono-data text-mono-data text-error">87</span>
</div>
<div className="md:col-span-2 flex flex-col justify-center text-right md:pr-4">
<span className="font-mono-data text-[11px] text-on-surface-variant">2023-10-23</span>
<span className="font-mono-data text-[9px] text-surface-variant uppercase">09:15 UTC</span>
</div>
<div className="md:col-span-2 flex justify-end">
<button className="border border-error text-error hover:bg-error hover:text-on-error px-3 py-1 text-[10px] font-label-caps uppercase tracking-widest transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">add</span>
            Evidence
        </button>
</div>
</div>
{/* Data Row 3 (Pending) */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-2 items-center bg-surface-container-low border border-surface-variant rounded-none hover:bg-surface-bright/5 transition-colors group border-l-2 border-l-outline">
<div className="md:col-span-3 flex flex-col justify-center">
<span className="font-headline-sm text-[18px] text-on-surface truncate">Orbital Dock Repair</span>
<span className="font-mono-data text-[11px] text-on-surface-variant tracking-tighter uppercase opacity-80">PRJ-104-X</span>
</div>
<div className="md:col-span-2 flex items-center">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-none bg-surface-variant/20 border border-outline/40 text-on-surface-variant font-label-caps text-[9px] uppercase tracking-tighter">
<span className="w-1 h-1 bg-outline"></span>
            Pending
        </span>
</div>
<div className="md:col-span-2 flex items-center gap-1">
<div className="flex gap-0.5">
<span className="w-1.5 h-3 bg-outline/20"></span>
<span className="w-1.5 h-3 bg-outline/40"></span>
<span className="w-1.5 h-3 bg-outline/20"></span>
<span className="w-1.5 h-3 bg-outline/30"></span>
<span className="w-1.5 h-3 bg-outline/20"></span>
</div>
<span className="font-label-caps text-[9px] text-on-surface-variant ml-1">TREND</span>
</div>
<div className="md:col-span-1 flex md:justify-end items-center gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[14px]">folder_data</span>
<span className="font-mono-data text-mono-data text-on-surface">12</span>
</div>
<div className="md:col-span-2 flex flex-col justify-center text-right md:pr-4">
<span className="font-mono-data text-[11px] text-on-surface-variant">2023-10-25</span>
<span className="font-mono-data text-[9px] text-surface-variant uppercase">11:05 UTC</span>
</div>
<div className="md:col-span-2 flex justify-end">
<button className="border border-primary-container text-primary-container hover:bg-primary-container hover:text-on-primary-container px-3 py-1 text-[10px] font-label-caps uppercase tracking-widest transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">add</span>
            Evidence
        </button>
</div>
</div>
{/* Data Row 4 (Verified) */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-2 items-center bg-surface-container-low border border-surface-variant rounded-none hover:bg-surface-bright/5 transition-colors group border-l-2 border-l-tertiary">
<div className="md:col-span-3 flex flex-col justify-center">
<span className="font-headline-sm text-[18px] text-on-surface truncate">Cryo-Storage Facility C</span>
<span className="font-mono-data text-[11px] text-primary tracking-tighter uppercase opacity-80">PRJ-5532-B</span>
</div>
<div className="md:col-span-2 flex items-center">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-none bg-tertiary-container/20 border border-tertiary/40 text-tertiary font-label-caps text-[9px] uppercase tracking-tighter">
<span className="w-1 h-1 bg-tertiary shadow-[0_0_4px_currentColor]"></span>
            Verified
        </span>
</div>
<div className="md:col-span-2 flex items-center gap-1">
<div className="flex gap-0.5">
<span className="w-1.5 h-3 bg-tertiary/60"></span>
<span className="w-1.5 h-3 bg-tertiary/80"></span>
<span className="w-1.5 h-3 bg-tertiary/60"></span>
<span className="w-1.5 h-3 bg-tertiary/80"></span>
<span className="w-1.5 h-3 bg-tertiary shadow-[0_0_4px_#72daad]"></span>
</div>
<span className="font-label-caps text-[9px] text-on-surface-variant ml-1">TREND</span>
</div>
<div className="md:col-span-1 flex md:justify-end items-center gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[14px]">folder_data</span>
<span className="font-mono-data text-mono-data text-on-surface">305</span>
</div>
<div className="md:col-span-2 flex flex-col justify-center text-right md:pr-4">
<span className="font-mono-data text-[11px] text-on-surface-variant">2023-10-20</span>
<span className="font-mono-data text-[9px] text-surface-variant uppercase">08:45 UTC</span>
</div>
<div className="md:col-span-2 flex justify-end">
<button className="border border-outline text-on-surface hover:border-primary-container hover:text-primary-container px-3 py-1 text-[10px] font-label-caps uppercase tracking-widest transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">add</span>
            Evidence
        </button>
</div>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only Pivot) */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center px-6 py-3 bg-surface-container-high border-t border-border-subtle shadow-lg z-50">
<a className="flex flex-col items-center justify-center text-text-secondary dark:text-on-secondary-container hover:text-primary-container transition-all group" href="#">
<span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">dashboard</span>
<span className="font-label-caps text-[10px] tracking-wider uppercase">Command</span>
</a>
<a className="flex flex-col items-center justify-center text-primary-container dark:text-primary-fixed-dim font-bold hover:text-primary-container transition-all Active: translate-y-[-2px] duration-200" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_city</span>
<span className="font-label-caps text-[10px] tracking-wider uppercase">Projects</span>
</a>
<a className="flex flex-col items-center justify-center text-text-secondary dark:text-on-secondary-container hover:text-primary-container transition-all group" href="#">
<span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">assignment_late</span>
<span className="font-label-caps text-[10px] tracking-wider uppercase">Claims</span>
</a>
<a className="flex flex-col items-center justify-center text-text-secondary dark:text-on-secondary-container hover:text-primary-container transition-all group" href="#">
<span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">notifications_active</span>
<span className="font-label-caps text-[10px] tracking-wider uppercase">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-text-secondary dark:text-on-secondary-container hover:text-primary-container transition-all group" href="#">
<span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">person</span>
<span className="font-label-caps text-[10px] tracking-wider uppercase">Account</span>
</a>
</nav>
    </div>
  );
}

export default function LogisticsPage() {
  return (
    <div className="bg-background text-on-surface font-body-fixed grid-baseline min-h-screen flex flex-col pt-16 pb-24 selection:bg-primary selection:text-on-primary">
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 border-b border-outline-variant flat no-shadows bg-surface dark:bg-surface flex items-center justify-between px-margin-mobile h-16 w-full">
<div className="flex items-center gap-density-compact">
<button aria-label="Menu" className="text-primary dark:text-primary active:opacity-80 transition-opacity p-2 -ml-2 rounded-full hover:bg-surface-container-highest">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
</button>
<h1 className="font-headline-md text-headline-md uppercase tracking-widest text-primary dark:text-primary">ROOF_COMMAND</h1>
</div>
<button aria-label="Contractor Profile" className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden active:opacity-80 transition-opacity">
<span className="font-label-caps text-label-caps font-bold text-primary dark:text-primary">CP</span>
</button>
</header>
{/* Main Content Canvas */}
<main className="flex-1 px-margin-mobile py-density-comfortable flex flex-col gap-gutter max-w-lg mx-auto w-full relative z-0">
{/* Header Section */}
<div className="flex flex-col gap-unit mb-density-compact">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
<h2 className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest">Incoming Deliveries</h2>
</div>
<h3 className="font-display-lg-mobile text-display-lg-mobile text-on-surface">Receiving Log</h3>
</div>
{/* Metric Cards */}
<div className="grid grid-cols-2 gap-density-compact mb-density-comfortable"><div className="surface-container-low border border-outline-variant rounded-lg p-density-comfortable flex flex-col gap-unit border-l-4 border-l-primary-fixed-dim">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-tighter">Pending Shipments</span>
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-primary-fixed-dim">04</span>
<span className="font-label-caps text-outline">UNITS</span>
</div>
</div>
<div className="surface-container-low border border-outline-variant rounded-lg p-density-comfortable flex flex-col gap-unit border-l-4 border-l-error">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-tighter">Critical Alerts</span>
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-error">01</span>
<span className="font-label-caps text-outline">LATENCY</span>
</div>
</div></div>
{/* Shipment List */}
<div className="flex flex-col gap-density-compact">
{/* Card 1: Critical (Late/Action Needed) */}
<article className="surface-container-high border border-outline-variant rounded-xl overflow-hidden flex flex-col transition-all active:scale-[0.98]">
<div className="px-density-comfortable py-2 bg-surface-container-highest border-b border-outline-variant flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-label-caps text-[11px] text-outline">ID //</span>
<span className="font-data-point text-[14px] text-primary-fixed">SHP-992-A</span>
</div>
<span className="font-label-caps text-[10px] bg-error/20 text-error px-2 py-0.5 rounded-full border border-error/30 uppercase">Priority: Critical</span>
</div>
<div className="p-density-comfortable flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="space-y-1">
<h4 className="font-headline-md text-on-surface leading-tight">Architectural Shingles</h4>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-outline">inventory</span>
<span className="font-body-fixed text-[13px] text-on-surface-variant">Beacon Roofing Supply</span>
</div>
</div>
<div className="bg-primary-container/10 text-primary-fixed-dim border border-primary-fixed-dim/20 px-2 py-1 rounded font-label-caps text-[11px]">SHGL</div>
</div>
<div className="grid grid-cols-2 gap-px bg-outline-variant/30 rounded overflow-hidden">
<div className="bg-surface-container-low p-3">
<p className="font-label-caps text-[10px] text-outline mb-1">ARRIVAL_EST</p>
<p className="font-data-point text-error text-xl">14:00 <span className="text-[12px] opacity-60">EST</span></p>
</div>
<div className="bg-surface-container-low p-3">
<p className="font-label-caps text-[10px] text-outline mb-1">QUANTITY_SQ</p>
<p className="font-data-point text-on-surface text-xl">42.00</p>
</div>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-lg cursor-pointer group hover:border-primary-fixed transition-colors">
<input className="w-5 h-5 rounded border-outline bg-transparent text-primary-fixed focus:ring-primary-fixed" type="checkbox" />
<span className="font-body-fixed text-sm text-on-surface">Verify BOL vs Order Manifest</span>
</label>
<div className="flex gap-2">
<button className="flex-1 bg-primary-fixed text-on-primary-fixed font-label-caps py-3 rounded-lg border border-primary-fixed shadow-[0_0_15px_rgba(125,244,255,0.1)] active:opacity-90">RECV_COMPLETE</button>
<button className="px-4 py-3 border border-error/50 text-error font-label-caps rounded-lg flex items-center justify-center gap-2 hover:bg-error/10">
<span className="material-symbols-outlined text-[18px]">report</span>
</button>
</div>
</div>
</div>
</article>
{/* Card 2: Incoming (Normal) */}
<article className="surface-container-high border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="px-density-comfortable py-2 bg-surface-container-highest border-b border-outline-variant flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-label-caps text-[11px] text-outline">ID //</span>
<span className="font-data-point text-[14px] text-primary-fixed">SHP-104-B</span>
</div>
<span className="font-label-caps text-[10px] bg-secondary-container/20 text-secondary-fixed-dim px-2 py-0.5 rounded-full border border-secondary-fixed-dim/30 uppercase">In Transit</span>
</div>
<div className="p-density-comfortable flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="space-y-1">
<h4 className="font-headline-md text-on-surface leading-tight">TPO Membrane Roll</h4>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-outline">inventory</span>
<span className="font-body-fixed text-[13px] text-on-surface-variant">ABC Supply Co.</span>
</div>
</div>
<div className="bg-surface-container-highest text-primary-fixed-dim border border-outline-variant px-2 py-1 rounded font-label-caps text-[11px]">TPO</div>
</div>
<div className="grid grid-cols-2 gap-px bg-outline-variant/30 rounded overflow-hidden">
<div className="bg-surface-container-low p-3">
<p className="font-label-caps text-[10px] text-outline mb-1">ARRIVAL_EST</p>
<p className="font-data-point text-on-surface text-xl">15:30 <span className="text-[12px] opacity-60">EST</span></p>
</div>
<div className="bg-surface-container-low p-3">
<p className="font-label-caps text-[10px] text-outline mb-1">QUANTITY_RL</p>
<p className="font-data-point text-on-surface text-xl">12.00</p>
</div>
</div>
<button className="w-full bg-surface-container-lowest border border-outline-variant py-3 rounded-lg flex items-center justify-center gap-2 font-label-caps text-on-surface hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[18px]">add_a_photo</span>
            CAPTURE_EVIDENCE
        </button>
</div>
</article>
</div>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full z-50 border-t border-outline-variant flat no-shadows bg-surface-container dark:bg-surface-container flex justify-around items-center w-full h-20 pb-safe md:hidden">
{/* Tab 1: COMMAND (Inactive) */}
<a className="flex flex-col items-center justify-center text-on-surface-variant h-full w-full opacity-60 hover:bg-surface-container-highest active:scale-95 transition-transform duration-100 flex-1" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
<span className="font-label-caps text-[10px]">COMMAND</span>
</a>
{/* Tab 2: JOBS (Active - Receiving is part of Jobs context usually) */}
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container h-full w-full border-t-2 border-primary hover:bg-surface-container-highest active:scale-95 transition-transform duration-100 flex-1" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>construction</span>
<span className="font-label-caps text-[10px] font-bold">JOBS</span>
</a>
{/* Tab 3: INSPECT (Inactive) */}
<a className="flex flex-col items-center justify-center text-on-surface-variant h-full w-full opacity-60 hover:bg-surface-container-highest active:scale-95 transition-transform duration-100 flex-1" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>architecture</span>
<span className="font-label-caps text-[10px]">INSPECT</span>
</a>
{/* Tab 4: EVIDENCE (Inactive) */}
<a className="flex flex-col items-center justify-center text-on-surface-variant h-full w-full opacity-60 hover:bg-surface-container-highest active:scale-95 transition-transform duration-100 flex-1" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>photo_camera</span>
<span className="font-label-caps text-[10px]">EVIDENCE</span>
</a>
</nav>
    </div>
  );
}

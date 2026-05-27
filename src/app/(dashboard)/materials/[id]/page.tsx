export default function MaterialDetailPage() {
  return (
    <div className="antialiased min-h-screen flex flex-col relative overflow-x-hidden pb-[100px]">
{/* TopAppBar Shared Component */}
<header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant flex items-center justify-between px-margin-mobile h-16 transition-opacity">
<div className="flex items-center gap-gutter">
<button aria-label="Menu" className="text-primary hover:bg-surface-container-highest p-1 rounded transition-colors">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 className="font-headline-md text-headline-md uppercase tracking-widest font-label-caps text-label-caps font-bold text-primary">ROOF_COMMAND</h1>
</div>
<button aria-label="Contractor Profile" className="text-primary hover:bg-surface-container-highest p-1 rounded transition-colors flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden">
<span className="material-symbols-outlined text-[20px]">person</span>
</div>
</button>
</header>
{/* Main Canvas: Mobile Grid (4 columns) */}
<main className="flex-1 mt-[80px] px-margin-mobile grid grid-cols-4 gap-unit">
{/* SKU Header & Scanner */}
<section className="col-span-4 bg-surface-container-lowest border border-outline p-density-comfortable flex flex-col gap-unit relative overflow-hidden">
<div className="absolute top-0 right-0 p-1 bg-primary text-on-primary font-label-caps text-[10px] tracking-tighter px-2">ASSET_ACTIVE</div>
<div className="border-l-2 border-primary pl-4">
<p className="font-label-caps text-label-caps text-outline mb-1 uppercase tracking-[0.2em]">Material_SKU</p>
<h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface leading-none mb-2">TPO-060-WHT</h2>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 bg-surface-variant border border-outline-variant text-primary font-label-caps text-[12px]">TPO_CLASS_A</span>
<span className="font-body-fixed text-[14px] text-on-surface-variant italic opacity-80">Thermoplastic Polyolefin Roll</span>
</div>
</div>
</section>
{/* Technical Specs Card (Cyber-Industrial Style) */}
<section className="col-span-4 mt-gutter border border-outline bg-surface-container-low">
<div className="bg-surface-container-highest border-b border-outline px-margin-mobile py-2 flex justify-between items-center">
<span className="font-label-caps text-label-caps text-primary tracking-widest">TECH_SPEC_GRID</span>
<span className="material-symbols-outlined text-outline text-[18px]">settings_input_component</span>
</div>
<div className="grid grid-cols-2">
<div className="p-density-comfortable border-r border-b border-outline-variant">
<p className="font-label-caps text-[10px] text-outline mb-1 uppercase">Thickness</p>
<p className="font-data-point text-data-point text-on-surface">60.00 <span className="text-label-caps text-outline-variant ml-1">MIL</span></p>
</div>
<div className="p-density-comfortable border-b border-outline-variant">
<p className="font-label-caps text-[10px] text-outline mb-1 uppercase">Roll_Dim</p>
<p className="font-data-point text-data-point text-on-surface">10×100 <span className="text-label-caps text-outline-variant ml-1">FT</span></p>
</div>
<div className="p-density-comfortable border-r border-outline-variant">
<p className="font-label-caps text-[10px] text-outline mb-1 uppercase">Net_Weight</p>
<p className="font-data-point text-data-point text-on-surface">320.0 <span className="text-label-caps text-outline-variant ml-1">LBS</span></p>
</div>
<div className="p-density-comfortable">
<p className="font-label-caps text-[10px] text-outline mb-1 uppercase">Coverage</p>
<p className="font-data-point text-data-point text-on-surface">1,000 <span className="text-label-caps text-outline-variant ml-1">SQF</span></p>
</div>
</div>
</section>
{/* Current Stock Level Indicator */}
<section className="col-span-4 mt-gutter border-2 border-primary bg-surface-container-highest p-density-comfortable flex items-center justify-between">
<div className="space-y-1">
<p className="font-label-caps text-label-caps text-primary font-bold tracking-widest">SYSTEM_INVENTORY</p>
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-on-surface">24</span>
<span className="font-data-point text-data-point text-outline">/ UNITS</span>
</div>
<p className="font-label-caps text-[10px] text-secondary">CRITICAL_REORDER_LEVEL: 10</p>
</div>
<div className="relative w-24 h-24 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
<circle className="text-surface-variant" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-primary" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="150" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-label-caps text-[10px] text-outline">STATUS</span>
<span className="font-data-point text-[14px] text-primary">LOW</span>
</div>
</div>
</section>
{/* Stock History (High Density List) */}
<section className="col-span-4 mt-gutter space-y-unit">
<div className="flex justify-between items-end border-b border-outline pb-1">
<h3 className="font-label-caps text-label-caps text-on-surface tracking-[0.2em] font-bold">STOCK_HISTORY</h3>
<span className="font-label-caps text-[10px] text-outline">30D_TELEMETRY</span>
</div>
<div className="divide-y divide-outline-variant border border-outline-variant">
<div className="flex items-center p-3 bg-surface-container-low border-l-4 border-error">
<div className="flex-1">
<p className="font-data-point text-[14px] text-on-surface mb-0.5">JOB-4902-ALPHA</p>
<p className="font-label-caps text-[10px] text-outline flex items-center gap-2">
<span className="material-symbols-outlined text-[12px]">schedule</span> OCT 24 • 14:30
          <span className="material-symbols-outlined text-[12px]">group</span> CREW_B
        </p>
</div>
<div className="text-right">
<p className="font-data-point text-[16px] text-error">-12.00</p>
<p className="font-label-caps text-[10px] text-outline uppercase">DEBIT</p>
</div>
</div>
<div className="flex items-center p-3 bg-surface-container-low border-l-4 border-primary">
<div className="flex-1">
<p className="font-data-point text-[14px] text-on-surface mb-0.5">PO-8812-DIST</p>
<p className="font-label-caps text-[10px] text-outline flex items-center gap-2">
<span className="material-symbols-outlined text-[12px]">schedule</span> OCT 20 • 08:00
          <span className="material-symbols-outlined text-[12px]">warehouse</span> DOCK_02
        </p>
</div>
<div className="text-right">
<p className="font-data-point text-[16px] text-primary">+50.00</p>
<p className="font-label-caps text-[10px] text-outline uppercase">CREDIT</p>
</div>
</div>
</div>
</section>
</main>
{/* Action Pinned Bottom */}
<div className="fixed bottom-0 left-0 w-full p-margin-mobile bg-surface-container-highest border-t-2 border-outline z-40 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
<button className="group w-full bg-primary text-on-primary font-data-point text-data-point py-5 flex justify-center items-center gap-4 uppercase tracking-[0.3em] transition-all relative overflow-hidden active:translate-y-1">
<div className="absolute inset-0 border-4 border-on-primary opacity-20"></div>
<span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">shopping_cart_checkout</span>
    INITIATE_PROCUREMENT_CMD
    <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
</button>
</div>
    </div>
  );
}

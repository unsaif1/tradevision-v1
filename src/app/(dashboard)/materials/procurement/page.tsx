export default function MaterialProcurementPage() {
  return (
    <div className="bg-background text-on-background min-h-screen pb-safe antialiased">
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-surface dark:bg-surface border-b border-outline-variant flat no-shadows">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full">
<button aria-label="Menu" className="text-on-surface-variant hover:bg-surface-container-highest active:opacity-80 transition-opacity p-2 rounded">
<span className="material-symbols-outlined">menu</span>
</button>
<h1 className="font-headline-md text-headline-md uppercase tracking-widest text-primary dark:text-primary">ROOF_COMMAND</h1>
<button aria-label="Profile" className="text-on-surface-variant hover:bg-surface-container-highest active:opacity-80 transition-opacity p-2 rounded">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
</button>
</div>
</header>
{/* Main Content */}
<main className="pt-20 pb-28 px-margin-mobile flex flex-col gap-density-comfortable">
{/* Header */}
<section>
<h2 className="font-headline-md text-headline-md text-primary">NEW REQUISITION</h2>
<p className="font-body-fixed text-body-fixed text-on-surface-variant opacity-80 mt-1">Generate a purchase request for site materials.</p>
</section>
{/* Project Info */}
<section className="bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden">
<div className="bg-surface-container-high px-density-comfortable py-density-compact border-b border-outline-variant flex justify-between items-center">
<h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">PROJECT ORIGIN</h3>
<span className="material-symbols-outlined text-on-surface-variant text-sm">info</span>
</div>
<div className="p-density-comfortable flex flex-col gap-gutter">
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="space-y-unit">
<label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-tighter">JOB ID</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">tag</span>
<input className="w-full bg-surface-dim border border-outline-variant rounded py-2.5 pl-10 pr-3 font-data-point text-data-point text-on-surface focus:outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim transition-all" placeholder="Enter Job ID" type="text" value="PRJ-9942-A" />
</div>
</div>
<div className="space-y-unit">
<label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-tighter">VENDOR SELECTION</label>
<div className="relative group">
<select className="w-full bg-surface-dim border border-outline-variant rounded py-2.5 px-3 font-body-fixed text-body-fixed text-on-surface appearance-none focus:outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim transition-all">
<option>Beacon Roofing Supply</option>
<option>ABC Supply Co.</option>
<option>SRS Distribution</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none group-focus-within:text-primary transition-colors">expand_more</span>
</div>
</div>
</div>
</div>
</section>
{/* Materials List */}
<section className="flex flex-col gap-2">
<div className="flex justify-between items-center mb-1">
<h3 className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">MATERIAL BILL</h3>
<button className="font-label-caps text-label-caps bg-secondary-container/10 text-secondary-fixed border border-secondary-container/20 px-3 py-1.5 rounded flex items-center gap-1 hover:bg-secondary-container/20 transition-colors">
<span className="material-symbols-outlined text-sm">add_circle</span> ADD ITEM
</button>
</div>
<div className="bg-surface-container-low border border-outline-variant rounded-lg divide-y divide-outline-variant">
<div className="p-3 flex gap-4 items-center">
<div className="w-14 h-14 bg-surface-container-highest rounded border border-outline-variant flex flex-col items-center justify-center">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase">CODE</span>
<span className="font-label-caps text-on-surface font-bold">SHGL</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-headline-md text-base text-on-surface truncate">Architectural Shingles</p>
<p className="font-label-caps text-[11px] text-on-surface-variant tracking-tighter">Timberline HDZ - Charcoal</p>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center bg-surface-dim border border-outline-variant rounded overflow-hidden">
<button className="px-2 py-1 text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
<input className="w-12 bg-transparent border-none text-center font-data-point text-lg text-primary-fixed focus:ring-0 p-0" type="number" value="45" />
<span className="font-label-caps text-[10px] text-on-surface-variant pr-2 font-bold">SQ</span>
<button className="px-2 py-1 text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
</div>
</div>
<button className="text-outline hover:text-error transition-colors p-1"><span className="material-symbols-outlined">delete</span></button>
</div>
<div className="p-3 flex gap-4 items-center">
<div className="w-14 h-14 bg-surface-container-highest rounded border border-outline-variant flex flex-col items-center justify-center">
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase">CODE</span>
<span className="font-label-caps text-on-surface font-bold">UNDR</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-headline-md text-base text-on-surface truncate">Synthetic Underlayment</p>
<p className="font-label-caps text-[11px] text-on-surface-variant tracking-tighter">FeltBuster - 10SQ Roll</p>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center bg-surface-dim border border-outline-variant rounded overflow-hidden">
<button className="px-2 py-1 text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
<input className="w-12 bg-transparent border-none text-center font-data-point text-lg text-primary-fixed focus:ring-0 p-0" type="number" value="5" />
<span className="font-label-caps text-[10px] text-on-surface-variant pr-2 font-bold">RL</span>
<button className="px-2 py-1 text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
</div>
</div>
<button className="text-outline hover:text-error transition-colors p-1"><span className="material-symbols-outlined">delete</span></button>
</div>
</div>
</section>
{/* Summary & Submit */}
<section className="mt-4">
<button className="w-full bg-primary-container text-on-primary-container font-display-lg-mobile py-5 rounded-lg border-b-4 border-primary shadow-lg shadow-primary-container/20 hover:brightness-110 active:translate-y-[2px] active:border-b-0 transition-all flex justify-center items-center gap-3 uppercase tracking-tighter">
<span className="material-symbols-outlined font-bold">send_and_archive</span> SUBMIT REQUISITION
</button>
</section>
</main>
{/* BottomNavBar */}
<nav className="fixed bottom-0 w-full z-50 bg-surface-container dark:bg-surface-container border-t border-outline-variant flat no-shadows">
<div className="flex justify-around items-center w-full h-20 pb-safe">
<a className="flex flex-col items-center justify-center text-on-surface-variant h-full w-full opacity-60 hover:bg-surface-container-highest active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined mb-1">dashboard</span>
<span className="font-label-caps text-label-caps">COMMAND</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant h-full w-full opacity-60 hover:bg-surface-container-highest active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined mb-1">construction</span>
<span className="font-label-caps text-label-caps">JOBS</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container h-full w-full border-t-2 border-primary active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
<span className="font-label-caps text-label-caps font-bold">INSPECT</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant h-full w-full opacity-60 hover:bg-surface-container-highest active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined mb-1">photo_camera</span>
<span className="font-label-caps text-label-caps">EVIDENCE</span>
</a>
</div>
</nav>
    </div>
  );
}

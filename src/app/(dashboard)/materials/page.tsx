export default function MaterialsPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col md:hidden">
{/* TopAppBar Shell Component */}
<header className="bg-surface dark:bg-surface text-primary dark:text-primary font-headline-md text-headline-md uppercase tracking-widest fixed top-0 w-full z-50 border-b border-outline-variant flat no-shadows flex items-center justify-between px-margin-mobile h-16 w-full pt-safe">
<div className="flex items-center gap-gutter">
<button className="hover:bg-surface-container-highest active:opacity-80 transition-opacity p-2 -ml-2 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="menu">menu</span>
</button>
<h1 className="font-label-caps text-label-caps font-bold text-primary m-0">ROOF_COMMAND</h1>
</div>
<div className="flex items-center">
<div className="h-8 w-8 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="person">person</span>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-1 mt-16 mb-20 px-margin-mobile py-density-comfortable flex flex-col gap-gutter overflow-y-auto">
{/* Header & Search */}
<div className="flex flex-col gap-density-compact">
<h2 className="font-headline-md text-headline-md text-on-surface">INVENTORY</h2>
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant z-10" data-icon="search">search</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded inset-shadow pl-10 pr-4 py-3 font-label-caps text-label-caps text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="SEARCH SKU OR MATERIAL" type="text" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
<span className="material-symbols-outlined" data-icon="barcode_scanner">barcode_scanner</span>
</button>
</div>
</div>
{/* Filter Categories (Horizontal Scroll) */}
<div className="flex gap-density-compact overflow-x-auto no-scrollbar py-1 -mx-margin-mobile px-margin-mobile">
<button className="whitespace-nowrap px-4 py-1.5 border-2 border-primary bg-primary/10 text-primary font-label-caps text-label-caps rounded-sm flex items-center gap-2 shadow-[0_0_8px_rgba(0,240,255,0.3)]">
<span className="material-symbols-outlined text-[16px]" data-icon="layers">layers</span>
                MEMBRANES
            </button>
<button className="whitespace-nowrap px-4 py-1.5 border border-outline-variant bg-surface-container text-on-surface-variant font-label-caps text-label-caps rounded-sm flex items-center gap-2 opacity-80 hover:opacity-100 hover:border-outline transition-all">
<span className="material-symbols-outlined text-[16px]" data-icon="format_shapes">format_shapes</span>
                INSULATION
            </button>
<button className="whitespace-nowrap px-4 py-1.5 border border-outline-variant bg-surface-container text-on-surface-variant font-label-caps text-label-caps rounded-sm flex items-center gap-2 opacity-80 hover:opacity-100 hover:border-outline transition-all">
<span className="material-symbols-outlined text-[16px]" data-icon="hardware">hardware</span>
                FASTENERS
            </button>
<button className="whitespace-nowrap px-4 py-1.5 border border-outline-variant bg-surface-container text-on-surface-variant font-label-caps text-label-caps rounded-sm flex items-center gap-2 opacity-80 hover:opacity-100 hover:border-outline transition-all">
<span className="material-symbols-outlined text-[16px]" data-icon="construction">construction</span>
                ACCESSORIES
            </button>
</div>
{/* Inventory List (High Density) */}
<div className="flex flex-col gap-2 mt-2">
{/* Item: In Stock */}
<div className="bg-surface-container-low border border-outline-variant rounded-sm relative overflow-hidden flex flex-col p-2.5 gap-2">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
<div className="flex justify-between items-start pl-2">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-primary tracking-wider">SKU: TPO-60-W</span>
<span className="font-body-fixed text-sm text-on-surface mt-0.5 leading-tight">60 Mil TPO Membrane (White)</span>
</div>
<div className="flex flex-col items-end">
<span className="font-data-point text-data-point text-primary">42</span>
<span className="font-label-caps text-[10px] text-on-surface-variant mt-0.5">ROLLS</span>
</div>
</div>
<div className="flex justify-between items-center pl-2 pt-2 border-t border-outline-variant/30 mt-0.5">
<div className="flex items-center gap-3">
<span className="font-label-caps text-[10px] text-on-surface bg-surface-container px-1.5 py-0.5 rounded-sm border border-outline-variant/50">WH-A-12</span>
<div className="flex items-end gap-0.5 h-3 opacity-70">
{/* Micro Sparkline */}
<div className="w-1 bg-primary h-[30%]"></div>
<div className="w-1 bg-primary h-[50%]"></div>
<div className="w-1 bg-primary h-[40%]"></div>
<div className="w-1 bg-primary h-[70%]"></div>
<div className="w-1 bg-primary h-[60%]"></div>
<div className="w-1 bg-primary h-[90%]"></div>
<div className="w-1 bg-primary h-[100%]"></div>
</div>
</div>
<span className="font-label-caps text-[10px] text-primary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shadow-[0_0_5px_rgba(0,240,255,1)]"></span> IN STOCK
                    </span>
</div>
</div>
{/* Item: Low Stock */}
<div className="bg-surface-container-low border border-outline-variant rounded-sm relative overflow-hidden flex flex-col p-2.5 gap-2">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary shadow-[0_0_10px_rgba(255,219,157,0.8)]"></div>
<div className="flex justify-between items-start pl-2">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-secondary tracking-wider">SKU: EPDM-45-B</span>
<span className="font-body-fixed text-sm text-on-surface mt-0.5 leading-tight">45 Mil EPDM Membrane (Black)</span>
</div>
<div className="flex flex-col items-end">
<span className="font-data-point text-data-point text-secondary">08</span>
<span className="font-label-caps text-[10px] text-on-surface-variant mt-0.5">ROLLS</span>
</div>
</div>
<div className="flex justify-between items-center pl-2 pt-2 border-t border-outline-variant/30 mt-0.5">
<div className="flex items-center gap-3">
<span className="font-label-caps text-[10px] text-on-surface bg-surface-container px-1.5 py-0.5 rounded-sm border border-outline-variant/50">WH-B-04</span>
<div className="flex items-end gap-0.5 h-3 opacity-70">
{/* Micro Sparkline */}
<div className="w-1 bg-secondary h-[80%]"></div>
<div className="w-1 bg-secondary h-[70%]"></div>
<div className="w-1 bg-secondary h-[50%]"></div>
<div className="w-1 bg-secondary h-[40%]"></div>
<div className="w-1 bg-secondary h-[30%]"></div>
<div className="w-1 bg-secondary h-[20%]"></div>
<div className="w-1 bg-secondary h-[10%]"></div>
</div>
</div>
<span className="font-label-caps text-[10px] text-secondary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block shadow-[0_0_5px_rgba(255,219,157,1)]"></span> LOW STOCK
                    </span>
</div>
</div>
{/* Item: Out of Stock */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded-sm relative overflow-hidden flex flex-col p-2.5 gap-2 opacity-60">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error shadow-[0_0_10px_rgba(255,180,171,0.8)]"></div>
<div className="flex justify-between items-start pl-2">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-error tracking-wider">SKU: PVC-50-G</span>
<span className="font-body-fixed text-sm text-on-surface mt-0.5 leading-tight line-through text-on-surface-variant">50 Mil PVC Membrane (Grey)</span>
</div>
<div className="flex flex-col items-end">
<span className="font-data-point text-data-point text-error">00</span>
<span className="font-label-caps text-[10px] text-on-surface-variant mt-0.5">ROLLS</span>
</div>
</div>
<div className="flex justify-between items-center pl-2 pt-2 border-t border-outline-variant/30 mt-0.5">
<div className="flex items-center gap-3">
<span className="font-label-caps text-[10px] text-on-surface bg-surface-container px-1.5 py-0.5 rounded-sm border border-outline-variant/50">WH-A-15</span>
<div className="flex items-end gap-0.5 h-3 opacity-50">
{/* Micro Sparkline */}
<div className="w-1 bg-error h-[40%]"></div>
<div className="w-1 bg-error h-[30%]"></div>
<div className="w-1 bg-error h-[20%]"></div>
<div className="w-1 bg-error h-[10%]"></div>
<div className="w-1 bg-error h-[5%]"></div>
<div className="w-1 bg-error h-[0%]"></div>
<div className="w-1 bg-error h-[0%]"></div>
</div>
</div>
<span className="font-label-caps text-[10px] text-error flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error inline-block shadow-[0_0_5px_rgba(255,180,171,1)]"></span> DEPLETED
                    </span>
</div>
</div>
</div>
</main>
{/* BottomNavBar Shell Component */}
<nav className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary font-label-caps text-label-caps fixed bottom-0 w-full z-50 border-t border-outline-variant flat no-shadows flex justify-around items-center w-full h-20 pb-safe">
<button className="flex flex-col items-center justify-center text-on-surface-variant h-full w-full opacity-60 hover:bg-surface-container-highest active:scale-95 transition-transform duration-100">
<span className="material-symbols-outlined mb-1" data-icon="dashboard">dashboard</span>
<span>COMMAND</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant h-full w-full opacity-60 hover:bg-surface-container-highest active:scale-95 transition-transform duration-100">
<span className="material-symbols-outlined mb-1" data-icon="construction">construction</span>
<span>JOBS</span>
</button>
{/* Assuming 'INSPECT' or similar intent is active for Inventory, mapping loosely */}
<button className="flex flex-col items-center justify-center bg-primary/10 text-primary h-full w-full border-t-2 border-primary hover:bg-surface-container-highest active:scale-95 transition-transform duration-100 shadow-[inset_0_2px_10px_rgba(0,240,255,0.1)]">
<span className="material-symbols-outlined mb-1" data-icon="architecture" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
<span>INSPECT</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant h-full w-full opacity-60 hover:bg-surface-container-highest active:scale-95 transition-transform duration-100">
<span className="material-symbols-outlined mb-1" data-icon="photo_camera">photo_camera</span>
<span>EVIDENCE</span>
</button>
</nav>
    </div>
  );
}

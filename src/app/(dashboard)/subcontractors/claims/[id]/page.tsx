export default function SubcontractorClaimDetailPage() {
  return (
    <div className="bg-background text-on-background font-body-fixed min-h-screen flex flex-col md:flex-row pb-16 md:pb-0">
{/* TopAppBar (Mobile & Desktop Header) */}
<header className="bg-surface dark:bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile h-14 docked full-width top-0 z-40 sticky md:hidden">
<button className="text-primary-fixed-dim dark:text-primary-fixed-dim hover:bg-surface-container-highest transition-colors active:opacity-80 p-2 rounded-DEFAULT">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<div className="text-center">
<h1 className="font-headline-md text-headline-md-mobile text-on-surface">CLAIM-4082 // ACTIVE</h1>
</div>
<button className="text-primary-fixed-dim dark:text-primary-fixed-dim hover:bg-surface-container-highest transition-colors active:opacity-80 p-2 rounded-DEFAULT">
<span className="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span>
</button>
</header>
{/* SideNav (Desktop Only) */}
<nav className="hidden md:flex flex-col bg-surface-container border-r border-outline-variant w-20 lg:w-64 min-h-screen fixed left-0 top-0 z-50">
<div className="p-gutter border-b border-outline-variant h-14 flex items-center justify-center lg:justify-start">
<span className="font-label-caps text-label-caps text-primary font-bold tracking-widest hidden lg:block">APEX STRUCTURAL</span>
<span className="material-symbols-outlined text-primary lg:hidden" data-icon="architecture">architecture</span>
</div>
<div className="flex flex-col flex-1 py-density-comfortable gap-unit">
{/* Project / Claim Context info */}
<div className="px-gutter mb-density-comfortable hidden lg:block">
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-unit">Current Project</p>
<p className="font-headline-md text-body-fixed font-bold text-on-surface truncate">Riverside Commons</p>
<p className="font-data-point text-label-caps text-primary mt-1">CLM-4082</p>
</div>
<a className="flex flex-row items-center gap-density-compact px-gutter py-density-comfortable lg:py-density-compact text-on-surface-variant hover:bg-surface-container-highest transition-colors" href="#">
<span className="material-symbols-outlined mx-auto lg:mx-0" data-icon="terminal">terminal</span>
<span className="font-label-caps text-label-caps hidden lg:block uppercase tracking-wider">Command</span>
</a>
<a className="flex flex-row items-center gap-density-compact px-gutter py-density-comfortable lg:py-density-compact bg-primary-container text-on-primary-container border-r-2 border-primary hover:bg-surface-container-highest transition-colors" href="#">
<span className="material-symbols-outlined symbol-filled mx-auto lg:mx-0" data-icon="inventory_2" data-weight="fill">inventory_2</span>
<span className="font-label-caps text-label-caps hidden lg:block uppercase tracking-wider font-bold">Projects</span>
</a>
<a className="flex flex-row items-center gap-density-compact px-gutter py-density-comfortable lg:py-density-compact text-on-surface-variant hover:bg-surface-container-highest transition-colors" href="#">
<span className="material-symbols-outlined mx-auto lg:mx-0" data-icon="health_and_safety">health_and_safety</span>
<span className="font-label-caps text-label-caps hidden lg:block uppercase tracking-wider">Safety</span>
</a>
</div>
</nav>
{/* Main Content Canvas */}
<main className="flex-1 flex flex-col md:ml-20 lg:ml-64 w-full">
{/* Desktop Context Header */}
<div className="hidden md:flex bg-surface dark:bg-surface border-b border-outline-variant justify-between items-center px-margin-desktop h-14 sticky top-0 z-30">
<div className="flex items-center gap-density-comfortable">
<button className="text-primary-fixed-dim hover:bg-surface-container-highest transition-colors active:opacity-80 p-2 rounded-DEFAULT -ml-2">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md text-on-surface">CLAIM-4082 // ACTIVE</h1>
</div>
<div className="flex items-center gap-density-compact">
<span className="font-label-caps text-label-caps text-on-surface-variant border border-outline-variant px-2 py-1 rounded-sm bg-surface-container-low">RIVERSIDE COMMONS</span>
<button className="text-primary-fixed-dim hover:bg-surface-container-highest transition-colors active:opacity-80 p-2 rounded-DEFAULT">
<span className="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span>
</button>
</div>
</div>
<div className="p-margin-mobile md:p-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-[1600px] mx-auto w-full">
{/* Left Column: Status & Docs */}
<div className="flex flex-col gap-gutter md:col-span-5 lg:col-span-4">
{/* Status Timeline Card */}
<section className="bg-surface-container border border-outline-variant rounded-DEFAULT relative overflow-hidden">
{/* Industrial Tab */}
<div className="absolute top-0 left-0 bg-outline-variant text-on-surface px-3 py-1 font-label-caps text-[10px] uppercase tracking-wider rounded-br-DEFAULT border-b border-r border-outline-variant z-10">
                        Progression Matrix
                    </div>
<div className="p-density-comfortable pt-10">
<div className="relative pl-6 border-l border-outline-variant space-y-6">
{/* Timeline Item: Completed */}
<div className="relative">
<div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-surface-container border-2 border-primary-fixed-dim flex items-center justify-center z-10">
<div className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full"></div>
</div>
<div className="font-data-point text-body-fixed text-primary-fixed-dim"><span className="text-[10px] opacity-50 mr-2">STP-01</span>Assignment</div>
<div className="font-label-caps text-label-caps text-on-surface-variant mt-1">OCT 12 0800 HRS</div>
</div>
{/* Timeline Item: Active */}
<div className="relative">
<div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary-container border-2 border-primary flex items-center justify-center shadow-[0_0_8px_rgba(0,240,255,0.5)] z-10">
<div className="w-1.5 h-1.5 bg-on-primary-container rounded-full animate-pulse"></div>
</div>
<div className="absolute -left-[28px] top-0 w-1 h-full bg-primary -z-0 -ml-[1px]"></div>
<div className="font-data-point text-body-fixed text-primary shadow-primary"><div className="flex items-center gap-2"><span className="text-[10px] opacity-50">STP-02</span>Work in Progress <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span></span></div></div>
<div className="font-label-caps text-label-caps text-on-surface mt-1">CURRENT PHASE</div>
<div className="mt-density-compact bg-surface border border-outline-variant p-2 rounded-sm text-sm text-on-surface-variant font-label-caps">
                                    Tear-off 60% complete. Underlayment staging pending.
                                </div>
</div>
{/* Timeline Item: Pending */}
<div className="relative">
<div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-surface-container-highest border-2 border-outline-variant flex items-center justify-center z-10"></div>
<div className="font-data-point text-body-fixed text-on-surface-variant"><span className="text-[10px] opacity-50 mr-2">STP-03</span>Final Inspection</div>
<div className="font-label-caps text-label-caps text-outline mt-1">PENDING QA</div>
</div>
</div>
</div>
</section>
{/* Document Vault Card */}
<section className="bg-surface-container border border-outline-variant rounded-DEFAULT relative overflow-hidden flex-1">
<div className="absolute top-0 left-0 bg-outline-variant text-on-surface px-3 py-1 font-label-caps text-[10px] uppercase tracking-wider rounded-br-DEFAULT border-b border-r border-outline-variant z-10">
                        Document Vault
                    </div>
<div className="p-density-comfortable pt-10 flex flex-col h-full gap-density-comfortable">
<div className="border border-dashed border-outline-variant rounded-DEFAULT p-4 flex flex-col items-center justify-center text-center hover:bg-surface-container-highest transition-colors cursor-pointer group bg-surface-container-low">
<span className="material-symbols-outlined text-outline group-hover:text-primary mb-2 text-3xl" data-icon="cloud_upload">cloud_upload</span>
<span className="font-label-caps text-label-caps text-on-surface">DRAG & DROP TO UPLOAD</span>
<span className="text-xs text-on-surface-variant mt-1">PDF, JPG, PNG (Max 50MB)</span>
</div>
<div className="flex flex-col gap-unit">
{/* Doc Row */}
<div className="flex items-center justify-between p-density-compact bg-surface border border-outline-variant rounded-sm hover:border-primary-fixed-dim transition-colors group">
<div className="flex items-center gap-density-compact">
<span className="material-symbols-outlined text-secondary" data-icon="description">description</span>
<div>
<div className="font-label-caps text-[11px] text-on-surface">RIVERSIDE_BLUEPRINT_V2.PDF</div>
<div className="text-[9px] text-on-surface-variant font-data-point">12.4 MB • SYS_GEN</div>
</div>
</div>
<button className="text-outline hover:text-primary">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
</button>
</div>
{/* Doc Row */}
<div className="flex items-center justify-between p-density-compact bg-surface border border-outline-variant rounded-sm hover:border-primary-fixed-dim transition-colors group">
<div className="flex items-center gap-density-compact">
<span className="material-symbols-outlined text-secondary-container" data-icon="image">image</span>
<div>
<div className="font-label-caps text-[11px] text-on-surface">SITE_CONDITION_PRE.JPG</div>
<div className="text-[9px] text-on-surface-variant font-data-point">4.2 MB • FIELD_UPL</div>
</div>
</div>
<button className="text-outline hover:text-primary">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
</button>
</div>
</div>
</div>
</section>
</div>
{/* Right Column: Estimate Terminal */}
<div className="md:col-span-7 lg:col-span-8">
<section className="bg-surface-container border border-outline-variant rounded-DEFAULT relative h-full flex flex-col">
<div className="absolute top-0 left-0 bg-primary-fixed-dim text-on-primary-fixed px-3 py-1 font-label-caps text-[10px] uppercase tracking-wider rounded-br-DEFAULT border-b border-r border-primary-fixed-dim z-10 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
                        Estimate Terminal
                    </div>
<div className="p-density-comfortable pt-12 flex-1 flex flex-col gap-density-comfortable">
{/* Header Specs */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-unit border-b border-outline-variant pb-density-comfortable">
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant mb-1">TOTAL SQ FT</p>
<p className="font-data-point text-data-point text-primary">12,450</p>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant mb-1">PITCH</p>
<p className="font-data-point text-data-point text-on-surface">4/12</p>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant mb-1">MATERIAL</p>
<div className="inline-block bg-surface border border-outline-variant px-2 py-1 text-on-surface font-label-caps text-[10px] mt-1">
                                    TPO
                                </div>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant mb-1">PERMIT #</p>
<p className="font-data-point text-body-fixed text-on-surface">P-88219</p>
</div>
</div>
{/* Line Items */}
<div className="flex-1 flex flex-col gap-unit overflow-auto bg-[radial-gradient(#3b494b_1px,transparent_1px)] [background-size:16px_16px]">
{/* Table Header */}
<div className="grid grid-cols-12 gap-unit px-2 pb-2 border-b border-outline-variant font-label-caps text-[10px] text-on-surface-variant">
<div className="col-span-1">CODE</div>
<div className="col-span-5">DESCRIPTION</div>
<div className="col-span-2 text-right">QTY/UNIT</div>
<div className="col-span-2 text-right">RATE</div>
<div className="col-span-2 text-right">TOTAL</div>
</div>
{/* Input Row */}
<div className="grid grid-cols-12 gap-unit items-center bg-surface border border-outline-variant p-2 rounded-sm focus-within:border-primary-fixed-dim focus-within:shadow-[0_0_4px_rgba(0,219,233,0.3)] transition-colors">
<div className="col-span-1 font-data-point text-[11px] text-outline"><div className="flex items-center gap-1">MAT-4<span className="material-symbols-outlined text-[12px] opacity-50">sync_alt</span></div></div>
<div className="col-span-5">
<input className="w-full bg-transparent border-none text-[12px] font-label-caps text-on-surface focus:ring-0 p-0" placeholder="Description" type="text" value="Tear-off & Disposal" />
</div>
<div className="col-span-2 flex items-center justify-end border-l border-outline-variant pl-2">
<input className="w-16 bg-transparent border-none text-right text-[12px] font-data-point text-primary focus:ring-0 p-0 text-right" type="number" value="125" />
<span className="text-[10px] font-label-caps text-on-surface-variant ml-1">SQ</span>
</div>
<div className="col-span-2 flex items-center justify-end border-l border-outline-variant pl-2">
<span className="text-[10px] text-on-surface-variant mr-1">$</span>
<input className="w-16 bg-transparent border-none text-right text-[12px] font-data-point text-on-surface focus:ring-0 p-0" type="number" value="45.00" />
</div>
<div className="col-span-2 text-right font-data-point text-[12px] text-on-surface border-l border-outline-variant pl-2">
                                    $5,625.00
                                </div>
</div>
{/* Input Row */}
<div className="grid grid-cols-12 gap-unit items-center bg-surface border border-outline-variant p-2 rounded-sm focus-within:border-primary-fixed-dim focus-within:shadow-[0_0_4px_rgba(0,219,233,0.3)] transition-colors">
<div className="col-span-1 font-data-point text-[11px] text-outline">MAT-4</div>
<div className="col-span-5">
<input className="w-full bg-transparent border-none text-[12px] font-label-caps text-on-surface focus:ring-0 p-0" placeholder="Description" type="text" value="60-mil TPO Membrane (White)" />
</div>
<div className="col-span-2 flex items-center justify-end border-l border-outline-variant pl-2">
<input className="w-16 bg-transparent border-none text-right text-[12px] font-data-point text-primary focus:ring-0 p-0 text-right" type="number" value="130" />
<span className="text-[10px] font-label-caps text-on-surface-variant ml-1">RL</span>
</div>
<div className="col-span-2 flex items-center justify-end border-l border-outline-variant pl-2">
<span className="text-[10px] text-on-surface-variant mr-1">$</span>
<input className="w-16 bg-transparent border-none text-right text-[12px] font-data-point text-on-surface focus:ring-0 p-0" type="number" value="180.00" />
</div>
<div className="col-span-2 text-right font-data-point text-[12px] text-on-surface border-l border-outline-variant pl-2">
                                    $23,400.00
                                </div>
</div>
<button className="w-full border border-dashed border-outline-variant bg-surface-container-low text-on-surface-variant hover:text-primary hover:border-primary py-2 rounded-sm font-label-caps text-[10px] flex items-center justify-center gap-1 transition-colors mt-2">
<span className="material-symbols-outlined text-[16px]" data-icon="add">add</span> ADD LINE ITEM
                            </button>
</div>
{/* Totals & Submit */}
<div className="bg-surface border border-outline-variant p-density-comfortable mt-auto relative shadow-[0_-4px_16px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-end mb-density-comfortable border-b border-outline-variant pb-density-comfortable">
<span className="font-label-caps text-label-caps text-on-surface-variant">ESTIMATED TOTAL</span>
<span className="font-data-point text-headline-md text-primary">$29,025.00</span>
</div>
<button className="w-full bg-primary-fixed-dim text-on-primary-fixed font-headline-md text-[18px] py-4 rounded-sm border-b-4 border-on-primary-fixed hover:bg-primary transition-colors flex justify-center items-center gap-2 uppercase tracking-wide shadow-[0_4px_0_#002022_inset]">
<span className="material-symbols-outlined" data-icon="send">send</span>
                                Transmit Estimate
                            </button><div className="w-full text-center mt-2 font-label-caps text-[10px] text-primary-fixed-dim animate-pulse tracking-[0.2em]">READY FOR PROTOCOL</div>
</div>
</div>
</section>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-surface-container dark:bg-surface-container border-t border-outline-variant md:hidden">
<a className="flex flex-col items-center justify-center text-on-surface-variant w-full h-full hover:bg-surface-container-highest transition-colors" href="#">
<span className="material-symbols-outlined mb-1" data-icon="terminal">terminal</span>
<span className="font-label-caps text-[10px] uppercase">Command</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container w-full h-full border-t-2 border-primary active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined mb-1 symbol-filled" data-icon="inventory_2" data-weight="fill">inventory_2</span>
<span className="font-label-caps text-[10px] uppercase font-bold">Projects</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant w-full h-full hover:bg-surface-container-highest transition-colors" href="#">
<span className="material-symbols-outlined mb-1" data-icon="health_and_safety">health_and_safety</span>
<span className="font-label-caps text-[10px] uppercase">Safety</span>
</a>
</nav>
    </div>
  );
}

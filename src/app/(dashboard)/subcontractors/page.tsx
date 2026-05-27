export default function SubcontractorsPage() {
  return (
    <div className="bg-background text-on-background font-body-fixed antialiased min-h-screen flex flex-col pt-14 selection:bg-primary-container selection:text-on-primary-container">
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 bg-surface dark:bg-surface border-b border-outline-variant shadow-none flex justify-between items-center px-margin-mobile h-14">
<button className="text-primary-fixed-dim dark:text-primary-fixed-dim hover:bg-surface-container-highest transition-colors active:opacity-80 p-2 rounded-DEFAULT flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<div className="flex flex-col items-center justify-center">
<h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary-fixed-dim dark:text-primary-fixed-dim">CLAIM-4082 // ACTIVE</h1>
</div>
<button className="text-primary-fixed-dim dark:text-primary-fixed-dim hover:bg-surface-container-highest transition-colors active:opacity-80 p-2 rounded-DEFAULT flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span>
</button>
</header>
{/* Main Content Canvas */}
<main className="flex-grow p-margin-mobile md:p-margin-desktop grid grid-cols-4 md:grid-cols-12 gap-gutter bg-grid-pattern relative">
{/* Background Ambient Glow */}
<div className="absolute top-0 left-1/4 w-1/2 h-64 bg-primary-container opacity-5 blur-[100px] pointer-events-none"></div>
{/* Left Column: Context, Estimate, Timeline (8 cols on desktop) */}
<div className="col-span-4 md:col-span-8 flex flex-col gap-density-comfortable">
{/* Context Header Panel */}
<section className="border border-outline-variant bg-surface-container-low relative p-density-comfortable pt-8">
<div className="tech-tab font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Site Context</div>
<div className="flex flex-col md:flex-row gap-gutter items-start md:items-center">
<div className="flex-grow">
<h2 className="font-display-lg-mobile md:text-display-lg text-on-surface mb-2">Riverside Commons</h2><div className="font-label-caps text-[10px] text-primary-fixed-dim/70 mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">location_on</span> 34.0522' N, 118.2437' W [REF-LOC-99]</div>
<div className="flex flex-wrap gap-2 items-center">
<span className="px-2 py-1 bg-surface-variant text-on-surface-variant font-label-caps text-label-caps border border-outline-variant">SUBCONTRACTOR: APEX ROOFING CO.</span>
<span className="px-2 py-1 bg-secondary-container/20 text-secondary-container font-label-caps text-label-caps border border-secondary-container/50">STATUS: ESTIMATE SUBMITTED</span>
</div>
</div>
{/* Structural Measurement Inputs (Style Guide Specific) */}
<div className="flex gap-2 bg-surface-container border border-outline-variant p-2">
<div className="flex flex-col items-end pr-3 border-r border-outline-variant border-dashed">
<span className="font-label-caps text-label-caps text-on-surface-variant mb-1">PITCH</span>
<div className="flex items-baseline gap-1">
<span className="font-data-point text-data-point text-primary-fixed-dim">7/12</span>
</div>
</div>
<div className="flex flex-col items-end pl-1">
<span className="font-label-caps text-label-caps text-on-surface-variant mb-1">AREA</span>
<div className="flex items-baseline gap-1">
<span className="font-data-point text-data-point text-on-surface">42.5</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">SQ</span>
</div>
</div>
</div>
</div>
</section>
{/* Estimate Review Dashboard */}
<section className="border border-outline-variant bg-surface relative p-density-comfortable pt-8">
<div className="tech-tab font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]" data-icon="receipt_long">receipt_long</span>
                    Estimate Review
                </div>
<div className="flex flex-col gap-density-comfortable">
{/* Topline Number */}
<div className="flex justify-between items-end border-b border-outline-variant pb-4">
<div>
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">SUBMITTED TOTAL</p>
<p className="font-display-lg-mobile md:text-display-lg text-primary-container tracking-tight">$42,850.00</p>
</div>
{/* Material Chip (Style Guide Specific) */}
<div className="w-12 h-12 border border-outline-variant bg-surface-container-highest flex items-center justify-center">
<span className="font-label-caps text-label-caps text-on-surface font-bold">SHGL</span>
</div>
</div>
{/* Data Grid: Line Items */}
<div className="flex flex-col gap-density-compact">
{/* Header Row */}
<div className="grid grid-cols-12 gap-2 px-2 py-1 font-label-caps text-label-caps text-on-surface-variant uppercase">
<div className="col-span-1">ID</div><div className="col-span-6">Description</div>
<div className="col-span-2 text-right">Qty</div>
<div className="col-span-2 text-right">Unit</div>
<div className="col-span-2 text-right">Total</div>
</div>
{/* Line Item 1 */}
<div className="grid grid-cols-12 gap-2 px-2 py-2 bg-surface-container-low border border-outline-variant items-center hover:border-primary-container/50 transition-colors"><div className="col-span-1 font-label-caps text-[10px] text-on-surface-variant/50">MAT-992</div>
<div className="col-span-1">ID</div><div className="col-span-5 font-body-fixed text-body-fixed text-on-surface truncate">Remove Arch. Shingles</div>
<div className="col-span-2 text-right font-data-point text-[14px] text-on-surface-variant">42.5</div>
<div className="col-span-2 text-right font-data-point text-[14px] text-on-surface-variant">$65.00</div>
<div className="col-span-2 text-right font-data-point text-[14px] text-primary-fixed-dim">$2,762.50</div>
</div>
{/* Line Item 2 */}
<div className="grid grid-cols-12 gap-2 px-2 py-2 bg-surface-container-low border border-outline-variant items-center hover:border-primary-container/50 transition-colors relative border-primary-container/80"><div className="col-span-1 font-label-caps text-[10px] text-on-surface-variant/50">LBR-104</div>
<div className="status-strip bg-secondary-container"></div>
<div className="col-span-5 font-body-fixed text-body-fixed text-on-surface truncate pl-3 flex items-center gap-2">
                                Install Arch. Shingles
                                <span className="material-symbols-outlined text-[16px] text-secondary-container" data-icon="flag">flag</span>
</div>
<div className="col-span-2 text-right font-data-point text-[14px] text-on-surface-variant">46.7</div>
<div className="col-span-2 text-right font-data-point text-[14px] text-on-surface-variant">$285.00</div>
<div className="col-span-2 text-right font-data-point text-[14px] text-primary-fixed-dim">$13,309.50</div>
</div>
{/* Line Item 3 */}
<div className="grid grid-cols-12 gap-2 px-2 py-2 bg-surface-container-low border border-outline-variant items-center hover:border-primary-container/50 transition-colors"><div className="col-span-1 font-label-caps text-[10px] text-on-surface-variant/50">ACC-201</div>
<div className="col-span-1">ID</div><div className="col-span-5 font-body-fixed text-body-fixed text-on-surface truncate">Ice & Water Shield (Valleys)</div>
<div className="col-span-2 text-right font-data-point text-[14px] text-on-surface-variant">3.0</div>
<div className="col-span-2 text-right font-data-point text-[14px] text-on-surface-variant">$115.00</div>
<div className="col-span-2 text-right font-data-point text-[14px] text-primary-fixed-dim">$345.00</div>
</div>
</div>
{/* Action Block */}
<div className="flex gap-4 mt-2 border-t border-outline-variant pt-4 border-dashed">
<button className="flex-1 chamfered-btn bg-primary-container text-on-primary-container font-data-point text-[16px] py-4 hover:bg-primary transition-colors active:scale-[0.98] flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                            AUTHORIZE ESTIMATE
                        </button>
<button className="flex-1 chamfered-btn bg-surface-container-highest text-on-surface border border-outline-variant font-data-point text-[16px] py-4 hover:bg-surface-variant transition-colors active:scale-[0.98] flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-secondary-container" data-icon="flag">flag</span>
                            FLAG FOR REVIEW
                        </button>
</div>
</div>
</section>
</div>
{/* Right Column: Communication & Timeline (4 cols on desktop) */}
<div className="col-span-4 md:col-span-4 flex flex-col gap-density-comfortable">
{/* Communication Uplink */}
<section className="border border-outline-variant bg-surface relative flex flex-col h-[400px]">
<div className="tech-tab font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest flex items-center gap-2 z-10">
<span className="material-symbols-outlined text-[14px]" data-icon="satellite_alt">satellite_alt</span>
                    COMM UPLINK
                </div>
<div className="flex-grow p-4 pt-8 overflow-y-auto flex flex-col gap-4 bg-grid-pattern opacity-90">
{/* Message Log */}
<div className="flex flex-col gap-1 w-full max-w-[85%] self-start">
<div className="font-label-caps text-[10px] text-on-surface-variant">APEX ROOFING // [ 08:45:12 UTC ]</div>
<div className="bg-surface-container-highest p-3 border border-outline-variant text-body-fixed text-on-surface rounded-r-DEFAULT rounded-bl-DEFAULT relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[2px] animate-pulse pointer-events-none opacity-20"></div>
                            Estimate submitted. Noted required decking repairs on North elevation not in original scope. See line items 14-16.
                        </div>
</div>
<div className="flex flex-col gap-1 w-full max-w-[85%] self-end items-end">
<div className="font-label-caps text-[10px] text-primary-fixed-dim">ADJUSTER (YOU) // [ 09:12:44 UTC ]</div>
<div className="bg-primary-container/10 border border-primary-container/30 p-3 text-body-fixed text-primary rounded-l-DEFAULT rounded-br-DEFAULT relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[2px] animate-pulse pointer-events-none opacity-20"></div>
                            Copy. Reviewing variance for decking now.
                        </div>
</div>
</div>
{/* Input Area */}
<div className="p-2 border-t border-outline-variant bg-surface-container-lowest flex gap-2">
<input className="flex-grow bg-surface border border-outline-variant text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container p-2 font-body-fixed text-body-fixed rounded-none" placeholder="Transmit message..." type="text" />
<button className="bg-primary-container/20 border border-primary-container/50 text-primary-container p-2 hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="send">send</span>
</button>
</div>
</section>
{/* Oversight Panel / Documents */}
<section className="border border-outline-variant bg-surface-container-low relative p-density-comfortable pt-8 flex-grow">
<div className="tech-tab font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]" data-icon="history">history</span>
                    OVERSIGHT TIMELINE
                </div>
<div className="flex flex-col gap-4 relative">
{/* Vertical Line */}
<div className="absolute left-[11px] top-2 bottom-2 w-px bg-outline-variant bg-primary-container/50 shadow-[0_0_8px_rgba(0,219,233,0.3)]"></div>
{/* Timeline Node 1 */}
<div className="flex gap-4 relative">
<div className="w-6 h-6 rounded-full bg-surface border-2 border-primary-container z-10 flex-shrink-0 mt-1"></div>
<div className="flex flex-col flex-grow bg-surface border border-outline-variant p-3 relative hover:border-outline transition-colors">
<div className="status-strip bg-primary-container"></div>
<div className="pl-2">
<div className="flex justify-between items-start mb-1">
<span className="font-label-caps text-label-caps text-primary-container">ESTIMATE REC'D</span>
<span className="font-data-point text-[12px] text-on-surface-variant">10/24 08:45</span>
<span className="font-label-caps text-[9px] text-on-surface-variant opacity-40 ml-2">SHA256: 7F8B2...</span></div>
<div className="font-body-fixed text-[14px] text-on-surface">Initial scope document uploaded.</div>
{/* Document Card Attachment */}
<div className="mt-3 flex items-center gap-2 border border-outline-variant bg-surface-container-highest p-2 w-max cursor-pointer hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-error" data-icon="picture_as_pdf" style={{ fontVariationSettings: "'FILL' 1" }}>picture_as_pdf</span>
<span className="font-label-caps text-label-caps text-on-surface">APEX_EST_v1.pdf</span>
</div>
</div>
</div>
</div>
{/* Timeline Node 2 */}
<div className="flex gap-4 relative">
<div className="w-6 h-6 rounded-full bg-surface border-2 border-outline-variant z-10 flex-shrink-0 mt-1 flex items-center justify-center">
<div className="w-2 h-2 bg-outline-variant rounded-full"></div>
</div>
<div className="flex flex-col flex-grow bg-surface border border-outline-variant p-3 relative opacity-70">
<div className="status-strip bg-outline-variant"></div>
<div className="pl-2">
<div className="flex justify-between items-start mb-1">
<span className="font-label-caps text-label-caps text-on-surface-variant">SITE INSPECTION</span>
<span className="font-data-point text-[12px] text-on-surface-variant">10/23 14:00</span>
<span className="font-label-caps text-[9px] text-on-surface-variant opacity-40 ml-2">SHA256: 7F8B2...</span></div>
<div className="font-body-fixed text-[14px] text-on-surface-variant">Measurements captured. EagleView integrated.</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
    </div>
  );
}

export default function DisputesPage() {
  return (
    <div className="font-body-md text-body-md antialiased pb-24 lg:pb-0 lg:pl-72 flex flex-col min-h-screen" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
{/* Top App Bar (Web) */}
<header className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-between items-center px-margin h-16 bg-surface border-b border-surface-variant">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
<span className="font-headline-lg text-headline-lg text-primary tracking-widest uppercase">TRADEVISION</span>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-[24px]">account_circle</span>
</div>
</header>
{/* Side Navigation Drawer (Web) */}
<aside className="hidden lg:flex fixed inset-y-0 left-0 z-[60] py-gutter flex-col bg-surface-deep w-72 border-r border-surface-variant shadow-lg mt-16">
<div className="px-margin mb-lg">
<div className="flex items-center gap-md mb-xs">
<div className="w-10 h-10 rounded-full bg-surface-muted border border-surface-variant flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A close-up, highly detailed portrait of a mature male construction site supervisor. He is wearing a professional, dark high-visibility vest over a slate grey collared shirt. The lighting is high-key and modern, emphasizing sharp details and professional authority against a minimalist dark background. The mood is serious and analytical." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHYA2lv3O-ki1vSU3BkIYlEqc0umFn41OoVIhDYxBMY4Uur_xzbvCr9phHxcOklkxQcBft4vn2LFkQiAAXd3MKrpvtBqLrph_MWRNcKg4YeMtmYOGWsijKn6hEYx4TJwsaUTVD9ayKiW-_1uo0jNpJso0bRNomq7L2qBxdbPc3jycrtk62YL8j6kfzLGP8zsiSZVNS2Qg7PjvtIqNU5OTFltZQAjPvvHNPTrrxjNU8929lB-SSHlOu0ZHYNJzDiaPtv2OmbIrLaMPp" />
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface uppercase">COMMANDER ALPHA</h3>
<p className="font-label-sm text-label-sm text-text-secondary">Site Supervisor</p>
</div>
</div>
<p className="font-label-sm text-label-sm text-tertiary-container pl-[56px]">Sector 7G</p>
</div>
<nav className="flex-1 px-sm space-y-sm">
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary">conveyor_belt</span>
<span className="font-body-md text-body-md">Fleet Status</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary">inventory_2</span>
<span className="font-body-md text-body-md">Inventory Control</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary">engineering</span>
<span className="font-body-md text-body-md">Personnel</span>
</a>
<a className="flex items-center gap-md px-md py-sm bg-surface-container-highest text-primary font-bold border-l-4 border-primary transition-all translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_late</span>
<span className="font-body-md text-body-md">Safety Logs</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</nav>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 max-w-[1440px] mx-auto w-full p-margin md:mt-16">
{/* Header Section */}
<div className="mb-lg flex flex-col md:flex-row md:items-center justify-between gap-md">
<div>
<div className="flex items-center gap-sm mb-xs">
<a className="text-text-secondary hover:text-on-surface flex items-center transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">arrow_back</span>
</a>
<h1 className="font-headline-xl text-headline-xl text-text-primary uppercase">Dispute #D-4402</h1>
</div>
<p className="font-body-md text-body-md text-text-secondary">Related to Claim #8892 • Initiated Oct 12, 2023</p>
</div>
<div className="flex flex-col items-end gap-xs">
<div className="flex items-center gap-md">
<span className="font-label-md text-text-secondary uppercase tracking-widest">Dispute Confidence Level</span>
<div className="w-32 h-2 bg-surface-container rounded-full overflow-hidden border border-outline-variant">
<div className="w-1/4 h-full bg-error shadow-[0_0_8px_#ffb4ab]"></div>
</div>
<span className="font-headline-md text-error tracking-tighter">24.8%</span>
</div>
<div className="text-error font-label-sm uppercase flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px] animate-pulse">warning</span>
        CRITICAL ANOMALY DETECTED
    </div>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
{/* Left Column: Timeline & Evidence (8 cols) */}
<div className="lg:col-span-8 flex flex-col gap-md">
{/* Dispute Timeline */}
<section className="bg-surface-deep border border-border-subtle p-lg" style={{ borderRadius: '0px' }}>
<h2 className="font-headline-md text-headline-md text-on-surface mb-md uppercase flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">timeline</span>
                        Dispute Timeline
                    </h2>
<div className="relative pl-sm">
{/* Vertical Line */}
<div className="absolute left-[15px] top-2 bottom-2 w-px bg-surface-variant"></div>
{/* Timeline Items */}
<div className="space-y-lg relative">{/* Item 1: Complete */}
<div className="flex gap-md group">
<div className="relative z-10 w-8 h-8 bg-surface-container-high border border-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
</div>
<div className="flex-1 border-b border-surface-variant pb-md">
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-label-md text-on-surface uppercase">FILE_GENESIS</h3>
<span className="font-label-sm text-text-secondary">12.10.23 // 10:45:00.241</span>
</div>
<p className="font-body-sm text-on-surface-variant mb-1">Public Adjuster flagged discrepancy in roof repair estimate.</p>
<code className="text-[10px] text-text-secondary font-mono opacity-50">SHA-256: 8f3c...921a</code>
</div>
</div>
{/* Item 2: Complete */}
<div className="flex gap-md group">
<div className="relative z-10 w-8 h-8 bg-surface-container-high border border-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
</div>
<div className="flex-1 border-b border-surface-variant pb-md">
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-label-md text-on-surface uppercase">INITIAL_TRIAGE</h3>
<span className="font-label-sm text-text-secondary">13.10.23 // 09:15:12.883</span>
</div>
<p className="font-body-sm text-on-surface-variant mb-1">Internal claims team reviewed flagged items. System await GC input.</p>
<code className="text-[10px] text-text-secondary font-mono opacity-50">SHA-256: 4k91...77xe</code>
</div>
</div>
{/* Item 3: Current */}
<div className="flex gap-md">
<div className="relative z-10 w-8 h-8 bg-error flex items-center justify-center shrink-0 shadow-[0_0_15px_#ffb4ab]">
<span className="material-symbols-outlined text-[16px] text-on-error">priority_high</span>
</div>
<div className="flex-1 pb-md">
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-label-md text-error uppercase">PENDING_GC_INPUT</h3>
<span className="font-label-sm text-text-secondary">ACTIVE_NODE</span>
</div>
<p className="font-body-sm text-on-surface-variant mb-1">General Contractor input required: Validated invoice & photo metadata.</p>
<code className="text-[10px] text-error font-mono">AWAITING_AUTH_SIG</code>
</div>
</div></div>
</div>
</section>
{/* Evidence & Documentation */}
<section className="bg-surface-deep border border-border-subtle p-lg" style={{ borderRadius: '0px' }}>
<div className="flex justify-between items-center mb-md">
<h2 className="font-headline-md text-headline-md text-on-surface uppercase flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">folder_open</span>
                            Evidence & Documentation
                        </h2>
<button className="bg-primary-container hover:bg-accent-active text-on-primary-container font-label-md text-label-md py-sm px-md flex items-center gap-xs transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.5)] shadow-[0_0_10px_rgba(226,30,81,0.5)]"><span className="material-symbols-outlined text-[18px]">upload</span> INJECT DATA</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-sm">{/* File 1 */}
<div className="flex flex-col p-md bg-surface-container border border-surface-variant group cursor-pointer hover:border-primary transition-all">
<div className="flex items-center gap-md mb-md">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">photo_camera</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-on-surface truncate">roof_dmg_01.raw</h4>
<p className="font-label-sm text-text-secondary">ID: NODE-772 / SENSOR: DJI-A3</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">download</span>
</div>
<div className="flex justify-between items-center text-[11px] text-text-secondary border-t border-surface-variant/30 pt-sm">
<span>2.4 MB</span>
<span>EXP: 31.12.24</span>
</div>
</div>
{/* File 2 */}
<div className="flex flex-col p-md bg-surface-container border border-surface-variant group cursor-pointer hover:border-primary transition-all">
<div className="flex items-center gap-md mb-md">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">description</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-on-surface truncate">est_v1_signed.pdf</h4>
<p className="font-label-sm text-text-secondary">ID: NODE-012 / SOURCE: WEB_PORTAL</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">download</span>
</div>
<div className="flex justify-between items-center text-[11px] text-text-secondary border-t border-surface-variant/30 pt-sm">
<span>1.1 MB</span>
<span>VERIFIED: YES</span>
</div>
</div>
{/* Missing Placeholder */}
<div className="md:col-span-2 flex flex-col items-center justify-center p-xl border border-dashed border-error/30 bg-error/5 text-center">
<span className="material-symbols-outlined text-error text-[32px] mb-sm">cloud_upload</span>
<h4 className="font-label-md text-error uppercase mb-1">REQUIRED: REVISED_INVOICE.JSON</h4>
<p className="font-body-sm text-on-surface-variant">Submit structural cost breakdown to synchronize ledger.</p>
</div></div>
</section><section className="bg-surface-container-low border border-primary/20 p-lg mt-md">
<h2 className="font-headline-md text-on-surface uppercase mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">security</span>
        Conflict Resolution Panel
    </h2>
<div className="space-y-md">
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-text-secondary uppercase tracking-widest">Technical Justification</label>
<textarea className="w-full bg-surface border border-surface-variant p-md font-body-sm text-on-surface focus:border-primary focus:ring-0 resize-none" placeholder="Enter structural data points..." rows={3}></textarea>
</div>
<div className="flex gap-md">
<button className="flex-1 border border-surface-variant py-sm font-label-md uppercase hover:bg-surface-container-high transition-all">Add Multi-Evidence</button>
<button className="flex-1 bg-primary text-background font-label-md uppercase font-bold shadow-[0_0_15px_#ffb2b9] hover:brightness-110 transition-all">Submit Rebuttal</button>
</div>
</div>
</section>
</div>
{/* Right Column: Communication (4 cols) */}
<div className="lg:col-span-4 flex flex-col h-full">
<section className="bg-surface-deep border border-border-subtle flex flex-col h-[600px] lg:h-full" style={{ borderRadius: '0px' }}>
<div className="p-md border-b border-surface-variant flex items-center justify-between shrink-0">
<h2 className="font-headline-md text-headline-md text-on-surface uppercase flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">forum</span>
                            Communication
                        </h2>
<span className="font-label-sm text-label-sm bg-surface-container-highest px-2 py-1 rounded text-text-secondary">3 Messages</span>
</div>
{/* Chat Thread */}
<div className="flex-1 overflow-y-auto p-md space-y-lg custom-scrollbar">
{/* Message 1 (Other) */}
<div className="flex flex-col gap-xs">
<div className="flex justify-between items-baseline mb-1">
<span className="font-label-md text-label-md text-on-surface">J. Smith (Public Adjuster)</span>
<span className="font-label-sm text-label-sm text-text-secondary">Oct 12, 10:50 AM</span>
</div>
<div className="bg-surface-container-high p-sm rounded-tl-none border border-surface-variant inline-block self-start max-w-[90%]">
<p className="font-body-sm text-body-sm text-on-surface-variant">The line items for the flashing replacement seem excessive compared to standard regional rates. Can we get a breakdown of material vs labor?</p>
</div>
</div>
{/* Message 2 (Internal/System) */}
<div className="flex flex-col gap-xs items-center my-md">
<span className="font-label-sm text-label-sm text-text-secondary bg-surface px-sm py-xs rounded-full border border-surface-variant">Status changed to Initial Review</span>
</div>
{/* Message 3 (Other) */}
<div className="flex flex-col gap-xs">
<div className="flex justify-between items-baseline mb-1">
<span className="font-label-md text-label-md text-on-surface">R. Davis (Claims Team)</span>
<span className="font-label-sm text-label-sm text-text-secondary">Oct 13, 09:20 AM</span>
</div>
<div className="bg-surface-container-high p-sm rounded-tl-none border border-surface-variant inline-block self-start max-w-[90%]">
<p className="font-body-sm text-body-sm text-on-surface-variant">I've flagged this for the GC. We need the revised invoice uploaded before we can proceed to mediation or approval.</p>
</div>
</div>
</div>
{/* Input Area */}
<div className="p-md border-t border-surface-variant shrink-0 bg-surface">
<div className="relative">
<textarea className="w-full bg-surface-deep border border-surface-variant p-sm font-body-sm text-on-surface placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Type a note or message..." rows={3}></textarea>
<div className="absolute bottom-2 right-2 flex gap-xs">
<button className="p-1 text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">attach_file</span>
</button>
<button className="p-1 bg-surface-container-highest text-primary rounded hover:bg-primary hover:text-background transition-colors">
<span className="material-symbols-outlined text-[20px]">send</span>
</button>
</div>
</div>
</div>
</section>
</div>
</div>
{/* Bottom Action Bar (Fixed on Mobile, Static on Web) */}
<div className="fixed bottom-[64px] md:bottom-0 left-0 md:left-72 right-0 p-md bg-surface-deep/90 backdrop-blur-md border-t border-surface-variant flex flex-col sm:flex-row justify-end gap-sm z-40" style={{ borderRadius: '0px' }}>
<button className="px-lg py-sm font-label-md text-label-md uppercase text-on-surface border border-surface-variant hover:bg-surface-container-highest transition-colors text-center">
                Escalate to Mediation
            </button>
<button className="px-lg py-sm font-label-md text-label-md uppercase bg-primary-container text-on-primary-container hover:bg-accent-active transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.5)] text-center opacity-50 cursor-not-allowed shadow-[0_0_10px_rgba(226,30,81,0.5)]" disabled title="Evidence missing"><span className="material-symbols-outlined text-[18px]">upload</span> INJECT DATA</button>
</div>
</main>
{/* Bottom App Bar (Mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-2 bg-surface-container border-t border-surface-variant">
<a className="flex flex-col items-center justify-center text-text-secondary p-2 hover:text-on-surface" href="#">
<span className="material-symbols-outlined text-[24px]">dashboard</span>
<span className="font-label-sm text-label-sm mt-1">DASHBOARD</span>
</a>
<a className="flex flex-col items-center justify-center text-text-secondary p-2 hover:text-on-surface" href="#">
<span className="material-symbols-outlined text-[24px]">construction</span>
<span className="font-label-sm text-label-sm mt-1">PROJECTS</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container p-2 scale-95 transition-transform duration-200" href="#">
<span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
<span className="font-label-sm text-label-sm mt-1">CLAIMS</span>
</a>
<a className="flex flex-col items-center justify-center text-text-secondary p-2 hover:text-on-surface" href="#">
<span className="material-symbols-outlined text-[24px]">notifications</span>
<span className="font-label-sm text-label-sm mt-1">ALERTS</span>
</a>
</nav>
    </div>
  );
}

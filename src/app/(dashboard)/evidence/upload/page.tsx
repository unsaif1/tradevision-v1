export default function EvidenceUploadPage() {
  return (
    <div className="font-body-md bg-surface text-on-surface antialiased min-h-screen flex flex-col">
{/* TopAppBar */}
<header className="bg-surface dark:bg-surface border-b border-border-subtle docked full-width top-0 z-50 flex justify-between items-center w-full px-lg py-md max-w-[1440px] mx-auto sticky">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-primary-container dark:text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary-container tracking-tight">TradeVision C.A.R.E.</h1>
</div>
{/* Navigation (Web) */}
<nav className="hidden md:flex items-center gap-lg">
<a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-bright/10 transition-colors px-3 py-2 rounded-DEFAULT font-label-caps text-label-caps uppercase" href="#">Command</a>
<a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-bright/10 transition-colors px-3 py-2 rounded-DEFAULT font-label-caps text-label-caps uppercase" href="#">Projects</a>
<a className="text-primary-container dark:text-primary-fixed font-bold hover:bg-surface-bright/10 transition-colors px-3 py-2 rounded-DEFAULT font-label-caps text-label-caps uppercase border-b-2 border-primary-container" href="#">Claims</a>
<a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-bright/10 transition-colors px-3 py-2 rounded-DEFAULT font-label-caps text-label-caps uppercase" href="#">Alerts</a>
</nav>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center tech-border">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">person</span>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow flex flex-col items-center justify-start p-margin max-w-[1024px] mx-auto w-full gap-gutter">
{/* Header */}
<div className="w-full mb-4">
<div className="flex items-center gap-2 mb-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
<span className="font-label-caps text-label-caps uppercase cursor-pointer hover:text-on-surface transition-colors">Back to Claim Details</span>
</div>
<h2 className="font-display-md text-display-md mb-1">New Evidence Submission</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Step 1 of 3: Document Upload. Securely transfer operational data and technical schematics.</p>
</div>
{/* Upload Zone */}
<div className="w-full bg-[#1a1f26] tech-border rounded-DEFAULT p-margin flex flex-col items-center justify-center min-h-[320px] transition-all duration-200 border-dashed hover:border-primary-container hover:bg-surface-variant/50 cursor-pointer group relative overflow-hidden" id="drop-zone"><div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffb2b905 1px, transparent 1px), linear-gradient(90deg, #ffb2b905 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div><div className="absolute top-0 left-0 w-full h-1 bg-primary-container/20 animate-[scan_3s_infinite_linear] pointer-events-none"></div><div className="flex gap-4 mb-6 relative z-10 text-on-surface-variant group-hover:text-primary-fixed-dim transition-colors"><span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'wght' 300" }}>description</span><span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'wght' 300" }}>image</span><span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'wght' 300" }}>analytics</span></div><h3 className="font-headline-sm text-headline-sm mb-2 relative z-10 uppercase tracking-widest">Drag & Drop Files Here</h3><p className="font-body-md text-body-md text-on-surface-variant mb-6 relative z-10 text-center max-w-md">Supported formats: PDF, JPG, PNG, CSV. Maximum file size: 250MB. Ensure data is sanitized.</p><button className="relative z-10 bg-transparent border border-outline-variant hover:border-primary-container text-on-surface font-label-caps text-label-caps uppercase px-6 py-3 rounded-DEFAULT transition-all flex items-center gap-2 group/btn"><span className="material-symbols-outlined text-[18px] group-hover/btn:rotate-180 transition-transform">upload</span>Browse System</button><input accept=".pdf,.jpg,.jpeg,.png,.csv" className="hidden" id="file-input" multiple type="file" /></div>
{/* Queued Files */}
<div className="w-full flex flex-col gap-sm mt-4">
<h4 className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-2">Queued Files (2)</h4>
{/* File Item 1 */}
<div className="bg-[#1a1f26] tech-border p-4 rounded-DEFAULT flex items-center justify-between group"><div className="flex items-center gap-4 w-full"><span className="material-symbols-outlined text-primary-container">picture_as_pdf</span><div className="flex-grow font-mono-data"><div className="flex justify-between items-baseline mb-1"><span className="text-mono-data text-primary uppercase text-[12px]">incident_report_Q3_final.pdf</span><span className="text-on-surface-variant text-[10px]">SHA256: 8F3...A12</span></div><div className="flex justify-between items-center mb-2"><span className="text-on-surface-variant text-[10px]">4.2 MB | SENSOR_ID: TX-09</span><span className="text-tertiary text-[10px]">COMPLETED</span></div><div className="w-full bg-surface-dim h-1 rounded-full overflow-hidden"><div className="bg-tertiary h-full rounded-full w-full"></div></div></div></div><button className="ml-4 text-on-surface-variant hover:text-error transition-colors p-1"><span className="material-symbols-outlined text-[20px]">delete</span></button></div>
{/* File Item 2 */}
<div className="bg-[#1a1f26] tech-border p-4 rounded-DEFAULT flex items-center justify-between group"><div className="flex items-center gap-4 w-full"><span className="material-symbols-outlined text-secondary">image</span><div className="flex-grow font-mono-data"><div className="flex justify-between items-baseline mb-1"><span className="text-mono-data text-primary uppercase text-[12px]">structural_damage_scan.jpg</span><span className="text-on-surface-variant text-[10px]">SHA256: 4C2...B90</span></div><div className="flex justify-between items-center mb-2"><span className="text-on-surface-variant text-[10px]">12.8 MB | 24-BIT_DEPTH</span><span className="text-primary-container text-[10px] animate-pulse">UPLOADING 45%</span></div><div className="w-full bg-surface-dim h-1 rounded-full overflow-hidden relative"><div className="bg-primary-container h-full rounded-full w-[45%] relative overflow-hidden"><div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_1.5s_infinite]" style={{ transform: 'skewX(-20deg)' }}></div></div></div></div></div><button className="ml-4 text-on-surface-variant hover:text-error transition-colors p-1"><span className="material-symbols-outlined text-[20px]">close</span></button></div>
</div>
{/* Action Footer */}
<div className="w-full flex justify-between items-center mt-lg pt-lg border-t border-border-subtle">
<button className="bg-transparent border tech-border hover:border-on-surface text-on-surface font-label-caps text-label-caps uppercase px-6 py-3 rounded-DEFAULT transition-colors">
                Cancel
            </button>
<button className="bg-primary-container hover:bg-primary-fixed-dim text-on-primary-container font-label-caps text-label-caps uppercase px-8 py-3 rounded-DEFAULT transition-colors flex items-center gap-2" disabled style={{ opacity: '0.5', cursor: 'not-allowed' }}>
                Next Step
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface-container-high dark:bg-surface-container-high shadow-lg border-t border-border-subtle pb-safe">
<div className="fixed bottom-0 left-0 right-0 flex justify-around items-center px-gutter py-sm bg-surface-container-high">
<a className="flex flex-col items-center justify-center text-text-secondary dark:text-on-secondary-container hover:text-primary-container transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md text-[10px]">Command</span>
</a>
<a className="flex flex-col items-center justify-center text-text-secondary dark:text-on-secondary-container hover:text-primary-container transition-all" href="#">
<span className="material-symbols-outlined">location_city</span>
<span className="font-label-md text-label-md text-[10px]">Projects</span>
</a>
<a className="flex flex-col items-center justify-center text-primary-container dark:text-primary-fixed-dim font-bold translate-y-[-2px] duration-200" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_late</span>
<span className="font-label-md text-label-md text-[10px]">Claims</span>
</a>
<a className="flex flex-col items-center justify-center text-text-secondary dark:text-on-secondary-container hover:text-primary-container transition-all" href="#">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-label-md text-label-md text-[10px]">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-text-secondary dark:text-on-secondary-container hover:text-primary-container transition-all" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-label-md text-[10px]">Account</span>
</a>
</div>
</nav>
    </div>
  );
}

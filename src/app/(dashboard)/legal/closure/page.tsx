export default function LegalClosurePage() {
  return (
    <div className="bg-[#111317] text-on-surface font-body-fixed antialiased cyber-grid min-h-screen flex flex-col pt-16 pb-20 md:pb-0">
{/* TopAppBar */}
<header className="fixed top-0 w-full z-50 border-b border-outline-variant bg-[#111317] flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16">
<div className="flex items-center gap-gutter">
<span className="material-symbols-outlined text-primary-container">precision_manufacturing</span>
<span className="text-headline-md-mobile md:text-headline-md font-headline-md text-primary-container tracking-tighter uppercase font-bold">TradeVision</span>
</div>
<div className="flex items-center gap-gutter">
<span className="font-label-caps text-label-caps text-on-surface-variant hidden md:block">SYS_STATUS: ONLINE</span>
<div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
</div>
</div>
</header>
<main className="flex-grow container mx-auto px-margin-mobile md:px-margin-desktop py-density-comfortable max-w-4xl flex flex-col gap-density-comfortable">
{/* Header */}
<div className="flex flex-col gap-unit border-l-4 border-primary-container pl-density-compact">
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight uppercase">EXECUTION_PHASE</h1>
<p className="font-label-caps text-label-caps text-primary-container flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]">lock</span>
                SECURE LEGAL PROTOCOL INITIATED
            </p>
</div>
{/* Document Preview Bento */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
<div className="md:col-span-8 bg-surface-container border border-outline-variant p-density-comfortable relative overflow-hidden group">
{/* Decorative Tech Accent */}
<div className="absolute top-0 right-0 w-16 h-16 bg-surface-variant -mr-8 -mt-8 rotate-45 border-l border-b border-outline-variant"></div>
<div className="flex justify-between items-start mb-gutter">
<div className="flex items-center gap-2">
<h2 className="font-label-caps text-label-caps text-primary-container uppercase bg-surface-variant px-2 py-1 inline-block border border-outline-variant">DOC_REF: SETTLEMENT_AGREEMENT_AND_RELEASE</h2>
<span className="font-label-caps text-[10px] text-primary-container border border-primary-container/50 px-1 py-0.5 rounded-sm">VERIFIED</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary-container transition-colors">description</span>
</div>
<div className="bg-[#0c0e12] border border-outline-variant p-density-comfortable h-64 overflow-y-auto font-label-caps text-sm text-on-surface-variant custom-scrollbar relative">
<div className="absolute inset-0 scanlines pointer-events-none opacity-50"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0e12] pointer-events-none"></div>
<p className="mb-4">This Settlement Agreement and Release (the "Agreement") is entered into to resolve all claims related to roofing inspection and materials documented under ID: TRV-88492.</p>
<p className="mb-4">By executing this document, the undersigned acknowledges full receipt and satisfaction of all terms, conditions, and material specifications detailed in the preceding technical ledgers.</p>
<p className="mb-4"><strong className="text-primary-container">Liability Waiver:</strong> The executing party waives any future claims arising from structural assessments performed during the inspection phase.</p>
<p className="blur-[2px] select-none opacity-50">Confidential terms regarding financial disbursement and sub-contractor allocations are restricted from this view level pending cryptographic signature validation. Proceed to signature to decrypt full ledger entries.</p>
</div>
</div>
{/* Status Side Panel */}
<div className="md:col-span-4 flex flex-col gap-gutter">
<div className="bg-surface-container border border-outline-variant p-density-comfortable flex-grow flex flex-col justify-center">
<div className="flex items-center gap-3 mb-density-compact">
<div className="w-3 h-3 bg-secondary-container rounded-full animate-pulse"></div>
<span className="font-label-caps text-label-caps text-secondary-container">VERIFYING_AUTHORITY</span>
</div>
<p className="font-body-fixed text-body-fixed text-on-surface mb-4">Awaiting cryptographic signature to bind agreement TRV-88492.</p>
<div className="bg-surface border border-outline-variant p-density-compact mt-auto">
<div className="flex justify-between items-center border-b border-outline-variant pb-2 mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">PARTY:</span>
<span className="font-label-caps text-label-caps text-on-surface">JOHN DOE</span>
</div>
<div className="flex justify-between items-center border-b border-outline-variant pb-2 mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">ROLE:</span>
<span className="font-label-caps text-label-caps text-on-surface">PRIME CONTRACTOR</span>
</div>
<div className="flex justify-between items-center">
<span className="font-label-caps text-label-caps text-on-surface-variant">DATE:</span>
<span className="font-label-caps text-label-caps text-on-surface" id="current-date"></span>
</div>
</div>
</div>
</div>
</section>
{/* Signature Area */}
<section className="bg-surface-container border border-outline-variant p-density-comfortable flex flex-col gap-density-compact relative group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-transparent"></div>
<div className="flex justify-between items-center">
<h3 className="font-label-caps text-label-caps text-primary-container flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">draw</span>
                    DIGITAL_SIGNATURE_INPUT
                </h3>
<button className="font-label-caps text-label-caps text-on-surface-variant hover:text-error transition-colors px-2 py-1 border border-transparent hover:border-error bg-surface-variant/50 hover:bg-error/10" id="clear-signature">
                    [ RESET_INPUT ]
                </button>
</div>
<div className="bg-[#0c0e12] border-2 border-outline-variant relative h-48 w-full signature-pad-glow transition-shadow duration-300 signature-grid">
{/* Technical Markings */}
<div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary-container/50"></div>
<div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary-container/50"></div>
<div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary-container/50"></div>
<div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary-container/50"></div>
<div className="absolute top-2 right-6 font-label-caps text-[8px] text-primary-container/30">REC: ON</div>
{/* Signature Baseline */}
<div className="absolute bottom-8 left-8 right-8 border-b-2 border-dashed border-outline-variant/50 pointer-events-none flex justify-between items-end pb-1">
<span className="font-label-caps text-[10px] text-outline-variant">SIGN HERE x</span>
<span className="font-label-caps text-[10px] text-outline-variant">TRV-88492</span>
</div>
<canvas className="w-full h-full cursor-crosshair relative z-10" id="signature-canvas"></canvas>
</div>
</section>
{/* Action Button */}
<div className="flex justify-end pt-gutter">
<button className="bg-[#111317] border-2 border-[#00D4AA] shadow-[0_0_15px_rgba(0,240,255,0.2)] text-primary-container hover:bg-primary-container/10 font-data-point text-data-point py-4 px-8 uppercase tracking-widest flex items-center gap-3 transition-all duration-200 active:scale-95 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-container/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
<span className="material-symbols-outlined">bolt</span>
<span>SUBMIT_FINAL_EXECUTION</span>
<span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
</button>
</div>
{/* Ledger Status Footer */}
<div className="mt-auto border-t border-outline-variant pt-density-compact flex flex-col justify-start items-start gap-unit opacity-75">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">LEDGER_SYNC_STATUS: <span className="text-primary-container">GENERATING_HASH...</span></span>
</div>
<div className="font-label-caps text-label-caps text-outline-variant bg-surface-variant px-2 py-1 rounded-sm font-mono text-[10px]">
                TX_ID: 0x8f4...e9a2 [PENDING_SIG]
            </div>
</div>
<span className="font-label-caps text-[10px] text-on-surface-variant/70">AUTH_PROTOCOL: RSA-4096 // STATUS: PENDING_SIG</span>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 border-t border-outline-variant bg-surface-container-lowest z-50">
<button className="flex flex-col items-center justify-center text-on-surface-variant py-2 px-4 hover:text-on-surface transition-all active:bg-surface-variant duration-150">
<span className="material-symbols-outlined">assignment</span>
<span className="font-label-caps text-label-caps mt-1">Claims</span>
</button>
<button className="flex flex-col items-center justify-center text-[#111317] bg-primary-container border-t-2 border-primary-container py-2 px-4 transition-all duration-150 shadow-[0_-5px_15px_rgba(0,240,255,0.2)]">
<span className="material-symbols-outlined">roofing</span>
<span className="font-label-caps text-label-caps mt-1 font-bold">Close</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant py-2 px-4 hover:text-on-surface transition-all active:bg-surface-variant duration-150">
<span className="material-symbols-outlined">layers</span>
<span className="font-label-caps text-label-caps mt-1">Materials</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant py-2 px-4 hover:text-on-surface transition-all active:bg-surface-variant duration-150">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-caps text-label-caps mt-1">Settings</span>
</button>
</nav>
    </div>
  );
}

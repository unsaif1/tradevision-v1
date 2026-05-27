export default function OnboardingInvitationPage() {
  return (
    <div className="bg-background text-on-surface font-body-fixed selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
{/* TopAppBar */}
<header className="docked full-width top-0 bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile h-14 z-50 fixed">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-primary-fixed-dim hover:bg-surface-container-highest transition-colors active:opacity-80 p-2 rounded">arrow_back</button>
<h1 className="font-label-caps text-label-caps font-bold tracking-widest text-primary-fixed-dim">CLAIM-4082 // ACTIVE</h1>
</div>
<div className="flex items-center gap-2">
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-highest transition-colors active:opacity-80 p-2 rounded">settings_input_component</button>
</div>
</header>
{/* Main Content Canvas */}
<main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop min-h-screen flex flex-col items-center justify-center scanline">
<div className="w-full max-w-lg space-y-gutter">
{/* Secure Portal Badge */}
<div className="flex justify-center mb-density-comfortable">
<div className="border border-primary-fixed-dim/30 bg-primary-fixed-dim/5 px-4 py-2 flex items-center gap-3">
<span className="material-symbols-outlined text-primary-fixed-dim text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
<span className="font-label-caps text-label-caps text-primary-fixed-dim tracking-[0.2em]">SECURE PORTAL ENTRY</span>
</div>
</div>
{/* Welcome & Identity Section */}
<section className="text-center space-y-2">
<h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface">Secure Invitation Access</h2>
<p className="text-on-surface-variant font-body-fixed max-w-sm mx-auto">Verify your industrial credentials to gain access to the structural assessment portal.</p>
</section>
{/* Technical Card: Claim Summary */}
<div className="relative border border-outline-variant bg-surface-container-low p-density-comfortable">
<div className="absolute -top-3 left-4 bg-surface px-2 border-x border-t border-outline-variant font-label-caps text-label-caps text-on-surface-variant">
                    CLAIM_MANIFEST_082
                </div>
<div className="space-y-gutter">
<div className="flex justify-between items-start">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">SUBJECT</span>
<span className="font-headline-md text-[20px] text-primary">Severe Wind Damage</span>
</div>
<div className="text-right">
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">REFERENCE</span>
<span className="font-data-point text-data-point text-secondary-fixed-dim">CLM-2023-884A</span>
</div>
</div>
<div className="grid grid-cols-2 gap-gutter pt-gutter border-t border-outline-variant/30">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Asset Location</span>
<span className="font-body-fixed text-on-surface text-sm">Industrial Sector 7-G</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Issued By</span>
<span className="font-body-fixed text-on-surface text-sm">Apex Adjustments</span>
</div>
</div>
</div>
</div>
{/* Blockchain Stamped Code Section */}
<div className="border border-outline-variant bg-surface-container-highest/50 p-density-comfortable space-y-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
<h3 className="font-label-caps text-label-caps text-secondary-fixed-dim tracking-widest">BLOCKCHAIN VALIDATION HASH</h3>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-gutter flex items-center justify-between group cursor-text">
<div className="font-data-point text-primary-fixed-dim text-lg tracking-wider overflow-hidden text-ellipsis whitespace-nowrap mr-4">
                        0x82f..A94C..E201
                    </div>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">content_copy</button>
</div>
<p className="font-label-caps text-[10px] text-on-surface-variant leading-relaxed opacity-60">
                    THIS INVITATION IS IMMUTABLY RECORDED ON THE APEX LEDGER. ANY ATTEMPT TO TAMPER WITH THE CLAIMS DATA WILL INVALIDATE THE ENTIRE PROJECT NODE.
                </p>
</div>
{/* Primary Action */}
<div className="pt-gutter space-y-4">
<button className="w-full h-16 bg-primary-container text-on-primary-container font-headline-md flex items-center justify-center gap-3 chamfered-button hover:brightness-110 active:scale-[0.98] transition-all border-b-4 border-on-primary-fixed-variant">
<span className="material-symbols-outlined">shield_with_heart</span>
                    VERIFY & JOIN PORTAL
                </button>
<div className="flex items-center justify-center gap-6">
<button className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-sm">cancel</span> DECLINE
                    </button>
<div className="w-px h-3 bg-outline-variant"></div>
<button className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-sm">help_outline</span> SUPPORT
                    </button>
</div>
</div>
</div>
</main>
{/* Visual Atmosphere: Industrial Accents */}
<div className="fixed top-20 right-4 flex flex-col items-end opacity-20 pointer-events-none hidden md:flex">
<div className="font-data-point text-[10px] text-primary-fixed-dim border-r-2 border-primary-fixed-dim pr-2 mb-2">LAT: 34.0522° N</div>
<div className="font-data-point text-[10px] text-primary-fixed-dim border-r-2 border-primary-fixed-dim pr-2">LON: 118.2437° W</div>
</div>
{/* Script for Micro-interactions */}
    </div>
  );
}

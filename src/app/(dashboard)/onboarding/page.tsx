export default function OnboardingPage() {
  return (
    <div className="bg-background font-body-fixed min-h-screen flex flex-col overflow-x-hidden">
{/* Top Navigation Anchor (Non-Interactive/Technical) */}
<header className="docked full-width top-0 border-b border-outline-variant bg-surface flex justify-between items-center w-full px-margin-mobile h-14 z-50">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-fixed-dim">arrow_back</span>
<span className="font-label-caps text-label-caps font-bold tracking-widest text-primary-fixed-dim">CLAIM-4082 // ACTIVE</span>
</div>
<span className="material-symbols-outlined text-primary-fixed-dim">settings_input_component</span>
</header>
{/* Main Content Canvas */}
<main className="flex-grow flex flex-col items-center justify-center px-margin-mobile py-density-comfortable relative overflow-hidden">
{/* Atmospheric Grid Background */}
<div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(#3b494b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
<div className="scanline"></div>
{/* Welcome Hero */}
<section className="w-full max-w-xl text-center mb-12 relative">
<div className="inline-block px-4 py-1 border border-primary-fixed-dim bg-primary-fixed-dim/10 mb-6">
<span className="font-label-caps text-label-caps text-primary-fixed-dim tracking-[0.2em] uppercase">Deployment Ready</span>
</div>
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-4">
                Systems Integrated.
            </h1>
<p className="font-body-fixed text-on-surface-variant max-w-md mx-auto">
                Authentication successful. Your roofing management protocol (C.A.R.E.) is now operational. Review your active pipeline below.
            </p>
</section>
{/* Bento Process Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mb-12">
{/* Step 1: Intake */}
<div className="relative group bg-surface-container border border-outline-variant p-density-compact flex flex-col justify-between aspect-square transition-all hover:border-primary-fixed-dim">
<div className="absolute top-0 right-0 p-2 opacity-20">
<span className="font-data-point text-[40px] text-primary-fixed-dim">01</span>
</div>
<div className="z-10">
<span className="material-symbols-outlined text-primary-fixed-dim mb-4" style={{ fontSize: '32px' }}>input</span>
<h3 className="font-headline-md text-headline-md-mobile text-on-surface">Intake</h3>
</div>
<div className="flex flex-col gap-2">
<div className="h-1 w-full bg-primary-fixed-dim"></div>
<span className="font-label-caps text-label-caps text-primary-fixed-dim">COMPLETED</span>
</div>
</div>
{/* Step 2: Inspection */}
<div className="relative group bg-surface-container-high border border-primary-fixed-dim p-density-compact flex flex-col justify-between aspect-square ring-1 ring-primary-fixed-dim/30">
<div className="absolute top-0 right-0 p-2 opacity-50">
<span className="font-data-point text-[40px] text-primary-fixed-dim">02</span>
</div>
<div className="z-10">
<span className="material-symbols-outlined text-primary-fixed-dim mb-4" style={{ fontSize: '32px' }}>biotech</span>
<h3 className="font-headline-md text-headline-md-mobile text-on-surface">Inspection</h3>
</div>
<div className="flex flex-col gap-2">
<div className="h-1 w-full bg-surface-variant relative overflow-hidden">
<div className="absolute inset-0 bg-primary-fixed-dim w-1/2 animate-pulse"></div>
</div>
<div className="flex justify-between items-center">
<span className="font-label-caps text-label-caps text-primary-fixed-dim">ACTIVE</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">50%</span>
</div>
</div>
</div>
{/* Step 3: Approval */}
<div className="relative group bg-surface-container border border-outline-variant p-density-compact flex flex-col justify-between aspect-square opacity-60 grayscale hover:grayscale-0 transition-all">
<div className="absolute top-0 right-0 p-2 opacity-10">
<span className="font-data-point text-[40px] text-on-surface-variant">03</span>
</div>
<div className="z-10">
<span className="material-symbols-outlined text-on-surface-variant mb-4" style={{ fontSize: '32px' }}>fact_check</span>
<h3 className="font-headline-md text-headline-md-mobile text-on-surface">Approval</h3>
</div>
<div className="flex flex-col gap-2">
<div className="h-1 w-full bg-surface-variant"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">PENDING</span>
</div>
</div>
{/* Step 4: Repair */}
<div className="relative group bg-surface-container border border-outline-variant p-density-compact flex flex-col justify-between aspect-square opacity-60 grayscale hover:grayscale-0 transition-all">
<div className="absolute top-0 right-0 p-2 opacity-10">
<span className="font-data-point text-[40px] text-on-surface-variant">04</span>
</div>
<div className="z-10">
<span className="material-symbols-outlined text-on-surface-variant mb-4" style={{ fontSize: '32px' }}>construction</span>
<h3 className="font-headline-md text-headline-md-mobile text-on-surface">Repair</h3>
</div>
<div className="flex flex-col gap-2">
<div className="h-1 w-full bg-surface-variant"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">QUEUED</span>
</div>
</div>
</div>
{/* Site Visualization Feature */}
<div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
<div className="md:col-span-2 bg-surface-container border border-outline-variant flex flex-col">
<div className="p-density-compact border-b border-outline-variant flex justify-between items-center">
<span className="font-label-caps text-label-caps text-on-surface-variant">SITE_TELEMETRY.EXE</span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-error animate-ping"></div>
<span className="font-label-caps text-label-caps text-error">SIGNAL LOSS DETECTED</span>
</div>
</div>
<div className="relative h-64 overflow-hidden bg-surface-dim">
<img className="w-full h-full object-cover opacity-50 mix-blend-luminosity" data-alt="A high-altitude, industrial drone-eye view of a vast residential roofing complex under renovation. The scene is rendered in a high-contrast dark-mode aesthetic with cyan and teal data overlays representing thermal heat maps and structural integrity grids. Moody twilight lighting accentuates the sharp geometric lines of the roofs, creating a professional, technical atmosphere focused on engineering precision and industrial utility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYyJVjtK0VY6bhNMLLztmZ0EtWwKPmx1NP6si4rpxZPWq3dKK0SyUcoICRguao3Kuza6Qn6tqF20bYLc-VTIY1W7F08eT7CUnrByf_re9ks0wrbL58lCAbzSFGliMGpzKWckxKDH8IZsWD2Zf5WEVXQxKVZTdw-wEKVEuXX9gjzxmpHUHxBXCms1lrFu7y7C4ZH4BizMKlHlGST_MsHX1h-r73OfVfYRX743E_EKekeNLrRZDArsQqmHA86JrAEE_3regjoAhKB1Lz" />
<div className="absolute inset-0 flex items-center justify-center">
<div className="border border-primary-fixed-dim/50 w-32 h-32 flex items-center justify-center">
<div className="w-24 h-24 border-2 border-primary-fixed-dim animate-pulse"></div>
</div>
</div>
<div className="absolute bottom-4 left-4 font-data-point text-label-caps text-primary-fixed-dim bg-background/80 px-2 py-1">
                        LOC: 41.8781° N, 87.6298° W
                    </div>
</div>
</div>
<div className="bg-surface-container border border-outline-variant p-density-comfortable flex flex-col justify-center items-center text-center">
<h4 className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest">Active Pitch Analysis</h4>
<div className="relative w-32 h-32 mb-6">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="45" stroke="#333539" strokeWidth="8"></circle>
<circle className="transition-all duration-1000" cx="50" cy="50" fill="transparent" r="45" stroke="#00dbe9" strokeDasharray="282.7" strokeDashoffset="141" strokeLinecap="butt" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-data-point text-headline-md text-primary-fixed-dim">6:12</span>
<span className="font-label-caps text-[10px] text-on-surface-variant">SLOPE</span>
</div>
</div>
<p className="font-label-caps text-label-caps text-on-surface-variant">Technical specs updated 2m ago.</p>
</div>
</div>
{/* Primary Call to Action */}
<div className="w-full flex justify-center">
<button className="chamfer-btn bg-primary-container hover:bg-primary transition-all group flex items-center gap-6 pr-8 border-b-4 border-on-primary-fixed-variant active:scale-95">
<div className="bg-on-primary-fixed-variant p-6 group-hover:bg-on-primary transition-colors">
<span className="material-symbols-outlined text-primary-container" style={{ fontSize: '32px' }}>dashboard_customize</span>
</div>
<div className="flex flex-col items-start">
<span className="font-headline-md text-on-primary tracking-tight">Enter Command Center</span>
<span className="font-label-caps text-label-caps text-on-primary-container opacity-80">PROTOCOL: INITIALIZE_DASHBOARD_V4</span>
</div>
<span className="material-symbols-outlined text-on-primary-container group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
</div>
</main>
{/* Bottom Navigation Shell (Suppressing per task rules for transactional/welcome feel but mapping for structure) */}
{/* The prompt implies this is a 'final step' of orientation, so we maintain shell placeholders if the logic required it, 
         but we focus on the Canvas. According to instructions, for 'Onboarding' or 'Success' splashes, we suppress. */}
<footer className="mt-auto py-density-compact border-t border-outline-variant flex justify-center">
<p className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
            © 2024 C.A.R.E. Roofing Systems // Encrypted Connection
        </p>
</footer>
    </div>
  );
}

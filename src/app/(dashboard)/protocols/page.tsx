export default function ProtocolsPage() {
  return (
    <div className="bg-surface-dim text-on-surface flex h-screen overflow-hidden antialiased">
{/* SideNavBar */}
<nav className="bg-surface-container-low border-r border-border-muted flex flex-col h-screen py-6 w-64 flex-shrink-0 z-20">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center border border-border-muted overflow-hidden">
<img alt="Organization Logo" className="w-full h-full object-cover" data-alt="A stylized geometric logo featuring interlocking metallic gears and a vibrant neon blue accent line, representing an industrial technology firm, set against a dark background with sharp, modern lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANZRpTnbZeJkIqBIAx5C8ezc70SAIrIyHurdeqEFj6bgTPTqkWQk54NeVREuP_Xau0EGvm33XAICcjG0UuNyynZHeelQozGhJWpL1LGihoNZqOBmR0uWzp3ghD5CEtQ3WyRoF1lsOmtZJht-eynHlZmWKXHopHs8e3YYjcU0kRQWq67qPgZYF-pdYJFYL94McKaqY4eR8NGgYRyPip_GD4OTDJvS8-1xs-MrdmRvmRY1ZKzNhpgcdnDU0x6rIxK2YYNPvy193ZcxvZ" />
</div>
<div>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Industrial Field Ops</h2>
<p className="text-label-sm font-label-sm text-neon-blue mt-1">Active Session: 8h 12m</p>
</div>
</div>
<div className="px-4 mb-6">
<button className="w-full bg-neon-blue hover:bg-inverse-primary text-on-primary-container text-label-md font-label-md py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Job Order
            </button>
</div>
<div className="flex-1 overflow-y-auto px-4 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-all duration-150" href="#">
<span className="material-symbols-outlined text-[20px]">dashboard</span>
<span className="text-label-md font-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-all duration-150" href="#">
<span className="material-symbols-outlined text-[20px]">work</span>
<span className="text-label-md font-label-md">Jobs</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-all duration-150" href="#">
<span className="material-symbols-outlined text-[20px]">photo_library</span>
<span className="text-label-md font-label-md">Evidence</span>
</a>
{/* Active Tab: Inventory maps closest to Documentation/Database */}
<a className="flex items-center gap-3 px-3 py-2 rounded text-neon-blue font-bold border-l-4 border-neon-blue bg-surface-variant/50 transition-all duration-150 translate-x-1" href="#">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
<span className="text-label-md font-label-md">Inventory</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-all duration-150" href="#">
<span className="material-symbols-outlined text-[20px]">groups</span>
<span className="text-label-md font-label-md">Team</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-all duration-150" href="#">
<span className="material-symbols-outlined text-[20px]">analytics</span>
<span className="text-label-md font-label-md">Analytics</span>
</a>
</div>
<div className="px-4 mt-auto">
<a className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-all duration-150" href="#">
<span className="material-symbols-outlined text-[20px]">logout</span>
<span className="text-label-md font-label-md">Log Out</span>
</a>
</div>
</nav>
{/* Main Content Area */}
<div className="flex-1 flex flex-col min-w-0">
{/* TopNavBar */}
<header className="bg-surface-container border-b border-border-muted flex justify-between items-center w-full px-margin-desktop h-16 flex-shrink-0 z-10">
<div className="flex items-center gap-6">
<span className="text-headline-md font-headline-md font-bold text-neon-blue tracking-tight">ContractorOS</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 px-3 py-1 bg-surface-variant/50 border border-border-muted rounded">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">System Status: Optimal</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">help</span>
</button>
</div>
<div className="w-8 h-8 rounded-full bg-surface-variant border border-border-muted overflow-hidden ml-2 cursor-pointer border-neon-blue">
<img alt="Contractor Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a contractor wearing technical safety gear, softly lit against a dark, industrial background with a hint of blue rim lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmrfkeRT_wHDo69cvF0Md0V48Yv1lGfDbZKETIHW2fdtCHsngWK22ws8Mr6I2LKB5KAWtp8yXzDaqbB-iMcpO2R3LihcNEy_oM9ertjM9JN0YYzaOligtbg2JtwburkPaXNfBIH3rHxrHDnr-WQ8heqG2-_oaXHu-yzPkzpTqWN2gkgsB1fkrnK4lUD2VGncwv09FeuDcVfXGS8Ww0KaXmqZTM1PhYK-Ue55M3XWTuCEXSLoIoDtk0QXQc8hHSAVNUrhjzePQsLGj_" />
</div>
</div>
</header>
{/* Canvas */}
<main className="flex-1 overflow-y-auto p-margin-desktop bg-surface-dim">
<div className="max-w-[1200px] mx-auto flex flex-col gap-8">
{/* Page Header & Search */}
<div className="flex flex-col gap-4">
<h1 className="text-headline-lg font-headline-lg text-on-surface">C.A.R.E. Protocol Documentation</h1>
<div className="relative w-full max-w-2xl group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="font-headline-sm text-neon-blue font-bold mr-2">&gt;</span>
<div className="w-2 h-5 bg-neon-blue animate-[pulse_1s_infinite] ml-1"></div>
</div>
<input className="w-full bg-surface-container-lowest border border-neon-blue/30 rounded py-3 pl-10 pr-4 text-body-md font-headline-sm text-neon-blue placeholder-neon-blue/40 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all" placeholder="Query protocol database..." type="text" />
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none gap-1">
<span className="font-label-sm text-label-sm text-neon-blue/60">CMD+K</span>
</div>
</div>
</div>
{/* Critical Procedures */}
<section className="flex flex-col gap-4">
<div className="flex items-center gap-2 border-b border-border-muted pb-2">
<span className="material-symbols-outlined text-error text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface uppercase tracking-wide">Critical Procedures</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/* Critical Card 1 */}
<div className="bg-surface-card border-l-4 border-error p-4 rounded-r-lg relative overflow-hidden group cursor-pointer hover:border-error-container transition-colors bg-[repeating-linear-gradient(45deg,#1E293B,#1E293B_10px,#251416_10px,#251416_20px)]">
<div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl text-error">electric_bolt</span>
</div>
<div className="flex flex-col gap-3 relative z-10">
<div className="flex justify-between items-start">
<span className="px-2 py-0.5 bg-error-container text-on-error-container text-label-sm font-label-sm rounded uppercase">Emergency</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">v4.2</span>
</div>
<h3 className="text-body-lg font-body-lg font-semibold text-on-surface">High-Voltage Isolation</h3>
<p className="text-label-sm font-label-sm text-on-surface-variant line-clamp-2">Immediate shutdown sequence for catastrophic electrical faults exceeding 600V.</p>
<div className="mt-2 flex items-center justify-between text-neon-blue group-hover:text-tertiary transition-colors">
<span className="text-label-md font-label-md">Initialize Sequence</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
</div>
{/* Critical Card 2 */}
<div className="bg-surface-card border-l-4 border-error p-4 rounded-r-lg relative overflow-hidden group cursor-pointer hover:border-error-container transition-colors bg-[repeating-linear-gradient(45deg,#1E293B,#1E293B_10px,#251416_10px,#251416_20px)]">
<div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl text-error">water_drop</span>
</div>
<div className="flex flex-col gap-3 relative z-10">
<div className="flex justify-between items-start">
<span className="px-2 py-0.5 bg-error-container text-on-error-container text-label-sm font-label-sm rounded uppercase">Hazard</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">v2.1</span>
</div>
<h3 className="text-body-lg font-body-lg font-semibold text-on-surface">Chemical Spill Response</h3>
<p className="text-label-sm font-label-sm text-on-surface-variant line-clamp-2">Containment protocols for Class 3 industrial solvents and reactive agents.</p>
<div className="mt-2 flex items-center justify-between text-neon-blue group-hover:text-tertiary transition-colors">
<span className="text-label-md font-label-md">Initialize Sequence</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
</div>
{/* Critical Card 3 */}
<div className="bg-surface-card border-l-4 border-error p-4 rounded-r-lg relative overflow-hidden group cursor-pointer hover:border-error-container transition-colors bg-[repeating-linear-gradient(45deg,#1E293B,#1E293B_10px,#251416_10px,#251416_20px)]">
<div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl text-error">warning</span>
</div>
<div className="flex flex-col gap-3 relative z-10">
<div className="flex justify-between items-start">
<span className="px-2 py-0.5 bg-error-container text-on-error-container text-label-sm font-label-sm rounded uppercase">Evacuation</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">v1.9</span>
</div>
<h3 className="text-body-lg font-body-lg font-semibold text-on-surface">Structural Compromise</h3>
<p className="text-label-sm font-label-sm text-on-surface-variant line-clamp-2">Site clearing and reporting path for detected foundation or support column failure.</p>
<div className="mt-2 flex items-center justify-between text-neon-blue group-hover:text-tertiary transition-colors">
<span className="text-label-md font-label-md">Initialize Sequence</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/* Standard Protocols */}
<section className="flex flex-col gap-4 mt-4">
<div className="flex items-center gap-2 border-b border-border-muted pb-2">
<span className="material-symbols-outlined text-neon-blue text-[20px]">folder_copy</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface uppercase tracking-wide">Standard Protocols</h2>
</div>
{/* Category Group: Electrical */}
<div className="bg-surface-container-low border border-border-muted rounded flex flex-col">
<div className="px-4 py-3 bg-surface-card/50 flex items-center gap-3 border-b border-border-muted cursor-pointer hover:bg-surface-card transition-colors">
<span className="material-symbols-outlined text-outline">electrical_services</span>
<h3 className="text-body-md font-body-md font-medium text-on-surface">Electrical Systems</h3>
<span className="ml-auto text-label-sm font-label-sm text-outline-variant px-2 py-0.5 bg-surface-variant rounded">12 Items</span>
<span className="material-symbols-outlined text-outline-variant">expand_more</span>
</div>
<div className="flex flex-col divide-y divide-border-muted">
{/* Protocol Row */}
<div className="px-4 py-3 flex items-center hover:bg-surface-variant/30 transition-colors group border-b border-border-muted last:border-0">
<div className="w-10 h-10 flex items-center justify-center bg-red-900/20 rounded border border-red-500/30 mr-4 shrink-0">
<span className="material-symbols-outlined text-red-400">picture_as_pdf</span>
</div>
<div className="flex flex-col flex-1">
<h4 className="font-label-md text-label-md text-on-surface">ELEC-01A_Lockout_Tagout</h4>
<div className="flex items-center gap-2 mt-0.5">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase">v3.0.4 • PDF • 1.2MB</p>
<span className="text-[10px] text-outline-variant">• Updated 2h ago</span>
<span className="text-[10px] text-outline-variant">• Author: J. Smith</span>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1.5 border border-border-muted hover:border-neon-blue text-neon-blue text-label-sm font-label-sm rounded transition-colors">View</button>
<button className="px-3 py-1.5 bg-surface-variant hover:bg-neon-blue text-on-surface hover:text-on-primary text-label-sm font-label-sm rounded transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
</div>
{/* Protocol Row */}
<div className="px-4 py-3 flex items-center hover:bg-surface-variant/30 transition-colors group border-b border-border-muted last:border-0">
<div className="w-10 h-10 flex items-center justify-center bg-blue-900/20 rounded border border-blue-500/30 mr-4 shrink-0">
<span className="material-symbols-outlined text-blue-400">description</span>
</div>
<div className="flex flex-col flex-1">
<h4 className="font-label-md text-label-md text-on-surface">ELEC-04_Generator_Sync</h4>
<div className="flex items-center gap-2 mt-0.5">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase">v1.1.0 • MD • 45KB</p>
<span className="text-[10px] text-outline-variant">• Updated 1d ago</span>
<span className="text-[10px] text-outline-variant">• Author: M. Chen</span>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1.5 border border-border-muted hover:border-neon-blue text-neon-blue text-label-sm font-label-sm rounded transition-colors">View</button>
<button className="px-3 py-1.5 bg-surface-variant hover:bg-neon-blue text-on-surface hover:text-on-primary text-label-sm font-label-sm rounded transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
</div>
</div>
</div>
{/* Category Group: HVAC */}
<div className="bg-surface-container-low border border-border-muted rounded flex flex-col">
<div className="px-4 py-3 bg-surface-card/50 flex items-center gap-3 border-b border-border-muted cursor-pointer hover:bg-surface-card transition-colors">
<span className="material-symbols-outlined text-outline">ac_unit</span>
<h3 className="text-body-md font-body-md font-medium text-on-surface">HVAC & Environmental</h3>
<span className="ml-auto text-label-sm font-label-sm text-outline-variant px-2 py-0.5 bg-surface-variant rounded">8 Items</span>
<span className="material-symbols-outlined text-outline-variant">expand_more</span>
</div>
<div className="flex flex-col divide-y divide-border-muted">
{/* Protocol Row */}
<div className="px-4 py-3 flex items-center hover:bg-surface-variant/30 transition-colors group border-b border-border-muted last:border-0">
<div className="w-10 h-10 flex items-center justify-center bg-red-900/20 rounded border border-red-500/30 mr-4 shrink-0">
<span className="material-symbols-outlined text-red-400">picture_as_pdf</span>
</div>
<div className="flex flex-col flex-1">
<h4 className="font-label-md text-label-md text-on-surface">HVAC-REF_Refrigerant_Purge</h4>
<div className="flex items-center gap-2 mt-0.5">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase">v2.2.1 • PDF • 2.4MB</p>
<span className="text-[10px] text-outline-variant">• Updated 3h ago</span>
<span className="text-[10px] text-outline-variant">• Author: T. Williams</span>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1.5 border border-border-muted hover:border-neon-blue text-neon-blue text-label-sm font-label-sm rounded transition-colors">View</button>
<button className="px-3 py-1.5 bg-surface-variant hover:bg-neon-blue text-on-surface hover:text-on-primary text-label-sm font-label-sm rounded transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>
    </div>
  );
}

export default function EvidenceFieldPage() {
  return (
    <div className="font-body-fixed antialiased text-body-fixed min-h-screen flex flex-col md:flex-row relative">
<div className="bg-grid"></div>
{/* Navigation Drawer (Desktop) */}
<nav className="hidden md:flex flex-col h-screen w-80 fixed left-0 top-0 bg-surface-container border-r border-outline-variant p-density-comfortable z-40">
{/* Header */}
<div className="mb-8 left_align">
<h1 className="font-display-lg text-display-lg text-primary uppercase tracking-tighter mb-4">ROOF_COMMAND</h1>
<div className="flex items-center gap-4 p-density-compact bg-surface-container-high rounded-lg border border-outline-variant">
<img alt="Field Lead" className="w-12 h-12 rounded-full border border-primary object-cover" data-alt="Close up portrait of a rugged construction site inspector wearing a hard hat and safety glasses, dramatic high contrast lighting, cyber-industrial dark aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdabbUWnHN3XcRGPJsISiBH7CHUdKPEcRddl5x0yuIRK1gQLS9JkJyyZdeZ6c7xLWVKdqp6CsKO5UltAP3fiPTKzqfEnoIZy7ShSuhxfm8kyYQ9bORAcUhey5H7KK7iuyli6oJM4MEyst-9D6e0aomL9GR3Gs2RCULW-CYtDtZG_98dUJKocAx8_9o1-UEwbn6tlfLAxvz80bL5Y5kTezEtJFpPB2G8fsPGR94NBB-mBYrEiCDrLCm5HjoMuKheXjqxIutjluMV0sN" />
<div>
<div className="font-data-point text-data-point text-on-surface">Lead Inspector</div>
<div className="font-label-caps text-label-caps text-on-surface-variant">Region: North-East</div>
<div className="font-label-caps text-label-caps text-primary-fixed-dim mt-1">v2.4.0-Industrial</div>
</div>
</div>
</div>
{/* Links */}
<div className="flex flex-col gap-2 flex-grow">
<a className="flex items-center gap-3 p-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors font-body-fixed text-body-fixed" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 p-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors font-body-fixed text-body-fixed" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>view_in_ar</span>
                Materials Inventory
            </a>
<a className="flex items-center gap-3 p-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors font-body-fixed text-body-fixed" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>groups</span>
                Team Sync
            </a>
<a className="flex items-center gap-3 p-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors font-body-fixed text-body-fixed" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>shield</span>
                Safety Protocols
            </a>
<div className="mt-auto">
<a className="flex items-center gap-3 p-3 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors font-body-fixed text-body-fixed" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
                    Settings
                </a>
</div>
</div>
</nav>
{/* Top App Bar (Mobile) */}
<header className="md:hidden fixed top-0 w-full z-50 bg-surface flex justify-between items-center px-margin-mobile h-16 border-b border-outline-variant">
<button className="text-primary hover:bg-surface-container-high transition-colors active:scale-95 duration-100 p-2 rounded">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
</button>
<h1 className="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tighter uppercase">TV-CARE COMMAND</h1><div className="flex flex-col items-end mr-2"><span className="font-mono text-[8px] text-primary-fixed-dim uppercase leading-none">Node_Verified</span><span className="font-mono text-[10px] text-on-surface-variant leading-none">14:02:44:882</span></div>
<button className="w-8 h-8 rounded-full overflow-hidden border border-primary active:scale-95 duration-100">
<img alt="Contractor Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a rugged construction site inspector wearing a hard hat and safety glasses, dramatic high contrast lighting, cyber-industrial dark aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBrPFBHFizI3-4rIcly_kY5-kAjqfQWWiNUDFBAWbdpeoaPDPIhbEIXU_NgdFUNWkggrzzc8GGmDAnTW0uysYLW-0N3OvSDgRet9voqDcpCMyeyjsy1AdGkZZ1TXbY1NdIt-yXjFmQtwVqoyDsER9whej8x8nyZvSn7hDFhFrzvDAmXxVt8F0-OFaAGawtRQrgxoA09d_VcyZs0dUeI4k2jnA_y-AqwNJqkFCr2RX3p2i2pOiAwvig_m2E791J5k6TOxktGt5NnZ1-" />
</button>
</header>
{/* Main Content Canvas */}
<main className="flex-1 md:ml-80 pt-16 md:pt-0 pb-24 md:pb-0 relative z-10 px-margin-mobile md:px-margin-desktop py-6">
{/* Header */}
<div className="mb-8 flex justify-between items-end border-b border-outline-variant pb-4">
<div>
<h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">EVIDENCE_LEDGER_UPLOAD</h2>
<div className="font-data-point text-data-point text-primary-fixed-dim">JOB_ID: #RC-994-B</div>
</div>
<div className="hidden md:flex gap-4">
<button className="px-6 py-3 border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container-highest transition-colors rounded">CANCEL</button>
<button className="px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps font-bold rounded border-b-4 border-on-primary-container active:border-b-0 active:translate-y-1 transition-all">SUBMIT BATCH</button>
</div>
</div>
{/* Evidence Categories Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
{/* Category: Shingle Granule Loss */}
<div className="bg-surface-container border border-outline-variant rounded-lg p-density-comfortable relative group hover:border-primary transition-colors bg-surface-container-low">
<div className="absolute -top-3 -left-1 bg-surface border border-outline-variant px-2 py-1 font-label-caps text-label-caps text-primary-fixed">CAT_01</div>
<div className="flex justify-between items-start mb-4 mt-2">
<h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface">Shingle Granule Loss</h3>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>lens_blur</span>
</div>
<div className="relative border border-outline-variant rounded p-4 flex flex-col items-center justify-center bg-surface-container-lowest h-32 cursor-pointer hover:bg-surface-container-high hover:border-primary transition-all overflow-hidden"><div className="absolute inset-0 border border-primary/20 pointer-events-none"><div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div><div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div><div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"></div><div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-primary/40 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-primary rounded-full"></div></div></div><span className="material-symbols-outlined text-outline mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>add_a_photo</span><span className="font-label-caps text-label-caps text-on-surface-variant">INIT_CAPTURE_SEQUENCE</span></div>
<div className="mt-4 flex justify-between items-center text-xs font-data-point text-outline">
<span>REQ: 3 SHOTS</span>
<span>0/3</span>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/30 font-data-point text-[8px] text-outline-variant uppercase space-y-0.5"><div className="flex justify-between"><span>AUTH_STATUS</span><span className="text-primary">PENDING</span></div><div className="flex justify-between"><span>BLOCKCHAIN_ID</span><span>0x7a2...fE81</span></div><div className="flex justify-between"><span>GEO_SYNC</span><span className="text-secondary-fixed">VALID</span></div></div></div>
{/* Category: Hail Impact Dents */}
<div className="bg-surface-container border border-outline-variant rounded-lg p-density-comfortable relative group hover:border-primary transition-colors bg-surface-container-low">
<div className="absolute -top-3 -left-1 bg-surface border border-outline-variant px-2 py-1 font-label-caps text-label-caps text-secondary-fixed">CAT_02</div>
<div className="flex justify-between items-start mb-4 mt-2">
<h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface">Hail Impact Dents</h3>
<span className="material-symbols-outlined text-outline-variant group-hover:text-secondary-fixed transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>radio_button_checked</span>
</div>
<div className="relative border border-outline-variant rounded p-4 flex flex-col items-center justify-center bg-surface-container-lowest h-32 cursor-pointer hover:bg-surface-container-high hover:border-primary transition-all overflow-hidden"><div className="absolute inset-0 border border-primary/20 pointer-events-none"><div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div><div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div><div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"></div><div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-primary/40 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-primary rounded-full"></div></div></div><span className="material-symbols-outlined text-outline mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>add_a_photo</span><span className="font-label-caps text-label-caps text-on-surface-variant">INIT_CAPTURE_SEQUENCE</span></div>
<div className="mt-4 flex justify-between items-center text-xs font-data-point text-outline">
<span>REQ: SCALE REF</span>
<span>0/1</span>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/30 font-data-point text-[8px] text-outline-variant uppercase space-y-0.5"><div className="flex justify-between"><span>AUTH_STATUS</span><span className="text-primary">PENDING</span></div><div className="flex justify-between"><span>BLOCKCHAIN_ID</span><span>0x7a2...fE81</span></div><div className="flex justify-between"><span>GEO_SYNC</span><span className="text-secondary-fixed">VALID</span></div></div></div>
{/* Category: Flashing Integrity */}
<div className="bg-surface-container border border-outline-variant rounded-lg p-density-comfortable relative group hover:border-primary transition-colors bg-surface-container-low">
<div className="absolute -top-3 -left-1 bg-surface border border-outline-variant px-2 py-1 font-label-caps text-label-caps text-primary-fixed">CAT_03</div>
<div className="flex justify-between items-start mb-4 mt-2">
<h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface">Flashing Integrity</h3>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>architecture</span>
</div>
<div className="relative border border-outline-variant rounded p-4 flex flex-col items-center justify-center bg-surface-container-lowest h-32 cursor-pointer hover:bg-surface-container-high hover:border-primary transition-all overflow-hidden"><div className="absolute inset-0 border border-primary/20 pointer-events-none"><div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div><div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div><div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"></div><div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-primary/40 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-primary rounded-full"></div></div></div><span className="material-symbols-outlined text-outline mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>add_a_photo</span><span className="font-label-caps text-label-caps text-on-surface-variant">INIT_CAPTURE_SEQUENCE</span></div>
<div className="mt-4 flex justify-between items-center text-xs font-data-point text-outline">
<span>REQ: CHIMNEY/VENT</span>
<span>0/2</span>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/30 font-data-point text-[8px] text-outline-variant uppercase space-y-0.5"><div className="flex justify-between"><span>AUTH_STATUS</span><span className="text-primary">PENDING</span></div><div className="flex justify-between"><span>BLOCKCHAIN_ID</span><span>0x7a2...fE81</span></div><div className="flex justify-between"><span>GEO_SYNC</span><span className="text-secondary-fixed">VALID</span></div></div></div>
{/* Category: Gutter Blockage */}
<div className="bg-surface-container border border-outline-variant rounded-lg p-density-comfortable relative group hover:border-primary transition-colors bg-surface-container-low">
<div className="absolute -top-3 -left-1 bg-surface border border-outline-variant px-2 py-1 font-label-caps text-label-caps text-primary-fixed">CAT_04</div>
<div className="flex justify-between items-start mb-4 mt-2">
<h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface">Gutter Blockage</h3>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>water_drop</span>
</div>
<div className="relative border border-outline-variant rounded p-4 flex flex-col items-center justify-center bg-surface-container-lowest h-32 cursor-pointer hover:bg-surface-container-high hover:border-primary transition-all overflow-hidden"><div className="absolute inset-0 border border-primary/20 pointer-events-none"><div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div><div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div><div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"></div><div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-primary/40 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-primary rounded-full"></div></div></div><span className="material-symbols-outlined text-outline mb-2" style={{ fontVariationSettings: "'FILL' 0" }}>add_a_photo</span><span className="font-label-caps text-label-caps text-on-surface-variant">INIT_CAPTURE_SEQUENCE</span></div>
<div className="mt-4 flex justify-between items-center text-xs font-data-point text-outline">
<span>REQ: DOWNSPOUT</span>
<span>0/1</span>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/30 font-data-point text-[8px] text-outline-variant uppercase space-y-0.5"><div className="flex justify-between"><span>AUTH_STATUS</span><span className="text-primary">PENDING</span></div><div className="flex justify-between"><span>BLOCKCHAIN_ID</span><span>0x7a2...fE81</span></div><div className="flex justify-between"><span>GEO_SYNC</span><span className="text-secondary-fixed">VALID</span></div></div></div>
</div>
{/* Aerial / Drone Section (Asymmetric Layout) */}
<div className="mb-8 tech-border bg-surface-container-low p-4 relative"><div className="absolute -top-3 left-4 bg-surface px-2 py-1 font-label-caps text-[10px] text-primary uppercase border border-outline-variant">Live_Sensor_Feed</div><div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-2"><div><div className="flex justify-between items-center mb-1"><span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Moisture_Sens</span><span className="font-data-point text-[10px] text-primary">12.4%</span></div><div className="h-8 flex items-end gap-0.5"><div className="w-1 bg-primary" style={{ height: '40%' }}></div><div className="w-1 bg-primary" style={{ height: '60%' }}></div><div className="w-1 bg-primary" style={{ height: '35%' }}></div><div className="w-1 bg-primary" style={{ height: '45%' }}></div><div className="w-1 bg-primary" style={{ height: '70%' }}></div></div></div><div><div className="flex justify-between items-center mb-1"><span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Wind_Velocity</span><span className="font-data-point text-[10px] text-secondary-fixed">14 MPH</span></div><div className="h-8 flex items-end gap-0.5"><div className="w-1 bg-secondary-fixed" style={{ height: '20%' }}></div><div className="w-1 bg-secondary-fixed" style={{ height: '25%' }}></div><div className="w-1 bg-secondary-fixed" style={{ height: '22%' }}></div><div className="w-1 bg-secondary-fixed" style={{ height: '28%' }}></div><div className="w-1 bg-secondary-fixed" style={{ height: '30%' }}></div></div></div></div></div><div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
<div className="lg:col-span-2 bg-surface-container border border-outline-variant rounded-lg p-density-comfortable relative">
<div className="absolute -top-3 -left-1 bg-surface border border-outline-variant px-2 py-1 font-label-caps text-label-caps text-primary-fixed-dim">FLIGHT_DATA</div>
<div className="flex items-center gap-4 mb-6 mt-2 border-b border-outline-variant pb-4">
<span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
<div>
<h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface">Upload Aerial/Drone Clip</h3>
<p className="font-body-fixed text-body-fixed text-on-surface-variant">Attach 4K overview scans for complete site context.</p>
</div>
</div>
<div className="border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-lowest h-64 flex flex-col items-center justify-center relative hover:border-primary transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-5xl text-outline group-hover:text-primary mb-4 transition-colors" style={{ fontVariationSettings: "'FILL' 0" }}>cloud_upload</span>
<span className="font-data-point text-data-point text-on-surface group-hover:text-primary transition-colors">DRAG .MP4 OR TAP TO UPLOAD</span>
<span className="font-label-caps text-label-caps text-outline-variant mt-2">MAX SIZE: 500MB | LENGTH: 2MIN</span>
</div>
</div>
{/* Side Panel: Technical Specs */}
<div className="lg:col-span-1 bg-surface-container border border-outline-variant rounded-lg p-density-compact flex flex-col gap-4">
<div className="font-label-caps text-label-caps text-outline-variant border-b border-outline-variant pb-2">SITE_METADATA</div>
<div className="flex justify-between items-center bg-surface-container-lowest p-2 border border-outline-variant rounded">
<span className="font-label-caps text-label-caps text-on-surface-variant">COORDINATES</span>
<span className="font-data-point text-sm text-primary-fixed">41.8781° N, 87.6298° W</span>
</div>
<div className="flex justify-between items-center bg-surface-container-lowest p-2 border border-outline-variant rounded">
<span className="font-label-caps text-label-caps text-on-surface-variant">ALTITUDE_MSL</span>
<span className="font-data-point text-sm text-secondary-fixed">612 FT</span>
</div>
<div className="flex justify-between items-center bg-surface-container-lowest p-2 border border-outline-variant rounded">
<span className="font-label-caps text-label-caps text-on-surface-variant">WIND_SPD</span>
<span className="font-data-point text-sm text-on-surface">14 MPH NE</span>
</div>
<div className="mt-auto">
<label className="flex items-center gap-2 cursor-pointer">
<input className="form-checkbox text-primary bg-surface-container border-outline-variant rounded focus:ring-primary focus:ring-offset-surface" type="checkbox" />
<span className="font-body-fixed text-sm text-on-surface-variant">Embed Telemetry Data</span>
</label>
</div>
</div>
</div>
{/* Mobile Submit (Fixed to bottom above nav) */}
<div className="md:hidden fixed bottom-20 left-0 w-full p-4 bg-surface-container-high border-t border-outline-variant z-40">
<div className="flex flex-col gap-2 w-full"><button className="w-full py-4 bg-primary-container text-on-primary-container font-label-caps text-label-caps font-bold rounded border-b-4 border-primary active:border-b-0 active:translate-y-1 transition-all uppercase tracking-widest">Verify & Push to Ledger</button><button className="w-full py-2 bg-surface-container border border-outline-variant text-on-surface-variant font-label-caps text-[10px] uppercase hover:bg-surface-container-high transition-colors">Force Sync All Nodes</button></div>
</div>
</main>
{/* Bottom Nav Bar (Mobile) */}
<nav className="md:hidden fixed bottom-0 w-full z-50 h-20 bg-surface-container-lowest border-t border-outline-variant flex justify-around items-center px-gutter">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:bg-surface-container-high transition-all p-2 rounded w-16" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>dashboard</span>
<span className="font-label-caps text-[10px]">Command</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:bg-surface-container-high transition-all p-2 rounded w-16" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>roofing</span>
<span className="font-label-caps text-[10px]">Jobs</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:bg-surface-container-high transition-all p-2 rounded w-16" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>visibility</span>
<span className="font-label-caps text-[10px]">Inspect</span>
</a>
<a className="flex flex-col items-center justify-center text-primary-container p-2 rounded w-16" href="#">
<span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>add_a_photo</span>
<span className="font-label-caps text-[10px]">Evidence</span>
</a>
</nav>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md min-h-screen pt-header_height pb-[80px] md:pb-0 md:pl-sidebar_width antialiased">
{/* TopAppBar */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-margin h-header_height bg-surface border-b border-surface-container-highest transition-colors">
<div className="flex items-center gap-4">
<button aria-label="Menu" className="md:hidden text-primary hover:bg-surface-container-highest transition-colors p-2 rounded-lg">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>grid_view</span>
</button>
<div className="hidden md:flex items-center justify-center w-8 h-8 rounded bg-surface-container-highest">
<span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>grid_view</span>
</div>
<h1 className="font-label-caps text-label-caps tracking-widest text-primary">TRADEVISION</h1>
</div>
<div className="flex items-center">
<button aria-label="Profile" className="text-primary hover:bg-surface-container-highest transition-colors p-2 rounded-lg opacity-80 duration-150">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
</button>
</div>
</header>
{/* NavigationDrawer (Desktop) */}
<aside className="hidden md:flex flex-col fixed inset-y-0 left-0 z-[60] w-sidebar_width bg-surface-container border-r border-surface-container-highest shadow-lg pt-header_height">
<div className="p-6 border-b border-surface-container-highest flex items-center gap-4">
<div className="w-10 h-10 rounded-sm bg-surface-container-highest flex items-center justify-center border border-outline-variant overflow-hidden">
<span className="material-symbols-outlined text-on-surface-variant">person</span>
</div>
<div>
<h2 className="font-label-caps text-label-caps text-tertiary">COMMANDER ALPHA</h2>
<p className="font-mono-data text-[10px] text-on-surface-variant mt-1">ID: CMDR-7G-001</p>
</div>
</div>
<nav className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto px-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-sm text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span className="material-symbols-outlined">conveyor_belt</span>
<span className="font-label-caps tracking-wider text-xs">FLEET_STATUS</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-sm text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-label-caps tracking-wider text-xs">INVENTORY_CTRL</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-sm text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span className="material-symbols-outlined">engineering</span>
<span className="font-label-caps tracking-wider text-xs">PERSONNEL_DB</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-sm text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span className="material-symbols-outlined">assignment_late</span>
<span className="font-label-caps tracking-wider text-xs">SAFETY_LOGS</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-sm bg-surface-container-highest text-primary font-bold border-l-2 border-primary hover:bg-surface-container-high transition-all" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
<span className="font-label-caps tracking-wider text-xs">SYSTEM_CONFIG</span>
</a>
</nav>
</aside>
{/* BottomNavBar (Mobile) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-2 bg-surface-container border-t border-surface-container-highest">
<a className="flex flex-col items-center justify-center text-secondary-container hover:text-on-surface p-2 transition-colors" href="#">
<span className="material-symbols-outlined mb-1">dashboard</span>
<span className="font-label-caps text-[10px] leading-tight tracking-widest font-bold">DASHBOARD</span>
</a>
<a className="flex flex-col items-center justify-center text-secondary-container hover:text-on-surface p-2 transition-colors" href="#">
<span className="material-symbols-outlined mb-1">construction</span>
<span className="font-label-caps text-[10px] leading-tight tracking-widest font-bold">PROJECTS</span>
</a>
<a className="flex flex-col items-center justify-center text-secondary-container hover:text-on-surface p-2 transition-colors" href="#">
<span className="material-symbols-outlined mb-1">gavel</span>
<span className="font-label-caps text-[10px] leading-tight tracking-widest font-bold">CLAIMS</span>
</a>
<a className="flex flex-col items-center justify-center text-secondary-container hover:text-on-surface p-2 transition-colors" href="#">
<span className="material-symbols-outlined mb-1">notifications</span>
<span className="font-label-caps text-[10px] leading-tight tracking-widest font-bold">ALERTS</span>
</a>
</nav>
{/* Main Content Canvas */}
<main className="p-4 md:p-margin max-w-5xl mx-auto space-y-6">
<header className="mb-8 border-b border-surface-container-highest pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="font-label-caps text-display-md text-on-surface tracking-widest">[ SYSTEM_CONFIG ]</h1>
<p className="font-mono-data text-xs text-on-surface-variant mt-2">Configure structural and operational parameters for TradeVision C.A.R.E.</p>
</div>
<div className="font-mono-data text-[10px] text-tertiary flex gap-4">
<span>AUTH_LEVEL: 4</span>
<span>STATUS: <span className="text-[#00D4AA]">ONLINE</span></span>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Organization Profile */}
<section className="md:col-span-12 bg-surface border border-outline-variant rounded-sm overflow-hidden">
<div className="p-3 border-b border-outline-variant bg-surface-container flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-sm">domain</span>
<h2 className="font-label-caps text-label-caps text-on-surface tracking-widest">[ ORGANIZATION_PROFILE ]</h2>
</div>
<div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<div>
<label className="block font-label-caps text-[10px] text-on-surface-variant mb-1 tracking-widest">ENTITY_NAME</label>
<div className="w-full bg-surface-container-lowest border border-surface-container-highest py-2 px-3 font-mono-data text-mono-data text-on-surface">Aegis Construction Group</div>
</div>
<div>
<label className="block font-label-caps text-[10px] text-on-surface-variant mb-1 tracking-widest">REGISTRATION_ID</label>
<div className="w-full bg-surface-container-lowest border border-surface-container-highest py-2 px-3 font-mono-data text-mono-data text-primary">ACG-8849-XYZ</div>
</div>
</div>
<div className="space-y-4 flex flex-col justify-between">
<div>
<label className="block font-label-caps text-[10px] text-on-surface-variant mb-1 tracking-widest">PRIMARY_REGION</label>
<div className="w-full bg-surface-container-lowest border border-surface-container-highest py-2 px-3 font-mono-data text-mono-data text-on-surface flex justify-between">
<span>North America - Sector 4</span>
<span className="text-on-surface-variant">REG_CODE: NA-S4</span>
</div>
</div>
<button className="mt-4 px-4 py-2 bg-transparent border border-primary text-primary font-label-caps text-label-caps rounded-sm hover:bg-primary-container/20 transition-colors flex items-center justify-center gap-2 w-fit">
<span className="material-symbols-outlined text-sm">edit</span> [ EDIT_PROFILE ]
                        </button>
</div>
</div>
</section>
{/* API & Integrations */}
<section className="md:col-span-7 bg-surface border border-outline-variant rounded-sm overflow-hidden">
<div className="p-3 border-b border-outline-variant bg-surface-container flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-sm">api</span>
<h2 className="font-label-caps text-label-caps text-on-surface tracking-widest">[ API_GATEWAY ]</h2>
</div>
<div className="p-0 font-mono-data text-xs">
{/* JAMS */}
<div className="flex items-center justify-between p-4 border-b border-surface-container-highest hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-sm bg-surface-container-lowest border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface text-lg">hub</span>
</div>
<div>
<h3 className="text-on-surface font-semibold tracking-wide">JAMS_ARBITRATION_PORTAL</h3>
<p className="text-on-surface-variant text-[10px] mt-0.5">Sync dispute resolution data</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-[#00D4AA] flex items-center gap-1.5 text-[10px] tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] block shadow-[0_0_8px_#00D4AA]"></span> ACTIVE
                            </span>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">settings</span>
</button>
</div>
</div>
{/* Legal Mediate */}
<div className="flex items-center justify-between p-4 border-b border-surface-container-highest hover:bg-surface-container-low transition-colors opacity-75">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-sm bg-surface-container-lowest border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface text-lg">balance</span>
</div>
<div>
<h3 className="text-on-surface font-semibold tracking-wide">LEGAL_MEDIATE_CONNECT</h3>
<p className="text-on-surface-variant text-[10px] mt-0.5">Automated claim routing</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-on-surface-variant flex items-center gap-1.5 text-[10px] tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant block"></span> OFFLINE
                            </span>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">power_settings_new</span>
</button>
</div>
</div>
{/* External Storage */}
<div className="flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-sm bg-surface-container-lowest border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface text-lg">cloud_queue</span>
</div>
<div>
<h3 className="text-on-surface font-semibold tracking-wide">SECURE_CLOUD_VAULT</h3>
<p className="text-on-surface-variant text-[10px] mt-0.5">Encrypted document backup</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-[#00D4AA] flex items-center gap-1.5 text-[10px] tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] block shadow-[0_0_8px_#00D4AA]"></span> ACTIVE
                            </span>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">settings</span>
</button>
</div>
</div>
</div>
</section>
{/* Notification Protocols */}
<section className="md:col-span-5 bg-surface border border-outline-variant rounded-sm overflow-hidden">
<div className="p-3 border-b border-outline-variant bg-surface-container flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-sm">notifications_active</span>
<h2 className="font-label-caps text-label-caps text-on-surface tracking-widest">[ NOTIFICATION_PROTOCOLS ]</h2>
</div>
<div className="p-5 space-y-6">
<div className="flex items-start justify-between gap-4">
<div>
<h4 className="font-mono-data text-xs text-on-surface font-semibold tracking-wide">CRITICAL_INCIDENT_ALERTS</h4>
<p className="font-mono-data text-[10px] text-on-surface-variant mt-1.5 leading-relaxed max-w-[200px]">Immediate push notifications for safety breaches or structural failures.</p>
</div>
<div className="relative inline-block w-11 mt-1 align-middle select-none">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-sm bg-white border-4 border-surface-container-highest appearance-none cursor-pointer z-10 opacity-0" id="toggle1" name="toggle1" type="checkbox" />
<label className="toggle-label block overflow-hidden" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h4 className="font-mono-data text-xs text-on-surface font-semibold tracking-wide">CLAIM_STATUS_UPDATES</h4>
<p className="font-mono-data text-[10px] text-on-surface-variant mt-1.5 leading-relaxed max-w-[200px]">Daily digest of mediation and arbitration progression.</p>
</div>
<div className="relative inline-block w-11 mt-1 align-middle select-none">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-sm bg-white border-4 border-surface-container-highest appearance-none cursor-pointer z-10 opacity-0" id="toggle2" name="toggle2" type="checkbox" />
<label className="toggle-label block overflow-hidden" htmlFor="toggle2"></label>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h4 className="font-mono-data text-xs text-on-surface font-semibold tracking-wide">SYSTEM_MAINTENANCE</h4>
<p className="font-mono-data text-[10px] text-on-surface-variant mt-1.5 leading-relaxed max-w-[200px]">Scheduled downtime and platform update warnings.</p>
</div>
<div className="relative inline-block w-11 mt-1 align-middle select-none">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-sm bg-white border-4 border-surface-container-highest appearance-none cursor-pointer z-10 opacity-0" id="toggle3" name="toggle3" type="checkbox" />
<label className="toggle-label block overflow-hidden" htmlFor="toggle3"></label>
</div>
</div>
</div>
</section>
</div>
</main>
    </div>
  );
}

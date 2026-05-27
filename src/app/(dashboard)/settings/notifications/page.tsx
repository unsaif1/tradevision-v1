export default function SettingsNotificationsPage() {
  return (
    <div className="bg-surface-base text-on-surface font-body-md min-h-screen pb-24 md:pb-0 pt-header_height">
{/* TopAppBar */}
<header className="bg-surface dark:bg-surface text-primary dark:text-primary docked full-width top-0 border-b border-outline-variant dark:border-outline-variant flat no shadows fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin h-header_height">
<div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary" data-icon="terminal">terminal</span><span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">ROOF_COMMAND_v1.0</span></div>
<div className="flex items-center gap-4">
{/* Desktop Nav Cluster */}
<nav className="hidden md:flex items-center gap-6 mr-6">
<a className="text-on-surface-variant hover:bg-surface-container-highest transition-colors flex items-center gap-2 py-2 px-3 rounded" href="#">
<span className="material-symbols-outlined text-xl">terminal</span>
<span className="font-label-caps text-label-caps">Command</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-highest transition-colors flex items-center gap-2 py-2 px-3 rounded" href="#">
<span className="material-symbols-outlined text-xl">construction</span>
<span className="font-label-caps text-label-caps">Projects</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-highest transition-colors flex items-center gap-2 py-2 px-3 rounded" href="#">
<span className="material-symbols-outlined text-xl">assignment_late</span>
<span className="font-label-caps text-label-caps">Claims</span>
</a>
<a className="text-on-surface-variant hover:bg-surface-container-highest transition-colors flex items-center gap-2 py-2 px-3 rounded" href="#">
<span className="material-symbols-outlined text-xl">notifications_active</span>
<span className="font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1">Alerts</span>
</a>
<a className="text-primary hover:bg-surface-container-highest transition-colors flex items-center gap-2 py-2 px-3 rounded" href="#">
<span className="material-symbols-outlined text-xl">manage_accounts</span>
<span className="font-label-caps text-label-caps">Account</span>
</a>
</nav>
<img alt="user_profile_avatar" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSxo6jJ4ce20p-ahWRAwBbcfS5qtwDaExxSgam0BMxKKGm--7Ly_hlFmBYaQD1a-bJScwFbLva7uwlX_B_dsF7xQzpDjSL9MzUYQLz-IMMFQkZA43svdZU_YsUmeTSjYpmu6a04HOew8sYtrgVQ__2YJYfsh6nuqy6OjSmd16jGrsZlL0Ar6HmwsILCFZtZt80XT6ulirOdtsSLWWdblBOSxsSG0xv-OVd9fqyLI9srYDhSuilTVOZ5pzJ3ZmZk-iaqrvUjUlmALVM" />
</div>
</header>
{/* Main Content Canvas */}
<main className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8">
{/* Page Header */}
<div className="mb-8"><div className="flex flex-col gap-1"><h1 className="font-label-caps text-headline-lg text-primary uppercase">[ PREFERENCE_CONFIG ]</h1><p className="font-caption text-caption text-text-muted">Configure real-time telemetry alerts and node updates.</p></div></div>
{/* Global Settings Section */}
<section className="bg-surface-elevated border-t-2 border-neon-blue rounded p-6">
<h2 className="font-headline-lg text-headline-lg text-neon-blue mb-4 flex items-center gap-2"><span className="font-label-caps text-label-caps text-neon-blue uppercase">[ NODE_CONTACTS ]</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block font-label-caps text-label-caps text-text-muted mb-2">PRIMARY EMAIL</label>
<div className="relative">
<input className="w-full bg-surface-container-low border border-surface-stroke rounded px-4 py-2 text-on-surface font-body-md focus:outline-none focus:border-neon-blue transition-colors font-mono" readOnly type="email" value="user@tradevision.corp" />
<span className="material-symbols-outlined absolute right-3 top-2.5 text-neon-green text-lg">check_circle</span>
</div>
</div>
<div>
<label className="block font-label-caps text-label-caps text-text-muted mb-2">PRIMARY PHONE (SMS)</label>
<div className="relative">
<input className="w-full bg-surface-container-low border border-surface-stroke rounded px-4 py-2 text-on-surface font-body-md focus:outline-none focus:border-neon-blue transition-colors font-mono" readOnly type="tel" value="+1 (555) 019-2834" />
<span className="material-symbols-outlined absolute right-3 top-2.5 text-text-muted text-lg hover:text-neon-pink cursor-pointer transition-colors">edit</span>
</div>
</div>
</div>
</section>
{/* Preference Categories */}
<div className="space-y-6">
{/* Category: Claim Status Updates */}
<div className="bg-surface-elevated border border-surface-stroke rounded overflow-hidden">
<div className="bg-surface-container px-6 py-4 border-b border-surface-stroke flex justify-between items-center"><h3 className="font-label-caps text-label-caps text-on-surface uppercase">[ CLAIM_ALERTS ]</h3></div>
<div className="divide-y divide-surface-stroke">
{/* Item */}
<div className="p-6 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-surface-container-low transition-colors">
<div>
<div className="font-label-caps text-label-caps text-on-surface text-lg mb-1">New Claim Assigned<div className="flex gap-3 mt-1"><span className="font-label-caps text-[10px] text-primary/70 uppercase">FREQ: REAL-TIME</span><span className="font-label-caps text-[10px] text-neon-blue uppercase">PRIORITY: HIGH</span></div></div>
<div className="font-caption text-caption text-text-muted">Notifies you when a new claim is routed to your queue.</div>
<div className="flex gap-3 mt-1"><span className="font-label-caps text-[10px] text-primary/70 uppercase">FREQ: REAL-TIME</span><span className="font-label-caps text-[10px] text-neon-blue uppercase">PRIORITY: HIGH</span></div></div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-text-muted text-sm">mail</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="email-claim-new" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="email-claim-new"></label>
</div>
<div className="flex gap-3 mt-1"><span className="font-label-caps text-[10px] text-primary/70 uppercase">FREQ: REAL-TIME</span><span className="font-label-caps text-[10px] text-neon-blue uppercase">PRIORITY: HIGH</span></div></div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-text-muted text-sm">sms</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="sms-claim-new" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="sms-claim-new"></label>
</div>
</div>
</div>
</div>
{/* Item */}
<div className="p-6 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-surface-container-low transition-colors">
<div>
<div className="font-label-caps text-label-caps text-on-surface text-lg mb-1">Status Change<div className="flex gap-3 mt-1"><span className="font-label-caps text-[10px] text-primary/70 uppercase">FREQ: REAL-TIME</span><span className="font-label-caps text-[10px] text-neon-blue uppercase">PRIORITY: HIGH</span></div></div>
<div className="font-caption text-caption text-text-muted">Alerts when a claim moves (e.g., Pending to Approved).</div>
<div className="flex gap-3 mt-1"><span className="font-label-caps text-[10px] text-primary/70 uppercase">FREQ: REAL-TIME</span><span className="font-label-caps text-[10px] text-neon-blue uppercase">PRIORITY: HIGH</span></div></div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-text-muted text-sm">mail</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="email-claim-status" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="email-claim-status"></label>
</div>
<div className="flex gap-3 mt-1"><span className="font-label-caps text-[10px] text-primary/70 uppercase">FREQ: REAL-TIME</span><span className="font-label-caps text-[10px] text-neon-blue uppercase">PRIORITY: HIGH</span></div></div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-text-muted text-sm">sms</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="sms-claim-status" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="sms-claim-status"></label>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Category: Document Requests */}
<div className="bg-surface-elevated border border-surface-stroke rounded overflow-hidden">
<div className="bg-surface-container px-6 py-4 border-b border-surface-stroke flex justify-between items-center"><h3 className="font-label-caps text-label-caps text-on-surface uppercase">[ CLAIM_ALERTS ]</h3></div>
<div className="divide-y divide-surface-stroke">
{/* Item */}
<div className="p-6 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-surface-container-low transition-colors">
<div>
<div className="font-label-caps text-label-caps text-on-surface text-lg mb-1">Missing Documentation<div className="flex gap-3 mt-1"><span className="font-label-caps text-[10px] text-primary/70 uppercase">FREQ: REAL-TIME</span><span className="font-label-caps text-[10px] text-neon-blue uppercase">PRIORITY: HIGH</span></div></div>
<div className="font-caption text-caption text-text-muted">Immediate alert when required files are missing.</div>
<div className="flex gap-3 mt-1"><span className="font-label-caps text-[10px] text-primary/70 uppercase">FREQ: REAL-TIME</span><span className="font-label-caps text-[10px] text-neon-blue uppercase">PRIORITY: HIGH</span></div></div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-text-muted text-sm">mail</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="email-doc-missing" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="email-doc-missing"></label>
</div>
<div className="flex gap-3 mt-1"><span className="font-label-caps text-[10px] text-primary/70 uppercase">FREQ: REAL-TIME</span><span className="font-label-caps text-[10px] text-neon-blue uppercase">PRIORITY: HIGH</span></div></div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-text-muted text-sm">sms</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="sms-doc-missing" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="sms-doc-missing"></label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Action Area */}
<div className="pt-6 flex gap-4 border-t border-surface-stroke"><button className="w-full py-4 bg-surface-container-high border border-outline-variant text-text-muted font-label-caps text-label-caps uppercase hover:bg-surface-variant transition-colors">Discard Changes</button><button className="w-full py-4 bg-primary-container text-white font-label-caps text-label-caps uppercase hover:brightness-110 transition-all shadow-[0_0_20px_rgba(226,30,81,0.2)]">Commit Preferences</button></div>
</main>
{/* BottomNavBar (Mobile Only) */}
<nav className="md:hidden bg-surface-container-low dark:bg-surface-container-low border-t border-outline-variant dark:border-outline-variant flat no shadows fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 h-16 pb-safe">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant pt-1 hover:text-primary-fixed-dim transition-colors active:scale-95 transition-transform duration-150 w-full" href="#">
<span className="material-symbols-outlined text-2xl mb-1" data-icon="terminal">terminal</span>
<span className="font-label-caps text-label-caps text-[10px]">Command</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant pt-1 hover:text-primary-fixed-dim transition-colors active:scale-95 transition-transform duration-150 w-full" href="#">
<span className="material-symbols-outlined text-2xl mb-1" data-icon="construction">construction</span>
<span className="font-label-caps text-label-caps text-[10px]">Projects</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant pt-1 hover:text-primary-fixed-dim transition-colors active:scale-95 transition-transform duration-150 w-full" href="#">
<span className="material-symbols-outlined text-2xl mb-1" data-icon="assignment_late">assignment_late</span>
<span className="font-label-caps text-label-caps text-[10px]">Claims</span>
</a>
<a className="flex flex-col items-center justify-center text-primary dark:text-primary border-t-2 border-primary pt-1 hover:text-primary-fixed-dim transition-colors active:scale-95 transition-transform duration-150 w-full" href="#">
<span className="material-symbols-outlined text-2xl mb-1" data-icon="manage_accounts">manage_accounts</span>
<span className="font-label-caps text-label-caps text-[10px]">Account</span>
</a>
</nav>
    </div>
  );
}

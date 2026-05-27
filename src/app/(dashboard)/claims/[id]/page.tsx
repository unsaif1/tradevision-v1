"use client";

import React from "react";

export default function ClaimDetail() {
  return (
<div className="w-full max-w-md bg-surface-deep h-screen flex flex-col relative overflow-hidden shadow-2xl sm:border-x sm:border-border-subtle">

<header className="h-16 shrink-0 bg-surface/90 backdrop-blur-md border-b border-border-subtle flex items-center px-4 sticky top-0 z-50">
<button aria-label="Go back" className="w-10 h-10 flex items-center justify-center -ml-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-surface-container-highest transition-colors active:scale-95">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'wght' 300"}}>arrow_back</span>
</button>
<div className="ml-2 flex flex-col justify-center">
<span className="font-label-sm text-label-sm text-text-secondary uppercase tracking-widest">Incident File</span>
<span className="font-headline-md text-headline-md text-text-primary leading-tight">CLM-894-XQ</span>
</div>
<div className="ml-auto flex items-center gap-2 bg-surface-container-highest px-3 py-1.5 rounded-full border border-border-subtle">

<span className="w-2 h-2 rounded-full bg-accent-active shadow-[0_0_8px_rgba(226,30,81,0.8)] animate-pulse"></span>
<span className="font-label-sm text-label-sm text-text-primary uppercase tracking-wide">Review</span>
</div>
</header>

<main className="flex-1 overflow-y-auto pb-24">

<section className="m-4 p-5 rounded-lg bg-surface border border-border-subtle relative overflow-hidden">

<div className="absolute -right-12 -top-12 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute right-0 top-0 w-16 h-16 bg-[radial-gradient(circle_at_center,_rgba(136,150,168,0.1)_1px,_transparent_1px)] bg-[size:4px_4px] opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<h1 className="font-headline-lg text-headline-lg text-text-primary mb-1">Structural Integrity Failure</h1>
<div className="flex items-center gap-2 text-text-secondary mb-6">
<span className="material-symbols-outlined text-[16px]">location_on</span>
<span className="font-body-sm text-body-sm">Sector 7G, Primary Coolant Tower</span>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-2 border-t border-border-subtle pt-4">
<div>
<span className="block font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-0.5">Recorded Vector</span>
<span className="block font-body-sm text-body-sm text-text-primary">2023-10-24 08:45:00Z</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-0.5">Primary Analyst</span>
<span className="block font-body-sm text-body-sm text-text-primary">Dr. E. Vance</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-0.5">Risk Exposure</span>
<span className="block font-body-sm text-body-sm text-primary font-medium">Critical / Tier 1</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-0.5">Telemetry Status</span>
<span className="block font-body-sm text-body-sm text-text-primary">Online (Degraded)</span>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="px-4 mb-3 flex items-end justify-between">
<h2 className="font-headline-md text-headline-md text-text-primary">DOCUMENTATION STACK</h2>
<span className="font-label-sm text-label-sm text-text-secondary">3 ITEMS</span>
</div>
<div className="mx-4 border border-border-subtle rounded-lg bg-surface overflow-hidden">

<div className="group flex items-start gap-3 p-4 border-b border-border-subtle last:border-0 hover:bg-surface-container-highest/30 transition-colors">
<div className="w-10 h-10 shrink-0 rounded bg-surface-container-highest border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\'FILL\' 1" }}>description</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-label-md text-label-md text-text-primary truncate pr-2">incident_report_final_signed.pdf</h3>
<span className="font-label-sm text-label-sm text-text-secondary shrink-0">4.2 MB</span>
</div>
<div className="flex items-center justify-between bg-surface-deep px-2 py-1.5 rounded border border-border-subtle mt-2">
<code className="font-mono text-[10px] text-text-secondary truncate pr-2 tracking-tighter">SHA256: 8f4e9a3b...2c1d5e6f</code>
<button aria-label="Copy Hash" className="text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[14px]">content_copy</span>
</button>
</div>
</div>
</div>

<div className="group flex items-start gap-3 p-4 border-b border-border-subtle last:border-0 hover:bg-surface-container-highest/30 transition-colors">
<div className="w-10 h-10 shrink-0 rounded bg-surface-container-highest border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\'FILL\' 1" }}>image</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-label-md text-label-md text-text-primary truncate pr-2">drone_survey_fracture_site.jpg</h3>
<span className="font-label-sm text-label-sm text-text-secondary shrink-0">12.8 MB</span>
</div>
<div className="flex items-center justify-between bg-surface-deep px-2 py-1.5 rounded border border-border-subtle mt-2">
<code className="font-mono text-[10px] text-text-secondary truncate pr-2 tracking-tighter">SHA256: d4735e3a...9f11a2b0</code>
<button aria-label="Copy Hash" className="text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[14px]">content_copy</span>
</button>
</div>
</div>
</div>

<div className="group flex items-start gap-3 p-4 border-b border-border-subtle last:border-0 hover:bg-surface-container-highest/30 transition-colors">
<div className="w-10 h-10 shrink-0 rounded bg-surface-container-highest border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\'FILL\' 1" }}>terminal</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-label-md text-label-md text-text-primary truncate pr-2">sensor_telemetry_dump.json</h3>
<span className="font-label-sm text-label-sm text-text-secondary shrink-0">845 KB</span>
</div>
<div className="flex items-center justify-between bg-surface-deep px-2 py-1.5 rounded border border-border-subtle mt-2">
<code className="font-mono text-[10px] text-text-secondary truncate pr-2 tracking-tighter">SHA256: 1a9b2c3d...4e5f6g7h</code>
<button aria-label="Copy Hash" className="text-text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[14px]">content_copy</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8 mb-6">
<div className="px-4 mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-text-secondary text-[20px]">history</span>
<h2 className="font-headline-md text-headline-md text-text-primary">AUDIT TRAIL</h2>
</div>
<div className="mx-4 relative">

<div className="absolute left-[11px] top-3 bottom-3 w-px bg-border-subtle"></div>
<div className="space-y-6">

<div className="relative pl-8">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-deep border border-border-subtle flex items-center justify-center z-10">
<div className="w-2.5 h-2.5 rounded-full bg-accent-active shadow-[0_0_6px_rgba(226,30,81,0.8)]"></div>
</div>
<div className="bg-surface border border-border-subtle rounded-lg p-3">
<div className="flex justify-between items-start mb-1">
<h3 className="font-label-md text-label-md text-text-primary">Legal Review Started</h3>
<span className="font-label-sm text-label-sm text-text-secondary whitespace-nowrap ml-2">Today, 14:30</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary">Assigned to External Counsel group (ID: GRP-442) for preliminary liability assessment.</p>
</div>
</div>

<div className="relative pl-8">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-deep border border-border-subtle flex items-center justify-center z-10">
<div className="w-2 h-2 rounded-full bg-text-secondary"></div>
</div>
<div className="bg-surface/50 border border-border-subtle rounded-lg p-3">
<div className="flex justify-between items-start mb-1">
<h3 className="font-label-md text-label-md text-text-primary">Metadata Validated</h3>
<span className="font-label-sm text-label-sm text-text-secondary whitespace-nowrap ml-2">Yesterday, 09:15</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary">Automated system verified cryptographic hashes against origin chain.</p>
</div>
</div>

<div className="relative pl-8">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-deep border border-border-subtle flex items-center justify-center z-10">
<div className="w-2 h-2 rounded-full bg-text-secondary"></div>
</div>
<div className="bg-surface/50 border border-border-subtle rounded-lg p-3">
<div className="flex justify-between items-start mb-1">
<h3 className="font-label-md text-label-md text-text-primary">Evidence Ingested</h3>
<span className="font-label-sm text-label-sm text-text-secondary whitespace-nowrap ml-2">Oct 24, 08:45</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary">Initial packet received from field operative terminal.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="absolute bottom-0 left-0 w-full bg-surface/95 backdrop-blur-md border-t border-border-subtle p-4 pb-safe flex gap-3 z-50">
<button className="flex-1 bg-surface-container-highest text-text-primary border border-border-subtle font-label-md text-label-md h-12 rounded-lg flex items-center justify-center gap-2 hover:bg-surface-bright transition-colors active:scale-[0.98]">
<span className="material-symbols-outlined text-[18px]">gavel</span>
                ESCALATE
            </button>
<button className="flex-[2] bg-primary-container text-text-primary font-label-md text-label-md h-12 rounded-lg flex items-center justify-center gap-2 hover:bg-inverse-primary transition-colors active:scale-[0.98]">
<span className="material-symbols-outlined text-[18px]">verified</span>
                ACKNOWLEDGE
            </button>
</div>
</div>
  );
}

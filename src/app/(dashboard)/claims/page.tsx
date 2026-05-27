"use client";

import React from "react";

export default function Claims() {
  return (
<div className="min-h-screen flex flex-col">
<header className="bg-surface border-b border-outline-variant fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin h-[64px] shadow-sm">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-primary text-2xl hover:bg-surface-container-highest transition-colors rounded p-1 cursor-pointer" style={{ fontVariationSettings: "\'FILL\' 1" }}>grid_view</span>
<h1 className="font-headline-md text-headline-md font-bold tracking-tighter text-primary truncate">TRADEVISION C.A.R.E.</h1>
</div>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-surface-muted border border-border-subtle flex items-center justify-center overflow-hidden hover:bg-surface-container-highest transition-colors cursor-pointer">
<span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
</div>
</div>
</header>

<main className="pt-[64px] pb-[80px] md:pb-lg w-full max-w-[1440px] mx-auto flex flex-col">

<section className="sticky top-[64px] z-40 bg-surface/80 backdrop-blur-[12px] px-margin py-base border-b border-subtle flex gap-base">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-lg">search</span>
<input className="w-full bg-surface-deep border border-border-subtle rounded-lg text-body-sm font-body-sm text-text-primary pl-10 pr-4 py-2 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-shadow placeholder:text-text-secondary" placeholder="Search claims, IDs, or projects..." type="text"/>
</div>
<button className="bg-surface-muted border border-border-subtle rounded-lg px-3 py-2 flex items-center justify-center hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-text-primary text-lg">tune</span>
</button>
</section>

<section className="flex flex-col mt-4">
<div className="px-margin flex justify-between items-end mb-base">
<h2 className="font-headline-md text-headline-md text-text-primary">Documentation</h2>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider cursor-pointer hover:opacity-80">View All</span>
</div>
<div className="flex overflow-x-auto no-scrollbar px-margin gap-base pb-md snap-x">

<div className="min-w-[160px] bg-surface-muted border border-border-subtle rounded-lg p-md flex flex-col gap-sm snap-start cursor-pointer hover:bg-surface-container-highest transition-colors active:scale-95">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded bg-tertiary-fixed/10 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "\'FILL\' 1" }}>folder_open</span>
</div>
<span className="font-label-sm text-label-sm text-text-secondary bg-surface-deep px-2 py-1 rounded">12</span>
</div>
<div className="mt-2">
<h3 className="font-body-sm text-body-sm text-text-primary font-medium">Site Audits</h3>
<p className="font-label-sm text-label-sm text-text-secondary mt-1">Updated 2h ago</p>
</div>
</div>

<div className="min-w-[160px] bg-surface-muted border border-border-subtle rounded-lg p-md flex flex-col gap-sm snap-start cursor-pointer hover:bg-surface-container-highest transition-colors active:scale-95">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded bg-primary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container text-xl" style={{ fontVariationSettings: "\'FILL\' 1" }}>policy</span>
</div>
<span className="font-label-sm text-label-sm text-text-secondary bg-surface-deep px-2 py-1 rounded">4</span>
</div>
<div className="mt-2">
<h3 className="font-body-sm text-body-sm text-text-primary font-medium">Compliance</h3>
<p className="font-label-sm text-label-sm text-text-secondary mt-1">Action Req.</p>
</div>
</div>

<div className="min-w-[160px] bg-surface-muted border border-border-subtle rounded-lg p-md flex flex-col gap-sm snap-start cursor-pointer hover:bg-surface-container-highest transition-colors active:scale-95">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded bg-secondary-fixed/10 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "\'FILL\' 1" }}>receipt_long</span>
</div>
<span className="font-label-sm text-label-sm text-text-secondary bg-surface-deep px-2 py-1 rounded">28</span>
</div>
<div className="mt-2">
<h3 className="font-body-sm text-body-sm text-text-primary font-medium">Invoices</h3>
<p className="font-label-sm text-label-sm text-text-secondary mt-1">Updated 1d ago</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col mt-2">
<div className="px-margin flex justify-between items-end mb-md">
<h2 className="font-headline-md text-headline-md text-text-primary">Recent Claims</h2>
<div className="flex items-center gap-1 text-text-secondary cursor-pointer hover:text-text-primary transition-colors">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Sort: Newest</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-xs px-margin">

<div className="bg-surface-deep border border-border-subtle rounded-lg p-md flex flex-col gap-md relative overflow-hidden group hover:border-outline-variant transition-colors cursor-pointer">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container opacity-80"></div>
<div className="flex justify-between items-start pl-2">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-text-secondary font-mono tracking-wider">CLM-2024-089</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container-highest px-2 py-1 rounded border border-border-subtle">
<div className="w-1.5 h-1.5 rounded-full bg-primary-container"></div>
<span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">FLAG_REQ</span>
</div>
</div>
<div className="pl-2">
<h3 className="font-body-lg text-body-lg text-text-primary font-medium leading-tight mb-1">Structural Integrity Failure - Sector 4</h3>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-text-secondary text-sm">construction</span>
<span className="font-body-sm text-body-sm text-text-secondary">PRJ-Alpha</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-text-secondary text-sm">calendar_today</span>
<span className="font-body-sm text-body-sm text-text-secondary">Oct 24, 2024</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-muted border border-border-subtle rounded-lg p-md flex flex-col gap-md relative overflow-hidden group hover:border-outline-variant transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-text-secondary font-mono tracking-wider">CLM-2024-088</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container-highest px-2 py-1 rounded border border-border-subtle">
<div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">PENDING</span>
</div>
</div>
<div>
<h3 className="font-body-lg text-body-lg text-text-primary font-medium leading-tight mb-1">Material Defect Report - Bulk Delivery</h3>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-text-secondary text-sm">construction</span>
<span className="font-body-sm text-body-sm text-text-secondary">PRJ-Beta</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-text-secondary text-sm">calendar_today</span>
<span className="font-body-sm text-body-sm text-text-secondary">Oct 22, 2024</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-deep border border-border-subtle rounded-lg p-md flex flex-col gap-md relative overflow-hidden group hover:border-outline-variant transition-colors cursor-pointer opacity-70 hover:opacity-100">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-text-secondary font-mono tracking-wider">CLM-2024-081</span>
</div>
<div className="flex items-center gap-1.5 bg-surface-container-highest px-2 py-1 rounded border border-border-subtle">
<div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
<span className="font-label-sm text-label-sm text-[#4ADE80] uppercase tracking-widest">VERIFIED</span>
</div>
</div>
<div>
<h3 className="font-body-lg text-body-lg text-text-secondary font-medium leading-tight mb-1 line-through decoration-text-secondary/50">Logistical Delay Compensation</h3>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-text-secondary text-sm">construction</span>
<span className="font-body-sm text-body-sm text-text-secondary">PRJ-Gamma</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-text-secondary text-sm">calendar_today</span>
<span className="font-body-sm text-body-sm text-text-secondary">Oct 15, 2024</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<button className="fixed bottom-[80px] right-margin z-50 bg-primary-container text-on-primary-container rounded-full w-14 h-14 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] active:scale-95 transition-transform md:bottom-margin">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "\'FILL\' 1" }}>add</span>
</button>

<nav className="bg-surface-container-low border-t border-outline-variant fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 h-16 pb-safe md:hidden">

<div className="flex flex-col items-center justify-center text-on-surface-variant pt-1 hover:text-primary-fixed-dim transition-colors active:scale-95 duration-150 cursor-pointer w-16">
<span className="material-symbols-outlined text-xl mb-1">terminal</span>
<span className="font-label-sm text-label-sm text-center">Command</span>
</div>

<div className="flex flex-col items-center justify-center text-on-surface-variant pt-1 hover:text-primary-fixed-dim transition-colors active:scale-95 duration-150 cursor-pointer w-16">
<span className="material-symbols-outlined text-xl mb-1">construction</span>
<span className="font-label-sm text-label-sm text-center">Projects</span>
</div>

<div className="flex flex-col items-center justify-center text-primary border-t-2 border-primary pt-1 hover:text-primary-fixed-dim transition-colors active:scale-95 duration-150 cursor-pointer w-16 -mt-[2px]">
<span className="material-symbols-outlined text-xl mb-1" style={{ fontVariationSettings: "\'FILL\' 1" }}>assignment_late</span>
<span className="font-label-sm text-label-sm text-center font-bold">Claims</span>
</div>

<div className="flex flex-col items-center justify-center text-on-surface-variant pt-1 hover:text-primary-fixed-dim transition-colors active:scale-95 duration-150 cursor-pointer w-16">
<span className="material-symbols-outlined text-xl mb-1">notifications_active</span>
<span className="font-label-sm text-label-sm text-center">Alerts</span>
</div>

<div className="flex flex-col items-center justify-center text-on-surface-variant pt-1 hover:text-primary-fixed-dim transition-colors active:scale-95 duration-150 cursor-pointer w-16">
<span className="material-symbols-outlined text-xl mb-1">manage_accounts</span>
<span className="font-label-sm text-label-sm text-center">Account</span>
</div>
</nav>
  </div>
);
}
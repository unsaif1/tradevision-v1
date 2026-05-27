export default function EvidenceReviewPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
{/* TopAppBar Suppressed as this is a transactional flow (Submission Review Step 2 of 2) */}
<header className="bg-surface border-b border-surface-container flex justify-between items-center w-full px-lg py-md max-w-[1440px] mx-auto h-header_height">
<div className="flex items-center gap-4">
<button aria-label="Go back" className="text-on-surface-variant hover:text-primary-container transition-colors p-2 flex items-center justify-center rounded-full hover:bg-surface-bright/10">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<div>
<h1 className="font-headline-sm text-headline-sm text-on-surface">Submission Review</h1>
<p className="font-body-md text-body-md text-on-surface-variant text-xs">Step 2 of 2: Details & Certification</p>
</div>
</div>
<div className="font-headline-md text-headline-md font-bold text-primary-container tracking-tight">
            TradeVision C.A.R.E.
        </div>
</header>
{/* Main Content Canvas */}
<main className="flex-1 overflow-y-auto px-gutter py-margin max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-gutter">
{/* Left Column: File Preview (Bento Item) */}
<div className="col-span-12 md:col-span-5 flex flex-col gap-4">
<div className="bg-[#1a1f26] border border-[#2a323d] rounded-lg flex flex-col overflow-hidden h-[500px]">
<div className="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-[#2a323d]">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-secondary" data-icon="image">image</span>
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">File Preview</span>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant">IMG_8921_SITE_A.jpg</span>
</div>
<div className="flex-1 bg-surface-dim relative flex items-center justify-center p-4">
{/* Image Placeholder */}
<div className="absolute inset-0 bg-surface-container-low" data-alt="A highly detailed, professional photograph of a commercial construction site showing exposed steel beams and concrete foundations. The image has a technical, industrial aesthetic with a slightly cool color grading to match a dark mode command center environment. Focus is sharp on the structural elements, demonstrating high-quality evidence capture suitable for analytical review." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGzt9T-m8lX-gyQt__ZXvadCmsoE7tUnTmKG5EYQj35gcUBZG-WMCQN8Tssj7BVy_fZk_PfXPA4BR1er-EuXAz8rfup4Hlx8D4fp1oR_UVYw1eGqv7y1UepIHc5IG2c9O8xnQHavTn3xq1dHusU41xCLBMz0ers7GmIeq5OyJnG-4W6TVh5VBUCYYzAYCjbNxqeFN8iZOTl9yzo9RHtGgwjwY53Dxt6PtgAxuCPRR9yRGLFk9XNQPa_KOaEk45AirrB8yJYSm104Hr')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
</div>
{/* Overlay Controls */}
<div className="absolute bottom-4 right-4 flex gap-2">
<button className="bg-surface/80 backdrop-blur-sm border border-[#2a323d] p-2 rounded text-on-surface hover:text-primary-container transition-colors">
<span className="material-symbols-outlined" data-icon="zoom_in">zoom_in</span>
</button>
<button className="bg-surface/80 backdrop-blur-sm border border-[#2a323d] p-2 rounded text-on-surface hover:text-primary-container transition-colors">
<span className="material-symbols-outlined" data-icon="crop">crop</span>
</button>
</div>
<div className="absolute top-4 left-4 flex flex-col gap-1 pointer-events-none"><div className="bg-surface/60 backdrop-blur-md px-2 py-1 rounded border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span><span className="font-mono-data text-[10px] text-white uppercase">Verification Hash: 8E92...F2A</span></div><div className="bg-surface/60 backdrop-blur-md px-2 py-1 rounded border border-white/10 flex items-center gap-2"><span className="font-mono-data text-[10px] text-white uppercase">Quality Score: 98.4%</span></div></div></div>
<div className="bg-surface-container-high px-4 py-3 flex items-center justify-between border-t border-[#2a323d] text-xs text-on-surface-variant font-mono-data">
<span>Size: 4.2 MB</span>
<span>Res: 4032x3024</span>
</div>
</div>
</div>
{/* Right Column: Form Data (Bento Item) */}
<div className="col-span-12 md:col-span-7 flex flex-col gap-6">
<div className="bg-[#1a1f26] border border-[#2a323d] rounded-lg p-6">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-6 border-b border-[#2a323d] pb-2">Evidence Metadata</h2>
<form className="space-y-6">
{/* Category Dropdown */}
<div>
<label className="block font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-2" htmlFor="category">Category Classification <span className="text-primary-container">*</span></label>
<div className="relative"><label className="block font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-3">Hardware Sensor Readout (EXIF)</label><div className="grid grid-cols-2 gap-2 bg-surface-container-lowest p-3 rounded border border-outline-variant/10"><div className="flex flex-col gap-1"><span className="text-[10px] text-on-surface-variant uppercase font-label-caps">Temporal Stamp</span><span className="font-mono-data text-xs text-primary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="schedule">schedule</span> 2023-10-24 14:32:00Z</span></div><div className="flex flex-col gap-1"><span className="text-[10px] text-on-surface-variant uppercase font-label-caps">Geo-Coordinates</span><span className="font-mono-data text-xs text-primary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span> 40.7128° N, 74.0060° W</span></div><div className="flex flex-col gap-1 col-span-2 mt-2 pt-2 border-t border-outline-variant/10"><span className="text-[10px] text-on-surface-variant uppercase font-label-caps">Capture Device</span><span className="font-mono-data text-xs text-secondary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="devices">devices</span> Apple iPhone 13 Pro (v15.4.1)</span></div></div></div>
</div>
{/* Evidence Description */}
<div>
<label className="block font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-2" htmlFor="description">Detailed Description <span className="text-primary-container">*</span></label>
<textarea className="w-full bg-surface border border-[#2a323d] text-on-surface font-body-md text-body-md rounded px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors resize-y" id="description" name="description" placeholder="Provide a detailed, objective description of the evidence..." rows={4}></textarea>
<div className="mt-1 flex justify-between font-mono-data text-[10px] text-on-surface-variant"><label className="block font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-3">Hardware Sensor Readout (EXIF)</label><div className="grid grid-cols-2 gap-2 bg-surface-container-lowest p-3 rounded border border-outline-variant/10"><div className="flex flex-col gap-1"><span className="text-[10px] text-on-surface-variant uppercase font-label-caps">Temporal Stamp</span><span className="font-mono-data text-xs text-primary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="schedule">schedule</span> 2023-10-24 14:32:00Z</span></div><div className="flex flex-col gap-1"><span className="text-[10px] text-on-surface-variant uppercase font-label-caps">Geo-Coordinates</span><span className="font-mono-data text-xs text-primary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span> 40.7128° N, 74.0060° W</span></div><div className="flex flex-col gap-1 col-span-2 mt-2 pt-2 border-t border-outline-variant/10"><span className="text-[10px] text-on-surface-variant uppercase font-label-caps">Capture Device</span><span className="font-mono-data text-xs text-secondary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="devices">devices</span> Apple iPhone 13 Pro (v15.4.1)</span></div></div></div>
</div>
{/* Additional Tags (Read-only / Auto-extracted) */}
<div><label className="block font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-3">Hardware Sensor Readout (EXIF)</label><div className="grid grid-cols-2 gap-2 bg-surface-container-lowest p-3 rounded border border-outline-variant/10"><div className="flex flex-col gap-1"><span className="text-[10px] text-on-surface-variant uppercase font-label-caps">Temporal Stamp</span><span className="font-mono-data text-xs text-primary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="schedule">schedule</span> 2023-10-24 14:32:00Z</span></div><div className="flex flex-col gap-1"><span className="text-[10px] text-on-surface-variant uppercase font-label-caps">Geo-Coordinates</span><span className="font-mono-data text-xs text-primary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span> 40.7128° N, 74.0060° W</span></div><div className="flex flex-col gap-1 col-span-2 mt-2 pt-2 border-t border-outline-variant/10"><span className="text-[10px] text-on-surface-variant uppercase font-label-caps">Capture Device</span><span className="font-mono-data text-xs text-secondary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" data-icon="devices">devices</span> Apple iPhone 13 Pro (v15.4.1)</span></div></div></div>
</form>
</div>
{/* Warning & Certification Card */}
<div className="bg-surface-container-high border border-outline-variant/30 rounded-lg p-6 flex flex-col gap-5"><div className="flex gap-4 items-start"><div className="p-3 bg-primary-container/10 rounded-full"><span className="material-symbols-outlined text-primary-container" data-icon="gavel">gavel</span></div><div className="flex-1"><div className="flex items-center justify-between mb-1"><h3 className="font-headline-sm text-headline-sm text-on-surface">Legal Certification</h3><span className="flex items-center gap-1 px-2 py-0.5 bg-tertiary-container/20 text-tertiary rounded font-label-caps text-[10px] tracking-tighter border border-tertiary/20"><span className="material-symbols-outlined text-[12px]" data-icon="lock">lock</span> AES-256 SECURE</span></div><p className="font-body-md text-body-md text-on-surface-variant text-sm">By submitting this evidence, you certify under penalty of perjury that the attached documentation is true, accurate, and unaltered. This action is logged to the immutable audit trail.</p></div></div><div className="bg-surface-dim/50 border border-outline-variant/20 p-4 rounded-lg hover:border-primary-container/40 transition-colors"><label className="flex items-center gap-4 cursor-pointer group"><div className="relative flex items-center justify-center shrink-0"><input className="peer appearance-none w-6 h-6 border border-outline rounded bg-surface checked:bg-primary-container checked:border-primary-container transition-all" type="checkbox" /><span className="material-symbols-outlined absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-[18px]" data-icon="check">check</span></div><span className="font-body-md text-body-lg text-on-surface group-hover:text-primary transition-colors leading-tight">I acknowledge and certify the integrity of this submission.</span></label></div></div>
{/* Action Buttons */}
<div className="flex justify-end gap-4 mt-4">
<button className="px-6 py-3 border border-[#2a323d] rounded font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:bg-surface-bright/20 transition-colors">
                    Save Draft
                </button>
<button className="px-8 py-4 bg-primary-container text-white rounded font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary-container transition-all shadow-[0_0_25px_rgba(226,30,81,0.4)] flex items-center gap-2"><span className="material-symbols-outlined text-[20px]" data-icon="cloud_upload">cloud_upload</span>
                    Submit to Case
                </button>
</div>
</div>
</main>
{/* BottomNavBar Suppressed as this is a transactional flow */}
    </div>
  );
}

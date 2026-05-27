'use client';

import { useState, useRef } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  name: string;
  client: string;
  type: 'PA' | 'GC';
  status: 'active' | 'pending' | 'completed';
  dueDate: string;
}

interface NewProjectForm {
  name: string;
  client: string;
  claimNumber: string;
  type: 'Residential' | 'Commercial';
  dueDate: string;
  notes: string;
}

const EMPTY_FORM: NewProjectForm = {
  name: '',
  client: '',
  claimNumber: '',
  type: 'Residential',
  dueDate: '',
  notes: '',
};

// ── Seed data (mirrors the screenshot) ───────────────────────────────────────

const SEED_PROJECTS: Project[] = [
  { id: '1', name: 'Riverside Commons — Storm Restoration', client: 'Noble PA', type: 'PA', status: 'active', dueDate: 'Jun 12' },
  { id: '2', name: 'Highland Oaks — Full Gut Rehab',       client: 'GC Direct',  type: 'GC', status: 'active', dueDate: 'Jun 18' },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function CommandCenter() {
  const [projects, setProjects] = useState<Project[]>(SEED_PROJECTS);
  const [showNewProject, setShowNewProject] = useState(false);
  const [form, setForm] = useState<NewProjectForm>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function field<K extends keyof NewProjectForm>(k: K, v: NewProjectForm[K]) {
    setForm(f => ({ ...f, [k]: v }));
  }

  function handleNewProject(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const p: Project = {
        id: crypto.randomUUID(),
        name: form.name,
        client: form.client || 'Unassigned',
        type: 'GC',
        status: 'active',
        dueDate: form.dueDate || '—',
      };
      setProjects(prev => [p, ...prev]);
      setShowNewProject(false);
      setForm(EMPTY_FORM);
      setSubmitting(false);
    }, 400);
  }

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setUploadedFiles(prev => [...prev, ...files.map(f => f.name)]);
    e.target.value = '';
  }

  return (
    <div className="cs-root">
      {/* ── Navbar ── */}
      <nav className="cs-nav">
        <div className="cs-nav__left">
          <button className="cs-nav__hamburger" aria-label="Menu">
            <span /><span /><span />
          </button>
          <div className="cs-nav__brand">
            <span className="cs-nav__icon" aria-hidden="true">⌂</span>
            <span className="cs-nav__name">C.A.R.E.<strong>STACK</strong></span>
            <span className="cs-nav__badge">PRO</span>
          </div>
        </div>
        <div className="cs-nav__right">
          <button className="cs-nav__icon-btn" aria-label="Notifications">🔔</button>
          <button className="cs-nav__icon-btn" aria-label="Search">🔍</button>
          <button className="cs-nav__icon-btn" aria-label="Tabs">⊞</button>
          <button className="cs-nav__avatar" aria-label="Profile">TI</button>
        </div>
      </nav>

      <main className="cs-main">
        {/* ── Page header ── */}
        <header className="cs-header">
          <div>
            <h1 className="cs-header__title">COMMAND CENTER</h1>
            <p className="cs-header__sub">Turner Industries Group · GC View</p>
          </div>
        </header>

        {/* ── Action buttons ── */}
        <div className="cs-actions">
          <button
            className="cs-btn cs-btn--ghost"
            onClick={() => setShowNewProject(true)}
          >
            + NEW PROJECT
          </button>
          <button
            className="cs-btn cs-btn--primary"
            onClick={() => fileInputRef.current?.click()}
          >
            ↑ UPLOAD DOCS
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xlsx,.xls"
            style={{ display: 'none' }}
            onChange={handleUpload}
          />
        </div>

        {/* Upload confirmation */}
        {uploadedFiles.length > 0 && (
          <div className="cs-upload-toast">
            <span>✓ {uploadedFiles.length} file{uploadedFiles.length > 1 ? 's' : ''} queued:</span>
            <span className="cs-upload-toast__files">{uploadedFiles.slice(-3).join(', ')}{uploadedFiles.length > 3 ? ` +${uploadedFiles.length - 3} more` : ''}</span>
            <button className="cs-upload-toast__dismiss" onClick={() => setUploadedFiles([])}>✕</button>
          </div>
        )}

        {/* ── Stat cards ── */}
        <div className="cs-stats">
          <div className="cs-stat cs-stat--red">
            <p className="cs-stat__label">ACTIVE PROJECTS</p>
            <p className="cs-stat__number">{projects.filter(p => p.status === 'active').length + 22}</p>
            <p className="cs-stat__sub cs-stat__sub--green">↑ 3 this week</p>
          </div>
          <div className="cs-stat cs-stat--orange">
            <p className="cs-stat__label">OPEN CLAIMS</p>
            <p className="cs-stat__number">11</p>
            <p className="cs-stat__sub cs-stat__sub--orange">4 awaiting docs</p>
          </div>
          <div className="cs-stat cs-stat--green">
            <p className="cs-stat__label">APPROVED SOWS</p>
            <p className="cs-stat__number">8</p>
            <p className="cs-stat__sub cs-stat__sub--green">↑ ready to invoice</p>
          </div>
          <div className="cs-stat cs-stat--blue">
            <p className="cs-stat__label">PENDING TRANSFERS</p>
            <p className="cs-stat__number">36</p>
            <p className="cs-stat__sub cs-stat__sub--blue">files awaiting review</p>
          </div>
        </div>

        {/* ── Notification card ── */}
        <div className="cs-alert">
          <div className="cs-alert__icon" aria-hidden="true">🛡</div>
          <div className="cs-alert__body">
            <p className="cs-alert__title">Noble Public Adjusting — 3 claims need your contractor estimates</p>
            <p className="cs-alert__sub">Linked workspace · Claims: #CLM-0041, #CLM-0039, #CLM-0037</p>
          </div>
          <a href="/claims" className="cs-alert__link">VIEW CLAIMS →</a>
        </div>

        {/* ── Active Projects list ── */}
        <div className="cs-projects">
          <div className="cs-projects__header">
            <div className="cs-projects__title-row">
              <span className="cs-projects__icon" aria-hidden="true">💼</span>
              <span className="cs-projects__title">ACTIVE PROJECTS</span>
            </div>
            <a href="#" className="cs-projects__view-all">View All</a>
          </div>
          <div className="cs-projects__list">
            {projects.map(p => (
              <div key={p.id} className="cs-project-row">
                <span className="cs-project-row__dot" />
                <div className="cs-project-row__info">
                  <p className="cs-project-row__name">{p.name}</p>
                  <p className="cs-project-row__meta">{p.client} · Due {p.dueDate}</p>
                </div>
                <span className={`cs-project-row__badge cs-project-row__badge--${p.type.toLowerCase()}`}>
                  {p.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── New Project Modal ── */}
      {showNewProject && (
        <div className="cs-modal-backdrop" onClick={() => setShowNewProject(false)}>
          <div className="cs-modal" onClick={e => e.stopPropagation()}>
            <div className="cs-modal__header">
              <h2 className="cs-modal__title">NEW PROJECT</h2>
              <button className="cs-modal__close" onClick={() => setShowNewProject(false)} aria-label="Close">✕</button>
            </div>
            <form className="cs-modal__body" onSubmit={handleNewProject}>
              <div className="cs-form-grid">
                <div className="cs-field cs-field--full">
                  <label className="cs-label">Project Name *</label>
                  <input
                    className="cs-input"
                    required
                    value={form.name}
                    onChange={e => field('name', e.target.value)}
                    placeholder="e.g. Riverside Commons — Storm Restoration"
                  />
                </div>
                <div className="cs-field">
                  <label className="cs-label">Client / PA Firm</label>
                  <input
                    className="cs-input"
                    value={form.client}
                    onChange={e => field('client', e.target.value)}
                    placeholder="Noble PA"
                  />
                </div>
                <div className="cs-field">
                  <label className="cs-label">Claim Number</label>
                  <input
                    className="cs-input"
                    value={form.claimNumber}
                    onChange={e => field('claimNumber', e.target.value)}
                    placeholder="#CLM-0042"
                  />
                </div>
                <div className="cs-field">
                  <label className="cs-label">Project Type</label>
                  <select
                    className="cs-input"
                    value={form.type}
                    onChange={e => field('type', e.target.value as NewProjectForm['type'])}
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div className="cs-field">
                  <label className="cs-label">Due Date</label>
                  <input
                    className="cs-input"
                    type="date"
                    value={form.dueDate}
                    onChange={e => field('dueDate', e.target.value)}
                  />
                </div>
                <div className="cs-field cs-field--full">
                  <label className="cs-label">Notes</label>
                  <textarea
                    className="cs-input cs-textarea"
                    rows={3}
                    value={form.notes}
                    onChange={e => field('notes', e.target.value)}
                    placeholder="Scope notes, special instructions…"
                  />
                </div>
              </div>
              <div className="cs-modal__footer">
                <button type="button" className="cs-btn cs-btn--ghost" onClick={() => setShowNewProject(false)}>
                  Cancel
                </button>
                <button type="submit" className="cs-btn cs-btn--primary" disabled={submitting}>
                  {submitting ? 'Creating…' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

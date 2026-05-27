'use client';

import { useEffect, useState, useCallback } from 'react';
import type { Claim, ClaimStatus } from '@/lib/db';

const STATUS_LABELS: Record<ClaimStatus, string> = {
  new: 'New',
  open: 'Open',
  under_review: 'Under Review',
  pending_adjuster: 'Pending Adjuster',
  pending_settlement: 'Pending Settlement',
  closed: 'Closed',
  denied: 'Denied',
};

const STATUS_COLORS: Record<ClaimStatus, string> = {
  new: 'ch-badge--blue',
  open: 'ch-badge--green',
  under_review: 'ch-badge--yellow',
  pending_adjuster: 'ch-badge--orange',
  pending_settlement: 'ch-badge--purple',
  closed: 'ch-badge--gray',
  denied: 'ch-badge--red',
};

const LOSS_TYPES = [
  'Wind/Hail', 'Water Damage', 'Fire', 'Theft/Vandalism',
  'Flood', 'Lightning', 'Collapse', 'Other',
];

const STATUSES = Object.keys(STATUS_LABELS) as ClaimStatus[];

interface NewClaimForm {
  claimant_name: string;
  claimant_phone: string;
  claimant_email: string;
  loss_date: string;
  loss_type: string;
  loss_description: string;
  property_address: string;
  policy_number: string;
  status: ClaimStatus;
}

const EMPTY_FORM: NewClaimForm = {
  claimant_name: '',
  claimant_phone: '',
  claimant_email: '',
  loss_date: '',
  loss_type: '',
  loss_description: '',
  property_address: '',
  policy_number: '',
  status: 'new',
};

export default function ClaimsPage() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<NewClaimForm>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [filterStatus, setFilterStatus] = useState<ClaimStatus | 'all'>('all');
  const [search, setSearch] = useState('');

  const fetchClaims = useCallback(async () => {
    try {
      const res = await fetch('/api/claims');
      if (!res.ok) throw new Error(await res.text());
      setClaims(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load claims');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClaims();
  }, [fetchClaims]);

  const filtered = claims.filter((c) => {
    const matchStatus = filterStatus === 'all' || c.status === filterStatus;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      c.claim_number.toLowerCase().includes(q) ||
      c.claimant_name.toLowerCase().includes(q) ||
      (c.property_address ?? '').toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const err = await res.json() as { error?: string };
        throw new Error(err.error ?? 'Failed to create claim');
      }
      setShowModal(false);
      setForm(EMPTY_FORM);
      await fetchClaims();
    } catch (e) {
      alert(e instanceof Error ? e.message : 'Error creating claim');
    } finally {
      setSubmitting(false);
    }
  }

  function field(k: keyof NewClaimForm, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  return (
    <>
      {/* Navbar */}
      <nav className="ch-navbar">
        <div className="container">
          <a href="/" className="ch-navbar__logo">ClaimsHub</a>
          <div className="ch-navbar__right">
            <a href="/" className="navbar__link">Home</a>
            <button className="btn-primary" onClick={() => setShowModal(true)}>
              + New Claim
            </button>
          </div>
        </div>
      </nav>

      <div className="ch-page">
        <div className="container">

          {/* Header */}
          <div className="ch-page__header">
            <div>
              <h1 className="ch-page__title">Claims</h1>
              <p className="ch-page__subtitle">{claims.length} total claim{claims.length !== 1 ? 's' : ''}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="ch-filters">
            <input
              className="ch-search"
              type="search"
              placeholder="Search claims, claimants, addresses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="ch-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as ClaimStatus | 'all')}
            >
              <option value="all">All Statuses</option>
              {STATUSES.map((s) => (
                <option key={s} value={s}>{STATUS_LABELS[s]}</option>
              ))}
            </select>
          </div>

          {/* Claims Table */}
          {loading ? (
            <div className="ch-empty">Loading claims...</div>
          ) : error ? (
            <div className="ch-empty ch-empty--error">{error}</div>
          ) : filtered.length === 0 ? (
            <div className="ch-empty">
              {claims.length === 0
                ? 'No claims yet. Click "+ New Claim" to get started.'
                : 'No claims match your filters.'}
            </div>
          ) : (
            <div className="ch-table-wrap">
              <table className="ch-table">
                <thead>
                  <tr>
                    <th>Claim #</th>
                    <th>Claimant</th>
                    <th>Loss Type</th>
                    <th>Loss Date</th>
                    <th>Status</th>
                    <th>Adjuster</th>
                    <th>Created</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => (
                    <tr key={c.id}>
                      <td className="ch-table__mono">{c.claim_number}</td>
                      <td>
                        <div className="ch-table__name">{c.claimant_name}</div>
                        {c.property_address && (
                          <div className="ch-table__sub">{c.property_address}</div>
                        )}
                      </td>
                      <td>{c.loss_type ?? '—'}</td>
                      <td>{c.loss_date ?? '—'}</td>
                      <td>
                        <span className={`ch-badge ${STATUS_COLORS[c.status as ClaimStatus]}`}>
                          {STATUS_LABELS[c.status as ClaimStatus] ?? c.status}
                        </span>
                      </td>
                      <td>{c.adjuster_name ?? <span className="ch-table__muted">Unassigned</span>}</td>
                      <td className="ch-table__muted">
                        {new Date(c.created_at).toLocaleDateString()}
                      </td>
                      <td>
                        <a href={`/claims/${c.id}`} className="ch-table__action">
                          View →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* New Claim Modal */}
      {showModal && (
        <div className="ch-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="ch-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ch-modal__header">
              <h2 className="ch-modal__title">New Claim</h2>
              <button className="ch-modal__close" onClick={() => setShowModal(false)} aria-label="Close">✕</button>
            </div>
            <form className="ch-modal__body" onSubmit={handleSubmit}>
              <div className="ch-form-grid">
                <div className="ch-field ch-field--full">
                  <label className="ch-label">Claimant Name *</label>
                  <input
                    className="ch-input"
                    required
                    value={form.claimant_name}
                    onChange={(e) => field('claimant_name', e.target.value)}
                    placeholder="Full name"
                  />
                </div>
                <div className="ch-field">
                  <label className="ch-label">Phone</label>
                  <input
                    className="ch-input"
                    type="tel"
                    value={form.claimant_phone}
                    onChange={(e) => field('claimant_phone', e.target.value)}
                  />
                </div>
                <div className="ch-field">
                  <label className="ch-label">Email</label>
                  <input
                    className="ch-input"
                    type="email"
                    value={form.claimant_email}
                    onChange={(e) => field('claimant_email', e.target.value)}
                  />
                </div>
                <div className="ch-field">
                  <label className="ch-label">Loss Date</label>
                  <input
                    className="ch-input"
                    type="date"
                    value={form.loss_date}
                    onChange={(e) => field('loss_date', e.target.value)}
                  />
                </div>
                <div className="ch-field">
                  <label className="ch-label">Loss Type</label>
                  <select
                    className="ch-input"
                    value={form.loss_type}
                    onChange={(e) => field('loss_type', e.target.value)}
                  >
                    <option value="">Select type…</option>
                    {LOSS_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="ch-field">
                  <label className="ch-label">Policy Number</label>
                  <input
                    className="ch-input"
                    value={form.policy_number}
                    onChange={(e) => field('policy_number', e.target.value)}
                  />
                </div>
                <div className="ch-field ch-field--full">
                  <label className="ch-label">Property Address</label>
                  <input
                    className="ch-input"
                    value={form.property_address}
                    onChange={(e) => field('property_address', e.target.value)}
                    placeholder="123 Main St, City, ST 00000"
                  />
                </div>
                <div className="ch-field ch-field--full">
                  <label className="ch-label">Loss Description</label>
                  <textarea
                    className="ch-input ch-textarea"
                    rows={3}
                    value={form.loss_description}
                    onChange={(e) => field('loss_description', e.target.value)}
                    placeholder="Describe the loss event…"
                  />
                </div>
                <div className="ch-field">
                  <label className="ch-label">Initial Status</label>
                  <select
                    className="ch-input"
                    value={form.status}
                    onChange={(e) => field('status', e.target.value as ClaimStatus)}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="ch-modal__footer">
                <button type="button" className="btn-ghost" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? 'Creating…' : 'Create Claim'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { useEffect, useState, useCallback, use } from 'react';
import type {
  Claim, Policy, Estimate, Settlement, Note, AgentActivity, ClaimStatus,
} from '@/lib/db';
import type { AgentType } from '@/lib/agents';

type Tab = 'overview' | 'policy' | 'estimates' | 'settlements' | 'agents' | 'notes';

const TABS: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'policy', label: 'Policy' },
  { id: 'estimates', label: 'Estimates' },
  { id: 'settlements', label: 'Settlements' },
  { id: 'agents', label: 'Agent Activity' },
  { id: 'notes', label: 'Notes' },
];

const STATUS_LABELS: Record<string, string> = {
  new: 'New', open: 'Open', under_review: 'Under Review',
  pending_adjuster: 'Pending Adjuster', pending_settlement: 'Pending Settlement',
  closed: 'Closed', denied: 'Denied',
};

const AGENT_LABELS: Record<AgentType, string> = {
  intake: 'Intake', coverage: 'Coverage', estimate: 'Estimate Review',
  document: 'Document Analysis', settlement: 'Settlement Rec.', adjuster: 'Adjuster Match',
  storm: 'Storm Correlator', status: 'Status Tracker',
};

const AGENT_TYPES = Object.keys(AGENT_LABELS) as AgentType[];

const LOSS_TYPES = [
  'Wind/Hail', 'Water Damage', 'Fire', 'Theft/Vandalism',
  'Flood', 'Lightning', 'Collapse', 'Other',
];

const ALL_STATUSES = Object.keys(STATUS_LABELS) as ClaimStatus[];

function fmt(n: number | null | undefined) {
  if (n == null) return '—';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}

export default function ClaimDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [tab, setTab] = useState<Tab>('overview');
  const [claim, setClaim] = useState<Claim | null>(null);
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [estimates, setEstimates] = useState<Estimate[]>([]);
  const [settlements, setSettlements] = useState<Settlement[]>([]);
  const [activity, setActivity] = useState<AgentActivity[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [runningAgent, setRunningAgent] = useState<AgentType | null>(null);
  const [agentResult, setAgentResult] = useState<Record<string, unknown> | null>(null);
  const [newNote, setNewNote] = useState('');
  const [savingNote, setSavingNote] = useState(false);
  const [editingStatus, setEditingStatus] = useState(false);
  const [editStatus, setEditStatus] = useState<ClaimStatus>('new');

  const fetchAll = useCallback(async () => {
    const j = <T,>(r: Response) => r.json() as Promise<T>;
    const [c, p, e, s, a, n] = await Promise.all([
      fetch(`/api/claims/${id}`).then(j<Claim & { error?: string }>),
      fetch(`/api/policies/${id}`).then(j<Policy[]>),
      fetch(`/api/estimates/${id}`).then(j<Estimate[]>),
      fetch(`/api/settlements/${id}`).then(j<Settlement[]>),
      fetch(`/api/agents/activity/${id}`).then(j<AgentActivity[]>),
      fetch(`/api/notes/${id}`).then(j<Note[]>),
    ]);
    setClaim(c.error ? null : c);
    setPolicies(Array.isArray(p) ? p : []);
    setEstimates(Array.isArray(e) ? e : []);
    setSettlements(Array.isArray(s) ? s : []);
    setActivity(Array.isArray(a) ? a : []);
    setNotes(Array.isArray(n) ? n : []);
    setLoading(false);
  }, [id]);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  async function runAgent(type: AgentType) {
    setRunningAgent(type);
    setAgentResult(null);
    try {
      const res = await fetch(`/api/agents/${type}/${id}`, { method: 'POST' });
      const data = await res.json() as { result: Record<string, unknown>; error?: string };
      if (!res.ok) throw new Error(data.error ?? 'Agent failed');
      setAgentResult(data.result);
      await fetchAll();
    } catch (e) {
      alert(e instanceof Error ? e.message : 'Agent error');
    } finally {
      setRunningAgent(null);
    }
  }

  async function addNote() {
    if (!newNote.trim()) return;
    setSavingNote(true);
    try {
      await fetch(`/api/notes/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newNote, author: 'Adjuster' }),
      });
      setNewNote('');
      const res = await fetch(`/api/notes/${id}`);
      setNotes(await res.json());
    } finally {
      setSavingNote(false);
    }
  }

  async function saveStatus() {
    if (!claim) return;
    const res = await fetch(`/api/claims/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: editStatus }),
    });
    if (res.ok) {
      setClaim(await res.json());
      setEditingStatus(false);
    }
  }

  if (loading) return <div className="ch-empty" style={{ paddingTop: '120px' }}>Loading claim…</div>;
  if (!claim) return <div className="ch-empty ch-empty--error" style={{ paddingTop: '120px' }}>Claim not found.</div>;

  return (
    <>
      {/* Navbar */}
      <nav className="ch-navbar">
        <div className="container">
          <a href="/claims" className="ch-navbar__logo">← ClaimsHub</a>
          <div className="ch-navbar__right">
            <span className="ch-navbar__claim-num">{claim.claim_number}</span>
          </div>
        </div>
      </nav>

      <div className="ch-page">
        <div className="container">

          {/* Claim Header */}
          <div className="ch-detail-header">
            <div className="ch-detail-header__left">
              <h1 className="ch-detail-header__name">{claim.claimant_name}</h1>
              <p className="ch-detail-header__addr">{claim.property_address ?? 'No address'}</p>
              <p className="ch-detail-header__meta">
                {claim.loss_type ?? 'Unknown loss'} · {claim.loss_date ?? 'No loss date'}
              </p>
            </div>
            <div className="ch-detail-header__right">
              {editingStatus ? (
                <div className="ch-status-edit">
                  <select
                    className="ch-input"
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as ClaimStatus)}
                  >
                    {ALL_STATUSES.map((s) => (
                      <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                    ))}
                  </select>
                  <button className="btn-primary" style={{ fontSize: 13 }} onClick={saveStatus}>Save</button>
                  <button className="btn-ghost" style={{ fontSize: 13 }} onClick={() => setEditingStatus(false)}>Cancel</button>
                </div>
              ) : (
                <button
                  className="ch-status-btn"
                  onClick={() => { setEditStatus(claim.status as ClaimStatus); setEditingStatus(true); }}
                >
                  <span className={`ch-badge ch-badge--lg ch-badge--${claim.status.replace(/_/g, '-')}`}>
                    {STATUS_LABELS[claim.status] ?? claim.status}
                  </span>
                  <span className="ch-status-btn__edit">Edit</span>
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="ch-tabs">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`ch-tab${tab === t.id ? ' ch-tab--active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Panels */}
          <div className="ch-panel">

            {tab === 'overview' && (
              <div className="ch-overview-grid">
                <Section title="Claimant">
                  <Field label="Name" value={claim.claimant_name} />
                  <Field label="Phone" value={claim.claimant_phone} />
                  <Field label="Email" value={claim.claimant_email} />
                </Section>
                <Section title="Loss Details">
                  <Field label="Type" value={claim.loss_type} />
                  <Field label="Date" value={claim.loss_date} />
                  <Field label="Description" value={claim.loss_description} />
                </Section>
                <Section title="Policy">
                  <Field label="Carrier" value={claim.carrier_id ?? null} />
                  <Field label="Policy #" value={claim.policy_number} />
                </Section>
                <Section title="Adjuster">
                  <Field label="Name" value={claim.adjuster_name} />
                  <Field label="Phone" value={claim.adjuster_phone} />
                  <Field label="Email" value={claim.adjuster_email} />
                </Section>
                <Section title="Dates">
                  <Field label="Created" value={new Date(claim.created_at).toLocaleString()} />
                  <Field label="Updated" value={new Date(claim.updated_at).toLocaleString()} />
                </Section>
              </div>
            )}

            {tab === 'policy' && (
              <div>
                {policies.length === 0 ? (
                  <p className="ch-empty-inline">No policy details on file.</p>
                ) : (
                  policies.map((p) => (
                    <div key={p.id} className="ch-detail-card">
                      <div className="ch-detail-card__row">
                        <Field label="Policy #" value={p.policy_number} />
                        <Field label="Coverage Type" value={p.coverage_type} />
                        <Field label="Effective" value={p.effective_date} />
                        <Field label="Expiration" value={p.expiration_date} />
                      </div>
                      <div className="ch-detail-card__row">
                        <Field label="Dwelling Limit" value={fmt(p.dwelling_limit)} />
                        <Field label="Contents Limit" value={fmt(p.contents_limit)} />
                        <Field label="AOP Deductible" value={fmt(p.aop_deductible)} />
                        <Field label="Wind Deductible" value={fmt(p.wind_deductible)} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {tab === 'estimates' && (
              <div>
                {estimates.length === 0 ? (
                  <p className="ch-empty-inline">No estimates yet.</p>
                ) : (
                  <table className="ch-table">
                    <thead>
                      <tr><th>Vendor</th><th>Type</th><th>Amount</th><th>Status</th><th>Notes</th><th>Date</th></tr>
                    </thead>
                    <tbody>
                      {estimates.map((e) => (
                        <tr key={e.id}>
                          <td>{e.vendor ?? '—'}</td>
                          <td>{e.type ?? '—'}</td>
                          <td>{fmt(e.amount)}</td>
                          <td><span className="ch-badge ch-badge--gray">{e.status}</span></td>
                          <td>{e.notes ?? '—'}</td>
                          <td className="ch-table__muted">{new Date(e.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}

            {tab === 'settlements' && (
              <div>
                {settlements.length === 0 ? (
                  <p className="ch-empty-inline">No settlements on file.</p>
                ) : (
                  <table className="ch-table">
                    <thead>
                      <tr><th>Amount</th><th>Type</th><th>Status</th><th>Offered</th><th>Accepted</th><th>Notes</th></tr>
                    </thead>
                    <tbody>
                      {settlements.map((s) => (
                        <tr key={s.id}>
                          <td className="ch-table__bold">{fmt(s.amount)}</td>
                          <td>{s.type ?? '—'}</td>
                          <td><span className="ch-badge ch-badge--gray">{s.status}</span></td>
                          <td>{s.offered_at ?? '—'}</td>
                          <td>{s.accepted_at ?? '—'}</td>
                          <td>{s.notes ?? '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}

            {tab === 'agents' && (
              <div>
                <div className="ch-agents-grid">
                  {AGENT_TYPES.map((type) => (
                    <button
                      key={type}
                      className={`ch-agent-btn${runningAgent === type ? ' ch-agent-btn--running' : ''}`}
                      disabled={runningAgent !== null}
                      onClick={() => runAgent(type)}
                    >
                      <span className="ch-agent-btn__name">{AGENT_LABELS[type]}</span>
                      <span className="ch-agent-btn__action">
                        {runningAgent === type ? 'Running…' : 'Run →'}
                      </span>
                    </button>
                  ))}
                </div>

                {agentResult && (
                  <div className="ch-agent-result">
                    <h3 className="ch-agent-result__title">Latest Result</h3>
                    {(agentResult as { summary?: string }).summary && (
                      <p className="ch-agent-result__summary">
                        {(agentResult as { summary: string }).summary}
                      </p>
                    )}
                    {(agentResult as { recommendation?: string }).recommendation && (
                      <div className="ch-agent-result__rec">
                        <span className="ch-agent-result__rec-label">Recommendation: </span>
                        {(agentResult as { recommendation: string }).recommendation}
                      </div>
                    )}
                    {(agentResult as { flags?: string[] }).flags?.length ? (
                      <ul className="ch-agent-result__flags">
                        {(agentResult as { flags: string[] }).flags.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    ) : null}
                    {(agentResult as { fields?: Record<string, unknown> }).fields && (
                      <div className="ch-agent-result__fields">
                        {Object.entries((agentResult as { fields: Record<string, unknown> }).fields).map(([k, v]) => (
                          <div key={k} className="ch-agent-result__field">
                            <span className="ch-agent-result__field-key">{k.replace(/_/g, ' ')}</span>
                            <span className="ch-agent-result__field-val">{String(v)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activity.length > 0 && (
                  <div className="ch-activity-log">
                    <h3 className="ch-activity-log__title">Activity Log</h3>
                    {activity.map((a) => (
                      <div key={a.id} className={`ch-activity-item ch-activity-item--${a.status}`}>
                        <div className="ch-activity-item__header">
                          <span className="ch-activity-item__type">{AGENT_LABELS[a.agent_type as AgentType] ?? a.agent_type}</span>
                          <span className={`ch-badge ch-badge--sm ${a.status === 'completed' ? 'ch-badge--green' : a.status === 'failed' ? 'ch-badge--red' : 'ch-badge--yellow'}`}>
                            {a.status}
                          </span>
                          <span className="ch-activity-item__time">{new Date(a.created_at).toLocaleString()}</span>
                        </div>
                        {a.error && <p className="ch-activity-item__error">{a.error}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {tab === 'notes' && (
              <div>
                <div className="ch-note-composer">
                  <textarea
                    className="ch-input ch-textarea"
                    rows={3}
                    placeholder="Add a note…"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                  />
                  <button className="btn-primary" disabled={savingNote || !newNote.trim()} onClick={addNote}>
                    {savingNote ? 'Saving…' : 'Add Note'}
                  </button>
                </div>
                {notes.length === 0 ? (
                  <p className="ch-empty-inline">No notes yet.</p>
                ) : (
                  <div className="ch-notes-list">
                    {notes.map((n) => (
                      <div key={n.id} className="ch-note">
                        <div className="ch-note__header">
                          <span className="ch-note__author">{n.author}</span>
                          <span className="ch-note__time">{new Date(n.created_at).toLocaleString()}</span>
                        </div>
                        <p className="ch-note__content">{n.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="ch-section">
      <h3 className="ch-section__title">{title}</h3>
      <div className="ch-section__body">{children}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="ch-field-row">
      <span className="ch-field-row__label">{label}</span>
      <span className="ch-field-row__value">{value ?? '—'}</span>
    </div>
  );
}

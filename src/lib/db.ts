import { getCloudflareContext } from '@opennextjs/cloudflare';

function randomId() {
  return crypto.randomUUID();
}

async function db(): Promise<D1Database> {
  const { env } = await getCloudflareContext({ async: true });
  return env.DB;
}

// ── Claims ────────────────────────────────────────────────────────────────────

export type ClaimStatus =
  | 'new'
  | 'open'
  | 'under_review'
  | 'pending_adjuster'
  | 'pending_settlement'
  | 'closed'
  | 'denied';

export interface Claim {
  id: string;
  claim_number: string;
  status: ClaimStatus;
  claimant_name: string;
  claimant_phone: string | null;
  claimant_email: string | null;
  loss_date: string | null;
  loss_type: string | null;
  loss_description: string | null;
  property_address: string | null;
  carrier_id: string | null;
  policy_number: string | null;
  adjuster_name: string | null;
  adjuster_phone: string | null;
  adjuster_email: string | null;
  created_at: string;
  updated_at: string;
}

export type NewClaim = Omit<Claim, 'id' | 'claim_number' | 'created_at' | 'updated_at'> & {
  claim_number?: string;
};

function nextClaimNumber(existing: number): string {
  return `CLM-${String(existing + 1).padStart(5, '0')}`;
}

export async function listClaims(): Promise<Claim[]> {
  const d = await db();
  const { results } = await d.prepare(
    'SELECT * FROM claims ORDER BY created_at DESC'
  ).all<Claim>();
  return results;
}

export async function getClaim(id: string): Promise<Claim | null> {
  const d = await db();
  return d.prepare('SELECT * FROM claims WHERE id = ?').bind(id).first<Claim>();
}

export async function createClaim(data: NewClaim): Promise<Claim> {
  const d = await db();
  const id = randomId();
  const row = await d.prepare('SELECT COUNT(*) as cnt FROM claims').first<{ cnt: number }>();
  const claimNumber = data.claim_number ?? nextClaimNumber(row?.cnt ?? 0);
  await d
    .prepare(
      `INSERT INTO claims
        (id, claim_number, status, claimant_name, claimant_phone, claimant_email,
         loss_date, loss_type, loss_description, property_address,
         carrier_id, policy_number, adjuster_name, adjuster_phone, adjuster_email)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    )
    .bind(
      id, claimNumber, data.status ?? 'new',
      data.claimant_name, data.claimant_phone ?? null, data.claimant_email ?? null,
      data.loss_date ?? null, data.loss_type ?? null, data.loss_description ?? null,
      data.property_address ?? null, data.carrier_id ?? null, data.policy_number ?? null,
      data.adjuster_name ?? null, data.adjuster_phone ?? null, data.adjuster_email ?? null
    )
    .run();
  return (await getClaim(id))!;
}

export async function updateClaim(id: string, data: Partial<NewClaim>): Promise<Claim | null> {
  const d = await db();
  const fields = Object.entries(data)
    .filter(([k]) => k !== 'claim_number')
    .map(([k]) => `${k} = ?`);
  if (fields.length === 0) return getClaim(id);
  fields.push("updated_at = datetime('now')");
  const values = Object.entries(data)
    .filter(([k]) => k !== 'claim_number')
    .map(([, v]) => v ?? null);
  values.push(id);
  await d
    .prepare(`UPDATE claims SET ${fields.join(', ')} WHERE id = ?`)
    .bind(...values)
    .run();
  return getClaim(id);
}

export async function deleteClaim(id: string): Promise<void> {
  const d = await db();
  await d.prepare('DELETE FROM claims WHERE id = ?').bind(id).run();
}

// ── Carriers ─────────────────────────────────────────────────────────────────

export interface Carrier {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
}

export async function listCarriers(): Promise<Carrier[]> {
  const d = await db();
  const { results } = await d.prepare('SELECT * FROM carriers ORDER BY name').all<Carrier>();
  return results;
}

export async function createCarrier(data: Omit<Carrier, 'id'>): Promise<Carrier> {
  const d = await db();
  const id = randomId();
  await d
    .prepare('INSERT INTO carriers (id, name, phone, email, address) VALUES (?,?,?,?,?)')
    .bind(id, data.name, data.phone ?? null, data.email ?? null, data.address ?? null)
    .run();
  return (await d.prepare('SELECT * FROM carriers WHERE id = ?').bind(id).first<Carrier>())!;
}

// ── Policies ─────────────────────────────────────────────────────────────────

export interface Policy {
  id: string;
  claim_id: string;
  policy_number: string;
  coverage_type: string | null;
  dwelling_limit: number | null;
  contents_limit: number | null;
  aop_deductible: number | null;
  wind_deductible: number | null;
  effective_date: string | null;
  expiration_date: string | null;
}

export async function getPoliciesForClaim(claimId: string): Promise<Policy[]> {
  const d = await db();
  const { results } = await d
    .prepare('SELECT * FROM policies WHERE claim_id = ?')
    .bind(claimId)
    .all<Policy>();
  return results;
}

export async function createPolicy(data: Omit<Policy, 'id'>): Promise<Policy> {
  const d = await db();
  const id = randomId();
  await d
    .prepare(
      `INSERT INTO policies
        (id, claim_id, policy_number, coverage_type, dwelling_limit, contents_limit,
         aop_deductible, wind_deductible, effective_date, expiration_date)
       VALUES (?,?,?,?,?,?,?,?,?,?)`
    )
    .bind(
      id, data.claim_id, data.policy_number,
      data.coverage_type ?? null, data.dwelling_limit ?? null, data.contents_limit ?? null,
      data.aop_deductible ?? null, data.wind_deductible ?? null,
      data.effective_date ?? null, data.expiration_date ?? null
    )
    .run();
  return (await d.prepare('SELECT * FROM policies WHERE id = ?').bind(id).first<Policy>())!;
}

// ── Estimates ─────────────────────────────────────────────────────────────────

export interface Estimate {
  id: string;
  claim_id: string;
  vendor: string | null;
  type: string | null;
  amount: number | null;
  status: string;
  notes: string | null;
  created_at: string;
}

export async function getEstimatesForClaim(claimId: string): Promise<Estimate[]> {
  const d = await db();
  const { results } = await d
    .prepare('SELECT * FROM estimates WHERE claim_id = ? ORDER BY created_at DESC')
    .bind(claimId)
    .all<Estimate>();
  return results;
}

export async function createEstimate(data: Omit<Estimate, 'id' | 'created_at'>): Promise<Estimate> {
  const d = await db();
  const id = randomId();
  await d
    .prepare(
      'INSERT INTO estimates (id, claim_id, vendor, type, amount, status, notes) VALUES (?,?,?,?,?,?,?)'
    )
    .bind(id, data.claim_id, data.vendor ?? null, data.type ?? null, data.amount ?? null, data.status ?? 'pending', data.notes ?? null)
    .run();
  return (await d.prepare('SELECT * FROM estimates WHERE id = ?').bind(id).first<Estimate>())!;
}

// ── Settlements ───────────────────────────────────────────────────────────────

export interface Settlement {
  id: string;
  claim_id: string;
  amount: number;
  type: string | null;
  status: string;
  notes: string | null;
  offered_at: string | null;
  accepted_at: string | null;
  created_at: string;
}

export async function getSettlementsForClaim(claimId: string): Promise<Settlement[]> {
  const d = await db();
  const { results } = await d
    .prepare('SELECT * FROM settlements WHERE claim_id = ? ORDER BY created_at DESC')
    .bind(claimId)
    .all<Settlement>();
  return results;
}

export async function createSettlement(data: Omit<Settlement, 'id' | 'created_at'>): Promise<Settlement> {
  const d = await db();
  const id = randomId();
  await d
    .prepare(
      `INSERT INTO settlements (id, claim_id, amount, type, status, notes, offered_at, accepted_at)
       VALUES (?,?,?,?,?,?,?,?)`
    )
    .bind(
      id, data.claim_id, data.amount,
      data.type ?? null, data.status ?? 'pending', data.notes ?? null,
      data.offered_at ?? null, data.accepted_at ?? null
    )
    .run();
  return (await d.prepare('SELECT * FROM settlements WHERE id = ?').bind(id).first<Settlement>())!;
}

// ── Notes ─────────────────────────────────────────────────────────────────────

export interface Note {
  id: string;
  claim_id: string;
  author: string;
  content: string;
  created_at: string;
}

export async function getNotesForClaim(claimId: string): Promise<Note[]> {
  const d = await db();
  const { results } = await d
    .prepare('SELECT * FROM notes WHERE claim_id = ? ORDER BY created_at DESC')
    .bind(claimId)
    .all<Note>();
  return results;
}

export async function createNote(data: Omit<Note, 'id' | 'created_at'>): Promise<Note> {
  const d = await db();
  const id = randomId();
  await d
    .prepare('INSERT INTO notes (id, claim_id, author, content) VALUES (?,?,?,?)')
    .bind(id, data.claim_id, data.author ?? 'System', data.content)
    .run();
  return (await d.prepare('SELECT * FROM notes WHERE id = ?').bind(id).first<Note>())!;
}

// ── Agent Activity ────────────────────────────────────────────────────────────

export interface AgentActivity {
  id: string;
  claim_id: string;
  agent_type: string;
  status: string;
  result: string | null;
  error: string | null;
  created_at: string;
}

export async function getAgentActivityForClaim(claimId: string): Promise<AgentActivity[]> {
  const d = await db();
  const { results } = await d
    .prepare('SELECT * FROM agent_activity WHERE claim_id = ? ORDER BY created_at DESC')
    .bind(claimId)
    .all<AgentActivity>();
  return results;
}

export async function createAgentActivity(
  data: Omit<AgentActivity, 'id' | 'created_at'>
): Promise<AgentActivity> {
  const d = await db();
  const id = randomId();
  await d
    .prepare(
      'INSERT INTO agent_activity (id, claim_id, agent_type, status, result, error) VALUES (?,?,?,?,?,?)'
    )
    .bind(id, data.claim_id, data.agent_type, data.status, data.result ?? null, data.error ?? null)
    .run();
  return (await d
    .prepare('SELECT * FROM agent_activity WHERE id = ?')
    .bind(id)
    .first<AgentActivity>())!;
}

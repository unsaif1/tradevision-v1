// Mock data layer — replace with real DB/API calls as needed

export type Role = 'contractor' | 'adjuster' | 'policyholder' | 'system';

export interface Participant {
  name: string;
  role: Role;
  initials: string;
}

export interface Attachment {
  id: string;
  name: string;
  size: string;
  type: string;
}

export interface Message {
  id: string;
  threadId: string;
  sender: Participant;
  content: string;
  timestamp: string;
  attachments?: Attachment[];
  isSystem?: boolean;
}

export interface Thread {
  id: string;
  claimId: string | null;
  project: string;
  subject: string;
  participants: Participant[];
  lastMessage: string;
  lastTime: string;
  unread: number;
  messages: Message[];
}

export interface Document {
  id: string;
  name: string;
  type: 'Estimate' | 'Photos' | 'Invoice' | 'Contract' | 'Report' | 'Legal' | 'Policy' | 'Xactimate' | 'Other';
  claimId: string | null;
  size: string;
  uploadedBy: Participant;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'needs_revision' | 'rejected';
  sharedWithAdjuster: boolean;
  sharedWithPolicyholder: boolean;
}

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
}

export interface Estimate {
  id: string;
  claimId: string;
  project: string;
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
  lineItems: LineItem[];
  subtotal: number;
  tax: number;
  total: number;
  submittedAt: string | null;
  updatedAt: string;
  adjuster: string;
  revisionNote?: string;
}

export interface Notification {
  id: string;
  type: 'new_message' | 'document_shared' | 'estimate_approved' | 'estimate_rejected' | 'revision_requested' | 'claim_update';
  text: string;
  timestamp: string;
  read: boolean;
  href: string;
}

export interface Claim {
  id: string;
  project: string;
  address: string;
  peril: string;
  stage: 'Filed' | 'Inspection' | 'Estimate' | 'Review' | 'Approval' | 'Settlement';
  status: 'active' | 'closed';
  contractor: string;
  policyholder: string;
  adjuster: string;
  estimateAmount: number;
  xactimateAmount: number;
  filedDate: string;
  lastUpdate: string;
}

export interface ActivityEvent {
  id: string;
  type: 'claim_created' | 'document_uploaded' | 'message_sent' | 'estimate_submitted' | 'estimate_approved' | 'revision_requested' | 'status_changed';
  description: string;
  timestamp: string;
  actor: string;
  actorRole: Role;
  claimId?: string;
  href?: string;
}

// ── Participants ──────────────────────────────────────────────────────────────

export const PARTICIPANTS: Record<string, Participant> = {
  marcus:    { name: 'Marcus Chen',    role: 'contractor',   initials: 'MC' },
  darius:    { name: 'Darius Webb',    role: 'contractor',   initials: 'DW' },
  lupita:    { name: 'Lupita Garza',   role: 'contractor',   initials: 'LG' },
  reyes:     { name: 'S. Reyes',       role: 'adjuster',     initials: 'SR' },
  torres:    { name: 'M. Torres',      role: 'adjuster',     initials: 'MT' },
  walsh:     { name: 'K. Walsh',       role: 'adjuster',     initials: 'KW' },
  callahan:  { name: 'R. Callahan',    role: 'policyholder', initials: 'RC' },
  walker:    { name: 'James Walker',   role: 'policyholder', initials: 'JW' },
  system:    { name: 'TradeVision',    role: 'system',       initials: 'TV' },
};

// ── Threads ───────────────────────────────────────────────────────────────────

export const THREADS: Thread[] = [
  {
    id: 'THR-001',
    claimId: 'CLM-8841',
    project: 'Riverside Commons',
    subject: 'Supplemental estimate — decking damage N elevation',
    participants: [PARTICIPANTS.marcus, PARTICIPANTS.reyes, PARTICIPANTS.callahan],
    lastMessage: 'Adjuster Reyes has approved the ACV. Expect payment within 3–5 business days.',
    lastTime: '10:42 AM',
    unread: 3,
    messages: [
      { id: 'm1', threadId: 'THR-001', sender: PARTICIPANTS.system, content: 'Claim CLM-8841 opened — Riverside Commons. All parties have been notified.', timestamp: 'Oct 14, 9:00 AM', isSystem: true },
      { id: 'm2', threadId: 'THR-001', sender: PARTICIPANTS.reyes, content: 'Hi Marcus, I\'ve reviewed the initial scope. Could you provide itemized documentation for the North elevation decking? The current estimate doesn\'t break it out separately.', timestamp: 'Oct 18, 11:30 AM' },
      { id: 'm3', threadId: 'THR-001', sender: PARTICIPANTS.marcus, content: 'Understood. I\'ll update EST-4401 with a line-item breakdown for the decking. Should have it to you by EOD.', timestamp: 'Oct 18, 1:15 PM', attachments: [{ id: 'a1', name: 'Decking_Damage_Photos.zip', size: '14.2 MB', type: 'Photos' }] },
      { id: 'm4', threadId: 'THR-001', sender: PARTICIPANTS.marcus, content: 'Updated estimate attached. Decking replacement (N elevation, 800 sq ft) is now line item 7 — $6,400.', timestamp: 'Oct 18, 5:45 PM', attachments: [{ id: 'a2', name: 'EST-4401-v2-supplemental.pdf', size: '1.4 MB', type: 'Estimate' }] },
      { id: 'm5', threadId: 'THR-001', sender: PARTICIPANTS.callahan, content: 'I can confirm the decking damage was caused by the same storm. I have photos from before the event if that helps.', timestamp: 'Oct 19, 9:00 AM' },
      { id: 'm6', threadId: 'THR-001', sender: PARTICIPANTS.reyes, content: 'Thanks Robert, please upload those photos when you get a chance — they will help support the supplement.', timestamp: 'Oct 19, 10:00 AM' },
      { id: 'm7', threadId: 'THR-001', sender: PARTICIPANTS.system, content: 'EST-4401 status changed: Draft → Approved. ACV: $42,850', timestamp: 'Oct 27, 10:00 AM', isSystem: true },
      { id: 'm8', threadId: 'THR-001', sender: PARTICIPANTS.reyes, content: 'Adjuster Reyes has approved the ACV. Expect payment within 3–5 business days.', timestamp: 'Oct 27, 10:42 AM' },
    ],
  },
  {
    id: 'THR-002',
    claimId: 'CLM-8872',
    project: 'Highland Oaks Estate',
    subject: 'Estimate revision request — line items 12–15',
    participants: [PARTICIPANTS.lupita, PARTICIPANTS.torres],
    lastMessage: 'Revised EST-4402 with itemized labor breakdown is attached. Let me know if you need anything else.',
    lastTime: '2:15 PM',
    unread: 1,
    messages: [
      { id: 'm9', threadId: 'THR-002', sender: PARTICIPANTS.torres, content: 'Lupita, the estimate for Highland Oaks looks good overall, but I need an itemized labor breakdown for the shingle removal — lines 12–15 are grouped into a lump sum.', timestamp: 'Oct 25, 3:00 PM' },
      { id: 'm10', threadId: 'THR-002', sender: PARTICIPANTS.system, content: 'EST-4402 status changed: Approved → Revision Requested. Adjuster note: Itemize labor for lines 12–15.', timestamp: 'Oct 25, 3:01 PM', isSystem: true },
      { id: 'm11', threadId: 'THR-002', sender: PARTICIPANTS.lupita, content: 'Revised EST-4402 with itemized labor breakdown is attached. Let me know if you need anything else.', timestamp: 'Oct 26, 2:15 PM', attachments: [{ id: 'a3', name: 'EST-4402-revised.pdf', size: '0.9 MB', type: 'Estimate' }] },
    ],
  },
  {
    id: 'THR-003',
    claimId: 'CLM-8958',
    project: 'Pinecrest Industrial',
    subject: 'Drone survey deliverables',
    participants: [PARTICIPANTS.darius, PARTICIPANTS.walsh],
    lastMessage: 'Walsh, the 4K drone video is uploaded. Full scope confirmed — 9,400 sq ft metal panel damage.',
    lastTime: 'Oct 25',
    unread: 2,
    messages: [
      { id: 'm12', threadId: 'THR-003', sender: PARTICIPANTS.walsh, content: 'Travis, before I can proceed with the Xactimate on CLM-8958, I need a drone survey of the full roof. Can you arrange that?', timestamp: 'Oct 23, 9:00 AM' },
      { id: 'm13', threadId: 'THR-003', sender: PARTICIPANTS.darius, content: 'Will do. We have a drone operator available Oct 25 — will upload footage same day.', timestamp: 'Oct 23, 11:00 AM' },
      { id: 'm14', threadId: 'THR-003', sender: PARTICIPANTS.darius, content: 'Walsh, the 4K drone video is uploaded. Full scope confirmed — 9,400 sq ft metal panel damage.', timestamp: 'Oct 25, 2:00 PM', attachments: [{ id: 'a4', name: 'Pinecrest_Drone_Survey.mp4', size: '248 MB', type: 'Photos' }] },
    ],
  },
];

// ── Documents ─────────────────────────────────────────────────────────────────

export const DOCUMENTS: Document[] = [
  { id: 'DOC-001', name: 'Riverside_Estimate_v2_Final.pdf', type: 'Estimate', claimId: 'CLM-8841', size: '1.4 MB', uploadedBy: PARTICIPANTS.marcus, uploadedAt: 'Oct 24', status: 'approved', sharedWithAdjuster: true, sharedWithPolicyholder: false },
  { id: 'DOC-002', name: 'Site_Photos_Pre_Oct22.zip', type: 'Photos', claimId: 'CLM-8841', size: '38.2 MB', uploadedBy: PARTICIPANTS.marcus, uploadedAt: 'Oct 22', status: 'approved', sharedWithAdjuster: true, sharedWithPolicyholder: true },
  { id: 'DOC-003', name: 'Highland_Estimate_Draft.pdf', type: 'Estimate', claimId: 'CLM-8872', size: '0.9 MB', uploadedBy: PARTICIPANTS.lupita, uploadedAt: 'Oct 21', status: 'needs_revision', sharedWithAdjuster: true, sharedWithPolicyholder: false },
  { id: 'DOC-004', name: 'Material_Invoice_ABC_Oct.pdf', type: 'Invoice', claimId: 'CLM-8841', size: '0.3 MB', uploadedBy: PARTICIPANTS.marcus, uploadedAt: 'Oct 20', status: 'approved', sharedWithAdjuster: true, sharedWithPolicyholder: false },
  { id: 'DOC-005', name: 'Lakeview_Scope_v1.pdf', type: 'Estimate', claimId: 'CLM-8933', size: '2.1 MB', uploadedBy: PARTICIPANTS.lupita, uploadedAt: 'Oct 19', status: 'rejected', sharedWithAdjuster: true, sharedWithPolicyholder: false },
  { id: 'DOC-006', name: 'Pinecrest_Drone_Survey.mp4', type: 'Photos', claimId: 'CLM-8958', size: '248 MB', uploadedBy: PARTICIPANTS.darius, uploadedAt: 'Oct 25', status: 'pending', sharedWithAdjuster: true, sharedWithPolicyholder: false },
  { id: 'DOC-007', name: 'Crew_Cert_OSHA30_Webb.pdf', type: 'Other', claimId: null, size: '0.4 MB', uploadedBy: PARTICIPANTS.darius, uploadedAt: 'Sep 15', status: 'approved', sharedWithAdjuster: false, sharedWithPolicyholder: false },
  { id: 'DOC-008', name: 'Meridian_Completion_Report.pdf', type: 'Report', claimId: 'CLM-8904', size: '3.8 MB', uploadedBy: PARTICIPANTS.marcus, uploadedAt: 'Oct 10', status: 'approved', sharedWithAdjuster: true, sharedWithPolicyholder: true },
  { id: 'DOC-XA-001', name: 'XA-2024-8841-v3.esx', type: 'Xactimate', claimId: 'CLM-8841', size: '0.6 MB', uploadedBy: PARTICIPANTS.reyes, uploadedAt: 'Oct 27', status: 'approved', sharedWithAdjuster: true, sharedWithPolicyholder: false },
  { id: 'DOC-XA-002', name: 'XA-2024-8872-v1.esx', type: 'Xactimate', claimId: 'CLM-8872', size: '0.4 MB', uploadedBy: PARTICIPANTS.torres, uploadedAt: 'Oct 26', status: 'pending', sharedWithAdjuster: true, sharedWithPolicyholder: false },
];

// ── Estimates ─────────────────────────────────────────────────────────────────

export const ESTIMATES: Estimate[] = [
  {
    id: 'EST-4401',
    claimId: 'CLM-8841',
    project: 'Riverside Commons',
    status: 'approved',
    adjuster: 'S. Reyes',
    submittedAt: 'Oct 14, 2024',
    updatedAt: 'Oct 27, 2024',
    lineItems: [
      { id: 'li1', description: 'TPO Membrane 60-mil (4,200 sq ft)', quantity: 4200, unit: 'sq ft', unitPrice: 4.00 },
      { id: 'li2', description: 'Labor — Tear-Off', quantity: 1, unit: 'lot', unitPrice: 8400 },
      { id: 'li3', description: 'Flashing — All Penetrations', quantity: 1, unit: 'lot', unitPrice: 6200 },
      { id: 'li4', description: 'Ridge Cap — Aluminum', quantity: 210, unit: 'lin ft', unitPrice: 15 },
      { id: 'li5', description: 'Disposal / Haul-Away', quantity: 1, unit: 'lot', unitPrice: 2800 },
      { id: 'li6', description: 'Decking Replacement (N elevation, 800 sq ft)', quantity: 800, unit: 'sq ft', unitPrice: 8.00 },
    ],
    subtotal: 40600,
    tax: 2250,
    total: 42850,
  },
  {
    id: 'EST-4402',
    claimId: 'CLM-8872',
    project: 'Highland Oaks Estate',
    status: 'under_review',
    adjuster: 'M. Torres',
    submittedAt: 'Oct 21, 2024',
    updatedAt: 'Oct 26, 2024',
    revisionNote: 'Please itemize labor for shingle removal separately (lines 12–15 are grouped). Also break out ridge cap labor from materials.',
    lineItems: [
      { id: 'li7', description: 'Arch. Shingles — Charcoal (28 sq)', quantity: 28, unit: 'sq', unitPrice: 300 },
      { id: 'li8', description: 'Labor — Tear-Off', quantity: 28, unit: 'sq', unitPrice: 80 },
      { id: 'li9', description: 'Labor — Install Shingles', quantity: 28, unit: 'sq', unitPrice: 75 },
      { id: 'li10', description: 'Ridge Cap Shingles', quantity: 120, unit: 'lin ft', unitPrice: 8 },
      { id: 'li11', description: 'Gutters — Aluminum 5"', quantity: 140, unit: 'lin ft', unitPrice: 12 },
    ],
    subtotal: 17400,
    tax: 900,
    total: 18300,
  },
  {
    id: 'EST-4403',
    claimId: 'CLM-8933',
    project: 'Lakeview Townhomes',
    status: 'rejected',
    adjuster: 'S. Reyes',
    submittedAt: 'Oct 20, 2024',
    updatedAt: 'Oct 24, 2024',
    revisionNote: 'Scope does not meet current Florida Building Code for multi-unit flat roofs. Drainage requirements are insufficient. Please revise and resubmit.',
    lineItems: [
      { id: 'li12', description: 'EPDM Membrane (7,100 sq ft)', quantity: 7100, unit: 'sq ft', unitPrice: 4.00 },
      { id: 'li13', description: 'Labor — Multi-Unit', quantity: 1, unit: 'lot', unitPrice: 18600 },
      { id: 'li14', description: 'Drainage / Scupper Repair', quantity: 8, unit: 'ea', unitPrice: 1175 },
      { id: 'li15', description: 'Insulation Board', quantity: 7100, unit: 'sq ft', unitPrice: 0.77 },
    ],
    subtotal: 58165,
    tax: 3735,
    total: 61900,
  },
  {
    id: 'EST-4404',
    claimId: 'CLM-8958',
    project: 'Pinecrest Industrial',
    status: 'draft',
    adjuster: 'K. Walsh',
    submittedAt: null,
    updatedAt: 'Oct 25, 2024',
    lineItems: [
      { id: 'li16', description: 'Metal Roof Panels (9,400 sq ft)', quantity: 9400, unit: 'sq ft', unitPrice: 6.00 },
      { id: 'li17', description: 'Insulation — 3" Polyiso', quantity: 9400, unit: 'sq ft', unitPrice: 1.50 },
      { id: 'li18', description: 'Skylights — 4x8 Commercial', quantity: 6, unit: 'ea', unitPrice: 2200 },
      { id: 'li19', description: 'Labor — Install', quantity: 1, unit: 'lot', unitPrice: 18400 },
    ],
    subtotal: 74000,
    tax: 4200,
    total: 78200,
  },
];

// ── Notifications ─────────────────────────────────────────────────────────────

export const CONTRACTOR_NOTIFICATIONS: Notification[] = [
  { id: 'n1', type: 'estimate_approved', text: 'EST-4401 approved by S. Reyes — $42,850 ACV', timestamp: '10:42 AM', read: false, href: '/contractor/estimates' },
  { id: 'n2', type: 'new_message', text: 'New message from S. Reyes on CLM-8841', timestamp: '10:42 AM', read: false, href: '/contractor/messages' },
  { id: 'n3', type: 'revision_requested', text: 'Revision requested on EST-4402 — Highland Oaks', timestamp: 'Oct 25', read: false, href: '/contractor/estimates' },
  { id: 'n4', type: 'estimate_rejected', text: 'EST-4403 rejected — Lakeview Townhomes', timestamp: 'Oct 24', read: true, href: '/contractor/estimates' },
  { id: 'n5', type: 'claim_update', text: 'CLM-8958 moved to Inspection stage', timestamp: 'Oct 23', read: true, href: '/contractor/projects' },
  { id: 'n6', type: 'document_shared', text: 'S. Reyes shared XA-2024-8841-v3.esx', timestamp: 'Oct 27', read: false, href: '/contractor/documents' },
];

export const ADJUSTER_NOTIFICATIONS: Notification[] = [
  { id: 'an1', type: 'new_message', text: 'Marcus Chen replied on CLM-8841 thread', timestamp: '10:44 AM', read: false, href: '/adjuster/messages' },
  { id: 'an2', type: 'document_shared', text: 'EST-4402 revised — Lupita Garza (CLM-8872)', timestamp: '2:15 PM', read: false, href: '/adjuster/review' },
  { id: 'an3', type: 'document_shared', text: 'Drone survey uploaded for CLM-8958', timestamp: 'Oct 25', read: false, href: '/adjuster/documents' },
  { id: 'an4', type: 'claim_update', text: 'CLM-8933 awaiting your review — 6 days pending', timestamp: 'Oct 24', read: true, href: '/adjuster/claims' },
];

export const POLICYHOLDER_NOTIFICATIONS: Notification[] = [
  { id: 'pn1', type: 'estimate_approved', text: 'Your claim CLM-8841 has been approved!', timestamp: '10:42 AM', read: false, href: '/policyholder/claims' },
  { id: 'pn2', type: 'new_message', text: 'New message from S. Reyes', timestamp: 'Oct 27', read: false, href: '/policyholder/messages' },
  { id: 'pn3', type: 'document_shared', text: 'Settlement form ready for your signature', timestamp: 'Oct 27', read: false, href: '/policyholder/documents' },
];

// ── Activity Feed ─────────────────────────────────────────────────────────────

export const ACTIVITY: ActivityEvent[] = [
  { id: 'act1', type: 'estimate_approved', description: 'EST-4401 approved — Riverside Commons ($42,850)', timestamp: '10:42 AM today', actor: 'S. Reyes', actorRole: 'adjuster', claimId: 'CLM-8841', href: '/contractor/estimates' },
  { id: 'act2', type: 'document_uploaded', description: 'Decking photos uploaded — CLM-8841', timestamp: '9:15 AM today', actor: 'Marcus Chen', actorRole: 'contractor', claimId: 'CLM-8841', href: '/contractor/documents' },
  { id: 'act3', type: 'message_sent', description: 'New message thread — Pinecrest drone survey', timestamp: '7:00 AM today', actor: 'K. Walsh', actorRole: 'adjuster', claimId: 'CLM-8958', href: '/contractor/messages' },
  { id: 'act4', type: 'revision_requested', description: 'Revision requested on EST-4402 — Highland Oaks', timestamp: 'Oct 25', actor: 'M. Torres', actorRole: 'adjuster', claimId: 'CLM-8872', href: '/contractor/estimates' },
  { id: 'act5', type: 'estimate_submitted', description: 'EST-4404 draft saved — Pinecrest Industrial', timestamp: 'Oct 25', actor: 'Marcus Chen', actorRole: 'contractor', claimId: 'CLM-8958', href: '/contractor/estimates' },
  { id: 'act6', type: 'status_changed', description: 'CLM-8958 moved to Inspection stage', timestamp: 'Oct 23', actor: 'System', actorRole: 'system', claimId: 'CLM-8958' },
];

// ── Claims ────────────────────────────────────────────────────────────────────

export const CLAIMS: Claim[] = [
  { id: 'CLM-8841', project: 'Riverside Commons', address: '1420 NW 12th Ave, Miami FL 33125', peril: 'Wind / Hail', stage: 'Approval', status: 'active', contractor: 'Marcus Chen', policyholder: 'R. Callahan', adjuster: 'S. Reyes', estimateAmount: 42850, xactimateAmount: 40200, filedDate: 'Oct 14', lastUpdate: 'Oct 27' },
  { id: 'CLM-8872', project: 'Highland Oaks Estate', address: '2204 Barton Hills Dr, Austin TX 78704', peril: 'Hail', stage: 'Review', status: 'active', contractor: 'Lupita Garza', policyholder: 'T. Okonkwo', adjuster: 'M. Torres', estimateAmount: 18300, xactimateAmount: 17100, filedDate: 'Oct 21', lastUpdate: 'Oct 26' },
  { id: 'CLM-8933', project: 'Lakeview Townhomes', address: '5901 Park Blvd N, Seminole FL 33781', peril: 'Storm', stage: 'Estimate', status: 'active', contractor: 'Jerome Banks', policyholder: 'HOA Board', adjuster: 'S. Reyes', estimateAmount: 61900, xactimateAmount: 54800, filedDate: 'Oct 20', lastUpdate: 'Oct 24' },
  { id: 'CLM-8958', project: 'Pinecrest Industrial', address: '800 Fulton Industrial Blvd, Atlanta GA', peril: 'Hurricane', stage: 'Inspection', status: 'active', contractor: 'Travis Okafor', policyholder: 'PCI Holdings', adjuster: 'K. Walsh', estimateAmount: 78200, xactimateAmount: 68400, filedDate: 'Oct 25', lastUpdate: 'Oct 25' },
  { id: 'CLM-8904', project: 'Meridian Warehouse', address: '7810 Commerce Pkwy, Miami FL', peril: 'Fire', stage: 'Settlement', status: 'closed', contractor: 'Marcus Chen', policyholder: 'MWG LLC', adjuster: 'M. Torres', estimateAmount: 98700, xactimateAmount: 95100, filedDate: 'Oct 3', lastUpdate: 'Oct 10' },
];

// ── Getter helpers ─────────────────────────────────────────────────────────────

export function getMessages(threadId: string): Message[] {
  return THREADS.find(t => t.id === threadId)?.messages ?? [];
}

export function getThread(threadId: string): Thread | undefined {
  return THREADS.find(t => t.id === threadId);
}

export function getClaims(): Claim[] { return CLAIMS; }
export function getClaim(id: string): Claim | undefined { return CLAIMS.find(c => c.id === id); }
export function getEstimates(): Estimate[] { return ESTIMATES; }
export function getDocuments(): Document[] { return DOCUMENTS; }
export function getNotifications(role: 'contractor' | 'adjuster' | 'policyholder'): Notification[] {
  if (role === 'contractor') return CONTRACTOR_NOTIFICATIONS;
  if (role === 'adjuster') return ADJUSTER_NOTIFICATIONS;
  return POLICYHOLDER_NOTIFICATIONS;
}
export function getActivity(): ActivityEvent[] { return ACTIVITY; }

// ── Real API client ───────────────────────────────────────────────────────────
// Browser calls go to /api/proxy/* (Next.js proxies to localhost:8001).
// Server-side calls (when window is undefined) go directly to localhost:8001.
// All functions fall back to mock data if the API is unreachable.

const CLIENT_BASE = '/api/proxy';
const SERVER_BASE = (process.env.BACKEND_URL ?? 'http://localhost:8001') + '/api/v1';

function apiBase(): string {
  return typeof window !== 'undefined' ? CLIENT_BASE : SERVER_BASE;
}

export function getStoredToken(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('tv_token') ?? '';
}

export function getStoredRole(): string {
  if (typeof window === 'undefined') return 'contractor';
  return localStorage.getItem('tv_role') ?? 'contractor';
}

async function apiFetch(
  path: string,
  options: RequestInit = {},
  token?: string
): Promise<Response> {
  const tok = token ?? getStoredToken();
  const headers: Record<string, string> = {
    'content-type': 'application/json',
    ...(options.headers as Record<string, string> ?? {}),
  };
  if (tok) headers['authorization'] = `Bearer ${tok}`;
  return fetch(`${apiBase()}${path}`, { ...options, headers });
}

// ── User / Auth ───────────────────────────────────────────────────────────────

export interface UserInfo {
  id: number;
  email: string;
  role_code: string;
  full_name: string;
}

export async function fetchUserMe(token: string): Promise<UserInfo | null> {
  try {
    const res = await apiFetch('/users/me', {}, token);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function loginWithCredentials(
  username: string,
  password: string
): Promise<string | null> {
  try {
    const body = new URLSearchParams({ username, password, grant_type: 'password' });
    const res = await fetch(`${apiBase()}/auth/token`, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    if (!res.ok) return null;
    const data = await res.json() as { access_token?: string };
    return data.access_token ?? null;
  } catch {
    return null;
  }
}

export function roleToPortal(role_code: string, email: string): string {
  const r = role_code.toLowerCase();
  const e = email.toLowerCase();
  if (r === 'contractor' || /roofing|construction|contractor/.test(e)) return '/contractor';
  if (r === 'adjuster' || /adjuster|adjust/.test(e)) return '/adjuster';
  return '/policyholder';
}

// ── Claims ────────────────────────────────────────────────────────────────────

export async function fetchClaims(token?: string): Promise<Claim[]> {
  try {
    const res = await apiFetch('/claims', {}, token);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json() as Claim[] | { items: Claim[] };
    const items = Array.isArray(data) ? data : data.items ?? [];
    return items.length > 0 ? items : CLAIMS;
  } catch {
    return CLAIMS;
  }
}

// ── Notifications ─────────────────────────────────────────────────────────────

export async function fetchNotifications(
  role: 'contractor' | 'adjuster' | 'policyholder',
  token?: string
): Promise<Notification[]> {
  try {
    const res = await apiFetch('/notifications', {}, token);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json() as Notification[] | { items: Notification[] };
    const items = Array.isArray(data) ? data : data.items ?? [];
    return items.length > 0 ? items : getNotifications(role);
  } catch {
    return getNotifications(role);
  }
}

// ── Threads / Messages ────────────────────────────────────────────────────────

export async function fetchThreads(token?: string): Promise<Thread[]> {
  try {
    const res = await apiFetch('/messages/threads', {}, token);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json() as Thread[] | { items: Thread[] };
    const items = Array.isArray(data) ? data : data.items ?? [];
    return items.length > 0 ? items : THREADS;
  } catch {
    return THREADS;
  }
}

export async function fetchThreadMessages(
  threadId: string,
  token?: string
): Promise<Message[]> {
  try {
    const res = await apiFetch(`/messages/threads/${threadId}/messages`, {}, token);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json() as Message[] | { items: Message[] };
    const items = Array.isArray(data) ? data : data.items ?? [];
    return items.length > 0 ? items : getMessages(threadId);
  } catch {
    return getMessages(threadId);
  }
}

export async function sendMessage(
  threadId: string,
  content: string,
  sender: Participant,
  token?: string
): Promise<Message> {
  const optimistic: Message = {
    id: `msg-${Date.now()}`,
    threadId,
    sender,
    content,
    timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  };
  try {
    const res = await apiFetch(
      `/messages/threads/${threadId}/messages`,
      { method: 'POST', body: JSON.stringify({ content, sender_name: sender.name }) },
      token
    );
    if (!res.ok) return optimistic;
    const data = await res.json() as Message;
    return data.id ? data : optimistic;
  } catch {
    return optimistic;
  }
}

// ── Documents ─────────────────────────────────────────────────────────────────

export async function fetchDocuments(
  claimId?: string,
  token?: string
): Promise<Document[]> {
  try {
    const path = claimId ? `/documents?claim_id=${claimId}` : '/documents';
    const res = await apiFetch(path, {}, token);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json() as Document[] | { items: Document[] };
    const items = Array.isArray(data) ? data : data.items ?? [];
    return items.length > 0 ? items : DOCUMENTS;
  } catch {
    return DOCUMENTS;
  }
}

export async function uploadDocument(
  file: File,
  claimId?: string,
  docType?: string,
  token?: string
): Promise<Document> {
  const fallback: Document = {
    id: `DOC-NEW-${Date.now()}`,
    name: file.name,
    type: (docType as Document['type']) ?? 'Other',
    claimId: claimId ?? null,
    size: `${(file.size / 1048576).toFixed(1)} MB`,
    uploadedBy: { name: 'You', role: 'contractor', initials: 'YU' },
    uploadedAt: 'Just now',
    status: 'pending',
    sharedWithAdjuster: false,
    sharedWithPolicyholder: false,
  };
  try {
    const form = new FormData();
    form.append('file', file);
    if (claimId) form.append('claim_id', claimId);
    if (docType) form.append('doc_type', docType);

    const tok = token ?? getStoredToken();
    const res = await fetch(`${apiBase()}/documents/upload`, {
      method: 'POST',
      headers: tok ? { authorization: `Bearer ${tok}` } : {},
      body: form,
    });
    if (!res.ok) return fallback;
    const data = await res.json() as Document;
    return data.id ? data : fallback;
  } catch {
    return fallback;
  }
}

export async function createEstimate(_data: Partial<Estimate>): Promise<Estimate> {
  throw new Error('createEstimate: implement with real DB');
}

import { getPoliciesForClaim, createPolicy, type Policy } from '@/lib/db';

export const runtime = 'edge';

export async function GET(_: Request, { params }: { params: Promise<{ claimId: string }> }) {
  try {
    const { claimId } = await params;
    const policies = await getPoliciesForClaim(claimId);
    return Response.json(policies);
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ claimId: string }> }) {
  try {
    const { claimId } = await params;
    const body = await request.json() as Omit<Policy, 'id' | 'claim_id'>;
    if (!body.policy_number) {
      return Response.json({ error: 'policy_number is required' }, { status: 400 });
    }
    const policy = await createPolicy({ ...body, claim_id: claimId });
    return Response.json(policy, { status: 201 });
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

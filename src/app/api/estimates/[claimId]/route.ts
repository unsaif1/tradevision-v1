import { getEstimatesForClaim, createEstimate, type Estimate } from '@/lib/db';

export const runtime = 'edge';

export async function GET(_: Request, { params }: { params: Promise<{ claimId: string }> }) {
  try {
    const { claimId } = await params;
    const estimates = await getEstimatesForClaim(claimId);
    return Response.json(estimates);
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ claimId: string }> }) {
  try {
    const { claimId } = await params;
    const body = await request.json() as Omit<Estimate, 'id' | 'claim_id' | 'created_at'>;
    const estimate = await createEstimate({ ...body, claim_id: claimId });
    return Response.json(estimate, { status: 201 });
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

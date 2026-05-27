import { getSettlementsForClaim, createSettlement, type Settlement } from '@/lib/db';

export const runtime = 'edge';

export async function GET(_: Request, { params }: { params: Promise<{ claimId: string }> }) {
  try {
    const { claimId } = await params;
    const settlements = await getSettlementsForClaim(claimId);
    return Response.json(settlements);
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ claimId: string }> }) {
  try {
    const { claimId } = await params;
    const body = await request.json() as Omit<Settlement, 'id' | 'claim_id' | 'created_at'>;
    if (typeof body.amount !== 'number') {
      return Response.json({ error: 'amount (number) is required' }, { status: 400 });
    }
    const settlement = await createSettlement({ ...body, claim_id: claimId });
    return Response.json(settlement, { status: 201 });
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

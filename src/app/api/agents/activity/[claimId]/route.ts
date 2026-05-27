import { getAgentActivityForClaim } from '@/lib/db';

export const runtime = 'edge';

export async function GET(_: Request, { params }: { params: Promise<{ claimId: string }> }) {
  try {
    const { claimId } = await params;
    const activity = await getAgentActivityForClaim(claimId);
    return Response.json(activity);
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

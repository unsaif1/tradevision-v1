import { listClaims, createClaim, type NewClaim } from '@/lib/db';

export const runtime = 'edge';

export async function GET() {
  try {
    const claims = await listClaims();
    return Response.json(claims);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as NewClaim;
    if (!body.claimant_name) {
      return Response.json({ error: 'claimant_name is required' }, { status: 400 });
    }
    const claim = await createClaim(body);
    return Response.json(claim, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
}

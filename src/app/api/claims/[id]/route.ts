import { getClaim, updateClaim, deleteClaim, type NewClaim } from '@/lib/db';

export const runtime = 'edge';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const claim = await getClaim(id);
    if (!claim) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json(claim);
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json() as Partial<NewClaim>;
    const claim = await updateClaim(id, body);
    if (!claim) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json(claim);
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const claim = await getClaim(id);
    if (!claim) return Response.json({ error: 'Not found' }, { status: 404 });
    await deleteClaim(id);
    return new Response(null, { status: 204 });
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

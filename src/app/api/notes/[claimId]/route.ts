import { getNotesForClaim, createNote, type Note } from '@/lib/db';

export const runtime = 'edge';

export async function GET(_: Request, { params }: { params: Promise<{ claimId: string }> }) {
  try {
    const { claimId } = await params;
    const notes = await getNotesForClaim(claimId);
    return Response.json(notes);
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ claimId: string }> }) {
  try {
    const { claimId } = await params;
    const body = await request.json() as Omit<Note, 'id' | 'claim_id' | 'created_at'>;
    if (!body.content) {
      return Response.json({ error: 'content is required' }, { status: 400 });
    }
    const note = await createNote({ ...body, claim_id: claimId });
    return Response.json(note, { status: 201 });
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

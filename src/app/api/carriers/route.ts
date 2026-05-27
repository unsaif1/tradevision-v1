import { listCarriers, createCarrier, type Carrier } from '@/lib/db';

export const runtime = 'edge';

export async function GET() {
  try {
    const carriers = await listCarriers();
    return Response.json(carriers);
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Omit<Carrier, 'id'>;
    if (!body.name) {
      return Response.json({ error: 'name is required' }, { status: 400 });
    }
    const carrier = await createCarrier(body);
    return Response.json(carrier, { status: 201 });
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 });
  }
}

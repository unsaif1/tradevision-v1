// Proxies /api/proxy/* → http://localhost:8001/api/v1/*
// Runs as Node.js (no 'runtime = edge') so it can reach localhost:8001.
// BACKEND_URL env var lets you override for staging/prod.

const BACKEND = (process.env.BACKEND_URL ?? 'http://localhost:8001').replace(/\/$/, '');

async function proxy(
  request: Request,
  params: Promise<{ path: string[] }>
): Promise<Response> {
  const { path } = await params;
  const url = new URL(request.url);
  const target = `${BACKEND}/api/v1/${path.join('/')}${url.search}`;

  const fwdHeaders = new Headers();
  const auth = request.headers.get('authorization');
  if (auth) fwdHeaders.set('authorization', auth);
  const ct = request.headers.get('content-type');
  if (ct) fwdHeaders.set('content-type', ct);

  let body: BodyInit | null = null;
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    body = await request.text();
  }

  try {
    const upstream = await fetch(target, {
      method: request.method,
      headers: fwdHeaders,
      body: body ?? undefined,
    });

    const resHeaders = new Headers();
    const upCt = upstream.headers.get('content-type');
    if (upCt) resHeaders.set('content-type', upCt);
    // Allow browser to read CORS response
    resHeaders.set('access-control-allow-origin', '*');

    return new Response(upstream.body, {
      status: upstream.status,
      headers: resHeaders,
    });
  } catch (err) {
    return Response.json(
      { error: 'Backend unreachable', detail: String(err) },
      { status: 503 }
    );
  }
}

export async function GET(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  return proxy(req, ctx.params);
}
export async function POST(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  return proxy(req, ctx.params);
}
export async function PUT(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  return proxy(req, ctx.params);
}
export async function PATCH(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  return proxy(req, ctx.params);
}
export async function DELETE(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  return proxy(req, ctx.params);
}
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'access-control-allow-headers': 'authorization,content-type',
    },
  });
}

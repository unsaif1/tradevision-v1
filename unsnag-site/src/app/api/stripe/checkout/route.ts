import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json(
      { error: 'Stripe is not configured. Add STRIPE_SECRET_KEY to your environment.' },
      { status: 503 },
    );
  }

  const body = await request.json() as { priceId?: string; email?: string };
  const { priceId, email } = body;

  if (!priceId) {
    return NextResponse.json({ error: 'priceId is required.' }, { status: 400 });
  }

  // Lazy-import so the module loads only when the key exists
  const Stripe = (await import('stripe')).default;
  const stripe = new Stripe(stripeKey);

  const origin = request.headers.get('origin') ?? 'https://unsnag.io';

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: email ?? undefined,
    success_url: `${origin}/app/billing?success=1`,
    cancel_url:  `${origin}/app/billing?cancelled=1`,
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: session.url });
}

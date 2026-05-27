import { Resend } from 'resend';

const NOTIFY_EMAIL = 'unsaif@gmail.com';
const FROM_ADDRESS = 'UnSnag.io <noreply@unsnag.io>';

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { email?: string } | null;

  if (!body?.email || typeof body.email !== 'string') {
    return Response.json({ error: 'A valid email is required.' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const email: string = body.email.trim().toLowerCase();

  if (process.env.RESEND_AUDIENCE_ID) {
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
    }).catch(() => null);
  }

  await resend.emails.send({
    from: FROM_ADDRESS,
    to: NOTIFY_EMAIL,
    subject: `New waitlist signup — ${email}`,
    html: `<p><strong>${email}</strong> joined the UnSnag waitlist.</p>`,
  });

  await resend.emails.send({
    from: FROM_ADDRESS,
    to: email,
    subject: "You're on the UnSnag waitlist",
    html: `
      <div style="font-family:sans-serif;max-width:520px;color:#171717">
        <h2 style="margin:0 0 12px">You're in the swarm.</h2>
        <p style="color:#525252;line-height:1.6">
          We'll notify you the moment UnSnag goes live — you'll be first in line
          for early access and launch pricing.
        </p>
        <hr style="margin:24px 0;border:none;border-top:1px solid #eaeaea"/>
        <p style="color:#888;font-size:13px">
          UnSnag.io · Forensic data clarity<br/>
          <a href="https://unsnag.io" style="color:#2e5bff">unsnag.io</a>
        </p>
      </div>
    `,
  });

  return Response.json({ success: true });
}

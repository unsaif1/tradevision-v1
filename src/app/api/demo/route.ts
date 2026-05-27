import { Resend } from 'resend';

const NOTIFY_EMAIL = 'unsaif@gmail.com';
const FROM_ADDRESS = 'UnSnag.io <noreply@unsnag.io>';

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    email?: string;
    company?: string;
    dataVolume?: string;
  } | null;

  if (!body || !body.email || !body.company) {
    return Response.json({ error: 'Email and company are required.' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email, company, dataVolume } = body as {
    email: string;
    company: string;
    dataVolume?: string;
  };

  const volumeLine = dataVolume ? `<p><strong>Data Volume:</strong> ${dataVolume}</p>` : '';

  await resend.emails.send({
    from: FROM_ADDRESS,
    to: NOTIFY_EMAIL,
    subject: `New demo request — ${company}`,
    html: `
      <div style="font-family:sans-serif;max-width:520px;color:#171717">
        <h2 style="margin:0 0 16px">New demo request</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${volumeLine}
        <hr style="margin:24px 0;border:none;border-top:1px solid #eaeaea"/>
        <p style="color:#888;font-size:13px">Submitted via unsnag.io</p>
      </div>
    `,
  });

  await resend.emails.send({
    from: FROM_ADDRESS,
    to: email,
    subject: "Your UnSnag demo request — we'll be in touch",
    html: `
      <div style="font-family:sans-serif;max-width:520px;color:#171717">
        <h2 style="margin:0 0 12px">Request received.</h2>
        <p style="color:#525252;line-height:1.6">
          Thanks for reaching out, ${company}. Our team will review your requirements
          and follow up within one business day to schedule your technical deep-dive.
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

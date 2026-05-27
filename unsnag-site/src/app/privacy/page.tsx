import Link from 'next/link';
import type { Metadata } from 'next';
import s from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — UnSnag.io',
  description: 'How UnSnag collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <div className={s.page}>
      <nav className={s.nav}>
        <Link href="/" className={s.navLogo}>
          <span className={`material-symbols-outlined ${s.navLogoIcon}`}>bolt</span>
          UNSNAG.IO
        </Link>
        <Link href="/" className={s.navBack}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
          Back to home
        </Link>
      </nav>

      <div className={s.wrap}>
        <div className={s.eyebrow}>Legal</div>
        <h1 className={s.title}>Privacy Policy</h1>
        <p className={s.meta}>Effective date: May 22, 2025 · Last updated: May 22, 2025</p>

        <div className={s.prose}>
          <p>
            UnSnag.io (&quot;UnSnag&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your
            privacy. This policy explains what information we collect, how we use it, and
            your rights regarding that information.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us:</p>
          <ul>
            <li><strong>Waitlist signups</strong> — your email address when you join the early access list.</li>
            <li><strong>Demo requests</strong> — your work email, company name, and estimated data volume.</li>
            <li><strong>Persona selection</strong> — your chosen operational role, stored locally in your browser (localStorage / chrome.storage.local). We do not transmit this to our servers unless you are a logged-in user.</li>
          </ul>
          <p>We also collect limited technical data automatically:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Pages visited and time spent (via Cloudflare Analytics — no cookies, no cross-site tracking)</li>
            <li>IP address (retained by Cloudflare for security purposes per their privacy policy)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To send you launch updates and early access notifications (waitlist emails)</li>
            <li>To respond to demo requests and schedule technical calls</li>
            <li>To improve the product based on aggregate, anonymised usage patterns</li>
            <li>To detect and prevent abuse or fraud</li>
          </ul>
          <p>We do not sell your personal data. We do not use it for advertising.</p>

          <h2>3. Email Communications</h2>
          <p>
            Transactional and marketing emails are sent via <strong>Resend</strong> (resend.com).
            Every marketing email includes an unsubscribe link. You may also opt out at any
            time by emailing <a href="mailto:privacy@unsnag.io">privacy@unsnag.io</a>.
          </p>

          <h2>4. Data Storage and Retention</h2>
          <p>
            Data is stored on Cloudflare infrastructure in the United States and European Union.
            We retain waitlist and demo request data for up to 24 months, or until you request
            deletion. Locally stored persona preferences remain on your device and are never
            transmitted without your action.
          </p>

          <h2>5. Third-Party Services</h2>
          <ul>
            <li><strong>Cloudflare</strong> — hosting, DDoS protection, and analytics</li>
            <li><strong>Resend</strong> — transactional email delivery</li>
          </ul>
          <p>
            Each third party processes data under their own privacy policies and data processing
            agreements. We do not share your data with any other third parties.
          </p>

          <h2>6. Cookies</h2>
          <p>
            UnSnag.io does not use tracking cookies. We use browser localStorage and
            chrome.storage.local solely to persist your in-app preferences (persona selection)
            on your own device.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for email communications at any time</li>
            <li>Lodge a complaint with your local data protection authority (EEA/UK residents)</li>
          </ul>
          <p>
            To exercise any of these rights, email <a href="mailto:privacy@unsnag.io">privacy@unsnag.io</a>.
            We will respond within 30 days.
          </p>

          <h2>8. Children</h2>
          <p>
            UnSnag is not directed at children under 16. We do not knowingly collect personal
            data from anyone under 16. If you believe we have inadvertently done so, contact us
            immediately.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this policy as the product evolves. Material changes will be notified
            via email to registered users. Continued use of UnSnag after the effective date
            constitutes acceptance of the updated policy.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions or requests: <a href="mailto:privacy@unsnag.io">privacy@unsnag.io</a><br />
            UnSnag.io · hello@unsnag.io
          </p>
        </div>
      </div>

      <footer className={s.footer}>
        © 2025 UnSnag.io
        <div className={s.footerLinks}>
          <Link href="/privacy" className={s.footerLink}>Privacy</Link>
          <Link href="/terms" className={s.footerLink}>Terms</Link>
          <Link href="mailto:hello@unsnag.io" className={s.footerLink}>Contact</Link>
        </div>
      </footer>
    </div>
  );
}

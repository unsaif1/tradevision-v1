import Link from 'next/link';
import type { Metadata } from 'next';
import s from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — UnSnag.io',
  description: 'Terms governing your use of the UnSnag platform.',
};

export default function TermsPage() {
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
        <h1 className={s.title}>Terms of Service</h1>
        <p className={s.meta}>Effective date: May 22, 2025 · Last updated: May 22, 2025</p>

        <div className={s.prose}>
          <p>
            By accessing or using UnSnag.io (&quot;UnSnag&quot;, &quot;the Service&quot;), you agree to be
            bound by these Terms of Service. If you do not agree, do not use the Service.
          </p>

          <h2>1. The Service</h2>
          <p>
            UnSnag provides an AI-powered signal extraction and data intelligence platform,
            including a web application, API, and browser extension. Features and availability
            may change as the product evolves. We will notify registered users of material
            changes via email.
          </p>

          <h2>2. Accounts and Access</h2>
          <p>
            You must provide accurate information when creating an account. You are responsible
            for maintaining the security of your credentials and for all activity under your
            account. Notify us immediately at <a href="mailto:hello@unsnag.io">hello@unsnag.io</a> if
            you suspect unauthorised access.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>You agree not to use UnSnag to:</p>
          <ul>
            <li>Violate any applicable law or regulation</li>
            <li>Extract, scrape, or process data in violation of the target site&apos;s terms of service or applicable law</li>
            <li>Collect personal data without appropriate legal basis under GDPR, CCPA, or equivalent legislation</li>
            <li>Conduct denial-of-service attacks or overwhelm third-party infrastructure</li>
            <li>Resell or sublicense API access without written permission</li>
            <li>Attempt to reverse-engineer, decompile, or circumvent platform security</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate these terms
            without refund.
          </p>

          <h2>4. Subscription and Payment</h2>
          <p>
            Paid plans are billed monthly. You may upgrade or downgrade at any time; changes
            take effect at the next billing cycle. Cancellations stop future charges but do not
            generate refunds for the current period. All prices are in USD and exclusive of
            applicable taxes.
          </p>
          <p>
            We use a third-party payment processor (Stripe) to handle transactions. We do not
            store your payment card details. Stripe&apos;s terms and privacy policy apply to
            payment processing.
          </p>

          <h2>5. Free Tier</h2>
          <p>
            The Free tier is provided &quot;as-is&quot; without SLA guarantees. We may impose rate
            limits, reduce feature access, or discontinue the Free tier with 30 days&apos; notice.
          </p>

          <h2>6. Data and Intellectual Property</h2>
          <p>
            You retain ownership of data you input into UnSnag. You grant us a limited licence
            to process that data solely to provide the Service. UnSnag retains ownership of
            the platform, algorithms, and all derived product improvements. Signal outputs
            delivered to you may be used for your internal business purposes.
          </p>

          <h2>7. Uptime and SLA</h2>
          <p>
            Pro and Enterprise plans target 99.99% monthly uptime. Free and Paid plans are
            provided on a best-effort basis. Scheduled maintenance will be announced via the
            System Status page at <a href="https://unsnag.io/status">unsnag.io/status</a>.
            Downtime credits, where applicable, are the sole remedy for uptime failures.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, UnSnag shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from
            your use of the Service. Our total aggregate liability shall not exceed the
            greater of (a) the fees paid by you in the 12 months preceding the claim, or
            (b) USD $100.
          </p>

          <h2>9. Warranty Disclaimer</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any
            kind, express or implied, including merchantability, fitness for a particular
            purpose, or non-infringement. We do not warrant that signal outputs are accurate,
            complete, or suitable for any specific use case.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold UnSnag harmless from any claims, losses, or
            damages arising from your use of the Service in violation of these Terms or
            applicable law.
          </p>

          <h2>11. Termination</h2>
          <p>
            Either party may terminate at any time. Upon termination, your access ceases and
            your data will be deleted within 90 days unless retention is required by law.
            Sections 6, 8, 9, and 10 survive termination.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Florida, United States,
            without regard to conflict of law principles. Disputes shall be resolved by
            binding arbitration in accordance with the AAA Commercial Arbitration Rules,
            except either party may seek injunctive relief in any court of competent
            jurisdiction.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms at any time. We will provide at least 14 days&apos; notice
            for material changes via email. Continued use after the effective date constitutes
            acceptance.
          </p>

          <h2>14. Contact</h2>
          <p>
            <a href="mailto:hello@unsnag.io">hello@unsnag.io</a><br />
            UnSnag.io
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

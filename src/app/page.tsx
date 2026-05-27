import Navbar from '@/components/layout/Navbar';

const services = [
  {
    title: 'Website Health Check',
    description:
      'Complete audit of speed, security, SEO, mobile, and accessibility. Clear priorities, zero fluff.',
  },
  {
    title: 'AI Chatbot Integration',
    description:
      'Custom-trained AI assistant on your site. Handles inquiries, bookings, and support 24/7.',
  },
  {
    title: 'Full Website Redesign',
    description:
      'From concept to launch. Modern framework, conversion-focused layout, zero vendor lock-in.',
  },
  {
    title: 'Marketing Automation',
    description:
      'CRM setup, email sequences, lead routing, and analytics tracking built into your workflow.',
  },
  {
    title: 'Local SEO & Content',
    description:
      'Optimize your presence, rank locally, and publish content that drives qualified traffic.',
  },
  {
    title: 'Custom Web Applications',
    description:
      'Booking systems, client portals, internal dashboards. Tailored to how you work.',
  },
];

const stats = [
  { number: '70%', label: 'Support automated' },
  { number: '24hr', label: 'Audit turnaround' },
  { number: '2wk', label: 'Average project speed' },
];

const steps = [
  {
    num: '01',
    title: 'Free Strategy Call',
    description:
      'We review your current setup, identify bottlenecks, and map a 30-day action plan.',
  },
  {
    num: '02',
    title: 'Scoped Proposal',
    description:
      'You get a fixed-price quote with clear deliverables, timeline, and success metrics.',
  },
  {
    num: '03',
    title: 'Build & Launch',
    description:
      'We deliver on sprint cycles. Real-time updates. No scope creep. No surprises.',
  },
];

export default function Home() {
  return (
    <>
      {/* ============ NAVBAR ============ */}
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero__pill">Custom Digital Infrastructure</div>
          <h1 className="hero__heading">
            Your digital presence,<br />
            <span className="hero__heading-accent">built to perform</span>
          </h1>
          <p className="hero__subtitle">
            We design, build, and maintain modern websites, AI integrations, and
            automation for businesses that need speed, clarity, and results.
          </p>
          <div className="hero__buttons">
            <a href="#contact" className="btn-primary">
              Book a Free Strategy Call
            </a>
            <a href="#work" className="btn-ghost">
              See Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-divider" id="work">
        <div className="container">
          <div className="section-label">What we deliver.</div>
          <h2 className="section__heading">No packages. We scope everything to your exact needs.</h2>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__description">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="section-divider">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__number">{s.number}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section-divider" id="process">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2 className="section__heading">Simple. Fast. Transparent.</h2>
          <p className="section__subtitle">Every project follows the same proven path.</p>
          <div className="process-grid">
            {steps.map((s) => (
              <div className="process-step" key={s.num}>
                <div className="process-step__number">{s.num}</div>
                <h3 className="process-step__title">{s.title}</h3>
                <p className="process-step__description">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section-divider" id="contact">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-box__heading">Ready to upgrade?</h2>
            <p className="cta-box__text">
              Book a 15-minute strategy call. We&apos;ll audit your current setup
              and show you exactly what to build next.
            </p>
            <a
              href="mailto:hello@saifhaven.com"
              className="btn-primary"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container">
          © 2026 SaifHaven.com — Built for speed.
        </div>
      </footer>
    </>
  );
}

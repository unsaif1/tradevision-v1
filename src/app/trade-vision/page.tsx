import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade Vision — AI-Powered Claims Management',
  description:
    'Trade Vision is the modern claims management platform for public adjusters and contractors. AI agents handle intake, coverage review, estimates, and settlement — so you close faster.',
};

const features = [
  {
    icon: '⚡',
    title: 'AI Agent Suite',
    description:
      'Eight specialized AI agents run the moment a claim is opened — intake triage, coverage analysis, damage estimates, document checklists, settlement strategy, and more. No manual research.',
  },
  {
    icon: '📋',
    title: 'Claims Pipeline',
    description:
      'Track every claim from first notice of loss to closed file. Filter by status, loss type, adjuster, or carrier. Full audit trail with timestamped notes and agent activity logs.',
  },
  {
    icon: '🏢',
    title: 'Carrier & Policy Hub',
    description:
      'Store policy details, coverage limits, deductibles, and adjuster contacts per claim. Built-in carrier directory so you never search for a phone number twice.',
  },
];

const agents = [
  {
    type: 'intake',
    name: 'Intake Agent',
    description: 'Validates loss type, estimates severity, and flags missing information the moment a claim is created.',
  },
  {
    type: 'coverage',
    name: 'Coverage Agent',
    description: 'Reviews policy details against the loss type and surfaces likely coverage gaps or exclusions.',
  },
  {
    type: 'estimate',
    name: 'Estimate Agent',
    description: 'Generates a low/high repair cost range based on the loss description and property details.',
  },
  {
    type: 'document',
    name: 'Document Agent',
    description: 'Lists required documents for the claim type and flags anything that appears to be missing.',
  },
  {
    type: 'settlement',
    name: 'Settlement Agent',
    description: 'Recommends a fair settlement range and negotiation strategy based on claim facts and status.',
  },
  {
    type: 'adjuster',
    name: 'Adjuster Agent',
    description: 'Determines the right adjuster type and priority level given the complexity of the loss.',
  },
  {
    type: 'storm',
    name: 'Storm Agent',
    description: 'Correlates loss date and property location to assess whether the damage is storm-related.',
  },
  {
    type: 'status',
    name: 'Status Agent',
    description: 'Reviews the current claim state and recommends the single best next action to move it forward.',
  },
];

const stats = [
  { number: '8', label: 'AI agents per claim' },
  { number: '<30s', label: 'Agent run time' },
  { number: '100%', label: 'Audit trail coverage' },
];

const steps = [
  {
    num: '01',
    title: 'Open a Claim',
    description:
      'Enter claimant info, loss details, and carrier. Trade Vision generates a claim number and immediately queues the AI intake agent.',
  },
  {
    num: '02',
    title: 'Run the Agents',
    description:
      'One click runs all eight agents. Coverage, estimates, documents, settlement strategy — every analysis is stored and timestamped.',
  },
  {
    num: '03',
    title: 'Close Faster',
    description:
      'Use agent recommendations to negotiate, collect documents, and hit settlement targets. Track every update in the timeline.',
  },
];

const useCases = [
  {
    title: 'Public Adjusters',
    description:
      'Manage your entire book of claims in one place. Let AI handle the research while you handle the client relationship.',
  },
  {
    title: 'General Contractors',
    description:
      'Track insurance-funded restoration projects from intake to payment. No more spreadsheets or missed follow-ups.',
  },
  {
    title: 'Restoration Companies',
    description:
      'Coordinate claim docs, carrier contacts, and settlement timelines across multiple jobs simultaneously.',
  },
];

export default function TradeVisionPage() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="tv-navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <a href="/trade-vision" className="tv-navbar__logo">Trade Vision</a>
          <div className="tv-navbar__links">
            <a href="#features" className="navbar__link">Features</a>
            <a href="#agents" className="navbar__link">AI Agents</a>
            <a href="#how-it-works" className="navbar__link">How It Works</a>
            <a href="/care" className="navbar__link">Care Plans</a>
            <a href="/claims" className="navbar__cta">Open App</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero__pill">Now with 8 AI Agents</div>
          <h1 className="hero__heading">
            Close more claims,<br />
            <span className="hero__heading-accent">with less manual work</span>
          </h1>
          <p className="hero__subtitle">
            Trade Vision is the claims management platform built for public adjusters,
            contractors, and restoration teams. AI agents handle intake, coverage, estimates,
            and settlement strategy — automatically.
          </p>
          <div className="hero__buttons">
            <a href="/claims" className="btn-primary">Open App</a>
            <a href="#agents" className="btn-ghost">See the Agents</a>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section-divider" id="features">
        <div className="container">
          <div className="section-label">Built for adjusters</div>
          <h2 className="section__heading">Everything you need. Nothing you don&apos;t.</h2>
          <p className="section__subtitle">
            Trade Vision replaces spreadsheets, email chains, and manual research with
            one connected workflow.
          </p>
          <div className="services-grid">
            {features.map((f) => (
              <div key={f.title} className="service-card">
                <div className="tv-feature-icon">{f.icon}</div>
                <h3 className="service-card__title">{f.title}</h3>
                <p className="service-card__description">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI AGENTS ===== */}
      <section className="section-divider" id="agents">
        <div className="container">
          <div className="section-label">Powered by AI</div>
          <h2 className="section__heading">Eight agents. One click.</h2>
          <p className="section__subtitle">
            Every claim gets the full suite automatically. Each agent runs in under 30 seconds
            and stores its output to the claim timeline.
          </p>
          <div className="tv-agents-grid">
            {agents.map((a) => (
              <div key={a.type} className="tv-agent-card">
                <div className="tv-agent-card__name">{a.name}</div>
                <p className="tv-agent-card__desc">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
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

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-divider" id="how-it-works">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2 className="section__heading">Open. Run. Close.</h2>
          <p className="section__subtitle">
            The same workflow every time — so nothing slips through the cracks.
          </p>
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

      {/* ===== USE CASES ===== */}
      <section className="section-divider" id="use-cases">
        <div className="container">
          <div className="section-label">Who uses Trade Vision</div>
          <h2 className="section__heading">Built for the whole claims team.</h2>
          <div className="services-grid">
            {useCases.map((u) => (
              <div key={u.title} className="service-card">
                <h3 className="service-card__title">{u.title}</h3>
                <p className="service-card__description">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CARE PLANS TEASER ===== */}
      <section className="section-divider" id="pricing">
        <div className="container">
          <div className="tv-pricing-teaser">
            <div className="tv-pricing-teaser__left">
              <div className="section-label">Care plans</div>
              <h2 className="section__heading">Support that matches how you work.</h2>
              <p className="section__subtitle">
                From self-serve docs to a dedicated account manager — every plan includes
                full platform access. Upgrade or cancel anytime.
              </p>
              <div className="hero__buttons" style={{ justifyContent: 'flex-start' }}>
                <a href="/care" className="btn-primary">View Plans</a>
                <a href="mailto:sales@trade-vision.io?subject=Trade+Vision+Enterprise+Inquiry" className="btn-ghost">Talk to Sales</a>
              </div>
            </div>
            <div className="tv-pricing-teaser__plans">
              {[
                { name: 'Essential', price: 'Free' },
                { name: 'Growth', price: '$99/mo', highlight: true },
                { name: 'Enterprise', price: 'Custom' },
              ].map((p) => (
                <div
                  key={p.name}
                  className={`tv-pricing-pill${p.highlight ? ' tv-pricing-pill--highlight' : ''}`}
                >
                  <span className="tv-pricing-pill__name">{p.name}</span>
                  <span className="tv-pricing-pill__price">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-divider" id="start">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-box__heading">Ready to run your first claim?</h2>
            <p className="cta-box__text">
              Open Trade Vision, create a claim, and let the AI agents do the legwork.
              No setup required — just start.
            </p>
            <div className="hero__buttons">
              <a href="/claims" className="btn-primary">Open the App</a>
              <a href="mailto:support@trade-vision.io?subject=Trade+Vision+Demo" className="btn-ghost">Request a Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="tv-footer-inner">
            <span>© 2026 Trade Vision — Built for adjusters.</span>
            <div className="tv-footer-links">
              <a href="/care" className="tv-footer-link">Care Plans</a>
              <a href="/claims" className="tv-footer-link">App</a>
              <a href="mailto:support@trade-vision.io" className="tv-footer-link">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

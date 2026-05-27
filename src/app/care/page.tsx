import type { Metadata } from 'next';
import { CARE_CONFIG as C } from './config';

export const metadata: Metadata = {
  title: `Care Plans | ${C.brand}`,
  description:
    'Choose the right care plan for your trading platform. Expert support, onboarding, and continuous improvements — built for traders who need reliability.',
};

const plans = [
  {
    name: 'Essential',
    price: 'Free',
    period: '',
    description: 'Core support for self-sufficient traders getting started.',
    features: [
      'Email support (48h response)',
      'Access to knowledge base',
      'Platform status updates',
      'Community forum access',
    ],
    cta: 'Get Started',
    href: `mailto:${C.supportEmail}?subject=Essential+Plan+Inquiry`,
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$99',
    period: '/mo',
    description: 'Priority care for active traders who demand fast turnarounds.',
    features: [
      'Priority email support (4h response)',
      'Monthly strategy review call',
      'Platform configuration assistance',
      'Early access to new features',
      'Dedicated support agent',
    ],
    cta: 'Choose Growth',
    href: `mailto:${C.supportEmail}?subject=Growth+Plan+Inquiry`,
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'White-glove care for institutional desks and large teams.',
    features: [
      '24/7 phone & chat support',
      'Dedicated account manager',
      'Custom integrations & APIs',
      'SLA guarantees',
      'On-site onboarding available',
    ],
    cta: 'Talk to Sales',
    href: `mailto:${C.salesEmail}?subject=Enterprise+Plan+Inquiry`,
    highlight: false,
  },
];

const features = [
  {
    title: 'Fast Response Times',
    description:
      'Every support ticket is triaged within minutes. Growth and Enterprise clients get guaranteed SLA windows.',
  },
  {
    title: 'Expert Support Team',
    description:
      'Our team understands trading infrastructure — no generic help desk. Real answers from people who know the platform.',
  },
  {
    title: 'Proactive Monitoring',
    description:
      'We watch your uptime, alert latency, and data feeds before you notice a problem.',
  },
  {
    title: 'Continuous Improvements',
    description:
      'Care plans include regular platform reviews so your setup keeps pace with how you trade.',
  },
];

export default function CarePage() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="tv-navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <a href="/" className="tv-navbar__logo">{C.brand}</a>
          <div className="tv-navbar__links">
            <a href="/#features" className="navbar__link">Features</a>
            <a href="/#pricing" className="navbar__link">Pricing</a>
            <a href="/care" className="navbar__link" aria-current="page">Care</a>
            <a
              href={`mailto:${C.supportEmail}`}
              className="navbar__cta"
            >
              Contact Support
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero__pill">{C.brand} Care</div>
          <h1 className="hero__heading">
            Support built for<br />
            <span className="hero__heading-accent">serious traders</span>
          </h1>
          <p className="hero__subtitle">
            Pick a care plan that matches how you trade. From self-serve
            docs to a 24/7 dedicated team — we have you covered at every level.
          </p>
          <div className="hero__buttons">
            <a href="#plans" className="btn-primary">
              View Plans
            </a>
            <a href="#contact" className="btn-ghost">
              Talk to Support
            </a>
          </div>
        </div>
      </section>

      {/* ===== PLANS ===== */}
      <section className="section-divider" id="plans">
        <div className="container">
          <div className="section-label">Care plans</div>
          <h2 className="section__heading">Pick the right level of support.</h2>
          <p className="section__subtitle">
            Every plan includes access to our platform and documentation. Upgrade
            anytime.
          </p>
          <div className="care-plans-grid">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`care-plan-card${plan.highlight ? ' care-plan-card--highlight' : ''}`}
              >
                {plan.highlight && (
                  <div className="care-plan-card__badge">Most Popular</div>
                )}
                <div className="care-plan-card__header">
                  <h3 className="care-plan-card__name">{plan.name}</h3>
                  <div className="care-plan-card__price">
                    <span className="care-plan-card__price-amount">{plan.price}</span>
                    {plan.period && (
                      <span className="care-plan-card__price-period">{plan.period}</span>
                    )}
                  </div>
                  <p className="care-plan-card__description">{plan.description}</p>
                </div>
                <ul className="care-plan-card__features">
                  {plan.features.map((f) => (
                    <li key={f} className="care-plan-card__feature">
                      <span className="care-plan-card__check" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={plan.highlight ? 'btn-primary' : 'btn-ghost'}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section-divider" id="features">
        <div className="container">
          <div className="section-label">What&apos;s included</div>
          <h2 className="section__heading">Care that actually cares.</h2>
          <div className="services-grid">
            {features.map((f) => (
              <div key={f.title} className="service-card">
                <h3 className="service-card__title">{f.title}</h3>
                <p className="service-card__description">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-divider" id="contact">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-box__heading">Not sure which plan fits?</h2>
            <p className="cta-box__text">
              Book a free 15-minute call with our team. We&apos;ll review your setup
              and recommend the right level of care for how you trade.
            </p>
            <div className="hero__buttons">
              <a
                href={`mailto:${C.supportEmail}?subject=Care+Plan+Consultation`}
                className="btn-primary"
              >
                Book a Free Call
              </a>
              <a
                href={`mailto:${C.supportEmail}`}
                className="btn-ghost"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          © 2026 {C.brand} — Built for traders.
        </div>
      </footer>
    </>
  );
}

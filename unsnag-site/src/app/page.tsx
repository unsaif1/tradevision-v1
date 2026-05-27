'use client';

import { useState, useRef, FormEvent } from 'react';
import s from './page.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';

const USE_CASES = [
  {
    icon: 'storefront',
    title: 'E-commerce Price Intelligence',
    desc: 'Continuous monitoring of competitor SKUs, dynamic pricing, and inventory fluctuations across global marketplaces.',
    stat: 'Signal Strength 98.4%',
    badge: 'active' as const,
  },
  {
    icon: 'monitoring',
    title: 'Financial Sentiment Analysis',
    desc: 'Real-time extraction of sentiment polarity from earnings calls, SEC filings, and financial news feeds.',
    stat: 'Confidence Score 92.5%',
    badge: 'processing' as const,
  },
  {
    icon: 'gavel',
    title: 'Legal Document Forensics',
    desc: 'Deep structural parsing of contracts and case law to identify hidden liabilities and non-standard clauses.',
    stat: 'Accuracy 99.9%',
    badge: 'optimized' as const,
  },
  {
    icon: 'security',
    title: 'Cybersecurity Threat Mapping',
    desc: 'Ingestion of dark web forums and C2 server telemetry to map emerging zero-day exploits and threat actors.',
    stat: 'Signal Strength 96.5%',
    badge: 'active' as const,
  },
  {
    icon: 'local_shipping',
    title: 'Supply Chain Optimization',
    desc: 'Aggregation of shipping manifests, weather patterns, and geopolitical news to forecast logistical bottlenecks.',
    stat: 'Confidence Score 91.0%',
    badge: 'processing' as const,
  },
  {
    icon: 'health_and_safety',
    title: 'Healthcare Data Synthesis',
    desc: 'Anonymized processing of clinical trials and medical journals to surface adverse drug reactions and efficacy signals.',
    stat: 'Signal Strength 97.8%',
    badge: 'optimized' as const,
  },
  {
    icon: 'domain',
    title: 'Real Estate Market Analytics',
    desc: 'Cross-referencing zoning laws and municipal data to surface undervalued properties and predict market shifts.',
    stat: 'Confidence Score 95.6%',
    badge: 'active' as const,
  },
  {
    icon: 'science',
    title: 'Academic Research Extraction',
    desc: 'Semantic parsing of preprint servers and paywalled journals to synthesize cross-disciplinary breakthroughs.',
    stat: 'Signal Strength 82.5%',
    badge: 'processing' as const,
  },
  {
    icon: 'ads_click',
    title: 'Ad Tech Verification',
    desc: 'High-frequency auditing of RTB networks to detect ad fraud, brand safety violations, and spoofed domains.',
    stat: 'Signal Strength 99.1%',
    badge: 'active' as const,
  },
];

const PIPELINE_STEPS = [
  {
    num: '01',
    icon: 'hub',
    title: 'Crawler Swarm',
    desc: '1,024 active nodes ingest raw web data at scale.',
    stat: '5.2 TB/s',
  },
  {
    num: '02',
    icon: 'analytics',
    title: 'Signal Extraction',
    desc: 'Emotional noise filtered. Friction records isolated in real time.',
    stat: 'Real-time',
  },
  {
    num: '03',
    icon: 'rule',
    title: 'Validation Agent',
    desc: 'Multi-pass heuristics score every event. 0.85+ threshold only.',
    stat: 'Gap Score 9.1',
  },
  {
    num: '04',
    icon: 'psychology',
    title: 'Persona Mapper',
    desc: 'Routes clean signals to the right lens: Analyst, Architect, DevOps, and more.',
    stat: '6 Personas',
  },
  {
    num: '05',
    icon: 'inventory_2',
    title: 'Product Output',
    desc: 'Forensic-grade structured data delivered via API or extension.',
    stat: '99.8% confidence',
  },
];

function BadgeClass(badge: 'active' | 'processing' | 'optimized') {
  if (badge === 'active') return s.badgeActive;
  if (badge === 'processing') return s.badgeProcessing;
  return s.badgeOptimized;
}

function BadgeLabel(badge: 'active' | 'processing' | 'optimized') {
  if (badge === 'active') return 'Active Signal';
  if (badge === 'processing') return 'Processing';
  return 'Optimized';
}

export default function UnsnagPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<WaitlistStatus>('idle');

  async function handleWaitlist(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!waitlistEmail) return;
    setWaitlistStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail }),
      });
      if (!res.ok) throw new Error();
      setWaitlistStatus('success');
    } catch {
      setWaitlistStatus('error');
    }
  }

  async function handleDemoSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('loading');
    setFormError('');

    const data = new FormData(e.currentTarget);
    const payload = {
      email: data.get('email') as string,
      company: data.get('company') as string,
      dataVolume: data.get('dataVolume') as string,
    };

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? 'Something went wrong.');
      }
      setFormStatus('success');
      formRef.current?.reset();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Something went wrong.');
      setFormStatus('error');
    }
  }

  return (
    <div>
      {/* ── Navbar ── */}
      <nav className={s.nav}>
        <div className={s.container}>
          <div className={s.navInner}>
            <a href="#" className={s.navLogo}>
              <span className={`material-symbols-outlined ${s.navLogoIcon}`}>bolt</span>
              UNSNAG.IO
            </a>

            <ul className={s.navLinks}>
              <li><a href="#pipeline" className={s.navLink}>Swarm</a></li>
              <li><a href="#signals" className={s.navLink}>Signals</a></li>
              <li><a href="#pricing" className={s.navLink}>Pricing</a></li>
              <li><a href="#demo" className={s.navLink}>Solutions</a></li>
            </ul>

            <div className={s.navActions}>
              <a href="#" className={s.btnGhost}>Download Extension</a>
              <a href="/app" className={s.btnPrimary}>Launch App</a>
            </div>

            <button
              className={s.navMobileBtn}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation"
            >
              <span className={s.navMobileBar} />
              <span className={s.navMobileBar} />
              <span className={s.navMobileBar} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className={s.navMobileMenu}>
            <a href="#pipeline" onClick={() => setMobileOpen(false)}>Swarm</a>
            <a href="#signals" onClick={() => setMobileOpen(false)}>Signals</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="#demo" onClick={() => setMobileOpen(false)}>Request Demo</a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className={s.hero}>
        <div className={s.container}>
          <div className={s.heroBadge}>
            <span className={s.heroBadgeDot} />
            Early Access — Join the Waitlist
          </div>

          <h1 className={s.heroHeading}>
            Stop the Friction.<br />
            <span className={s.heroAccent}>Start UnSnagging.</span>
          </h1>

          <p className={s.heroSubtitle}>
            The AI-powered swarm that turns web noise into actionable signals.
          </p>

          {/* Waitlist capture */}
          {waitlistStatus === 'success' ? (
            <div className={s.waitlistSuccess}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#2e5bff' }}>check_circle</span>
              You&apos;re in the swarm. We&apos;ll notify you at launch.
            </div>
          ) : (
            <form className={s.waitlistForm} onSubmit={handleWaitlist} noValidate>
              <input
                type="email"
                required
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="your@email.com"
                className={s.waitlistInput}
                disabled={waitlistStatus === 'loading'}
              />
              <button
                type="submit"
                className={s.waitlistBtn}
                disabled={waitlistStatus === 'loading'}
              >
                {waitlistStatus === 'loading' ? 'Joining…' : 'Join the Swarm'}
              </button>
            </form>
          )}
          {waitlistStatus === 'error' && (
            <p className={s.waitlistError}>Something went wrong — try again.</p>
          )}

          <div className={s.heroSecondary}>
            <a href="#demo" className={s.heroSecondaryLink}>Request a demo</a>
            <span className={s.heroSecondaryDot}>·</span>
            <a href="#pricing" className={s.heroSecondaryLink}>View pricing</a>
            <span className={s.heroSecondaryDot}>·</span>
            <a href="#pipeline" className={s.heroSecondaryLink}>How it works</a>
          </div>
        </div>
      </section>

      {/* ── Live Metrics ── */}
      <div className={s.metrics}>
        <div className={s.container}>
          <div className={s.metricsGrid}>
            <div className={s.metricsItem}>
              <div className={s.metricsLabel}>Active Nodes</div>
              <div className={s.metricsValue}>
                1,024<span className={s.metricsUnit}> nodes</span>
              </div>
            </div>
            <div className={s.metricsItem}>
              <div className={s.metricsLabel}>Ingestion Rate</div>
              <div className={s.metricsValue}>
                5.2<span className={s.metricsUnit}> TB/s</span>
              </div>
            </div>
            <div className={s.metricsItem}>
              <div className={s.metricsLabel}>Signal Confidence</div>
              <div className={s.metricsValue}>
                99.8<span className={s.metricsUnit}>%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Pipeline ── */}
      <div className={s.pipeline} id="pipeline">
        <div className={s.container}>
          <div className={s.pipelineHeader}>
            <div className={s.sectionLabel}>How the Swarm Works</div>
            <div className={s.sectionHeading}>Precision from Chaos</div>
            <p className={s.sectionSubtitle}>
              A five-stage pipeline converts raw web data into surgical, validated signals.
            </p>
          </div>
        </div>

        <div className={s.pipelineSteps}>
          {PIPELINE_STEPS.map((step) => (
            <div key={step.num} className={s.pipelineStep}>
              <div className={s.pipelineNum}>{step.num}</div>
              <span className={`material-symbols-outlined ${s.pipelineIcon}`}>{step.icon}</span>
              <div className={s.pipelineTitle}>{step.title}</div>
              <div className={s.pipelineDesc}>{step.desc}</div>
              <span className={s.pipelineStat}>{step.stat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Use Cases ── */}
      <section className={s.section} id="signals">
        <div className={s.container}>
          <div className={s.sectionLabel}>Signal Vectors</div>
          <div className={s.sectionHeading}>High-Impact Use Cases</div>
          <p className={s.sectionSubtitle}>
            Validated intelligence across 9 critical industry verticals.
          </p>

          <div className={s.casesGrid}>
            {USE_CASES.map((c) => (
              <div key={c.title} className={s.caseCard}>
                <div className={s.caseCardHeader}>
                  <span className={`material-symbols-outlined ${s.caseCardIcon}`}>{c.icon}</span>
                  <span className={BadgeClass(c.badge)}>{BadgeLabel(c.badge)}</span>
                </div>
                <div className={s.caseCardTitle}>{c.title}</div>
                <div className={s.caseCardDesc}>{c.desc}</div>
                <div className={s.caseCardStat}>{c.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className={`${s.section} ${s.pricingSection}`} id="pricing">
        <div className={s.container}>
          <div className={s.sectionLabel}>Select Your Tier</div>
          <div className={s.sectionHeading}>Processing Power for Every Scale</div>
          <p className={s.sectionSubtitle}>Upgrade or downgrade at any time. No lock-in.</p>

          <div className={s.pricingGrid}>
            {/* Free */}
            <div className={s.pricingCard}>
              <div className={s.pricingTier}>Free</div>
              <div className={s.pricingPrice}><sup>$</sup>0</div>
              <div className={s.pricingPeriod}>/ month</div>
              <ul className={s.pricingFeatures}>
                <li className={s.pricingFeature}>
                  <span className={`material-symbols-outlined ${s.iconCheck}`}>check</span>
                  3 Personas
                </li>
                <li className={s.pricingFeature}>
                  <span className={`material-symbols-outlined ${s.iconCheck}`}>check</span>
                  Basic extraction
                </li>
                <li className={s.pricingFeatureOff}>
                  <span className={`material-symbols-outlined ${s.iconClose}`}>close</span>
                  Priority processing
                </li>
                <li className={s.pricingFeatureOff}>
                  <span className={`material-symbols-outlined ${s.iconClose}`}>close</span>
                  Custom signals
                </li>
              </ul>
              <span className={s.pricingCtaCurrent}>Current Plan</span>
            </div>

            {/* Paid — featured */}
            <div className={s.pricingCardFeatured}>
              <div className={s.pricingBadge}>Best Value</div>
              <div className={s.pricingTier}>Paid</div>
              <div className={s.pricingPrice}><sup>$</sup>4</div>
              <div className={s.pricingPeriod}>/ month</div>
              <ul className={s.pricingFeatures}>
                <li className={s.pricingFeature}>
                  <span className={`material-symbols-outlined ${s.iconCheck}`}>check</span>
                  7 Personas
                </li>
                <li className={s.pricingFeature}>
                  <span className={`material-symbols-outlined ${s.iconCheck}`}>check</span>
                  Priority extraction
                </li>
                <li className={s.pricingFeature}>
                  <span className={`material-symbols-outlined ${s.iconCheck}`}>check</span>
                  Advanced filtering
                </li>
                <li className={s.pricingFeatureOff}>
                  <span className={`material-symbols-outlined ${s.iconClose}`}>close</span>
                  Custom signals
                </li>
              </ul>
              <a href="#demo" className={s.pricingCtaPrimary}>Select Paid</a>
            </div>

            {/* Pro */}
            <div className={s.pricingCard}>
              <div className={s.pricingTier}>Pro</div>
              <div className={s.pricingPrice}><sup>$</sup>12</div>
              <div className={s.pricingPeriod}>/ month</div>
              <ul className={s.pricingFeatures}>
                <li className={s.pricingFeature}>
                  <span className={`material-symbols-outlined ${s.iconCheck}`}>check</span>
                  All Personas
                </li>
                <li className={s.pricingFeature}>
                  <span className={`material-symbols-outlined ${s.iconCheck}`}>check</span>
                  Maximum extraction speed
                </li>
                <li className={s.pricingFeature}>
                  <span className={`material-symbols-outlined ${s.iconCheck}`}>check</span>
                  Early access features
                </li>
                <li className={s.pricingFeature}>
                  <span className={`material-symbols-outlined ${s.iconCheck}`}>check</span>
                  Custom signals
                </li>
              </ul>
              <a href="#demo" className={s.pricingCtaPrimary}>Select Pro</a>
            </div>
          </div>

          <div className={s.securityBadge}>
            <span className={`material-symbols-outlined ${s.securityIcon}`}>verified_user</span>
            <div>
              <div className={s.securityTitle}>Enterprise-Grade Security</div>
              <div className={s.securityDesc}>
                SOC2 Type II Certified · 99.99% Uptime SLA · AES-256 at rest · TLS 1.3 in transit · Multi-region redundancy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Success Story ── */}
      <div className={`${s.story} ${s.section}`}>
        <div className={s.container}>
          <div className={s.storyInner}>
            <div className={s.storyText}>
              <div className={s.sectionLabel}>Success Story</div>
              <div className={s.sectionHeading}>E-commerce Intelligence Swarm</div>
              <p>
                A leading global retailer deployed a specialized UnSnag swarm to pivot from chaotic
                scraping to precise, validated signal extraction at scale — eliminating noise and
                capturing competitor pricing signals with surgical accuracy.
              </p>
              <a href="#demo" className={s.btnPrimary}>
                See How It Works
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </a>
            </div>

            <div className={s.storyMetrics}>
              <div className={s.storyMetric}>
                <div className={s.storyMetricValue}>90%</div>
                <div className={s.storyMetricLabel}>Reduction in unstructured, irrelevant data</div>
              </div>
              <div className={`${s.storyMetric} ${s.storyMetricFeatured}`}>
                <div className={s.storyMetricValue}>+40%</div>
                <div className={s.storyMetricLabel}>Increase in validated pricing signals daily</div>
              </div>
              <div className={s.storyMetric}>
                <div className={s.storyMetricValue}>12ms</div>
                <div className={s.storyMetricLabel}>Average processing time per node</div>
              </div>
              <div className={s.storyMetric}>
                <div className={s.storyMetricValue}>99.1%</div>
                <div className={s.storyMetricLabel}>Signal confidence score maintained</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Request Demo ── */}
      <section className={`${s.section} ${s.demo}`} id="demo">
        <div className={s.container}>
          <div className={s.sectionLabel}>Get Started</div>
          <div className={s.sectionHeading}>Request a Demo</div>
          <p className={s.sectionSubtitle} style={{ margin: '0 auto 24px', textAlign: 'center' }}>
            Schedule a technical deep-dive with our engineering team to architect your deployment.
          </p>

          <div className={s.demoStats}>
            <div className={s.demoStat}><strong>&lt; 50ms</strong> Processing Latency</div>
            <div className={s.demoStat}><strong>100+ TB/d</strong> Ingest Capacity</div>
          </div>

          {formStatus === 'success' ? (
            <div className={s.demoForm} style={{ textAlign: 'center', padding: '48px 36px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#2e5bff', display: 'block', marginBottom: 16 }}>
                check_circle
              </span>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8, letterSpacing: '-0.02em' }}>
                Request received.
              </div>
              <div style={{ fontSize: 14, color: '#8e90a2', lineHeight: 1.6 }}>
                Check your inbox — we&apos;ll follow up within one business day.
              </div>
            </div>
          ) : (
            <form className={s.demoForm} ref={formRef} onSubmit={handleDemoSubmit} noValidate>
              <div className={s.formGroup}>
                <label className={s.formLabel} htmlFor="demo-email">Work Email *</label>
                <input
                  id="demo-email"
                  name="email"
                  type="email"
                  required
                  className={s.formInput}
                  placeholder="you@company.com"
                />
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel} htmlFor="demo-company">Company Name *</label>
                <input
                  id="demo-company"
                  name="company"
                  type="text"
                  required
                  className={s.formInput}
                  placeholder="Acme Corp"
                />
              </div>
              <div className={s.formGroup}>
                <label className={s.formLabel} htmlFor="demo-volume">Estimated Data Volume (TB/month)</label>
                <select id="demo-volume" name="dataVolume" className={s.formSelect} defaultValue="">
                  <option value="" disabled>Select target volume…</option>
                  <option>Less than 1 TB</option>
                  <option>1–10 TB</option>
                  <option>10–50 TB</option>
                  <option>50+ TB</option>
                </select>
              </div>
              {formStatus === 'error' && (
                <p style={{ fontSize: 13, color: '#ff5b4f', marginBottom: 8 }}>{formError}</p>
              )}
              <button className={s.formSubmit} type="submit" disabled={formStatus === 'loading'}>
                {formStatus === 'loading' ? 'Initializing…' : 'Initialize Sequence'}
                {formStatus !== 'loading' && (
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                )}
              </button>
              <p className={s.formNote}>By initializing, you accept our telemetry terms.</p>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.footerInner}>
            <a href="#" className={s.footerBrand}>
              <span className={`material-symbols-outlined ${s.footerBrandIcon}`}>bolt</span>
              UnSnag.io
            </a>
            <div className={s.footerLinks}>
              <a href="#" className={s.footerLink}>Download Extension</a>
              <a href="#pricing" className={s.footerLink}>Pricing</a>
              <a href="#" className={s.footerLink}>Join the Swarm</a>
              <a href="#" className={s.footerLink}>Twitter / X</a>
              <a href="#" className={s.footerLink}>Docs</a>
              <a href="mailto:hello@unsnag.io" className={s.footerLink}>Contact</a>
            </div>
          </div>
          <div className={s.footerCopy}>
            © 2025 UnSnag.io. Forensic data clarity. · Privacy · Terms · System Status
          </div>
        </div>
      </footer>
    </div>
  );
}

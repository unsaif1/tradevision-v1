'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import s from './billing.module.css';

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    priceId: null,
    badge: null,
    features: [
      '500 signal extractions / mo',
      '1 active swarm pipeline',
      'Browser extension',
      'Community support',
    ],
    cta: 'Current plan',
    disabled: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$3.99',
    period: '/ month',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO ?? null,
    badge: 'Most popular',
    features: [
      '25 000 signal extractions / mo',
      '10 active swarm pipelines',
      'API access (1 000 req/day)',
      'Priority email support',
      'Custom persona tuning',
    ],
    cta: 'Upgrade to Pro',
    disabled: false,
  },
  {
    id: 'ultra',
    name: 'Ultra',
    price: '$11.99',
    period: '/ month',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ULTRA ?? null,
    badge: null,
    features: [
      'Unlimited extractions',
      'Unlimited pipelines',
      'API access (unlimited)',
      '99.99% SLA',
      'Dedicated onboarding',
      'Custom data contracts',
    ],
    cta: 'Upgrade to Ultra',
    disabled: false,
  },
] as const;

type Plan = (typeof PLANS)[number];

function BillingContent() {
  const params = useSearchParams();
  const [loading, setLoading] = useState<string | null>(null);
  const [flash, setFlash] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  useEffect(() => {
    if (params.get('success') === '1') {
      setFlash({ type: 'success', msg: 'Payment successful — your plan has been upgraded!' });
    } else if (params.get('cancelled') === '1') {
      setFlash({ type: 'error', msg: 'Checkout cancelled. No charge was made.' });
    }
  }, [params]);

  async function handleUpgrade(plan: Plan) {
    if (plan.disabled || !plan.priceId) {
      if (!plan.priceId) {
        setFlash({ type: 'error', msg: 'Stripe is not yet configured. Add your price IDs to get started.' });
      }
      return;
    }

    setLoading(plan.id);
    setFlash(null);

    const email = typeof window !== 'undefined'
      ? (localStorage.getItem('unsnag_email') ?? undefined)
      : undefined;

    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: plan.priceId, email }),
    });

    if (!res.ok) {
      const data = await res.json() as { error?: string };
      setFlash({ type: 'error', msg: data.error ?? 'Something went wrong. Please try again.' });
      setLoading(null);
      return;
    }

    const data = await res.json() as { url?: string };
    if (data.url) {
      window.location.href = data.url;
    }
  }

  return (
    <div className={s.page}>
      <div className={s.header}>
        <div className={s.eyebrow}>Billing</div>
        <h1 className={s.title}>Choose your plan</h1>
        <p className={s.subtitle}>
          Upgrade, downgrade, or cancel at any time. Changes take effect at the next billing cycle.
        </p>
      </div>

      {flash && (
        <div className={flash.type === 'success' ? s.flashSuccess : s.flashError}>
          {flash.msg}
        </div>
      )}

      <div className={s.grid}>
        {PLANS.map((plan) => (
          <div key={plan.id} className={plan.badge ? s.cardHighlight : s.card}>
            {plan.badge && <div className={s.badge}>{plan.badge}</div>}

            <div className={s.planName}>{plan.name}</div>
            <div className={s.planPrice}>
              {plan.price}
              <span className={s.planPeriod}>{plan.period}</span>
            </div>

            <ul className={s.featureList}>
              {plan.features.map((f) => (
                <li key={f} className={s.featureItem}>
                  <span className={`material-symbols-outlined ${s.featureCheck}`}>check_circle</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={plan.badge ? s.btnPrimary : s.btn}
              onClick={() => handleUpgrade(plan)}
              disabled={plan.disabled || loading === plan.id}
            >
              {loading === plan.id ? 'Redirecting…' : plan.cta}
            </button>
          </div>
        ))}
      </div>

      <p className={s.legal}>
        Payments processed securely by Stripe. We never store your card details.
        See our{' '}
        <a href="/terms" className={s.legalLink}>Terms of Service</a> for refund and cancellation policy.
      </p>
    </div>
  );
}

export default function BillingPage() {
  return (
    <Suspense>
      <BillingContent />
    </Suspense>
  );
}

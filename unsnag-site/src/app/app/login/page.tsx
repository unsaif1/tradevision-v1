'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import s from '../auth.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    // Simulate network latency — real auth replaces this
    await new Promise((r) => setTimeout(r, 800));

    localStorage.setItem('unsnag_authed', '1');
    localStorage.setItem('unsnag_email', email);

    const persona = localStorage.getItem('unsnag_persona');
    router.push(persona ? '/app/dashboard' : '/app/persona');
  }

  return (
    <div className={s.page}>
      <Link href="/" className={s.logo}>
        <span className={`material-symbols-outlined ${s.logoIcon}`}>bolt</span>
        <span className={s.logoText}>UNSNAG.IO</span>
      </Link>

      <div className={s.card}>
        <div className={s.eyebrow}>Secure access</div>
        <h1 className={s.title}>Welcome back</h1>
        <p className={s.subtitle}>Sign in to your UnSnag workspace.</p>

        <form className={s.form} onSubmit={handleSubmit} noValidate>
          <div className={s.field}>
            <label className={s.label} htmlFor="email">Work email</label>
            <input
              id="email"
              type="email"
              className={s.input}
              placeholder="you@company.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={s.field}>
            <label className={s.label} htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className={s.input}
              placeholder="••••••••"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <div className={s.error}>{error}</div>}

          <button type="submit" className={s.submit} disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className={s.switch}>
          No account?{' '}
          <Link href="/app/signup" className={s.switchLink}>
            Create one free
          </Link>
        </p>
      </div>

      <p className={s.back}>
        <Link href="/" className={s.backLink}>← Back to unsnag.io</Link>
      </p>
    </div>
  );
}

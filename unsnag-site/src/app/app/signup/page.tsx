'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import s from '../auth.module.css';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirm) {
      setError('Please fill in all fields.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));

    localStorage.setItem('unsnag_authed', '1');
    localStorage.setItem('unsnag_email', email);
    localStorage.removeItem('unsnag_persona'); // fresh account → persona selection

    router.push('/app/persona');
  }

  return (
    <div className={s.page}>
      <Link href="/" className={s.logo}>
        <span className={`material-symbols-outlined ${s.logoIcon}`}>bolt</span>
        <span className={s.logoText}>UNSNAG.IO</span>
      </Link>

      <div className={s.card}>
        <div className={s.eyebrow}>Free to start</div>
        <h1 className={s.title}>Create your account</h1>
        <p className={s.subtitle}>
          Join the early access programme. No credit card required.
        </p>

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
              placeholder="Min. 6 characters"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={s.field}>
            <label className={s.label} htmlFor="confirm">Confirm password</label>
            <input
              id="confirm"
              type="password"
              className={s.input}
              placeholder="••••••••"
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          {error && <div className={s.error}>{error}</div>}

          <button type="submit" className={s.submit} disabled={loading}>
            {loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p className={s.switch}>
          Already have an account?{' '}
          <Link href="/app/login" className={s.switchLink}>
            Sign in
          </Link>
        </p>
      </div>

      <p className={s.back}>
        <Link href="/" className={s.backLink}>← Back to unsnag.io</Link>
      </p>
    </div>
  );
}

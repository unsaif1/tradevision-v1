'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import s from './page.module.css';

const STEPS = [
  'Establishing secure pipeline…',
  'Verifying source integrity…',
  'Loading persona configuration…',
  'Calibrating signal thresholds…',
  'Spinning up crawler swarm…',
  'System ready.',
];

export default function InitPage() {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [persona, setPersona] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPersona(localStorage.getItem('unsnag_persona') ?? 'Unknown');
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => router.push('/app/dashboard'), 600);
      return () => clearTimeout(t);
    }
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18 + 4, 100);
        const newStep = Math.floor((next / 100) * (STEPS.length - 1));
        setStep(newStep);
        return next;
      });
    }, 340);
    return () => clearInterval(interval);
  }, [progress, router]);

  return (
    <div className={s.page}>
      <span className={`material-symbols-outlined ${s.icon}`}>memory</span>

      <div className={s.title}>Sequence Initializing</div>
      <div className={s.subtitle}>Establishing Secure Pipeline</div>

      <div className={s.bar}>
        <div className={s.barFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={s.meta}>
        <div className={s.metaItem}>
          <div className={s.metaLabel}>Source</div>
          <div className={s.metaValue}>Web Logs</div>
        </div>
        <div className={s.metaItem}>
          <div className={s.metaLabel}>Persona</div>
          <div className={s.metaValueBlue}>{persona || '—'}</div>
        </div>
        <div className={s.metaItem}>
          <div className={s.metaLabel}>Progress</div>
          <div className={s.metaValue}>{Math.round(progress)}%</div>
        </div>
      </div>

      <div className={s.log}>
        {STEPS.map((line, i) => (
          <div
            key={i}
            className={i < step ? s.logLineDone : i === step ? s.logLineActive : s.logLine}
          >
            <span className={s.logDot} />
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

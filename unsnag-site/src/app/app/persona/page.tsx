'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import s from './page.module.css';

const PERSONAS = [
  {
    id: 'security',
    icon: 'security',
    title: 'Security Architect',
    desc: 'Prioritize vulnerability tracking and compliance gaps.',
  },
  {
    id: 'analyst',
    icon: 'query_stats',
    title: 'Data Analyst',
    desc: 'Extract metrics, usage trends, and anomaly patterns.',
  },
  {
    id: 'product',
    icon: 'rocket_launch',
    title: 'Product Owner',
    desc: 'Track feature telemetry and user friction points.',
  },
  {
    id: 'forensic',
    icon: 'troubleshoot',
    title: 'Forensic Investigator',
    desc: 'Deep dive into logs and reconstruct incident timelines.',
  },
  {
    id: 'admin',
    icon: 'admin_panel_settings',
    title: 'System Admin',
    desc: 'Monitor infrastructure health and resource utilization.',
  },
  {
    id: 'devops',
    icon: 'integration_instructions',
    title: 'DevOps Engineer',
    desc: 'Oversee pipeline performance and deployment stability.',
  },
];

export default function PersonaPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  function handleCalibrate() {
    if (!selected) return;
    const persona = PERSONAS.find((p) => p.id === selected);
    localStorage.setItem('unsnag_persona', persona?.title ?? selected);
    router.push('/app/init');
  }

  return (
    <div className={s.page}>
      <Link href="/" className={s.logo}>
        <span className={`material-symbols-outlined ${s.logoIcon}`}>bolt</span>
        UNSNAG.IO
      </Link>

      <div className={s.header}>
        <div className={s.step}>Setup · Step 1 of 2</div>
        <h1 className={s.title}>Define Your Lens</h1>
        <p className={s.subtitle}>
          Select your primary operational role to calibrate the UnSnag engine.
          We&apos;ll filter noise and surface signals relevant to your objectives.
        </p>
      </div>

      <div className={s.grid}>
        {PERSONAS.map((p) => {
          const isSelected = selected === p.id;
          return (
            <div
              key={p.id}
              className={isSelected ? s.cardSelected : s.card}
              onClick={() => setSelected(p.id)}
            >
              <span className={`material-symbols-outlined ${isSelected ? s.cardIconSelected : s.cardIcon}`}>
                {p.icon}
              </span>
              <div className={s.cardTitle}>{p.title}</div>
              <div className={s.cardDesc}>{p.desc}</div>
              {isSelected && (
                <span className={`material-symbols-outlined ${s.cardCheck}`}>check_circle</span>
              )}
            </div>
          );
        })}
      </div>

      <button className={s.cta} onClick={handleCalibrate} disabled={!selected}>
        Calibrate Engine
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
      </button>
    </div>
  );
}

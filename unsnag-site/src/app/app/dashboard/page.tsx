'use client';

import { useEffect, useState } from 'react';
import s from './page.module.css';

function useLiveNumber(base: number, variance: number, interval = 1800) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const t = setInterval(() => {
      const delta = (Math.random() - 0.5) * variance;
      setVal(+(base + delta).toFixed(1));
    }, interval);
    return () => clearInterval(t);
  }, [base, variance, interval]);
  return val;
}

export default function DashboardPage() {
  const nodes = useLiveNumber(1024, 12, 2200);
  const rate  = useLiveNumber(5.2, 0.4, 1600);

  return (
    <>
      <div className={s.heading}>Pipeline · System Status: Active</div>

      <div className={s.grid}>
        {/* Swarm Ingestion */}
        <div className={s.card}>
          <div className={s.cardHeader}>
            <span className={`material-symbols-outlined ${s.cardIcon}`}>hub</span>
            <span className={s.cardTitle}>Swarm Ingestion</span>
            <span className={s.badgeLive}>Live</span>
          </div>
          <div className={s.metrics}>
            <div className={s.metric}>
              <div className={s.metricValue}>{Math.round(nodes)}<span className={s.metricUnit}> nodes</span></div>
              <div className={s.metricLabel}>Active Nodes</div>
            </div>
            <div className={s.metric}>
              <div className={s.metricValue}>{rate.toFixed(1)}<span className={s.metricUnit}> TB/s</span></div>
              <div className={s.metricLabel}>Ingestion Rate</div>
            </div>
          </div>
        </div>

        {/* Signal Processor */}
        <div className={s.card}>
          <div className={s.cardHeader}>
            <span className={`material-symbols-outlined ${s.cardIcon}`}>analytics</span>
            <span className={s.cardTitle}>Signal Processor</span>
            <span className={s.badgeActive}>Real-time</span>
          </div>
          <div className={s.checkList}>
            <div className={s.checkItem}>
              <span className={`material-symbols-outlined ${s.checkIcon}`}>check_circle</span>
              Emotional Noise Filtered
            </div>
            <div className={s.checkItem}>
              <span className={`material-symbols-outlined ${s.checkIcon}`}>check_circle</span>
              Friction Records Isolated
            </div>
            <div className={s.checkItem}>
              <span className={`material-symbols-outlined ${s.checkIcon}`}>check_circle</span>
              Baseline Variance Applied
            </div>
          </div>
        </div>
      </div>

      <div className={s.grid}>
        {/* Validation Logic */}
        <div className={s.card}>
          <div className={s.cardHeader}>
            <span className={`material-symbols-outlined ${s.cardIcon}`}>rule</span>
            <span className={s.cardTitle}>Validation Logic</span>
          </div>
          <div className={s.scoreRow}>
            <div className={s.scoreBig}>9.1</div>
            <div className={s.scoreMax}>/10 Gap Score</div>
          </div>
          <div className={s.gaugeRows}>
            {[
              { label: 'Market Saturation', val: 0.12, color: '#ff9f0a' },
              { label: 'UX Complexity',     val: 0.88, color: '#2e5bff' },
              { label: 'Confidence',        val: 0.98, color: '#34c759' },
            ].map(({ label, val, color }) => (
              <div key={label} className={s.gaugeRow}>
                <div className={s.gaugeMeta}>
                  <span>{label}</span>
                  <span style={{ color, fontWeight: 600 }}>{val.toFixed(2)}</span>
                </div>
                <div className={s.gaugeTrack}>
                  <div className={s.gaugeFill} style={{ width: `${val * 100}%`, background: color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Persona Mapping */}
        <div className={s.card}>
          <div className={s.cardHeader}>
            <span className={`material-symbols-outlined ${s.cardIcon}`}>psychology</span>
            <span className={s.cardTitle}>Persona Mapping</span>
          </div>
          <div className={s.weights}>
            {[
              { label: 'Time Scarcity',   weight: 0.94 },
              { label: 'Health Mgmt.',    weight: 0.81 },
              { label: 'Cost Efficiency', weight: 0.65 },
              { label: 'Signal Latency',  weight: 0.77 },
            ].map(({ label, weight }) => (
              <div key={label} className={s.weightRow}>
                <div className={s.weightMeta}>
                  <span>{label}</span>
                  <span className={s.weightVal}>{weight.toFixed(2)}</span>
                </div>
                <div className={s.weightTrack}>
                  <div className={s.weightFill} style={{ width: `${weight * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Build */}
      <div className={s.card}>
        <div className={s.cardHeader}>
          <span className={`material-symbols-outlined ${s.cardIcon}`}>terminal</span>
          <span className={s.cardTitle}>Active Build</span>
          <span className={s.badgeActive}>In Progress</span>
        </div>
        <div className={s.buildHeader}>
          <span className={s.buildName}>UnSnag Extension v2.4.1</span>
          <span className={s.buildPct}>72%</span>
        </div>
        <div className={s.buildTrack}>
          <div className={s.buildFill} style={{ width: '72%' }} />
        </div>
        <div className={s.buildNote}>Deployment in progress · Signal validation layer complete</div>
      </div>
    </>
  );
}

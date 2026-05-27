import { ReactNode } from 'react';

// ── Design tokens ──────────────────────────────────────────────────────────
const BADGE: Record<string, { bg: string; text: string; border: string }> = {
  cyan:     { bg: 'rgba(0,212,170,0.10)',  text: '#00D4AA', border: 'rgba(0,212,170,0.25)' },
  pink:     { bg: 'rgba(226,30,81,0.10)',  text: '#E21E51', border: 'rgba(226,30,81,0.25)' },
  primary:  { bg: 'rgba(226,30,81,0.12)',  text: '#E21E51', border: 'rgba(226,30,81,0.25)' },
  success:  { bg: 'rgba(74,222,128,0.1)',  text: '#4ade80', border: 'rgba(74,222,128,0.25)' },
  error:    { bg: 'rgba(244,63,94,0.1)',   text: '#f43f5e', border: 'rgba(244,63,94,0.25)' },
  warning:  { bg: 'rgba(255,145,0,0.12)', text: '#ff9100', border: 'rgba(255,145,0,0.25)' },
  tertiary: { bg: 'rgba(139,149,161,0.1)',text: '#8B95A1', border: 'rgba(139,149,161,0.2)' },
};

// ── Badge ──────────────────────────────────────────────────────────────────
export function Badge({
  children,
  variant = 'tertiary',
}: {
  children: ReactNode;
  variant?: keyof typeof BADGE;
}) {
  const s = BADGE[variant] ?? BADGE.tertiary;
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 font-['JetBrains_Mono',monospace] text-[10px] font-semibold tracking-[0.08em] uppercase"
      style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}`, borderRadius: '0.125rem' }}
    >
      {children}
    </span>
  );
}

// ── Card ───────────────────────────────────────────────────────────────────
export function Card({
  children,
  className = '',
  accent,
}: {
  children: ReactNode;
  className?: string;
  accent?: string;
}) {
  return (
    <div
      className={`border border-[#2A2D35] overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(160deg, #1A1D23 0%, #1E2128 100%)',
        borderRadius: '0.125rem',
        ...(accent ? { borderLeftColor: accent, borderLeftWidth: 3 } : {}),
      }}
    >
      {children}
    </div>
  );
}

// ── CardHeader ─────────────────────────────────────────────────────────────
export function CardHeader({
  title,
  icon,
  action,
  accent,
}: {
  title: string;
  icon?: string;
  action?: ReactNode;
  accent?: string;
}) {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-[#2A2D35]">
      <div className="flex items-center gap-2.5">
        {icon && (
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ color: accent ?? '#8B95A1' }}
          >
            {icon}
          </span>
        )}
        <h2
          className="font-['Barlow_Condensed',sans-serif] text-[13px] font-semibold tracking-[0.1em] uppercase text-white"
        >
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

// ── StatCard ───────────────────────────────────────────────────────────────
export function StatCard({
  label,
  value,
  icon,
  accent = '#8B95A1',
  delta,
  sub,
}: {
  label: string;
  value: string | number;
  icon: string;
  accent?: string;
  delta?: string;
  sub?: string;
}) {
  const up = delta?.startsWith('+');
  return (
    <div
      className="border border-[#2A2D35] p-5 flex flex-col gap-3 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1A1D23 0%, #1E2128 100%)',
        borderRadius: '0.125rem',
        borderLeft: `3px solid ${accent}`,
      }}
    >
      {/* Subtle accent glow */}
      <div
        className="absolute inset-y-0 left-0 w-16 pointer-events-none"
        style={{ background: `linear-gradient(90deg, ${accent}10 0%, transparent 100%)` }}
      />
      <div className="flex items-center justify-between relative">
        <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.12em] uppercase text-[#8B95A1]">
          {label}
        </span>
        <span className="material-symbols-outlined text-[20px]" style={{ color: accent, opacity: 0.8 }}>
          {icon}
        </span>
      </div>
      <div className="relative">
        <p
          className="font-['Barlow_Condensed',sans-serif] text-[34px] font-bold leading-none text-white"
        >
          {value}
        </p>
        {sub && <p className="text-[11px] text-[#8B95A1] mt-1 font-['Manrope',sans-serif]">{sub}</p>}
      </div>
      {delta && (
        <p
          className="font-['JetBrains_Mono',monospace] text-[10px] relative"
          style={{ color: up ? '#4ade80' : '#f43f5e' }}
        >
          {delta} vs last period
        </p>
      )}
    </div>
  );
}

// ── ProgressBar ────────────────────────────────────────────────────────────
export function ProgressBar({
  value,
  max = 100,
  label,
  accent = '#e21e51',
  showPct = true,
}: {
  value: number;
  max?: number;
  label?: string;
  accent?: string;
  showPct?: boolean;
}) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="w-full">
      {(label || showPct) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8B95A1] uppercase tracking-wider">{label}</span>}
          {showPct && <span className="font-['JetBrains_Mono',monospace] text-[10px] font-bold" style={{ color: accent }}>{pct}%</span>}
        </div>
      )}
      <div className="w-full h-1.5 bg-[#0D0F11] overflow-hidden" style={{ borderRadius: '0.125rem' }}>
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${accent} 0%, ${accent}bb 100%)` }}
        />
      </div>
    </div>
  );
}

// ── SectionHeader ──────────────────────────────────────────────────────────
export function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        <h1 className="font-['Barlow_Condensed',sans-serif] text-[28px] font-bold tracking-[0.03em] text-white uppercase leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[13px] text-[#8B95A1] mt-1 font-['Manrope',sans-serif]">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

// ── Button ─────────────────────────────────────────────────────────────────
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  accent,
  icon,
  className = '',
  ...rest
}: {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'danger';
  size?: 'sm' | 'md';
  accent?: string;
  icon?: string;
  className?: string;
  [k: string]: unknown;
}) {
  const base = 'inline-flex items-center gap-2 font-["Barlow_Condensed",sans-serif] tracking-[0.08em] uppercase transition-all active:scale-95';
  const sz = size === 'sm' ? 'text-[11px] px-3 py-1.5' : 'text-[13px] px-4 py-2';
  let style: React.CSSProperties = { borderRadius: '0.125rem' };
  let cls = '';

  if (variant === 'primary') {
    const c = accent ?? '#E21E51';
    style = { ...style, background: `linear-gradient(135deg, ${c} 0%, ${c}cc 100%)`, color: '#fff', border: `1px solid ${c}` };
    cls = 'hover:brightness-110';
  } else if (variant === 'ghost') {
    const c = accent ?? '#8B95A1';
    style = { ...style, background: 'transparent', color: c, border: `1px solid ${c}44` };
    cls = 'hover:bg-white/5';
  } else {
    style = { ...style, background: 'rgba(226,30,81,0.12)', color: '#E21E51', border: '1px solid rgba(226,30,81,0.3)' };
    cls = 'hover:bg-red-500/20';
  }

  return (
    <button className={`${base} ${sz} ${cls} ${className}`} style={style} {...rest}>
      {icon && <span className="material-symbols-outlined text-[16px]">{icon}</span>}
      {children}
    </button>
  );
}

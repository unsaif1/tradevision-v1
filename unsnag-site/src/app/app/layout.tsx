'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import s from './layout.module.css';

const NAV = [
  { href: '/app/dashboard', icon: 'hub',            label: 'Swarm' },
  { href: '/app/signals',   icon: 'analytics',       label: 'Extract' },
  { href: '/app/dashboard', icon: 'difference',      label: 'Gap' },
  { href: '/app/persona',   icon: 'psychology',      label: 'Persona' },
  { href: '/app/dashboard', icon: 'terminal',        label: 'Logs' },
  { href: '/app/billing',   icon: 'credit_card',     label: 'Billing' },
];

const UNAUTHED_ROUTES = ['/app/login', '/app/signup'];
const ONBOARDING_ROUTES = ['/app/persona', '/app/init'];

function getLocal(key: string) {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(key);
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();

  const isUnauthedRoute = UNAUTHED_ROUTES.some((r) => path.startsWith(r));
  const isOnboarding    = ONBOARDING_ROUTES.some((r) => path === r);

  useEffect(() => {
    if (isUnauthedRoute) return;
    if (!getLocal('unsnag_authed')) {
      router.replace('/app/login');
    }
  }, [path, isUnauthedRoute, router]);

  if (isUnauthedRoute || isOnboarding) return <>{children}</>;

  const persona = getLocal('unsnag_persona');
  const email   = getLocal('unsnag_email') ?? 'operator';

  function handleLogout() {
    localStorage.removeItem('unsnag_authed');
    router.push('/app/login');
  }

  return (
    <div className={s.shell}>
      <nav className={s.sidebar}>
        <Link href="/" className={s.sidebarLogo}>
          <span className={`material-symbols-outlined ${s.sidebarLogoIcon}`}>bolt</span>
          UnSnag
        </Link>
        <div className={s.sidebarVersion}>Admin v2.4.1</div>

        <div className={s.sidebarNav}>
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                path.startsWith(item.href) && item.href !== '/app/persona'
                  ? s.sidebarLinkActive
                  : s.sidebarLink
              }
            >
              <span className={`material-symbols-outlined ${s.sidebarLinkIcon}`}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={s.sidebarFooter}>
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#8e90a2' }}>
            account_circle
          </span>
          <div className={s.sidebarPersona}>
            <div className={s.sidebarPersonaLabel}>Signed in as</div>
            <div className={s.sidebarEmail}>{email}</div>
            {persona && <div>{persona}</div>}
          </div>
          <button className={s.logoutBtn} onClick={handleLogout} title="Sign out">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>logout</span>
          </button>
        </div>
      </nav>

      <div className={s.main}>
        <div className={s.topbar}>
          <span className={s.topbarTitle}>UnSnag.io</span>
          <span className={s.topbarStatus}>
            <span className={s.topbarDot} />
            System Active
          </span>
        </div>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
}

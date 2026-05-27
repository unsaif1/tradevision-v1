'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navLinks = [
    { href: '#work', label: 'Services' },
    { href: '#process', label: 'Process' },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <a href="#hero" className="navbar__logo">SaifHaven</a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:hello@saifhaven.com"
              className="navbar__cta"
            >
              Book a Call
            </a>
          </li>
        </ul>

        <button
          className="navbar__mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@saifhaven.com"
            className="navbar__cta"
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}

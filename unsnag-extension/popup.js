// UnSnag popup — reads persona from storage, shows page signal score

const UNSNAG_URL = 'https://unsnag.io';

const MOCK_SIGNALS = [
  { icon: 'analytics',   name: 'Price Signal',       desc: 'Competitor pricing detected',    badge: 'high', label: '98.4%' },
  { icon: 'security',    name: 'Threat Indicator',   desc: 'Anomalous script pattern',       badge: 'med',  label: '74.1%' },
  { icon: 'monitoring',  name: 'Sentiment Marker',   desc: 'Negative polarity cluster',      badge: 'high', label: '91.7%' },
];

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function icon(name, style = '') {
  const s = el('span', 'material-symbols-outlined');
  s.textContent = name;
  if (style) s.style.cssText = style;
  return s;
}

function renderOnboarding(root) {
  const div = el('div', 'onboard');
  const ic = icon('bolt', 'display:block;font-size:40px;color:#2e5bff;margin-bottom:14px');
  const t = el('div', 'onboard-title', 'Define your lens first');
  const d = el('div', 'onboard-desc', 'Select a persona on unsnag.io to calibrate your signal engine.');
  const btn = el('a', 'btn-primary');
  btn.href = `${UNSNAG_URL}/app/persona`;
  btn.target = '_blank';
  btn.appendChild(icon('arrow_forward', 'font-size:16px'));
  btn.append(' Open UnSnag');
  div.append(ic, t, d, btn);
  root.appendChild(div);
}

function renderApp(root, persona, tab) {
  const score = Math.floor(Math.random() * 15) + 82; // mock 82–96
  const pct   = score / 100;

  // Header
  const header = el('div', 'header');
  const logoDiv = el('div', 'logo');
  logoDiv.appendChild(icon('bolt', 'font-size:18px;color:#2e5bff'));
  logoDiv.append(' UNSNAG');
  const statusDiv = el('div', 'status');
  const dot = el('span', 'status-dot');
  statusDiv.appendChild(dot);
  statusDiv.append('Active');
  header.append(logoDiv, statusDiv);
  root.appendChild(header);

  // Persona bar
  const pbar = el('div', 'persona-bar');
  pbar.appendChild(icon('psychology'));
  const pname = el('span', 'persona-name', persona);
  pbar.append('Calibrated for ', pname);
  root.appendChild(pbar);

  // Score card
  const card = el('div', 'score-card');
  const lbl  = el('div', 'score-label', 'Page Signal Score');
  const row  = el('div', 'score-row');
  const val  = el('div', 'score-value', String(score));
  const max  = el('div', 'score-max', '/ 100');
  row.append(val, max);
  const track = el('div', 'score-bar-track');
  const fill  = el('div', 'score-bar-fill');
  fill.style.width = `${score}%`;
  track.appendChild(fill);
  card.append(lbl, row, track);
  root.appendChild(card);

  // Metrics row
  const metrics = el('div', 'metrics');
  [
    { value: '1,024', unit: '', label: 'Nodes' },
    { value: '5.2',   unit: 'TB/s', label: 'Rate' },
    { value: '99.8',  unit: '%',    label: 'Confidence' },
  ].forEach(({ value, unit, label }) => {
    const m = el('div', 'metric');
    const v = el('div', 'metric-value', value);
    if (unit) {
      const u = el('span', 'metric-unit', unit);
      v.appendChild(u);
    }
    const l = el('div', 'metric-label', label);
    m.append(v, l);
    metrics.appendChild(m);
  });
  root.appendChild(metrics);

  // Signals list
  const sh = el('div', 'signals-header');
  sh.appendChild(el('div', 'signals-title', 'Detected Signals'));
  const cnt = el('span', 'signals-count', `${MOCK_SIGNALS.length} found`);
  sh.appendChild(cnt);
  root.appendChild(sh);

  MOCK_SIGNALS.forEach(({ icon: ic, name, desc, badge, label }) => {
    const item = el('div', 'signal-item');
    item.appendChild(icon(ic, 'font-size:16px;color:#4a6fff;flex-shrink:0'));
    const text = el('div', 'signal-text');
    text.appendChild(el('div', 'signal-name', name));
    text.appendChild(el('div', 'signal-desc', desc));
    item.appendChild(text);
    const b = el('span', badge === 'high' ? 'badge-high' : 'badge-med', label);
    item.appendChild(b);
    root.appendChild(item);
  });

  // Footer
  const footer = el('div', 'footer');
  const openBtn = el('a', 'btn-primary');
  openBtn.href   = `${UNSNAG_URL}/app/dashboard`;
  openBtn.target = '_blank';
  openBtn.appendChild(icon('open_in_new', 'font-size:14px'));
  openBtn.append(' Dashboard');

  const settingsBtn = el('a', 'btn-ghost');
  settingsBtn.href   = `${UNSNAG_URL}/app/signals`;
  settingsBtn.target = '_blank';
  settingsBtn.appendChild(icon('tune', 'font-size:14px'));
  settingsBtn.append(' Signals');

  footer.append(openBtn, settingsBtn);
  root.appendChild(footer);
}

// Boot
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  chrome.storage.local.get(['unsnag_persona'], (result) => {
    const persona = result.unsnag_persona;
    if (!persona) {
      renderOnboarding(root);
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        renderApp(root, persona, tabs[0]);
      });
    }
  });
});

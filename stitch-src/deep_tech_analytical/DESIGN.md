---
name: Cyber-Industrial Ledger
colors:
  surface: '#0f141a'
  surface-dim: '#0f141a'
  surface-bright: '#353941'
  surface-container-lowest: '#0a0f14'
  surface-container-low: '#171c22'
  surface-container: '#1b2026'
  surface-container-high: '#252a31'
  surface-container-highest: '#30353c'
  on-surface: '#dee3eb'
  on-surface-variant: '#d7c2c2'
  inverse-surface: '#dee3eb'
  inverse-on-surface: '#2c3137'
  outline: '#9f8c8d'
  outline-variant: '#524344'
  surface-tint: '#ffb2b9'
  primary: '#ffd9dc'
  on-primary: '#522027'
  primary-container: '#ffb2b9'
  on-primary-container: '#7b4148'
  inverse-primary: '#894d54'
  secondary: '#bac8db'
  on-secondary: '#243240'
  secondary-container: '#3a4858'
  on-secondary-container: '#a8b6c9'
  tertiary: '#d9e3f9'
  on-tertiary: '#273141'
  tertiary-container: '#bdc7dc'
  on-tertiary-container: '#495365'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadc'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#370c13'
  on-primary-fixed-variant: '#6d363d'
  secondary-fixed: '#d5e4f7'
  secondary-fixed-dim: '#bac8db'
  on-secondary-fixed: '#0f1d2b'
  on-secondary-fixed-variant: '#3a4858'
  tertiary-fixed: '#d9e3f9'
  tertiary-fixed-dim: '#bdc7dc'
  on-tertiary-fixed: '#121c2c'
  on-tertiary-fixed-variant: '#3d4759'
  background: '#0f141a'
  on-background: '#dee3eb'
  surface-variant: '#30353c'
  accent-cyan: '#00f2ff'
  status-success: '#4ade80'
  status-error: '#f43f5e'
  surface-deep: '#090f15'
  outline-muted: rgba(136, 150, 168, 0.15)
typography:
  headline-xl:
    fontFamily: Barlow Condensed
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin: 24px
  sidebar-width: 260px
  telemetry-sidebar-width: 340px
---

## Brand & Style
The brand personality is **authoritative, technical, and forensic**. It targets high-level system administrators and blockchain validators who require high-density data visualization and real-time telemetry.

The design style is a hybrid of **Brutalism** and **Modern Cyber-Industrial**. It uses heavy structural borders, monospaced data displays, and "active" UI elements like scanlines and pulsing indicators to evoke a sense of live system monitoring. The aesthetic is clean and systematic but incorporates "hacker-terminal" cues to reinforce the security and verification context of a blockchain-backed evidence portal.

## Colors
The palette is built on a "Deep Space" foundation (`#0f141a`) with a high-contrast "Soft Neon" primary (`#ffb2b9`) used for critical actions and highlights. 

- **Primary:** Used for active states, primary buttons, and key data signatures.
- **Surface Tiers:** Uses a structured grayscale for depth—`surface-deep` for background canvases, `surface-container` for widgets, and `surface-bright` for hover states.
- **Functional Accents:** Cyan is reserved for telemetry data and user-initiated commands, while Rose/Red is strictly for "mismatch" or "anomaly" alerts.
- **Overlays:** Use semi-transparent dark radials to focus attention on visual evidence.

## Typography
The system employs a three-tier font hierarchy:
1.  **Barlow Condensed:** Used for high-impact headlines and navigation titles to maximize horizontal space and provide an industrial, news-like urgency.
2.  **Manrope:** The workhorse for body text and UI labels, offering high legibility in a modern sans-serif form.
3.  **JetBrains Mono:** Essential for all technical data, blockchain hashes, timestamps, and coordinates. This distinguishes "hard data" from "interface text."

For mobile, `headline-xl` should scale down to `32px` (`headline-lg`) to maintain readability. Use `label-caps` for all sidebar and section headers to establish a clear architectural hierarchy.

## Layout & Spacing
The layout uses a **Multi-Pane Dashboard** model with fixed sidebars and a fluid center workspace. 

- **Sidebar Left:** 260px width, containing primary navigation.
- **Main Canvas:** Divided into a central review area and a right-side 340px telemetry panel.
- **Grid:** Internal components follow a standard 8px (sm) and 16px (md) spacing rhythm.
- **Responsiveness:** On tablets, the right telemetry sidebar should collapse into a drawer. On mobile, both sidebars collapse, and the central ledger converts to a stacked card list.

## Elevation & Depth
Depth is achieved through **Tonal Layering** rather than soft shadows. 
- **Basal Level:** `#0f141a` (Background).
- **Raised Containers:** `#1b2027` (Sidebars and Cards).
- **Interaction Depth:** Hover states use `#30353d` or low-opacity primary tints.
- **Glassmorphism:** Used sparingly for floating status messages and evidence overlays (20px blur, 90% opacity).
- **Outlines:** A strict 1px border system (`outline-variant`) defines the grid. Cyber-borders (accented corners) are used to denote "Verification Mode" on specific interactive cards.

## Shapes
The shape language is primarily **Soft-Industrial**. 
- **Standard UI:** 0.25rem (4px) corner radius for most cards and table rows.
- **Buttons & Inputs:** Fully rounded (pill-shaped) for search bars and secondary buttons, while primary action buttons remain slightly squared (4px) to feel more substantial.
- **Technical Elements:** Visual evidence frames use sharp 0px corners but are "contained" within a 4px rounded parent to maintain the cyber-industrial bracketed look.

## Components
- **Buttons:** Primary buttons use `primary-container` background with bold `label-md` text. Secondary buttons are outlined with `outline-variant`.
- **Cyber Cards:** Feature a custom `::before/::after` pseudo-element for accented corners (`primary-color`). Include a `scanline` animation for active verification states.
- **Data Tables:** High-density, no vertical borders. Header rows use `label-caps`. Hover states highlight the entire row in a subtle `surface-container-highest`.
- **Telemetry Bars:** Use segmented bar charts (flex-based) with color-coding (Primary for safe, Rose for warning).
- **Status Chips:** Small, condensed text with a 1px border and low-opacity background tint (e.g., Green for Validated).
- **Inputs:** Search bars use `surface-container-low` with no border and pill-shaped geometry.
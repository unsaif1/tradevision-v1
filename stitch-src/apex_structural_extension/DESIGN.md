---
name: Apex Structural Extension
colors:
  surface: '#031427'
  surface-dim: '#031427'
  surface-bright: '#2a3a4f'
  surface-container-lowest: '#000f21'
  surface-container-low: '#0b1c30'
  surface-container: '#102034'
  surface-container-high: '#1b2b3f'
  surface-container-highest: '#26364a'
  on-surface: '#d3e4fe'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#d3e4fe'
  inverse-on-surface: '#213145'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#e6edff'
  on-tertiary: '#263143'
  tertiary-container: '#c6d1e9'
  on-tertiary-container: '#4f5a6e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#031427'
  on-background: '#d3e4fe'
  surface-variant: '#26364a'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-base:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  grid-columns: '12'
---

## Brand & Style
The design system evolves the industrial "Deep Tech" aesthetic into the high-stakes world of roofing financial analytics. The personality is hyper-precise, authoritative, and technical. It targets project managers and executives who require instant clarity on complex margin data. 

The visual style is **Corporate Modern with a Technical Edge**, leaning heavily into high-fidelity data density. It prioritizes information over decoration, utilizing a monochromatic dark foundation punctuated by high-energy cyan signals. This creates a "control center" environment that feels engineered rather than merely designed.

## Colors
The palette is rooted in a "Void Black" and "Deep Slate" foundation to maximize the luminosity of the Cyan primary. 

*   **Primary (Cyan):** Used exclusively for interactive elements, focus states, and primary financial growth metrics.
*   **Semantic Financials:** Positive trends utilize an emerald green, while negative margins or overhead warnings use a high-chroma rose. This ensures a "glanceable" understanding of profitability.
*   **Neutral Layers:** A range of cool greys provides structural separation without the need for heavy borders.

## Typography
This design system employs a dual-font strategy to balance readability with technical rigor. 

*   **Hanken Grotesk** handles the structural UI, offering a contemporary, professional sans-serif feel that remains legible even in dense layouts.
*   **JetBrains Mono** is reserved for all financial data points, currency values, and table headers. The monospaced nature ensures that columns of numbers align perfectly, aiding in quick vertical scanning of project costs and margins.

For mobile, scale display sizes down by 20% while maintaining the monospaced integrity of financial labels.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Navigation and sidebars are fixed, while the data-heavy central canvas fluidly expands to maximize horizontal real estate for complex grids.

A strict 4px baseline grid ensures that all technical components (charts, inputs, cells) maintain industrial alignment. Data grids should utilize a "compact" density setting by default, with 8px vertical cell padding. Breakpoints occur at 768px (Tablet) and 1280px (Desktop), at which point the 12-column grid system engages to handle multi-panel financial reports.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Structural Outlines** rather than traditional shadows, maintaining the "Deep Tech" feel.

*   **Level 0 (Background):** Deep Slate (#0F172A).
*   **Level 1 (Card/Surface):** A slightly lighter tint (#1E293B) with a 1px solid border (#334155).
*   **Level 2 (Modals/Popovers):** Higher contrast background with a Cyan glow-pulse on the border to indicate focus.

Instead of shadows, use subtle backdrop blurs (12px) on floating panels to create a "glass-cockpit" effect without losing the industrial rigidity.

## Shapes
Shapes are intentionally **Soft-Industrial**. A 0.25rem (4px) corner radius is the system standard, providing a hint of modern refinement while maintaining the structural strength of a 90-degree corner. 

Interactive indicators, such as status pips or small trend markers, may use 0px (Sharp) corners to distinguish them as technical symbols rather than UI containers.

## Components
*   **Data Grids:** The centerpiece component. Must feature monospaced digits, sticky headers, and "heat-map" cell backgrounds for margin percentages (Green for >30%, Amber for 20-30%, Red for <20%).
*   **Action Buttons:** Primary buttons use a solid Cyan fill with black text. Secondary actions use a Ghost style with a 1px cyan border.
*   **Financial Inputs:** Must include an integrated currency prefix and a "delta indicator" that shows the real-time impact of the input on the total project margin.
*   **Trend Chips:** Small, condensed pills containing a Sparkline icon and a percentage. The background should be a 10% opacity tint of the semantic color (e.g., 10% Emerald for profit).
*   **Progress Gauges:** High-fidelity linear bars showing "Actual vs. Estimated" costs, using a segmented "notched" design to resemble industrial measuring tools.
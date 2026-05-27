---
name: Kinetic Deep Tech
colors:
  surface: '#0f141a'
  surface-dim: '#0f141a'
  surface-bright: '#353a40'
  surface-container-lowest: '#0a0f14'
  surface-container-low: '#171c22'
  surface-container: '#1b2026'
  surface-container-high: '#252a31'
  surface-container-highest: '#30353c'
  on-surface: '#dee3eb'
  on-surface-variant: '#e4bdbf'
  inverse-surface: '#dee3eb'
  inverse-on-surface: '#2c3137'
  outline: '#ab888a'
  outline-variant: '#5c3f42'
  surface-tint: '#ffb2b9'
  primary: '#ffb2b9'
  on-primary: '#67001e'
  primary-container: '#e21e51'
  on-primary-container: '#fffcff'
  inverse-primary: '#be003e'
  secondary: '#bfc7d5'
  on-secondary: '#29313c'
  secondary-container: '#3f4753'
  on-secondary-container: '#aeb6c3'
  tertiary: '#72daad'
  on-tertiary: '#003826'
  tertiary-container: '#00855e'
  on-tertiary-container: '#f5fff7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#40000f'
  on-primary-fixed-variant: '#91002e'
  secondary-fixed: '#dbe3f1'
  secondary-fixed-dim: '#bfc7d5'
  on-secondary-fixed: '#141c26'
  on-secondary-fixed-variant: '#3f4753'
  tertiary-fixed: '#8ff7c7'
  tertiary-fixed-dim: '#72daad'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005138'
  background: '#0f141a'
  on-background: '#dee3eb'
  surface-variant: '#30353c'
typography:
  display-lg:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: 0.02em
  display-md:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: 0.01em
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.03em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Barlow Condensed
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
spacing:
  grid_columns: '12'
  gutter: 24px
  margin: 32px
  unit: 4px
  sidebar_width: 260px
  header_height: 64px
---

## Brand & Style

The design system is engineered for high-density analytical environments, specifically desktop-first command centers. The brand personality is precise, authoritative, and mission-critical. It evokes the feeling of a sophisticated technical instrument—reliable, fast, and high-performance.

The aesthetic follows a **Modern-Technical** approach, blending elements of minimalism with data-heavy industrial design. It prioritizes information density and visual hierarchy through high-contrast accents and a structured, monochromatic foundation. The UI remains unobtrusive to let data take center stage, using the primary accent only for critical calls to action or system alerts.

## Colors

The palette is anchored in a deep slate-black (`#0f141a`) to minimize eye strain during long-duration monitoring. 

- **Primary:** The high-contrast red (`#e21e51`) is used sparingly for interactive states, critical notifications, and "active" data points.
- **Surface & Secondary:** Different shades of desaturated blue-greys create depth. Secondary surfaces (`#1a1f26`) are used for cards and containers to distinguish them from the base canvas.
- **Success/Warning/Info:** Use a calibrated palette of emerald green, amber, and cyan for status indicators, ensuring they match the luminosity of the primary accent.

## Typography

This design system utilizes **Barlow Condensed** for all structural and display elements to maximize horizontal space efficiency—essential for complex dashboards. **Inter** is used for body copy to ensure maximum legibility at smaller scales, while **JetBrains Mono** is reserved for raw data strings, coordinates, and technical values.

Headings should often utilize uppercase styling with slight tracking increases to emphasize the "instrumentation" feel.

## Layout & Spacing

The layout is built on a **12-column fixed-fluid hybrid grid**. The main navigation is anchored to a persistent left-hand sidebar, while the content area utilizes a 12-column grid with 24px gutters.

- **Desktop:** 12 columns, 32px outer margins.
- **Density:** The system uses a 4px baseline grid. Padding within data cards should be tight (16px or 20px) to maximize information density without sacrificing clarity.
- **Modular Blocks:** Components should snap to 2, 3, 4, or 6 column spans to maintain mathematical rhythm across the dashboard.

## Elevation & Depth

In this dark-mode technical environment, depth is achieved through **Tonal Layering** and **Subtle Outlines** rather than heavy shadows.

- **Level 0 (Canvas):** `#0f141a` - The base background.
- **Level 1 (Cards/Panels):** `#1a1f26` - Used for primary content containers. Features a 1px border of `#2a323d`.
- **Level 2 (Popovers/Modals):** `#232931` - Raised elements. These are the only components that utilize a soft, 15% black shadow to provide separation.
- **Active State:** High-contrast outlines using the primary accent color (`#e21e51`) indicate focus or selection.

## Shapes

The shape language is **Sharp (0px)**. This reinforces the technical, industrial, and "non-decorative" nature of the design system. 

- **Hard Edges:** All buttons, input fields, cards, and tabs use 90-degree corners.
- **Visual Precision:** Precision is communicated through hairline borders (1px) and perfect alignment to the grid. 
- **Exception:** Small status dots or toggle tracks may use a 1px radius to avoid visual "vibration" at microscopic scales, but for all structural elements, corners remain sharp.

## Components

- **Buttons:** Sharp-edged. Primary buttons use a solid `#e21e51` fill with white text. Secondary buttons use a transparent background with a 1px white or grey border.
- **Data Tables:** High-density. Rows use a 1px bottom border for separation. Header cells use `label-caps` typography. Hover states should highlight the entire row in a subtle `#2a323d`.
- **Input Fields:** Bottom-border only or full-outline with a subtle background. Focus state must trigger a 1px primary color border.
- **Navigation:** Left-hand vertical nav using `Barlow Condensed`. Active links are indicated by a 3px vertical primary-colored bar on the left edge.
- **Status Chips:** Small, rectangular, with a subtle background tint and a high-saturation text color (e.g., Deep Green background with bright Mint text).
- **KPI Cards:** Feature a large `display-md` value and a `label-caps` title at the top. Backgrounds should be slightly lighter than the main canvas.
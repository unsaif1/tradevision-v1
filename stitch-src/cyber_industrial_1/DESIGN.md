---
name: Cyber Industrial
colors:
  surface: '#0d141c'
  surface-dim: '#0d141c'
  surface-bright: '#333a43'
  surface-container-lowest: '#080f16'
  surface-container-low: '#151c24'
  surface-container: '#192028'
  surface-container-high: '#242b33'
  surface-container-highest: '#2e353e'
  on-surface: '#dce3ee'
  on-surface-variant: '#e4bdbf'
  inverse-surface: '#dce3ee'
  inverse-on-surface: '#2a313a'
  outline: '#ab888a'
  outline-variant: '#5c3f42'
  surface-tint: '#ffb2b9'
  primary: '#ffb2b9'
  on-primary: '#67001e'
  primary-container: '#e21e51'
  on-primary-container: '#fffcff'
  inverse-primary: '#be003e'
  secondary: '#4de082'
  on-secondary: '#003919'
  secondary-container: '#00b55d'
  on-secondary-container: '#003e1c'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#2171e4'
  on-tertiary-container: '#fffcff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#40000f'
  on-primary-fixed-variant: '#91002e'
  secondary-fixed: '#6dfe9c'
  secondary-fixed-dim: '#4de082'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005227'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0d141c'
  on-background: '#dce3ee'
  surface-variant: '#2e353e'
  surface-base: '#111820'
  surface-elevated: '#1C2128'
  surface-stroke: '#2D3748'
  text-muted: '#8896A8'
  neon-pink: '#E21E51'
  neon-green: '#4ADE80'
  neon-blue: '#3B82F6'
  neon-orange: '#F97316'
typography:
  headline-xl:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  stat-display:
    fontFamily: Barlow Condensed
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Barlow
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Barlow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Barlow Condensed
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Barlow
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-gap: 12px
---

## Brand & Style

This design system is engineered for high-stakes technical environments where data density and rapid recognition are paramount. The aesthetic is a fusion of **Industrial Utility** and **Neon Futurism**, evoking the atmosphere of a digital "Command Center" for the physical world. 

The brand personality is authoritative, resilient, and precise. It targets professionals in construction, logistics, and heavy industry who require software that feels as rugged and dependable as their physical tools. The UI relies on high-contrast accents against a deep, low-light canvas to guide focus and prioritize critical metrics without visual fatigue.

## Colors

The palette is anchored in a tiered dark-mode hierarchy. The base background is a deep charcoal, while UI surfaces use a slightly lighter shade to create perceived depth without the use of drop shadows.

The functional intelligence of the system is carried by the "Neon Accents":
- **Neon Pink:** Primary actions and critical alerts.
- **Neon Green:** Growth, approval, and active status.
- **Neon Blue:** Pending actions and secondary informational categories.
- **Neon Orange:** Warnings and urgent claims.

Avoid using these accents for large surface areas; they should be reserved for strokes, indicators, and call-to-action buttons to maintain the high-contrast industrial aesthetic.

## Typography

The typography system utilizes **Barlow Condensed** for all structural and data-heavy roles. Its verticality allows for greater horizontal density in dashboards and gives the UI a disciplined, technical character.

**Barlow** (standard) is used for body text and descriptions to ensure long-form legibility. 

**Key Rules:**
- Use `uppercase` for all headlines and labels to reinforce the "Command Center" vibe.
- Numeric data in cards should use the `stat-display` role for maximum impact.
- Use `text-muted` for secondary labels and metadata to keep the visual hierarchy clear in high-density layouts.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layers** and **Color Borders** rather than traditional shadows.

1.  **Level 0 (Canvas):** The base background (`surface-base`) where the primary navigation and global app containers live.
2.  **Level 1 (Surfaces):** Cards and content modules use `surface-elevated`. 
3.  **Level 2 (Active/Hover):** Interactive elements may use a subtle border light-up effect or a transition to a higher-contrast background.

**The Signature Stroke:** Depth is further defined by 1px solid borders (`surface-stroke`). For primary cards, use a 2px colored border on the top edge or a full-frame 1px border in a neon accent color to denote category and status.

## Shapes

The shape language is strictly **Soft (Level 1)**. 

A corner radius of 0.25rem (4px) to 0.5rem (8px) is applied to all cards and buttons. This creates a professional, "manufactured" feel that aligns with industrial hardware. Avoid large radii or pill shapes, as they contradict the rigid, efficient nature of the data-heavy layout. 

Buttons and input fields should maintain sharp enough corners to feel architectural rather than organic.

## Components

### Cards
Cards are the primary structural unit.
- **Metric Cards:** feature a full-frame 1px accent border (Pink, Green, Blue) and a large `stat-display` value.
- **Content Cards:** Feature a top-only 4px accent border to categorize information without overwhelming the user.

### Buttons
- **Primary:** Solid `neon-pink` background with white or high-contrast text. All caps.
- **Secondary:** Outlined with `surface-stroke` and `text-muted`. Use icons to increase affordance.

### Status Indicators
- **Indicator Dots:** 8px circles in neon colors used in lists to show real-time status.
- **Chips:** Small, uppercase labels with a low-opacity background tint matching the neon accent color.

### Lists
Lists are high-density. Each row should be separated by a 1px line (`surface-stroke`). Hover states should trigger a subtle shift to a lighter surface color to indicate interactivity.

### Inputs
Input fields use `surface-elevated` with a 1px `surface-stroke`. Focus states should trigger a full neon accent border to guide the user's attention.
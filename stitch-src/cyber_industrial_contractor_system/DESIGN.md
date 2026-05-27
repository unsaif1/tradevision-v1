---
name: Cyber Industrial Contractor System
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
  surface-card: '#1E293B'
  surface-input: '#0F172A'
  border-muted: '#334155'
  neon-blue: '#2563EB'
  neon-cyan: '#06B6D4'
typography:
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
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
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
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
  container-max: 1440px
---

## Brand & Style
The design system embodies a "Cyber Industrial" aesthetic—a fusion of high-performance utility and technical sophistication. It is designed for a Contractor Portal where reliability and data density are paramount. The personality is disciplined, efficient, and professional, evoking the feeling of a high-tech command center for field operations.

The style leverages **Corporate Modernism** with a heavy lean into **Cyber-Industrial** accents. This is achieved through deep navy monochromatic surfaces, ultra-thin borders that mimic blueprints, and precise "neon" accent strikes that highlight critical status updates and job deadlines. The UI prioritizes information scanability over decorative elements, ensuring contractors can manage job evidence and timelines with zero friction.

## Colors
The palette is built on a "Dark Deep-Sea" foundation. The primary background is a solid `#0F172A`, providing the high-contrast backdrop necessary for technical data.

- **Primary & Secondary:** `Neon Blue` and `Cyan` are used sparingly for interactive states, primary actions, and timeline markers.
- **Tertiary:** A `Vibrant Green` is reserved exclusively for successful evidence submission and "Job Completed" statuses.
- **Surface Strategy:** Layers are distinguished by subtle shifts in navy value rather than shadows. Cards and containers use `#1E293B`, creating a sense of physical depth through tonal stacking.
- **Borders:** High-precision borders using `#334155` are essential for defining the industrial, grid-like structure of the portal.

## Typography
The typography system uses a dual-font approach to balance technical character with readability.

- **Technical Data & Labels:** **JetBrains Mono** is used for all headings, labels, and data points (dates, job IDs, coordinates). Its monospaced nature reinforces the industrial/engineering feel and ensures numerical alignment in data-heavy tables.
- **Interface & Content:** **Inter** handles body copy and long-form descriptions. It provides the necessary clarity for reading job instructions and evidence notes.
- **Scale:** High-contrast sizing is used to differentiate between "Command" level info (Headlines) and "Detail" level info (Labels).

## Layout & Spacing
This design system utilizes a **Fluid Grid** model with a strict 4px baseline shift to maintain technical precision. 

- **Density:** The layout is "High-Density," minimizing whitespace to allow more information (job lists, timelines, photo galleries) to be visible at once.
- **Grid:** A 12-column system is used for desktop, collapsing to a single column on mobile. 
- **Adaptation:** On mobile, margins are tightened to 16px, and components like data tables transform into expanded card lists to ensure "Evidence Submission" buttons remain large and tappable in field conditions.

## Elevation & Depth
In this system, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**. 

- **Level 0 (Base):** `#0F172A` - Main application background.
- **Level 1 (Containers):** `#1E293B` - Cards, sidebars, and navigation modules.
- **Level 2 (Interactive):** Surfaces that respond to hover or focus receive a 1px border of `Primary Blue` or a subtle inner glow. 
- **Shadows:** Avoid soft, diffused shadows. If necessary, use high-opacity, small-radius "Hard" shadows to suggest a physical panel lift, keeping with the industrial theme.

## Shapes
Shapes are disciplined and "Soft-Industrial." A standard **Soft (0.25rem)** roundedness is applied to buttons and input fields to prevent the UI from feeling too aggressive, while still maintaining a sharp, professional edge. Larger containers like job cards may use **0.5rem (rounded-lg)** to provide clear visual grouping.

## Components
- **Buttons:** Primary buttons are solid `Neon Blue` with white text. Secondary buttons are outlined with 1px borders. Use `JetBrains Mono` for button text to maintain the technical aesthetic.
- **Input Fields:** Deep navy backgrounds (`#0F172A`) with a subtle 1px border. On focus, the border transitions to `Primary Blue` with a sharp focus ring.
- **Evidence Chips:** Small, monospaced tags used for status (e.g., "PENDING", "VERIFIED"). These use low-saturation versions of the status color for the background and high-saturation for text.
- **Timeline/Job Cards:** Use a left-hand "accent stripe" (4px wide) that changes color based on job urgency (Blue for scheduled, Red for overdue).
- **Project Timelines:** Use a thin vertical spine with circular nodes. Completed nodes are filled `Tertiary Green`, while active nodes pulse with a subtle `Primary Blue` glow.
- **Data Tables:** Row-based with subtle divider lines. No alternating row colors; instead, use hover states to highlight the active row.
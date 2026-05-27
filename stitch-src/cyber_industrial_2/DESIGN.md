---
name: Cyber Industrial
colors:
  surface: '#0f141a'
  surface-dim: '#0f141a'
  surface-bright: '#353941'
  surface-container-lowest: '#090f15'
  surface-container-low: '#171c23'
  surface-container: '#1b2027'
  surface-container-high: '#252a32'
  surface-container-highest: '#30353d'
  on-surface: '#dee2ec'
  on-surface-variant: '#e4bdbf'
  inverse-surface: '#dee2ec'
  inverse-on-surface: '#2c3138'
  outline: '#ab888a'
  outline-variant: '#5c3f42'
  surface-tint: '#ffb2b9'
  primary: '#ffb2b9'
  on-primary: '#67001e'
  primary-container: '#e21e51'
  on-primary-container: '#fffcff'
  inverse-primary: '#be003e'
  secondary: '#bac8db'
  on-secondary: '#243240'
  secondary-container: '#3a4858'
  on-secondary-container: '#a8b6c9'
  tertiary: '#bdc7dc'
  on-tertiary: '#273141'
  tertiary-container: '#6b7588'
  on-tertiary-container: '#fefcff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#40000f'
  on-primary-fixed-variant: '#91002e'
  secondary-fixed: '#d5e4f7'
  secondary-fixed-dim: '#bac8db'
  on-secondary-fixed: '#0f1d2b'
  on-secondary-fixed-variant: '#3a4858'
  tertiary-fixed: '#d9e3f9'
  tertiary-fixed-dim: '#bdc7dc'
  on-tertiary-fixed: '#121c2c'
  on-tertiary-fixed-variant: '#3d4759'
  background: '#0f141a'
  on-background: '#dee2ec'
  surface-variant: '#30353d'
  neon-pink: '#E21E51'
  neon-green: '#00FF41'
  neon-blue: '#00D1FF'
  neon-orange: '#FF8A00'
  surface-charcoal: '#1C2128'
  surface-steel: '#2D3748'
  text-muted: '#8896A8'
  text-bright: '#FFFFFF'
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
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Barlow Condensed
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Barlow Condensed
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-md:
    fontFamily: Barlow Condensed
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Barlow Condensed
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  data-mono:
    fontFamily: Barlow Condensed
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system embodies a "Cyber Industrial" aesthetic—a fusion of high-tech utility and rugged performance. It is designed for high-stakes environments where speed, precision, and data density are paramount. The style is unapologetically digital, drawing inspiration from military-grade interfaces and futuristic terminal consoles.

The visual language is characterized by deep, low-reflectivity surfaces punctuated by neon accents. It employs a **Modern-Industrial** approach: utilizing high-contrast outlines, monospaced-adjacent condensed typography, and a "function-over-form" layout philosophy. The emotional response is one of authority, technical sophistication, and urgent reliability.

## Colors

The palette is anchored in a dark-mode-first architecture. The foundation is `#1C2128` (Surface Charcoal), providing a deep, non-distracting background that makes accent colors pop. 

- **Primary & Neon Accents:** The signature `#E21E51` (Neon Pink) is used for critical actions, branding, and high-priority alerts. It is supplemented by a range of functional neons: Green for "Go/Success," Blue for "Information," and Orange for "Warnings."
- **Secondary & Neutrals:** `#8896A8` is the workhorse for secondary text and icons, providing enough contrast for legibility without competing with primary data. `#2D3748` is reserved for container borders and structural differentiation.
- **Contrast:** Pure `#FFFFFF` is used sparingly, primarily for headlines and active input states to ensure maximum focus.

## Typography

This design system uses **Barlow Condensed** across all levels to maximize horizontal space and reinforce the industrial, technical feel. 

- **Headers:** Headlines use a heavy weight (700) and uppercase transform to create a rigid, authoritative hierarchy. Tight line-heights are essential to keep the blocks of text feeling like "slabs."
- **Utility:** Labels and data points utilize increased letter-spacing to ensure legibility despite the condensed nature of the glyphs.
- **Data Density:** The condensed nature of the typeface allows for high-density information displays without sacrificing clarity.

## Layout & Spacing

The layout follows a **Fixed-Grid** philosophy with a 12-column structure on desktop. The spacing rhythm is tight, based on a 4px incremental unit to maintain a dense, technical "instrument cluster" feel.

- **Grid:** Use 16px gutters to separate distinct modules. Content should be contained within clear visual boundaries (cards or strokes).
- **Density:** Elements are packed more tightly than in standard consumer apps to allow for rapid scanning of multiple data points.
- **Reflow:** On mobile, the 12-column grid collapses to a 4-column structure with 16px side margins. Modular cards stack vertically, while data tables should allow for horizontal scrolling to preserve column integrity.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows. 

- **Surfaces:** Level 0 is the deep background (`#1C2128`). Level 1 (Cards/Modules) uses `#2D3748` for subtle separation.
- **Borders:** Instead of shadows, use 1px or 2px solid borders. For inactive elements, use `#2D3748`. For active or "hot" elements, use the Primary Pink or another neon accent.
- **Inner Glows:** To simulate a CRT or digital screen effect, use subtle inner-glows (box-shadow: inset) on active buttons or data readouts using a low-opacity version of the accent color.

## Shapes

The shape language is strictly **Sharp**. 

Rounded corners are avoided to preserve the rugged, industrial machinery feel. All buttons, cards, and input fields must have 0px border-radius. To add visual interest, "clipped corners" (45-degree chamfers) can be used on large container elements to evoke a military-spec or futuristic hardware aesthetic.

## Components

- **Buttons:** Sharp 0px corners. Primary buttons use a solid `#E21E51` background with white uppercase text. Secondary buttons use a `#2D3748` border with a hover state that "lights up" the border in a neon accent.
- **Inputs:** Dark backgrounds (`#1C2128`) with a 1px border. On focus, the border transitions to a neon blue or pink with a subtle outer "glow" effect. Labels are always uppercase and placed above the field.
- **Cards:** Defined by a solid 1px border. Header areas within cards should have a slightly lighter background (`#2D3748`) to differentiate them from the content body.
- **Chips/Status:** Small, rectangular tags with no rounding. Use high-contrast background/text pairings (e.g., Neon Green background with black text for "Active").
- **Data Tables:** Use alternating row stripes (zebra striping) using `#1C2128` and a slightly lighter tint. Column headers should be bold, uppercase, and pinned for long lists.
- **Gauges & Indicators:** Incorporate thin line-work and bar-style indicators to visualize metrics, reinforcing the "vision" and "monitoring" aspects of the system.
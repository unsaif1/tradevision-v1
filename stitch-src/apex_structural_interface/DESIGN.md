---
name: Apex Structural Interface
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffdb9d'
  on-secondary: '#412d00'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#f7f5f5'
  on-tertiary: '#303031'
  tertiary-container: '#dad9d9'
  on-tertiary-container: '#5e5f5f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  data-point:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  body-fixed:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  density-compact: 8px
  density-comfortable: 24px
---

## Brand & Style

The design system is a high-density, technical interface tailored for roofing contractors operating in demanding environments. The brand personality is industrial, precise, and resilient—evoking the feeling of a professional-grade tool rather than a consumer app. 

The aesthetic leverages **Cyber-Industrialism**: a fusion of dark-mode utility, high-contrast data visualization, and rigid structural grids. It prioritizes information density for field data (slope, pitch, square footage) while maintaining a "heads-up display" feel. The UI should feel authoritative and indestructible, using monospaced accents to emphasize technical accuracy and engineering standards.

## Colors

The palette is rooted in a deep "Obsidian" neutral (`#0F1115`) to ensure maximum legibility in outdoor, high-glare environments. 

- **Primary (Electric Cyan):** Used for active states, measurement indicators, and critical structural paths.
- **Secondary (Caution Amber):** Reserved for safety warnings, slope violations, and structural integrity alerts.
- **Material Semantic Colors:** Dedicated tokens for specific roofing types allow for instant visual categorization of project files and material inventory. 
- **Functional Grays:** Used for "Industrial Zinc" borders and background layering to define the technical grid.

## Typography

Typography is engineered for rapid data extraction. **Space Grotesk** provides a modern, geometric foundation for primary headings and navigational anchors. **Inter** serves as the workhorse for long-form reports and technical specs.

A specialized **Data Point** style using **JetBrains Mono** is mandatory for all numerical values involving roof pitch, square footage, and cost estimates. This ensures that "1" and "I" or "0" and "O" are never confused during high-speed field audits. All labels should use the monospaced font to reinforce the industrial, calculator-like aesthetic.

## Layout & Spacing

The design system utilizes a **Rigid Technical Grid**. Spacing is based on a strict 4px baseline to maintain a high-density information architecture. 

- **Mobile:** 4-column grid with minimal margins to maximize data real estate for roof site inspections.
- **Desktop:** 12-column grid utilizing a "Side-Panel" architecture where technical specs are docked to the right and site maps/blueprints occupy the central fluid area.
- **Components:** Use `density-compact` for data tables and material lists; use `density-comfortable` for section headers and primary navigation nodes.

## Elevation & Depth

This design system eschews soft shadows for **Tonal Layering** and **High-Contrast Outlines**. 

- **Surface Levels:** The base is Obsidian. Elevate containers using subtle background shifts (e.g., +2% or +4% lightness) and 1px "Zinc" borders (`#2D2D2D`).
- **Active State:** Instead of a shadow, an active card or input is defined by a 1px `primary_color_hex` border and a subtle interior glow.
- **Gutter Shadows:** Use hard, 0-blur offset shadows in secondary colors only for critical alerts to create a "tabbed" or "stamped" physical appearance.

## Shapes

The shape language is **Strictly Sharp (0px)**. To reflect the angular nature of roofing, trusses, and structural framing, all buttons, cards, and input fields must have 90-degree corners. 

Use 45-degree chamfered corners (clipped corners) for "Primary Action" buttons or "Material Type" tags to provide a subtle "Cyber" aesthetic without compromising the industrial rigidity.

## Components

- **Action Buttons:** Large, rectangular, high-contrast blocks. The primary "Submit Inspection" button uses the chamfered-corner style with a heavy bottom border.
- **Material Chips:** Square badges color-coded to the Material Semantic tokens (Shingle, Metal, TPO, EPDM). They must include the material acronym in JetBrains Mono.
- **Measurement Inputs:** Fields specifically designed for "Rise" and "Run" inputs, featuring large monospaced numerals and unit suffixes (e.g., "sq ft", "in") locked to the right.
- **The "Pitch Gauge":** A custom circular or semi-circular component that visualizes the roof slope dynamically based on input data.
- **Status Lists:** High-density rows with "Zinc" separators. Each row features a 4px leading edge color-strip to denote project status (Ready, In-Progress, Critical).
- **Technical Cards:** Border-only containers with a label-header "Tab" that sits on the top-left edge, mimicking industrial file folders or blueprints.
---
name: Professional Advocacy System
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#47464f'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#787680'
  outline-variant: '#c8c5d0'
  surface-tint: '#5a598f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#161447'
  on-primary-container: '#807eb7'
  inverse-primary: '#c3c1fe'
  secondary: '#3215e9'
  on-secondary: '#ffffff'
  secondary-container: '#4d40ff'
  on-secondary-container: '#e0ddff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#40000f'
  on-tertiary-container: '#f7325f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c1fe'
  on-primary-fixed: '#161447'
  on-primary-fixed-variant: '#424175'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0e006a'
  on-secondary-fixed-variant: '#2c03e5'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b9'
  on-tertiary-fixed: '#40000f'
  on-tertiary-fixed-variant: '#91002e'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  status-critical: '#E21E51'
  link-action: '#4D40FF'
  deep-navy: '#040037'
  surface-muted: '#F8F9FA'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Rubik
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Rubik
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Rubik
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Rubik
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max-width: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is built to convey **authority, precision, and urgency**. Designed for a professional claims management environment, the visual language balances the high-stakes nature of healthcare advocacy with modern SaaS efficiency. 

The chosen style is **Corporate/Modern with High-Contrast Accents**. It utilizes a deep, nocturnal foundation to establish trust and institutional stability, while employing vibrant crimson and electric blue to highlight critical data points and calls to action. The aesthetic is clean and structured, ensuring that complex information remains legible and actionable for CRM users.

## Colors

The palette is anchored by **Deep Navy (#040037)**, which serves as the primary color for navigation, headers, and core branding elements to project a sense of established authority. 

**Electric Blue (#4D40FF)** is the secondary driver, used specifically for interactive elements, primary buttons, and progress indicators. **Crimson (#E21E51)** is reserved for high-priority alerts, critical status updates, and "destructive" actions, reflecting the urgency of claim resolutions. The background surfaces utilize a clean **Off-white (#F8F9FA)** to minimize eye strain during long-form data entry while maintaining a crisp, clinical feel.

## Typography

This design system uses a dual-font approach to maximize both professionalism and readability. 

- **Manrope** is used for all headlines. Its geometric construction feels modern and technical, providing a strong sense of structure for page titles and section headers.
- **Rubik** is utilized for body text and labels. Its slightly rounded terminals offer a friendlier, more approachable reading experience, which is essential for reducing "form fatigue" in dense CRM interfaces.

Weight is used strategically to create hierarchy; use `SemiBold` (600) for section titles and `Medium` (500) for functional labels to ensure they stand out against data values.

## Layout & Spacing

The design system follows a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile devices. 

The layout rhythm is based on an **8px base unit**. 
- **Gutters:** Standardized at 24px to ensure distinct separation between data-rich widgets.
- **Margins:** 32px on desktop to provide breathing room; reduced to 16px on mobile.
- **Alignment:** All form elements and data tables should align to the grid, with specific attention to "scan lines"—ensuring that labels and input fields create a clear vertical path for the user's eye.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** rather than aggressive shadows. 

The system uses a "Surface-over-Base" model:
1. **Base Level:** The background (#F8F9FA).
2. **Surface Level:** White cards (#FFFFFF) with a very fine 1px border in a muted gray to define boundaries.
3. **Interactive Level:** Subtle, diffused ambient shadows (0px 4px 12px, 5% opacity) are used only for hovered elements or floating modals to indicate "lift."

This flat-but-layered approach ensures the CRM feels lightweight and fast, avoiding the visual clutter of heavy shadows.

## Shapes

The shape language is **Soft (Level 1)**. 

While the brand is authoritative, completely sharp corners can feel overly aggressive in a service-oriented CRM. 
- **Standard UI elements** (inputs, buttons, small cards) use a **0.25rem (4px)** corner radius.
- **Large containers** (main dashboard panels) may use **0.5rem (8px)** to subtly soften the layout.
- **Status Pills** should use a fully rounded (pill-shaped) radius to distinguish them clearly from interactive buttons.

## Components

### Buttons
- **Primary:** Deep Navy (#040037) background with White text. Hover state shifts to Electric Blue (#4D40FF).
- **Secondary:** Transparent background with Electric Blue border and text.
- **Urgent/Action:** Crimson (#E21E51) background for high-importance claims processing or deletion.

### Input Fields
- Use a white background with a light gray border. On focus, the border shifts to Electric Blue with a subtle 2px outer glow.
- Labels must always be visible (no placeholder-only labels) to maintain accessibility.

### Cards & Tables
- **Cards:** White background, 4px corner radius, and a 1px soft border. 
- **Tables:** Use alternating row stripes (Zebra striping) in #F8F9FA for dense claim lists. Table headers should use the Deep Navy text color with a bold Manrope font.

### Chips & Badges
- Used for claim status (e.g., "Pending," "Approved," "Denied"). 
- Use low-saturation background tints of the status color with high-saturation text for readability (e.g., a very light pink background with Crimson text for "Denied").
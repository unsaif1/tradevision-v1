import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand / Primary (neon pink / magenta)
        "primary-container": "#e21e51",
        "neon-pink": "#e21e51",
        "on-primary-container": "#fffcfc",

        // Surfaces
        "background": "#0f141a",
        "surface": "#0f141a",
        "surface-dim": "#0f141a",
        "surface-deep": "#090f15",
        "surface-bright": "#353941",
        "surface-container": "#1b2026",
        "surface-container-low": "#171c22",
        "surface-container-lowest": "#0a0f14",
        "surface-container-high": "#252a31",
        "surface-container-highest": "#30353d",
        "surface-elevated": "#1c2128",

        // On-surface text colors
        "on-surface": "#dee3eb",
        "on-surface-variant": "#d7c2c2",
        "on-background": "#dee3eb",
        "on-primary": "#522027",
        "on-primary-fixed": "#370c13",
        "on-primary-fixed-variant": "#6d363d",

        // Secondary
        "secondary": "#bac8db",
        "secondary-container": "#3a4858",
        "secondary-fixed": "#d5e4f7",
        "secondary-fixed-dim": "#bac8db",
        "on-secondary": "#243240",
        "on-secondary-container": "#a8b6c9",
        "on-secondary-fixed": "#0f1d2b",
        "on-secondary-fixed-variant": "#3a4858",

        // Tertiary
        "tertiary": "#d9e3f9",
        "tertiary-container": "#bdc7dc",
        "tertiary-fixed": "#d9e3f9",
        "tertiary-fixed-dim": "#bdc7dc",
        "on-tertiary": "#273141",
        "on-tertiary-container": "#fefcff",
        "on-tertiary-fixed": "#121c2c",
        "on-tertiary-fixed-variant": "#3d4759",

        // Outline
        "outline": "#9f8c8d",
        "outline-variant": "#524344",
        "outline-muted": "rgba(136, 150, 168, 0.15)",
        "surface-stroke": "rgba(136, 150, 168, 0.15)",

        // Status
        "status-success": "#4ade80",
        "status-error": "#f43f5e",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "on-error": "#690005",
        "on-error-container": "#ffdad6",

        // Accent
        "accent-cyan": "#00f2ff",
        "accent-active": "#c4113f",

        // Warning
        "warning": "#ff9100",

        // Utility
        "surface-tint": "#ffb2b9",
        "inverse-surface": "#dee3eb",
        "inverse-on-surface": "#2c3137",
        "inverse-primary": "#894d54",
        "primary-fixed": "#ffdadb",
        "primary-fixed-dim": "#ffb2b9",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-desktop": "24px",
        "gutter": "16px",
        xl: "40px",
        lg: "24px",
        md: "16px",
        sm: "8px",
        xs: "4px",
        "sidebar-width": "260px",
        "telemetry-sidebar-width": "340px",
      },
      fontFamily: {
        "headline-xl": ["Barlow Condensed", "sans-serif"],
        "headline-lg": ["Barlow Condensed", "sans-serif"],
        "headline-md": ["Barlow Condensed", "sans-serif"],
        "headline-sm": ["Barlow Condensed", "sans-serif"],
        "label-md": ["Manrope", "sans-serif"],
        "label-sm": ["Manrope", "sans-serif"],
        "label-caps": ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "body-md": ["Manrope", "sans-serif"],
        "body-sm": ["Manrope", "sans-serif"],
        "mono-data": ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "headline-xl": ["40px", { lineHeight: "48px", letterSpacing: "0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "0.01em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "label-sm": ["11px", { lineHeight: "14px", fontWeight: "500" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
        "mono-data": ["12px", { lineHeight: "16px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

export default config;

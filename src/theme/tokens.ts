// tokens.ts
// Central design tokens so the light/dark themes stay in sync and easy to retune.

export const brand = {
  // Pulled from the existing logo mark (public/favicon.svg) so the whole
  // site stays visually consistent with the brand identity already in use.
  violet: "#7C3AED",
  violetLight: "#A78BFA",
  violetSoft: "#EDE6FF",
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 22,
  pill: 999,
};

export const fonts = {
  // Workhorse UI/body font — geometric, highly legible, huge weight range.
  sans: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
  // Editorial display font used sparingly for the hero name / big statement
  // headlines. Soft, slightly irregular serif that reads as "designed",
  // not corporate — pairs well with a clean geometric sans.
  display: "'Fraunces', 'Georgia', serif",
};

export const lightPalette = {
  mode: "light" as const,
  primary: { main: brand.violet, light: brand.violetLight, dark: "#5B21B6", contrastText: "#ffffff" },
  secondary: { main: "#0EA5A4" },
  background: { default: "#FAFAFA", paper: "#FFFFFF" },
  text: { primary: "#14121A", secondary: "#6B6375", disabled: "#A9A3B5" },
  divider: "#E7E4EC",
  action: { hover: "rgba(124, 58, 237, 0.06)" },
};

export const darkPalette = {
  mode: "dark" as const,
  primary: { main: brand.violetLight, light: "#C4B5FD", dark: brand.violet, contrastText: "#14121A" },
  secondary: { main: "#2DD4BF" },
  background: { default: "#0B0A10", paper: "#15131D" },
  text: { primary: "#F3F1F7", secondary: "#A79FB8", disabled: "#6B6478" },
  divider: "rgba(255, 255, 255, 0.09)",
  action: { hover: "rgba(167, 139, 250, 0.08)" },
};

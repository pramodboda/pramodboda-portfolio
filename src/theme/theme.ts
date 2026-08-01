// theme.ts
//
// TYPOGRAPHY SYSTEM
// ------------------
// Font pairing: "Plus Jakarta Sans" (geometric grotesque) for all UI/body
// text, and "Fraunces" (soft editorial serif) reserved for the hero name
// and rare full-bleed statement lines. This sans+serif pairing is a
// deliberate choice for a minimal portfolio: the grotesque keeps the UI
// calm and legible, the serif gives the one or two "signature" moments
// (your name, a big pull quote) some personality without adding visual
// noise everywhere.
//
// Scale: a ~1.25 modular-ish scale, hand-tuned, with tighter negative
// letter-spacing at large sizes (headlines feel considered, not default)
// and generous line-height at body sizes (1.65–1.7) for comfortable
// long-form reading. Only h1 uses the display font — everything else
// stays on Plus Jakarta Sans so the page never feels like a font demo.

import { createTheme, alpha } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";
import type { ColorMode } from "../types/app.types";
import { fonts, radius, lightPalette, darkPalette } from "./tokens";

export const getAppTheme = (mode: ColorMode) => {
  const palette = mode === "light" ? lightPalette : darkPalette;

  const themeOptions: ThemeOptions = {
    palette,
    shape: { borderRadius: radius.md },
    typography: {
      fontFamily: fonts.sans,
      htmlFontSize: 16,
      fontSize: 14,

      h1: {
        // Hero name — the one place the display serif shows up.
        fontFamily: fonts.display,
        fontWeight: 500,
        fontStyle: "italic",
        fontSize: "clamp(2.75rem, 6vw, 4.75rem)",
        lineHeight: 1.05,
        letterSpacing: "-0.01em",
      },
      h2: {
        // Section titles.
        fontWeight: 700,
        fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
        lineHeight: 1.18,
        letterSpacing: "-0.02em",
      },
      h3: {
        fontWeight: 700,
        fontSize: "1.75rem",
        lineHeight: 1.25,
        letterSpacing: "-0.015em",
      },
      h4: {
        // Card / panel titles.
        fontWeight: 700,
        fontSize: "1.25rem",
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.0625rem",
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 600,
        fontSize: "0.9375rem",
        lineHeight: 1.5,
      },
      subtitle1: {
        // Hero role line / tagline under a heading.
        fontWeight: 500,
        fontSize: "1.125rem",
        lineHeight: 1.5,
        color: palette.text.secondary,
      },
      subtitle2: {
        fontWeight: 600,
        fontSize: "0.9375rem",
        lineHeight: 1.5,
      },
      body1: {
        // Main paragraph copy — optimized for reading comfort.
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.7,
        color: palette.text.secondary,
      },
      body2: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.65,
        color: palette.text.secondary,
      },
      button: {
        fontWeight: 600,
        fontSize: "0.9375rem",
        textTransform: "none",
        letterSpacing: 0,
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: 1.5,
        color: palette.text.secondary,
      },
      overline: {
        // Eyebrow labels ("Hey, I'm" / section kickers).
        fontWeight: 700,
        fontSize: "0.75rem",
        letterSpacing: "0.14em",
        lineHeight: 1.6,
        color: palette.primary.main,
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "html, body": {
            scrollBehavior: "smooth",
          },
          "::selection": {
            backgroundColor: alpha(palette.primary.main, 0.25),
          },
          "*:focus-visible": {
            outline: `2px solid ${palette.primary.main}`,
            outlineOffset: "2px",
          },
        },
      },
      MuiContainer: {
        defaultProps: { maxWidth: "lg" },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            padding: "10px 22px",
            borderRadius: radius.pill,
          },
          sizeLarge: {
            padding: "12px 28px",
            fontSize: "1rem",
          },
          contained: {
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
          },
          outlined: {
            borderWidth: 1.5,
            "&:hover": { borderWidth: 1.5 },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            border: `1px solid ${palette.divider}`,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: radius.lg,
            boxShadow: "none",
            border: `1px solid ${palette.divider}`,
            backgroundImage: "none",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            borderRadius: radius.sm,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            backgroundImage: "none",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};

export default getAppTheme;

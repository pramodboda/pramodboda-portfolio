// src/theme/theme.ts
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
        // fontSize: 'clamp(1.875rem, 1.5rem + 1.5vw, 2.5rem)', // 30px → 40px
        lineHeight: 1.05,
        letterSpacing: "-0.01em",
      },
      h2: {
        // Section titles.
        fontSize: 'clamp(1.625rem, 1.3rem + 1.2vw, 2.125rem)', // 26px → 34px
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: "-0.02em",
      },
      h3: {
        fontSize: 'clamp(1.375rem, 1.15rem + 0.9vw, 1.75rem)', // 22px → 28px
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "-0.015em",
      },
      h4: {
        // Card / panel titles.
        fontSize: 'clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)', // 20px → 24px
        fontWeight: 600,
        lineHeight: 1.35,
        letterSpacing: "-0.01em",
      },
      h5: {
        fontSize: 'clamp(1.125rem, 1rem + 0.4vw, 1.25rem)', // 18px → 20px
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', // 16px → 18px
        fontWeight: 600,
        lineHeight: 1.4,
      },
      subtitle1: {
        // Hero role line / tagline under a heading.
        fontSize: 'clamp(0.9375rem, 0.9rem + 0.15vw, 1rem)', // 15px → 16px
        fontWeight: 500,
        lineHeight: 1.5,
        color: palette.text.secondary,
      },
      subtitle2: {
        fontSize: 'clamp(0.8125rem, 0.8rem + 0.1vw, 0.875rem)', // 13px → 14px
        fontWeight: 500,
        lineHeight: 1.5,
      },
      body1: {
        // Main paragraph copy — optimized for reading comfort.
        fontSize: 'clamp(0.875rem, 0.85rem + 0.1vw, 1rem)', // 14px → 16px
        fontWeight: 400,
        lineHeight: 1.6,
        color: palette.text.secondary,
      },
      body2: {
        fontSize: 'clamp(0.8125rem, 0.8rem + 0.05vw, 0.875rem)', // 13px → 14px
        fontWeight: 400,
        lineHeight: 1.6,
        color: palette.text.secondary,
      },
      button: {
        fontSize: 'clamp(0.8125rem, 0.8rem + 0.05vw, 0.875rem)', // 13px → 14px
        fontWeight: 600,
        textTransform: 'none',
        letterSpacing: 0,
      },
      caption: {
        fontSize: 'clamp(0.6875rem, 0.68rem + 0.05vw, 0.75rem)', // 11px → 12px
        fontWeight: 400,
        lineHeight: 1.4,
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
            borderRadius: radius.md,
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

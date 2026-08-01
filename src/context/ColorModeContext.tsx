// ColorModeContext.tsx
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getAppTheme } from "../theme/theme";
import type { ColorMode } from "../types/app.types";
import { ColorModeContext } from "./colorModeContextDefinition";

const STORAGE_KEY = "pb-portfolio-color-mode";

const getInitialMode = (): ColorMode => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorMode>(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    // Keeps the browser UI (scrollbars, form controls) in sync with the theme.
    document.documentElement.style.colorScheme = mode;
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

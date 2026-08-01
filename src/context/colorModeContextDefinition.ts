// colorModeContextDefinition.ts
import { createContext } from "react";
import type { ColorMode } from "../types/app.types";

export interface ColorModeContextValue {
  mode: ColorMode;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextValue>({
  mode: "light",
  toggleColorMode: () => {},
});

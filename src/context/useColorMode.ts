// useColorMode.ts
import { useContext } from "react";
import { ColorModeContext } from "./colorModeContextDefinition";

export const useColorMode = () => useContext(ColorModeContext);

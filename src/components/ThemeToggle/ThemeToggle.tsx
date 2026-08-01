// ThemeToggle.tsx
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { LuSun, LuMoon } from "react-icons/lu";
import { useColorMode } from "../../context/useColorMode";

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Tooltip title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
        size="small"
        sx={{
          width: 40,
          height: 40,
          color: "text.primary",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "rotate(-14deg)", borderColor: "primary.main" },
        }}
      >
        {mode === "light" ? <LuMoon size={18} /> : <LuSun size={18} />}
      </IconButton>
    </Tooltip>
  );
}

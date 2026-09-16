// HeroRight.tsx
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import CircularText from "../../components/animations/CircularText/CircularText";

import Character from "../../components/Character";

export default function HeroRight() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: 260, sm: 320, md: 360 },
        height: { xs: 260, sm: 320, md: 360 },
        mx: "auto",
      }}
    >
      <Character />


      {/* Rotating badge overlapping the bottom-right of the portrait */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          bottom: -10,
          right: -10,
          width: { xs: 92, md: 110 },
          height: { xs: 92, md: 110 },
          borderRadius: "50%",
          bgcolor: "background.paper",
          border: `1px solid ${theme.palette.divider}`,
          boxShadow:
            theme.palette.mode === "light"
              ? "0 10px 24px -8px rgba(20, 18, 26, 0.25)"
              : "0 10px 24px -8px rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <CircularText
          text="UI/UX • FRONTEND • BACKEND • "
          onHover="speedUp"
          spinDuration={16}
          className="circular-text-custom"
        />
      </Box>
    </Box>
  );
}

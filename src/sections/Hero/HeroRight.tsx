// HeroRight.tsx
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import CircularText from "../../components/animations/CircularText/CircularText";
import heroImg from "../../assets/hero.png";
import computerztech from "../../assets/computerztech.svg?react";

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
      {/* Soft blurred accent blob behind the portrait */}
      {/* <Box
        sx={{
          position: "absolute",
          inset: -20,
          borderRadius: "50%",
          background: `radial-gradient(circle at 30% 30%, ${theme.palette.primary.main}33, transparent 70%)`,
          filter: "blur(10px)",
          zIndex: 0,
        }}
      /> */}

      {/* <Box
        component="img"
        src={heroImg}
        alt="Portrait of Pramod Boda"
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
          border: `1px solid ${theme.palette.divider}`,
          boxShadow:
            theme.palette.mode === "light"
              ? "0 30px 60px -30px rgba(20, 18, 26, 0.35)"
              : "0 30px 60px -30px rgba(0, 0, 0, 0.7)",
        }}
      /> */}
      <computerztech />



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

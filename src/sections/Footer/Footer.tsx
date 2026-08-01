// Footer.tsx
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { LuArrowUp } from "react-icons/lu";

import HeartRotate from "../../components/animations/HeartRotate/HeartRotate";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      component="footer"
      sx={{ borderTop: "1px solid", borderColor: "divider", mt: 4 }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ alignItems: "center", justifyContent: "space-between", py: 3 }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Pramod Boda. All rights reserved.
        </Typography>

        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
        >
          Made with love
          <Box
            component="span"
            sx={{ position: "relative", display: "inline-flex", mx: 0.25 }}
          >
            <HeartRotate />
          </Box>
          by Pramod Boda
        </Typography>

        <Tooltip title="Back to top">
          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            size="small"
          >
            <LuArrowUp size={16} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
}

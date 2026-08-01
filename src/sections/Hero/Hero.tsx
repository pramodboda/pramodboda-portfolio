// Hero.tsx
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <Box id="top" component="section" sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 10 } }}>
      <Grid container spacing={{ xs: 6, md: 4 }} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
          <HeroLeft />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 2 } }}>
          <HeroRight />
        </Grid>
      </Grid>
    </Box>
  );
}

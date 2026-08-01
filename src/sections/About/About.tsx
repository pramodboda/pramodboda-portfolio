// About.tsx
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import SectionHeading from "../../components/SectionHeading/SectionHeading";

const STATS = [
  { value: "4+", label: "Years of experience" },
  { value: "20+", label: "Projects delivered" },
  { value: "10+", label: "Core technologies" },
  { value: "100%", label: "Remote-ready" },
];

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <SectionHeading eyebrow="About Me" title="A little about how I work" />

      <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.0625rem" }}>
            I'm a frontend-focused engineer who enjoys turning complex product requirements
            into interfaces that feel simple. Most of my recent work has been in React and
            TypeScript &mdash; building design systems, optimizing state management, and shipping
            features that hold up under real-world data and traffic.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.0625rem" }}>
            I care about the details other people skip: consistent spacing, accessible color
            contrast, sensible loading states, and code that the next engineer can actually
            read. When I'm not writing React, I'm usually exploring backend tooling or
            refining this very portfolio.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Grid container spacing={2}>
            {STATS.map((stat) => (
              <Grid key={stat.label} size={6}>
                <Stack
                  sx={{
                    p: 2.5,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    height: "100%",
                  }}
                >
                  <Typography variant="h3" sx={{ color: "primary.main" }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2">{stat.label}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

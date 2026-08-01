// SectionHeading.tsx
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  caption?: string | ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, caption, align = "left" }: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 3, md: 5 }, textAlign: align, maxWidth: align === "center" ? 640 : "100%", mx: align === "center" ? "auto" : 0 }}>
      {eyebrow && (
        <Typography variant="overline" component="p" sx={{ mb: 1 }}>
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h2" component="h2" sx={{ mb: caption ? 1.5 : 0 }}>
        {title}
      </Typography>
      {caption && (
        <Typography variant="body1" sx={{ maxWidth: 480, mx: align === "center" ? "auto" : 0 }}>
          {caption}
        </Typography>
      )}
    </Box>
  );
}

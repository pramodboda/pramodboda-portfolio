// HeroLeft.tsx
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {
  LuArrowRight,
  LuArrowDown,
  LuGithub,
  LuLinkedin,
  LuMail,
} from "react-icons/lu";

const SOCIALS = [
  { icon: LuGithub, href: "https://github.com/pramodboda", label: "GitHub" },
  {
    icon: LuLinkedin,
    href: "https://linkedin.com/in/pramodkumarboda",
    label: "LinkedIn",
  },
  { icon: LuMail, href: "mailto:pramodkumarboda@gmail.com", label: "Email" },
];

export default function HeroLeft() {
  const scrollTo = (href: string) => {
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Typography variant="overline" component="p">
        Hey, I'm
      </Typography>

      <Typography
        variant="h1"
        component="h1"
        sx={{ mb: 1.5, color: "text.primary" }}
      >
        Pramod Boda
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 2.5 }}>
        Senior Frontend Engineer &middot; React &amp; TypeScript Specialist
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, maxWidth: 480, mx: { xs: "auto", md: 0 } }}
      >
        I build scalable, high-performance web applications using React,
        TypeScript, and modern UI architecture &mdash; with a focus on clean
        design systems and pixel-accurate detail.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          mb: 4,
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<LuArrowRight size={18} />}
          onClick={() => scrollTo("#work")}
        >
          View My Work
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          endIcon={<LuArrowDown size={18} />}
          onClick={() => scrollTo("#contact")}
          sx={{ color: "text.primary", borderColor: "divider" }}
        >
          Get In Touch
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={1.5}
        sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
      >
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <IconButton
            key={label}
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            sx={{
              color: "text.secondary",
              "&:hover": { color: "primary.main", borderColor: "primary.main" },
            }}
          >
            <Icon size={18} />
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
}

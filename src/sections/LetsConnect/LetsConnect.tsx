// LetsConnect.tsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import {
  LuMail,
  LuCopy,
  LuCheck,
  LuGithub,
  LuLinkedin,
  LuTwitter,
} from "react-icons/lu";

import SectionHeading from "../../components/SectionHeading/SectionHeading";

const EMAIL = "hello@pramodboda.dev";

const SOCIALS = [
  { icon: LuGithub, href: "https://github.com/pramodboda", label: "GitHub" },
  {
    icon: LuLinkedin,
    href: "https://linkedin.com/in/pramodkumarboda",
    label: "LinkedIn",
  },
  {
    icon: LuTwitter,
    href: "https://twitter.com/pramodboda",
    label: "Twitter / X",
  },
];

export default function LetsConnect() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the mailto button still works as a fallback.
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 8 },
          borderRadius: 6,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <SectionHeading
          align="center"
          eyebrow="Let's Connect"
          title={
            <>
              Got a project in mind?
              <br />
              Let's make it happen.
            </>
          }
          caption="Shoot me an email and let's bring your ideas to life."
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mb: 4, justifyContent: "center", alignItems: "center" }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<LuMail size={18} />}
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </Button>
          <Tooltip title={copied ? "Copied!" : "Copy email address"}>
            <IconButton
              onClick={handleCopy}
              aria-label="Copy email address"
              sx={{ color: copied ? "success.main" : "text.secondary" }}
            >
              {copied ? <LuCheck size={18} /> : <LuCopy size={18} />}
            </IconButton>
          </Tooltip>
        </Stack>

        <Stack direction="row" spacing={1.5} sx={{ justifyContent: "center" }}>
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
                "&:hover": {
                  color: "primary.main",
                  borderColor: "primary.main",
                },
              }}
            >
              <Icon size={18} />
            </IconButton>
          ))}
        </Stack>

        <Typography variant="caption" sx={{ display: "block", mt: 3 }}>
          Usually replies within 24 hours.
        </Typography>
      </Box>
    </Box>
  );
}

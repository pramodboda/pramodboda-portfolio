// Navbar.tsx
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { LuMenu, LuX } from "react-icons/lu";
import { useTheme, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";



import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };





  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };



  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        bgcolor: scrolled
          ? alpha(theme.palette.background.default, 0.75)
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: `1px solid ${scrolled ? theme.palette.divider : "transparent"
          }`,
        transition: "all 0.25s ease",
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, lg: 0 } }}>
        <Toolbar
          disableGutters
          sx={{ py: 1.25, justifyContent: "space-between" }}
        >
          <Typography
            // component="a"
            component={RouterLink}
            // href="#top"
            to="/"
            // onClick={(e) => {
            //   e.preventDefault();
            //   window.scrollTo({ top: 0, behavior: "smooth" });
            // }}
            onClick={handleLogoClick}
            sx={{
              fontFamily: theme.typography.h1.fontFamily,
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "1.35rem",
              color: "text.primary",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Pramod Boda
            <Box component="span" sx={{ color: "primary.main" }}>
              .
            </Box>
          </Typography>

          {!isMobile && (
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    "&:hover": {
                      color: "text.primary",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          )}

          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <ThemeToggle />
            {!isMobile && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNavClick("#contact")}
              >
                Let's Talk
              </Button>
            )}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                sx={{ color: "text.primary" }}
              >
                <LuMenu size={20} />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 280,
            height: "100%",
            bgcolor: "background.default",
            p: 3,
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <LuX size={20} />
            </IconButton>
          </Stack>
          <Stack spacing={1} sx={{ mt: 2 }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                sx={{
                  justifyContent: "flex-start",
                  color: "text.primary",
                  fontSize: "1.1rem",
                  py: 1.2,
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => handleNavClick("#contact")}
            >
              Let's Talk
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}

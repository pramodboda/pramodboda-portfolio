import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import AppRoutes from "./routes/AppRoutes";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

import Navbar from "./components/Navbar/Navbar";
// import Hero from "./sections/Hero/Hero";
// import About from "./sections/About/About";
// import SkillsAndExpertise from "./sections/SkillsAndExpertise/SkillsAndExpertise";
// import FeaturedProjects from "./sections/FeaturedProjects/FeaturedProjects";
// import LetsConnect from "./sections/LetsConnect/LetsConnect";
// import Home from "./pages/Home/Home";
import Footer from "./sections/Footer/Footer";

import AppLoaderComponent from "./components/AppLoaderComponent/AppLoaderComponent";



// How long the intro loader stays on screen. Kept short (this is a static
// site, nothing is actually being fetched) so it reads as a brand moment
// rather than something the visitor has to wait through.
// const LOADER_DURATION_MS = 1600;
const LOADER_DURATION_MS = 4600;

function App() {
  const theme = useTheme();
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = appLoading ? "hidden" : "auto";
  }, [appLoading]);

  return (
    <>
      <Navbar />

      <Container maxWidth="lg">
        {/* <Hero />
        <About />
        <SkillsAndExpertise />
        <FeaturedProjects />
        <LetsConnect /> */}
        {/* <Home/> */}
        <AppRoutes/>
      </Container>

      <Box sx={{ px: { xs: 2, lg: 3 } }}>
        <Container maxWidth="lg" disableGutters>
          <Footer />
        </Container>
      </Box>

      <AnimatePresence>
        {appLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: theme.palette.background.default,
            }}
          >
            <AppLoaderComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

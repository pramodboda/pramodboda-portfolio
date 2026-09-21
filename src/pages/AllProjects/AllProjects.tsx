// src/pages/AllProjects/AllProjects.tsx
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { projectsData } from "../../data/projects_data";

export default function AllProjects() {

  const readyProjects = projectsData.filter((project) => project.isReady);
  return (
    <Box component="main" sx={{ py: { xs: 8, md: 12 } }}>

      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        caption="A collection of projects spanning frontend, full-stack development, real-time applications, and UI engineering."
      />

      <Grid container spacing={3}>
        <>
          {readyProjects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard
                title={project.title}
                // description={project.description}
                technologies={project.technologies}
                liveDemoLink={project.liveDemoLink}
                githubLink={project.githubLink}
                thumbImg={project.thumbImg}
              />
            </Grid>
          ))}

          {readyProjects.length < projectsData.length && (
            <Grid size={{ xs: 12 }}>
              <Typography>More projects are currently in development. Stay tuned!</Typography>
            </Grid>

          )}
        </>
      </Grid>
    </Box>
  );
}

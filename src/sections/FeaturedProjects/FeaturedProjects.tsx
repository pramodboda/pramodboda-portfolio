// FeaturedProjects.tsx
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { projectsData } from "../../data/projects_data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function FeaturedProjects() {
  return (
    <Box id="work" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <SectionHeading
        eyebrow="Featured Work"
        title="My latest work"
        caption={
          <>
            A selection of products I've designed and built &mdash; from full-stack tools to
            real-time collaborative apps.
          </>
        }
      />

      <Grid container spacing={3}>
        {projectsData.map((project) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveDemoLink={project.liveDemoLink}
              githubLink={project.githubLink}
              thumbImg={project.thumbImg}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

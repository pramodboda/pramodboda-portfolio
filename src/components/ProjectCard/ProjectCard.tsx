// ProjectCard.tsx
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import type { Project } from "../../types/app.types";

type ProjectCardProps = Pick<
  Project,
  "title" | "description" | "technologies" | "liveDemoLink" | "githubLink" | "thumbImg"
>;

// Deterministic gradient so cards without a thumbnail still look intentional
// (not a broken image) and stay visually distinct from one another.
const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #7C3AED 0%, #47BFFF 100%)",
  "linear-gradient(135deg, #EC4899 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #0EA5A4 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #F59E0B 0%, #7C3AED 100%)",
];

const gradientFor = (title: string) => {
  const index = title.charCodeAt(0) % FALLBACK_GRADIENTS.length;
  return FALLBACK_GRADIENTS[index];
};

export default function ProjectCard({
  title,
  description,
  technologies,
  liveDemoLink,
  githubLink,
  thumbImg,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 20px 40px -20px rgba(20, 18, 26, 0.25)"
              : "0 20px 40px -20px rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <Box
        sx={{
          height: 180,
          backgroundImage: thumbImg ? `url(${thumbImg})` : gradientFor(title),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            mb: 1.5,
          }}
        >
          {description}
        </Typography>
        <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: "wrap" }}>
          {technologies?.slice(0, 4).map((tech) => (
            <Chip key={tech} label={tech} size="small" variant="outlined" />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, pt: 0, gap: 1 }}>
        {liveDemoLink && (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<LuArrowUpRight size={15} />}
          >
            Live Demo
          </Button>
        )}
        {githubLink && (
          <Button
            variant="text"
            color="inherit"
            size="small"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LuGithub size={15} />}
            sx={{ color: "text.secondary" }}
          >
            Code
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

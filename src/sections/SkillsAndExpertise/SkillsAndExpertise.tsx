// SkillsAndExpertise.tsx
import Box from "@mui/material/Box";

import ScrollVelocity from "../../components/animations/ScrollVelocity/ScrollVelocity";
import {
  frontendSkillData,
  backendSkillData,
} from "../../data/skillsAndExpertise_data";

import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SkillCard from "../../components/SkillCard/SkillCard";

export default function SkillsAndExpertise() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <SectionHeading eyebrow="Skills & Expertise" title="Technical toolbox" />

      <Box
        sx={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* <Box sx={{ mb: 2 }}> */}
        <Box sx={{ mb: 0.5 }}>
          <ScrollVelocity
            velocity={30}
            numCopies={6}
            content={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "nowrap",
                }}
              >
                {frontendSkillData.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    logo={skill.logo}
                    title={skill.title}
                  />
                ))}
              </Box>
            }
          />
        </Box>

        <Box>
          <ScrollVelocity
            velocity={-26}
            numCopies={6}
            content={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "nowrap",
                }}
              >
                {backendSkillData.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    logo={skill.logo}
                    title={skill.title}
                  />
                ))}
              </Box>
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

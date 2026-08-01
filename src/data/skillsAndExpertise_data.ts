// skillsAndExpertise_data.ts
import type { ISkill } from "../types/app.types";

import { FaReact, FaCss3 } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiHtml5, SiSass, SiRedux, SiMui } from "react-icons/si";
import { SiNodedotjs, SiSpring, SiPython, SiDjango, SiPostgresql, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

export const frontendSkillData: ISkill[] = [
    { id: 1, title: "React", logo: FaReact },
    { id: 2, title: "TypeScript", logo: SiTypescript },
    { id: 3, title: "JavaScript", logo: SiJavascript },
    { id: 4, title: "HTML5", logo: SiHtml5 },
    { id: 5, title: "CSS3", logo: FaCss3 },
    { id: 6, title: "SASS", logo: SiSass },
    { id: 7, title: "Redux", logo: SiRedux },
    { id: 8, title: "Material UI", logo: SiMui },
];

export const backendSkillData: ISkill[] = [
    { id: 1, title: "Node.js", logo: SiNodedotjs },
    { id: 2, title: "Java", logo: FaJava },
    { id: 3, title: "Spring Boot", logo: SiSpring },
    { id: 4, title: "Python", logo: SiPython },
    { id: 5, title: "Django", logo: SiDjango },
    { id: 6, title: "REST API", logo: TbApi },
    { id: 7, title: "PostgreSQL", logo: SiPostgresql },
    { id: 8, title: "MySQL", logo: SiMysql },
];

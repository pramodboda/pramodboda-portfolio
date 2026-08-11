// app.types.ts
import type { IconType } from "react-icons";

export interface ISkill {
    id: number;
    title: string;
    logo?: IconType;
}

export interface Project {
    id: number | string;
    featured: boolean;
    title: string;
    slug: string;
    description: string;
    level: number;
    technologies: string[];
    skills: string[];
    liveDemoLink?: string;
    githubLink?: string;
    thumbImg?: string;
}

export type ColorMode = "light" | "dark";

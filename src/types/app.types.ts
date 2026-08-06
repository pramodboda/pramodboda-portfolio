// app.types.ts
import type { IconType } from "react-icons";

export interface ISkill {
    id: number;
    title: string;
    logo?: IconType;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    featured: boolean
    technologies: string[];
    skills: string[];
    liveDemoLink?: string;
    githubLink?: string;
    thumbImg?: string;
}

export type ColorMode = "light" | "dark";

// projects_data.ts
import type { Project } from "../types/app.types";



export const projectsData: Project[] = [

    {
        id: 1,
        featured: true,
        title: "Enterprise Operations Command Center",
        slug: "Enterprise Operations Command Center",
        description:
            "A highly interactive enterprise dashboard for monitoring multiple business operations in real time. Include KPI cards, drill-down analytics, filters, saved views, configurable widgets, alerts and role-based dashboards.",


        technologies: ["React", "TypeScript", "MUI", "Zustand", "TanStack Query", "Recharts", "Node.js", "PostgreSQL", "WebSocket/Socket.IO"],
        skills: [
            "Full Stack Development",
            "State Management",
            "API Design",
            "Performance Optimization",
            "Database Design"
        ],
        liveDemoLink: "",
        github: "",
        highlights: [
            "Advanced React architecture", "state management", "data visualization", "performance and real-time UI"
        ]


    },
    {
        id: 2,
        featured: true,
        title: "Advanced Data Grid / Spreadsheet Application",
        slug: "Advanced Data Grid / Spreadsheet Application",
        description:
            "Build a mini Excel-like web application supporting large datasets.",
        technologies: ["React", "TypeScript", "TanStack Table", "Web Workers", "Node.js", "PostgreSQL"],
        skills: [

        ],
        liveDemoLink: "",
        github: "",
        features: ["Virtual scrolling",
            "Column resizing",
            "Sorting",
            "Filtering",
            "Inline editing",
            "CSV import/export",
            "Formula support",
            "Keyboard navigation",
            "Pagination"],

        highlights: [
            "Advanced React architecture", "state management", "data visualization", "Real-time UI and Frontend performance engineering."
        ]


    },

    {
        id: 1,
        title: "Coming Soon JIRA Kind of Project",
        slug: "Coming Soon JIRA Kind of Project",
        description:
            "Kind of Project",
        featured: true,
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Zustand", "React Query", "MUI"],
        skills: [
            "Full Stack Development",
            "State Management",
            "API Design",
            "Performance Optimization",
            "Database Design"
        ],
        liveDemoLink: "",
        //   github: "",
        //   highlights: [
        //     "Built entire application solo",
        //     "Optimized API calls using React Query",
        //     "Handled large datasets efficiently"
        //   ]
    },

    {
        id: 2,
        thumbImg: "",
        title: "Real-Time Collaborative Whiteboard",
        featured: true,
        description:
            "A modern, multiplayer whiteboard application that enables users to draw, sketch, brainstorm, and collaborate together in real time from anywhere in the world.",
        technologies: ["React", "TypeScript", "Node.js", "Socket.IO", "MUI"],
        skills: [
            "Frontend Development",
            "File Processing",
            "Authentication",
            "UI/UX Design",
            "Cloud Integration"
        ],
        liveDemoLink: "https://collaborative-whiteboard-nu.vercel.app/",
        //   github: "https://github.com/your-username/reimagine-viewer",
        //   highlights: [
        //     "Supports multilingual documents",
        //     "Integrated Azure authentication",
        //     "Smooth preview experience"
        //   ]
    },
    {
        id: 3,
        // thumbImg: "https://res.cloudinary.com/dnwrsbors/image/upload/v1777490962/masonry-gallery-mui_rryhdr.png",

        title: "Image Gallery - Masonry Layout",
        description:
            "A responsive and visually dynamic image gallery built using a masonry layout to optimize space utilization and enhance user experience. The application intelligently arranges images of varying heights into seamless columns, eliminating gaps and creating a Pinterest-style layout. The project focuses on performance, responsiveness, and smooth user interactions while handling real-world challenges like asynchronous image loading, layout shifts, and scalability.",
        featured: true,
        technologies: ["React", "TypeScript", "VITE"],
        skills: [
            "Computer Vision",
            "Backend Development",
            "Video Processing",
            "Algorithm Design",
            "UI Integration"
        ],
        liveDemoLink: "https://masonry-mui.vercel.app/",
        //   github: "https://github.com/your-username/clip-cleaner",
        //   highlights: [
        //     "Automated video cleaning pipeline",
        //     "Frame-level detection logic",
        //     "Exports cleaned clips efficiently"
        //   ]

    },
    {
        id: 5,
        title: "Clip Cleaner (AI Video Processing Tool)",
        description:
            "A smart video processing tool that detects and removes idle frames, blank scenes, and erasing actions from raw art videos, producing clean and usable clips.",
        featured: true,
        technologies: ["Python", "Flask", "OpenCV", "React", "TypeScript"],
        skills: [
            "Computer Vision",
            "Backend Development",
            "Video Processing",
            "Algorithm Design",
            "UI Integration"
        ],
        liveDemoLink: "https://clip-cleaner-demo.vercel.app",
        //   github: "https://github.com/your-username/clip-cleaner",
        //   highlights: [
        //     "Automated video cleaning pipeline",
        //     "Frame-level detection logic",
        //     "Exports cleaned clips efficiently"
        //   ]
    },
    {
        id: 6,
        title: "BeaClip (Smart Clip Selector)",
        description:
            "A tool that ranks video clips based on aesthetic quality and selects the best clips within a specified duration, maintaining original order.",
        featured: true,
        technologies: ["Node.js", "TypeScript", "React"],
        skills: [
            "Algorithm Design",
            "Data Processing",
            "Ranking Systems",
            "Performance Optimization"
        ],
        liveDemoLink: "https://beaclip-demo.vercel.app",
        //   github: "https://github.com/your-username/beaclip",
        //   highlights: [
        //     "Custom ranking algorithm",
        //     "Efficient duration fitting logic",
        //     "Folder-level automation"
        //   ]
    },
    {
        id: 7,
        title: "Portfolio Website",
        description:
            "A modern, responsive portfolio showcasing projects, skills, and experience with a minimal UI/UX design approach.",
        featured: true,
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        skills: [
            "UI/UX Design",
            "Responsive Design",
            "Animations",
            "Component Architecture"
        ],
        liveDemoLink: "https://your-portfolio.vercel.app",
        //   github: "https://github.com/your-username/portfolio",
        //   highlights: [
        //     "Clean and minimal UI",
        //     "Smooth animations with Framer Motion",
        //     "Fully responsive design"
        //   ]
    },
    {
        id: 8,
        title: "Task Management Dashboard",
        description:
            "A productivity dashboard for managing tasks, tracking progress, and organizing workflows with intuitive UI and real-time updates.",
        featured: true,
        technologies: ["React", "TypeScript", "Firebase", "MUI"],
        skills: [
            "Frontend Development",
            "Realtime Data Handling",
            "UX Design",
            "State Management"
        ],
        liveDemoLink: "https://task-dashboard-demo.vercel.app",
        //   github: "https://github.com/your-username/task-dashboard",
        //   highlights: [
        //     "Realtime updates with Firebase",
        //     "Drag-and-drop task management",
        //     "Clean dashboard UI"
        //   ]
    }
];
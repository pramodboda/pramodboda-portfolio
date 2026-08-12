// projects_data.ts
import type { Project } from "../types/app.types";



export const projectsData: Project[] = [



    //==========================================================
    // Level 4 
    //==========================================================
    {
        id: "notification-infrastructure",
        level: 4,
        featured: false,
        title: "Notification Infrastructure",
        slug: "Notification Infrastructure",
        description:
            "A centralized notification platform. Designed and developed the client architecture for in-app notifications: transient toasts for real-time events, plus a persistent inbox the user can review later. Support: Email, Push, In-app, SMS simulation",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Node.js", "PostgreSQL"],
        skills: [
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Templates",
            "Scheduling",
            "Retry",
            "Queue",
            "Delivery status",
            "User preferences",
            "Persistent inbox"
        ],
        highlights: [
        ]
    },
    //==========================================================
    // Level 3: AI Projects
    //==========================================================
    {
        id: "enterprise-ai-knowledge-assistant",
        level: 3,
        featured: true,
        title: "Enterprise AI Knowledge Assistant",
        slug: "Enterprise AI Knowledge Assistant",
        description:
            "Upload company documents and ask questions.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python FastAPI", "PostgreSQL/pgvector"],
        skills: [
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "PDF ingestion",
            "Chunking",
            "Embeddings",
            "RAG",
            "Citations",
            "Conversation history",
            "Document permissions",
        ],
        highlights: [
        ]
    },
    {
        id: "ai-resume-analyzer",
        level: 3,
        featured: false,
        title: "AI Resume Analyzer",
        slug: "AI Resume Analyzer",
        description:
            "Upload resume + job description.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python", "FastAPI", "LLM", "PostgreSQL"],
        skills: [
            "AI",
            "LLM"
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "System analyzes:",
            "Skill match",
            "Missing skills",
            "Experience match",
            "Keyword coverage",
            "ATS compatibility",
            "Suggested improvements",
        ],
        highlights: [
        ]
    },
    {
        id: "ai-code-review-assistant",
        level: 3,
        featured: false,
        title: "AI Code Review Assistant",
        slug: "AI Code Review Assistant",
        description:
            "GitHub repository → automated code review.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python", "GitHub API", "LLM"],
        skills: [
            "AI",
            "GitHub API",
            "LLM"
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Analyze:",
            "Bugs",
            "Security issues",
            "Code smells",
            "Performance",
            "Maintainability",
            "Tests",
        ],
        highlights: [
        ]
    },
    {
        id: "ai-sql-analyst",
        level: 3,
        featured: false,
        title: "AI SQL Analyst",
        slug: "AI SQL Analyst",
        description:
            "System generates SQL, validates it and displays the result.<br/>ex: User asks: Show me the top 10 customers by revenue this year.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python", "FastAPI", "PostgreSQL", "LLM"],
        skills: [
            "Python",
            "AI",
            "FastAPI",
            "LLM"
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "System generates SQL",
            "validates it ",
            "and displays the result",
        ],
        highlights: [
            "Added a SQL safety layer so generated queries cannot modify data."
        ]
    },
    {
        id: "ai-customer-support-agent",
        level: 3,
        featured: false,
        title: "AI Customer Support Agent",
        slug: "AI Customer Support Agent",
        description:
            "AI support system with human handoff.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Node.js", "Python", "PostgreSQL"],
        skills: [
            "AI",
            "Agents",
            "LLM"
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "AI answers",
            "Knowledge base",
            "Confidence score",
            "Human escalation",
            "Conversation history",
            "Ticket creation"
        ],
        highlights: [

        ]
    },
    {
        id: "ai-document-intelligence-platform",
        level: 3,
        featured: false,
        title: "AI Document Intelligence Platform",
        slug: "AI Document Intelligence Platform",
        description:
            "Upload invoices/contracts/forms.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python", "FastAPI", "OCR", "LLM", "PostgreSQL"],
        skills: [
            "AI",
            "FastAPI",
            "OCR",
            "LLM"
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Extract:",
            "Name",
            "Date",
            "Amount",
            "Company",
            "Invoice Number",
            "Terms",
        ],
        highlights: [

        ]
    },
    {
        id: "ai-meeting-intelligence-platform",
        level: 3,
        featured: false,
        title: "AI Meeting Intelligence Platform",
        slug: "AI Meeting Intelligence Platform",
        description:
            "Upload meeting audio.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python", "FastAPI", "speech-to-text", "PostgreSQL"],
        skills: [
            "AI",
            "FastAPI",
            "speech-to-text",
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Generate:",
            "Transcript",
            "Summary",
            "Action items",
            "Decisions",
            "Topics",
            "Speaker identification",
        ],
        highlights: [

        ]
    },
    {
        id: "rag-evaluation-platform",
        level: 3,
        featured: false,
        title: "RAG Evaluation Platform",
        slug: "RAG Evaluation Platform",
        description:
            "A platform that evaluates RAG answers.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python", "FastAPI", "PostgreSQL/pgvector"],
        skills: [
            "AI",
            "FastAPI",
            "RAG",
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Measure:",
            "Faithfulness",
            "Relevance",
            "Retrieval quality",
            "Citation correctness",
            "Hallucination rate",
        ],
        highlights: [
            "AI engineering project"
        ]
    },
    {
        id: "ai-agent-workflow-platform",
        level: 3,
        featured: false,
        title: "AI Agent Workflow Platform",
        slug: "AI Agent Workflow Platform",
        description:
            "A simplified AI agent orchestration system",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python", "FastAPI", "PostgreSQL/pgvector"],
        skills: [
            "AI",
            "FastAPI",
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Example:",
            "User Request",
            "↓",
            "Planner Agent",
            "↓",
            "Research Agent",
            "↓",
            "Data Agent",
            "↓",
            "Writer Agent",
            "↓",
            "Reviewer Agent",
        ],
        highlights: [
            "Execution logs and tool calls."
        ]
    },
    {
        id: "ai-personal-knowledge-management-system",
        level: 3,
        featured: false,
        title: "AI Personal Knowledge Management System",
        slug: "AI Personal Knowledge Management System",
        description:
            "Upload any text document file and Then ask questions across your entire knowledge base.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python", "FastAPI", "pgvector"],
        skills: [
            "AI",
            "FastAPI",
            "pgvector"
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Upload:",
            "PDFs",
            "Notes",
            "Articles",
            "Documentation",
        ],
        highlights: [

        ]
    },
    {
        id: "ai-security-log-analyzer",
        level: 3,
        featured: false,
        title: "AI Security Log Analyzer",
        slug: "AI Security Log Analyzer",
        description:
            "Upload application logs and detect suspicious activity.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Python", "FastAPI", "PostgreSQL"],
        skills: [
            "AI",
            "FastAPI",
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Detect:",
            "Brute force",
            "Repeated failed login",
            "Suspicious IP",
            "Abnormal traffic",
            "Permission violations",
        ],
        highlights: [

        ]
    },
    //==========================================================
    // Level: 2: Full Stack Projects 
    //==========================================================
    {
        id: "procurement-management-platform",
        level: 2,
        featured: false,
        title: "Procurement Management Platform",
        slug: "Procurement Management Platform",
        description:
            "Build a purchase-request-to-approval system.",
        technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],

        skills: [],
        liveDemoLink: "",
        github: "",
        features: [
            "Employee",
            "↓",
            "Purchase Request",
            "↓",
            "Manager",
            "↓",
            "Finance",
            "↓",
            "Vendor",
            "↓",
            "Purchase Order",
        ],
        highlights: [
        ]
    },
    {
        id: "inventory-management-system",
        level: 2,
        featured: false,
        title: "Inventory Management System",
        slug: "Inventory Management System",
        description:
            "Inventory Management System",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
        skills: [],
        liveDemoLink: "",
        github: "",
        features: [
            "Stock movement",
            "Warehouses",
            "Suppliers",
            "Purchase orders",
            "Low-stock alerts",
            "Inventory history",
            "Analytics"
        ],
        highlights: [
        ]
    },
    {
        id: "multi-tenant-saas-platform",
        level: 2,
        featured: false,
        title: "Multi-Tenant SaaS Platform",
        slug: "Multi-Tenant SaaS Platform",
        description:
            "A SaaS application where multiple companies use the same platform.",
        technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
        skills: [],
        liveDemoLink: "",
        github: "",
        features: [
            "Organization",
            "Users",
            "Roles",
            "Projects",
            "Billing",
            "Settings",
        ],
        highlights: [
            "Demonstrates tenant isolation."
        ]
    },
    {
        id: "identity and-access-management-platform",
        level: 2,
        featured: false,
        title: "Identity & Access Management Platform",
        slug: "Identity & Access Management Platform",
        description:
            "A simplified Auth0/Okta-style system.",
        technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Redis"],
        skills: [],
        liveDemoLink: "",
        github: "",
        features: [
            "Registration",
            "Login",
            "JWT",
            "Refresh tokens",
            "RBAC",
            "OAuth",
            "Session management",
            "Password reset",
            "Audit logs",
        ],
        highlights: [
        ]
    },
    {
        id: "approval-workflow-engine",
        level: 2,
        featured: false,
        title: "Approval Workflow Engine",
        slug: "Approval Workflow Engine",
        description:
            "A reusable workflow engine.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
        skills: [],
        liveDemoLink: "",
        github: "",
        features: [
            "Users can configure:",
            "Request",
            "↓",
            "Manager Approval",
            "↓",
            "Finance Approval",
            "↓",
            "Completed",
        ],
        highlights: [

        ]
    },
    {
        id: "real-time-collaborative-whiteboard",
        level: 2,
        featured: true,
        title: "Real-Time Collaborative Whiteboard",
        slug: "Real-Time Collaborative Whiteboard",
        description:
            "A modern, multiplayer whiteboard application that enables users to draw, sketch, brainstorm, and collaborate together in real time from anywhere in the world.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "Node.js", "Socket.IO", "MUI", "PostgreSQL"],
        skills: [
            "Frontend Development",
            "UI/UX Design",
            "Socket.IO Development"
        ],
        liveDemoLink: "https://collaborative-whiteboard-nu.vercel.app/",
        //   github: "https://github.com/your-username/reimagine-viewer",
        features: ["Collaborative", "Cursor Presence", "Can draw circles", "Can draw rectangles", "Can draw lines", "Can draw free-hand", "UNDO-REDO", "Clear Board"],
        highlights: [
            "Collaborative"
        ]
    },

    {
        id: "job-application-tracking-system",
        level: 2,
        featured: false,
        title: "Job Application Tracking System",
        slug: "Job Application Tracking System",
        description:
            "Not just another job board, Its a personal/company ATS.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Node.js", "PostgreSQL"],
        skills: [
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Job pipeline",
            "Resume versions",
            "Interview tracking",
            "Recruiter communication",
            "Application analytics",
            "Reminders",
            "Kanban",
        ],
        highlights: [
        ]
    },

    {
        id: "digital-asset-management-system",
        level: 2,
        featured: false,
        title: "Digital Asset Management System",
        slug: "Digital Asset Management System",
        description:
            "A enterprise media management platform.",
        thumbImg: "",
        technologies: ["React", "TypeScript", "MUI", "Node.js", "PostgreSQL", "Object Storage"],
        skills: [
        ],
        liveDemoLink: "",
        github: "",
        features: [
            "Upload",
            "Search",
            "Tags",
            "Metadata",
            "Versioning",
            "Permissions",
            "Preview",
            "Collections"
        ],
        highlights: [
        ]
    },
    //==========================================================
    // Level: 1: Frontend Projects
    //==========================================================
    {
        id: "enterprise-operations-command Center",
        featured: true,
        title: "Enterprise Operations Command Center",
        slug: "Enterprise Operations Command Center",
        description:
            "A highly interactive enterprise dashboard for monitoring multiple business operations in real time. Include KPI cards, drill-down analytics, filters, saved views, configurable widgets, alerts and role-based dashboards.",
        level: 1,
        technologies: ["React", "TypeScript", "MUI", "Zustand", "TanStack Query", "Recharts", "Node.js", "PostgreSQL", "WebSocket/Socket.IO"],
        skills: [
        ],
        liveDemoLink: "",
        github: "",
        highlights: [
            "Advanced React architecture", "state management", "data visualization", "performance and real-time UI"
        ]


    },
    {
        id: "advanced-data-grid",
        featured: false,
        title: "Advanced Data Grid / Spreadsheet Application",
        slug: "Advanced Data Grid / Spreadsheet Application",
        description:
            "Build a mini Excel-like web application supporting large datasets.",
        level: 1,
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
        id: "enterprise-workflow-builder",
        featured: false,
        title: "Enterprise Workflow Builder",
        slug: "Enterprise Workflow Builder",
        description:
            "Visual drag-and-drop workflow builder similar to simplified Zapier/Jira automation.",
        level: 1,
        technologies: ["React", "TypeScript", "React Flow", "Zustand", "Node.js", "PostgreSQL"],
        skills: [

        ],
        liveDemoLink: "",
        github: "",
        features: [],
        highlights: [
            "Complex UI architecture and business logic."
        ]
    },
    {
        id: "design-system-playground",
        featured: false,
        title: "Design System Playground",
        slug: "Design System Playground",
        description:
            "Build your own enterprise design system with reusable components, themes and accessibility testing.",
        level: 1,
        technologies: ["React", "TypeScript", "MUI", "Storybook", "Vitest", "Playwright"],
        skills: [

        ],
        liveDemoLink: "",
        github: "",
        features: ["Buttons",
            "Forms",
            "Tables",
            "Dialogs",
            "Charts",
            "Data grids",
            "Dark/light themes",
            "Accessibility",
            "Responsive layouts"],
        highlights: [
            "Senior frontend engineering rather than just page building."
        ]
    },
    {
        id: "performance-monitoring-web-app",
        featured: false,
        title: "Performance Monitoring Web App",
        slug: "Performance Monitoring Web App",
        description:
            "A frontend application that analyzes website performance and displays Core Web Vitals and performance metrics.",
        level: 1,
        technologies: ["React", "TypeScript", "Lighthouse APIs", "Node.js", "PostgreSQL", "Recharts"],

        skills: [

        ],
        liveDemoLink: "",
        github: "",
        features: ["LCP",
            "CLS",
            "INP",
            "TTFB",
            "Performance history",
            "URL comparison",
            "Performance score",],
        highlights: [

        ]
    },
    {
        id: "accessibility-audit-platform",
        featured: false,
        title: "Accessibility Audit Platform",
        slug: "Accessibility Audit Platform",
        description:
            "User enters a website URL and receives an accessibility report.",
        level: 1,
        technologies: ["React", "TypeScript", "Node.js", "Playwright", "axe-core", "PostgreSQL"],

        skills: [

        ],
        liveDemoLink: "",
        github: "",
        features: ["WCAG violations",
            "Severity classification",
            "Element locator",
            "Suggested fixes",
            "Historical reports"],


        highlights: [
            "Accessibility + automation + backend engineering."
        ]
    },
    {
        id: "developer-documentation-platform",
        featured: false,
        title: "Developer Documentation Platform",
        slug: "Developer Documentation Platform",
        description:
            "Build a modern documentation platform similar to an internal engineering knowledge portal.",
        technologies: ["React/Next.js", "TypeScript", "Node.js", "PostgreSQL", "Markdown/MDX"],
        skills: [],
        liveDemoLink: "",
        github: "",
        features: ["Search",
            "Versioning",
            "Table of contents",
            "Code blocks",
            "Authentication",
            "Permissions",
            "Comments",
            "Document history",],
        highlights: [
        ]
    },
    {
        id: "real-time-incident-management-dashboard",
        featured: false,
        title: "Real-Time Incident Management Dashboard",
        slug: "Real-Time Incident Management Dashboard",
        description:
            "A dashboard for engineering teams to monitor production incidents.",
        level: 1,
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.IO"],
        skills: [],
        liveDemoLink: "",
        github: "",
        features: ["Incident timeline",
            "Severity",
            "On-call engineer",
            "Status",
            "Live updates",
            "Activity feed",
            "Incident analytics",],
        highlights: [
        ]
    },
    {
        id: "advanced-kanban-project-management-system",
        featured: false,
        title: "Advanced Kanban Project Management System",
        slug: "Advanced Kanban Project Management System",
        description:
            "A sophisticated project management application rather than a basic Trello clone.",
        level: 1,
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
        skills: [],
        liveDemoLink: "",
        github: "",

        features: ["Drag/drop",
            "Sprint planning",
            "Dependencies",
            "Workflows",
            "Permissions",
            "Activity timeline",
            "Notifications",
            "Search"],
        highlights: [
        ]
    },
    {
        id: "employee-service-management-platform",
        level: 2,
        featured: false,
        title: "Employee Service Management Platform",
        slug: "Employee Service Management Platform",
        description:
            "Build an internal enterprise portal where employees can submit requests.",
        technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Redis"],
        skills: [],
        liveDemoLink: "",
        github: "",
        features: ["RBAC",
            "Approval workflows",
            "Notifications",
            "Audit logs",
            "SLA tracking",
            "Admin dashboard"],
        highlights: [
        ]
    },
    {
        id: "contract-lifecycle-management-system",
        level: 2,
        featured: false,
        title: "Contract Lifecycle Management System",
        slug: "Contract Lifecycle Management System",
        description:
            "Create, review, approve, renew and track business contracts.",
        technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Elasticsearch"],
        skills: [],
        liveDemoLink: "",
        github: "",
        features: ["Contract upload",
            "Versioning",
            "Approval workflow",
            "Expiry notifications",
            "Search",
            "Audit trail",
            "Role permissions",
            "Dashboard",],
        highlights: [
        ]
    },
    {
        id: "customer-support-ticketing-platform",
        level: 2,
        featured: false,
        title: "Customer Support / Ticketing Platform",
        slug: "Customer Support / Ticketing Platform",
        description:
            "Build a Zendesk-like application.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
        skills: [],
        liveDemoLink: "",
        github: "",
        features: [
            "Ticket management",
            "SLA",
            "Assignment",
            "Priority",
            "Internal notes",
            "Customer communication",
            "Agent dashboard",
            "Real-time updates"
        ],
        highlights: [
        ]
    },
    {
        id: "api-management-portal",
        level: 2,
        featured: false,
        title: "API Management Portal",
        slug: "API Management Portal",
        description:
            "Build a mini API gateway management platform.",
        technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Redis"],

        skills: [],
        liveDemoLink: "",
        github: "",
        features: [
            "API registration",
            "API keys",
            "Rate limits",
            "Usage analytics",
            "API versions",
            "Developer portal",
        ],
        highlights: [
        ]
    },
    {
        id: "expense-management-system",
        level: 2,
        featured: false,
        title: "Expense Management System",
        slug: "Expense Management System",
        description:
            "A business expense management platform.",
        technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],

        skills: [],
        liveDemoLink: "",
        github: "",
        features: [
            "Expense submission",
            "Receipt upload",
            "Approval workflow",
            "Expense categories",
            "Budget limits",
            "Reports",
            "Role-based approval",
        ],
        highlights: [
        ]
    },


    //==========================================================
    {
        id: 1,
        title: "Coming Soon JIRA Kind of Project",
        slug: "Coming Soon JIRA Kind of Project",
        description:
            "Kind of Project",
        featured: false,
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
        id: 3,
        // thumbImg: "https://res.cloudinary.com/dnwrsbors/image/upload/v1777490962/masonry-gallery-mui_rryhdr.png",

        title: "Image Gallery - Masonry Layout",
        description:
            "A responsive and visually dynamic image gallery built using a masonry layout to optimize space utilization and enhance user experience. The application intelligently arranges images of varying heights into seamless columns, eliminating gaps and creating a Pinterest-style layout. The project focuses on performance, responsiveness, and smooth user interactions while handling real-world challenges like asynchronous image loading, layout shifts, and scalability.",
        featured: false,
        technologies: ["React", "TypeScript", "VITE"],
        skills: [
            "UI Integration"
        ],
        liveDemoLink: "https://masonry-mui.vercel.app/",
        //   github: "https://github.com/your-username/clip-cleaner",
        highlights: [
            "Masonry Layout",
            "Image Gallery",
            "Unsplash API",
            "Search",
            "Image Downloadable"
        ]

    },
    {
        id: 5,
        title: "Clip Cleaner (AI Video Processing Tool)",
        description:
            "A smart video processing tool that detects and removes idle frames, blank scenes, and erasing actions from raw art videos, producing clean and usable clips.",
        featured: false,
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
        featured: false,
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
        featured: false,
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
        featured: false,
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
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Chen",
    title: "IT Student / Software Developer / UI UX Enthusiast",
    shortTitle: "Software Developer & UI/UX Designer",
    tagline: "I don't just build software. I design digital experiences.",
    statement: "Crafting resilient full-stack architectures and intuitive interfaces where clean code meets modern aesthetics.",
    email: "alex.chen.dev@example.com",
    phone: "+65 8921 4567",
    location: "Singapore / Global Remote",
    portfolioUrl: "https://alexchen.dev",
    github: "https://github.com/alexchendev",
    linkedin: "https://linkedin.com/in/alexchendev",
    twitter: "https://x.com/alexchen_dev",
    availability: "Available for Software Engineering & Full-Stack Roles",
    status: "available_for_new_projects"
  },
  summary: "Driven Information Technology & Software Engineering student with proven industry internship experience delivering production web applications, microservices, and design systems. Skilled across TypeScript, React, Next.js, Node.js, and PostgreSQL with a strong passion for human-centered UI/UX and resilient distributed software.",
  stats: [
    {
      id: "projects",
      label: "Projects Completed",
      value: 24,
      suffix: "+",
      description: "Full-stack apps, open source tools, and production client solutions"
    },
    {
      id: "tech",
      label: "Technologies Used",
      value: 18,
      suffix: "+",
      description: "Languages, modern frameworks, cloud databases, and devops tooling"
    },
    {
      id: "years",
      label: "Years Building",
      value: 4,
      suffix: "+",
      description: "Dedicated software engineering, computer science & UI/UX practice"
    },
    {
      id: "uiux",
      label: "UI/UX Projects",
      value: 12,
      suffix: "+",
      description: "Figma design systems, interactive prototypes & mobile wireframes"
    }
  ],
  skills: {
    programming: [
      { name: "JavaScript", level: 95, category: "programming", icon: "Code2", experienceYears: 4, highlight: "ESNext, Async/Await, Web APIs, DOM engine" },
      { name: "TypeScript", level: 92, category: "programming", icon: "FileCode", experienceYears: 3, highlight: "Strict typing, Generics, Utility types, AST" },
      { name: "Python", level: 85, category: "programming", icon: "Terminal", experienceYears: 3, highlight: "FastAPI, Data analysis, Scripting, AI integrations" },
      { name: "C++", level: 78, category: "programming", icon: "Cpu", experienceYears: 2, highlight: "Data structures, Memory management, Algorithms" },
      { name: "PHP", level: 75, category: "programming", icon: "Server", experienceYears: 2, highlight: "MVC patterns, Laravel fundamentals, REST endpoints" }
    ],
    frontend: [
      { name: "React", level: 94, category: "frontend", icon: "Atom", experienceYears: 3, highlight: "React 19, Custom Hooks, Context, Server Components" },
      { name: "Next.js", level: 90, category: "frontend", icon: "Layers", experienceYears: 2, highlight: "App Router, SSR, SSG, Route Handlers, Turbopack" },
      { name: "Tailwind CSS", level: 96, category: "frontend", icon: "Palette", experienceYears: 3, highlight: "Tailwind v4, Design tokens, Responsive layouts" },
      { name: "HTML5 & Semantic Web", level: 98, category: "frontend", icon: "Globe", experienceYears: 4, highlight: "Accessibility (WCAG AA), SEO, Microdata" },
      { name: "CSS3 & Animations", level: 92, category: "frontend", icon: "Sparkles", experienceYears: 4, highlight: "Framer Motion, CSS Grid, Flexbox, Keyframes" }
    ],
    backend: [
      { name: "Node.js", level: 88, category: "backend", icon: "Cpu", experienceYears: 3, highlight: "Express, Event loop, Streams, Middleware" },
      { name: "PostgreSQL", level: 86, category: "backend", icon: "Database", experienceYears: 2, highlight: "Complex joins, Indexing, Triggers, Drizzle/Prisma" },
      { name: "Supabase", level: 88, category: "backend", icon: "Flame", experienceYears: 2, highlight: "Auth, Realtime subscriptions, Row Level Security" },
      { name: "REST APIs", level: 94, category: "backend", icon: "Network", experienceYears: 3, highlight: "Contract design, OpenAPI spec, JWT, Rate limiting" }
    ],
    tools: [
      { name: "Git & GitHub", level: 92, category: "tools", icon: "GitBranch", experienceYears: 4, highlight: "Feature branching, CI/CD Actions, Code reviews" },
      { name: "Figma", level: 90, category: "tools", icon: "Figma", experienceYears: 3, highlight: "Auto-layout, Components, Interactive prototyping" },
      { name: "VS Code", level: 95, category: "tools", icon: "TerminalSquare", experienceYears: 4, highlight: "Workspace tuning, Debugging, Custom snippets" },
      { name: "Vercel", level: 90, category: "tools", icon: "CloudUpload", experienceYears: 2, highlight: "Edge functions, Preview deployments, Analytics" }
    ]
  },
  projects: [
    {
      id: "tripify",
      title: "Tripify — AI Travel Planning Application",
      tagline: "Autonomous multi-city itinerary generation with interactive geographic route visualization.",
      description: "A smart itinerary planner that curates custom multi-day travel schedules based on budget, transit preferences, and travel pace, featuring real-time map integration.",
      fullOverview: "Tripify solves the cognitive overload of vacation planning. It connects LLM reasoning with OpenStreetMap and geolocation APIs to calculate realistic transit buffers, generate personalized dining and cultural recommendations, and allow drag-and-drop schedule restructuring.",
      category: "AI & Systems",
      role: "Lead Full-Stack Developer & UI Designer",
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Gemini API", "Leaflet"],
      features: [
        "Dynamic multi-day schedule generator tailored to pace and budget",
        "Interactive route map plotting walking and transit routes with waypoints",
        "Collaborative sharing via unique tokenized itinerary URLs",
        "Offline caching for mobile exploration abroad"
      ],
      architectureNotes: "Server-side streaming responses with Edge runtime; PostgreSQL JSONB schema for nested schedule nodes; client-side optimistic drag-and-drop state.",
      githubUrl: "https://github.com/alexchendev/tripify-ai",
      liveUrl: "https://tripify.alexchen.dev",
      stats: [
        { label: "Generation Speed", value: "<1.8s" },
        { label: "Active Test Users", value: "850+" },
        { label: "Lighthouse Score", value: "98/100" }
      ],
      accentColor: "#10b981"
    },
    {
      id: "cinepass",
      title: "CinePass — Real-Time Movie Booking System",
      tagline: "High-concurrency cinema reservation engine with synchronized multi-user seat picking.",
      description: "An interactive cinema booking platform featuring SVG seat maps, atomic lock reservation holding, real-time WebSocket seat status updates, and digital ticket issuance.",
      fullOverview: "Built to simulate high-demand ticket sales, CinePass prevents double-booking through Redis-backed mutex locks and WebSocket broadcast channels. Users select seats on an interactive cinema auditorium layout with responsive audio-visual feedback and QR code ticket generation.",
      category: "Full-Stack",
      role: "Full-Stack Engineer",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "WebSockets", "Tailwind CSS"],
      features: [
        "Zero-latency multi-client seat occupancy sync via WebSockets",
        "Interactive SVG auditorium map with accessible keyboard navigation",
        "Atomic 10-minute temporary seat checkout reservation lock",
        "Automated PDF ticket and wallet pass generation"
      ],
      architectureNotes: "Stateful WebSocket server paired with PostgreSQL transactions with SELECT FOR UPDATE to guarantee atomic seat isolation during flash ticket drops.",
      githubUrl: "https://github.com/alexchendev/cinepass-booking",
      liveUrl: "https://cinepass.alexchen.dev",
      stats: [
        { label: "Max Concurrency", value: "1,200 req/s" },
        { label: "Sync Latency", value: "<45ms" },
        { label: "Seat Lock Accuracy", value: "100%" }
      ],
      accentColor: "#38bdf8"
    },
    {
      id: "omni-invoice",
      title: "OmniInvoice — E-Invoice Management System",
      tagline: "Enterprise invoice lifecycle tracker compliant with modern digital tax standards.",
      description: "A centralized platform for creating, calculating, reconciling, and exporting legally compliant e-invoices with multi-currency support and automated PDF reports.",
      fullOverview: "OmniInvoice automates corporate billing workflows. It features customizable tax calculation engines (GST/VAT), automated recurring billing triggers, customer ledger reconciliation, and instant one-click PDF generation with cryptographic validation hashes.",
      category: "Web App",
      role: "Frontend & Backend Engineer",
      technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
      features: [
        "Dynamic line item ledger with multi-tiered tax calculations and discounts",
        "Compliant PDF invoice rendering with printable vector templates",
        "Client directory with transaction history and payment status tracking",
        "Export to CSV, JSON, and standard Peppol e-invoicing formats"
      ],
      architectureNotes: "Strict decimal precision currency math in TypeScript; automated PDF rendering worker thread; RBAC for accountant vs. client roles.",
      githubUrl: "https://github.com/alexchendev/omni-invoice-system",
      liveUrl: "https://omni-invoice.alexchen.dev",
      stats: [
        { label: "Invoices Processed", value: "12,000+" },
        { label: "Export Speed", value: "250ms/doc" },
        { label: "Tax Calculation Accuracy", value: "99.99%" }
      ],
      accentColor: "#a855f7"
    },
    {
      id: "auracraft",
      title: "AuraCraft — Developer Blog & Digital Garden",
      tagline: "Editorial publication platform featuring interactive code runners and MDX content.",
      description: "A content-dense developer blog built with typography precision, interactive live code playgrounds, dark mode ergonomics, and tag-filtered knowledge graphs.",
      fullOverview: "Designed as an intellectual playground, AuraCraft offers a frictionless reading experience. It includes interactive code playgrounds, animated syntax highlighting, reading time estimators, and dynamic OpenGraph card generation.",
      category: "Frontend",
      role: "Solo Creator & Designer",
      technologies: ["React", "Next.js", "MDX", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Embedded live React components and sandboxed code execution within articles",
        "Custom typographic scale optimized for 70ch reading comfort",
        "Bi-directional linking between programming concepts and notes",
        "Zero-CLS layout performance with static generation"
      ],
      architectureNotes: "Next.js Static Site Generation with AST-based MDX transformation; Shiki server-side syntax highlighting.",
      githubUrl: "https://github.com/alexchendev/auracraft-blog",
      liveUrl: "https://auracraft.alexchen.dev",
      stats: [
        { label: "Monthly Readers", value: "3,400+" },
        { label: "Page Load Time", value: "0.4s" },
        { label: "Perfect Lighthouse", value: "100/100" }
      ],
      accentColor: "#f59e0b"
    },
    {
      id: "devpulse",
      title: "DevPulse — Campus Hackathon Collaboration Portal",
      tagline: "Unified team formation, mentor scheduling, and project submission platform for collegiate tech events.",
      description: "Built for university hackathons to streamline team matching based on complementary skill tags, mentor office-hour bookings, and peer judging.",
      fullOverview: "DevPulse powered our annual university hackathon of 450 participants. The platform eliminated manual spreadsheet tracking by pairing participants with complementary skills (e.g. Frontend + ML) and automating mentor queue alerts.",
      category: "Full-Stack",
      role: "Technical Lead",
      technologies: ["React", "PHP", "Node.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      features: [
        "Smart team matchmaking algorithm based on skill tags and project tracks",
        "Live mentor dispatch queue with real-time room notifications",
        "Interactive project showcase gallery with peer upvoting",
        "Organizer administrative dashboard with real-time analytics"
      ],
      architectureNotes: "Hybrid REST service combining legacy university PHP auth with modern Node.js event broker; role-based dashboard views.",
      githubUrl: "https://github.com/alexchendev/devpulse-hackathon",
      liveUrl: "https://devpulse.alexchen.dev",
      stats: [
        { label: "Collegiate Attendees", value: "450+" },
        { label: "Teams Formed", value: "72 Teams" },
        { label: "Uptime During Event", value: "100%" }
      ],
      accentColor: "#ec4899"
    }
  ],
  experience: [
    {
      id: "cloudpulse",
      role: "Software Engineering Intern",
      company: "CloudPulse Labs",
      companyUrl: "https://cloudpulse.io",
      location: "Singapore",
      period: "May 2024 – Dec 2024",
      type: "Internship",
      description: [
        "Engineered customer-facing dashboard widgets in React & TypeScript, reducing initial dashboard load time by 32% via code splitting and memoization.",
        "Constructed robust backend REST API endpoints using Node.js and PostgreSQL to support high-throughput telemetry data queries.",
        "Collaborated closely with product designers in Figma to build and standardize 14 reusable design system components in Tailwind CSS.",
        "Authored comprehensive end-to-end and integration test suites, increasing automated test coverage from 64% to 88%."
      ],
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Jest", "Git"]
    },
    {
      id: "ta-uni",
      role: "Undergraduate Teaching Assistant",
      company: "School of Computing & IT, National University",
      location: "Singapore",
      period: "Jan 2024 – May 2024",
      type: "University",
      description: [
        "Mentored 60+ junior students in Data Structures & Algorithms (C++) and Modern Web Application Development (JavaScript / React).",
        "Conducted weekly hands-on laboratory sessions, graded programming assignments, and provided architectural feedback on term projects.",
        "Curated instructional interactive starter templates for REST API design and relational database schemas."
      ],
      technologies: ["C++", "JavaScript", "React", "SQL", "Git", "Linux"]
    },
    {
      id: "club-lead",
      role: "Lead Frontend Engineer & Hackathon Director",
      company: "University Student Computing Society",
      location: "Singapore",
      period: "Aug 2023 – Present",
      type: "Leadership",
      description: [
        "Organized HackAsia 2024, spearheading the design and deployment of the registration portal utilized by 450+ participants across 8 universities.",
        "Led a core team of 6 student developers in building internal open-source tools, workshops, and weekly coding clinics.",
        "Conducted 4 technical seminars on modern TypeScript patterns, state management, and UI/UX design tokens."
      ],
      technologies: ["React", "Next.js", "TypeScript", "Figma", "Tailwind CSS", "Vercel"]
    },
    {
      id: "milestone-hack",
      role: "1st Place Grand Champion",
      company: "HackAsia Annual Innovation Hackathon",
      location: "Singapore",
      period: "March 2024",
      type: "Milestone",
      description: [
        "Awarded First Prize out of 90 competing teams for creating 'ResQ-AI', an emergency disaster supply allocation system using graph algorithms and mobile PWA interfaces.",
        "Architected real-time geospatial supply maps with offline sync and SMS fallback for first responders."
      ],
      technologies: ["TypeScript", "React", "FastAPI", "Python", "Leaflet"]
    }
  ],
  education: [
    {
      id: "bachelor-it",
      degree: "Bachelor of Information Technology (Honours)",
      institution: "National University of Technology",
      period: "2022 – 2026 (Expected Graduation)",
      gpa: "3.92 / 4.00 (High Distinction / Dean's List)",
      details: [
        "Specialization in Software Engineering and Distributed Web Systems",
        "Dean's Honours List for academic excellence across semesters 1–4",
        "President, Computing Student Society (2024)"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Design & C++",
        "Web Application Engineering",
        "Relational Database Systems",
        "Distributed Systems & Cloud Computing",
        "Human-Computer Interaction (HCI)",
        "Software Testing & Quality Assurance"
      ]
    }
  ],
  uiUxWork: [
    {
      id: "fintrack",
      title: "FinTrack Mobile Banking & Wealth UI",
      subtitle: "Figma Design System & High-Fidelity Prototype",
      type: "Mobile",
      summary: "Modern personal finance application with dynamic cashflow graphs, biometric authorization states, and an ultra-clean modular dashboard design.",
      figmaUrl: "https://figma.com/@alexchendev/fintrack-case-study",
      tags: ["Figma", "Design Tokens", "Micro-Interactions", "Mobile UX"],
      metrics: "Reduced checkout cognitive steps from 6 to 3 in usability testing",
      before: {
        title: "Legacy Banking Dashboard",
        points: ["Cluttered table view without hierarchy", "Hidden transfer actions behind 3 menus", "Inconsistent 12px grey fonts"]
      },
      after: {
        title: "FinTrack Redesign",
        points: ["Thumb-zone bottom navigation", "Quick 1-tap card freeze & money transfer", "High-contrast WCAG AA accessible typography"]
      }
    },
    {
      id: "cloudscale-ds",
      title: "CloudScale Enterprise Design System",
      subtitle: "Multi-Platform Component Library & Tokens",
      type: "Design System",
      summary: "A comprehensive design token architecture defining typography scales, color primitives (light/dark mode), button variants, input states, and accessible modal patterns.",
      figmaUrl: "https://figma.com/@alexchendev/cloudscale-tokens",
      tags: ["Design System", "Figma Components", "Dark Mode", "Auto-Layout"],
      metrics: "Over 40+ production components synchronized with Tailwind CSS classes",
      before: {
        title: "Disjointed Style Guide",
        points: ["Hardcoded hex values across projects", "No interactive Figma variant states", "Misaligned padding scales"]
      },
      after: {
        title: "CloudScale System",
        points: ["Mathematical 4px/8px spatial rhythm", "Strict semantic tokens (surface-elevated, text-primary)", "100% component-to-code naming parity"]
      }
    },
    {
      id: "zenspace",
      title: "ZenSpace Mindful Digital Experience",
      subtitle: "Editorial Web Interface & Micro-Interactions",
      type: "Web Design",
      summary: "An editorial mindfulness audio web application with smooth ambient transitions, serene visual pacing, and tactile audio scrubbers.",
      figmaUrl: "https://figma.com/@alexchendev/zenspace",
      tags: ["Editorial Web", "Interactive Prototyping", "Aesthetics", "Motion"],
      metrics: "Featured in Student Design Showcase 2024",
      before: {
        title: "Conventional Wellness Page",
        points: ["Aggressive promotional modals", "Standard bootstrap card layouts", "Static audio players"]
      },
      after: {
        title: "ZenSpace Experience",
        points: ["Minimalist breathing canvas", "Gentle fluid typography with Space Grotesk", "Organic soundwave scrubber"]
      }
    }
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      credentialId: "AWS-CCP-984210"
    },
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Coursera)",
      year: "2023",
      credentialId: "META-FED-55102"
    },
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      year: "2024",
      credentialId: "POSTMAN-STU-33291"
    }
  ],
  awards: [
    {
      title: "1st Place Grand Winner",
      competition: "HackAsia 2024 (Regional Hackathon)",
      year: "2024",
      description: "Recognized among 90 university teams for outstanding technical architecture and UI/UX design."
    },
    {
      title: "Dean's Honours List",
      competition: "National University of Technology",
      year: "2022, 2023, 2024",
      description: "Awarded to top 5% of students in the School of Computing for academic excellence."
    },
    {
      title: "Best UI/UX Design Award",
      competition: "Collegiate Web Engineering Showcase",
      year: "2023",
      description: "Judged by industry design leads for exceptional micro-interactions and accessibility."
    }
  ],
  languages: [
    { language: "English", proficiency: "Native / Bilingual" },
    { language: "Mandarin Chinese", proficiency: "Professional Working" }
  ],
  interests: [
    "Creative Computing & Canvas Shaders",
    "Distributed Systems Architecture",
    "UI/UX Typography & Design Systems",
    "Open Source Tooling & Developer Experience",
    "Bouldering & Analog Photography"
  ]
};

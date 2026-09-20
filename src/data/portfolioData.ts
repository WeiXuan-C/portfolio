import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Chong Wei Xuan",
    chineseName: "钟玮萱",
    title: "Software Developer & Web App Engineer",
    shortTitle: "Web App & Full-Stack Developer",
    tagline: "I don't just build software. I design digital experiences.",
    statement: "Undergraduate in Software Engineering at Multimedia University (MMU) building resilient web applications, collaborative multi-agent AI workspaces, and clean full-stack architectures.",
    email: "weixuan.chong@gmail.com",
    phone: "+60 11-6520 0275",
    whatsapp: "01165200275",
    location: "Melaka & Cyberjaya, Malaysia",
    portfolioUrl: "https://weixuan-c.github.io",
    github: "https://github.com/WeiXuan-C",
    linkedin: "https://www.linkedin.com/in/wei-xuan-3a0321326",
    twitter: "https://github.com/WeiXuan-C",
    avatar: "https://avatars.githubusercontent.com/u/130114186?v=4",
    availability: "Undergraduate @ MMU • Open to Tech Collaboration & Hackathons",
    status: "student_and_collaborator"
  },
  summary: "Passionate Software Developer and Computer Science undergraduate at Multimedia University (Diploma CGPA: 3.93 High Distinction). Hackathon champion (UNIMAS 8.0 Winner for Pavra, CodeNection 2025 Winner for Studify) and contributor to collaborative AI workspaces (Tripify: LangGraph multi-agent planning). Experienced across Next.js 15, React 19, Flutter, TypeScript, Supabase, PostgreSQL, and multi-agent AI systems, alongside hands-on QA testing and technical documentation from an engineering internship at Moabi PLT.",
  stats: [
    {
      id: "projects",
      label: "Engineered Projects",
      value: 12,
      suffix: "+",
      description: "AI mobile applications, full-stack platforms, and enterprise solutions"
    },
    {
      id: "tech",
      label: "Technologies Mastered",
      value: 20,
      suffix: "+",
      description: "Dart/Flutter, Next.js, React, Supabase, PostgreSQL, AI APIs & Docker"
    },
    {
      id: "cgpa",
      label: "Diploma Academic CGPA",
      value: 3.93,
      suffix: "",
      description: "High Distinction standing at Multimedia University (Faculty of IT)"
    },
    {
      id: "awards",
      label: "Hackathon Wins",
      value: 2,
      suffix: "x",
      description: "Champion Winner at UNIMAS 8.0 (Pavra) and CodeNection 2025 (Studify)"
    }
  ],
  skills: {
    programming: [
      { name: "TypeScript", level: 93, category: "programming", icon: "FileCode", experienceYears: 2, highlight: "Strict types, Generics, Next.js 15, Async pipelines" },
      { name: "JavaScript", level: 95, category: "programming", icon: "Code2", experienceYears: 3, highlight: "ESNext, DOM, Node.js, Web APIs" },
      { name: "Dart", level: 90, category: "programming", icon: "Smartphone", experienceYears: 2, highlight: "Flutter, Provider state, Serverless architecture" },
      { name: "Python", level: 86, category: "programming", icon: "Terminal", experienceYears: 2, highlight: "LangChain, HuggingFace embeddings, AI scripts" },
      { name: "C & C++", level: 82, category: "programming", icon: "Cpu", experienceYears: 2, highlight: "Data structures, Memory efficiency, Algorithms" },
      { name: "Java", level: 80, category: "programming", icon: "Server", experienceYears: 2, highlight: "OOP design, Clean architecture, Academic foundation" },
      { name: "PHP", level: 76, category: "programming", icon: "Layers", experienceYears: 1, highlight: "Backend scripts, phpMyAdmin, MySQL integration" }
    ],
    frontend: [
      { name: "React & Next.js", level: 94, category: "frontend", icon: "Atom", experienceYears: 2, highlight: "Next.js 15 App Router, React 19, Server Components" },
      { name: "Flutter (Mobile)", level: 90, category: "frontend", icon: "Smartphone", experienceYears: 2, highlight: "Cross-platform Android & iOS, Google Maps, OneSignal" },
      { name: "Tailwind CSS", level: 95, category: "frontend", icon: "Palette", experienceYears: 2, highlight: "Responsive design, Modern dark modes, Glassmorphism" },
      { name: "Redux Toolkit", level: 88, category: "frontend", icon: "Layers", experienceYears: 2, highlight: "Global state management, Slices, Async thunks" },
      { name: "Figma & UI/UX", level: 90, category: "frontend", icon: "Figma", experienceYears: 2, highlight: "Wireframing, High-fidelity prototypes, Design systems" }
    ],
    backend: [
      { name: "PostgreSQL", level: 92, category: "backend", icon: "Database", experienceYears: 2, highlight: "Schema design, RLS policies, Vector embeddings, Indexes" },
      { name: "Supabase", level: 94, category: "backend", icon: "Flame", experienceYears: 2, highlight: "Serverless DB, Email OTP Auth, Storage, Edge functions" },
      { name: "Redis", level: 85, category: "backend", icon: "Database", experienceYears: 1, highlight: "Upstash Redis, Cache invalidation, High-speed query queues" },
      { name: "Firebase & OneSignal", level: 88, category: "backend", icon: "Network", experienceYears: 2, highlight: "Push notification pipelines, Real-time driver alerts" },
      { name: "MySQL & SQLite", level: 88, category: "backend", icon: "Server", experienceYears: 2, highlight: "Relational queries, Foreign keys, Transactions" }
    ],
    tools: [
      { name: "Git & GitHub", level: 94, category: "tools", icon: "GitBranch", experienceYears: 3, highlight: "Version control, PRs, Issue tracking, CI/CD" },
      { name: "Stripe", level: 86, category: "tools", icon: "CreditCard", experienceYears: 1, highlight: "Checkout sessions, Stripe Connect, Webhook events" },
      { name: "HuggingFace & LangChain", level: 87, category: "tools", icon: "Sparkles", experienceYears: 1, highlight: "E5-Small & BGE-M3 RAG, Whisper video transcription" },
      { name: "Google Maps API", level: 90, category: "tools", icon: "MapPin", experienceYears: 1, highlight: "Geolocation, Hazard coordinates, Custom markers, Routing" },
      { name: "Stripo", level: 88, category: "tools", icon: "Mail", experienceYears: 1, highlight: "Production email design & workflow automation @ Moabi PLT" },
      { name: "Vercel", level: 92, category: "tools", icon: "CloudUpload", experienceYears: 2, highlight: "Serverless web deployment, Environment variables, Analytics" }
    ]
  },
  projects: [
    {
      id: "tripify",
      title: "Tripify — Collaborative AI Travel Planning Workspace",
      tagline: "Map-first collaborative group itinerary workspace powered by LangGraph multi-agent orchestration.",
      description: "A collaborative web application featuring a flexible pinboard workspace, Google Maps routing, multi-agent AI (Researcher / Planner / Critic), proposal diff voting, and Supabase Realtime synchronization.",
      fullOverview: "Tripify solves group trip coordination by replacing fragmented chats and spreadsheets with a single, live map-oriented workspace. Built by the Studify 3-person team, Tripify integrates LangGraph multi-agent orchestration where specialized agents (Researcher, Planner, Critic) generate structured itinerary proposals with Value-for-Money reasoning. When real-world disruptions occur (weather, flight delays), the dynamic replanning engine recalculates only affected segments without wiping user edits. Backed by Supabase Postgres, Auth, and Realtime for live voting.",
      category: "Web App",
      role: "Backend, Data Architecture & Integrations",
      technologies: ["Next.js 15", "React 19", "TypeScript", "LangGraph", "Supabase", "PostgreSQL", "Supabase Realtime", "Google Maps Platform", "OpenRouter", "Tailwind CSS", "shadcn/ui", "next-intl", "Vercel"],
      features: [
        "Map-first interactive itinerary pinboard workspace with Google Maps Places & Route computation",
        "LangGraph multi-agent decision architecture with typed state for Researcher, Planner, and Critic agents",
        "Proposal diff & democratic group voting system to resolve conflicting schedules and budgets",
        "Dynamic partial replanning triggered by real-time disruptions (weather changes, simulated flight delays)",
        "Value-for-Money reasoning explaining trade-offs rather than simplistic price sorting",
        "Supabase Realtime sync for live collaborative voting, trip changes, and smart alert notifications"
      ],
      architectureNotes: "Next.js 15 App Router with Server Actions; Supabase Auth, Postgres, and Realtime; LangGraph agent state graph; Google Maps compute routes & places API; deployed on Vercel.",
      githubUrl: "https://github.com/baifan1366/tripify",
      liveUrl: "https://tripify-agent.vercel.app",
      videoUrl: "https://youtu.be/nOgfiaMGdHY",
      stats: [
        { label: "Live Prototype", value: "Vercel Deployed" },
        { label: "Multi-Agent", value: "LangGraph Loop" },
        { label: "My Role", value: "Backend & Data" }
      ],
      accentColor: "#38bdf8"
    },
    {
      id: "pavra",
      title: "Pavra — AI-Powered Road Safety Mobile Application",
      tagline: "The Smarter Roads, The Safer Journeys. UNIMAS 8.0 (2025) National Winner.",
      description: "A community-driven road safety mobile app that uses Google Gemma 3 4B vision AI to detect road hazards, tags them on interactive Google Maps, and broadcasts proximity alerts.",
      fullOverview: "Pavra tackles road hazards (potholes, cracks, surface unevenness) through a vision-AI and crowdsourced architecture. Built as a serverless Flutter application backed by Supabase, it runs on-device / API image inference with Google Gemma 3 4B VLM to classify hazard severity. GPS coordinates are mapped in real time, and nearby drivers receive push notifications via OneSignal & Firebase with adjustable alert radii.",
      category: "AI & Systems",
      role: "Team Leader (2-Member Team)",
      technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Google Gemma 3 4B", "Google Maps Platform", "OneSignal", "Firebase", "OpenRouter"],
      features: [
        "AI road damage detection & severity classification with Google Gemma 3 4B VLM",
        "GPS hazard tagging & live interactive map visualization with Google Maps API",
        "Real-time hazard alert push notifications with adjustable proximity radius (OneSignal + Firebase)",
        "Location-based community voting system to validate hazard accuracy",
        "Route planning with proactive hazard summary and speech-to-text voice search",
        "Serverless architecture using Flutter with Supabase (Email OTP Auth, PostgreSQL DB, Storage)"
      ],
      architectureNotes: "Frontend-centric serverless architecture in Flutter; Supabase Auth & PostgreSQL storage; Google Gemma 3 4B VLM inference; OneSignal/Firebase push notifications.",
      githubUrl: "https://github.com/WeiXuan-C/Pavra",
      liveUrl: "https://github.com/WeiXuan-C/Pavra",
      stats: [
        { label: "Recognition", value: "UNIMAS 8.0 Winner" },
        { label: "Vision AI", value: "Google Gemma 3 4B" },
        { label: "Architecture", value: "Serverless Flutter" }
      ],
      accentColor: "#10b981"
    },
    {
      id: "studify",
      title: "Studify — AI-Powered Tutoring & Learning Platform",
      tagline: "Next-gen educational ecosystem unifying courses, classrooms, and community. CodeNection (2025) Winner.",
      description: "A full-stack AI tutoring platform with dual-embedding semantic search (E5-Small + BGE-M3), Whisper video transcription Q&A, Stripe payments, and personalized learning paths.",
      fullOverview: "Studify solves the fragmentation of online education. Built with Next.js 15 and React 19, it integrates an advanced AI layer featuring dual-embedding hybrid search (E5-Small 384d + BGE-M3 1024d) for RAG accuracy, resilient Whisper video transcription with QStash queues, interactive timestamped video Q&A with a ±30s context window, dynamic Mermaid learning paths, and full Stripe Checkout/Connect monetization.",
      category: "Full-Stack",
      role: "Core Developer (4-Member Team)",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Redis", "LangChain", "HuggingFace", "Stripe", "OpenRouter", "Vercel"],
      features: [
        "Dual-embedding semantic search (E5-Small + BGE-M3) for ultra-accurate RAG knowledge retrieval",
        "Multimodal video understanding pipeline using Whisper transcription and timestamped Q&A",
        "Personalized learning path generator with Mermaid diagram visualizations",
        "Full course commerce with Stripe Checkout & Connect (90/10 split) and Redis caching",
        "Rich video experience with Bilibili-style danmaku comments and interactive player",
        "Interactive virtual classrooms with code joining, assignments, whiteboard, and attendance"
      ],
      architectureNotes: "Next.js 15 App Router with Supabase RLS, Upstash Redis caching, LangChain vectorstore, QStash background jobs, and PWA/Capacitor mobile wrapper.",
      githubUrl: "https://github.com/baifan1366/Studify",
      liveUrl: "https://studify-platform.vercel.app",
      stats: [
        { label: "Recognition", value: "CodeNection Winner" },
        { label: "RAG Pipeline", value: "Dual-Embedding" },
        { label: "Stack", value: "Next.js 15 / React 19" }
      ],
      accentColor: "#38bdf8"
    },
    {
      id: "teamsync",
      title: "TeamSync — AI-Powered Project Management System",
      tagline: "Intelligent project orchestration, automated task breakdown, and collaborative workflows. Final Year Project.",
      description: "A full-stack project management platform with customizable Kanban/Gantt boards, AI workflow automation via OpenAI, Stripe subscription tiers, and multi-language support.",
      fullOverview: "Developed as the Diploma Final Year Project at Multimedia University, TeamSync streamlines team tracking and execution. It features interactive project dashboards, automated task breakdown using OpenAI APIs, subscription tiers with Stripe, comprehensive role-based access control (RBAC), and internationalization via next-intl (English, Chinese, Malay).",
      category: "Full-Stack",
      role: "Core Developer (3-Member Team)",
      technologies: ["Next.js", "React 19", "Redux Toolkit", "Tailwind CSS", "Supabase", "PostgreSQL", "Redis", "OpenAI APIs", "HuggingFace", "Stripe", "Vercel"],
      features: [
        "Interactive project dashboards, task timelines, and drag-and-drop Kanban workflow",
        "AI-assisted task generation and project workflow automation using OpenAI APIs",
        "Tiered subscription management and payment billing integration via Stripe",
        "Team role permissions, invite codes, calendar synchronization, and real-time chat",
        "Relational PostgreSQL database schema deployed on Supabase with Redis caching",
        "Multi-language internationalization (English, Chinese, Malay) powered by next-intl"
      ],
      architectureNotes: "Next.js App Router API routes, Supabase PostgreSQL with custom migration scripts, Redux Toolkit state management, and Stripe webhook handling.",
      githubUrl: "https://github.com/baifan1366/project-management-system",
      liveUrl: "https://team-sync-pms.vercel.app",
      stats: [
        { label: "Milestone", value: "Final Year Project" },
        { label: "Database", value: "Supabase PostgreSQL" },
        { label: "Languages", value: "EN / ZH / MY" }
      ],
      accentColor: "#a855f7"
    },
    {
      id: "moabi-systems",
      title: "Moabi PLT Enterprise Systems Suite",
      tagline: "Production Food POS, e-Invoice Compliance System, and Project Management Platform.",
      description: "Contributed to three live enterprise platforms during a 4-month software engineering internship at Moabi PLT, optimizing UI/UX workflows and validation processes.",
      fullOverview: "During a 4-month engineering internship at Moabi PLT, contributed to the evolution of three core systems: Food POS System (streamlining kitchen and ordering flows), e-Invoice System (implementing Malaysian LHDN e-invoicing compliance and validation), and Project Management System (optimizing cross-department workflows and internal communications).",
      category: "Web App",
      role: "Software Engineering Intern @ Moabi PLT",
      technologies: ["React", "Next.js", "Tailwind CSS", "MySQL", "phpMyAdmin", "Figma", "Stripo", "Git"],
      features: [
        "Enhanced UI/UX design and workflow ergonomics across Food POS and e-Invoice modules",
        "System testing, validation processes, and cross-stage feedback reviews for functional accuracy",
        "Collaborated with frontend developers, testers, and sysadmins for seamless module integration",
        "Engineered responsive email notifications and UI templates using Stripo",
        "Authored system documentation bridging technical logic with business stakeholder needs"
      ],
      architectureNotes: "Multi-tenant enterprise web architecture; MySQL database with phpMyAdmin; modern responsive frontend interfaces in React and Tailwind CSS.",
      githubUrl: "https://github.com/WeiXuan-C",
      liveUrl: "https://github.com/WeiXuan-C",
      stats: [
        { label: "Tenure", value: "2024.07 – 2024.10" },
        { label: "Platforms", value: "3 Core Systems" },
        { label: "Location", value: "Melaka, Malaysia" }
      ],
      accentColor: "#f59e0b"
    },
    {
      id: "supplychain-ai",
      title: "SupplyChain AI — Capacity Load Planner",
      tagline: "AI-driven logistics capacity forecasting and resource optimization engine.",
      description: "An AI-powered web application deployed on Vercel that models warehouse capacity loads, transit constraints, and resource distribution.",
      fullOverview: "Developed to demonstrate how generative AI models can optimize industrial supply chain operations. It features interactive capacity modeling, algorithmic forecasting, and a clean modern dashboard interface.",
      category: "AI & Systems",
      role: "Lead Developer",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini API", "Vercel"],
      features: [
        "Real-time capacity load calculation and bottleneck risk identification",
        "AI recommendations for warehouse and transit allocation",
        "High-density responsive data visualizer with dark mode ergonomics",
        "Instant serverless deployment on Vercel"
      ],
      architectureNotes: "Serverless Next.js architecture with server-side AI reasoning; deployed on Vercel.",
      githubUrl: "https://github.com/WeiXuan-C/SupplyChainAISystem",
      liveUrl: "https://capacity-load.vercel.app",
      stats: [
        { label: "Status", value: "Live on Vercel" },
        { label: "Engine", value: "Gemini AI" },
        { label: "Type", value: "Interactive Prototype" }
      ],
      accentColor: "#ec4899"
    }
  ],
  experience: [
    {
      id: "moabi",
      role: "Software Engineering Intern — QA Testing & Technical Documentation",
      company: "Moabi PLT",
      companyUrl: "https://github.com/WeiXuan-C",
      location: "Alor Gajah, Melaka, Malaysia",
      period: "2024.07 – 2024.10",
      type: "Internship",
      description: [
        "Led system testing, QA validation processes, and test case documentation across three production platforms: Food POS System, Malaysia LHDN-compliant e-Invoice System, and Project Management System.",
        "Authored comprehensive technical documentation, module specifications, and operational manuals to bridge technical implementation with business stakeholder needs.",
        "Executed integration testing and regression validation to identify UI/UX edge cases, data discrepancy flaws, and workflow bottlenecks.",
        "Collaborated with frontend developers, system administrators, and QA peers to verify bug fixes and enhance system usability.",
        "Designed responsive email templates and notification workflows using Stripo for automated customer communications."
      ],
      technologies: ["System Testing", "Technical Documentation", "QA & UAT", "React", "Next.js", "Tailwind CSS", "MySQL", "phpMyAdmin", "Figma", "Stripo", "Git"]
    },
    {
      id: "unimas-winner",
      role: "Team Leader & Champion (Pavra)",
      company: "UNIMAS 8.0 National Hackathon",
      location: "Malaysia",
      period: "2025.12 – 2026.01",
      type: "Milestone",
      description: [
        "Awarded Winner at UNIMAS 8.0 Hackathon for leading the design and development of Pavra, an AI-powered road safety mobile application.",
        "Implemented AI-based road damage detection and severity classification using Google Gemma 3 4B vision-language model.",
        "Architected a serverless system using Flutter and Supabase, integrating Google Maps API and OneSignal real-time push notifications."
      ],
      technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Google Gemma 3", "Google Maps API", "OneSignal", "Firebase"]
    },
    {
      id: "codenection-winner",
      role: "Core Developer & Champion (Studify)",
      company: "CodeNection 2025 Hackathon",
      location: "Malaysia",
      period: "2025.09 – 2025.11",
      type: "Milestone",
      description: [
        "Awarded Winner at CodeNection 2025 Hackathon in a 4-member team building Studify, an AI-powered tutoring and learning ecosystem.",
        "Implemented dual-embedding semantic search (E5-Small + BGE-M3) to dramatically improve RAG-based knowledge retrieval accuracy.",
        "Built multimodal video understanding pipeline using Whisper transcription, Stripe payment integration, and Redis caching."
      ],
      technologies: ["Next.js 15", "React 19", "TypeScript", "LangChain", "Supabase", "Redis", "HuggingFace", "Stripe", "Vercel"]
    },
    {
      id: "mmu-fyp",
      role: "Core Developer (TeamSync FYP)",
      company: "Multimedia University (Faculty of Information Technology)",
      location: "Melaka, Malaysia",
      period: "2025.02 – 2025.07",
      type: "University",
      description: [
        "Developed TeamSync, an AI-powered full-stack project management platform as the Diploma Final Year Project.",
        "Engineered interactive dashboards, task tracking, OpenAI automated task generation, and Stripe subscription payment integration.",
        "Architected relational PostgreSQL database schema deployed on Supabase with Redis caching and next-intl internationalization."
      ],
      technologies: ["Next.js", "React", "Redux", "Supabase", "PostgreSQL", "OpenAI APIs", "Stripe", "Tailwind CSS"]
    }
  ],
  education: [
    {
      id: "bachelor-se",
      degree: "Bachelor of Computer Science (Hons.) Software Engineering",
      institution: "Multimedia University (MMU)",
      period: "2025.10 – Present",
      gpa: "In Progress (Current Undergraduate)",
      details: [
        "Location: Cyberjaya Campus, Malaysia",
        "Specialization: Software Architecture, Distributed Cloud Systems & Applied Artificial Intelligence",
        "Active Hackathon Participant & Open Source Contributor"
      ],
      coursework: [
        "Software Engineering Principles",
        "Advanced Algorithms & Data Structures",
        "Cloud Computing Architecture",
        "Artificial Intelligence & Machine Learning",
        "Database Administration & Scalability"
      ]
    },
    {
      id: "diploma-it",
      degree: "Diploma in Information Technology",
      institution: "Multimedia University (MMU)",
      period: "2023.08 – 2025.08",
      gpa: "CGPA: 3.93 / 4.00 (High Distinction)",
      details: [
        "Location: Melaka Campus, Malaysia",
        "Final Year Project: TeamSync (AI-Powered Project Management System)",
        "Consistent High Academic Excellence Across All Semesters"
      ],
      coursework: [
        "Object-Oriented Programming (Java / C++)",
        "Web Application Development (JavaScript, React)",
        "Relational Database Systems (MySQL, PostgreSQL)",
        "Data Communications & Networking",
        "Mobile Application Development",
        "Software Project Management"
      ]
    }
  ],
  uiUxWork: [
    {
      id: "moabi-ux",
      title: "Moabi Enterprise POS & e-Invoice UX",
      subtitle: "Production Workflow Optimization & UI Redesign",
      type: "Web Design",
      summary: "Redesigned cashier checkout ergonomics for Food POS and created Malaysia LHDN-compliant tax validation workflows for the enterprise e-Invoice platform.",
      figmaUrl: "https://github.com/WeiXuan-C",
      tags: ["Food POS", "e-Invoice", "Figma", "Stripo", "Workflow Ergonomics"],
      metrics: "Streamlined cashier order entry flow and enhanced cross-stage validation clarity",
      before: {
        title: "Legacy POS / Tax Filing Interface",
        points: ["Cluttered table layout with confusing multi-step tax fields", "Complex cashier button placements prone to accidental cancellations", "Inconsistent alert styling across POS modules"]
      },
      after: {
        title: "Optimized Moabi Interface",
        points: ["High-visibility status badges and guided tax validation steps", "Optimized touch-friendly cashier action buttons with confirmation guards", "Standardized responsive design system tokens across all 3 platforms"]
      }
    },
    {
      id: "pavra-mobile-ux",
      title: "Pavra Driver-Centric Mobile Experience",
      subtitle: "Flutter Mobile UI, Map Overlays & Thumb-Zone Ergonomics",
      type: "Mobile",
      summary: "A driver-first mobile UI designed for rapid hazard identification with high-contrast color coding, intuitive Google Maps overlays, and voice-assisted navigation.",
      figmaUrl: "https://github.com/WeiXuan-C/Pavra",
      tags: ["Flutter", "Mobile UX", "Map UI", "Voice Search", "Dark Mode"],
      metrics: "UNIMAS 8.0 Champion — Recognized for exceptional usability under driving conditions",
      before: {
        title: "Standard Road Hazard Forms",
        points: ["Tedious manual text forms requiring drivers to type details", "Cluttered map pins without severity differentiation", "No voice-assisted hands-free search"]
      },
      after: {
        title: "Pavra Vision-Driven Interface",
        points: ["Instant AI camera scan with auto-classified severity pills", "Color-coded map clusters with adjustable alert radius sliders", "Hands-free voice search and quick 1-tap community validation voting"]
      }
    },
    {
      id: "studify-ux",
      title: "Studify Multimodal Learning Interface",
      subtitle: "Video Danmaku, Timestamped Q&A & Mermaid Learning Paths",
      type: "Design System",
      summary: "An immersive digital classroom with interactive timestamped video Q&A (±30s context window), floating danmaku player controls, and dynamic Mermaid graph visualizers.",
      figmaUrl: "https://github.com/baifan1366/Studify",
      tags: ["Next.js 15", "Design System", "Danmaku Player", "Mermaid Charts"],
      metrics: "CodeNection 2025 Winner — Praised for engaging student retention UI",
      before: {
        title: "Traditional Video Course Portals",
        points: ["Static video players with disconnected text forums", "Rigid course chapter lists with no visual progression graph", "No context-aware timestamped AI explanations"]
      },
      after: {
        title: "Studify AI Interactive Experience",
        points: ["Time-aware AI video Q&A with jump-to-timestamp links", "Dynamic learning path tree visualizer powered by Mermaid graphs", "Engaging community gamification, badges, and real-time danmaku comments"]
      }
    }
  ],
  certifications: [
    {
      name: "Diploma in Information Technology",
      issuer: "Multimedia University (MMU)",
      year: "2025",
      credentialId: "CGPA-3.93-HIGH-DISTINCTION"
    },
    {
      name: "UNIMAS 8.0 Champion Certification",
      issuer: "Universiti Malaysia Sarawak (UNIMAS)",
      year: "2026",
      credentialId: "UNIMAS-8.0-WINNER"
    },
    {
      name: "CodeNection Hackathon Winner",
      issuer: "CodeNection 2025",
      year: "2025",
      credentialId: "CODENECT-WINNER-2025"
    }
  ],
  awards: [
    {
      title: "Winner — UNIMAS 8.0 Hackathon",
      competition: "Universiti Malaysia Sarawak (UNIMAS)",
      year: "2025 – 2026",
      description: "Team Leader for Pavra, an AI-powered road safety mobile application featuring Google Gemma 3 4B VLM hazard classification and Google Maps integration."
    },
    {
      title: "Winner — CodeNection Hackathon",
      competition: "CodeNection 2025",
      year: "2025",
      description: "Core Developer for Studify, an AI-powered tutoring and learning platform with dual-embedding RAG (E5-Small + BGE-M3) and Whisper video comprehension."
    },
    {
      title: "Academic High Distinction (CGPA: 3.93)",
      competition: "Multimedia University (Faculty of Information Technology)",
      year: "2023 – 2025",
      description: "Achieved CGPA of 3.93 / 4.00 throughout Diploma studies with outstanding academic performance."
    }
  ],
  languages: [
    { language: "Mandarin Chinese (中文)", proficiency: "Native / Bilingual (母语)" },
    { language: "English (英语)", proficiency: "Professional Working Proficiency" },
    { language: "Malay (马来文)", proficiency: "Professional Working / Conversational" }
  ],
  interests: [
    "Multimodal Vision-Language Models (Gemma 3 VLM, Whisper)",
    "Cross-Platform Mobile Engineering (Flutter & Dart)",
    "Full-Stack Web Architecture (Next.js 15, React 19, Supabase)",
    "UI/UX Design Systems & Workflow Ergonomics (Figma, Tailwind)",
    "Competitive Hackathons & Open Source Collaboration"
  ]
};

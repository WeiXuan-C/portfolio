import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Chong Wei Xuan",
    chineseName: "",
    title: "Software Developer & Web App Engineer",
    shortTitle: "Web App & Full-Stack Developer",
    tagline: "I don't just build software. I design digital experiences.",
    statement: "Undergraduate in Bachelor of Computer Science (Honours) in Software Engineering at Multimedia University (MMU Cyberjaya, Year 3 Sem 3, CGPA 3.90) building resilient web applications, collaborative multi-agent AI workspaces, and clean full-stack architectures.",
    email: "weixuan.chong@gmail.com",
    phone: "+60 11-6520 0275",
    whatsapp: "01165200275",
    location: "Melaka & Cyberjaya, Malaysia",
    portfolioUrl: "https://weixuan-c.github.io",
    github: "https://github.com/WeiXuan-C",
    linkedin: "https://www.linkedin.com/in/wei-xuan-3a0321326",
    twitter: "https://github.com/WeiXuan-C",
    avatar: "https://avatars.githubusercontent.com/u/130114186?v=4",
    availability: "Undergraduate @ MMU Cyberjaya (Year 3 Sem 3) • Open to Tech Collaboration & Hackathons",
    status: "student_and_collaborator"
  },
  summary: "Passionate Software Developer and Computer Science undergraduate pursuing a Bachelor of Computer Science (Honours) in Software Engineering at Multimedia University Cyberjaya (Year 3 Trimester 3, CGPA: 3.90 / 4.00; Diploma CGPA: 3.93 High Distinction). Multi-hackathon winner across international and national arenas: Inventx 2026 Gold Medal, CodeNection 2025 Most Impactful Project (Studify), UNIMAS 8.0 Product Category 1st Runner-Up & Best Testimonial Award (Pavra), and CodeNection 2026 creator of Tripify (LangGraph multi-agent workspace). Experienced across Next.js 15, React 19, TypeScript, Flutter, Supabase, PostgreSQL, and multi-agent AI systems, alongside hands-on QA testing and technical documentation from Moabi PLT.",
  stats: [
    {
      id: "cgpa-degree",
      label: "Degree CGPA (Yr 3 Sem 3)",
      value: 3.90,
      suffix: "",
      description: "Bachelor of CS (Software Engineering) at MMU Cyberjaya (Diploma: 3.93)"
    },
    {
      id: "awards",
      label: "Hackathon & Tech Honors",
      value: 5,
      suffix: "+",
      description: "Inventx Gold, CodeNection Impact Award, UNIMAS 8.0 1st Runner-Up & Best Testimonial"
    },
    {
      id: "projects",
      label: "Engineered Projects",
      value: 10,
      suffix: "+",
      description: "Multi-agent AI platforms, mobile vision systems, and enterprise suites"
    },
    {
      id: "tech",
      label: "Technologies Mastered",
      value: 20,
      suffix: "+",
      description: "Next.js 15, React 19, TypeScript, LangGraph, Flutter, Supabase, Postgres"
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
      tagline: "Map-first collaborative group itinerary workspace powered by LangGraph multi-agent orchestration. (CodeNection 2026 Project)",
      description: "CodeNection 2026 Project. A collaborative web application featuring a flexible pinboard workspace, Google Maps routing, multi-agent AI (Researcher / Planner / Critic), proposal diff voting, and Supabase Realtime synchronization.",
      fullOverview: "Tripify is engineered for CodeNection 2026, solving group trip coordination by replacing fragmented chats and spreadsheets with a single, live map-oriented workspace. Built by the Studify team, Tripify integrates LangGraph multi-agent orchestration where specialized agents (Researcher, Planner, Critic) generate structured itinerary proposals with Value-for-Money reasoning. When disruptions occur (weather, flight delays), dynamic partial replanning recalculates affected routes without wiping user edits. Backed by Supabase Postgres, Auth, and Realtime for live collaborative voting.",
      category: "Web App",
      role: "Backend, Data Architecture & Integrations",
      technologies: ["Next.js 15", "React 19", "TypeScript", "LangGraph", "Supabase", "PostgreSQL", "Supabase Realtime", "Google Maps Platform", "OpenRouter", "Tailwind CSS", "shadcn/ui", "next-intl", "Vercel"],
      features: [
        "CodeNection 2026 competition entry engineered for real-time group travel orchestration",
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
        { label: "Hackathon", value: "CodeNection 2026" },
        { label: "Live Prototype", value: "Vercel Deployed" },
        { label: "Multi-Agent", value: "LangGraph Loop" },
        { label: "My Role", value: "Backend & Data" }
      ],
      accentColor: "#d4af37"
    },
    {
      id: "pavra",
      title: "Pavra — AI-Powered Road Safety Mobile Application",
      tagline: "The Smarter Roads, The Safer Journeys — Real-time AI road hazard detection and driver safety ecosystem.",
      description: "Mobile road safety application using Google Gemma 3 4B vision AI to detect road hazards, tag GPS coordinates, and broadcast proximity alerts.",
      fullOverview: "Pavra is an award-winning road safety mobile application (UNIMAS Hackathon 8.0 Product 1st Runner-Up & Best Testimonial). As Team Leader of a 2-person team, Wei Xuan architected a serverless Flutter application backed by Supabase. It runs image inference with Google Gemma 3 4B VLM to classify hazard severity. GPS coordinates are mapped in real time, and nearby drivers receive push notifications via OneSignal & Firebase with adjustable alert radii.",
      category: "AI & Systems",
      role: "Team Leader (2-Member Team)",
      status: "UNIMAS 8.0 Double Award",
      awardsList: [
        {
          shortName: "UNIMAS 8.0 Product 1st Runner-Up",
          fullName: "UNIMAS 8.0 Hackathon [Product Category First Runner-Up] hosted by Universiti Malaysia Sarawak (UNIMAS)",
          competition: "UNIMAS Hackathon 8.0",
          award: "Product Category First Runner-Up",
          host: "Universiti Malaysia Sarawak (UNIMAS)",
          year: "2025 – 2026",
          isKeyHighlight: true
        },
        {
          shortName: "UNIMAS 8.0 Best Testimonial Award",
          fullName: "UNIMAS 8.0 Hackathon [Best Testimonial Award] hosted by Universiti Malaysia Sarawak (UNIMAS)",
          competition: "UNIMAS Hackathon 8.0",
          award: "Best Testimonial Award",
          host: "Universiti Malaysia Sarawak (UNIMAS)",
          year: "2025 – 2026",
          isKeyHighlight: true
        }
      ],
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
        { label: "Recognition", value: "1st Runner-Up + Testimonial" },
        { label: "Vision AI", value: "Google Gemma 3 4B" },
        { label: "Architecture", value: "Serverless Flutter" }
      ],
      accentColor: "#f59e0b"
    },
    {
      id: "studify",
      title: "Studify — AI-Powered Tutoring & Learning Platform",
      tagline: "Intelligent tutoring ecosystem with dual-embedding semantic search & multimodal video intelligence.",
      description: "Full-stack AI tutoring platform featuring dual-embedding hybrid search (E5-Small + BGE-M3), Whisper timestamped video Q&A, and interactive learning paths.",
      fullOverview: "Studify is a 4-time award-winning AI educational platform (Inventx 2026 Gold Medal, CodeNection 2025 Most Impactful Project, YuKeSong 2025 Award of Excellence, and Innovative Minds Honorable Mention). Built with Next.js 15 and React 19, it integrates dual-embedding hybrid search (E5-Small 384d + BGE-M3 1024d) for RAG accuracy, Whisper video transcription with QStash queues, timestamped video Q&A (±30s context window), dynamic Mermaid learning paths, and full Stripe monetization.",
      category: "Full-Stack",
      role: "Core Developer (4-Member Team)",
      status: "4x Award Winner",
      awardsList: [
        {
          shortName: "Inventx 2026 Gold Medal",
          fullName: "Inventx 2026 [Gold Medal] hosted by MMU (International Competition)",
          competition: "Inventx 2026 (International Competition)",
          award: "Gold Medal",
          host: "Multimedia University (MMU)",
          participants: "International Participants",
          year: "2026",
          isKeyHighlight: true
        },
        {
          shortName: "CodeNection 2025 Most Impactful Project",
          fullName: "CodeNection 2025 (900+ participants) [Most Impactful Project] hosted by MMU IT Society",
          competition: "CodeNection 2025",
          award: "Most Impactful Project",
          host: "MMU IT Society",
          participants: "900+ participants",
          year: "2025",
          isKeyHighlight: true
        },
        {
          shortName: "YuKeSong 2025 Award of Excellence",
          fullName: "YuKeSong2025: Hack whatever you feel like! Unlimited Free-For-All Hackathon (111 participants) [Award of Excellence Certificate] hosted by Chongqing Build Wave Student Club",
          competition: "YuKeSong2025: Hack whatever you feel like! Unlimited Free-For-All Hackathon",
          award: "Award of Excellence Certificate",
          host: "Chongqing Build Wave Student Club",
          participants: "111 participants",
          year: "2025",
          isKeyHighlight: false
        },
        {
          shortName: "Innovative Minds Honorable Mention",
          fullName: "Innovative Minds (98 participants) [Honorable Mention] hosted by presentme",
          competition: "Innovative Minds",
          award: "Honorable Mention",
          host: "presentme",
          participants: "98 participants",
          year: "2025",
          isKeyHighlight: false
        }
      ],
      technologies: ["Next.js 15", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Redis", "LangChain", "HuggingFace", "Stripe", "OpenRouter", "Vercel"],
      features: [
        "Dual-embedding semantic search (E5-Small 384d + BGE-M3 1024d) for ultra-accurate RAG knowledge retrieval",
        "Multimodal video understanding pipeline using Whisper transcription and timestamped Q&A (±30s context)",
        "Personalized learning path generator with dynamic Mermaid diagram visualizations",
        "Full course commerce with Stripe Checkout & Connect (90/10 split) and Redis caching",
        "PWA & mobile-responsive architecture with Supabase RLS and QStash background jobs"
      ],
      architectureNotes: "Next.js 15 App Router with Supabase RLS, Upstash Redis caching, LangChain vectorstore, QStash background jobs, and PWA/Capacitor mobile wrapper.",
      githubUrl: "https://github.com/baifan1366/Studify",
      liveUrl: "https://studify-platform.vercel.app",
      stats: [
        { label: "Inventx 2026", value: "Gold Medal" },
        { label: "CodeNection", value: "Most Impactful" },
        { label: "YuKeSong 2025", value: "Award of Excellence" },
        { label: "RAG Pipeline", value: "Dual-Embedding" }
      ],
      accentColor: "#eab308"
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
      accentColor: "#fbbf24"
    },
    {
      id: "moabi-systems",
      title: "Moabi PLT Enterprise Systems Suite",
      tagline: "Production Food POS, e-Invoice Compliance System, and Project Management Platform.",
      description: "Enterprise software engineering internship at Moabi PLT, focusing on system QA testing, SIT/UAT validation processes, and UI/UX workflow ergonomics across 3 production platforms.",
      fullOverview: "During a 4-month software engineering internship at Moabi PLT, contributed directly to three core enterprise systems: Food POS System (optimizing kitchen order routing and POS flows), e-Invoice System (testing Malaysian LHDN e-invoicing compliance, tax validation logic, and XML/JSON data pipelines), and Project Management System (improving cross-team workflow tracking and internal notifications). As this encompasses proprietary enterprise production software, source code and live deployments are protected under company confidentiality (NDA).",
      category: "Web App",
      role: "Software Engineering Intern @ Moabi PLT",
      status: "Enterprise Internship • Confidential",
      isConfidential: true,
      confidentialNotice: "Company Confidential • Proprietary Enterprise Software (Protected under NDA, no public repository or live link)",
      technologies: ["React", "Next.js", "Tailwind CSS", "MySQL", "phpMyAdmin", "Figma", "Stripo", "Git"],
      features: [
        "Quality Assurance & System Testing: Executed comprehensive functional, integration, and regression testing across Food POS and e-Invoice modules",
        "Malaysia LHDN e-Invoice Validation: Verified tax field calculations, invoice status schemas, and invoice compliance workflows",
        "Workflow & UI/UX Ergonomics: Refined operational user interfaces to reduce operator input errors and accelerate order handling speeds",
        "Automated Communication Templates: Crafted responsive transactional email templates and notification logic using Stripo",
        "Technical Documentation: Authored detailed test cases, bug reproduction guides, and system feature documentation for cross-functional alignment"
      ],
      architectureNotes: "Multi-tenant enterprise production architecture; MySQL relational databases managed with phpMyAdmin; React/Tailwind frontend modules; internal REST APIs.",
      stats: [
        { label: "Tenure", value: "2024.07 – 2024.10" },
        { label: "Platforms", value: "3 Core Systems" },
        { label: "Location", value: "Melaka, Malaysia" }
      ],
      accentColor: "#d97706"
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
      company: "Multimedia University (MMU FIST, Melaka)",
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
      degree: "Bachelor of Computer Science (Honours) in Software Engineering",
      institution: "Multimedia University (MMU FCI, Cyberjaya)",
      period: "2025.10 – Present (Year 3, Trimester 3)",
      gpa: "CGPA: 3.90 / 4.00 (Year 3 Sem 3)",
      details: [
        "Faculty: Faculty of Computing and Informatics (FCI), Cyberjaya Campus",
        "Current Standing: 3rd Year, 3rd Semester (Year 3 Sem 3) • CGPA 3.90 / 4.00",
        "Specialization: Software Architecture, Distributed Cloud Systems & Applied AI",
        "Multi-Hackathon Winner (Inventx Gold Medal, CodeNection Most Impactful, UNIMAS 8.0)",
        "Open Source Contributor across Web Apps & Multi-Agent AI Workspaces"
      ],
      coursework: [
        "Software Engineering Principles & Methodologies",
        "Advanced Algorithms & Data Structures",
        "Cloud Computing Architecture & Microservices",
        "Artificial Intelligence & Machine Learning",
        "Database Administration & Scalability",
        "Software Quality Assurance & Testing"
      ]
    },
    {
      id: "diploma-it",
      degree: "Diploma in Information Technology",
      institution: "Multimedia University (MMU FIST, Melaka)",
      period: "2023.08 – 2025.08",
      gpa: "CGPA: 3.93 / 4.00 (High Distinction)",
      details: [
        "Faculty: Faculty of Information Science and Technology (FIST), Melaka Campus",
        "Academic Standing: CGPA 3.93 / 4.00 (High Distinction across all semesters)",
        "Final Year Project: TeamSync (AI-Powered Project Management System)",
        "Dean's List Award recipient every semester"
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
      metrics: "UNIMAS 8.0 First Runner-Up & Best Testimonial — Praised for real-world driving ergonomics",
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
      metrics: "Inventx Gold & CodeNection Winner — Praised for engaging student retention UI",
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
      name: "Inventx 2026 Gold Medalist (International Competition)",
      issuer: "Multimedia University (MMU)",
      year: "2026",
      credentialId: "INVENTX-2026-GOLD"
    },
    {
      name: "UNIMAS 8.0 Product 1st Runner-Up & Best Testimonial",
      issuer: "Universiti Malaysia Sarawak (UNIMAS)",
      year: "2026",
      credentialId: "UNIMAS-8.0-DOUBLE-AWARD"
    },
    {
      name: "CodeNection 2025 Most Impactful Project (900+ participants)",
      issuer: "MMU IT Society",
      year: "2025",
      credentialId: "CODENECT-2025-IMPACT"
    },
    {
      name: "YuKeSong 2025 Award of Excellence Certificate",
      issuer: "Chongqing Build Wave Student Club",
      year: "2025",
      credentialId: "YUKESONG-2025-EXCELLENCE"
    },
    {
      name: "Diploma in Information Technology (High Distinction)",
      issuer: "Multimedia University (MMU)",
      year: "2025",
      credentialId: "CGPA-3.93-HIGH-DISTINCTION"
    }
  ],
  awards: [
    {
      id: "inventx-2026",
      title: "Inventx 2026 [Gold Medal] hosted by MMU (International Competition) — Studify",
      shortTitle: "Inventx 2026 Gold Medal",
      competition: "Inventx 2026 (International Competition)",
      project: "Studify",
      host: "Multimedia University (MMU)",
      award: "Gold Medal",
      awardLevel: "Gold",
      badge: "🥇 International Gold Medal",
      year: "2026",
      keyHighlight: true,
      description: "Awarded Gold Medal in prestigious international engineering & innovation competition for Studify, an AI-powered tutoring ecosystem unifying dual-embedding RAG and video transcription."
    },
    {
      id: "codenection-2025",
      title: "CodeNection 2025 (900+ participants) [Most Impactful Project] hosted by MMU IT Society — Studify",
      shortTitle: "CodeNection 2025 Most Impactful Project",
      competition: "CodeNection 2025",
      project: "Studify",
      host: "MMU IT Society",
      participants: "900+ participants",
      award: "Most Impactful Project",
      awardLevel: "Impact",
      badge: "🏆 Most Impactful Award (900+ Participants)",
      year: "2025",
      keyHighlight: true,
      description: "Awarded Most Impactful Project among 900+ national participants for building an AI educational ecosystem with hybrid semantic search (E5-Small + BGE-M3) and interactive video Q&A."
    },
    {
      id: "unimas-8-runner-up",
      title: "UNIMAS 8.0 Hackathon [Product Category First Runner-Up] hosted by UNIMAS — Pavra",
      shortTitle: "UNIMAS 8.0 Product 1st Runner-Up",
      competition: "UNIMAS Hackathon 8.0",
      project: "Pavra",
      host: "Universiti Malaysia Sarawak (UNIMAS)",
      award: "Product Category 1st Runner-Up",
      awardLevel: "RunnerUp",
      badge: "🥈 Product 1st Runner-Up",
      year: "2025 – 2026",
      keyHighlight: true,
      description: "Team Leader for Pavra. Won Product Category First Runner-Up for AI edge vision road hazard detection and proximity alert broadcasting powered by Google Gemma 3 4B VLM."
    },
    {
      id: "unimas-8-testimonial",
      title: "UNIMAS 8.0 Hackathon [Best Testimonial Award] hosted by UNIMAS — Pavra",
      shortTitle: "UNIMAS 8.0 Best Testimonial Award",
      competition: "UNIMAS Hackathon 8.0",
      project: "Pavra",
      host: "Universiti Malaysia Sarawak (UNIMAS)",
      award: "Best Testimonial Award",
      awardLevel: "Excellence",
      badge: "🌟 Best Testimonial Award",
      year: "2025 – 2026",
      keyHighlight: true,
      description: "Recognized with the Best Testimonial Award by UNIMAS Hackathon evaluation committee for user safety impact, real-world utility, and live driver feedback loops."
    },
    {
      id: "yukesong-2025",
      title: "YuKeSong2025: Hack whatever you feel like! Unlimited Free-For-All Hackathon (111 participants) [Award of Excellence Certificate] hosted by Chongqing Build Wave Student Club — Studify",
      shortTitle: "YuKeSong 2025 Award of Excellence",
      competition: "YuKeSong2025: Unlimited Free-For-All Hackathon",
      project: "Studify",
      host: "Chongqing Build Wave Student Club",
      participants: "111 participants",
      award: "Award of Excellence Certificate",
      awardLevel: "Excellence",
      badge: "📜 Award of Excellence Certificate",
      year: "2025",
      description: "Honored with the Award of Excellence certificate for innovative multimodal educational pipelines and resilient transcription architectures."
    },
    {
      id: "innovative-minds-2025",
      title: "Innovative Minds (98 participants) [Honorable Mention] hosted by presentme — Studify",
      shortTitle: "Innovative Minds Honorable Mention",
      competition: "Innovative Minds",
      project: "Studify",
      host: "presentme",
      participants: "98 participants",
      award: "Honorable Mention",
      awardLevel: "Honor",
      badge: "🎖️ Honorable Mention (Top 10)",
      year: "2025",
      description: "Recognized with Honorable Mention among 98 participants for personalized AI learning path graphs and responsive student learning workflows."
    },
    {
      id: "codenection-2026",
      title: "CodeNection 2026 Hackathon Finalist & Multi-Agent Travel Architecture — Tripify",
      shortTitle: "CodeNection 2026 (Tripify)",
      competition: "CodeNection 2026",
      project: "Tripify",
      host: "MMU IT Society",
      award: "Hackathon Entry & System Architecture",
      awardLevel: "Impact",
      badge: "🚀 LangGraph Multi-Agent Architecture",
      year: "2026",
      description: "Architected real-time collaborative travel planning workspace with LangGraph multi-agent coordination (Researcher, Planner, Critic) and Supabase Realtime sync."
    },
    {
      id: "academic-distinction",
      title: "Academic High Distinction (Diploma CGPA: 3.93) & Degree CGPA: 3.90",
      shortTitle: "Academic High Distinction (CGPA 3.90 / 3.93)",
      competition: "Multimedia University (MMU)",
      project: "MMU Academic Excellence",
      host: "Multimedia University (MMU)",
      award: "High Distinction & Dean's List",
      awardLevel: "Academic",
      badge: "🎓 High Distinction (CGPA 3.90 / 3.93)",
      year: "2023 – Present",
      keyHighlight: true,
      description: "Exceptional academic performance: currently in Year 3 Trimester 3 of Bachelor of Computer Science in Software Engineering at MMU FCI Cyberjaya with CGPA 3.90 / 4.00, following a Diploma in IT at MMU FIST Melaka with CGPA 3.93 High Distinction."
    }
  ],
  languages: [
    { language: "Mandarin Chinese", proficiency: "Native / Bilingual" },
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Malay", proficiency: "Professional Working / Conversational" }
  ],
  interests: [
    "Multimodal Vision-Language Models (Gemma 3 VLM, Whisper)",
    "Cross-Platform Mobile Engineering (Flutter & Dart)",
    "Full-Stack Web Architecture (Next.js 15, React 19, Supabase)",
    "UI/UX Design Systems & Workflow Ergonomics (Figma, Tailwind)",
    "Competitive Hackathons & Open Source Collaboration"
  ]
};

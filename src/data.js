export const profile = {
  name: "Febin K Dominic",
  handle: "parapsychic",
  title: "Full-Stack Software Engineer",
  location: "Bangalore, India",
  email: "febinkdominic.dev@gmail.com",
  website: "https://febinkdominic.com",
  github: "https://github.com/parapsychic",
  linkedin: "https://linkedin.com/in/febinkdominic",
  resumeUrl: "/Febin_K_Dominic_Resume.pdf",
  oneLiner:
    "Full-stack engineer in Bangalore. Backend-leaning (C# / .NET), comfortable on the frontend too — Flutter and Vue.js.",
  bio: `I'm Febin. I work at DeltaX on Birdigo — a CRM used by a few hundred sales teams. Most of my work is backend (C# / ASP.NET Core, SQL Server, Redis), but I've also shipped Flutter and Vue.js code across the same product.`,
};

export const nowDoing = [
  { label: "role", value: "Software Engineer @ DeltaX" },
  { label: "mainly", value: "C# / ASP.NET Core, SQL Server, Redis" },
  { label: "also", value: "Flutter, Vue.js, a bit of Rust on weekends" },
  { label: "based in", value: "Bangalore, India" },
];

export const focusAreas = [
  "ASP.NET Core APIs",
  "OAuth2 / OIDC identity",
  "SQL Server performance",
  "Redis caching patterns",
  "Flutter (BLoC, Riverpod)",
  "Vue.js",
  "Kubernetes + Jenkins delivery",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "DeltaX",
    location: "Bangalore, India",
    period: "Oct 2025 – Present",
    blurb:
      "Core backend contributor to Birdigo, a multi-tenant, multi-database mobile CRM platform.",
    bullets: [
      "Containerized ASP.NET Core microservices with Docker and automated deployments to Kubernetes via Jenkins + Kustomize, replacing manual multi-step releases with a single-pipeline trigger.",
      "Designed an event-driven cache invalidation system using Redis Pub/Sub to synchronize in-memory caches across distributed instances, eliminating stale-read issues.",
      "Deployed the Elastic Stack on Kubernetes via the ECK Operator; centralized container logging and enabled Elastic APM for end-to-end request tracing across all services.",
      "Built Google Meet integration for in-app appointments using the factory pattern (extensible to Zoom/Teams); integrated Google Maps APIs for geocoding and proximity-based lead-to-store transfers.",
    ],
    tags: ["ASP.NET Core", "Docker", "Kubernetes", "Jenkins", "Redis", "Elastic APM"],
  },
  {
    role: "Associate Software Engineer",
    company: "DeltaX",
    location: "Bangalore, India",
    period: "Sept 2023 – Sept 2025",
    blurb: "Foundational backend work across identity, performance, and core CRM domain.",
    bullets: [
      "Built a fully OAuth2-compliant SSO Identity Provider (ASP.NET Core, OIDC, JWT, Redis): M2M and interactive flows, token rotation, refresh tokens, OTP login, Google/Apple sign-in. Authored a reusable NuGet auth library (middleware + token generator) adopted across all microservices.",
      "Diagnosed and refactored SQL Server stored procedures and indexes on million-row tables; cut lead query time from 30s to under 1s and reduced call-log latency by 80%.",
      "Implemented aggressive Redis + in-memory caching for high-read, low-write entities, reducing overall API latency by 50–75% across the platform.",
      "Designed Nests (lead lifecycle engine): configurable field mappings, a state-machine for status transitions with per-status rules, automation triggers on state changes, and filtering by status/user/label. Extended the model for B2B Opportunities with company-associated leads, contact roles, and multi-stakeholder workflows.",
      "Redesigned the labels system into a polymorphic, entity-agnostic architecture — same labels configurable across leads, call logs, companies, contacts, and their sub-entities.",
      "Built an Insights API with configurable date-range aggregations for lead and call-log status breakdowns; implemented RBAC-style access filters for multi-number WhatsApp chat with per-store and per-user scoping.",
      "Wrote SpecFlow BDD tests, maintained Jenkinsfiles for all microservices, and automated Flutter CI/CD via Jenkins + Fastlane with staging and production channels.",
    ],
    tags: ["OAuth2/OIDC", "SQL Server", "Redis", "EF Core", "Flutter CI/CD", "SpecFlow"],
  },
];

export const skills = [
  {
    group: "Backend",
    items: [
      "C#", "ASP.NET Core Web API", "Entity Framework Core", "Dapper", "LINQ",
      "Dependency Injection", "Middleware", "REST APIs", "OAuth2 / OIDC", "JWT",
      "MVC (Razor)",
    ],
  },
  {
    group: "Frontend & Mobile",
    items: [
      "Flutter", "BLoC", "Riverpod", "Vue.js", "JavaScript", "HTML", "CSS",
      "Tailwind", "React (this site)",
    ],
  },
  {
    group: "Data & Caching",
    items: [
      "Microsoft SQL Server", "T-SQL", "Stored Procedures", "Query Tuning",
      "Indexing", "Redis", "Redis Pub/Sub", "Fluent Migrator",
    ],
  },
  {
    group: "DevOps & Observability",
    items: [
      "Docker", "Kubernetes", "Jenkins", "Kustomize",
      "Elasticsearch", "Kibana", "Logstash", "Filebeat", "Elastic APM", "Git",
    ],
  },
  {
    group: "Testing",
    items: ["SpecFlow (BDD)", "Postman", "Integration Testing"],
  },
  {
    group: "Other",
    items: ["Python", "Rust", "Linux (Arch)", "Bash"],
  },
];

export const projects = [
  {
    name: "Offline e-Visitors' Book — INS Vikrant",
    org: "Indian Navy",
    description:
      "An offline-first kiosk system for the Indian Navy's aircraft carrier INS Vikrant, capturing handwritten visitor comments and photos without network access. Deployed on a Raspberry Pi and still in active use on-board.",
    stack: ["Flutter", "Raspberry Pi", "SQLite"],
    link: "https://ajce.in/cse/insvikrant.html",
    linkLabel: "Project page",
    highlight: "Real-world deployment for the Indian Navy — not a demo.",
  },
  {
    name: "ishowoff — VSCode Activity Visualizer",
    org: "Open source",
    description:
      "VSCode extension that tracks coding activity and generates an SVG visualization, auto-committed to a GitHub profile via GitHub Actions. JS extension talking to a Rust backend.",
    stack: ["JavaScript", "Rust", "GitHub Actions"],
    link: "https://github.com/parapsychic/ishowoff",
    linkLabel: "GitHub",
    highlight: "Cross-language: JS frontend, Rust backend.",
  },
];

export const education = {
  school: "Amal Jyothi College of Engineering",
  degree: "B.Tech in Computer Science and Engineering",
  period: "2019 – 2023",
  cgpa: "9.24 / 10",
};

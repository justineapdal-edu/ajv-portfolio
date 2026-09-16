export type WorkCategory = "web" | "design" | "video";

export interface WebProject {
  id: string;
  category: "web";
  title: string;
  description: string;
  year: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshot?: string;
  accent: [string, string];
}

export interface DesignProject {
  id: string;
  category: "design";
  title: string;
  kind: "Brand Identity" | "Social Media" | "Poster";
  aspect: "tall" | "square" | "wide";
  image?: string;
  accent: [string, string];
  blurb: string;
}

export interface VideoProject {
  id: string;
  category: "video";
  title: string;
  format: "Reel" | "Promo" | "Short";
  duration: string;
  thumbnail?: string;
  videoUrl?: string;
  tools: string[];
  accent: [string, string];
}

export type Project = WebProject | DesignProject | VideoProject;

export const workTabs = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Graphic Design" },
  { id: "video", label: "Video Editing" },
] as const;

export type WorkTabId = (typeof workTabs)[number]["id"];

export const webProjects: WebProject[] = [
  {
    id: "nexinta-landingpage",
    category: "web",
    title: "Nexinta Philippines — Website",
    description:
      "A real-time analytics platform with custom data visualization, role-based access, and sub-second dashboard loads.",
    year: "2026",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: "https://nexinta.ph",
    // githubUrl: "https://github.com/justineapdal/lumen",
    screenshot: "/screenshot/nexinta.png",
    accent: ["#3b82f6", "#8b5cf6"],
  },
  {
    id: "Sharplead-Medical-Website",
    category: "web",
    title: "Sharplead Medical — Website",
    description:
      "Headless commerce build with edge-rendered product pages, Stripe checkout, and a fully searchable catalog.",
    year: "2026",
    tags: ["Next.js", "Stripe", "Tailwind", "PostgreSQL"],
    liveUrl: "https://sharpleadmedical.com/",
    // githubUrl: "https://github.com/justineapdal/kinetiq",
    screenshot: "/screenshot/sharplead.png",
    accent: ["#10b981", "#22d3ee"],
  },
  {
    id: "pulse-agency",
    category: "web",
    title: "Casa Central — Real Estate Listing Website",
    description:
      "Editorial agency site with scroll-driven storytelling, WebGL accents, and obsessive attention to typography.",
    year: "2025",
    tags: ["React", "Framer Motion", "Tailwind"],
    liveUrl: "https://example.com/pulse",
    // githubUrl: "https://github.com/justineapdal/pulse",
    screenshot: "/screenshot/casa-central.png",
    accent: ["#f97316", "#ef4444"],
  },
  {
    id: "nomad-booking",
    category: "web",
    title: "Nomad — Booking Platform",
    description:
      "Booking and scheduling platform with calendar availability, real-time notifications, and PWA offline support.",
    year: "2024",
    tags: ["Next.js", "Node.js", "MongoDB", "PWA"],
    liveUrl: "https://example.com/nomad",
    githubUrl: "https://github.com/justineapdal/nomad",
    screenshot: "/screenshot/nexinta.png",
    accent: ["#8b5cf6", "#ec4899"],
  },
];

export const designProjects: DesignProject[] = [
  {
    id: "ora-coffee",
    category: "design",
    title: "Ora Coffee Co.",
    kind: "Brand Identity",
    aspect: "tall",
    image: "/image/ads-1.jpg",
    accent: ["#f472b6", "#c084fc"],
    blurb:
      "Full identity system — logo suite, packaging, and art direction for a specialty coffee roaster.",
  },
  {
    id: "velocity-fitness",
    category: "design",
    title: "Velocity Fitness",
    kind: "Social Media",
    aspect: "square",
    image: "/image/hdc-1.png",
    accent: ["#fbbf24", "#f87171"],
    blurb:
      "30-day social campaign kit: carousels, story templates, and a reusable content system.",
  },
  {
    id: "aurora-fest",
    category: "design",
    title: "Aurora Music Festival",
    kind: "Poster",
    aspect: "tall",
    image: "/image/novi-1.png",
    accent: ["#22d3ee", "#818cf8"],
    blurb:
      "High-contrast poster series translating electronic sound into bold geometric forms.",
  },
  {
    id: "nimbus-studio",
    category: "design",
    title: "Nimbus Studio",
    kind: "Brand Identity",
    aspect: "wide",
    image: "/image/hrm-1.png",
    accent: ["#34d399", "#14b8a6"],
    blurb:
      "Identity for a 3D animation studio — mark, motion, and a flexible color system.",
  },
  {
    id: "kapi-taproom",
    category: "design",
    title: "Kapi Taproom",
    kind: "Social Media",
    aspect: "square",
    image: "/image/hava-1.png",
    accent: ["#a855f7", "#6366f1"],
    blurb:
      "Launch campaign assets and menu design for a craft beer taproom opening.",
  },
  {
    id: "forma-print",
    category: "design",
    title: "Forma Print Series",
    kind: "Poster",
    aspect: "tall",
    image: "/image/poster-1.jpg",
    accent: ["#0ea5e9", "#38bdf8"],
    blurb:
      "Swiss-style print series exploring grid systems, halftones, and editorial rhythm.",
  },
];

export const videoProjects: VideoProject[] = [
  {
    id: "launch-reel",
    category: "video",
    title: "Product Launch Reel",
    format: "Reel",
    duration: "0:42",
    tools: ["Premiere Pro", "After Effects"],
    accent: ["#ef4444", "#f97316"],
  },
  {
    id: "brand-promo",
    category: "video",
    title: "Brand Promo Film",
    format: "Promo",
    duration: "1:12",
    tools: ["DaVinci Resolve", "After Effects"],
    accent: ["#22d3ee", "#818cf8"],
  },
  {
    id: "event-aftermovie",
    category: "video",
    title: "Event Aftermovie",
    format: "Short",
    duration: "2:05",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    accent: ["#ff0c0c", "#7f1d1d"],
  },
  {
    id: "motion-explainer",
    category: "video",
    title: "Motion Explainer",
    format: "Reel",
    duration: "0:58",
    tools: ["After Effects", "Premiere Pro"],
    accent: ["#a3e635", "#22c55e"],
  },
];

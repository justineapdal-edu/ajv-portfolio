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
  format: "Reel" | "Promo" | "Short" | "AVP";
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
      "A Website for a Software development company. The website features a clean and modern design, with a focus on showcasing the company's services and portfolio.",
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
      "A Website for a medical company. The website features a clean and modern design, with a focus on showcasing the company's services and products.",
    year: "2026",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
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
      "A Real Estate Listing Website for a real estate company. The website features a clean and modern design, with a focus on showcasing the company's properties and services.",
    year: "2025",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
    // liveUrl: "https://example.com/pulse",
    // githubUrl: "https://github.com/justineapdal/pulse",
    screenshot: "/screenshot/casa-central.png",
    accent: ["#f97316", "#ef4444"],
  },
  // {
  //   id: "nomad-booking",
  //   category: "web",
  //   title: "Nomad — Booking Platform",
  //   description:
  //     "Booking and scheduling platform with calendar availability, real-time notifications, and PWA offline support.",
  //   year: "2024",
  //   tags: ["Next.js", "Node.js", "MongoDB", "PWA"],
  //   liveUrl: "https://example.com/nomad",
  //   githubUrl: "https://github.com/justineapdal/nomad",
  //   screenshot: "/screenshot/nexinta.png",
  //   accent: ["#8b5cf6", "#ec4899"],
  // },
];

export const designProjects: DesignProject[] = [
  {
    id: "sportsclips-haircuts",
    category: "design",
    title: "Sportsclips Haircuts",
    kind: "Brand Identity",
    aspect: "tall",
    image: "/image/ads-1.jpg",
    accent: ["#f472b6", "#c084fc"],
    blurb:
      "Social Media Posting for Sportsclips Haircuts. The design features a vibrant color palette and playful typography to appeal to a younger audience.",
  },
  {
    id: "living-water-social-media",
    category: "design",
    title: "Living Water Social Media",
    kind: "Social Media",
    aspect: "square",
    image: "/image/hdc-1.png",
    accent: ["#fbbf24", "#f87171"],
    blurb:
      "Social Media campaign for a real estate agency. The design features a modern and clean aesthetic, with a focus on showcasing the properties and services offered by the agency.",
  },
  {
    id: "novidoma-design",
    category: "design",
    title: "Novidoma",
    kind: "Poster",
    aspect: "tall",
    image: "/image/novi-1.png",
    accent: ["#22d3ee", "#818cf8"],
    blurb:
      "Social Media campaign for a jewelry brand launch. The design features a modern and elegant aesthetic, with a focus on showcasing the brand's unique products.",
  },
  {
    id: "taylormade-hrm",
    category: "design",
    title: "Realty HRM - taylormade Poster",
    kind: "Brand Identity",
    aspect: "wide",
    image: "/image/hrm-1.png",
    accent: ["#34d399", "#14b8a6"],
    blurb:
      "A promotional poster for a real estate company. Featuring a clean and professional design and promotional offers.",
  },
  {
    id: "hava-poster",
    category: "design",
    title: "Havahills Promo Poster",
    kind: "Social Media",
    aspect: "square",
    image: "/image/hava-1.png",
    accent: ["#a855f7", "#6366f1"],
    blurb:
      "A promo campaign for a real estate development. The design features a bold and modern aesthetic, with a focus on showcasing promotional offers.",
  },
  {
    id: "hilom-poster",
    category: "design",
    title: "Hilom Poster",
    kind: "Poster",
    aspect: "tall",
    image: "/image/poster-1.jpg",
    accent: ["#0ea5e9", "#38bdf8"],
    blurb:
      "Short film poster for Aninag Film Festival.",
  },
];

export const videoProjects: VideoProject[] = [
  {
    id: "launch-reel",
    category: "video",
    title: "Video Editing Showreel",
    format: "Promo",
    duration: "0:47",
    thumbnail: "/thumbnail/showreel-thumbnail.png",
    videoUrl: "https://youtu.be/_Jnk7J0vFd0",
    tools: ["Premiere Pro"],
    accent: ["#ef4444", "#f97316"],
  },
  {
    id: "brand-promo",
    category: "video",
    title: "Shopee 6.6 Reel",
    format: "Reel",
    duration: "2:16",
    thumbnail: "/thumbnail/shopee-thumbnail.jpg",
    videoUrl: "https://youtube.com/shorts/9KvvK5VLzJE",
    tools: ["Premiere Pro"],
    accent: ["#22d3ee", "#818cf8"],
  },
  {
    id: "reel-proposal",
    category: "video",
    title: "Reel Proposal",
    format: "Reel",
    duration: "1:03",
    thumbnail: "/thumbnail/reel-redit-thumbnail.png",
    videoUrl: "https://youtube.com/shorts/IktDtykRzek",
    tools: ["Premiere Pro"],
    accent: ["#ff0c0c", "#7f1d1d"],
  },
  {
    id: "motion-explainer",
    category: "video",
    title: "Pastors Appreciation AVP",
    format: "AVP",
    duration: "1:48",
    thumbnail: "/thumbnail/pastors-appreciation-thumbnail.png",
    videoUrl: "https://youtu.be/O8Lsl6xiVJo",
    tools: ["After Effects", "Premiere Pro"],
    accent: ["#a3e635", "#22c55e"],
  },
];

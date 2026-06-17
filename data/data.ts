import { type ProjectData } from "@/types/type";

export const dummyProjects: ProjectData[] = [
   {
      slug: "ecosphere-analytics",
      title: "EcoSphere Analytics",
      description:
         "A real-time carbon footprint tracker and sustainability dashboard powered by AI to help SaaS companies optimize server emissions.",
      image: "/demo/ecosphere.png",
      tags: ["SaaS", "AI", "Sustainability"],
      visitUrl: "https://ecosphere-demo.io",
      githubUrl: "https://github.com/dev/ecosphere",
   },
   {
      slug: "synthmind-workspace",
      title: "SynthMind Workspace",
      description:
         "An intuitive collaborative workspace that utilizes autonomous AI agents to generate meeting notes, assign tasks, and draft project specifications.",
      image: "/demo/synthmind.png",
      tags: ["AI", "Productivity", "Next.js"],
      visitUrl: "https://synthmind.workspace",
      githubUrl: "https://github.com/dev/synthmind",
   },
   {
      slug: "jade-ledger",
      title: "Jade Ledger",
      description:
         "A high-throughput, secure financial automation API designed for modern fintech applications wanting transparent auditing trail integration.",
      image: "/demo/jadeledger.png",
      tags: ["Fintech", "Security", "Business"],
      visitUrl: "https://jadeledger.com",
      githubUrl: "https://github.com/dev/jade-ledger",
   },
   {
      slug: "devpulse-insights",
      title: "DevPulse Insights",
      description:
         "Monitor developer velocity, PR bottlenecks, and code health seamlessly without invasive trackers. Beautiful interactive canvas grids included.",
      image: "/demo/devpulse.png",
      tags: ["DevTools", "SaaS", "Tailwind"],
      visitUrl: "https://devpulse-insights.net",
      githubUrl: "https://github.com/dev/devpulse",
   },
   {
      slug: "verdant-commerce",
      title: "Verdant Commerce",
      description:
         "An ultra-fast, headless e-commerce template optimized for core web vitals featuring dynamic server components and edge state management.",
      image: "/demo/verdant.png",
      tags: ["E-Commerce", "Next.js", "Tailwind"],
      visitUrl: "https://verdant-shop.dev",
      githubUrl: "https://github.com/dev/verdant-commerce",
   },
   {
      slug: "apex-automation",
      title: "Apex Automation",
      description:
         "No-code workflow pipelines tailored for operational scaling. Create, schedule, and execute complex business logics natively on the web.",
      image: "/demo/apex.png",
      tags: ["No-Code", "Business", "Automation"],
      visitUrl: "https://apex-flows.com",
      githubUrl: "https://github.com/dev/apex-automation",
   },
];

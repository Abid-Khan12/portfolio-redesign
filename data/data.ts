import { type ProjectData } from "@/types/type";

import ProjectImage1 from "@/public/project-image1.png";
import ProjectImage2 from "@/public/project-image2.png";
import ProjectImage3 from "@/public/project-image3.png";

export const Projects: ProjectData[] = [
   {
      slug: "moon_ecommerce",
      title: "Moon Commerce",
      subTitle: "A premium, animated e-commerce storefront designed for high-end artisanal brands.",
      description:
         "An immersive, interactive storefront built to bring an artisanal ceramics brand to life online. By balancing micro-interactions with a clean layout, this platform seamlessly bridges the gap between high-end aesthetics and modern performance.",
      features: [
         "Fluid page transitions and dynamic reveal animations via Framer Motion",
         "High-performance, boilerplate-free global store with Zustand",
         "Fully responsive, pixel-perfect UI leveraging utility-first styling",
         "Smooth client-side navigation and protected checkout pipelines",
         "Reusable, highly scalable frontend component architecture",
         "Optimized states for cart additions, wishlists, and user sessions",
      ],
      learningOutcomes: [
         "Advanced UI animation principles and performance optimization",
         "Lightweight global state architecture without boilerplate friction",
         "Component-driven design systems paired with responsive layouts",
         "Declarative routing structures and dynamic checkout pipeline security",
         "Micro-interaction engineering to elevate brand prestige and feel",
         "Client-side state synchronization for fluid user experiences",
      ],
      techStack: [
         "React",
         "TypeScript",
         "Framer Motion",
         "Zustand",
         "Tailwind CSS",
         "React Router",
      ],
      image: ProjectImage1,
      tags: ["E-Commerce", "Framer Motion", "Zustand"],
      visitUrl: "https://moon-frontend.vercel.app",
      githubUrl: "https://github.com/Abid-Khan12/moon_e-commerce_frontend",
      isActive: true,
   },
   {
      slug: "taskly",
      title: "Taskly Dashboard",
      subTitle: "A modern productivity workspace equipped with real-time analytics and tracking.",
      description:
         "A sleek, intuitive task management application designed to simplify workflows. It combines a dynamic progress visualization panel with a thoughtfully styled user interface, turning everyday project metrics into clean, actionable updates.",
      features: [
         "Interactive charts displaying weekly progress metrics",
         "Real-time productivity scoring engine for tracking focus",
         "Sleek, fully responsive dark-mode dashboard workspace",
         "Smart task creation, categorizing, and monitoring structures",
         "State management optimized for high-frequency frontend updates",
         "Minimal, clutter-free UI primitives focused on layout clarity",
      ],
      learningOutcomes: [
         "Integration of complex data visualization libraries into layout trees",
         "Algorithm design for dynamic, real-time productivity score indexing",
         "Component lifecycle optimization for low-latency rendering cycles",
         "State optimization patterns tailored for high-scaling client builds",
         "Dark-mode interface composition utilizing tokenized theme rules",
         "Clean frontend architecture mapping directly to user activity metrics",
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand", "Recharts"],
      image: ProjectImage2,
      tags: ["Productivity", "Dashboard", "Recharts"],
      visitUrl: "https://taskly-olive.vercel.app",
      githubUrl: "https://github.com/Abid-Khan12/Taskly",
      isActive: true,
   },
   {
      slug: "positivus",
      title: "Positivus Landing",
      subTitle:
         "A pixel-perfect translation of a professional Figma design into a scalable codebase.",
      description:
         "A crisp, component-driven agency landing page built to demonstrate high-fidelity implementation of static design sheets. It resolves layout bottlenecks across viewports while enforcing centralized design token variables.",
      features: [
         "Component-driven layout structures built on top of robust base primitives",
         "Fluid, token-based spacing systems preventing container overflow errors",
         "Centralized theme configuration tokens governing multi-section color schemes",
         "Pixel-perfect translation of rich community-driven design layouts",
         "Responsive multi-breakpoint grid maps matching desktop assets",
         "Zero-drift color and typography synchronization across the codebase",
      ],
      learningOutcomes: [
         "Translating complex layout blueprints into reusable frontend code assets",
         "Advanced layout debugging across variable flex and grid dimensions",
         "Tokenized styling architecture implementation for reliable theme metrics",
         "Component abstraction practices enforcing absolute design uniformity",
         "Optimizing utility spacing variables to discard absolute pixel boundaries",
         "Code-base delivery pipeline engineering with absolute visual accuracy",
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS v4", "shadcn/ui", "CSS Variables"],
      image: ProjectImage3,
      tags: ["UI/UX", "Tailwind CSS", "TypeScript"],
      visitUrl: "https://positivus-rho-nine.vercel.app",
      githubUrl: "https://github.com/Abid-Khan12/Positivus",
      isActive: true,
   },
];

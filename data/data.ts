import type { SkillItem, ProjectData, BioSection, TimelineEntry } from "@/types/type";

import ProjectImage1 from "@/public/project-image1.png";
import ProjectImage2 from "@/public/project-image2.png";
import ProjectImage3 from "@/public/project-image3.png";
import {
   CssIcon,
   FramerMotionIcon,
   GithubIcon,
   HtmlIcon,
   JavaScriptIcon,
   LinkedInIcon,
   NextJsIcon,
   ReactIcon,
   ShadcnIcon,
   TailwindCssIcon,
   TanStackQueryIcon,
   TypeScriptIcon,
   XIcon,
   ZustandIcon,
} from "@/data/icons";

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

export const Skills: SkillItem[] = [
   { name: "HTML5", icon: HtmlIcon },
   { name: "CSS3", icon: CssIcon },
   { name: "JavaScript", icon: JavaScriptIcon },
   { name: "TypeScript", icon: TypeScriptIcon },
   { name: "React", icon: ReactIcon },
   { name: "Next.js", icon: NextJsIcon },
   { name: "Tailwind CSS", icon: TailwindCssIcon },
   { name: "shadcn/ui", icon: ShadcnIcon },
   { name: "Framer Motion", icon: FramerMotionIcon },
   { name: "Zustand", icon: ZustandIcon },
   { name: "React Query", icon: TanStackQueryIcon },
];

export const ProfessionalRoles: string[] = [
   "FRONTEND DEVELOPER",
   "UI/UX ENGINEER",
   "WEB TRENDS RESEARCHER",
];

export const HeaderBadges: string[] = [
   "React",
   "Next.js",
   "TypeScript",
   "Tailwind CSS",
   "shadcn/ui",
   "Zustand",
   "React Query",
];

export const PortfolioBio: BioSection[] = [
   {
      id: "who_i_am",
      title: "Who I Am",
      content:
         "Hello! I'm a frontend developer focused on building responsive, modern applications that bring clear interfaces to life. I emphasize performance optimization, cross-browser stability, and keeping the core user flow incredibly simple and intuitive.",
   },
   {
      id: "what_i_do",
      title: "What I Do",
      content:
         "I design and build lightweight, interactive frontend architectures. My goal is always to deliver pixel-perfect user experiences—less unnecessary complexity, more fluid engineering and stable, highly responsive products that scale effortlessly.",
   },
   {
      id: "my_journey",
      title: "My Journey",
      content:
         "I have dedicated my work to translating complex concepts into clean code layouts. From building highly scalable global state systems to designing sleek, dynamic component interactions using Framer Motion, I specialize in bringing high-fidelity designs into functional web reality.",
   },
   {
      id: "vision",
      title: "Vision",
      content:
         "Web development should be fluid, fast, and accessible. I strive to stay at the absolute forefront of modern frontend trends, creating intuitive systems where code architecture and high-end design perfectly align.",
   },
   {
      id: "beyond_code",
      title: "Beyond Code",
      content:
         "When I am not debugging layouts or profiling rendering performance, I am usually looking out for clean aesthetic design details, learning new web engineering patterns, or exploring modern UI design assets to push my front-end limits.",
   },
];

export const timelineData: TimelineEntry[] = [
   {
      title: "2024 - Present",
      role: "Founding Engineer • Freelance & Startup Ventures",
      subtitle: "Building High-Performance SaaS Applications",
      location: "Remote / Independent Project Cycles",
      iconType: "shield",
      isCurrent: true,
      accomplishments: [
         "Designing ultra-clean interfaces keeping core business user flows incredibly fast, simple, and responsive.",
         "Integrating AI automation capabilities utilizing the Gemini AI API pipelines for intelligent text-to-invoice parsing modules.",
         "Architecting safe client routing guardrails and session management ecosystems with Clerk authentication middleware.",
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand"],
   },
   {
      title: "2024 - 2025",
      role: "Frontend Developer Intern",
      subtitle: "Enterprise Web Solutions & Performance Optimization",
      location: "Collaborative Engineering Teams",
      iconType: "code",
      accomplishments: [
         "Assisted in building complex production code setups using vanilla JavaScript and basic React component matrices.",
         "Tested responsive layouts across multiple desktop and mobile viewpoints to maintain uniform styles and cross-browser stability.",
         "Refactored utility CSS parameters to remove absolute pixel boundaries, drastically accelerating visual loading weights.",
      ],
      skills: ["JavaScript", "React", "HTML5", "CSS3", "REST APIs", "Git"],
   },
   {
      title: "2023 - 2024",
      role: "Full-Stack Software Engineering Student",
      subtitle: "Saylani Mass IT Training (SMIT)",
      location: "Rigorous Foundations & Architecture Program",
      iconType: "edu",
      accomplishments: [
         "Mastered foundational programming paradigms with explicit training on structural JavaScript (ES6+), data flows, and algorithms.",
         "Built end-to-end full stack web platforms modeling complex backends using Express.js schemas and MongoDB collections.",
         "Gained deep production-readiness expertise including cloud deployment strategies, API routing designs, and state management.",
      ],
      skills: ["MERN Stack", "MongoDB", "Express.js", "Node.js", "JavaScript", "CSS Grid"],
   },
];

export const socialLinks = [
   {
      href: "https://x.com/Abid_Dev_X",
      icon: XIcon,
   },
   {
      href: "https://www.linkedin.com/in/abid-shah-khan",
      icon: LinkedInIcon,
   },
   {
      href: "https://github.com/Abid-Khan12",
      icon: GithubIcon,
   },
];

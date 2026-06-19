import { Metadata } from "next";

import AboutMeSection from "@/components/sections/aboutme-section";
// import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import SkillSection from "@/components/sections/skill-section";

export const metadata: Metadata = {
   title: "Abid Shah Khan | Frontend Developer",
   description:
      "Hi, I'm Abid Shah Khan — a Frontend Developer from Karachi building fast, scalable web apps with Next.js, React, and TypeScript.",
   openGraph: {
      title: "Abid Shah Khan | Frontend Developer",
      description:
         "Hi, I'm Abid Shah Khan — a Frontend Developer from Karachi building fast, scalable web apps with Next.js, React, and TypeScript.",
      url: "https://abid-khan-portfolio-ebon.vercel.app",
   },
   twitter: {
      title: "Abid Shah Khan | Frontend Developer",
      description:
         "Hi, I'm Abid Shah Khan — a Frontend Developer from Karachi building fast, scalable web apps with Next.js, React, and TypeScript.",
   },
};

function page() {
   return (
      <main className="h-full w-full flex flex-col gap-15 mb-10 pb-10 overflow-x-hidden">
         <HeroSection />
         <ProjectSection />
         <ExperienceSection />
         <SkillSection />
         <AboutMeSection />
         {/* <ContactSection /> */}
      </main>
   );
}

export default page;

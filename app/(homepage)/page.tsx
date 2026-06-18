import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import SkillSection from "@/components/sections/skill-section";

function page() {
   return (
      <main className="h-full w-full flex flex-col gap-10 mb-10 pb-10 overflow-x-hidden">
         <HeroSection />
         <ProjectSection />
         <SkillSection />
      </main>
   );
}

export default page;

import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";

function page() {
   return (
      <main className="flex flex-col gap-10 mb-10 overflow-hidden">
         <HeroSection />
         <ProjectSection />
      </main>
   );
}

export default page;

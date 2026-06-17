import ProjectCard from "@/components/project-card";
import { dummyProjects } from "@/data/data";

function ProjectSection() {
   return (
      <section className="px-4 w-full max-w-6xl mx-auto flex flex-col gap-10 max-lg:overflow-x-hidden">
         <div className="flex flex-col gap-2">
            <h2 className="md:text-5xl text-4xl font-semibold">Projects</h2>
            <p className="text-neutral-400 font-medium text-sm md:text-base">
               Playground - Small MVP to Production Apps
            </p>
         </div>
         <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
            {dummyProjects.map((project) => (
               <div key={project.slug}>
                  <ProjectCard project={project} />
               </div>
            ))}
         </div>
      </section>
   );
}

export default ProjectSection;

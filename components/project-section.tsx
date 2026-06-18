import { Projects } from "@/data/data";

import ProjectCard from "@/components/project-card";

function ProjectSection() {
   return (
      <section
         className="px-4 w-full max-w-6xl mx-auto flex flex-col gap-8 scroll-mt-20 pb-5"
         id="projects"
      >
         <div className="flex flex-col gap-3">
            <h2 className="md:text-5xl text-4xl font-semibold">Projects</h2>
            <p className="text-neutral-400 font-medium text-sm md:text-base">
               Playground - Small MVP to Production Apps
            </p>
         </div>
         <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
            {Projects.map((project) => (
               <div key={project.slug}>
                  <ProjectCard project={project} />
               </div>
            ))}
         </div>
      </section>
   );
}

export default ProjectSection;

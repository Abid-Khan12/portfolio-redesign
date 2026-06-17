"use client";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { ProjectData } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
   project: ProjectData;
}
function ProjectCard({ project }: ProjectCardProps) {
   const router = useRouter();
   return (
      <div onClick={() => router.push(project.slug)}>
         <FollowerPointerCard title={<TitleComponent />}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background transition duration-200 hover:shadow-xl">
               <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                     src={project.image}
                     alt={`${project.title} thumbnail`}
                     className="h-full transform object-cover transition duration-200 group-hover:scale-95"
                     sizes="100%"
                     fill
                     priority={false}
                  />
               </div>

               <div className="p-4 flex flex-col gap-4 justify-between">
                  <h2 className="text-lg font-bold line-clamp-1">{project.title}</h2>
                  <h2 className="text-sm font-medium text-neutral-400 line-clamp-2">
                     {project.description}
                  </h2>

                  {/* Dynamic Tag Rendering */}
                  {project.tags && project.tags.length > 0 && (
                     <div className="flex flex-wrap items-center gap-2 mt-2">
                        {project.tags.map((tag) => (
                           <span
                              key={tag}
                              className="bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 px-2.5 py-1 rounded-md inline-flex items-center justify-center text-xs font-semibold"
                           >
                              {tag}
                           </span>
                        ))}
                     </div>
                  )}

                  <div className="mt-8 flex border-t border-border items-center gap-3 pt-4">
                     <Link
                        href={project.visitUrl || "#"}
                        className="py-2 px-4 bg-emerald-600 rounded-lg text-white text-sm font-semibold hover:bg-emerald-500 transition-colors duration-100"
                     >
                        Visit
                     </Link>
                     <Link
                        href={project.githubUrl || "#"}
                        className="py-2 px-4 border border-border bg-zinc-900 rounded-lg text-sm font-semibold hover:bg-zinc-800 text-neutral-200 transition-colors duration-100"
                     >
                        Github
                     </Link>
                  </div>
               </div>
            </div>
         </FollowerPointerCard>
      </div>
   );
}

const TitleComponent = () => (
   <div className="flex items-center space-x-2">
      {/* <Image
         src={"/demo/ecosphere.png"}
         height="20"
         width="20"
         alt={`Abid's avatar`}
         className="rounded-full border-2 border-emerald-500"
      /> */}
      <p className="text-sm font-medium text-white">Abid Khan</p>
   </div>
);

export default ProjectCard;

"use client";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { ProjectData } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
   project: ProjectData;
}

function ProjectCard({ project }: ProjectCardProps) {
   const router = useRouter();

   return (
      <div onClick={() => router.push(project.slug)}>
         <FollowerPointerCard title={<TitleComponent title={project.title} />}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background/50 hover:bg-zinc-900 hover:border-zinc-700  hover:shadow-2xl hover:shadow-zinc-950/50 transition duration-200">
               <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                     src={project.image}
                     alt={`${project.slug}-thumbnail`}
                     className="h-full transform object-cover object-top transition duration-200 group-hover:scale-105"
                     sizes="100%"
                     fill
                     priority={false}
                  />
               </div>
               <div className="absolute top-3 right-3 z-10">
                  <span
                     className={cn(
                        "px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border inline-flex items-center gap-1.5 shadow-sm select-none",
                        project.isActive
                           ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                           : "bg-amber-500/10 text-amber-500 border-amber-500/20",
                     )}
                  >
                     <span
                        className={cn(
                           "h-1.5 w-1.5 rounded-full animate-pulse",
                           project.isActive ? "bg-emerald-400" : "bg-amber-500",
                        )}
                     />
                     {project.isActive ? "Active" : "Inactive"}
                  </span>
               </div>

               <div className="p-4 flex flex-col gap-4 justify-between">
                  <h2 className="text-lg font-bold line-clamp-1">{project.title}</h2>
                  <h2 className="text-sm font-medium text-neutral-400 line-clamp-2">
                     {project.subTitle}
                  </h2>

                  {project.tags && project.tags.length > 0 && (
                     <div className="flex flex-wrap items-center gap-2 mt-2">
                        {project.tags.map((tag) => (
                           <span
                              key={tag}
                              className="bg-zinc-800 text-neutral-400 px-2.5 py-1 rounded-md inline-flex items-center justify-center text-xs font-semibold"
                           >
                              {tag}
                           </span>
                        ))}
                     </div>
                  )}

                  <div className="mt-8 flex border-t border-border items-center gap-3 pt-4">
                     <Link
                        href={project.visitUrl || "#"}
                        target="_blank"
                        className="py-2 px-4 bg-emerald-600 rounded-lg text-white text-sm font-semibold hover:bg-emerald-500 transition-colors duration-100"
                        onClick={(e) => e.stopPropagation()}
                     >
                        Visit
                     </Link>
                     <Link
                        href={project.githubUrl || "#"}
                        target="_blank"
                        className="py-2 px-4 border border-border bg-zinc-900 rounded-lg text-sm font-semibold hover:bg-zinc-800 text-neutral-200 transition-colors duration-100"
                        onClick={(e) => e.stopPropagation()}
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

const TitleComponent = ({ title }: { title: string }) => (
   <div className="flex items-center space-x-2">
      <p className="text-sm font-medium text-white">{title}</p>
   </div>
);

export default ProjectCard;

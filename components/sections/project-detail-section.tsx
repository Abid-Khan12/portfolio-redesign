"use client";

import { type ProjectData } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { GithubIcon } from "@/data/icons";
import { ArrowLeft, ExternalLinkIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { ShootingStars } from "@/components/ui/shooting-star";
import { StarsBackground } from "@/components/ui/star-background";

function ProjectDetailSection({ project }: { project: ProjectData }) {
   const router = useRouter();
   return (
      <section className="space-y-10">
         <button
            className="group w-fit px-4 py-2 text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => router.back()}
         >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back to projects
         </button>
         <div className="flex flex-col gap-6">
            <div className="flex md:items-center items-start justify-between">
               <div className="flex flex-col gap-2">
                  <h1 className="font-bold md:text-5xl text-4xl">{project.title}</h1>
                  <p className="md:text-lg font-semibold text-neutral-400 max-md:leading-6">
                     {project.subTitle}
                  </p>
               </div>
               <span
                  className={cn(
                     "px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider backdrop-blur-md border inline-flex items-center gap-1.5 shadow-sm max-md:mt-2",
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
            {project.tags && project.tags.length > 0 && (
               <div className="flex flex-wrap items-center gap-4">
                  {project.tags.map((tag) => (
                     <span
                        key={tag}
                        className="bg-zinc-800 text-neutral-400 px-3 py-1 rounded-md inline-flex items-center justify-center text-sm font-semibold"
                     >
                        {tag}
                     </span>
                  ))}
               </div>
            )}
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
               <Image
                  src={project.image}
                  alt={`${project.slug}-thumbnail`}
                  className="h-full object-cover object-top"
                  sizes="100%"
                  fill
                  priority={false}
                  loading="eager"
               />
            </div>
            <div className="grid grid-cols-12 gap-6 mt-2">
               <div className="md:col-span-8 col-span-12 flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                     <h3 className="font-semibold md:text-2xl text-xl">Project Overview</h3>
                     <p className="font-medium text-sm text-neutral-400 leading-6 text-pretty">
                        {project.description}
                     </p>
                  </div>
                  <div className="flex flex-col gap-4">
                     <h3 className="font-semibold md:text-2xl text-xl">Key Features</h3>
                     <div className="grid lg:grid-cols-2 gap-4">
                        {project.features.map((feature, i) => (
                           <div
                              key={i}
                              className="flex items-start gap-2 px-2 py-4 border border-zinc-700 hover:border-zinc-500 rounded-md transition-colors"
                           >
                              <div className={"rounded-full bg-blue-500/10 p-1.5 mt-0.5"}>
                                 <div className="size-2 rounded-full bg-blue-500" />
                              </div>
                              <p className="md:text-sm text-xs text-pretty md:leading-5.5 leading-5 font-medium text-zinc-300">
                                 {feature}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="flex flex-col gap-4">
                     <h3 className="font-semibold md:text-2xl text-xl">Learning Outcomes</h3>
                     <div className="grid lg:grid-cols-2 gap-4">
                        {project.learningOutcomes.map((outcome, i) => (
                           <div
                              key={i}
                              className="flex items-start gap-2 px-2 py-4 rounded-md border border-zinc-700"
                           >
                              <div
                                 className={
                                    "flex size-6 items-center justify-center rounded-full bg-green-500/10 shrink-0"
                                 }
                              >
                                 <span className="text-xs font-medium text-green-400">{i + 1}</span>
                              </div>
                              <p className="md:text-sm text-xs text-pretty md:leading-5.5 leading-5 font-medium text-neutral-400">
                                 {outcome}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="md:col-span-4 col-span-12 flex flex-col gap-5">
                  <div className="rounded-md border border-zinc-800 bg-zinc-900/50 p-5 flex flex-col gap-5">
                     <h3 className="text-xl font-bold">Tech Stack</h3>
                     <div className="flex gap-2 gap-y-3 flex-wrap">
                        {project.techStack.map((stack, i) => (
                           <span
                              key={i}
                              className="rounded-md bg-zinc-800 px-2 py-1.5 text-sm font-medium text-neutral-400"
                           >
                              {stack}
                           </span>
                        ))}
                     </div>
                  </div>
                  <div className="rounded-md border border-zinc-800 bg-zinc-900/50 p-5 flex flex-col gap-5">
                     <h3 className="text-xl font-bold">Project Links</h3>
                     <div className="flex flex-col gap-4">
                        <Link
                           href={project.githubUrl}
                           target="_blank"
                           className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 p-3 transition-colors hover:border-zinc-700 text-neutral-400 hover:bg-zinc-800"
                        >
                           <GithubIcon className="fill-neutral-400 size-6" />
                           View Source Code
                        </Link>
                        <Link
                           href={project.githubUrl}
                           target="_blank"
                           className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 p-3 transition-colors hover:border-zinc-700 text-neutral-400 hover:bg-zinc-800"
                        >
                           <ExternalLinkIcon className="size-5.5" />
                           View Source Code
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ShootingStars />
         <StarsBackground />
      </section>
   );
}

export default ProjectDetailSection;

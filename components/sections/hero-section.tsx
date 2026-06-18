"use client";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { PointerHighlight } from "@/components/ui/pointer-highlighter";

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.15,
         delayChildren: 0.1,
      },
   },
} as const;

const itemVariants = {
   hidden: { opacity: 0, y: 15 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
   },
} as const;

export default function Hero() {
   return (
      <section className="relative min-h-175 w-full flex items-center justify-center overflow-hidden transition-colors duration-300 px-4">
         {/* Grid Background */}
         <div
            className={cn(
               "absolute inset-0",
               "bg-size-[40px_40px]",
               "[bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
               "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
         />
         {/* Radial gradient for the container to give a faded look */}
         <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

         {/* Dynamic Spotlight Component */}
         <Spotlight />

         {/* Content Layer */}
         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-start text-left max-w-4xl font-mono"
         >
            <motion.div
               variants={itemVariants}
               className="mb-4 flex items-center justify-start"
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-neutral-200 border border-neutral-800 bg-neutral-900 animate-fade-in">
                  {/* Multi-ring pulsing indicator */}
                  <span className="relative flex h-2 w-2">
                     {/* Outer expanding ring */}
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     {/* Middle soft pulse ring */}
                     <span className="absolute inline-flex rounded-full h-2 w-2 bg-emerald-500/50 animate-pulse scale-125"></span>
                     {/* Core solid dot */}
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for new opportunities
               </div>
            </motion.div>

            <motion.h1
               variants={itemVariants}
               className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white flex flex-wrap items-baseline gap-x-4 gap-y-3"
            >
               <span>Hey, I'm</span>
               <PointerHighlight pointerClassName="fill-emerald-500 stroke-emerald-500">
                  <span className="sm:px-2">Abid</span>
               </PointerHighlight>
            </motion.h1>

            <motion.h2
               variants={itemVariants}
               className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
            >
               <span>Frontend</span>
               <PointerHighlight pointerClassName="fill-emerald-500 stroke-emerald-500">
                  <span className="px-2">Developer</span>
               </PointerHighlight>
            </motion.h2>

            <motion.div
               variants={itemVariants}
               className="mt-8 flex flex-col gap-4 text-base sm:text-lg max-w-2xl tracking-wide font-mono"
            >
               <p className="text-lg sm:text-xl font-medium border-l-2 border-emerald-500 pl-4 py-1">
                  Frontend Developer transforming designs into highly performant web applications.
               </p>

               <div className="mt-2 flex flex-col gap-4 text-neutral-400 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                     <span className="text-emerald-500">➔</span>
                     <span>
                        Ex-Frontend Developer at{" "}
                        <span className="text-neutral-200 underline decoration-neutral-700 underline-offset-4 font-medium">
                           Intersys
                        </span>
                     </span>
                  </div>

                  <div className="flex items-center gap-2">
                     <span className="text-emerald-500">➔</span>
                     <span>
                        Slashed feature development and iteration times by{" "}
                        <strong className="text-emerald-400 font-semibold">20%</strong>
                     </span>
                  </div>
               </div>
            </motion.div>
         </motion.div>
      </section>
   );
}

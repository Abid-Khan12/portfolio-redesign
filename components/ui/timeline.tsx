"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { type TimelineEntry } from "@/types/type";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
   const ref = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);
   const [height, setHeight] = useState(0);

   useEffect(() => {
      if (ref.current) {
         const rect = ref.current.getBoundingClientRect();
         setHeight(rect.height);
      }
   }, [ref]);

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 20%", "end 50%"],
   });

   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

   return (
      <div
         className="w-full bg-white dark:bg-neutral-950"
         ref={containerRef}
      >
         <div
            ref={ref}
            className="relative max-w-6xl mx-auto pb-20"
         >
            {data.map((item, index) => (
               <TimelineItemRow
                  key={`timeline-row-${item.title.replace(/\s+/g, "-")}-${index}`}
                  item={item}
                  index={index}
               />
            ))}

            {/* FIXED: Exact absolute positioning to align line dead-center under the rings */}
            <div
               style={{ height: height + "px" }}
               className="absolute left-4 md:left-7.5 top-0 w-0.5"
            >
               <motion.div
                  style={{ height: heightTransform, opacity: opacityTransform }}
                  className="absolute inset-x-0 top-0 w-full bg-linear-to-b from-transparent via-emerald-500 to-green-500 rounded-full"
               />
            </div>
         </div>
      </div>
   );
};

const TimelineItemRow = ({ item, index }: { item: TimelineEntry; index: number }) => {
   const rowRef = useRef<HTMLDivElement>(null);
   const normalizedTitle = item.title.replace(/\s+/g, "-");

   const { scrollYProgress: rowProgress } = useScroll({
      target: rowRef,
      offset: ["start 40%", "end 50%"],
   });

   const innerDotBg = useTransform(
      rowProgress,
      [0, 0.1],
      ["rgba(38, 38, 38, 1)", "rgba(16, 185, 129, 1)"],
   );
   const innerDotBorder = useTransform(
      rowProgress,
      [0, 0.1],
      ["rgba(64, 64, 64, 1)", "rgba(52, 211, 153, 0.4)"],
   );
   const outerRingScale = useTransform(rowProgress, [0, 0.1, 0.8, 1], [1, 1.15, 1.15, 1]);
   const outerRingShadow = useTransform(
      rowProgress,
      [0, 0.1],
      ["0px 0px 0px rgba(16,185,129,0)", "0px 0px 15px rgba(16,185,129,0.25)"],
   );

   return (
      <div
         ref={rowRef}
         className="flex justify-start pt-10 md:pt-30 gap-4 md:gap-10"
      >
         {/* Left Milestone Indicator Ring Area */}
         <div className="sticky flex z-40 items-center top-40 self-start w-9 md:w-full md:max-w-xs lg:max-w-sm shrink-0">
            {/* FIXED: Explicit pixel-exact positioning coordinates centering the dot perfectly over the background line */}
            <motion.div
               style={{ scale: outerRingScale, boxShadow: outerRingShadow }}
               className="h-9 w-9 md:h-10 md:w-10 absolute left-0 md:left-2.75 z-50 rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-900 flex items-center justify-center transition-colors duration-200"
            >
               <motion.div
                  style={{ backgroundColor: innerDotBg, borderColor: innerDotBorder }}
                  className="h-3.5 w-3.5 md:h-4 md:w-4 rounded-full border p-2 transition-all"
               />
            </motion.div>

            {/* Desktop Only Floating Side Title Text */}
            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500">
               {item.title}
            </h3>
         </div>

         {/* Content Block Container */}
         <div className="relative pr-2 w-full overflow-hidden">
            {/* Mobile Only Header Title Badge */}
            <h3 className="md:hidden inline-block text-xs font-mono font-bold px-2 py-1 mb-3 rounded border border-neutral-800 bg-neutral-900/60 text-neutral-400">
               {item.title}
            </h3>

            <div className="space-y-4">
               {/* Identity Card Block */}
               <div className="flex items-start gap-3">
                  <div
                     className={`mt-1 p-2 border rounded-md shrink-0 ${
                        item.isCurrent
                           ? "bg-emerald-950/50 border-emerald-500/30 text-emerald-400"
                           : "bg-zinc-900 border-zinc-800 text-neutral-400"
                     }`}
                  >
                     {item.iconType === "shield" && (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                     )}
                     {item.iconType === "code" && (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <polyline points="16 18 22 12 16 6" />
                           <polyline points="8 6 2 12 8 18" />
                        </svg>
                     )}
                     {item.iconType === "edu" && (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                           <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                     )}
                  </div>
                  <div className="min-w-0">
                     <h3 className="text-sm font-bold text-neutral-100 md:text-lg wrap-break-word leading-tight">
                        {item.role}
                     </h3>
                     <p
                        className={`text-[11px] md:text-xs font-semibold tracking-wide uppercase mt-0.5 ${item.isCurrent ? "text-emerald-400" : "text-neutral-400"}`}
                     >
                        {item.subtitle}
                     </p>
                     <p className="text-[11px] md:text-xs text-neutral-500 mt-0.5">
                        {item.location}
                     </p>
                  </div>
               </div>

               {/* Accomplishments Bullet Points */}
               <ul className="space-y-2 pl-0.5 text-xs md:text-sm text-neutral-400 font-sans list-none">
                  {item.accomplishments.map((bullet, bulletIdx) => (
                     <li
                        key={`bullet-${normalizedTitle}-${bulletIdx}`}
                        className="flex items-start gap-2"
                     >
                        <span
                           className={`${item.isCurrent ? "text-emerald-500" : "text-neutral-600"} mt-1.5 text-[8px] shrink-0`}
                        >
                           •
                        </span>
                        <span className="leading-relaxed">{bullet}</span>
                     </li>
                  ))}
               </ul>

               {/* Tech Framework Badges */}
               <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((tech, techIdx) => (
                     <span
                        key={`badge-${normalizedTitle}-${techIdx}`}
                        className="px-2 py-0.5 text-[10px] md:text-xs font-mono rounded bg-neutral-900 border border-neutral-800 text-neutral-400 whitespace-nowrap"
                     >
                        {tech}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export const FollowerPointerCard = ({
   children,
   className,
   title,
}: {
   children: React.ReactNode;
   className?: string;
   title?: string | React.ReactNode;
}) => {
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   // Balanced physics config for a modern, tracking feel
   const springConfig = { damping: 30, stiffness: 450 };
   const translateX = useSpring(x, springConfig);
   const translateY = useSpring(y, springConfig);

   const ref = useRef<HTMLDivElement>(null);
   const [isInside, setIsInside] = useState<boolean>(false);
   const rectRef = useRef<DOMRect | null>(null);

   const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (ref.current) {
         const rect = ref.current.getBoundingClientRect();
         rectRef.current = rect;

         // Fixes the (0,0) top-left fly-in glitch instantly
         x.set(e.clientX - rect.left);
         y.set(e.clientY - rect.top);
      }
      setIsInside(true);
   };

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (rectRef.current) {
         x.set(e.clientX - rectRef.current.left);
         y.set(e.clientY - rectRef.current.top);
      }
   };

   const handleMouseLeave = () => {
      setIsInside(false);
      rectRef.current = null;
   };

   return (
      <div
         onMouseEnter={handleMouseEnter}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{ cursor: "none" }}
         ref={ref}
         className={cn("relative block", className)}
      >
         <AnimatePresence mode="wait">
            {isInside && (
               <FollowPointer
                  x={x}
                  y={y}
                  smoothX={translateX}
                  smoothY={translateY}
                  title={title}
               />
            )}
         </AnimatePresence>
         {children}
      </div>
   );
};

export const FollowPointer = ({
   x,
   y,
   smoothX,
   smoothY,
   title,
}: {
   x: any;
   y: any;
   smoothX: any;
   smoothY: any;
   title?: string | React.ReactNode;
}) => {
   const EMERALD_COLORS = ["#10b981", "#059669", "#047857", "#14b8a6", "#0d9488"];
   const colorRef = useRef(EMERALD_COLORS[Math.floor(Math.random() * EMERALD_COLORS.length)]);

   return (
      <motion.div
         className="absolute z-50 h-4 w-4 pointer-events-none"
         style={{
            top: smoothY,
            left: smoothX,
         }}
         initial={{
            scale: 0,
            opacity: 0,
            top: y.get(),
            left: x.get(),
         }}
         animate={{ scale: 1, opacity: 1 }}
         exit={{ scale: 0, opacity: 0 }}
         transition={{ duration: 0.12, ease: "easeOut" }}
      >
         <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 16 16"
            className="h-6 w-6 -translate-x-3 -translate-y-2 -rotate-70 transform stroke-emerald-500 text-emerald-500 drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
         </svg>

         <motion.div
            style={{ backgroundColor: colorRef.current }}
            className="min-w-max rounded-md px-2 py-1 text-xs whitespace-nowrap text-white font-medium shadow-md -translate-x-1"
         >
            {title || `Project`}
         </motion.div>
      </motion.div>
   );
};

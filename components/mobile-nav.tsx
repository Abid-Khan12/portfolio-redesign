"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BriefcaseBusiness, GraduationCap, HomeIcon, Mail, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const mobileNavLinks = [
   { href: "#", label: "Home", icon: HomeIcon },
   { href: "#projects", label: "Projects", icon: BriefcaseBusiness },
   { href: "#experience", label: "Experience", icon: GraduationCap },
   { href: "#about", label: "About", icon: User },
   { href: "#contact", label: "Contact", icon: Mail },
];

// Master layout animation configuration
const containerVariants = {
   open: {
      width: "calc(100vw - 2rem)", // Responsive expansion on mobile viewports
      opacity: 1,
      transition: {
         type: "spring",
         stiffness: 350,
         damping: 28,
      },
   },
   closed: {
      width: "56px", // Perfectly round container match for size-12 button + padding
      opacity: 0.5,
      transition: {
         type: "spring",
         stiffness: 350,
         damping: 28,
         delay: 0.05, // Let links fade out completely before the wrapper shrinks
      },
   },
} as const;

const trayVariants = {
   open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, delay: 0.1 },
   },
   closed: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.1 },
   },
};

function MobileNav({ currentHash }: { currentHash: string }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <motion.div
         initial="closed"
         animate={isOpen ? "open" : "closed"}
         variants={containerVariants}
         whileHover={{ opacity: 1 }}
         onClick={() => {
            if (!isOpen) setIsOpen(true);
         }}
         className={cn(
            "md:hidden fixed min-[321px]:top-4 top-2 left-4 h-10 bg-zinc-900 border border-zinc-800 rounded-full z-50 shadow-lg",
            "flex items-center overflow-hidden p-1 ps-2 select-none max-w-sm",
            !isOpen && "cursor-pointer",
         )}
      >
         {/* Absolute context wrapper to protect layout integrity */}
         <div className="relative w-full h-full flex items-center">
            {/* Toggle Action Button */}
            <button
               onClick={(e) => {
                  if (isOpen) {
                     e.stopPropagation(); // Prevents bubbling that would trigger parent open event
                     setIsOpen(false);
                  }
               }}
               className="size-10 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-100 transition-colors shrink-0 z-10 cursor-pointer"
               aria-label={isOpen ? "Close menu" : "Open menu"}
               aria-expanded={isOpen}
            >
               <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-center"
               >
                  {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
               </motion.div>
            </button>

            {/* Links Tray Layer */}
            <motion.div
               variants={trayVariants}
               className="absolute left-12 right-2 h-full flex items-center justify-around"
               style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
               {mobileNavLinks.map(({ href, icon: Icon, label }, i) => {
                  const isActive = currentHash === href;

                  return (
                     <Link
                        key={i}
                        href={href}
                        className={cn(
                           "relative flex items-center justify-center size-8 rounded-full text-zinc-400 transition-colors duration-200",
                           {
                              "text-zinc-900": isActive,
                           },
                        )}
                     >
                        <span className="sr-only">{label}</span>

                        {isActive && (
                           <motion.span
                              layoutId="activeMobileTab"
                              className="absolute inset-0 bg-white rounded-full -z-10"
                              transition={{
                                 type: "spring",
                                 stiffness: 380,
                                 damping: 30,
                              }}
                           />
                        )}

                        <Icon className="size-5 relative z-10" />
                     </Link>
                  );
               })}
            </motion.div>
         </div>
      </motion.div>
   );
}

export default MobileNav;

"use client";

import Link from "next/link";

import { GithubIcon, LinkedInIcon, XIcon } from "@/data/icons";
import { CircleUser } from "lucide-react";

import { useHash } from "@/hooks/use-hash";
import { cn } from "@/lib/utils";

import MobileNav from "./mobile-nav";

const navLinks = [
   {
      href: "#",
      label: "Home",
   },
   {
      href: "#projects",
      label: "Projects",
   },
   {
      href: "#experience",
      label: "Experience",
   },
   {
      href: "#skills",
      label: "Skills",
   },
   {
      href: "#about",
      label: "About",
   },
   {
      href: "#contact",
      label: "Contact",
   },
];

const socialLinks = [
   {
      href: "#",
      icon: XIcon,
   },
   {
      href: "#",
      icon: LinkedInIcon,
   },
   {
      href: "#",
      icon: GithubIcon,
   },
];

function Navbar() {
   const currentHash = useHash();

   return (
      <>
         <MobileNav currentHash={currentHash} />
         <header
            className={cn(
               "max-md:hidden sticky top-0 z-50 h-16 border-b backdrop-blur-sm supports-backdrop-filter:bg-zinc-900/50 border-border",
            )}
         >
            <nav className="h-full flex items-center justify-between w-full max-w-6xl mx-auto px-4 gap-2">
               <Link
                  href={"/"}
                  className="flex items-center gap-2"
               >
                  <CircleUser className="lg:size-10 size-8" />
                  <span className="font-semibold lg:text-base text-sm text-nowrap">Abid Khan</span>
               </Link>
               <div className="flex items-center gap-2">
                  {navLinks.map(({ href, label }) => {
                     const isActive = currentHash === href;

                     return (
                        <Link
                           key={label}
                           href={href}
                           className={cn(
                              "group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-zinc-700 px-4 py-1.5 lg:text-sm text-xs font-medium",
                              { "text-white border-emerald-500/80": isActive },
                           )}
                        >
                           {/* The text needs to be high z-index so it stays visible above the rising boxes */}
                           <span className="relative z-10">{label}</span>

                           {/* Background Container for the rising boxes */}
                           <div className="absolute inset-0 -z-10 flex h-full w-full items-end overflow-hidden">
                              {/* Box 1: Fastest/First */}
                              <span
                                 className={cn(
                                    "h-0 w-1/3 bg-emerald-500/80 transition-all duration-150 ease-out group-hover:h-full",
                                    { "h-full": isActive },
                                 )}
                              />

                              {/* Box 2: Mid speed / slight delay */}
                              <span
                                 className={cn(
                                    "h-0 w-1/3 bg-emerald-500/80 transition-all duration-200 delay-75 ease-out group-hover:h-full", // Note: duration-250 is not standard Tailwind, adjusted to 200
                                    { "h-full": isActive },
                                 )}
                              />

                              {/* Box 3: Slowest / seals the deal */}
                              <span
                                 className={cn(
                                    "h-0 w-1/4 grow bg-emerald-500/80 transition-all duration-300 delay-100 ease-out group-hover:h-full", // Note: duration-400 is not standard Tailwind, adjusted to 300
                                    { "h-full": isActive },
                                 )}
                              />
                           </div>
                        </Link>
                     );
                  })}
               </div>
               <div className="flex items-center lg:gap-5 gap-2">
                  {socialLinks.map(({ href, icon: Icon }, i) => (
                     <Link
                        key={i}
                        href={href}
                        target="_blank"
                        className="[&>svg]:fill-white/70 [&>svg]:hover:fill-emerald-500 [&>svg]:transition-colors"
                     >
                        <Icon />
                     </Link>
                  ))}
               </div>
            </nav>
         </header>
      </>
   );
}

export default Navbar;

"use client";

import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
import { LiveTime } from "@/components/live-time";
import { socialLinks } from "@/data/data";

export default function Footer() {
   return (
      <footer className="w-full border-t border-neutral-800 bg-zinc-950/40 backdrop-blur-md py-8">
         <div className="w-full max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left Box: Elegant Branding & Copyright Context */}
            <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
               <span className="text-4xl font-semibold text-neutral-200 tracking-wide">Abid</span>
               <span className="text-sm font-medium text-neutral-500">
                  © 2026 • All Rights Reserved
               </span>
            </div>

            {/* Right Box: Functional Modules, Links, and Clocks */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-8 gap-y-4 font-mono text-xs">
               {/* Reach Out Interaction Anchor */}
               {/* <Link
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors duration-150"
               >
                  <span>Reach out</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
               </Link> */}

               {/* Live Dynamic Clock Segment */}
               <LiveTime />

               {/* Separator Divider Pipe for Desktop Screen Sizes */}
               <div className="hidden sm:block h-4 w-px bg-neutral-800" />

               {/* Array Mapped Social Link Anchors Grid */}
               <div className="flex items-center gap-2">
                  {socialLinks.map((social, idx) => {
                     const Icon = social.icon;
                     return (
                        <Link
                           key={`footer-social-${idx}`}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="p-2 rounded-lg border border-neutral-800 bg-zinc-900/40 text-neutral-400 hover:text-emerald-400 hover:bg-zinc-900 hover:border-neutral-700 transition-all duration-150"
                        >
                           <Icon className="h-4 w-4" />
                        </Link>
                     );
                  })}
               </div>
            </div>
         </div>
      </footer>
   );
}

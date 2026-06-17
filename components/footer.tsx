import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LiveTime } from "@/components/live-time";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 backdrop-blur-sm supports-backdrop-filter:bg-zinc-900/50 py-4 space-y-2">
      <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-8 md:gap-4">
        <div className="min-[426px]:max-w-70 w-100 sm:max-w-85 md:max-w-100 -ml-2 md:-ml-4">
          <TextHoverEffect text="ABID" />
        </div>

        <div className="flex items-center justify-end gap-5 sm:gap-10 font-mono">
          <Link
            href="#contact"
            className="group flex items-center gap-2 text-sm sm:text-base text-neutral-400 hover:text-white transition-colors duration-200 max-md:hidden"
          >
            <span>Reach out</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200 ease-out text-neutral-500 group-hover:text-white">
              →
            </span>
          </Link>

          {/* Integrated Dynamic Clock Module */}
          <LiveTime />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <span className="font-medium text-neutral-400">
          Made by Abid | © 2026
        </span>
      </div>
    </footer>
  );
}

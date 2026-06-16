import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LiveTime } from "@/components/live-time";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-md py-6 transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-8 md:gap-4">
        <div className="w-full min-[426px]:max-w-70 max-w-full sm:max-w-85 md:max-w-100 -ml-2 md:-ml-4">
          <TextHoverEffect text="ABID" />
        </div>

        <div className="flex items-center justify-end gap-5 sm:gap-10 font-mono w-full">
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
    </footer>
  );
}

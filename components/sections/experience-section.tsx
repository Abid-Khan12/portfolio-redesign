import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data/data";

function ExperienceSection() {
   return (
      <section
         className="relative w-full max-w-6xl mx-auto scroll-mt-20 overflow-clip px-4"
         id="experience"
      >
         {/* Page Header elements directly matching the screenshot style */}
         <div className="mx-auto mb-6 space-y-4">
            <span className="px-3 py-1 text-xs font-sans font-medium tracking-wide rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400">
               Career Timeline
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl pt-2">
               Changelog from my journey
            </h1>
            <p className="max-w-2xl text-sm text-neutral-400 leading-relaxed">
               I have spent my time building products across multiple startup contexts and scaling
               core web applications. Here is a timeline view of my development history, milestones,
               and training background.
            </p>

            {/* Status Legend indicators */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs font-semibold text-neutral-400">
               <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Current Focus
               </span>
               <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                  AI Automation
               </span>
               <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Frontend Engineering
               </span>
               <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Early Career Foundations
               </span>
            </div>
         </div>

         <Timeline data={timelineData} />
      </section>
   );
}

export default ExperienceSection;

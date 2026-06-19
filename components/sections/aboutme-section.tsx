import { HeaderBadges, PortfolioBio, ProfessionalRoles } from "@/data/data";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

function AboutMeSection() {
   return (
      <section
         className="px-4 w-full max-w-6xl mx-auto scroll-mt-20 mt-10"
         id="about"
      >
         <BackgroundBeamsWithCollision className="pb-10 overflow-y-hidden">
            <div className="relative z-10">
               <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">Abid</h1>
               <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium tracking-wide text-neutral-400">
                  {ProfessionalRoles.map((role, i) => (
                     <div
                        key={i}
                        className="flex items-center"
                     >
                        {role}
                        {i !== ProfessionalRoles.length - 1 && (
                           <span className="ml-3 text-neutral-600">•</span>
                        )}
                     </div>
                  ))}
               </div>
               <div className="mt-8 flex flex-wrap gap-3">
                  {HeaderBadges.map((badge, i) => (
                     <span
                        key={i}
                        className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-neutral-400 transition-colors hover:border-zinc-700 hover:text-white"
                     >
                        {badge}
                     </span>
                  ))}
               </div>
               <div className="mt-16 space-y-12">
                  {PortfolioBio.map(({ content, id, title }) => (
                     <div key={id}>
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <p className="mt-4 leading-relaxed text-neutral-400">{content}</p>
                     </div>
                  ))}
               </div>
               {/* <div className="mt-16">
                  <Link
                     href={"#contact"}
                     className="rounded-lg bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200"
                  >
                     Get in Touch
                  </Link>
               </div> */}
            </div>
         </BackgroundBeamsWithCollision>
      </section>
   );
}

export default AboutMeSection;

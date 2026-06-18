import { CometCard } from "@/components/ui/comet-card";
import { Skills } from "@/data/data";

function SkillSection() {
   return (
      <section
         className="w-full max-w-6xl mx-auto flex flex-col gap-10 px-4 scroll-mt-20"
         id="skills"
      >
         <div className="flex flex-col gap-3">
            <h2 className="md:text-5xl text-4xl font-semibold">Skills</h2>
            <p className="text-neutral-400 font-medium text-sm md:text-base">
               Technologies I rely on to build smooth, clean interfaces.
            </p>
         </div>
         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
            {Skills.map(({ icon: Icon, name }) => (
               <CometCard key={name}>
                  <div className="group flex w-full items-center max-sm:justify-center gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900/30">
                     <Icon />
                     <h3 className="text-base font-medium text-zinc-100 truncate group-hover:text-zinc-50">
                        {name}
                     </h3>
                  </div>
               </CometCard>
            ))}
         </div>
      </section>
   );
}

export default SkillSection;

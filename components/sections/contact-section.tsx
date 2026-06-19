import { Boxes } from "@/components/ui/background-boxes";
import { SendHorizontal } from "lucide-react";

function ContactSection() {
   return (
      <section
         className="min-h-100 relative w-full max-w-6xl mx-auto overflow-hidden bg-background flex flex-col items-center justify-center scroll-mt-20 rounded-lg"
         id="contact"
      >
         <div className="absolute inset-0 w-full h-full bg-background z-20 mask-[radial-gradient(transparent,white)] pointer-events-none" />

         <Boxes />
         <div className="relative z-10 p-10">
            <div className="flex flex-col gap-3">
               <h2 className="md:text-5xl text-4xl font-semibold">Get in Touch</h2>

               <p className="text-neutral-400 font-medium text-sm md:text-base">
                  Have a project in mind or just want to say hi? I'd love to hear from you.
               </p>
            </div>
            <form className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8 mt-12">
               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="relative">
                     <input
                        type="text"
                        id="name"
                        required
                        className="peer w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4 outline-none transition-all placeholder:text-transparent focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600"
                     />
                     <label
                        htmlFor="name"
                        className="absolute left-4 peer-focus-within:-top-2.5 peer-focus-within:text-xs
                        peer-focus-within:bg-background peer-focus-within:text-zinc-400 peer-focus-within:px-2 transition-all top-4 text-zinc-500 rounded-full"
                     >
                        Name
                     </label>
                  </div>
                  <div className="relative">
                     <input
                        type="email"
                        id="email"
                        autoComplete="off"
                        required
                        className="peer w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4  outline-none transition-all placeholder:text-transparent focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600"
                     />
                     <label
                        htmlFor="email"
                        className="absolute left-4 peer-focus-within:-top-2.5 peer-focus-within:text-xs
                        peer-focus-within:bg-background peer-focus-within:text-zinc-400 peer-focus-within:px-2 transition-all top-4 text-zinc-500 rounded-full"
                     >
                        Email
                     </label>
                  </div>
               </div>
               <div className="relative">
                  <input
                     type="text"
                     id="subject"
                     required
                     className="peer w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4 outline-none transition-all placeholder:text-transparent focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600"
                  />
                  <label
                     htmlFor="subject"
                     className="absolute left-4 peer-focus-within:-top-2.5 peer-focus-within:text-xs
                        peer-focus-within:bg-background peer-focus-within:text-zinc-400 peer-focus-within:px-2 transition-all top-4 text-zinc-500 rounded-full"
                  >
                     Subject
                  </label>
               </div>
               <div className="relative">
                  <textarea
                     name="message"
                     id="message"
                     rows={6}
                     required
                     className="peer w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4 text-zinc-100 outline-none transition-all placeholder:text-transparent focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600"
                  ></textarea>
                  <label
                     htmlFor="message"
                     className="absolute left-4 peer-focus-within:-top-2.5 peer-focus-within:text-xs
                        peer-focus-within:bg-background peer-focus-within:text-zinc-400 peer-focus-within:px-2 transition-all top-4 text-zinc-500 rounded-full"
                  >
                     Message
                  </label>
               </div>
               <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-zinc-100 px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-zinc-100/10 active:scale-[0.98] md:w-auto cursor-pointer"
               >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                     Send Message
                     <SendHorizontal className="size-4" />
                  </span>
               </button>
            </form>
         </div>
      </section>
   );
}

export default ContactSection;

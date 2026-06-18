"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

function NotFound() {
   const router = useRouter();

   return (
      <main className="min-h-screen w-full bg-background flex flex-col justify-center items-center px-6 relative overflow-hidden select-none">
         {/* Subtle background typographic watermark */}
         <div className="absolute text-[24vw] font-black text-neutral-900/40 pointer-events-none select-none font-mono tracking-tighter leading-none z-0">
            404
         </div>

         <div className="relative z-10 flex flex-col items-center text-center max-w-md">
            {/* Semantic Header Group */}
            <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500 mb-3">
               Error Code 404
            </h1>

            <h2 className="text-4xl md:text-5xl font-black text-neutral-100 tracking-tight leading-none mb-4 font-sans">
               Lost in Space.
            </h2>

            <p className="text-sm font-medium text-neutral-400 leading-relaxed mb-10 max-w-[320px]">
               The page you are looking for doesn't exist, has been migrated, or dissolved into
               nothingness.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
               <button
                  onClick={() => router.back()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl border border-border bg-zinc-900 text-sm font-semibold text-neutral-200 hover:bg-zinc-800 hover:text-white hover:border-neutral-700 transition-all duration-150 cursor-pointer"
               >
                  <ArrowLeft
                     className="h-4 w-4"
                     strokeWidth={2.5}
                  />
                  Go Backward
               </button>

               <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-500 shadow-md shadow-emerald-950/20 transition-all duration-150 cursor-pointer"
               >
                  <Home
                     className="h-4 w-4"
                     strokeWidth={2.5}
                  />
                  Return Home
               </Link>
            </div>
         </div>
      </main>
   );
}

export default NotFound;

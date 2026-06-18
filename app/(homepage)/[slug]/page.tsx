import { notFound } from "next/navigation";

import { Projects } from "@/data/data";

import ProjectDetailSection from "@/components/project-detail-section";

async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;

   const project = Projects.find((item) => item.slug === slug);

   if (!project) {
      notFound();
   }

   return (
      <main className="w-full max-w-6xl mx-auto px-4 pt-5 min-h-svh mb-10">
         <ProjectDetailSection project={project} />
      </main>
   );
}

export default ProjectDetailPage;

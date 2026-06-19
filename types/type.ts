import { type StaticImageData } from "next/image";

export interface ProjectData {
   slug: string;
   title: string;
   subTitle: string;
   description: string;
   features: string[];
   learningOutcomes: string[];
   techStack: string[];
   image: StaticImageData;
   tags: string[];
   visitUrl: string;
   githubUrl: string;
   isActive: boolean;
}

export interface SkillItem {
   name: string;
   icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}

export interface BioSection {
   id: string;
   title: string;
   content: string;
}

export interface TimelineEntry {
   title: string;
   role: string;
   subtitle: string;
   location: string;
   iconType: "shield" | "code" | "edu";
   isCurrent?: boolean;
   accomplishments: string[];
   skills: string[];
}

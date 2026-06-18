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

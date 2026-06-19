import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
   preload: false,
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
   preload: false,
});

export const metadata: Metadata = {
   title: "Abid Shah Khan | Frontend Developer",
   description:
      "Frontend Developer based in Karachi, specializing in React, Next.js, TypeScript, scalable UI architecture, React Query, and modern web experiences.",
   keywords: [
      "Abid Shah Khan",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Portfolio",
      "Karachi",
   ],
   authors: [{ name: "Abid Shah Khan" }],
   creator: "Abid Shah Khan",
   metadataBase: new URL("https://abid-khan-portfolio.vercel.app"),
   openGraph: {
      title: "Abid Shah Khan | Frontend Developer",
      description:
         "Explore the portfolio of Abid Shah Khan, a Frontend Developer building scalable and high-performance web applications.",
      url: "https://abid-khan-portfolio.vercel.app",
      siteName: "Abid Portfolio",
      type: "website",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html
         lang="en"
         className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
         data-scroll-behavior="smooth"
      >
         <body>{children}</body>
      </html>
   );
}

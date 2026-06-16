"use client";

import { CircleUser } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useHash } from "@/hooks/use-hash";
import MobileNav from "./mobile-nav";

const navLinks = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#tools",
    label: "Tools",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#FFF"
    viewBox="0 0 18 18"
    id="Twitter-X--Streamline-Bootstrap"
    height="20"
    width="20"
  >
    <path
      d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
      strokeWidth="1"
    ></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    role="img"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    id="Linkedin--Streamline-Simple-Icons"
    height="20"
    width="20"
  >
    <title>LinkedIn</title>
    <path
      d="M13.631333333333332 13.634666666666668h-2.369333333333333v-3.7126666666666663c0 -0.8853333333333333 -0.018 -2.0246666666666666 -1.2346666666666666 -2.0246666666666666 -1.2353333333333332 0 -1.424 0.9633333333333334 -1.424 1.9593333333333334v3.7779999999999996H6.234V6h2.276v1.0406666666666666h0.030666666666666665c0.31799999999999995 -0.6 1.0913333333333333 -1.2333333333333334 2.2466666666666666 -1.2333333333333334 2.4006666666666665 0 2.844666666666667 1.58 2.844666666666667 3.6366666666666667v4.190666666666666zM3.558 4.955333333333333c-0.7626666666666666 0 -1.3753333333333333 -0.6173333333333333 -1.3753333333333333 -1.3766666666666665 0 -0.7586666666666666 0.6133333333333333 -1.3753333333333333 1.3753333333333333 -1.3753333333333333 0.7599999999999999 0 1.376 0.6166666666666667 1.376 1.3753333333333333 0 0.7593333333333333 -0.6166666666666667 1.3766666666666665 -1.376 1.3766666666666665zm1.188 8.679333333333332H2.37V6h2.376v7.634666666666666zM14.816666666666666 0H1.1806666666666665C0.528 0 0 0.516 0 1.1526666666666667v13.694666666666667C0 15.484666666666666 0.528 16 1.1806666666666665 16h13.634C15.466666666666665 16 16 15.484666666666666 16 14.847333333333333V1.1526666666666667C16 0.516 15.466666666666665 0 14.814666666666668 0h0.002z"
      strokeWidth="0.6667"
    ></path>
  </svg>
);

const GithubIcon = () => (
  <svg
    role="img"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    id="Github--Streamline-Simple-Icons"
    height="24"
    width="24"
  >
    <title>GitHub</title>
    <path
      d="M8 0.19799999999999998c-4.42 0 -8 3.582 -8 8 0 3.535333333333333 2.292 6.533333333333333 5.47 7.59 0.39999999999999997 0.07533333333333334 0.5466666666666666 -0.172 0.5466666666666666 -0.3846666666666666 0 -0.18999999999999997 -0.006666666666666666 -0.6933333333333334 -0.009999999999999998 -1.3599999999999999 -2.2253333333333334 0.48266666666666663 -2.6946666666666665 -1.0733333333333333 -2.6946666666666665 -1.0733333333333333C2.9479999999999995 12.046666666666667 2.4219999999999997 11.799999999999999 2.4219999999999997 11.799999999999999c-0.7246666666666666 -0.496 0.056 -0.486 0.056 -0.486 0.8033333333333333 0.056 1.2253333333333334 0.824 1.2253333333333334 0.824 0.7133333333333334 1.2233333333333332 1.8726666666666667 0.8699999999999999 2.33 0.6653333333333333 0.072 -0.5173333333333333 0.27799999999999997 -0.8699999999999999 0.5066666666666666 -1.0699999999999998 -1.7766666666666666 -0.19999999999999998 -3.644 -0.888 -3.644 -3.953333333333333 0 -0.8733333333333333 0.31 -1.5866666666666664 0.8233333333333334 -2.1466666666666665 -0.09 -0.20199999999999999 -0.36 -1.0153333333333332 0.06999999999999999 -2.1173333333333333 0 0 0.6699999999999999 -0.21466666666666667 2.1999999999999997 0.82 0.6399999999999999 -0.178 1.3199999999999998 -0.266 2 -0.27 0.6799999999999999 0.004 1.3599999999999999 0.092 2 0.27 1.5199999999999998 -1.0346666666666666 2.19 -0.82 2.19 -0.82 0.43 1.1019999999999999 0.15999999999999998 1.9153333333333333 0.07999999999999999 2.1173333333333333 0.51 0.5599999999999999 0.82 1.2733333333333332 0.82 2.1466666666666665 0 3.0733333333333333 -1.87 3.75 -3.6499999999999995 3.9466666666666663 0.27999999999999997 0.24 0.54 0.7306666666666667 0.54 1.48 0 1.0706666666666667 -0.009999999999999998 1.9306666666666665 -0.009999999999999998 2.1906666666666665 0 0.21 0.13999999999999999 0.45999999999999996 0.5499999999999999 0.37999999999999995C13.71 14.727999999999998 16 11.727999999999998 16 8.198c0 -4.417999999999999 -3.582 -8 -8 -8"
      strokeWidth="0.6667"
    ></path>
  </svg>
);

const socialLinks = [
  {
    href: "#",
    icon: XIcon,
  },
  {
    href: "#",
    icon: LinkedInIcon,
  },
  {
    href: "#",
    icon: GithubIcon,
  },
];

function Navbar() {
  const currentHash = useHash();

  return (
    <>
      <MobileNav currentHash={currentHash} />
      <header
        className={cn(
          "max-md:hidden sticky top-0 z-50 h-16 border-b backdrop-blur-sm supports-backdrop-filter:bg-zinc-900/50 border-border",
        )}
      >
        <nav className="h-full flex items-center justify-between w-full max-w-6xl mx-auto px-4 gap-2">
          <div className="flex items-center gap-2">
            <CircleUser className="lg:size-10 size-8" />
            <span className="font-semibold lg:text-base text-sm text-nowrap">
              Abid Khan
            </span>
          </div>
          <div className="flex items-center gap-2">
            {navLinks.map(({ href, label }) => {
              const isActive = currentHash === href;

              return (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-700 px-4 py-1.5 text-sm font-medium text-foreground duration-100 hover:text-zinc-900",
                    { "text-zinc-900 border-border": isActive },
                  )}
                >
                  {/* The text needs to be high z-index so it stays visible above the rising boxes */}
                  <span className="relative z-10">{label}</span>

                  {/* Background Container for the rising boxes */}
                  <div className="absolute inset-0 -z-10 flex h-full w-full items-end overflow-hidden">
                    {/* Box 1: Fastest/First */}
                    <span
                      className={cn(
                        "h-0 w-1/3 bg-white transition-all duration-150 ease-out group-hover:h-full",
                        { "h-full": isActive },
                      )}
                    />

                    {/* Box 2: Mid speed / slight delay */}
                    <span
                      className={cn(
                        "h-0 w-1/3 bg-white transition-all duration-200 delay-75 ease-out group-hover:h-full", // Note: duration-250 is not standard Tailwind, adjusted to 200
                        { "h-full": isActive },
                      )}
                    />

                    {/* Box 3: Slowest / seals the deal */}
                    <span
                      className={cn(
                        "h-0 w-1/4 grow bg-white transition-all duration-300 delay-100 ease-out group-hover:h-full", // Note: duration-400 is not standard Tailwind, adjusted to 300
                        { "h-full": isActive },
                      )}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center lg:gap-5 gap-2.5">
            {socialLinks.map(({ href, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="[&>svg]:fill-white/70 [&>svg]:hover:fill-white"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

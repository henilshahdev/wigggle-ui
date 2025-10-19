"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";

import HeaderLink from "@/components/header-link";
import { Icons } from "@/components/icons";

const links = [{ text: "Easing Classes", href: "/easings" }];

export default function SiteHeader() {
  const isMobile = useIsMobile();

  return (
    <header className="relative mb-14">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3">
        <div className="-mt-0.5 flex shrink-0 items-start gap-1.5 text-2xl font-semibold sm:text-xl">
          <Link
            href="/"
            className="text-foreground hover:text-muted-foreground"
            aria-label="Home"
          >
            Wigggle UI
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {!isMobile && (
            <>
              <div className="flex items-center gap-4 md:gap-13">
                {links.map((link) => (
                  <HeaderLink
                    key={link.href}
                    text={link.text}
                    href={link.href}
                  />
                ))}
              </div>
            </>
          )}
          <div className="flex items-center gap-2">
            <a
              href="https://x.com/henil106"
              className="text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex size-5 items-center justify-center rounded outline-none focus-visible:ring-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <Icons.GitHub />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

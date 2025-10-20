"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

import { Icons } from "@/components/icons";

export default function SiteHeader() {
  return (
    <header className="relative mb-14">
      <div className="flex justify-between gap-2 p-6 max-sm:flex-col max-sm:text-center">
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
          <div className="flex items-center gap-4">
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

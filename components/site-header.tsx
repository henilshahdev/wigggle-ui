import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

import { Icons } from "@/components/icons";
import { GitHubLink } from "@/components/github-link";

export default function SiteHeader() {
  return (
    <header className="relative mb-14">
      <div className="flex justify-between gap-2 p-6">
        <div className="-mt-0.5 flex shrink-0 items-start gap-1.5 text-2xl font-semibold sm:text-xl">
          <Link
            href="/"
            className="text-foreground hover:text-muted-foreground flex items-center justify-center gap-x-3"
            aria-label="Home"
          >
            <Icons.logo />
            Wigggle UI
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <GitHubLink />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

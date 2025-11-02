import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Showcase() {
  return (
    <section className="relative z-10 py-8">
      <div className="@container mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-6">
        <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
          Showcase
        </h2>
        <p className="text-muted-foreground text-lg">
          Using our widgets? Add your project to the showcase.
        </p>
        <div className="mx-auto w-max gap-x-3">
          <Button asChild>
            <Link
              href="https://github.com/wigggle-ui/ui/issues/new"
              target="_blank"
            >
              Add Project
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

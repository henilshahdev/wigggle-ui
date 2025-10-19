import Link from "next/link";

import CategoryCard from "@/components/category-card";
import { Button } from "@/components/ui/button";
import { categories } from "@/config/widgets";

export default function Home() {
  return (
    <div data-home>
      <h1 className="text-foreground mb-4 text-4xl/[1.1] font-semibold md:text-5xl/[1.1]">
        The first ever collection of <br /> Widgets for the Web.
      </h1>
      <p className="text-muted-foreground mb-8 text-lg">
        An open-source curated collection of copy-paste widgets for your next
        project.
      </p>

      <div className="flex items-center justify-start gap-x-3">
        <Button asChild size="sm">
          <Link href="/installation">Get Started</Link>
        </Button>
      </div>

      <div className="relative my-16">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories
            .sort((a, b) => {
              if (a.isNew && !b.isNew) return -1;
              if (!a.isNew && b.isNew) return 1;
              return 0;
            })
            .map((category) => (
              <CategoryCard
                key={category.slug}
                slug={category.slug}
                name={category.name}
                widgetCount={category.widgets.length}
                isNew={category.isNew}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

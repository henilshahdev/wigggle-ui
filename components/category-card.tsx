import Link from "next/link";

import { Badge } from "@/components/ui/badge";

type CategoryCardProps = {
  slug: string;
  name: string;
  widgetCount?: number;
  isNew?: boolean;
};

export default function CategoryCard({
  slug,
  name,
  widgetCount,
  isNew,
}: CategoryCardProps) {
  const href = `/widgets/${slug}`;

  return (
    <div className="space-y-2 text-center">
      <Link
        href={href}
        className="bg-background peer hover:bg-secondary relative mx-auto flex size-52 items-center justify-center overflow-hidden rounded-lg border sm:flex dark:border-zinc-700/80"
        tabIndex={-1}
      >
        {isNew && (
          <Badge className="absolute top-5 left-5 z-10" variant="success">
            New
          </Badge>
        )}
        <h2 className="text-foreground text-2xl/[1.1] font-semibold md:text-2xl/[1.1]">
          {name}
        </h2>
      </Link>
      <p className="text-muted-foreground">
        {widgetCount} {widgetCount === 1 ? "Widget" : "Widgets"}
      </p>
    </div>
  );
}

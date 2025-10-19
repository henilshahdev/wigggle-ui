import Link from "next/link";

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
  const href = `/${slug}`;

  return (
    <div className="space-y-2 text-center">
      <Link
        href={href}
        className="peer hover:bg-secondary relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg border sm:flex dark:border-zinc-700/80"
        tabIndex={-1}
      >
        <h2 className="text-foreground text-2xl/[1.1] font-semibold md:text-2xl/[1.1]">
          {name}
        </h2>
      </Link>
      <div className="[&_a]:peer-hover:underline">
        <p className="text-muted-foreground text-base">
          {widgetCount} {widgetCount === 1 ? "Widget" : "Widgets"}
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { LucideProps } from "lucide-react";
import { CardDecorator } from "./features";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type CategoryCardProps = {
  slug: string;
  name: string;
  widgetCount?: number;
  isNew?: boolean;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export default function CategoryCard(props: CategoryCardProps) {
  const href = `/widgets/${props.slug}`;

  return (
    <div className="space-y-2 text-center">
      <Link
        href={href}
        className="bg-background peer hover:bg-secondary relative mx-auto flex size-52 items-center justify-center overflow-hidden rounded-lg border sm:flex dark:border-zinc-700/80"
        tabIndex={-1}
      >
        {props.isNew && (
          <Badge className="absolute top-5 left-5 z-10" variant="success">
            New
          </Badge>
        )}
        <Badge
          className="absolute top-5 right-5 z-10 size-8 rounded-full text-sm"
          variant="secondary"
        >
          {props.widgetCount}
        </Badge>
        <div className="flex flex-col">
          <CardDecorator>
            <props.icon className="mx-auto size-full" strokeWidth={1.5} />
          </CardDecorator>
          <h2 className="text-foreground text-2xl/[1.1] font-semibold md:text-2xl/[1.1]">
            {props.name}
          </h2>
        </div>
      </Link>
    </div>
  );
}

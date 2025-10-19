import type { RegistryItem } from "shadcn/registry";

import { cn } from "@/registry/default/lib/utils";

export default function WidgetCard({
  children,
  widget,
  className,
}: {
  children: React.ReactNode;
  widget: RegistryItem;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group/item relative mx-auto border border-zinc-200 has-[[data-comp-loading=true]]:border-none dark:border-zinc-900",
        "col-span-12 sm:col-span-6 lg:col-span-3",
        className,
      )}
      data-slot={widget.name}
    >
      {children}
    </div>
  );
}

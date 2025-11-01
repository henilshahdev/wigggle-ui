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
  const getColSpanClasses = () => {
    if (widget.meta?.size === "md") {
      return "col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-4";
    } else if (widget.meta?.size === "lg") {
      return "col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6";
    } else {
      return "col-span-12 sm:col-span-6 lg:col-span-3";
    }
  };

  return (
    <div
      className={cn(
        "group/item relative mx-auto border-zinc-200 has-[[data-comp-loading=true]]:border-none dark:border-zinc-900",
        getColSpanClasses(),
        className,
      )}
      data-slot={widget.name}
    >
      {children}
    </div>
  );
}

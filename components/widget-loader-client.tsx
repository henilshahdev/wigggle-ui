"use client";

import { ComponentType } from "react";
import dynamic from "next/dynamic";
import { LoaderCircleIcon } from "lucide-react";
import type { RegistryItem } from "shadcn/registry";

interface WidgetLoaderProps {
  widget: RegistryItem;
}

export default function WidgetLoader<TProps extends object>({
  widget,
  ...props
}: WidgetLoaderProps & TProps) {
  if (!widget.files?.length) {
    return null;
  }
  const path = widget.files[0].path;
  const newPath = path.replace("registry/", "");
  const Widget = dynamic(
    () => import(`@/registry/${newPath}`).catch(() => () => null),
    {
      loading: () => (
        <div
          data-comp-loading="true"
          className="peer flex min-h-20 items-center justify-center"
        >
          <span className="sr-only">Loading widget...</span>
          <LoaderCircleIcon
            className="text-input -ms-1 animate-spin"
            size={24}
            aria-hidden="true"
          />
        </div>
      ),
      ssr: false,
    },
  ) as ComponentType<TProps>;

  return <Widget {...(props as TProps)} currentPage={1} totalPages={10} />;
}

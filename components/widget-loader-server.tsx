import { ComponentType } from "react";
import type { RegistryItem } from "shadcn/registry";

interface WidgetLoaderProps {
  widget: RegistryItem;
}

export default async function WidgetLoader<TProps extends object>({
  widget,
  ...props
}: WidgetLoaderProps & TProps) {
  if (!widget?.name) {
    return null;
  }

  try {
    const Widget = (await import(`@/registry/default/widgets/${widget.name}`))
      .default as ComponentType<TProps>;

    return <Widget {...(props as TProps)} currentPage={1} totalPages={10} />;
  } catch (error) {
    console.error(`Failed to load widget ${widget.name}:`, error);
    return null;
  }
}

import registry from "@/registry.json";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { RegistryItem } from "shadcn/registry";

const widgets = registry.items as unknown as RegistryItem[];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getWidgetsByNames = (names: string[]): RegistryItem[] => {
  const widgetsMap = new Map(widgets.map((widget) => [widget.name, widget]));

  return names
    .map((name) => widgetsMap.get(name))
    .filter((comp): comp is RegistryItem => comp !== undefined);
};

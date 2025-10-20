export interface WidgetCategory {
  slug: string;
  name: string;
  widgets: { name: string }[];
  isNew?: boolean;
}

export const categories: WidgetCategory[] = [
  {
    slug: "clock",
    name: "Clock",
    widgets: [
      { name: "widget-01" },
      { name: "widget-02" },
      { name: "widget-03" },
      { name: "widget-04" },
      { name: "widget-05" },
      { name: "widget-06" },
      { name: "widget-07" },
      { name: "widget-08" },
      { name: "widget-09" },
      { name: "widget-10" },
    ],
    isNew: true,
  },
  {
    slug: "weather",
    name: "Weather",
    widgets: [
      { name: "widget-11" },
      { name: "widget-12" },
      { name: "widget-13" },
      { name: "widget-14" },
      { name: "widget-15" },
      { name: "widget-16" },
    ],
    isNew: true,
  },
  {
    slug: "calendar",
    name: "Calendar",
    widgets: [{ name: "widget-17" }],
    isNew: true,
  },
];

export function getCategory(slug: string): WidgetCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

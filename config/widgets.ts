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
    ],
  },
];

export function getCategory(slug: string): WidgetCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

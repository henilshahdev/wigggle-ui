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
    widgets: [{ name: "clock-01" }, { name: "clock-02" }, { name: "clock-03" }],
  },
];

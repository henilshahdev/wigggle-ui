import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  LucideProps,
  CalendarIcon,
  Clock3Icon,
  TrophyIcon,
  ChartNoAxesCombinedIcon,
  CloudSunIcon,
} from "lucide-react";

export interface WidgetCategory {
  slug: string;
  name: string;
  widgets: { name: string }[];
  isNew?: boolean;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const categories: WidgetCategory[] = [
  {
    slug: "calendar",
    name: "Calendar",
    widgets: [
      { name: "calendar-01" },
      { name: "calendar-02" },
      { name: "calendar-03" },
      { name: "calendar-04" },
      { name: "calendar-05" },
    ],
    icon: CalendarIcon,
  },
  {
    slug: "clock",
    name: "Clock",
    widgets: [
      { name: "clock-01" },
      { name: "clock-02" },
      { name: "clock-03" },
      { name: "clock-04" },
      { name: "clock-05" },
      { name: "clock-06" },
      { name: "clock-07" },
      { name: "clock-08" },
      { name: "clock-09" },
      { name: "clock-10" },
      { name: "clock-11" },
      { name: "clock-12" },
      { name: "clock-13" },
    ],
    icon: Clock3Icon,
  },
  {
    slug: "sports",
    name: "Sports",
    widgets: [
      { name: "sports-01" },
      { name: "sports-02" },
      { name: "sports-03" },
      { name: "sports-04" },
      { name: "sports-05" },
      { name: "sports-06" },
      { name: "sports-07" },
    ],
    icon: TrophyIcon,
    isNew: true,
  },
  {
    slug: "stocks",
    name: "Stocks",
    widgets: [
      { name: "stock-01" },
      { name: "stock-02" },
      { name: "stock-03" },
      { name: "stock-04" },
      { name: "stock-05" },
      { name: "stock-06" },
    ],
    icon: ChartNoAxesCombinedIcon,
  },
  {
    slug: "weather",
    name: "Weather",
    widgets: [
      { name: "weather-01" },
      { name: "weather-02" },
      { name: "weather-03" },
      { name: "weather-04" },
      { name: "weather-05" },
      { name: "weather-06" },
      { name: "weather-07" },
      { name: "weather-08" },
      { name: "weather-09" },
    ],
    icon: CloudSunIcon,
  },
];

export function getCategory(slug: string): WidgetCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

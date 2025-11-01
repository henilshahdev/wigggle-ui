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
  widgets: {
    sm: {
      name: string;
    }[];
    md?: {
      name: string;
    }[];
    lg?: {
      name: string;
    }[];
  };
  isNew?: boolean;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const categories: WidgetCategory[] = [
  {
    slug: "calendar",
    name: "Calendar",
    widgets: {
      sm: [
        { name: "calendar-sm-01" },
        { name: "calendar-sm-02" },
        { name: "calendar-sm-03" },
        { name: "calendar-sm-04" },
        { name: "calendar-sm-05" },
      ],
      md: [{ name: "calendar-md-01" }, { name: "calendar-md-02" }],
      lg: [],
    },
    icon: CalendarIcon,
  },
  {
    slug: "clock",
    name: "Clock",
    widgets: {
      sm: [
        { name: "clock-sm-01" },
        { name: "clock-sm-02" },
        { name: "clock-sm-03" },
        { name: "clock-sm-04" },
        { name: "clock-sm-05" },
        { name: "clock-sm-06" },
        { name: "clock-sm-07" },
        { name: "clock-sm-08" },
        { name: "clock-sm-09" },
        { name: "clock-sm-10" },
        { name: "clock-sm-11" },
        { name: "clock-sm-12" },
        { name: "clock-sm-13" },
      ],
      md: [],
      lg: [],
    },
    icon: Clock3Icon,
  },
  {
    slug: "sports",
    name: "Sports",
    widgets: {
      sm: [
        { name: "sports-sm-01" },
        { name: "sports-sm-02" },
        { name: "sports-sm-03" },
        { name: "sports-sm-04" },
        { name: "sports-sm-05" },
        { name: "sports-sm-06" },
        { name: "sports-sm-07" },
      ],
      md: [],
      lg: [],
    },
    icon: TrophyIcon,
  },
  {
    slug: "stocks",
    name: "Stocks",
    widgets: {
      sm: [
        { name: "stock-sm-01" },
        { name: "stock-sm-02" },
        { name: "stock-sm-03" },
        { name: "stock-sm-04" },
        { name: "stock-sm-05" },
        { name: "stock-sm-06" },
      ],
      md: [],
      lg: [],
    },
    icon: ChartNoAxesCombinedIcon,
  },
  {
    slug: "weather",
    name: "Weather",
    widgets: {
      sm: [
        { name: "weather-sm-01" },
        { name: "weather-sm-02" },
        { name: "weather-sm-03" },
        { name: "weather-sm-04" },
        { name: "weather-sm-05" },
        { name: "weather-sm-06" },
        { name: "weather-sm-07" },
        { name: "weather-sm-08" },
        { name: "weather-sm-09" },
      ],
      md: [],
      lg: [],
    },
    icon: CloudSunIcon,
  },
];

export function getCategory(slug: string): WidgetCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

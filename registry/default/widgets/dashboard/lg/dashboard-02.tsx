"use client";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ActivityIcon,
  CalendarIcon,
  ClockIcon,
  StickyNoteIcon,
} from "lucide-react";

import {
  Widget,
  WidgetHeader,
  WidgetContent,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/default/ui/chart";

const orgOptions = ["wigggle-ui", "acme-inc"];

const acmeIncChartData = [
  { month: "January", desktop: 16 },
  { month: "February", desktop: 35 },
  { month: "March", desktop: 12 },
  { month: "April", desktop: 34 },
  { month: "May", desktop: 29 },
  { month: "June", desktop: 24 },
];
const acmeIncChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--destructive)",
  },
} satisfies ChartConfig;

const wigggleUIChartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const wigggleUIChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--productive)",
  },
} satisfies ChartConfig;

export default function WidgetDemo() {
  const [org, setOrg] = React.useState(orgOptions[0]);

  return (
    <Widget size="lg" className="gap-3">
      <WidgetHeader>
        <WidgetTitle className="text-2xl">Traffic Source</WidgetTitle>
        <Select
          onValueChange={(v) => setOrg(v)}
          defaultValue={orgOptions[0].toLowerCase()}
        >
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Organization" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {orgOptions.map((el, i) => (
                <SelectItem key={i} value={el.toLowerCase()}>
                  {el}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </WidgetHeader>
      <WidgetContent className="flex-col justify-start gap-4">
        <ChartContainer
          className="size-full max-h-32"
          config={
            org === "wigggle-ui" ? wigggleUIChartConfig : acmeIncChartConfig
          }
        >
          <AreaChart
            accessibilityLayer
            data={org === "wigggle-ui" ? wigggleUIChartData : acmeIncChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
        <div className="flex w-full flex-col items-center justify-center">
          <StatsItem
            icon={ActivityIcon}
            label="Bounce rate"
            value={org === "wigggle-ui" ? "37.07%" : "43.74%"}
          />
          <StatsItem
            icon={StickyNoteIcon}
            label="Pages per visit"
            value={org === "wigggle-ui" ? "36" : "19"}
          />
          <StatsItem
            icon={CalendarIcon}
            label="Monthly hits"
            value={org === "wigggle-ui" ? "689" : "184"}
          />
          <StatsItem
            icon={ClockIcon}
            label="Avg. time spent"
            value={org === "wigggle-ui" ? "00:07:43" : "00:03:57"}
          />
        </div>
      </WidgetContent>
    </Widget>
  );
}

type StatsItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
};

function StatsItem(item: StatsItemProps) {
  return (
    <div className="flex w-full items-center justify-between border-t-2 py-2.5 first:border-0">
      <div className="flex items-center justify-start gap-x-2">
        <item.icon className="stroke-muted-foreground size-4" />
        <Label className="font-light">{item.label}</Label>
      </div>
      <Label>{item.value}</Label>
    </div>
  );
}

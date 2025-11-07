"use client";

import { Pie, PieChart } from "recharts";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/default/ui/chart";
import { Label } from "@/registry/default/ui/label";

const chartData = [
  { device: "desktop", visitors: 275, fill: "var(--color-desktop)" },
  { device: "mobile", visitors: 187, fill: "var(--color-mobile)" },
];

const chartConfig = {
  devices: {
    label: "Devices",
  },
  desktop: {
    label: "Chrome",
    color: "var(--muted-foreground)",
  },
  mobile: {
    label: "Firefox",
    color: "var(--secondary-foreground)",
  },
} satisfies ChartConfig;

export default function WidgetDemo() {
  return (
    <Widget className="gap-0" design="mumbai">
      <WidgetHeader className="items-center">
        <WidgetTitle className="text-lg font-normal">Visitors</WidgetTitle>
        <WidgetTitle className="text-lg font-normal">462</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="-mt-2">
        <ChartContainer config={chartConfig} className="size-full">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" nameKey="device" />
          </PieChart>
        </ChartContainer>
      </WidgetContent>
      <WidgetFooter className="items-center">
        <div className="flex w-full items-center justify-center gap-1">
          <div className="bg-muted-foreground size-3 rounded-xs" />
          <Label className="font-normal">Desktop</Label>
        </div>
        <div className="flex w-full items-center justify-center gap-1">
          <div className="bg-secondary-foreground size-3 rounded-xs" />
          <Label className="font-normal">Mobile</Label>
        </div>
      </WidgetFooter>
    </Widget>
  );
}

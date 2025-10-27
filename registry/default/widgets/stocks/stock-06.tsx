"use client";

import React from "react";
import { Label, Pie, PieChart } from "recharts";
import { ChartNoAxesCombinedIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/default/ui/chart";

const chartData = [
  { category: "ecommerce", visitors: 12.72, fill: "var(--color-ecommerce)" },
  { category: "finance", visitors: 24.14, fill: "var(--color-finance)" },
  { category: "automobiles", visitors: 8.55, fill: "var(--color-automobiles)" },
  { category: "healthcare", visitors: 23.64, fill: "var(--color-healthcare)" },
  { category: "technology", visitors: 30.95, fill: "var(--color-technology)" },
];
const chartConfig = {
  ecommerce: {
    label: "E-Comm",
    color: "var(--chart-1)",
  },
  finance: {
    label: "Finance",
    color: "var(--chart-2)",
  },
  automobiles: {
    label: "Auto",
    color: "var(--chart-3)",
  },
  healthcare: {
    label: "Health",
    color: "var(--chart-4)",
  },
  technology: {
    label: "Tech",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetHeader className="items-center">
        <WidgetTitle className="text-base font-normal">Portfolio</WidgetTitle>
        <ChartNoAxesCombinedIcon className="size-5" />
      </WidgetHeader>
      <WidgetContent>
        <ChartContainer config={chartConfig} className="h-full w-full">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="category"
              innerRadius={35}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-lg font-semibold"
                        >
                          $1.2M
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </WidgetContent>
    </Widget>
  );
}

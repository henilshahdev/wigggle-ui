"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
} from "@/registry/default/ui/widget";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/registry/default/ui/table";

const dbInfo = [
  {
    label: "Database",
    value: "Neon Postgres",
  },
  {
    label: "Size",
    value: "128 MB",
  },
  {
    label: "Tables",
    value: "42",
  },
  {
    label: "Uptime",
    value: "3D 4H 21M",
  },
  {
    label: "QPS",
    value: "57",
  },
  {
    label: "Backup",
    value: "2025-11-06 02:13 UTC",
  },
];
import { ChartConfig, ChartContainer } from "@/registry/default/ui/chart";

const chartData = [
  { browser: "safari", visitors: 31, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function WidgetDemo() {
  return (
    <Widget design="mumbai" size="md" className="gap-3 pt-2">
      <WidgetContent className="justify-between gap-3">
        <div className="mt-2 flex h-full w-max flex-col items-center justify-center gap-3">
          <WidgetHeader className="bg-muted mx-auto w-max items-center justify-center rounded-md px-2 py-1">
            <p>wigggle_db</p>
          </WidgetHeader>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-full max-h-28 w-full"
          >
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={220}
              innerRadius={40}
              outerRadius={60}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[45, 36]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
                            y={(viewBox.cy || 0) - 6}
                            className="fill-foreground text-xl font-bold"
                          >
                            {chartData[0].visitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 10}
                            className="fill-muted-foreground"
                          >
                            MB used
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </div>
        <div className="h-full w-full">
          <Table>
            <TableBody>
              {dbInfo.map((el) => (
                <TableRow key={el.label}>
                  <TableCell className="text-muted-foreground py-1">
                    {el.label}
                  </TableCell>
                  <TableCell className="py-1 text-right">{el.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </WidgetContent>
    </Widget>
  );
}

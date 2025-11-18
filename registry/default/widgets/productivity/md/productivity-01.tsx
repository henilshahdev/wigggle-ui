import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label } from "@/registry/default/ui/label";
import { Icons } from "@/registry/default/ui/icons";

const chartData = [
  { time: "8 AM", instagram: 12, whatsapp: 8, x: 5 },
  { time: "9 AM", instagram: 25, whatsapp: 15, x: 18 },
  { time: "10 AM", instagram: 18, whatsapp: 12, x: 8 },
  {
    time: "11 AM",
    instagram: 22,
    whatsapp: 20,
    x: 15,
  },
  {
    time: "12 PM",
    instagram: 35,
    whatsapp: 28,
    x: 22,
  },
  { time: "1 PM", instagram: 28, whatsapp: 18, x: 16 },
  {
    time: "2 PM",
    instagram: 32,
    whatsapp: 22,
    x: 20,
  },
  {
    time: "3 PM",
    instagram: 38,
    whatsapp: 25,
    x: 28,
  },
  {
    time: "4 PM",
    instagram: 42,
    whatsapp: 30,
    x: 32,
  },
  {
    time: "5 PM",
    instagram: 48,
    whatsapp: 35,
    x: 38,
  },
  {
    time: "6 PM",
    instagram: 52,
    whatsapp: 40,
    x: 42,
  },
];

const chartConfig = {
  instagram: {
    label: "Instagram",
    color: "var(--chart-1)",
  },
  whatsapp: {
    label: "WhatsApp",
    color: "var(--chart-2)",
  },
  x: {
    label: "X",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export default function WidgetDemo() {
  return (
    <Widget design="mumbai" size="md" className="p-0">
      <WidgetContent className="items-center justify-between gap-5">
        <div className="flex size-full items-center justify-between">
          <div className="mx-auto flex size-full flex-col items-center justify-center gap-6 border-e-2 px-1.5 py-3">
            <div className="flex items-center justify-between gap-2">
              <Icons.instaram className="size-4.5" />
              <Label>21m</Label>
            </div>
            <div className="flex items-center gap-2">
              <Icons.whatsapp className="size-4.5" />
              <Label>21m</Label>
            </div>
            <div className="flex items-center gap-2.5">
              <Icons.X className="size-4" />
              <Label>21m</Label>
            </div>
          </div>
          <ChartContainer
            className="size-full max-w-72 flex-1 px-4 py-2"
            config={chartConfig}
          >
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="time"
                tickLine={true}
                tickMargin={12}
                tick={{ fill: "hsl(var(--color-foreground))" }}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Bar
                dataKey="instagram"
                stackId="a"
                fill="var(--color-instagram)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="whatsapp"
                stackId="a"
                fill="var(--color-whatsapp)"
              />
              <Bar
                dataKey="x"
                stackId="a"
                fill="var(--color-x)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </WidgetContent>
    </Widget>
  );
}

import { DotIcon, GlobeIcon, MonitorIcon, UploadIcon } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Widget,
  WidgetHeader,
  WidgetContent,
  WidgetTitle,
  WidgetFooter,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/default/ui/chart";
import { Button } from "@/registry/default/ui/button";

const visitorsByTrafficChartData = [
  { medium: "direct", visitors: 1578, fill: "var(--color-direct)" },
  { medium: "search", visitors: 908, fill: "var(--color-search)" },
  { medium: "referrals", visitors: 789, fill: "var(--color-referrals)" },
  { medium: "socials", visitors: 671, fill: "var(--color-socials)" },
];

const chartConfig = {
  mediums: {
    label: "Mediums",
  },
  direct: {
    label: "Direct",
    color: "var(--vercel-purple)",
  },
  search: {
    label: "Search",
    color: "var(--vercel-pink)",
  },
  referrals: {
    label: "Referrals",
    color: "var(--vercel-yellow)",
  },
  socials: {
    label: "Socials",
    color: "var(--vercel-blue)",
  },
} satisfies ChartConfig;

export default function WidgetDemo() {
  return (
    <Widget design="mumbai" size="lg" className="gap-2">
      <WidgetHeader>
        <WidgetTitle className="text-2xl">Traffic Source</WidgetTitle>
        <WidgetTitle className="text-2xl">3946</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="flex-col justify-start gap-4">
        <div className="flex w-full items-center justify-start">
          <div className="flex items-center space-x-1">
            <GlobeIcon className="stroke-muted-foreground size-4" />
            <Label className="text-muted-foreground">Worldwide</Label>
          </div>
          <DotIcon className="stroke-muted-foreground/40" />
          <div className="flex items-center space-x-1">
            <MonitorIcon className="stroke-muted-foreground size-4" />
            <Label className="text-muted-foreground">Desktop</Label>
          </div>
        </div>
        <ChartContainer config={chartConfig} className="size-full max-h-44">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={visitorsByTrafficChartData}
              dataKey="visitors"
              nameKey="medium"
            />
          </PieChart>
        </ChartContainer>
      </WidgetContent>
      <WidgetFooter className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-center gap-6">
          <div className="flex items-center space-x-1.5">
            <div className="bg-vercel-purple size-2.5 rounded-full" />
            <Label className="text-muted-foreground text-sm">Direct</Label>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="bg-vercel-pink size-2.5 rounded-full" />
            <Label className="text-muted-foreground text-sm">Search</Label>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="bg-vercel-yellow size-2.5 rounded-full" />
            <Label className="text-muted-foreground text-sm">Referrals</Label>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="bg-vercel-blue size-2.5 rounded-full" />
            <Label className="text-muted-foreground text-sm">Socials</Label>
          </div>
        </div>
        <Button className="w-full" variant="outline">
          <UploadIcon /> Export
        </Button>
      </WidgetFooter>
    </Widget>
  );
}

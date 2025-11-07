import {
  Widget,
  WidgetHeader,
  WidgetContent,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";
import { cn } from "@/registry/default/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

const visitorsChartData = [
  { percentage: "40", color: "bg-blue-500" },
  { percentage: "23", color: "bg-yellow-500" },
  { percentage: "20", color: "bg-red-500" },
  { percentage: "17", color: "bg-green-500" },
];

const visitorsByDeviceChartData = [
  { device: "MacOS", count: 1578, color: "bg-blue-500" },
  { device: "iOS", count: 908, color: "bg-yellow-500" },
  { device: "Windows", count: 789, color: "bg-red-500" },
  { device: "Android", count: 671, color: "bg-green-500" },
];

export default function WidgetDemo() {
  return (
    <Widget className="gap-4" design="mumbai">
      <WidgetHeader>
        <WidgetTitle>Visitors</WidgetTitle>
        <WidgetTitle>3946</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="flex-col justify-start gap-4">
        <div className="flex h-5 w-full">
          {visitorsChartData.map((el, i) => (
            <Tooltip key={i} delayDuration={300}>
              <TooltipTrigger asChild>
                <div
                  style={{ width: `${el.percentage}%` }}
                  className={cn(
                    el.color,
                    "h-full transition-all duration-300 first:rounded-l-full last:rounded-r-full hover:scale-115 hover:cursor-pointer",
                  )}
                />
              </TooltipTrigger>
              <TooltipContent className="text-foreground px-2 py-1 text-sm">
                {el.percentage}%
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="w-full space-y-3">
          {visitorsByDeviceChartData.map((el) => (
            <div
              key={el.device}
              className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-2.5"
            >
              <div className={cn("size-3 rounded-xs", `${el.color}`)} />
              <Label>{el.device}</Label>
              <Label>{el.count}</Label>
            </div>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}

import {
  Widget,
  WidgetHeader,
  WidgetTitle,
  WidgetContent,
} from "@/registry/default/ui/widget";
import { Separator } from "@/registry/default/ui/separator";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/registry/default/ui/tooltip";
import { Label } from "@/registry/default/ui/label";
import { cn } from "@/registry/default/lib/utils";

const now = new Date();
const month = now.toLocaleString("en-US", { month: "short" });
const year = now.getFullYear();
const dayInitials = ["S", "M", "T", "W", "T", "F", "S"];

const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
const firstDay = new Date(year, now.getMonth(), 1).getDay();

const tasks = Array.from({ length: daysInMonth }, () =>
  Math.floor(Math.random() * 5),
);

const totalTasks = tasks.reduce((a, b) => a + b, 0);

const taskColor = (level: number | null) =>
  level === null
    ? "bg-transparent"
    : [
        "bg-muted-foreground/20",
        "bg-muted-foreground/40",
        "bg-muted-foreground/60",
        "bg-muted-foreground/80",
        "bg-muted-foreground",
      ][Math.min(level, 4)];

export default function WidgetDemo() {
  return (
    <Widget className="gap-1 p-3" design="mumbai">
      <WidgetHeader className="justify-between px-1">
        <WidgetTitle className="font-normal">{`${month} ${year}`}</WidgetTitle>
        <WidgetTitle className="font-normal">{totalTasks}</WidgetTitle>
      </WidgetHeader>
      <Separator className="h-0.5 rounded-full" />
      <WidgetContent>
        <div className="grid size-full grid-cols-7 gap-1 text-center">
          {dayInitials.map((d, i) => (
            <div key={i} className="text-xs">
              {d}
            </div>
          ))}

          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`f-${i}`} className="text-xs">
              &nbsp;
            </div>
          ))}
          {tasks.map((count, i) => (
            <Tooltip key={i} delayDuration={300}>
              <TooltipTrigger asChild>
                <div className="m-auto flex size-3 items-center justify-center">
                  <div
                    className={cn(
                      "size-3 rounded-xs transition-all duration-300 hover:scale-125 hover:cursor-pointer",
                      taskColor(count),
                    )}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="flex gap-1">
                <Label className="font-normal">
                  {count} task{count !== 1 ? "s" : ""}
                </Label>
                <Label className="font-normal">on</Label>
                <Label className="font-normal">{`${i + 1} ${month}`}</Label>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}

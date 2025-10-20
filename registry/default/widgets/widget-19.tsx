import * as React from "react";
import {
  Widget,
  WidgetHeader,
  WidgetTitle,
  WidgetContent,
} from "@/registry/default/ui/widget";
import { Badge } from "@/registry/default/ui/badge";
import { Separator } from "@/registry/default/ui/separator";

export default function WidgetDemo() {
  const now = new Date();

  const month = now.toLocaleString("en-US", { month: "long" });
  const year = now.getFullYear();
  const date = now.getDate();

  const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, now.getMonth(), 1).getDay();

  const fillerDays = Array(firstDayOfMonth).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <Widget className="gap-2" design="mumbai">
      <WidgetHeader className="justify-center">
        <WidgetTitle>
          {month} {year}
        </WidgetTitle>
      </WidgetHeader>
      <Separator className="h-0.5 rounded-full" />
      <WidgetContent>
        <div className="grid size-full grid-cols-7 gap-1 text-center">
          {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
            <div key={d} className="text-xs">
              {d}
            </div>
          ))}

          {fillerDays.map((_, i) => (
            <div key={`filler-${i}`} className="text-xs">
              &nbsp;
            </div>
          ))}

          {days.map((d) => (
            <div key={d} className="text-muted-foreground text-xs">
              {d === date ? (
                <Badge className="flex size-4 items-center justify-center p-2">
                  {d}
                </Badge>
              ) : (
                d
              )}
            </div>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}

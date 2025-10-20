"use client";

import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function WidgetDemo() {
  const [date, setDate] = useState(new Date());
  const { getFullYear: y, getMonth: m } = date;
  const [year, month] = [y.call(date), m.call(date)];

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
  }, [year, month]);

  const changeMonth = (step: number) =>
    setDate((d) => new Date(d.getFullYear(), d.getMonth() + step, 1));

  const isToday = (day: number | null) =>
    day &&
    new Date(year, month, day).toDateString() === new Date().toDateString();

  const monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    new Date(year, month),
  );
  const days = Array.from(
    { length: 7 },
    (_, i) =>
      new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
        new Date(2025, 0, i + 4),
      )[0],
  );

  return (
    <Widget className="gap-2" design="mumbai">
      <WidgetHeader>
        <Button
          variant="ghost"
          size="icon"
          className="size-4 p-0 hover:cursor-pointer"
          onClick={() => changeMonth(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <WidgetTitle>
          {monthName} {year}
        </WidgetTitle>
        <Button
          variant="ghost"
          size="icon"
          className="size-4 p-0 hover:cursor-pointer"
          onClick={() => changeMonth(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </WidgetHeader>
      <Separator className="h-0.5 rounded-full" />
      <WidgetContent>
        <div className="grid size-full grid-cols-7 gap-1 text-center">
          {days.map((d) => (
            <div key={d} className="text-xs">
              {d}
            </div>
          ))}
          {calendarDays.map((d, i) => (
            <div key={i} className="text-muted-foreground text-xs">
              {d && isToday(d) ? (
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

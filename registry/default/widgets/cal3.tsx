"use client";

import React, { useState, useMemo } from "react";
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/components/ui/widget";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export default function Calendar03() {
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();

  const calendarDays = useMemo(() => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return Array(firstDayOfMonth)
      .fill(null)
      .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  }, [year, month]);

  const changeMonth = (increment: number) =>
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + increment);
      return newDate;
    });

  const isToday = (day: number | null) => {
    if (day === null) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  return (
    <Widget className="gap-2" design="mumbai">
      <WidgetHeader>
        <Button
          variant="ghost"
          size="icon"
          className="size-4 p-0"
          onClick={() => changeMonth(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <WidgetTitle>
          {MONTH_NAMES[month]} {year}
        </WidgetTitle>
        <Button
          variant="ghost"
          size="icon"
          className="size-4 p-0"
          onClick={() => changeMonth(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </WidgetHeader>
      <Separator className="h-0.5 rounded-full" />
      <WidgetContent>
        <div className="grid size-full grid-cols-7 gap-1 text-center">
          {DAYS.map((day) => (
            <div key={day} className="text-xs">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div key={index} className="text-muted-foreground text-xs">
              {day && isToday(day) ? (
                <Badge className="flex size-4 items-center justify-center p-2">
                  {day}
                </Badge>
              ) : (
                day
              )}
            </div>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}

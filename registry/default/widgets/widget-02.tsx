"use client";

import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";

export default function WidgetDemo() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[time.getDay()];

  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  return (
    <Widget>
      <WidgetContent className="flex-col gap-2">
        <WidgetHeader>
          <WidgetTitle className="text-2xl">{day}</WidgetTitle>
        </WidgetHeader>
        <WidgetTitle className="text-5xl tracking-widest">
          {hours}:{minutes}
        </WidgetTitle>
      </WidgetContent>
    </Widget>
  );
}

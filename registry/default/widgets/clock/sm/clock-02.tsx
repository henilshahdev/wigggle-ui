"use client";

import * as React from "react";
import {
  Widget,
  WidgetContent,
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

  const formatTime = (num: number) => String(num).padStart(2, "0");

  const hours = time.getHours() % 12;
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <Widget>
      <WidgetContent className="flex-col gap-4">
        <WidgetTitle className="text-4xl tracking-widest">
          {hours}:{minutes}:{seconds}
        </WidgetTitle>
      </WidgetContent>
    </Widget>
  );
}

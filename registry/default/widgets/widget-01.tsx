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

  const minutes = formatTime(time.getMinutes());
  const hours = time.getHours() % 12 || 12;

  return (
    <Widget>
      <WidgetContent className="flex-col gap-4">
        <WidgetTitle className="text-5xl tracking-widest">
          {hours}:{minutes}
        </WidgetTitle>
      </WidgetContent>
    </Widget>
  );
}

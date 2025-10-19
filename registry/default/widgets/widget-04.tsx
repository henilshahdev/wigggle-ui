"use client";

import * as React from "react";
import { Widget, WidgetContent } from "@/registry/default/ui/widget";

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

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hoursDegrees = ((hours + minutes / 60) / 12) * 360;
  const minutesDegrees = ((minutes + seconds / 60) / 60) * 360;
  const secondsDegrees = (seconds / 60) * 360;

  return (
    <Widget>
      <WidgetContent>
        {[...Array(12)].map((_, i) => {
          const hour = i + 1;
          const angle = (hour / 12) * 360;
          const radians = (angle * Math.PI) / 180;
          const x = Math.sin(radians) * 70;
          const y = -Math.cos(radians) * 70;
          return (
            <div
              key={hour}
              className="absolute text-sm font-semibold text-gray-800 dark:text-gray-200"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {hour}
            </div>
          );
        })}
        <div className="relative size-[88px]">
          <div
            className="absolute bottom-1/2 left-1/2 h-12 w-1 origin-bottom rounded-full bg-gray-800 dark:bg-gray-200"
            style={{
              transform: `translateX(-50%) rotate(${hoursDegrees}deg)`,
            }}
          />
          <div
            className="absolute bottom-1/2 left-1/2 h-12 w-1 origin-bottom rounded-full bg-gray-600 dark:bg-gray-400"
            style={{
              transform: `translateX(-50%) rotate(${minutesDegrees}deg)`,
            }}
          />
          <div
            className="absolute bottom-1/2 left-1/2 h-12 w-0.5 origin-bottom rounded-full bg-red-500"
            style={{
              transform: `translateX(-50%) rotate(${secondsDegrees}deg)`,
            }}
          />
          <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800 dark:bg-gray-200" />
        </div>
      </WidgetContent>
    </Widget>
  );
}

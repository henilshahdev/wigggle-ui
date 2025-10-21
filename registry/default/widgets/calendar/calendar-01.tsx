import * as React from "react";
import { Widget, WidgetContent } from "@/registry/default/ui/widget";

export default function WidgetDemo() {
  const now = new Date();

  const day = now.toLocaleDateString("en-US", { weekday: "short" });
  const month = now.toLocaleDateString("en-US", { month: "short" });
  const date = now.getDate();

  return (
    <Widget>
      <WidgetContent className="mx-auto flex-col items-start">
        <div className="flex items-center justify-between gap-2">
          <p className="text-destructive text-2xl">{day}</p>
          <p className="text-2xl">{month}</p>
        </div>
        <p className="text-8xl">{date}</p>
      </WidgetContent>
    </Widget>
  );
}

import * as React from "react";
import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import { Badge } from "@/registry/default/ui/badge";

export default function WidgetDemo() {
  const now = new Date();

  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const month = now.toLocaleDateString("en-US", { month: "long" });
  const date = now.getDate();

  return (
    <Widget>
      <WidgetContent className="flex flex-col gap-2">
        <p className="text-muted-foreground">{day}</p>
        <h2 className="text-5xl font-bold">{date}</h2>
        <p className="text-muted-foreground">{month}</p>
        <Badge variant="outline">{now.getFullYear()}</Badge>
      </WidgetContent>
    </Widget>
  );
}

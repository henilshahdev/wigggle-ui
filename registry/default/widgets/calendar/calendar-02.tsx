import * as React from "react";

import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import { Badge } from "@/registry/default/ui/badge";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  const now = new Date();

  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const month = now.toLocaleDateString("en-US", { month: "long" });
  const date = now.getDate();

  return (
    <Widget>
      <WidgetContent className="flex flex-col gap-2">
        <Label className="text-muted-foreground">{day}</Label>
        <Label className="text-5xl font-bold">{date}</Label>
        <Label className="text-muted-foreground">{month}</Label>
        <Badge variant="outline">{now.getFullYear()}</Badge>
      </WidgetContent>
    </Widget>
  );
}

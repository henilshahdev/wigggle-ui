import * as React from "react";

import {
  Widget,
  WidgetHeader,
  WidgetContent,
} from "@/registry/default/ui/widget";
import { Badge } from "@/registry/default/ui/badge";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  const now = new Date();

  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const date = now.getDate();

  const events = [
    { title: "Scrum", time: "9 AM" },
    { title: "Design Roundup", time: "11 AM" },
  ];

  return (
    <Widget design="mumbai">
      <WidgetHeader className="text-destructive text-base">{day}</WidgetHeader>
      <WidgetContent className="flex-col items-start justify-start gap-2">
        <Label className="text-3xl">{date}</Label>
        {events.map((event, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="flex w-full items-center justify-between gap-2 px-2 py-1 text-xs"
          >
            {event.title}
            <span className="text-muted-foreground">{event.time}</span>
          </Badge>
        ))}
      </WidgetContent>
    </Widget>
  );
}

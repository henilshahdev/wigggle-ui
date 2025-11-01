import * as React from "react";
import { SunIcon } from "lucide-react";

import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

const forecast = [
  { day: "Mon", min: 31, max: 38 },
  { day: "Tue", min: 31, max: 38 },
  { day: "Wed", min: 31, max: 38 },
  { day: "Thu", min: 31, max: 38 },
];

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetContent className="mt-1.5 flex w-full flex-col gap-2">
        {forecast.map((el, index) => (
          <div
            key={index}
            className="grid w-full grid-cols-4 items-center gap-3 border-b pb-2 last:border-none"
          >
            <Label className="text-muted-foreground text-base">{el.day}</Label>
            <SunIcon className="mx-auto size-4 stroke-yellow-500" />
            <Label className="mx-aut text-base">{el.min}&deg;</Label>
            <Label className="mx-auto text-base">{el.max}&deg;</Label>
          </div>
        ))}
      </WidgetContent>
    </Widget>
  );
}

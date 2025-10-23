import * as React from "react";
import { MoveDownIcon, MoveUpIcon, SunIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetTitle>Mumbai</WidgetTitle>
      <WidgetContent className="flex items-center justify-center gap-2">
        <SunIcon className="size-10" strokeWidth={2} />
        <Label className="text-5xl">29&deg;</Label>
      </WidgetContent>
      <WidgetFooter className="justify-start gap-3">
        <div className="flex items-center justify-start">
          <MoveDownIcon
            fill="currentColor"
            className="mr-1 size-4"
            strokeWidth={4}
          />
          <Label>28&deg;</Label>
        </div>
        <div className="flex h-max items-center justify-start">
          <MoveUpIcon
            fill="currentColor"
            className="mr-1 size-4"
            strokeWidth={4}
          />
          <Label>32&deg;</Label>
        </div>
      </WidgetFooter>
    </Widget>
  );
}

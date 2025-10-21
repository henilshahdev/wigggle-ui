import * as React from "react";
import { MoveDownIcon, MoveUpIcon, SunIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetHeader className="flex-col gap-3">
        <WidgetTitle>Mumbai</WidgetTitle>
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <SunIcon className="size-8 fill-current" />
            <Label className="text-4xl">29&deg;</Label>
          </div>
          <Label className="text-muted-foreground">Feels Like 28&deg;</Label>
        </div>
      </WidgetHeader>
      <WidgetContent className="items-end">
        <div className="flex h-max w-full items-center justify-start">
          <MoveUpIcon
            fill="currentColor"
            className="mr-1 size-4"
            strokeWidth={4}
          />
          <Label>32&deg;</Label>
        </div>
        <div className="flex w-full items-center justify-end">
          <MoveDownIcon
            fill="currentColor"
            className="mr-1 size-4"
            strokeWidth={4}
          />
          <Label>28&deg;</Label>
        </div>
      </WidgetContent>
    </Widget>
  );
}

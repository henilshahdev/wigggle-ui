import * as React from "react";
import { MoveDownIcon, MoveUpIcon, SunIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget design="mumbai" className="gap-6">
      <WidgetHeader className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-2">
          <Label>Mumbai</Label>
          <Label className="text-muted-foreground">Feels Like 36&deg;</Label>
        </div>
        <WidgetTitle className="text-3xl">35&deg;</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="items-start">
        <div className="flex h-max w-full items-center justify-start">
          <MoveUpIcon
            fill="currentColor"
            className="mr-1 size-4"
            strokeWidth={4}
          />
          <Label>37&deg;</Label>
        </div>
        <div className="flex w-full items-center justify-end">
          <MoveDownIcon
            fill="currentColor"
            className="mr-1 size-4"
            strokeWidth={4}
          />
          <Label>31&deg;</Label>
        </div>
      </WidgetContent>
      <WidgetFooter className="bg-muted w-full rounded-xl">
        <div className="flex w-full items-center justify-between gap-3 p-2">
          <div className="flex flex-col gap-2">
            <SunIcon className="size-4 text-yellow-500" />
            <Label className="text-xs font-light">32&deg;</Label>
          </div>
          <div className="flex flex-col gap-2">
            <SunIcon className="size-4 text-yellow-500" />
            <Label className="text-xs font-light">37&deg;</Label>
          </div>
          <div className="flex flex-col gap-2">
            <SunIcon className="size-4 text-yellow-500" />
            <Label className="text-xs font-light">36&deg;</Label>
          </div>
          <div className="flex flex-col gap-2">
            <SunIcon className="size-4 text-yellow-500" />
            <Label className="text-xs font-light">38&deg;</Label>
          </div>
          <div className="flex flex-col gap-2">
            <SunIcon className="size-4 text-yellow-500" />
            <Label className="text-xs font-light">33&deg;</Label>
          </div>
        </div>
      </WidgetFooter>
    </Widget>
  );
}

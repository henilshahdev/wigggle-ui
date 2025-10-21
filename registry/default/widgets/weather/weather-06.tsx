import * as React from "react";
import { DropletIcon, SunIcon, ThermometerIcon } from "lucide-react";

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
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Mumbai</WidgetTitle>
        <WidgetTitle className="font-normal">4:04</WidgetTitle>
      </WidgetHeader>
      <WidgetContent>
        <SunIcon className="size-9 text-yellow-500" />
      </WidgetContent>
      <WidgetFooter>
        <div className="flex flex-col items-center">
          <div className="flex h-max w-full items-center justify-start">
            <ThermometerIcon className="mr-1 size-5" />
            <Label>29&deg;</Label>
          </div>
          <div className="flex h-max w-full items-center justify-start">
            <DropletIcon className="mr-1 size-5" />
            <Label>9%</Label>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Label className="text-4xl">29&deg;</Label>
        </div>
      </WidgetFooter>
    </Widget>
  );
}

import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { MoonIcon, SunIcon } from "lucide-react";
import { Separator } from "@/registry/default/ui/separator";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetContent className="flex-col justify-between gap-3">
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <p>Mumbai</p>
            <SunIcon className="size-5" />
          </div>
          <WidgetTitle className="text-xl">8:15 AM</WidgetTitle>
        </div>
        <Separator />
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <p>Vancouver</p>
            <MoonIcon className="size-5" />
          </div>
          <WidgetTitle className="text-xl">6:45 PM</WidgetTitle>
        </div>
      </WidgetContent>
    </Widget>
  );
}

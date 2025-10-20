import * as React from "react";
import {
  Widget,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { SunIcon } from "lucide-react";

export default function WidgetDemo() {
  return (
    <Widget size="square" design="default" variant="default">
      <WidgetHeader>
        <WidgetTitle className="text-4xl">29&deg;</WidgetTitle>
      </WidgetHeader>

      <WidgetFooter className="flex-col items-end gap-y-1.5">
        <SunIcon className="size-8" />
        <p className="text-lg font-medium">Mumbai</p>
      </WidgetFooter>
    </Widget>
  );
}

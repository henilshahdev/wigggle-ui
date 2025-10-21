import { SunIcon } from "lucide-react";
import * as React from "react";

import {
  Widget,
  WidgetHeader,
  WidgetTitle,
  WidgetFooter,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle className="text-4xl">29&deg;</WidgetTitle>
      </WidgetHeader>
      <WidgetFooter className="flex-col items-end gap-y-1.5">
        <SunIcon className="size-8" />
        <Label className="text-lg font-medium">Mumbai</Label>
      </WidgetFooter>
    </Widget>
  );
}

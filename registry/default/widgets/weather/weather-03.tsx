import { SunIcon } from "lucide-react";
import * as React from "react";

import {
  Widget,
  WidgetHeader,
  WidgetTitle,
  WidgetContent,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle className="text-4xl">29&deg;</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="items-end">
        <div className="flex w-full flex-col items-end gap-1.5">
          <SunIcon className="size-8" />
          <Label className="text-lg font-medium">Mumbai</Label>
        </div>
      </WidgetContent>
    </Widget>
  );
}

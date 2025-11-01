import * as React from "react";

import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetContent>
        <div className="grid size-full grid-cols-2 items-center gap-x-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <Label className="text-sm">Mumbai</Label>
            <WidgetTitle>8:15 AM</WidgetTitle>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Label className="text-sm">London</Label>
            <WidgetTitle>6:45 PM</WidgetTitle>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Label className="text-sm">Tokyo</Label>
            <WidgetTitle>8:15 AM</WidgetTitle>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Label className="text-sm">Seoul</Label>
            <WidgetTitle>6:45 PM</WidgetTitle>
          </div>
        </div>
      </WidgetContent>
    </Widget>
  );
}

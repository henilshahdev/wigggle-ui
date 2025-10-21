import * as React from "react";

import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetContent className="flex-col justify-between">
        <div className="flex w-full items-center justify-between gap-2">
          <Label className="text-sm">Mumbai</Label>
          <WidgetTitle>8:15 AM</WidgetTitle>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <Label className="text-sm">London</Label>
          <WidgetTitle>6:45 PM</WidgetTitle>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <Label className="text-sm">Tokyo</Label>
          <WidgetTitle>8:15 AM</WidgetTitle>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <Label className="text-sm">Seoul</Label>
          <WidgetTitle>6:45 PM</WidgetTitle>
        </div>
      </WidgetContent>
    </Widget>
  );
}

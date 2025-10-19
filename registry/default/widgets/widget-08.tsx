import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from "@/registry/default/ui/widget";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetContent className="flex-col justify-between">
        <div className="flex w-full items-center justify-between gap-2">
          <p className="text-sm">Mumbai</p>
          <WidgetTitle>8:15 AM</WidgetTitle>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <p className="text-sm">London</p>
          <WidgetTitle>6:45 PM</WidgetTitle>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <p className="text-sm">Tokyo</p>
          <WidgetTitle>8:15 AM</WidgetTitle>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <p className="text-sm">Seoul</p>
          <WidgetTitle>6:45 PM</WidgetTitle>
        </div>
      </WidgetContent>
    </Widget>
  );
}

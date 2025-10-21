import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from "@/registry/default/ui/widget";

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetContent>
        <div className="grid size-full grid-cols-2 items-center gap-x-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm">Mumbai</p>
            <WidgetTitle>8:15 AM</WidgetTitle>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm">London</p>
            <WidgetTitle>6:45 PM</WidgetTitle>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm">Tokyo</p>
            <WidgetTitle>8:15 AM</WidgetTitle>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm">Seoul</p>
            <WidgetTitle>6:45 PM</WidgetTitle>
          </div>
        </div>
      </WidgetContent>
    </Widget>
  );
}

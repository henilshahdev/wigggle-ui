import * as React from "react";
import { AlarmClockIcon } from "lucide-react";

import { Switch } from "@/registry/default/ui/switch";
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

const alarms = ["7:00 AM", "12:30 PM", "10:00 PM"];

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Alarms</WidgetTitle>
        <AlarmClockIcon className="size-5" />
      </WidgetHeader>
      <WidgetContent className="flex-col gap-4">
        {alarms.map((alarm) => (
          <div
            key={alarm}
            className="flex w-full items-center justify-between space-x-2"
          >
            <Label htmlFor={alarm} className="font-semibold">
              {alarm}
            </Label>
            <Switch id={alarm} />
          </div>
        ))}
      </WidgetContent>
    </Widget>
  );
}

import { SunIcon } from "lucide-react";
import * as React from "react";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Mumbai</WidgetTitle>
        <SunIcon className="size-5 fill-current" />
      </WidgetHeader>
      <WidgetContent>
        <Label className="text-5xl">29&deg;</Label>
      </WidgetContent>
    </Widget>
  );
}

import * as React from "react";
import { TriangleIcon } from "lucide-react";

import {
  Widget,
  WidgetHeader,
  WidgetTitle,
  WidgetContent,
  WidgetFooter,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetHeader>
        <WidgetTitle className="flex w-full items-center justify-between">
          <Label className="text-4xl">732.17</Label>
          <TriangleIcon className="fill-productive size-6 stroke-none" />
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="justify-between">
        <Label className="text-productive">+2.76</Label>
        <Label className="text-productive">+0.47%</Label>
      </WidgetContent>
      <WidgetFooter className="flex-col items-start">
        <Label className="text-2xl font-medium">META</Label>
        <Label className="text-muted-foreground text-base">
          Meta Platforms Inc
        </Label>
      </WidgetFooter>
    </Widget>
  );
}

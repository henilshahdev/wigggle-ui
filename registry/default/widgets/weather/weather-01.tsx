import * as React from "react";
import { SunIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetContent className="flex-col gap-4">
        <SunIcon className="size-10" strokeWidth={2} />
        <Label className="text-4xl">29&deg;</Label>
      </WidgetContent>
      <WidgetFooter className="justify-center">
        <Label className="text-lg font-semibold">Mumbai</Label>
      </WidgetFooter>
    </Widget>
  );
}

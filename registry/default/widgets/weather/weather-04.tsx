import * as React from "react";

import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetContent className="mx-auto flex-col items-start">
        <Label className="text-6xl">29&deg;</Label>
        <Label className="text-2xl">Sunny</Label>
        <Label>Tue Nov 22</Label>
      </WidgetContent>
    </Widget>
  );
}

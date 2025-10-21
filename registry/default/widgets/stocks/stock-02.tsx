import * as React from "react";

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
        <WidgetTitle className="flex w-full flex-col items-start justify-start">
          <Label className="text-2xl font-medium">AAPL</Label>
          <Label className="text-muted-foreground text-lg">Apple Inc</Label>
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="justify-between"></WidgetContent>
      <WidgetFooter className="flex-col items-end">
        <Label className="text-destructive text-4xl">262.24</Label>
      </WidgetFooter>
    </Widget>
  );
}

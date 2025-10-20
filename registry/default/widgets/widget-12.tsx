import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { SunIcon } from "lucide-react";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Mumbai</WidgetTitle>
        <SunIcon className="size-5 fill-current" />
      </WidgetHeader>
      <WidgetContent>
        <p className="text-5xl">29&deg;</p>
      </WidgetContent>
    </Widget>
  );
}

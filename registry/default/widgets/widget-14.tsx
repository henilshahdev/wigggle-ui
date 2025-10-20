import * as React from "react";
import { Widget, WidgetContent } from "@/registry/default/ui/widget";

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetContent className="mx-auto flex-col items-start">
        <p className="text-6xl">29&deg;</p>
        <p className="text-2xl">Sunny</p>
        <p>Tue Nov 22</p>
      </WidgetContent>
    </Widget>
  );
}

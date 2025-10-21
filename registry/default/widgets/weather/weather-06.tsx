import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { DropletIcon, SunIcon, ThermometerIcon } from "lucide-react";

export default function WidgetDemo() {
  return (
    <Widget size="square" design="default" variant="default">
      <WidgetHeader>
        <WidgetTitle>Mumbai</WidgetTitle>
        <WidgetTitle className="font-normal">4:04</WidgetTitle>
      </WidgetHeader>
      <WidgetContent>
        <SunIcon className="size-9 text-yellow-500" />
      </WidgetContent>
      <WidgetFooter>
        <div className="flex flex-col items-center">
          <div className="flex h-max w-full items-center justify-start">
            <ThermometerIcon className="mr-1 size-5" />
            <p>29&deg;</p>
          </div>
          <div className="flex h-max w-full items-center justify-start">
            <DropletIcon className="mr-1 size-5" />
            <p>9%</p>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <p className="text-4xl">29&deg;</p>
        </div>
      </WidgetFooter>
    </Widget>
  );
}

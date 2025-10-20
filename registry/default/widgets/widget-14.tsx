import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { MoveDownIcon, MoveUpIcon, SunIcon } from "lucide-react";

export default function WidgetDemo() {
  return (
    <Widget size="square" design="default" variant="default">
      <WidgetHeader className="flex-col gap-3">
        <WidgetTitle>Mumbai</WidgetTitle>
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <SunIcon className="size-8 fill-current" />
            <p className="text-4xl">29&deg;</p>
          </div>
          <p className="text-muted-foreground">Feels Like 28&deg;</p>
        </div>
      </WidgetHeader>
      <WidgetContent className="items-end">
        <div className="flex h-max w-full items-center justify-start">
          <MoveUpIcon
            fill="currentColor"
            className="mr-1 size-4"
            strokeWidth={4}
          />
          <p>32&deg;</p>
        </div>
        <div className="flex w-full items-center justify-end">
          <MoveDownIcon
            fill="currentColor"
            className="mr-1 size-4"
            strokeWidth={4}
          />
          <p>28&deg;</p>
        </div>
      </WidgetContent>
    </Widget>
  );
}

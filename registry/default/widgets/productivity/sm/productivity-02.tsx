import React from "react";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Button } from "@/registry/default/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Textarea } from "@/registry/default/ui/textarea";
import { cn } from "@/registry/default/lib/utils";

type StatusOption = {
  value: string;
  color: string;
};

const STATUS_OPTIONS: StatusOption[] = [
  { value: "1", color: "bg-productive" },
  { value: "2", color: "bg-blue-500" },
  { value: "3", color: "bg-yellow-500" },
  { value: "4", color: "bg-destructive" },
];

export default function WidgetDemo() {
  const id = React.useId();

  return (
    <Widget design="mumbai" className="gap-3">
      <WidgetHeader className="justify-center">
        <WidgetTitle>Add Task</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="flex-col justify-center gap-4">
        <Textarea className="h-full max-h-28" placeholder="Add something..." />
      </WidgetContent>
      <WidgetFooter className="flex w-full justify-between">
        <Select defaultValue="1">
          <SelectTrigger
            id={id}
            className="w-16 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
          >
            <SelectValue placeholder="Select status" />
          </SelectTrigger>

          <SelectContent className="max-w-16 min-w-0">
            {STATUS_OPTIONS.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                <span className="flex items-center gap-2">
                  <div className={cn("size-3 rounded-full", s.color)} />
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className="w-max" size="sm">
          Add Task
        </Button>
      </WidgetFooter>
    </Widget>
  );
}

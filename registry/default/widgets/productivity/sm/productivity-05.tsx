"use client";

import React from "react";
import { BookOpenIcon, CheckIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
} from "@/registry/default/ui/widget";
import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { cn } from "@/registry/default/lib/utils";

const streak = 8;

export default function WidgetDemo() {
  const [status, setStatus] = React.useState<boolean>(false);

  return (
    <Widget className="gap-3">
      <WidgetContent className="flex-col items-end justify-start gap-4">
        <div className="flex w-full flex-col">
          <Label className="text-xl">Read 10 Mins</Label>
          <Label className="text-muted-foreground text-sm font-normal">
            Streak: {status ? streak + 1 : streak} days
          </Label>
        </div>
      </WidgetContent>
      <WidgetFooter className="flex w-full items-center justify-between">
        <BookOpenIcon
          className={cn(
            "size-14",
            status ? "stroke-productive" : "stroke-destructive",
          )}
          strokeWidth={1.5}
        />
        <Button
          disabled={status}
          onClick={() => setStatus(true)}
          className="hover:cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed"
          variant="outline"
          size="icon-sm"
        >
          <CheckIcon />
        </Button>
      </WidgetFooter>
    </Widget>
  );
}

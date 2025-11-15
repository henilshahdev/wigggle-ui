"use client";

import React from "react";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";
import { Button } from "@/registry/default/ui/button";

export default function WidgetDemo() {
  const [isCountingDown, setIsCountingDown] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(1800);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  const resetTimer = React.useCallback(() => {
    setIsCountingDown(false);
    setTimeLeft(1800);
  }, []);

  const handleToggle = React.useCallback(() => {
    setIsCountingDown((prev) => !prev);
  }, []);

  React.useEffect(() => {
    if (isCountingDown && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    if (!isCountingDown) {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }

    return () => {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    };
  }, [isCountingDown]);

  return (
    <Widget design="mumbai">
      <WidgetHeader className="justify-center">
        <Label className="text-muted-foreground text-3xl">🚀</Label>
      </WidgetHeader>
      <WidgetContent>
        <div className="flex h-full w-full flex-col items-center justify-center gap-0.5">
          <Label className="text-4xl">
            {minutes}:{seconds}
          </Label>
          <Label className="text-muted-foreground text-xs">POMODORO</Label>
        </div>
      </WidgetContent>
      <WidgetFooter>
        <Button
          aria-label="Reset timer"
          onClick={resetTimer}
          variant="outline"
          size="icon-sm"
          className="rounded-full"
        >
          <RotateCcwIcon />
        </Button>
        <Button
          aria-label={isCountingDown ? "Pause timer" : "Start timer"}
          onClick={handleToggle}
          variant="outline"
          size="icon-sm"
          className="rounded-full"
        >
          {isCountingDown ? (
            <PauseIcon className="size-4 fill-current stroke-none" />
          ) : (
            <PlayIcon className="size-4 fill-current stroke-none" />
          )}
        </Button>
      </WidgetFooter>
    </Widget>
  );
}

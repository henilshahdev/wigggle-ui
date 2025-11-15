import { DumbbellIcon, SunIcon } from "lucide-react";

import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

export default function WidgetDemo() {
  return (
    <Widget className="gap-3">
      <WidgetContent className="flex-col items-center justify-center gap-4">
        <div className="flex w-full items-center justify-start rounded-lg border p-2">
          <div className="flex items-center justify-center gap-3 px-1">
            <SunIcon className="size-8 stroke-yellow-500" />
            <div className="flex flex-col items-start justify-start gap-1.5">
              <Label className="font-normal">Sleep early</Label>
              <Label className="text-muted-foreground font-normal">
                13 days
              </Label>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-start rounded-lg border p-2">
          <div className="flex items-center justify-center gap-3 px-1">
            <DumbbellIcon className="size-8 stroke-amber-700" />
            <div className="flex flex-col items-start justify-start gap-1.5">
              <Label className="font-normal">Workout</Label>
              <Label className="text-muted-foreground font-normal">
                6 days
              </Label>
            </div>
          </div>
        </div>
      </WidgetContent>
    </Widget>
  );
}

import { SunIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

const weatherData = [
  { time: "8 AM", temp: "24", icon: SunIcon },
  { time: "9 AM", temp: "24", icon: SunIcon },
  { time: "10 AM", temp: "26", icon: SunIcon },
  { time: "11 AM", temp: "26", icon: SunIcon },
  { time: "12 AM", temp: "26", icon: SunIcon },
  { time: "1 PM", temp: "27", icon: SunIcon },
];

export default function WidgetDemo() {
  return (
    <Widget size="md">
      <WidgetHeader className="items-start">
        <div className="flex flex-col items-start">
          <Label>Mumbai</Label>
          <Label className="text-4xl">26&deg;</Label>
        </div>
        <div className="flex flex-col items-start">
          <SunIcon className="size-10 stroke-amber-400" />
        </div>
      </WidgetHeader>
      <WidgetContent className="mt-4 grid w-full grid-cols-6 items-end gap-6">
        {weatherData.map((el) => (
          <div key={el.time} className="flex flex-col items-center gap-1">
            <Label className="text-muted-foreground text-xs">{el.time}</Label>
            <Label>
              {<el.icon className="stroke-muted-foreground size-6" />}
            </Label>
            <Label className="text-lg">{el.temp}&deg;</Label>
          </div>
        ))}
      </WidgetContent>
    </Widget>
  );
}

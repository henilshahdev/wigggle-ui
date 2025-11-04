import {
  CloudRainIcon,
  DropletsIcon,
  SunIcon,
  ThermometerIcon,
  WindIcon,
} from "lucide-react";

import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WidgetDemo() {
  return (
    <Widget size="md">
      <WidgetContent>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <SunIcon className="size-16 stroke-amber-300" />
          <div className="flex flex-col items-center justify-center gap-2">
            <Label className="text-3xl">25&deg;C</Label>
            <Label>Mumbai</Label>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <div className="flex w-full items-center justify-center gap-16">
            <InfoItem icon={WindIcon} label="Wind Speed" value="3.7" />
            <InfoItem
              icon={ThermometerIcon}
              label="Feels like"
              value="27&deg;"
            />
          </div>
          <div className="flex w-full items-center justify-center gap-16">
            <InfoItem icon={CloudRainIcon} label="Chance of Rain" value="12%" />
            <InfoItem icon={DropletsIcon} label="Humidity" value="83%" />
          </div>
        </div>
      </WidgetContent>
    </Widget>
  );
}

type InfoItemProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
};

const InfoItem = (el: InfoItemProps) => {
  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <div className="space-y-2">
          <el.icon className="stroke-muted-foreground size-6" />
          <Label className="text-base font-normal">{el.value}</Label>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <Label className="text-sm font-normal">{el.label}</Label>
      </TooltipContent>
    </Tooltip>
  );
};

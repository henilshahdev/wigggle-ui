import * as React from "react";
import Image from "next/image";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

const upcomingMatches = [
  { teamName: "FCB (H)", date: "25 Oct", time: "18:00" },
  { teamName: "BVB (A)", date: "29 Oct", time: "21:00" },
];

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetHeader className="items-center">
        <Image
          className="size-12"
          src="/assets/logos/mci.png"
          alt="FC Barcelona"
          width={48}
          height={48}
        />
        <div className="text-muted-foreground flex flex-col gap-2">
          <Label>UCL - 1st</Label>
          <Label>EPL - 4th</Label>
        </div>
      </WidgetHeader>
      <WidgetContent className="mt-3 flex-col items-center gap-3">
        {upcomingMatches.map((match, i) => (
          <div
            key={i}
            className="bg-secondary flex w-full items-center justify-between rounded-lg px-2 py-1"
          >
            <Label className="text-base tracking-wider">{match.teamName}</Label>
            <div className="text-muted-foreground flex flex-col gap-0.5">
              <Label className="text-xs">{match.date}</Label>
              <Label className="text-xs">{match.time}</Label>
            </div>
          </div>
        ))}
      </WidgetContent>
    </Widget>
  );
}

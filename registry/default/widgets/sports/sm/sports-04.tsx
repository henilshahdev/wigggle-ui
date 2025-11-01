import * as React from "react";
import Image from "next/image";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

const upcomingMatches = [
  {
    home: "/assets/logos/fcb.png",
    away: "/assets/logos/bvb.png",
    date: "25 Oct",
    time: "8:30 PM",
  },
  {
    home: "/assets/logos/mci.png",
    away: "/assets/logos/fcb.png",
    date: "29 Oct",
    time: "12:30 PM",
  },
  {
    home: "/assets/logos/bvb.png",
    away: "/assets/logos/fcb.png",
    date: "31 Oct",
    time: "8:30 PM",
  },
];

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetHeader>
        <WidgetTitle className="text-muted-foreground text-sm font-normal">
          Fixtures
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="mt-2 flex-col items-center gap-1.5">
        {upcomingMatches.map((match, i) => (
          <div
            key={i}
            className="bg-secondary flex w-full items-center justify-between rounded-lg px-2 py-1"
          >
            <Image
              className="size-7"
              src={match.home}
              alt={match.home}
              width={64}
              height={64}
            />
            <div className="flex flex-col items-center justify-center gap-0">
              <Label className="text-muted-foreground text-xs">
                {match.date}
              </Label>
              <Label className="text-muted-foreground text-xs">
                {match.time}
              </Label>
            </div>
            <Image
              className="size-7"
              src={match.away}
              alt={match.away}
              width={64}
              height={64}
            />
          </div>
        ))}
      </WidgetContent>
    </Widget>
  );
}

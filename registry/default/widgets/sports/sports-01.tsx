import * as React from "react";
import Image from "next/image";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

const details = [
  {
    image: "/assets/logos/fcb.png",
    name: "FCB",
    teamName: "FC Barcelona",
    score: "2",
  },
  {
    image: "/assets/logos/rma.png",
    name: "RMA",
    teamName: "Real Madrid FC",
    score: "1",
  },
];

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle className="text-muted-foreground text-sm">
          La Liga
        </WidgetTitle>
        <WidgetTitle className="text-muted-foreground text-sm">
          21 Oct
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="items-end justify-between">
        {details.map((team) => (
          <div key={team.name} className="flex flex-col items-center gap-1">
            <Image
              className="size-8"
              src={team.image}
              alt={team.teamName}
              width={32}
              height={32}
            />
            <Label className="text-lg tracking-wider">{team.name}</Label>
            <Label className="text-3xl">{team.score}</Label>
          </div>
        ))}
      </WidgetContent>
    </Widget>
  );
}

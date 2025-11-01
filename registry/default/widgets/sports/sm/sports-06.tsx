import * as React from "react";
import Image from "next/image";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";
import { Separator } from "@/registry/default/ui/separator";

const battersInfo = [
  {
    teamImage: "/assets/logos/ind.png",
    teamName: "India",
    playerName: "Pratika R",
    score: "122",
    balls: "134",
  },
  {
    teamImage: "/assets/logos/ind.png",
    teamName: "India",
    playerName: "Smriti M",
    score: "109*",
    balls: "95",
  },
];

const bowlersInfo = [
  {
    teamImage: "/assets/logos/nz.png",
    teamName: "New Zealand",
    playerName: "Eden C",
    score: "2/76",
    overs: "6.0",
  },
];

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetHeader className="pb-1.5">
        <div className="flex items-center gap-1">
          <div className="bg-productive size-2 rounded-full" />
          <Label className="text-muted-foreground text-sm">IND vs NZ</Label>
        </div>
        <Label className="text-sm">340/7</Label>
      </WidgetHeader>
      <WidgetContent className="justfy-between flex-col items-center gap-2">
        <div className="flex w-full flex-col items-center justify-between gap-3">
          {battersInfo.map((batter, i) => (
            <div key={i} className="flex w-full items-center justify-between">
              <div className="flex gap-1">
                <Image
                  className="size-4"
                  src={batter.teamImage}
                  alt={batter.teamName}
                  width={20}
                  height={20}
                />
                <Label className="text-xs">{batter.playerName}</Label>
              </div>
              <Label className="text-xs">
                {batter.score}
                <span className="text-muted-foreground">({batter.balls})</span>
              </Label>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex w-full items-center justify-between">
          {bowlersInfo.map((bowler, i) => (
            <div key={i} className="flex w-full items-center justify-between">
              <div className="flex gap-1">
                <Image
                  className="size-4"
                  src={bowler.teamImage}
                  alt={bowler.teamName}
                  width={20}
                  height={20}
                />
                <Label className="text-xs">{bowler.playerName}</Label>
              </div>
              <Label className="text-xs">
                {bowler.score}
                <span className="text-muted-foreground">({bowler.overs})</span>
              </Label>
            </div>
          ))}
        </div>
      </WidgetContent>
      <WidgetFooter className="justify-center pt-1">
        <p className="text-muted-foreground text-sm">
          IND needs <span className="text-productive">26</span> from{" "}
          <span className="text-productive">18</span>
        </p>
      </WidgetFooter>
    </Widget>
  );
}

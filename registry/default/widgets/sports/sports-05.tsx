import * as React from "react";
import Image from "next/image";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";

const scoreCard = [
  {
    teamName: "IND",
    image: "/assets/logos/ind.png",
    score: "387/3",
    overs: 49,
  },
  {
    teamName: "AUS",
    image: "/assets/logos/aus.png",
    score: "200/6",
    overs: 30,
  },
];

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetHeader>
        <WidgetTitle className="text-muted-foreground">ODI 2</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="flex-col items-center gap-4">
        {scoreCard.map((team, i) => (
          <div key={i} className="flex w-full items-center justify-between">
            <div className="flex items-center justify-start gap-1">
              <Image
                className="size-5"
                src={team.image}
                alt={team.teamName}
                width={24}
                height={24}
              />
              <Label className="text-base">{team.teamName}</Label>
            </div>
            <div className="flex items-center justify-end gap-1">
              <Label className="text-base">{team.score}</Label>
              <Label className="text-muted-foreground text-xs">
                ({team.overs})
              </Label>
            </div>
          </div>
        ))}
      </WidgetContent>
      <WidgetFooter className="justify-center">
        <p className="text-muted-foreground text-sm">
          AUS needs <span className="text-productive">187</span> from{" "}
          <span className="text-productive">120</span>
        </p>
      </WidgetFooter>
    </Widget>
  );
}

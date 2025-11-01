import * as React from "react";

import { Widget, WidgetContent } from "@/registry/default/ui/widget";
import { Label } from "@/registry/default/ui/label";
import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Stock = {
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
  ticker: string;
  companyName: string;
  price: number;
};

const stocks: Stock[] = [
  {
    logo: Icons.apple,
    ticker: "AAPL",
    price: 262.82,
    companyName: "Apple Inc.",
  },
  {
    logo: Icons.salesforce,
    ticker: "CRM",
    price: 307.46,
    companyName: "Salesforce, Inc.",
  },
  {
    logo: Icons.starbucks,
    ticker: "SBUX",
    price: 86.09,
    companyName: "Starbucks Corp.",
  },
  {
    logo: Icons.tesla,
    ticker: "TSLA",
    price: 433.72,
    companyName: "Tesla Inc.",
  },
];

export default function WidgetDemo() {
  return (
    <Widget>
      <WidgetContent className="items-center">
        <div className="grid size-full grid-cols-2 items-center gap-6">
          {stocks.map(({ logo: Logo, ticker, price, companyName }) => (
            <Tooltip delayDuration={300} key={ticker}>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center justify-center gap-1">
                  <Logo className="fill-foreground size-8 rounded-full" />
                  <Label className="text-base">${price}</Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{companyName}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}

import * as React from "react";
import { EyeIcon, TriangleIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/registry/default/ui/widget";
import { Label } from "@/components/ui/label";
import { cn, truncate } from "@/registry/default/lib/utils";

const stocks = [
  {
    ticker: "AAPL",
    company: "Apple Inc",
    value: 262.24,
    difference: 4.26,
    isPositive: false,
  },
  {
    ticker: "AMZN",
    company: "Amazon.com Inc.",
    value: 187.24,
    difference: 7.7,
    isPositive: true,
  },
  {
    ticker: "GOOGL",
    company: "Alphabet Inc Class A",
    value: 290.24,
    difference: 2.98,
    isPositive: true,
  },
];

export default function WidgetDemo() {
  return (
    <Widget design="mumbai">
      <WidgetHeader>
        <WidgetTitle>Watchlist</WidgetTitle>
        <EyeIcon className="size-4" />
      </WidgetHeader>
      <WidgetContent className="mt-0.5 flex-col items-start justify-start">
        {stocks.map((stock) => (
          <div
            key={stock.ticker}
            className="flex w-full items-center justify-between space-x-2 border-b py-1.5 last:border-b-0"
          >
            <div className="flex flex-col items-start gap-0">
              <Label className="text-sm font-semibold">
                <TriangleIcon
                  className={cn(
                    stock.isPositive
                      ? "fill-green-500"
                      : "fill-destructive rotate-180",
                    "size-2 stroke-none",
                  )}
                />
                {stock.ticker}
              </Label>
              <Label className="text-muted-foreground text-xs">
                {truncate(stock.company)}
              </Label>
            </div>
            <div className="flex flex-col items-end gap-0">
              <Label className="text-sm font-semibold">{stock.value}</Label>
              <Label
                className={cn(
                  stock.isPositive ? "text-green-500" : "text-destructive",
                )}
              >
                {stock.isPositive ? "+" : "-"}
                {stock.difference}
              </Label>
            </div>
          </div>
        ))}
      </WidgetContent>
    </Widget>
  );
}

"use client";

import { useEffect, useState } from "react";

import GetStarted from "@/components/get-started";

import Calendar01 from "@/registry/default/widgets/calendar/calendar-01";
import Clock05 from "@/registry/default/widgets/clock/clock-05";
import Sports02 from "@/registry/default/widgets/sports/sports-02";
import Stocks01 from "@/registry/default/widgets/stocks/stock-01";
import Weather07 from "@/registry/default/widgets/weather/weather-07";

import Weather09 from "@/registry/default/widgets/weather/weather-09";
import Stocks04 from "@/registry/default/widgets/stocks/stock-04";
import Sports05 from "@/registry/default/widgets/sports/sports-05";
import Clock12 from "@/registry/default/widgets/clock/clock-12";
import Calendar04 from "@/registry/default/widgets/calendar/calendar-04";
import Clock07 from "@/registry/default/widgets/clock/clock-07";
import Weather04 from "@/registry/default/widgets/weather/weather-04";

export default function Hero() {
  const widgets = [
    <Calendar01 key="cal01" />,
    <Sports02 key="sport02" />,
    <Clock05 key="clock05" />,
    <Stocks01 key="stocks01" />,
    <Weather07 key="weather07" />,
    <Clock12 key="clock12" />,
    <Stocks04 key="stocks04a" />,
    <Stocks04 key="stocks04b" />,
    <Weather09 key="weather09" />,
    <Sports05 key="sports05" />,
    <Clock07 key="clock07" />,
    <Calendar04 key="calendar04" />,
    <Weather04 key="weather04" />,
  ];

  const positions = [
    "top-56 left-0",
    "top-56 left-1/6",
    "top-56 left-2/6",
    "top-56 left-3/6",
    "top-56 left-4/6",
    "top-56 left-5/6",
    "top-56 left-6/6",
    "top-[460px] left-0",
    "top-[460px] left-1/6",
    "top-[460px] left-2/6",
    "top-[460px] left-3/6",
    "top-[460px] left-4/6",
    "top-[460px] left-5/6",
    "top-[460px] left-6/6",
  ];

  const [mounted, setMounted] = useState(false);
  const [randomOffsets, setRandomOffsets] = useState<number[][]>([]);

  useEffect(() => {
    setMounted(true);
    setRandomOffsets(
      widgets.map(() => [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
      ]),
    );
  }, []);

  return (
    <div>
      <div className="relative hidden h-[800px] w-full items-start justify-start overflow-hidden perspective-distant xl:flex">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <h1 className="text-foreground text-4xl/[1.1] font-semibold md:text-5xl/[1.1]">
            The first ever collection of Widgets for the Web.
          </h1>
          <p className="text-muted-foreground text-lg">
            An open-source curated collection of copy-paste widgets for your
            next project.
          </p>
          <div className="mx-auto w-max gap-x-3">
            <GetStarted />
          </div>
        </div>
        {mounted &&
          widgets.map((widget, i) => (
            <div
              key={i}
              className={`animate-depth-in absolute h-48 w-48 rounded-lg ${positions[i]}`}
              style={{
                animationDelay: `${i * 0.05}s`,
                transform: `translate(${randomOffsets[i]?.[0] || 0}px, ${
                  randomOffsets[i]?.[1] || 0
                }px)`,
              }}
            >
              {widget}
            </div>
          ))}
      </div>

      <div className="relative z-10 flex w-full flex-col gap-5 text-center">
        <h1 className="text-foreground text-4xl/[1.1] font-semibold md:text-5xl/[1.1]">
          The first ever collection of Widgets for the Web.
        </h1>
        <p className="text-muted-foreground text-lg">
          An open-source curated collection of copy-paste widgets for your next
          project.
        </p>
        <div className="mx-auto w-max gap-x-3">
          <GetStarted />
        </div>
      </div>
    </div>
  );
}

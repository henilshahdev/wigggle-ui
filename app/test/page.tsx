"use client";

import { useState, useEffect } from "react";
import { HourglassIcon } from "lucide-react";

interface SandParticle {
  id: number;
  progress: number;
  offset: number;
}

export default function Hourglass() {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [sandParticles, setSandParticles] = useState<SandParticle[]>([]);
  const [particleCounter, setParticleCounter] = useState(0);
  const totalDuration = 10;

  // Handle timer countdown
  useEffect(() => {
    if (timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  // Add sand particles every second
  useEffect(() => {
    if (timeRemaining === 0) return;

    const interval = setInterval(() => {
      const newParticle: SandParticle = {
        id: particleCounter,
        progress: 0,
        offset: Math.random() * 40 - 20, // Random horizontal offset
      };
      setSandParticles((prev) => [...prev, newParticle]);
      setParticleCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining, particleCounter]);

  // Animate particles falling
  useEffect(() => {
    if (sandParticles.length === 0) return;

    const animationFrame = setInterval(() => {
      setSandParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            progress: particle.progress + 1 / 60, // 60fps animation
          }))
          .filter((particle) => particle.progress < 1),
      );
    }, 1000 / 60);

    return () => clearInterval(animationFrame);
  }, [sandParticles.length]);

  const topSandLevel = (timeRemaining / totalDuration) * 100;
  const bottomSandLevel =
    ((totalDuration - timeRemaining) / totalDuration) * 100;

  return (
    <div className="flex h-52 w-52 flex-col items-center justify-center gap-4 rounded-3xl border p-4">
      {/* Hourglass Container */}
      <div className="relative flex size-full items-center justify-center">
        <HourglassIcon className="absolute size-full" strokeWidth={1} />

        {/* Top chamber sand fill */}
        <div
          className="pointer-events-none absolute top-4.5 left-0 w-full rounded-t-3xl bg-linear-to-b from-amber-400 to-amber-500"
          style={{
            height: `${25 + topSandLevel * 0.15}%`,
            clipPath: "polygon(31% 0%, 75% 0%, 55% 100%, 45% 100%)",
            transition: "all 0.1s linear",
          }}
        />

        {/* Bottom chamber sand fill */}
        {/* <div
          className="pointer-events-none absolute bottom-0 left-0 w-full rounded-b-3xl bg-linear-to-t from-amber-500 to-amber-400"
          style={{
            height: `${25 + bottomSandLevel * 0.15}%`,
            clipPath: "polygon(45% 0%, 55% 0%, 75% 100%, 25% 100%)",
            transition: "all 0.1s linear",
          }}
        /> */}

        {/* Sand particles animation */}
        {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
          {sandParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute h-1.5 w-1.5 rounded-full bg-amber-400"
              style={{
                top: `${30 + particle.progress * 60}%`,
                left: `${50 + particle.offset}%`,
                transform: "translate(-50%, -50%)",
                opacity: Math.max(0, 1 - particle.progress * 1.5),
                boxShadow: "0 0 3px rgba(217, 119, 6, 0.8)",
              }}
            />
          ))}
        </div> */}
      </div>

      {/* Timer Display */}
      {/* <div className="text-center">
        <div className="text-5xl font-bold text-amber-900">
          {String(timeRemaining).padStart(2, "0")}
        </div>
        <p className="mt-1 text-sm text-amber-700">
          {timeRemaining === 0 ? "Complete" : "seconds"}
        </p>
      </div> */}
    </div>
  );
}

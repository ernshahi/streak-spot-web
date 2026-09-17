"use client";

import Image from "next/image";
import { useState } from "react";

const panels = [
  {
    id: "activities",
    lightSrc: "/screenshots/activities.webp",
    darkSrc: "/screenshots/dark/activities.webp",
    alt: "StreakSpot Activities list with streaks, rest days, and check-ins",
    transform:
      "translate(-50%, -50%) translateX(var(--spread-x-neg)) rotate(-9deg)",
  },
  {
    id: "macros",
    lightSrc: "/screenshots/macros.webp",
    darkSrc: "/screenshots/dark/macros.webp",
    alt: "StreakSpot Macros tab with calorie goals and a logged breakfast",
    transform:
      "translate(-50%, -50%) translateX(var(--spread-x)) rotate(9deg)",
  },
  {
    id: "home",
    lightSrc: "/screenshots/home.webp",
    darkSrc: "/screenshots/dark/home.webp",
    alt: "StreakSpot Home with today’s macros, activities, and check-in pills",
    transform: "translate(-50%, -50%)",
  },
] as const;

type PanelId = (typeof panels)[number]["id"];

export function AppPreviewStack() {
  const [activeId, setActiveId] = useState<PanelId>("home");

  return (
    <div
      className="preview-float preview-stack relative mx-auto h-[480px] w-full max-w-[560px] sm:h-[560px] sm:max-w-[640px] lg:max-w-[720px]"
      role="group"
      aria-label="App screenshots"
    >
      <div className="hero-glow-gold absolute top-1/2 left-1/2 -z-10 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70" />

      {panels.map((panel) => {
        const isActive = activeId === panel.id;

        return (
          <button
            key={panel.id}
            type="button"
            onClick={() => setActiveId(panel.id)}
            aria-pressed={isActive}
            aria-label={`Bring ${panel.id} screen to front`}
            className="absolute top-1/2 left-1/2 w-[184px] cursor-pointer border-0 bg-transparent p-0 transition-[transform,filter] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-[220px] lg:w-[248px]"
            style={{
              transform: `${panel.transform} scale(${isActive ? 1.05 : 0.92})`,
              zIndex: isActive ? 20 : 2,
              filter: isActive ? "brightness(1)" : "brightness(0.96)",
            }}
          >
            <Image
              src={panel.lightSrc}
              alt={panel.alt}
              width={720}
              height={1470}
              className="pointer-events-none h-auto w-full drop-shadow-[0_22px_40px_rgba(18,24,32,0.35)]"
              style={{ display: "var(--preview-light-display)" }}
              sizes="(max-width: 640px) 184px, (max-width: 1024px) 220px, 248px"
              priority={panel.id === "home"}
            />
            <Image
              src={panel.darkSrc}
              alt={panel.alt}
              width={720}
              height={1470}
              className="pointer-events-none h-auto w-full drop-shadow-[0_22px_40px_rgba(18,24,32,0.45)]"
              style={{ display: "var(--preview-dark-display)" }}
              sizes="(max-width: 640px) 184px, (max-width: 1024px) 220px, 248px"
              priority={panel.id === "home"}
            />
          </button>
        );
      })}
    </div>
  );
}

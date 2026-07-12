"use client";

import Image from "next/image";
import { useState } from "react";

const panels = [
  {
    id: "activities",
    src: "/screenshots/activities.png",
    alt: "StreakSpot Activities screen with streaks and check-ins",
    transform:
      "translate(-50%, -50%) translateX(var(--spread-x-neg)) rotate(-9deg)",
  },
  {
    id: "macros",
    src: "/screenshots/macros.png",
    alt: "StreakSpot Macros screen with daily progress and meals",
    transform:
      "translate(-50%, -50%) translateX(var(--spread-x)) rotate(9deg)",
  },
  {
    id: "home",
    src: "/screenshots/home.png",
    alt: "StreakSpot Home screen with today’s activities and macros",
    transform: "translate(-50%, -50%)",
  },
] as const;

type PanelId = (typeof panels)[number]["id"];

export function AppPreviewStack() {
  const [activeId, setActiveId] = useState<PanelId>("home");

  return (
    <div
      className="preview-float preview-stack relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[520px] sm:max-w-[620px] lg:max-w-[680px]"
      role="group"
      aria-label="App screenshots"
    >
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(160,122,48,0.22) 0%, transparent 68%)",
        }}
      />

      {panels.map((panel) => {
        const isActive = activeId === panel.id;

        return (
          <button
            key={panel.id}
            type="button"
            onClick={() => setActiveId(panel.id)}
            aria-pressed={isActive}
            aria-label={`Bring ${panel.id} screen to front`}
            className="absolute top-1/2 left-1/2 w-[168px] cursor-pointer border-0 bg-transparent p-0 transition-[transform,filter] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-[200px] lg:w-[220px]"
            style={{
              transform: `${panel.transform} scale(${isActive ? 1.05 : 0.92})`,
              zIndex: isActive ? 20 : 2,
              filter: isActive ? "brightness(1)" : "brightness(0.96)",
            }}
          >
            <span className="block overflow-hidden rounded-[1.55rem] border border-ink/10 bg-ink shadow-[0_24px_50px_-18px_rgba(27,39,66,0.55)] ring-1 ring-white/50 transition-shadow duration-300 hover:shadow-[0_28px_56px_-16px_rgba(27,39,66,0.6)]">
              <Image
                src={panel.src}
                alt={panel.alt}
                width={470}
                height={1024}
                className="pointer-events-none h-auto w-full"
                sizes="(max-width: 640px) 168px, (max-width: 1024px) 200px, 220px"
                priority
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}

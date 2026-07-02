"use client";

import { cn } from "@/libs/utils";

export function CardSpotlight({ children, className }) {
  const updateSpotlight = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <div
      className={cn(
        "spotlight-card relative isolate overflow-hidden",
        className,
      )}
      onMouseMove={updateSpotlight}
    >
      {children}
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";

export function LiveTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Set initial time immediately on mount to prevent layout shifts
    const formatTime = () => {
      const now = new Date();
      return now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
    };

    setTime(formatTime());

    // Update the clock ticker every single second
    const timer = setInterval(() => {
      setTime(formatTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Render a clean placeholder matching the width during server-side pre-rendering
  if (!time) {
    return (
      <span className="opacity-0 font-mono text-sm sm:text-base">
        00:00:00 AM
      </span>
    );
  }

  return (
    <span className="font-mono text-sm sm:text-base text-neutral-300 tabular-nums select-none tracking-wide">
      {time}
    </span>
  );
}

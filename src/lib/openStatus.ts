"use client";

import { useEffect, useState } from "react";

import { formatTime, shop, weekHours } from "@/data/tacoFactory";

export type ShopClock = { day: number; minutes: number };

const shortWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const clockInSanAntonio = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  hour: "numeric",
  minute: "numeric",
  hourCycle: "h23",
  timeZone: shop.timeZone,
});

function readClock(date: Date): ShopClock {
  const parts = Object.fromEntries(clockInSanAntonio.formatToParts(date).map((part) => [part.type, part.value]));
  return { day: shortWeekdays.indexOf(parts.weekday), minutes: Number(parts.hour) * 60 + Number(parts.minute) };
}

/**
 * San Antonio's weekday and time, from the shop's clock rather than the visitor's. Null on the
 * static render; set after mount and refreshed every minute.
 */
export function useShopClock(): ShopClock | null {
  const [clock, setClock] = useState<ShopClock | null>(null);

  useEffect(() => {
    const tick = () => setClock(readClock(new Date()));
    tick();
    const timer = window.setInterval(tick, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return clock;
}

export type OpenStatus = { open: boolean; label: string };

/** "Open now · until 2:30pm", or when and on which day the shop next opens. */
export function getOpenStatus({ day, minutes }: ShopClock): OpenStatus {
  const today = weekHours[day];
  if (!("closed" in today)) {
    if (minutes >= today.open && minutes < today.close) {
      return { open: true, label: `Open now · until ${formatTime(today.close)}` };
    }
    if (minutes < today.open) {
      return { open: false, label: `Closed now · opens today at ${formatTime(today.open)}` };
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = weekHours[(day + offset) % 7];
    if (!("closed" in next)) {
      const when = offset === 1 ? "tomorrow" : next.day;
      const prefix = "closed" in today ? `Closed ${today.day}s` : "Closed now";
      return { open: false, label: `${prefix} · opens ${when} at ${formatTime(next.open)}` };
    }
  }

  return { open: false, label: "Closed now" };
}

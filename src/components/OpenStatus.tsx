"use client";

import { getOpenStatus, useShopClock } from "@/lib/openStatus";

type OpenStatusProps = { className?: string };

/** Live "open now" line in San Antonio time; most visitors check it before the 2:30pm close. */
export function OpenStatus({ className = "" }: OpenStatusProps) {
  const clock = useShopClock();
  const status = clock ? getOpenStatus(clock) : null;

  return (
    <p className={`inline-flex items-center gap-2.5 rounded-full border-2 border-ink/10 bg-white px-4 py-2 font-bold ${className}`} aria-live="polite">
      <span
        aria-hidden="true"
        className={`size-2.5 shrink-0 rounded-full ${status === null ? "bg-clay/40" : status.open ? "bg-nopal" : "bg-chile"}`}
      />
      {/* Static render: the fixed hours, until the San Antonio clock is known. */}
      {status?.label ?? "Mon – Sat 7am – 2:30pm · Closed Sundays"}
    </p>
  );
}

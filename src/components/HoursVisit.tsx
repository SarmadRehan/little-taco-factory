"use client";

import Image from "next/image";

import { formatHours, hoursDisplayOrder, phoneHref, services, shop, visitImage, weekHours } from "@/data/tacoFactory";
import { useShopClock } from "@/lib/openStatus";

import { OpenStatus } from "./OpenStatus";
import { SectionHeading } from "./SectionHeading";

export function HoursVisit() {
  const today = useShopClock()?.day ?? null;

  return (
    <section id="visit" aria-labelledby="visit-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="visit-title" eyebrow="Come early" title="Hours & Visit" />

        {/* The one thing most visitors check on their phone, before the 2:30pm close. */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-3xl bg-chile px-6 py-6 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <p className="font-display text-3xl uppercase leading-tight tracking-wide sm:text-4xl">
            Closes 2:30pm <span className="block text-xl sm:text-2xl">Closed Sundays</span>
          </p>
          <OpenStatus className="text-ink" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="rounded-3xl border-2 border-ink bg-white p-6 sm:p-8">
            <h3 className="font-display text-3xl uppercase tracking-wide">Hours</h3>
            <dl className="mt-4 divide-y-2 divide-ink/10">
              {hoursDisplayOrder.map((index) => {
                const entry = weekHours[index];
                const isToday = index === today;
                const closed = "closed" in entry;
                return (
                  <div
                    key={entry.day}
                    className={`-mx-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-3 py-3 ${
                      isToday ? "rounded-xl bg-turq" : ""
                    }`}
                  >
                    <dt className="flex items-center gap-2 text-lg font-bold">
                      {entry.day}
                      {isToday && <span className="text-xs font-bold uppercase tracking-wider">Today</span>}
                    </dt>
                    <dd className={`text-lg ${closed && !isToday ? "font-bold text-chile" : ""}`}>{formatHours(entry)}</dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-ink bg-white">
            <div className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:p-8">
              <div>
                <h3 className="font-display text-3xl uppercase tracking-wide">Find us</h3>
                <address className="mt-3 text-lg not-italic leading-relaxed">
                  {shop.street}
                  <br />
                  {shop.city}, {shop.state} {shop.postalCode}
                </address>
                <ul className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
                  {services.map((service) => (
                    <li key={service} className="rounded-full border-2 border-ink/15 px-3 py-1">
                      {service}
                    </li>
                  ))}
                </ul>
                {/* Google Maps: a small room with limited seating. */}
                <p className="mt-4 font-semibold text-turq-ink">Small room, takeout welcome.</p>
              </div>
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-2xl border-2 border-ink sm:w-36">
                <Image src={visitImage.src} alt={visitImage.alt} fill sizes="10rem" className="object-cover" />
              </div>
            </div>
            <div className="grid gap-3 px-6 pb-6 sm:grid-cols-2 sm:px-8 sm:pb-8">
              <a
                href={phoneHref(shop.phone)}
                className="rounded-full bg-chile px-5 py-3 text-center font-bold text-white transition-colors hover:bg-chile-dark"
              >
                Call {shop.phone}
              </a>
              <a
                href={shop.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-ink px-5 py-2.5 text-center font-bold transition-colors hover:bg-ink hover:text-masa"
              >
                Directions
              </a>
            </div>
            <iframe
              title={`Map of ${shop.name} at ${shop.street}, ${shop.city}`}
              src={shop.mapEmbedUrl}
              className="h-64 w-full border-0 border-t-2 border-ink"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

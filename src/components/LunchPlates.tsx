import { lunchPlates, plateSides } from "@/data/tacoFactory";

import { MenuCard } from "./MenuCard";
import { SectionHeading } from "./SectionHeading";

export function LunchPlates() {
  return (
    <section id="lunch" aria-labelledby="lunch-title" className="border-y-2 border-ink/10 bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading id="lunch-title" eyebrow="Until 2:30" title="Lunch Plates" intro={plateSides} />

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {lunchPlates.map((item) => (
            <li key={item.name}>
              <MenuCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

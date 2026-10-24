import Image from "next/image";

import type { MenuItem } from "@/data/tacoFactory";

/** A dish with its own photo; when the photo shows a related dish, it says what's pictured. */
export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white">
      {item.photo && (
        <figure className="relative aspect-[4/3] border-b-2 border-ink">
          <Image
            src={item.photo.src}
            alt={item.photo.alt}
            fill
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 92vw"
            className="object-cover"
          />
          {item.pictured && (
            <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full bg-ink/85 px-3 py-1 text-xs font-bold text-masa">
              Pictured: {item.pictured}
            </figcaption>
          )}
        </figure>
      )}
      <div className="p-6">
        <h3 className="font-display text-3xl uppercase tracking-wide">{item.name}</h3>
        <p className="mt-2 text-lg leading-relaxed text-clay">{item.description}</p>
      </div>
    </article>
  );
}

import Image from "next/image";

import { breakfastTacos, coffee, featuredTaco, moreTacos, shop, tortillaImage } from "@/data/tacoFactory";

import { MenuCard } from "./MenuCard";
import { SectionHeading } from "./SectionHeading";

// Items with a photo get cards; the rest sit in slim text cards, so no card is left half empty.
const withPhotos = breakfastTacos.filter((item) => item.photo);
const textOnly = breakfastTacos.filter((item) => !item.photo);

export function BreakfastTacos() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="menu-title"
          eyebrow="Every morning"
          title="Breakfast Tacos"
          intro="Wrapped in homemade tortillas, fresh every morning."
        />

        {/* The Mashed winner leads, as the brief asks. */}
        <article className="mt-14 grid overflow-hidden rounded-[2rem] border-2 border-ink bg-white md:grid-cols-[1fr_1.1fr]">
          {featuredTaco.photo && (
            <div className="relative aspect-[4/3] border-b-2 border-ink md:aspect-auto md:min-h-[24rem] md:border-r-2 md:border-b-0">
              <Image
                src={featuredTaco.photo.src}
                alt={featuredTaco.photo.alt}
                fill
                sizes="(min-width: 768px) 32rem, 92vw"
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col justify-center p-7 text-center sm:p-10 md:text-left">
            <p className="self-center rounded-full bg-maiz px-4 py-1 text-sm font-bold md:self-start">{shop.award}</p>
            <p className="mt-5 font-script text-3xl text-chile">The famous one</p>
            <h3 className="font-display text-5xl uppercase leading-none tracking-wide sm:text-6xl">{featuredTaco.name}</h3>
            <p className="mt-4 text-lg leading-relaxed text-clay">{featuredTaco.description}</p>
          </div>
        </article>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {withPhotos.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}

          <ul className="flex flex-col gap-6">
            {textOnly.map((item) => (
              <li key={item.name} className="flex flex-1 flex-col justify-center rounded-3xl border-2 border-ink bg-cream p-6">
                <h3 className="font-display text-3xl uppercase tracking-wide">{item.name}</h3>
                <p className="mt-2 text-lg leading-relaxed text-clay">{item.description}</p>
              </li>
            ))}
          </ul>

          <article className="flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-turq sm:col-span-2 lg:col-span-1">
            <div className="relative aspect-[16/9] border-b-2 border-ink lg:aspect-[4/3]">
              <Image
                src={tortillaImage.src}
                alt={tortillaImage.alt}
                fill
                sizes="(min-width: 1024px) 22rem, 92vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl uppercase tracking-wide">Homemade tortillas</h3>
              {/* FB, Jul 8, 2017: "Fresh Home made Tortillas everyday all day." */}
              <p className="mt-2 text-lg leading-relaxed">Fresh, homemade, every day. Pair them with {coffee.toLowerCase()}.</p>
            </div>
          </article>
        </div>

        <div className="mt-10 rounded-3xl border-2 border-dashed border-ink/30 p-6 text-center sm:p-8">
          <h3 className="font-script text-3xl text-chile">More on the menu board</h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {moreTacos.map((name) => (
              <li key={name} className="rounded-full border-2 border-ink/15 bg-white px-4 py-1.5 font-semibold">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-clay">From their printed menu. Ask at the counter for today&apos;s list.</p>
        </div>
      </div>
    </section>
  );
}

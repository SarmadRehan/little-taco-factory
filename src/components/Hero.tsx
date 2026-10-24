import Image from "next/image";

import { heroImage, shop } from "@/data/tacoFactory";

import { OpenStatus } from "./OpenStatus";
import { OrderButton } from "./OrderDialog";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="morning-light relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-20">
        <div className="text-center lg:text-left">
          <p className="font-script text-3xl text-chile sm:text-4xl">Buenos días from McCullough</p>
          <h1 id="hero-title" className="mt-2 font-display text-6xl uppercase leading-[0.92] tracking-wide sm:text-8xl">
            The Little <span className="block text-chile">Taco Factory</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed font-semibold sm:text-2xl lg:mx-0">{shop.tagline}.</p>

          <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
            <OpenStatus />
            <p className="inline-flex items-center gap-2 rounded-full bg-maiz px-4 py-1.5 text-sm font-bold text-ink">
              {/* A ribbon rather than a star, so the press mention never reads as a rating. */}
              <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <circle cx="12" cy="9" r="6" />
                <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
              </svg>
              {shop.awardBadge}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
              href="#menu"
              className="w-full rounded-full bg-chile px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-chile-dark sm:w-auto"
            >
              See the menu
            </a>
            <a
              href="#visit"
              className="w-full rounded-full border-2 border-ink px-8 py-3.5 text-center text-lg font-bold transition-colors hover:bg-ink hover:text-masa sm:w-auto"
            >
              Visit
            </a>
            <OrderButton className="w-full rounded-full border-2 border-turq-ink px-8 py-3.5 text-lg font-bold text-turq-ink transition-colors hover:bg-turq hover:text-ink sm:w-auto">
              Order Now
            </OrderButton>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute -inset-2 -rotate-2 rounded-[2rem] bg-turq sm:-inset-3" />
          <div className="relative aspect-[9/8] overflow-hidden rounded-[1.75rem] border-4 border-ink">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 92vw"
              className="object-cover"
            />
          </div>
          <figcaption className="relative mt-5 text-center font-script text-2xl text-chile">{heroImage.caption}</figcaption>
        </figure>
      </div>
      <div aria-hidden="true" className="sarape" />
    </section>
  );
}

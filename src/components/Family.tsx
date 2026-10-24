import { shop } from "@/data/tacoFactory";

import { Logo } from "./Logo";

export function Family() {
  return (
    <section id="family" aria-labelledby="family-title" className="border-t-2 border-ink/10 bg-ink py-20 text-masa sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <Logo className="w-36 sm:w-44" />
        <h2 id="family-title" className="font-script text-4xl text-maiz sm:text-5xl">
          La familia
        </h2>
        {/* IG bio "Rodriguez Family"; San Antonio Report, 2023-01-25. */}
        <p className="font-display text-4xl uppercase leading-tight tracking-wide sm:text-5xl">{shop.family}</p>
      </div>
    </section>
  );
}

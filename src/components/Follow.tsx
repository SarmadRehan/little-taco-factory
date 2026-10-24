import { shop } from "@/data/tacoFactory";

const links = [
  { href: shop.facebookUrl, label: "Facebook", handle: "The Little Taco Factory", accent: "border-chile hover:bg-chile hover:text-white" },
  { href: shop.instagramUrl, label: "Instagram", handle: shop.instagramHandle, accent: "border-turq-ink hover:bg-turq" },
];

export function Follow() {
  return (
    <section id="follow" aria-labelledby="follow-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="font-script text-3xl text-chile sm:text-4xl">Follow along</p>
        <h2 id="follow-title" className="mt-1 font-display text-5xl uppercase tracking-wide sm:text-6xl">
          Say Hola
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.label} className="min-w-0">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block h-full rounded-3xl border-2 bg-white p-7 text-left transition-colors ${link.accent}`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em]">{link.label}</span>
                <span className="mt-2 block font-display text-2xl uppercase tracking-wide break-words sm:text-3xl">{link.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

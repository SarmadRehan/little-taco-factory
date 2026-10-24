import { formatHours, hoursDisplayOrder, phoneHref, shop, weekHours } from "@/data/tacoFactory";

import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-cream text-ink">
      <div aria-hidden="true" className="sarape" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo className="w-28" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-clay">{shop.tagline}.</p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-chile">Visit</h2>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            {shop.street}
            <br />
            {shop.city}, {shop.state} {shop.postalCode}
            <br />
            <a href={phoneHref(shop.phone)} className="font-bold hover:text-chile">
              {shop.phone}
            </a>
            <br />
            <a href={shop.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-chile">
              Facebook
            </a>
            {" · "}
            <a href={shop.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-chile">
              Instagram
            </a>
          </address>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-chile">Hours</h2>
          <ul className="mt-3 space-y-0.5 text-sm">
            {hoursDisplayOrder.map((index) => (
              <li key={weekHours[index].day}>
                {weekHours[index].short}: {formatHours(weekHours[index])}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-28 sm:px-6 md:pb-10">
        <p className="rounded-full bg-ink px-4 py-2.5 text-center text-sm font-bold text-masa">{shop.demoNotice}</p>
      </div>
    </footer>
  );
}

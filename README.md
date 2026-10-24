# The Little Taco Factory: Landing Page Prototype

A demo site for The Little Taco Factory #2, a breakfast and lunch taqueria at 1510 McCullough Ave,
San Antonio, run by the Rodriguez family. It is built as a client prototype and is not the official
website; banners at the top and bottom of the page say so. It is unlisted (`noindex`) and meant to
be shared only with The Little Taco Factory.

Live demo: https://sarmadrehan.github.io/little-taco-factory/

Only facts about the **1510 McCullough** shop belong here, not the Seguin Rd or Uvalde locations.

## Main features

- **Open now, in San Antonio time.** The hero and the Visit section show a live status ("Open now ·
  until 2:30pm", "Closed Sundays · opens tomorrow at 7am"), and the hours board highlights today.
  Both use the shop's clock (`America/Chicago`), never the visitor's (`src/lib/openStatus.ts`).
  Most customers check the hours on their phone before the 2:30pm close.
- **The Mashed winner first.** The chorizo and egg taco leads the breakfast menu, with one plain
  press line: "Named the best taco in Texas by Mashed".
- **Order Now.** Every order button (header, hero, mobile bar) opens one shared "Coming soon" panel
  (`src/components/OrderDialog.tsx`): "For now, call (210) 227-5657."

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript (strict) and Tailwind CSS v4
- Fonts via `next/font`: Anton (logo-style capitals), Yellowtail (hand-lettered script) and Work Sans (body)
- Hosted on GitHub Pages from the `gh-pages` branch

## Project layout

```
src/
  app/            layout, page, global styles (palette, sarape stripe, morning light), icons
  assets/images/  logo and photos from their own Facebook page, imported statically
  components/     one component per page section, plus the logo, menu card, status and order panel
  data/           tacoFactory.ts: contact details, hours, menu, photos
  lib/            openStatus.ts: San Antonio clock and the open/closed label
```

All business content lives in `src/data/tacoFactory.ts`, with the source of each fact noted beside it.

## Content sources

Facts come from the verified table in the demo brief (checked 2026-10-24):

| Fact | Source |
| --- | --- |
| The Little Taco Factory #2, 1510 McCullough Ave, San Antonio, TX 78212 (some press says 1502) | Google Maps; IG @tacofactory2; SA Current |
| Run by the Rodriguez family | IG bio; San Antonio Report 2023-01-25 |
| Hours: Mon–Sat 7am–2:30pm, Sunday closed | Google Maps |
| Phone (210) 227-5657; dine-in, takeout, delivery; small room with limited seating | Google Maps |
| Mashed named the chorizo and egg breakfast taco the best taco in Texas (2023) | SA Current 2023-03-23; Express-News 2023-03-22 |
| Chorizo and egg, bean and cheese, migas, Denver, carne guisada, cheese enchilada plate, homemade tortillas, coffee with flavored cream | Google Maps highlights; SA Report captions; FB recommendation |

- **Their printed menu** (FB post, June 4, 2016) lists the same tacos and the plate sides ("All
  plates served with rice, beans, salad and 2 flour tortillas"). The "More on the menu board" names
  come from it, with a note to ask at the counter, since it may have changed. Its 2016 weekday
  specials and all prices are left out.
- **Homemade tortillas**: their FB post of July 8, 2017, "Fresh Home made Tortillas everyday all day".
- **Photos** (`src/assets/images/`): only from their own Facebook page posts, no customer photos,
  captured for the demo. Hero: the comal (Mar 28, 2020). Chorizo and egg (Dec 28, 2015), Miga's
  plate (Oct 14, 2017), guisada tacos with cheese (Sep 12, 2015), Mexican plate (Apr 27, 2019),
  tortillas (Jul 8, 2017), the McCullough sign (Mar 19, 2020). Cards whose photo shows a related
  dish say "Pictured: …". There are no photos of their bean and cheese or Denver tacos, so those
  cards have none. Swap in originals before any real launch.
- **Logo**: their Instagram profile picture, masked to its round badge.
- **Colors**: by Sarmad's choice for this demo, a blend. The logo's chile red, black, flag green,
  yellow and cream lead, with the brief's turquoise as the accent.
- **Left out on purpose**: "Est. 1970" (on their logo, but it may describe the family business
  rather than this shop) and the Facebook "recommend" figure.

No prices, star ratings, review quotes or testimonials are shown. The map embeds the street address
rather than the business, so Google's rating card stays off the page.

## Development

```bash
npm ci
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static site in ./out
npm run preview   # serve ./out locally
```

## Deployment (GitHub Pages)

```bash
npm run deploy
```

This builds with `NEXT_PUBLIC_BASE_PATH=/little-taco-factory` (the Pages project path), adds
`.nojekyll` so the `_next/` folder is served, and pushes `./out` to the `gh-pages` branch. If the
repository is renamed, update the base path in the `deploy` script.

## Notes

- Turquoise text (`turq-ink`) is used only on the light masa background, where it meets WCAG AA
  (4.9:1); turquoise fills always carry dark text.
- The page is marked `noindex` so the demo never competes with the shop's own listings.

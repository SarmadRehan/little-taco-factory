import type { StaticImageData } from "next/image";

import chorizoEgg from "@/assets/images/chorizo-egg.jpg";
import comalTortillas from "@/assets/images/comal-tortillas.jpg";
import guisadaTacos from "@/assets/images/guisada-tacos.jpg";
import mcculloughSign from "@/assets/images/mccullough-sign.jpg";
import mexicanPlate from "@/assets/images/mexican-plate.jpg";
import migasPlate from "@/assets/images/migas-plate.jpg";
import tortillas from "@/assets/images/tortillas.jpg";

// Facts come from the verified table in the demo brief (checked 2026-10-24) unless a comment
// names another source. "FB" means their own Facebook page posts, with the post date.
// Only facts about the 1510 McCullough shop belong here, not the Seguin Rd or Uvalde locations.
export const shop = {
  name: "The Little Taco Factory",
  tagline: "Breakfast and lunch on McCullough, with homemade tortillas every morning",
  description:
    "The Little Taco Factory #2 serves breakfast tacos, lunch plates and homemade tortillas at 1510 McCullough Ave, San Antonio, Monday to Saturday from 7am to 2:30pm.",
  demoNotice: "Demo by Sarmad Rehan · not the official Little Taco Factory website",
  // Press, not a review: SA Current 2023-03-23, Express-News 2023-03-22. One plain line, no quote marks.
  award: "Named the best taco in Texas by Mashed",
  awardBadge: "Mashed: best taco in Texas (chorizo & egg)",
  family: "Run by the Rodriguez family.",
  phone: "(210) 227-5657",
  // Google Maps and IG; some press says 1502.
  street: "1510 McCullough Ave",
  city: "San Antonio",
  state: "TX",
  postalCode: "78212",
  facebookUrl: "https://www.facebook.com/profile.php?id=100063658174807",
  instagramUrl: "https://www.instagram.com/tacofactory2/",
  instagramHandle: "@tacofactory2",
  // Address rather than the business name, so the embed doesn't show Google's star-rating card.
  mapEmbedUrl: "https://www.google.com/maps?q=1510+McCullough+Ave,+San+Antonio,+TX+78212&output=embed",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Little+Taco+Factory+1510+McCullough+Ave+San+Antonio+TX+78212",
  timeZone: "America/Chicago",
} as const;

export function phoneHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

/** Opening hours in minutes after midnight, in San Antonio time. */
export type DayHours = { day: string; short: string; open: number; close: number } | { day: string; short: string; closed: true };

const weekday = (day: string, short: string): DayHours => ({ day, short, open: 7 * 60, close: 14 * 60 + 30 });

// Google Maps. Index 0 is Sunday, like Date#getDay.
export const weekHours: DayHours[] = [
  { day: "Sunday", short: "Sun", closed: true },
  weekday("Monday", "Mon"),
  weekday("Tuesday", "Tue"),
  weekday("Wednesday", "Wed"),
  weekday("Thursday", "Thu"),
  weekday("Friday", "Fri"),
  weekday("Saturday", "Sat"),
];

// Monday first, since Sunday is the one day off.
export const hoursDisplayOrder = [1, 2, 3, 4, 5, 6, 0];

export function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const suffix = hours < 12 ? "am" : "pm";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return mins === 0 ? `${hour12}${suffix}` : `${hour12}:${String(mins).padStart(2, "0")}${suffix}`;
}

export function formatHours(entry: DayHours): string {
  return "closed" in entry ? "Closed" : `${formatTime(entry.open)} – ${formatTime(entry.close)}`;
}

// Google Maps.
export const services = ["Dine-in", "Takeout", "Delivery"];

export type Photo = { src: StaticImageData; alt: string; caption?: string };

// Photos only from their own Facebook page posts.
export const heroImage: Photo = {
  src: comalTortillas,
  alt: "A smiling cook in a Little Taco Factory T-shirt turns fresh flour tortillas on a flat-top comal",
  // FB, Mar 28, 2020: "Today's goals: Coffee & Tortillas".
  caption: "Coffee and tortillas, every morning",
};

export const tortillaImage: Photo = {
  src: tortillas,
  alt: "A stack of fresh, freckled flour tortillas in a red plastic basket",
};

export const visitImage: Photo = {
  src: mcculloughSign,
  alt: "The yellow Little Taco Factory Mexican Restaurant sign with the phone number, above the red building on McCullough",
};

export type MenuItem = { name: string; description: string; photo?: Photo; pictured?: string };

// The Mashed winner (SA Current, Express-News). Photo: FB, Dec 28, 2015, "Chorizo and eggs!"
export const featuredTaco: MenuItem = {
  name: "Chorizo & egg",
  description: "Chorizo scrambled with egg in a homemade flour tortilla. The taco Mashed named the best in Texas in 2023.",
  photo: {
    src: chorizoEgg,
    alt: "Chorizo and egg breakfast tacos in homemade flour tortillas, in a red basket lined with paper",
  },
};

// Item names from the brief (Google Maps highlights). Their printed menu (FB, Jun 4, 2016) lists the
// same tacos. The migas photo is their "Miga's Plate" (FB, Oct 14, 2017); no photos exist of their
// bean and cheese or Denver tacos, so those cards have none. No prices.
export const breakfastTacos: MenuItem[] = [
  {
    name: "Migas",
    description: "Egg scrambled with crispy tortilla strips and cheese, in a fresh tortilla or as a plate.",
    photo: {
      src: migasPlate,
      alt: "A migas plate topped with shredded cheese, with potatoes, bacon, a cup of coffee and flour tortillas in a red basket",
    },
    pictured: "Miga's plate, a customer favorite",
  },
  { name: "Bean & cheese", description: "The classic: beans and cheese in a tortilla made that morning." },
  { name: "Denver", description: "A breakfast-taco staple on their menu board, wrapped in a homemade tortilla." },
];

// Their printed menu (FB, Jun 4, 2016), listed by name only. It may have changed since.
export const moreTacos = ["Potato & egg", "Bacon & egg", "Potato & chorizo", "Bean & chorizo", "Chicharrones", "Papa ranchera"];

// "Coffee with flavored cream": brief (FB recommendation).
export const coffee = "Coffee with flavored cream";

// Plate sides from their printed menu: "All plates served with rice, beans, salad and 2 flour tortillas".
export const plateSides = "Every plate comes with rice, beans, salad and two flour tortillas.";

export const lunchPlates: MenuItem[] = [
  {
    name: "Carne guisada",
    description: "Beef stewed in its own gravy, Tex-Mex style. Get it as a plate, or in tacos with cheese.",
    photo: {
      src: guisadaTacos,
      alt: "Three carne guisada tacos with melted cheddar in homemade flour tortillas, in a red basket",
    },
    // FB, Sep 12, 2015: "Guisadas with cheese."
    pictured: "Guisada tacos with cheese",
  },
  {
    name: "Cheese enchilada plate",
    description: "Two cheese enchiladas with rice, beans and salad.",
    photo: {
      src: mexicanPlate,
      alt: "A plate with a cheese enchilada in chili gravy, Mexican rice, refried beans, a chalupa and a crispy taco",
    },
    // FB, Apr 27, 2019: "Mexican Plate coming right up!!"
    pictured: "Mexican plate: enchilada, chalupa and crispy taco",
  },
];

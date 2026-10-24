"use client";

import { useEffect, useState } from "react";

import { phoneHref, shop } from "@/data/tacoFactory";

import { Logo } from "./Logo";
import { OrderButton } from "./OrderDialog";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
  { href: "#family", label: "Family" },
  { href: "#follow", label: "Follow" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink/10 bg-masa/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="The Little Taco Factory, back to top">
          <Logo className="w-11" priority />
          <span className="hidden font-display text-lg uppercase leading-none tracking-wide min-[360px]:block sm:text-xl">
            Little Taco Factory <span className="text-chile">#2</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-bold uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-chile">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={phoneHref(shop.phone)} className="font-bold text-turq-ink transition-colors hover:text-ink">
            {shop.phone}
          </a>
          <OrderButton className="rounded-full bg-chile px-5 py-2.5 font-bold text-white transition-colors hover:bg-chile-dark">
            Order Now
          </OrderButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-ink/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t-2 border-ink/10 bg-masa md:hidden">
          <ul className="flex flex-col px-4 py-2 text-base font-bold uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block py-3" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

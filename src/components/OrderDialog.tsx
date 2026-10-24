"use client";

import { createContext, useCallback, useContext, useRef } from "react";

import { phoneHref, shop } from "@/data/tacoFactory";

import { Logo } from "./Logo";

const OrderDialogContext = createContext<(() => void) | null>(null);

/** Renders the single "ordering coming soon" panel shared by every order button. */
export function OrderDialogProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => dialogRef.current?.showModal(), []);
  const close = () => dialogRef.current?.close();

  return (
    <OrderDialogContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="order-dialog-title"
        aria-describedby="order-dialog-description"
        className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl border-2 border-ink bg-masa p-0 text-ink shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicks on the backdrop land on the <dialog> itself, not its content.
          if (event.target === event.currentTarget) close();
        }}
      >
        <div aria-hidden="true" className="sarape" />
        <div className="p-7 text-center sm:p-8">
          <Logo className="mx-auto w-28" />
          <p className="mt-5 inline-block rounded-full bg-turq px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-ink">
            Coming soon
          </p>
          <h2 id="order-dialog-title" className="mt-3 font-display text-4xl uppercase tracking-wide">
            Order Online
          </h2>
          <p id="order-dialog-description" className="mt-3 leading-relaxed text-clay">
            Online ordering isn&apos;t live yet. For now, call <span className="whitespace-nowrap">{shop.phone}</span>.
          </p>
          <a
            href={phoneHref(shop.phone)}
            className="mt-6 block rounded-full bg-chile px-6 py-3.5 text-lg font-bold text-white transition-colors hover:bg-chile-dark"
          >
            Call {shop.phone}
          </a>
          <button
            type="button"
            autoFocus
            onClick={close}
            className="mt-5 text-sm font-bold text-clay underline underline-offset-4 hover:text-ink"
          >
            Close
          </button>
        </div>
      </dialog>
    </OrderDialogContext.Provider>
  );
}

type OrderButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function OrderButton({ className, children }: OrderButtonProps) {
  const openDialog = useContext(OrderDialogContext);
  if (!openDialog) throw new Error("OrderButton must be rendered inside OrderDialogProvider");

  return (
    <button type="button" aria-haspopup="dialog" className={className} onClick={openDialog}>
      {children}
    </button>
  );
}

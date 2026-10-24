import { phoneHref, shop } from "@/data/tacoFactory";

import { OrderButton } from "./OrderDialog";

/** Thumb-reachable call, order and directions buttons, shown on small screens only. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_1.35fr_1.15fr] gap-2 border-t-2 border-ink/10 bg-masa/95 p-3 text-sm backdrop-blur min-[360px]:text-base md:hidden">
      <a href={phoneHref(shop.phone)} className="rounded-full border-2 border-ink py-2.5 text-center font-bold">
        Call
      </a>
      <OrderButton className="rounded-full bg-chile py-3 text-center font-bold text-white">Order Now</OrderButton>
      <a
        href={shop.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-turq-ink py-2.5 text-center font-bold text-turq-ink"
      >
        Directions
      </a>
    </div>
  );
}

import { shop } from "@/data/tacoFactory";

export function DemoBanner() {
  return <p className="bg-ink px-4 py-2 text-center text-sm font-bold text-masa">{shop.demoNotice}</p>;
}

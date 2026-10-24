import { BreakfastTacos } from "@/components/BreakfastTacos";
import { DemoBanner } from "@/components/DemoBanner";
import { Family } from "@/components/Family";
import { Follow } from "@/components/Follow";
import { Hero } from "@/components/Hero";
import { HoursVisit } from "@/components/HoursVisit";
import { LunchPlates } from "@/components/LunchPlates";
import { MobileActionBar } from "@/components/MobileActionBar";
import { OrderDialogProvider } from "@/components/OrderDialog";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <OrderDialogProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-chile focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <DemoBanner />
      <SiteHeader />
      <main id="main">
        <Hero />
        <BreakfastTacos />
        <LunchPlates />
        <HoursVisit />
        <Family />
        <Follow />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </OrderDialogProvider>
  );
}

import type { Metadata } from "next";
import { menuItems } from "@/lib/data/menu-data";
import MenuFilter from "@/components/menu/MenuFilter";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Browse our full menu of specialty espresso drinks, cold brews, freshly baked pastries and light lunches — served daily at Brew & Co, Notting Hill.",
};

export default function MenuPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-espresso-900 pt-32 pb-16 px-6 lg:px-16">
        <div className="mx-auto max-w-screen-xl">
          <p className="text-xs font-bold tracking-widest uppercase text-caramel-400 mb-3">
            Brew & Co
          </p>
          <h1 className="font-display text-5xl italic font-semibold text-cream-50 lg:text-6xl">
            Our Menu
          </h1>
          <p className="mt-4 text-base text-cream-400 max-w-xl">
            Everything made to order. Seasonal specials rotate monthly — ask
            your barista what&rsquo;s on today.
          </p>
        </div>
      </div>

      {/* Filter + grid */}
      <div className="bg-espresso-950 min-h-screen">
        <MenuFilter items={menuItems} />
      </div>
    </>
  );
}

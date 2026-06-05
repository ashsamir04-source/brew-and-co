import Link from "next/link";
import { MenuItem } from "@/lib/data/menu-data";
import MenuItemCard from "@/components/cards/MenuItemCard";

interface PopularItemsSectionProps {
  items: MenuItem[];
}

export default function PopularItemsSection({ items }: PopularItemsSectionProps) {
  return (
    <section className="bg-cream-50 py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-10 lg:mb-14">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-caramel-500 mb-2">
              Guest Favourites
            </p>
            <h2 className="font-display text-4xl italic font-semibold text-espresso-900 lg:text-5xl">
              Most Popular
            </h2>
          </div>
          <Link
            href="/menu"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-caramel-600 hover:text-caramel-700 transition-colors group"
          >
            View full menu
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile: horizontal scroll; md+: 3-col grid */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {items.map((item, i) => (
              <div
                key={item.id}
                className="snap-start shrink-0 w-72"
              >
                <MenuItemCard item={item} eager={i < 2} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <MenuItemCard key={item.id} item={item} eager={i < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

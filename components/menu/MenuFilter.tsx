"use client";

import { useState } from "react";
import { MenuItem, MenuCategory, categories } from "@/lib/data/menu-data";
import MenuItemCard from "@/components/cards/MenuItemCard";

interface MenuFilterProps {
  items: MenuItem[];
}

type FilterCategory = "All" | MenuCategory;

const allCategories: FilterCategory[] = ["All", ...categories];

export default function MenuFilter({ items }: MenuFilterProps) {
  const [active, setActive] = useState<FilterCategory>("All");

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      {/* Category tabs */}
      <div className="sticky top-16 z-[100] bg-espresso-900 border-b border-cream-900/20">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-fast ${
                  active === cat
                    ? "bg-caramel-500 text-cream-50 shadow-[0_2px_12px_rgba(196,133,74,0.35)]"
                    : "bg-cream-900/30 text-cream-400 hover:bg-cream-900/50 hover:text-cream-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Item count */}
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16 pt-8 pb-2">
        <p className="text-sm text-cream-500">
          {filtered.length} {filtered.length === 1 ? "item" : "items"}
          {active !== "All" && (
            <>
              {" "}
              in{" "}
              <span className="font-medium text-cream-300">{active}</span>
            </>
          )}
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {filtered.map((item, i) => (
            <MenuItemCard key={item.id} item={item} eager={i < 4} />
          ))}
        </div>
      </div>
    </div>
  );
}

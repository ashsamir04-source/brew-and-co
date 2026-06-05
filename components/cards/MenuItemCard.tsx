import Image from "next/image";
import { MenuItem } from "@/lib/data/menu-data";
import BadgeChip from "@/components/ui/BadgeChip";

interface MenuItemCardProps {
  item: MenuItem;
  eager?: boolean;
}

export default function MenuItemCard({ item, eager = false }: MenuItemCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-warm-sm transition-shadow duration-normal hover:shadow-warm-md">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-slow group-hover:scale-[1.04]"
        />
        {item.badge && (
          <div className="absolute top-3 left-3">
            <BadgeChip badge={item.badge} />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-espresso-900">
            {item.name}
          </h3>
          <span className="shrink-0 font-display text-lg font-bold text-caramel-600">
            £{item.price.toFixed(2)}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-cream-700 flex-1">
          {item.description}
        </p>
      </div>
    </article>
  );
}

import { MenuBadge } from "@/lib/data/menu-data";

const styles: Record<MenuBadge, string> = {
  Popular: "bg-caramel-100 text-caramel-800",
  "House Favorite": "bg-honey-100 text-honey-700",
  New: "bg-sage-100 text-sage-700",
};

interface BadgeChipProps {
  badge: MenuBadge;
  className?: string;
}

export default function BadgeChip({ badge, className = "" }: BadgeChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ${styles[badge]} ${className}`}
    >
      {badge}
    </span>
  );
}

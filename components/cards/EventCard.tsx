import Image from "next/image";
import { CoffeeEvent } from "@/lib/data/events";

interface EventCardProps {
  event: CoffeeEvent;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="group flex flex-col bg-espresso-800 rounded-2xl overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          className="opacity-70 transition-opacity duration-slow group-hover:opacity-85"
        />
        {/* Schedule pill */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-caramel-500 px-3 py-1 text-xs font-bold text-cream-50 tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-cream-50 opacity-80" />
            {event.schedule}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs font-bold tracking-widest uppercase text-caramel-400 mb-2">
          {event.time}
        </p>
        <h3 className="font-display text-2xl font-semibold italic text-cream-50 mb-3">
          {event.title}
        </h3>
        <p className="text-sm leading-relaxed text-cream-400 flex-1">
          {event.description}
        </p>
        <div className="mt-5 pt-5 border-t border-cream-800/30">
          <p className="text-xs text-cream-600">
            📍 14 Westbourne Grove, Notting Hill, London W2 4UA
          </p>
        </div>
      </div>
    </article>
  );
}

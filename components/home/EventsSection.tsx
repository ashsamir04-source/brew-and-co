import { CoffeeEvent } from "@/lib/data/events";
import EventCard from "@/components/cards/EventCard";

interface EventsSectionProps {
  events: CoffeeEvent[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <section className="bg-espresso-950 py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-xl">
          <p className="text-xs font-bold tracking-widest uppercase text-caramel-400 mb-2">
            At Brew & Co
          </p>
          <h2 className="font-display text-4xl italic font-semibold text-cream-50 lg:text-5xl">
            Weekly Events
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream-500">
            More than great coffee — we&rsquo;re a gathering place. Join us for
            live music, artisan tastings, and community moments every week.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-sm text-cream-600">
          All events are free to attend. No booking required — just turn up.
        </p>
      </div>
    </section>
  );
}

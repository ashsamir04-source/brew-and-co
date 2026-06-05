import { menuItems } from "@/lib/data/menu-data";
import { events } from "@/lib/data/events";
import HeroSection from "@/components/home/HeroSection";
import PopularItemsSection from "@/components/home/PopularItemsSection";
import EventsSection from "@/components/home/EventsSection";

const popularItems = menuItems.filter((item) => item.badge === "Popular");

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularItemsSection items={popularItems} />
      <EventsSection events={events} />
    </>
  );
}

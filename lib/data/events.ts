export interface CoffeeEvent {
  id: string;
  title: string;
  description: string;
  schedule: string;
  time: string;
  image: string;
}

export const events: CoffeeEvent[] = [
  {
    id: "open-mic-night",
    title: "Open Mic Night",
    description:
      "An intimate evening of live music, poetry, and spoken word in the warmth of our Notting Hill space. Whether you perform or simply listen, every Friday night feels like home.",
    schedule: "Every Friday",
    time: "7:00 PM – 10:00 PM",
    image: "/images/open-mic-night.webp",
  },
  {
    id: "coffee-tasting-session",
    title: "Coffee Tasting Session",
    description:
      "Join our head barista Marcus for a guided cupping session exploring single-origin coffees from around the world. Learn to taste the difference between a Yirgacheffe and a Guatemalan Huehuetenango.",
    schedule: "Every Saturday",
    time: "10:00 AM – 12:00 PM",
    image: "/images/coffee-tasting-session.webp",
  },
];

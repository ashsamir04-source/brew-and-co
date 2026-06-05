import Image from "next/image";
import Link from "next/link";
import ReserveHeroButton from "@/components/home/ReserveHeroButton";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-coffee-shop.webp"
        alt="Brew & Co coffee shop — warm interior with specialty coffee"
        fill
        loading="eager"
        fetchPriority="high"
        quality={85}
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
      />

      {/* Gradient overlay — bottom-heavy so text is always legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/40 to-espresso-950/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 pb-20 lg:px-16 lg:pb-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="mb-4 text-xs font-bold tracking-[0.2em] uppercase text-caramel-400">
            Specialty Coffee · Notting Hill, London
          </p>

          {/* Headline */}
          <h1 className="font-display text-5xl font-semibold italic leading-[1.1] text-cream-50 sm:text-6xl lg:text-7xl">
            Where Every Cup{" "}
            <span className="text-caramel-300">Tells a Story</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base leading-relaxed text-cream-300 max-w-lg sm:text-lg">
            Handcrafted espresso, seasonal pastries & light lunches — served
            with warmth in our Westbourne Grove home since 2019.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ReserveHeroButton />
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border-2 border-cream-200/50 px-8 py-[14px] text-base font-semibold text-cream-100 backdrop-blur-sm transition-all duration-normal ease-spring hover:border-cream-50 hover:bg-cream-50/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-200 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso-950"
            >
              Explore the Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <div className="h-10 w-px bg-cream-400 origin-top animate-[grow_1.8s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}

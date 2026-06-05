import type { Metadata } from "next";
import Image from "next/image";
import FoundersSection from "@/components/about/FoundersSection";
import ValuesSection from "@/components/about/ValuesSection";
import FindUsSection from "@/components/about/FindUsSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Sarah Chen and Marcus Webb — and how a florist's shop on Westbourne Grove became Notting Hill's favourite neighbourhood coffee shop.",
};

export default function AboutPage() {
  return (
    <>
      {/* About hero */}
      <section className="relative flex h-[65vh] min-h-[480px] items-end overflow-hidden">
        <Image
          src="/images/about-hero-interior.webp"
          alt="The interior of Brew & Co coffee shop"
          fill
          loading="eager"
          fetchPriority="high"
          quality={85}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/30 to-transparent" />

        {/* Text */}
        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 pb-16 lg:px-16 lg:pb-20">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] uppercase text-caramel-400">
            Brew & Co · Since 2019
          </p>
          <h1 className="font-display text-5xl font-semibold italic leading-[1.1] text-cream-50 sm:text-6xl lg:text-7xl">
            Our Story
          </h1>
        </div>
      </section>

      <FoundersSection />
      <ValuesSection />
      <FindUsSection />
    </>
  );
}

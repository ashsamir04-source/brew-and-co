import Image from "next/image";

export default function FoundersSection() {
  return (
    <section className="bg-cream-50 py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-warm-lg">
              <Image
                src="/images/founders-portrait.webp"
                alt="Sarah Chen and Marcus Webb, co-founders of Brew & Co"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
            {/* Floating caption card */}
            <div className="absolute -bottom-6 -right-4 bg-caramel-500 rounded-xl px-5 py-4 shadow-warm-md max-w-[180px]">
              <p className="font-display text-xl italic font-semibold text-cream-50 leading-snug">
                Est. 2019
              </p>
              <p className="text-xs text-cream-100 mt-0.5">
                Notting Hill, London
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="lg:pr-8">
            <p className="text-xs font-bold tracking-widest uppercase text-caramel-500 mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl italic font-semibold text-espresso-900 lg:text-5xl mb-8">
              Built on Coffee,{" "}
              <span className="text-caramel-600">Held Together by Community</span>
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-cream-700">
              <p>
                Sarah Chen grew up in Vancouver, where her parents ran a small tea
                house that always smelled of warmth and belonging. She moved to
                London to study graphic design at Central Saint Martins, but it was
                a detour into an East London roastery in 2013 that changed
                everything. She fell in love with specialty coffee — not just the
                taste, but the stories locked inside each bean, the farmers, the
                harvest seasons, the meticulous craft of extraction.
              </p>
              <p>
                Marcus Webb grew up in South London with Jamaican-British heritage
                and a mother who believed food was the language of love. He drifted
                into hospitality at 17 — first kitchens, then cafés, then
                front-of-house management at a restaurant in Mayfair. But it was
                the neighbourhood coffee shop that always called him back. The
                regulars who became friends. The barista who remembered your order.
                The table by the window that felt like yours.
              </p>
              <p>
                They met at a London barista competition in 2015. Sarah was
                competing; Marcus was judging. They argued over grind consistency
                for two hours and went for coffee afterwards. Four years later, they
                opened Brew & Co in a former florist&rsquo;s shop on Westbourne Grove.
              </p>
              <p>
                They kept the original terracotta floor tiles and cast-iron
                shelving. Those bones became the heart of everything — a space that
                feels worn in and welcoming, where strangers become regulars, and
                regulars feel like family.
              </p>
            </div>

            {/* Founders byline */}
            <div className="mt-10 pt-8 border-t border-espresso-900/10 flex items-center gap-6">
              <div>
                <p className="font-display text-lg italic font-semibold text-espresso-900">
                  Sarah Chen
                </p>
                <p className="text-sm text-cream-600">Co-founder &amp; Head of Coffee</p>
              </div>
              <div className="w-px h-10 bg-espresso-900/15" />
              <div>
                <p className="font-display text-lg italic font-semibold text-espresso-900">
                  Marcus Webb
                </p>
                <p className="text-sm text-cream-600">Co-founder &amp; Head of Hospitality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

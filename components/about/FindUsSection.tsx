const hours = [
  { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
  { days: "Saturday", time: "8:00 AM – 5:00 PM" },
  { days: "Sunday", time: "9:00 AM – 4:00 PM" },
];

export default function FindUsSection() {
  return (
    <section className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info column */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-caramel-500 mb-3">
              Visit Us
            </p>
            <h2 className="font-display text-4xl italic font-semibold text-espresso-900 mb-8 lg:text-5xl">
              Find Us in Notting Hill
            </h2>

            {/* Address */}
            <div className="mb-8">
              <h3 className="text-xs font-bold tracking-widest uppercase text-espresso-700 mb-3">
                Address
              </h3>
              <address className="not-italic text-base leading-relaxed text-cream-700 space-y-0.5">
                <p className="font-semibold text-espresso-900">Brew & Co</p>
                <p>14 Westbourne Grove</p>
                <p>Notting Hill</p>
                <p>London W2 4UA</p>
              </address>
              <p className="mt-3 text-sm text-cream-600">
                Nearest tube: Notting Hill Gate (Circle, District, Central lines)
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-espresso-700 mb-3">
                Opening Hours
              </h3>
              <ul className="space-y-3">
                {hours.map(({ days, time }) => (
                  <li key={days} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium text-espresso-800">{days}</span>
                    <span className="text-sm text-cream-600">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="mt-8 pt-8 border-t border-espresso-900/10">
              <p className="text-sm text-cream-700">
                For reservations and event enquiries:{" "}
                <a
                  href="mailto:hello@brewandco.coffee"
                  className="font-medium text-caramel-600 hover:text-caramel-700 transition-colors"
                >
                  hello@brewandco.coffee
                </a>
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative rounded-2xl overflow-hidden bg-espresso-200 min-h-[380px] flex items-center justify-center">
            {/* Styled map placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-200 to-cream-300" />
            {/* Street grid mockup */}
            <div className="absolute inset-0 opacity-40">
              {/* Horizontal lines */}
              {[25, 45, 60, 75].map((pct) => (
                <div
                  key={pct}
                  className="absolute left-0 right-0 h-px bg-espresso-400"
                  style={{ top: `${pct}%` }}
                />
              ))}
              {/* Vertical lines */}
              {[20, 40, 60, 80].map((pct) => (
                <div
                  key={pct}
                  className="absolute top-0 bottom-0 w-px bg-espresso-400"
                  style={{ left: `${pct}%` }}
                />
              ))}
              {/* Main road (thicker) */}
              <div className="absolute left-0 right-0 h-[3px] bg-cream-50 top-[57%]" />
              <div className="absolute top-0 bottom-0 w-[3px] bg-cream-50 left-[39%]" />
            </div>
            {/* Pin */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-caramel-500 shadow-warm-md mb-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-warm-sm text-center">
                <p className="font-display text-sm italic font-semibold text-espresso-900">
                  Brew & Co
                </p>
                <p className="text-xs text-cream-600">14 Westbourne Grove</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

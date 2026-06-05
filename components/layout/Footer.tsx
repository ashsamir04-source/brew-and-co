import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
];

const hours = [
  { days: "Monday – Friday", time: "6:00 AM – 8:00 PM" },
  { days: "Saturday", time: "9:00 AM – 6:00 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-300">
      {/* Main footer grid */}
      <div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl italic font-semibold text-cream-50">
                Brew & Co
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-cream-500 max-w-xs">
              Specialty coffee, fresh pastries & light lunches — crafted with
              care in the heart of Notting Hill, London.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream-600 transition-colors hover:text-caramel-400"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream-600 transition-colors hover:text-caramel-400"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-caramel-400 mb-5">
              Opening Hours
            </h3>
            <ul className="space-y-3">
              {hours.map(({ days, time }) => (
                <li key={days} className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-cream-200">
                    {days}
                  </span>
                  <span className="text-sm text-cream-500">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit us */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-caramel-400 mb-5">
              Visit Us
            </h3>
            <address className="not-italic text-sm leading-relaxed text-cream-400 space-y-1">
              <p className="font-medium text-cream-200">Brew & Co</p>
              <p>14 Westbourne Grove</p>
              <p>Notting Hill</p>
              <p>London W2 4UA</p>
            </address>
            <div className="mt-6 space-y-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-cream-500 transition-colors hover:text-cream-100"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream-900/20 py-6 px-6 lg:px-16">
        <div className="mx-auto max-w-screen-xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream-700">
            © {new Date().getFullYear()} Brew & Co. All rights reserved.
          </p>
          <p className="text-xs text-cream-700">
            14 Westbourne Grove, Notting Hill, London W2 4UA
          </p>
        </div>
      </div>
    </footer>
  );
}

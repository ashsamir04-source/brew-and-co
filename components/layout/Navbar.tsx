"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function openModal() {
    window.dispatchEvent(new Event("brew:open-modal"));
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[200]">
      <nav className="bg-espresso-900/95 backdrop-blur-sm border-b border-cream-900/20">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-16 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMenuOpen(false)}
          >
            {/* Coffee cup icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
              className="text-caramel-400 transition-colors group-hover:text-caramel-300"
            >
              <path
                d="M6 10h14l-1.5 10a2 2 0 01-2 1.75H11.5a2 2 0 01-2-1.75L8 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12h2a2.5 2.5 0 010 5h-2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 7c0-1.5 1.5-2.5 1.5-4M14 7c0-1.5 1.5-2.5 1.5-4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-display text-xl italic font-semibold text-cream-50 group-hover:text-cream-100 transition-colors">
              Brew & Co
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-caramel-400"
                      : "text-cream-400 hover:text-cream-100"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={openModal}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-caramel-500 px-5 py-2 text-sm font-semibold text-cream-50 transition-all duration-normal ease-spring hover:bg-caramel-600 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(196,133,74,0.40)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-400 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso-900"
            >
              Reserve a Table
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-cream-300 hover:text-cream-50 hover:bg-cream-900/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-400"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-cream-900/20 bg-espresso-900 px-6 py-4 space-y-1">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 text-sm font-medium transition-colors rounded-lg px-3 ${
                    isActive
                      ? "text-caramel-400 bg-caramel-500/10"
                      : "text-cream-300 hover:text-cream-50 hover:bg-cream-900/20"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-3 pb-1">
              <button
                onClick={openModal}
                className="w-full rounded-full bg-caramel-500 py-3 text-sm font-semibold text-cream-50 transition-all hover:bg-caramel-600"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

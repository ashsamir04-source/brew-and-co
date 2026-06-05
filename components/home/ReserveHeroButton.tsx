"use client";

export default function ReserveHeroButton() {
  function handleClick() {
    window.dispatchEvent(new Event("brew:open-modal"));
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full bg-caramel-500 px-8 py-4 text-base font-semibold text-cream-50 transition-all duration-normal ease-spring hover:bg-caramel-600 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,133,74,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-400 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso-950"
    >
      Reserve a Table
    </button>
  );
}

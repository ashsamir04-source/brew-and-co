const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Quality Without Compromise",
    body:
      "Every bean we source is traceable. We work directly with small-batch farms in Ethiopia, Colombia, and Guatemala, paying prices that reflect the craft. Our roaster changes the blend seasonally — we follow the harvest, not a fixed formula.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Community First",
    body:
      "We host Open Mic Nights on Fridays so local musicians have a stage. We offer a quiet corner table to the writer who nurses a flat white for three hours. We remember your name. We believe a coffee shop should be the living room your flat doesn't have.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Rooted in Place",
    body:
      "Brew & Co is Notting Hill through and through. We source pastries from a bakery three streets away. We display art by local artists. Our events are free because we believe culture should be accessible. We are part of the neighbourhood — not just located in it.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-espresso-900 py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p className="text-xs font-bold tracking-widest uppercase text-caramel-400 mb-3">
            What We Stand For
          </p>
          <h2 className="font-display text-4xl italic font-semibold text-cream-50 lg:text-5xl">
            Our Values
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map(({ icon, title, body }) => (
            <div
              key={title}
              className="group flex flex-col gap-5 rounded-2xl bg-espresso-800 p-8 transition-transform duration-normal hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-caramel-500/15 text-caramel-400">
                {icon}
              </div>
              <h3 className="font-display text-xl italic font-semibold text-cream-50">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-cream-400">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

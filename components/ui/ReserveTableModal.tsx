"use client";

import { useEffect, useRef, useState } from "react";

interface ReserveTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  partySize: string;
  date: string;
  time: string;
  specialRequests: string;
}

const defaultForm: FormData = {
  name: "",
  email: "",
  partySize: "2",
  date: "",
  time: "10:00",
  specialRequests: "",
};

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00",
];

function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
}

export default function ReserveTableModal({
  isOpen,
  onClose,
}: ReserveTableModalProps) {
  const [form, setForm] = useState<FormData>(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setForm(defaultForm);
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Escape key + focus
  useEffect(() => {
    if (!isOpen) return;
    panelRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="fixed inset-0 z-[400] flex items-center justify-center p-4"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-cream-50 shadow-warm-xl outline-none"
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between bg-espresso-900 px-6 py-5 rounded-t-2xl">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-caramel-400 mb-0.5">
              Brew & Co
            </p>
            <h2
              id="modal-title"
              className="font-display text-2xl italic font-semibold text-cream-50"
            >
              Reserve a Table
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close reservation form"
            className="flex h-9 w-9 items-center justify-center rounded-full text-cream-400 transition-colors hover:bg-cream-800/20 hover:text-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-400"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center text-center py-8">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-caramel-100">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-caramel-600"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 className="font-display text-2xl italic font-semibold text-espresso-900 mb-3">
                We&rsquo;ll see you soon!
              </h3>
              <p className="text-sm text-cream-700 max-w-xs leading-relaxed mb-2">
                Thanks, <strong className="text-espresso-800">{form.name}</strong>. Your reservation request has been received.
              </p>
              <p className="text-sm text-cream-600 mb-8">
                We&rsquo;ll confirm your table for <strong className="text-espresso-700">{form.partySize} {Number(form.partySize) === 1 ? "guest" : "guests"}</strong> by email within a few hours.
              </p>
              <button
                onClick={onClose}
                className="rounded-full bg-caramel-500 px-8 py-3 text-sm font-semibold text-cream-50 transition-all hover:bg-caramel-600"
              >
                Close
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="res-name" className="block text-sm font-semibold text-espresso-800">
                  Your Name <span className="text-terracotta-500">*</span>
                </label>
                <input
                  id="res-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full rounded-lg border border-espresso-900/15 bg-white px-4 py-3 text-sm text-espresso-900 placeholder:text-cream-500 outline-none transition-all focus:border-caramel-400 focus:ring-[3px] focus:ring-caramel-500/15"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="res-email" className="block text-sm font-semibold text-espresso-800">
                  Email Address <span className="text-terracotta-500">*</span>
                </label>
                <input
                  id="res-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="hello@example.com"
                  className="w-full rounded-lg border border-espresso-900/15 bg-white px-4 py-3 text-sm text-espresso-900 placeholder:text-cream-500 outline-none transition-all focus:border-caramel-400 focus:ring-[3px] focus:ring-caramel-500/15"
                />
              </div>

              {/* Party size + Date side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="res-party" className="block text-sm font-semibold text-espresso-800">
                    Party Size <span className="text-terracotta-500">*</span>
                  </label>
                  <select
                    id="res-party"
                    required
                    value={form.partySize}
                    onChange={(e) => update("partySize", e.target.value)}
                    className="w-full rounded-lg border border-espresso-900/15 bg-white px-4 py-3 text-sm text-espresso-900 outline-none transition-all focus:border-caramel-400 focus:ring-[3px] focus:ring-caramel-500/15 appearance-none cursor-pointer"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={String(n)}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="res-date" className="block text-sm font-semibold text-espresso-800">
                    Date <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    min={today}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="w-full rounded-lg border border-espresso-900/15 bg-white px-4 py-3 text-sm text-espresso-900 outline-none transition-all focus:border-caramel-400 focus:ring-[3px] focus:ring-caramel-500/15 cursor-pointer"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="space-y-1.5">
                <label htmlFor="res-time" className="block text-sm font-semibold text-espresso-800">
                  Preferred Time <span className="text-terracotta-500">*</span>
                </label>
                <select
                  id="res-time"
                  required
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  className="w-full rounded-lg border border-espresso-900/15 bg-white px-4 py-3 text-sm text-espresso-900 outline-none transition-all focus:border-caramel-400 focus:ring-[3px] focus:ring-caramel-500/15 appearance-none cursor-pointer"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {formatTime(t)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Special requests */}
              <div className="space-y-1.5">
                <label htmlFor="res-requests" className="block text-sm font-semibold text-espresso-800">
                  Special Requests{" "}
                  <span className="text-cream-500 font-normal">(optional)</span>
                </label>
                <textarea
                  id="res-requests"
                  rows={3}
                  value={form.specialRequests}
                  onChange={(e) => update("specialRequests", e.target.value)}
                  placeholder="Dietary requirements, occasion, seating preference…"
                  className="w-full rounded-lg border border-espresso-900/15 bg-white px-4 py-3 text-sm text-espresso-900 placeholder:text-cream-500 outline-none transition-all focus:border-caramel-400 focus:ring-[3px] focus:ring-caramel-500/15 resize-none"
                />
              </div>

              {/* Note */}
              <p className="text-xs text-cream-600 leading-relaxed">
                Reservations are confirmed by email within a few hours. For same-day bookings, please call us directly.
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-caramel-500 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-normal ease-spring hover:bg-caramel-600 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(196,133,74,0.40)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-400 focus-visible:ring-offset-2"
              >
                Confirm Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

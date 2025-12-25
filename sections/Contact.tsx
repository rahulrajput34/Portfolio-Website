"use client";

import { useState } from "react";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import ContactModal from "@/components/ContactModal";

export const ContactSection = () => {
  // modal open state
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-16">
      {/* wrapper */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden rounded-2xl border border-white/15 bg-black p-8 shadow-xl backdrop-blur-md">
          <div className="max-w-xl">
            <h2 className="uppercase tracking-widest font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text lg:text-xl">
              Let us work together
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-base text-white/70">
              I am available for freelance work, project based collaboration,
              and full time roles. Send a message and I will reply within one
              day.
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
          >
            Contact me
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-emerald-400 opacity-10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 translate-x-1/4 translate-y-1/4 rounded-full bg-sky-400 opacity-10 blur-xl" />
        </div>
        <ContactModal open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
};

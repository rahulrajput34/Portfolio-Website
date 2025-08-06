import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => (
  <section className="w-full py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden rounded-2xl border border-white/15 bg-black p-8 shadow-xl backdrop-blur-md">
        <div className="max-w-xl">
          <h2 className="uppercase tracking-widest font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text lg:text-xl">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/70">
            I&apos;m open to freelance projects, collaborations, and full-time
            roles. Drop me a line and I&apos;ll respond within 24&nbsp;hours.
          </p>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
        >
          Get in Touch
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-emerald-400 opacity-10 blur-2xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 translate-x-1/4 translate-y-1/4 rounded-full bg-sky-400 opacity-10 blur-xl" />
      </div>
    </div>
  </section>
);

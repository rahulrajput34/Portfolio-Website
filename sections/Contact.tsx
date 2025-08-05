import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => (
  <section className="w-full py-12">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-xl bg-black border border-white/10 p-6 md:p-8 shadow-lg w-full">
        <div>
          <h2 className="text-xl sm:text-2xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Let&apos;s Connect and Create Something Amazing!
          </h2>
          <p className="mt-1 text-sm sm:text-base text-white ">
            Reach out to me for collaborations, inquiries, or just to say hello.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-500/30"
        >
          Contact Me
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

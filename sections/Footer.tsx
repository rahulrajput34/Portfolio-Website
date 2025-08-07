import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => (
  <footer className="w-full pt-12">
    {/* wrapper */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* top border */}
      <div className="border-t border-white/10" />
      {/* content */}
      <div className="flex flex-col gap-8 py-8 sm:gap-6 sm:py-6 md:flex-row md:items-center md:justify-between">
        {/* credit */}
        <p className="text-center text-xs text-gray-400 sm:text-sm md:text-left">
          Created by{" "}
          <a href="#" className="underline">
            @rahualaxood
          </a>{" "}
          &bull;{" "}
          <a href="#" className="underline">
            @sharpricious_
          </a>
        </p>

        {/* nav & action */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center md:gap-4">
          {/* social links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <a
              href="#"
              className="flex items-center text-sm text-gray-300 hover:text-white whitespace-nowrap transition"
            >
              Twitter <ArrowUpRightIcon className="ml-1 h-3 w-3 shrink-0" />
            </a>
            <a
              href="#"
              className="flex items-center text-sm text-gray-300 hover:text-white whitespace-nowrap transition"
            >
              Linkedin <ArrowUpRightIcon className="ml-1 h-3 w-3 shrink-0" />
            </a>
            <a
              href="#"
              className="flex items-center text-sm text-gray-300 hover:text-white whitespace-nowrap transition"
            >
              Instagram <ArrowUpRightIcon className="ml-1 h-3 w-3 shrink-0" />
            </a>
            <a
              href="#"
              className="flex items-center text-sm text-gray-300 hover:text-white whitespace-nowrap transition"
            >
              Youtube <ArrowUpRightIcon className="ml-1 h-3 w-3 shrink-0" />
            </a>
          </nav>

          {/* made with */}
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-medium text-gray-900 shadow hover:bg-gray-200 whitespace-nowrap transition"
          >
            <ArrowUpRightIcon className="h-3 w-3 shrink-0" />
            Made in Framer
          </a>
        </div>
      </div>
    </div>
  </footer>
);

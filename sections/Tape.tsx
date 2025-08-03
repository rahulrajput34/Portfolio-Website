import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Responsive",
  "User-friendly",
  "Innovative",
  "Efficient",
  "Secure",
  "Customizable",
  "Scalable",
  "Mobile-first",
  "Cross-platform",
  "Cross-browser",
  "Cross-device",
  "Cross-platform",
  "Cross-browser",
  "Cross-device",
  "Cross-platform",
  "Cross-browser",
  "Cross-device",
  "Cross-platform",
  "Cross-browser",
  "Cross-device",
  "Cross-platform",
  "Cross-browser",
  "Cross-device",
  "Cross-platform",
  "Cross-browser",
];

export const TapeSection = () => {
  const sequence = [...words, ...words];
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="w-full overflow-hidden bg-gradient-to-r from-emerald-300 to-sky-400 backdrop-blur-md select-none -rotate-3">
        <div className="inline-flex items-center gap-6 whitespace-nowrap px-8 py-3 animate-tape [mask-image:linear-gradient(to right,transparent,black_10%,black_90%,transparent)]">
          {sequence.map((word, index) => (
            <span
              key={index}
              className="flex items-center gap-2 uppercase tracking-widest font-semibold text-gray-900"
            >
              {word}
              <StarIcon className="size-4 shrink-0 fill-current -rotate-8" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

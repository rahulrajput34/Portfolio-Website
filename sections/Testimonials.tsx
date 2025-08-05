import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  const sequence = [...testimonials, ...testimonials];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-screen-xl px-4">
        <p className="uppercase tracking-widest font-semibold text-center bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          Testimonial of few folks
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-4">
          Word On The Street About Me
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          Few words from people who collaborated with me
        </p>
        <div className="mt-16 w-full overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="inline-flex gap-8 animate-testimonials whitespace-nowrap">
            {sequence.map((t, idx) => (
              <article
                key={idx}
                className="relative shrink-0 w-72 sm:w-80 md:w-96 rounded-2xl bg-black border border-white/25 overflow-hidden p-6 sm:p-8 flex flex-col whitespace-normal"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-15"
                  style={{ backgroundImage: `url(${grainImage.src})` }}
                />
                <div className="absolute inset-0 -z-10 rounded-2xl border border-white/10" />
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    className="size-11 rounded-full object-cover"
                    width={44}
                    height={44}
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{t.name}</h3>
                    <p className="text-xs text-white/50 leading-none mt-1">
                      {t.position}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/70 line-clamp-6">
                  {t.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "Gihan Fonseka",
    position: "Product Manager at BASL Inc",
    text: "Rahul consistently delivered high quality work and kept the project moving with clear communication. He improved key pages, fixed issues quickly, and made sure the final experience matched our goals and standards.",
    avatar: memojiAvatar1,
  },
  {
    name: "Justin Borzi",
    position: "Team Lead at BASL Inc",
    text: "Rahul is dependable and detail focused. He turned our designs into a clean, responsive interface, handled feedback professionally, and delivered code that was easy to review and maintain.",
    avatar: memojiAvatar5,
  },
  {
    name: "Keit",
    position: "Web Developer at BASL Inc",
    text: "Rahul worked smoothly with the team and improved the overall user experience through thoughtful changes. He paid attention to performance, edge cases, and consistent UI behavior across the app.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily",
    position: "Project Teammate",
    text: "Rahul was organized and easy to collaborate with. He broke down tasks clearly, delivered on time, and helped the team ship a polished result by keeping the work practical and well structured.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  const sequence = [...testimonials, ...testimonials];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-screen-xl px-4">
        <p className="uppercase tracking-widest font-semibold text-center bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          Testimonials
        </p>

        <h2 className="font-serif text-4xl md:text-4xl text-center mt-4">
          What People Say About Working With Me
        </h2>

        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          Feedback from people I have worked with on real projects
        </p>

        <div className="mt-16 w-full overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="inline-flex gap-8 animate-testimonials whitespace-nowrap">
            {sequence.map((t, idx) => (
              <article
                key={idx}
                className="relative shrink-0 w-72 sm:w-80 md:w-96 rounded-2xl bg-black border border-white/10 overflow-hidden p-6 sm:p-8 flex flex-col whitespace-normal"
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

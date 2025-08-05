"use client";

import { Icon } from "@iconify/react";

const roles = [
  { icon: "mdi:web", title: "Web Developer" },
  { icon: "mdi:cellphone", title: "React Native Developer" },
  { icon: "mdi:server", title: "Backend Developer" },
  { icon: "mdi:video", title: "Content Creator" },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4">
        <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
          About Me
        </p>
        <h2 className="mt-4 text-center font-serif text-4xl text-[#f1f5f9] md:text-6xl">
          A Glimpse Into My World
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-white/60 md:text-lg">
          I&apos;m a skilled software developer with experience in TypeScript
          and JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I&apos;m a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems. Let&apos;s work together to bring your
          ideas to life!
        </p>
        <article className="relative mt-20 lg:mx-auto lg:w-5/6 rounded-2xl bg-black p-12 backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-8 place-items-center">
            {roles.map(({ icon, title }, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center gap-8 group"
              >
                <div className="relative">
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-r from-emerald-300 to-sky-400 icon-mask"
                    style={
                      {
                        "--mask": `url('https://api.iconify.design/${icon}.svg?inline')`,
                      } as React.CSSProperties
                    }
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white text-center max-w-[12ch]">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

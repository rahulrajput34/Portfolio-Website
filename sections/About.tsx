"use client";

import { Icon } from "@iconify/react";

const roles = [
  { icon: "mdi:web", title: "Full-Stack Web Developer" },
  { icon: "simple-icons:nextdotjs", title: "Next.js Developer" },
  {
    icon: "simple-icons:laravel",
    title: "Laravel + Vue.js (Inertia) Developer",
  },
  { icon: "logos:mongodb", title: "MERN-Stack Developer" },
  { icon: "logos:nodejs-icon", title: "Node.js & Express.js Developer" },
  { icon: "mdi:monitor", title: "Frontend Developer (React & Vue.js)" },
  { icon: "mdi:server", title: "Backend Developer" },
  { icon: "mdi:cloud-sync", title: "DevOps / Cloud Engineer" },
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
        <article className="mx-auto mt-16 w-full max-w-6xl rounded-2xl bg-black/70 p-10">
          <div className="grid grid-cols-1 items-start gap-14 text-center sm:grid-cols-2 lg:grid-cols-4">
            {roles.map(({ icon, title }, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-300 to-sky-400">
                  <Icon
                    icon={icon}
                    className="h-10 w-10 text-black/80"
                    aria-hidden
                  />
                </div>
                <h3 className="max-w-[14ch] text-lg font-semibold text-white">
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

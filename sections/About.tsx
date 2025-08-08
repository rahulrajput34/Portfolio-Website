"use client";

import { Icon } from "@iconify/react";

const roles = [
  { icon: "mdi:web", title: "Software Engineer (Full-Stack)" },
  { icon: "simple-icons:nextdotjs", title: "Next.js Engineer" },
  { icon: "simple-icons:laravel", title: "Laravel + Vue (Inertia)" },
  { icon: "logos:mongodb", title: "MERN Stack Developer" },
  { icon: "logos:nodejs-icon", title: "Node.js & Express" },
  { icon: "mdi:monitor", title: "Frontend Engineer (React & Vue)" },
  { icon: "mdi:server", title: "Backend Engineer (APIs & DBs)" },
  { icon: "mdi:cloud-sync", title: "Cloud & DevOps (Azure, Docker)" },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28">
      {/* header */}
      <div className="mx-auto max-w-screen-xl px-4">
        <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
          About Me
        </p>
        <h2 className="mt-4 text-center font-serif text-4xl text-[#f1f5f9] md:text-6xl">
          Who I Am & What I Do
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-white/60 md:text-lg">
          I’m a software engineer who ships clean, maintainable products end to
          end. I’ve built chat systems, multi-role onboarding, marketplaces,
          analytics dashboards, and secure file pipelines. Recent work includes
          a library management system, a full-stack e-commerce app, and a
          Drive-style storage tool. I care about thoughtful UX, solid
          architecture, and measurable results—on web and cloud.
        </p>

        {/* roles grid */}
        <article className="mx-auto mt-16 w-full max-w-6xl rounded-2xl bg-black/70 p-10">
          <div className="grid grid-cols-1 items-start gap-14 text-center sm:grid-cols-2 lg:grid-cols-4">
            {roles.map(({ icon, title }, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6">
                {/* icon container */}
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-300 to-sky-400">
                  <Icon
                    icon={icon}
                    className="h-10 w-10 text-black/80"
                    aria-hidden
                  />
                </div>
                {/* role title */}
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

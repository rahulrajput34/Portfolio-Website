"use client";

import { Icon } from "@iconify/react";

const roles = [
  { icon: "mdi:web", title: "Full-Stack Software Engineer" },
  {
    icon: "simple-icons:laravel",
    title: "Laravel & Vue (TypeScript, Inertia, MariaDB)",
  },
  { icon: "simple-icons:nextdotjs", title: "Next.js Engineer" },
  { icon: "simple-icons:dotnet", title: "ASP.NET + React/TypeScript" },
  {
    icon: "logos:react",
    title: "React/TypeScript + Node.js/Express (MongoDB)",
  },
  { icon: "mdi:server", title: "Backend Engineer (APIs & Databases)" },
  { icon: "mdi:cloud-sync", title: "Cloud & DevOps (Azure, Docker)" },
  { icon: "mdi:palette", title: "Full-Stack Designer (UX/UI + Frontend)" },
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
          Who I Am & the Roles I Cover
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-white/60 md:text-lg">
          I build production-grade web apps across React/Next.js, Vue/Laravel
          (Inertia), and ASP.NET. Recent work: real-time chat and role-based
          onboarding for a real-estate platform; a vendor marketplace with
          ECharts dashboards; and S3-backed file and email pipelines. I ship
          secure auth, predictable APIs, and CI/CD on Azure with SQL and
          MongoDB.
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

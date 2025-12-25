"use client";

import { Icon } from "@iconify/react";

type SkillCategory = {
  title: string;
  icon: string;
  items: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "mdi:code-tags",
    items: ["TypeScript", "JavaScript", "C#", "Java", "PHP", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: "mdi:monitor",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Inertia.js",
      "Tailwind CSS",
      "Radix UI",
      "Headless UI",
      "Framer Motion",
      "Iconify",
    ],
  },
  {
    title: "Backend and Security",
    icon: "mdi:server",
    items: [
      "ASP.NET Core",
      "Laravel",
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "Webhooks",
      "Authentication",
      "Authorization",
      "JWT",
      "RBAC",
      "Validation",
      "Zod",
      "Joi",
    ],
  },
  {
    title: "Databases and ORMs",
    icon: "mdi:database",
    items: [
      "PostgreSQL",
      "Microsoft SQL Server",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Redis",
      "Drizzle ORM",
      "Entity Framework Core",
      "Laravel Eloquent",
      "SQLAlchemy",
      "Mongoose",
    ],
  },
  {
    title: "Cloud and DevOps",
    icon: "mdi:cloud-sync",
    items: ["Azure", "AWS S3", "Docker", "Git", "GitHub", "Vercel", "Appwrite"],
  },
  {
    title: "Integrations and Tools",
    icon: "mdi:robot-outline",
    items: [
      "Stripe",
      "Cloudinary",
      "ImageKit",
      "ECharts",
      "Recharts",
      "Chart.js",
      "OpenAI API",
      "Azure OpenAI",
      "Claude",
      "Gemini",
      "Vercel AI SDK",
      "GitHub Copilot",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4">
        <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
          Skills and Tools
        </p>

        <h2 className="mt-4 text-center font-serif text-4xl text-[#f1f5f9] md:text-4xl">
          What I Use to Build and Ship
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-white/60 md:text-lg">
          A practical toolkit for building, testing, and deploying web applications with
          clean user experiences and reliable back end systems.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-white/15 bg-black/70 p-6 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-300 to-sky-400">
                  <Icon
                    icon={cat.icon}
                    className="h-5 w-5 text-black/80"
                    aria-hidden
                  />
                </span>

                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

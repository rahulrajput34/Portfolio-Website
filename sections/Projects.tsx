import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "Library Management System",
    stacks: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "Neon Postgres",
      "NextAuth",
      "Tailwind",
    ],
    results: [
      {
        title: "Role-based auth (admin, staff, members) with protected routes",
      },
      { title: "Borrow/return flows, fines/receipts, and admin dashboards" },
      { title: "Fast DB access with Drizzle + Neon; clean, typed models" },
    ],
    link: "https://library-management-lilac-zeta.vercel.app",
    image: darkSaasLandingPage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Full-Stack E-commerce Platform",
    stacks: [
      "React (Vite)",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe/Razorpay",
      "Cloudinary",
    ],
    results: [
      { title: "Complete cart/checkout, orders, and admin product management" },
      {
        title: "Secure payments (Stripe/Razorpay) and media CDN via Cloudinary",
      },
      { title: "Validation & auth with JWT + Joi; optimized API responses" },
    ],
    link: "https://ecommerce-frontend-beige-ten.vercel.app",
    image: lightSaasLandingPage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Drive-Style Storage App",
    stacks: [
      "Next.js",
      "Appwrite",
      "React 19",
      "Upload (dropzone)",
      "Tailwind",
      "Zod",
    ],
    results: [
      { title: "Folder/file CRUD, sharing, previews, and usage analytics" },
      { title: "Appwrite auth/storage; optimistic UI for quick interactions" },
      { title: "Client-side validation with Zod; responsive, accessible UI" },
    ],
    // TODO: add your live link when ready
    link: "",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      {/* wrapper */}
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* header */}
        <p className="flex justify-center uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Real-world Results
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          A few recent builds that show my approach to shipping clean, reliable
          software.
        </p>

        {/* projects grid */}
        <div className="mt-12 grid gap-20 md:gap-24">
          {portfolioProjects.map((project, idx) => (
            <article
              key={project.title}
              className="sticky group rounded-3xl bg-black overflow-hidden"
              style={{ top: `calc(64px + ${idx * 40}px)` }}
            >
              {/* project card backgrounds */}
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              />
              <div className="absolute inset-0 -z-10 rounded-3xl border border-white/10" />

              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* details */}
                <div className="flex flex-col">
                  <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl mt-3">
                    {project.title}
                  </h3>

                  {/* tech stack chips */}
                  {project.stacks && project.stacks.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stacks.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="flex flex-col gap-4 mt-6">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex items-start gap-3 text-white/70 text-sm md:text-base"
                      >
                        <CheckCircleIcon className="size-5 shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 w-full md:w-auto inline-flex"
                    >
                      <button className="inline-flex items-center justify-center gap-2 h-12 w-full md:w-auto px-6 rounded-xl font-semibold bg-white text-gray-950 transition-colors duration-300 hover:bg-gray-100">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-5 md:size-6" />
                      </button>
                    </a>
                  ) : (
                    <div className="mt-8 text-sm text-white/50">
                      Live link coming soon.
                    </div>
                  )}
                </div>

                {/* image */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-lg transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

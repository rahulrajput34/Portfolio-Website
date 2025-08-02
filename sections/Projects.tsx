import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <p className="flex justify-center uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Real-world Results
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          See how our team has helped companies achieve their goals with our
          latest projects.
        </p>
        <div className="mt-12 grid gap-20 md:gap-24">
          {portfolioProjects.map((project, idx) => (
            <article
              key={project.title}
              className="group relative rounded-3xl bg-gray-800/95 overflow-hidden"
            >
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              />
              <div className="absolute inset-0 -z-10 rounded-3xl border border-white/10" />
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col">
                  <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl mt-3">
                    {project.title}
                  </h3>
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
                </div>
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

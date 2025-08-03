"use client";

import StarIcon from "@/assets/icons/star.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import grainImage from "@/assets/images/grain.jpg";

const tools = [
  { Icon: JavaScriptIcon, label: "JavaScript" },
  { Icon: Html5Icon, label: "HTML5" },
  { Icon: Css3Icon, label: "CSS3" },
  { Icon: ReactIcon, label: "React" },
  { Icon: ChromeIcon, label: "Chrome" },
  { Icon: GithubIcon, label: "Github" },
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
        <p className="mx-auto mt-4 max-w-lg text-center text-[#9eb3c9] md:text-lg">
          Learn more about who I am, what I do, and what inspires me.
        </p>

        <article className="relative mt-20 rounded-2xl bg-[#0f1b2d]/90 p-8 backdrop-blur lg:mx-auto lg:w-5/6">
          <div
            className="absolute inset-0 -z-10 opacity-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="absolute inset-0 -z-10 rounded-2xl border border-[#324256]" />
          <h3 className="flex items-center gap-2 font-serif text-2xl text-[#f1f5f9]">
            <StarIcon className="size-4 text-[#2df9c2]" />
            My Toolbox
          </h3>
          <p className="mt-2 max-w-md text-sm text-[#9eb3c9]">
            Explore the technologies and tools I use to craft exceptional
            digital experiences.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {tools.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-[#324256] bg-[#132033] px-4 py-2"
              >
                <Icon className="size-5 text-[#46cfff]" />
                <span className="text-sm text-[#e2e8f0]">{label}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

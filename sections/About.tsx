"use client";

import Image, { StaticImageData } from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import webIcon from "@/assets/role/web.png";
import mobileIcon from "@/assets/role/mobile.png";
import backendIcon from "@/assets/role/backend.png";
import creatorIcon from "@/assets/role/creator.png";

const roles: { icon: StaticImageData; title: string }[] = [
  { icon: webIcon, title: "Web Developer" },
  { icon: mobileIcon, title: "React Native Developer" },
  { icon: backendIcon, title: "Backend Developer" },
  { icon: creatorIcon, title: "Content Creator" },
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
                  <div className="absolute inset-0 rounded-full bg-black blur-2xl opacity-0 group-hover:opacity-100 transition" />
                  <Image
                    src={icon}
                    alt={title}
                    className="w-24 h-24 object-contain md:w-28 md:h-28"
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

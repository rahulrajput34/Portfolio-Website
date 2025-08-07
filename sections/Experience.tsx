"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import "react-vertical-timeline-component/style.min.css";
import starbucksLogo from "@/assets/company/starbucks.png";
import teslaLogo from "@/assets/company/tesla.png";

type ExperienceItem = {
  title: string;
  company: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "React.js Developer",
    company: "Starbucks",
    icon: starbucksLogo,
    iconBg: "#ffffff",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company: "Tesla",
    icon: teslaLogo,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full pb-20">
      {/* header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <p className="flex justify-center uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Companies I&apos;ve worked with
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Professional Experience
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          I have worked with a variety of companies, each offering unique
          challenges and opportunities for growth. Here are some of the
          companies I have worked with:
        </p>

        {/* timeline */}
        <div className="mt-12">
          <VerticalTimeline lineColor="#ffffff1a">
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: "#000000",
                  color: "#ffffff1a",
                  borderRadius: "12px",
                  boxShadow: "none",
                  padding: "24px",
                  border: "1px solid #ffffff1a",
                }}
                contentArrowStyle={{ borderRight: "7px solid #ffffff1a" }}
                date={exp.date}
                dateClassName="text-gray-300 text-sm font-medium"
                iconStyle={{
                  background: exp.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={
                  <Image
                    src={exp.icon}
                    alt={exp.company}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                }
              >
                {/* entry */}
                <h3 className="text-white font-bold text-xl">{exp.title}</h3>
                <p className="text-violet-200 text-sm font-semibold mb-4">
                  {exp.company}
                </p>

                <ul className="list-disc ml-5 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

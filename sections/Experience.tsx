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
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white font-black text-3xl sm:text-4xl md:text-5xl mb-12 text-center"
        >
          Experience
        </motion.h2>

        <VerticalTimeline lineColor="#ffffff33">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#100d2d",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "none",
                padding: "24px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #100d2d" }}
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
    </section>
  );
};

export default ExperienceSection;

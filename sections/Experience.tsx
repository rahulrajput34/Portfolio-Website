"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import "react-vertical-timeline-component/style.min.css";
import starbucksLogo from "@/assets/company/basl.png";
import teslaLogo from "@/assets/company/sws.png";
import mind from "@/assets/company/mind.png"

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
    title: "Full-Stack Engineer",
    company: "BASL Inc.",
    icon: starbucksLogo, 
    iconBg: "#ffffff",
    date: "8 months (Co-op)",
    points: [
      "Built and shipped a multi-party chat system for agents, vendors, and admins to coordinate marketing activity.",
      "Designed a multi-role onboarding flow (organization, vendor, customer) with clear validation and auditability.",
      "Delivered a service marketplace: service ordering, contractor booking, order summaries, and billing/payment workflows.",
      "Created a vendor analytics dashboard with real-time order stats and YoY sales comparisons using ECharts.",
      "Implemented email notifications with Blade templates, S3 file uploads, and performance upgrades across the stack.",
      "Worked with Docker and Git workflows to streamline local dev and deployments.",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Mind Inventory",
    icon: mind, 
    iconBg: "#ffffff",
    date: "1 year (Contract)",
    points: [
      "Built responsive, accessible UI components with React and TypeScript following team best practices.",
      "Integrated charts and interactive widgets (e.g., dashboards, calendars) while keeping bundles lean and fast.",
      "Collaborated with designers and backend engineers to ship features with clean APIs and predictable state.",
      "Participated in code reviews, improved developer experience, and contributed to documentation.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full pb-20">
      {/* header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <p className="flex justify-center uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Experience
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Professional Experience
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          I’ve contributed across the stack—shipping real-time features,
          analytics, and secure file pipelines—while collaborating with product
          and design to deliver reliable, user-focused software.
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

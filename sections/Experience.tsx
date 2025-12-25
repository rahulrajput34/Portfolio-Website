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
import mind from "@/assets/company/mind.png";

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
    title: "Full Stack Developer",
    company: "BASL Inc.",
    icon: starbucksLogo,
    iconBg: "#ffffff",
    date: "8 Months ( Co-op )",
    points: [
      "Built and scaled full stack features using Vue.js, Laravel, and Inertia as part of a cross functional team",
      "Delivered a role based chat system for agents, vendors, and admins with activity tracking and moderation",
      "Co built multi role onboarding for organizations, vendors, and customers with verification and access controls",
      "Co built a service marketplace with order placement, contractor booking, order summaries, and invoicing with bill payment flows",
      "Implemented Blade email notifications, secure S3 uploads, background jobs, and performance improvements across the stack",
      "Built a vendor analytics dashboard with real time order statistics and year over year sales using ECharts",
      "Shipped consistently using Docker for local development, strong Git workflows, and ongoing system upgrades",
    ],
  },
  {
    title: "React Developer",
    company: "MindInventory",
    icon: mind,
    iconBg: "#ffffff",
    date: "10 Months",
    points: [
      "Built clean and easy to use user interfaces with React for web features",
      "Worked closely with designers and backend teammates to connect screens to APIs and ship features",
      "Handled forms, validation, and error states to keep flows clear and reliable",
      "Improved responsiveness across devices and checked basic accessibility",
      "Fixed bugs, refined UI details, and kept pages fast on mobile and desktop",
      "Collaborated in a remote team, met deadlines, and communicated progress clearly",
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
        <h2 className="font-serif text-3xl md:text-4xl text-center mt-6">
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

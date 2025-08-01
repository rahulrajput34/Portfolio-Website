import memojiComputer from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
// import { Icon } from "@iconify/react";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820] hero-ring"></div>
      <div className="size-[1020] hero-ring"></div>
      <div className="size-[1220] hero-ring"></div>
      {/* <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 border border-red-500 size-[800px] animate-spin [animation-duration:30s]">
        <div className="border border-red-500 inline-flex animate-spin [animation-duration:5s]">
        <div className="border border-red-500 inline-flex animate-spin [animation-duration:5s]">
          <Icon
            icon="streamline:star-2-remix"
            className="size-28 text-emerald-300"
          />
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiComputer}
            alt="Person peeking from behind laptop"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Building Exceptional User Experiences
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in transforming designs into functional.
              High-performing Web applications. Let&apos;s discuss your next
              project.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My work</span>
              <span className="size-4">↓</span>
            </button>
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

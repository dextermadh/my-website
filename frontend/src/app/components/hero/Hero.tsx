"use client";

import { FileUser, Github, Linkedin, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import "./embla.css";

// Lazy-load EmblaCarousel to reduce initial bundle size
const EmblaCarousel = dynamic(() => import("./EmblaCarousel"), { ssr: false });

const navButtons = [
  {
    label: "Github",
    icon: <Github />,
    href: "https://github.com/dextermadh",
    external: true,
  },
  {
    label: "Resume",
    icon: <FileUser />,
    href: "#resume",
    external: false,
  },
  {
    label: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/madhuka-abhishek-wijesundara/",
    external: true,
  },
];

type NavButtonProps = {
  label: string;
  icon: React.ReactNode;
  href: string;
  external: boolean;
};

const renderNavButton = (
  { label, icon, href, external }: NavButtonProps,
  index: number
) => (
  <Link key={index} href={href} target={external ? "_blank" : undefined}>
    <div className="cursor-pointer outline outline-2 outline-[#d9d9d9] w-28 h-10 md:w-32 md:h-12 flex justify-center items-center p-2 md:p-3 gap-2 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:scale-110 text-sm md:text-base">
      {icon}
      <span>{label}</span>
    </div>
  </Link>
);

function Hero() {
  return (
    <div>
      {/* Heading Section */}
      <div className="py-26 md:py-26">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-20 ">
          <span className=" text-[50px] md:text-[120px] font-bold">
            AI / ML
          </span>
          <Link href="#about">
            <div className="flex gap-3 md:gap-5 py-10 md:py-20 cursor-pointer items-center -mt-8 md:mt-0">
              <span className="text-center bg-[#d9d9d9]  text-[#121212] text-[14px] md:text-[28px] p-2 md:p-3 rounded-lg w-[100px] md:w-[450px] h-[35px] md:h-[70px] flex items-center justify-center">
                About Me
              </span>
              <MoveRight className="bg-[#d9d9d9] text-[#121212] p-2 md:p-3 rounded-lg w-[50px] md:w-[70px] h-[35px] md:h-[70px] lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:rotate-90" />
            </div>
          </Link>
          <span className=" text-[50px] md:hidden font-bold -mt-8 md:mt-0">
            Engineer
          </span>
        </div>

        {/* Subtext Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-20 gap-6 mt-6 md:mt-0">
          <div className="ml-4 md:ml-20 -mt-2 md:-mt-10 text-center md:text-left">
            <span className="text-[#d9d9d9]  text-[12px] md:text-[20px] whitespace-pre-wrap">
              Software Engineering Undergraduate
              <br />
              passionate about working on
              <br />
              real-world projects.
            </span>
          </div>
          <div className="-mt-6 md:-mt-16">
            <span className=" text-[60px] lg:text-[120px] font-bold hidden md:flex">
              Engineer
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-7  -mt-16 md:-mt-16">
        {navButtons.map(renderNavButton)}
      </div>

      {/* Carousel */}
      <div className="flex flex-col items-center mt-10 gap-4 md:gap-8">
        <span className=" text-[#d9d9d9] text-[12px] md:text-base">
          .../Featured Projects
        </span>
        <EmblaCarousel slides={[0, 1, 2, 3]} options={{ loop: true }} />
      </div>
    </div>
  );
}

export default Hero;

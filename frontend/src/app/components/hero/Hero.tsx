"use client";

import { FileUser, Github, Linkedin, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import "./embla.css";

// Lazy-load EmblaCarousel to reduce initial bundle size
const EmblaCarousel = dynamic(() => import("./EmblaCarousel"), { ssr: false });

const navButtons = [
  {
    label: "Github",
    icon: <Github />,
    href: "https://github.com/dextermadh",
    external: true,
    download: false,
  },
  {
    label: "Resume",
    icon: <FileUser />,
    href: "/assets/CV_LBDMA.Wijesundara.pdf",
    external: true,
    download: true,
  },
  {
    label: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/madhuka-abhishek-wijesundara/",
    external: true,
    download: false,
  },
];

type NavButtonProps = {
  label: string;
  icon: React.ReactNode;
  href: string;
  external: boolean;
  download: boolean
};

const renderNavButton = (
  { label, icon, href, external, download }: NavButtonProps,
  index: number
) => (
  <a
    key={index}
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    download={download} // enables download if true
  >
    <div className="cursor-pointer outline outline-2 outline-[#d9d9d9] w-28 h-10 sm:w-42 sm:h-12 xl:w-32 xl:h-12 flex justify-center items-center p-2 xl:p-3 gap-2 rounded-xl hover:bg-[#d9d9d9] hover:text-[#121212] xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:scale-110  text-sm xl:text-base">
      {icon}
      <span>{label}</span>
    </div>
  </a>
);

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start faded and slightly below
      animate={{ opacity: 1, y: 0 }} // End fully visible and in place
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      {/* Heading Section */}
      <div className="py-26 xl:py-26">
        <div className="flex flex-col sm:flex-col  xl:flex-row justify-center items-center gap-2 xl:gap-20 ">
          <span className="font-firacode text-[50px] sm:text-[80px] xl:text-[120px] font-bold">
            AI / ML
          </span>
          <Link href="#about">
            <div className="flex gap-3 xl:gap-5 py-10 xl:py-20 cursor-pointer items-center -mt-8 xl:mt-0">
              <span className="text-center bg-[#d9d9d9] font-firacode text-[#121212] text-[14px] sm:text-[24px] xl:text-[28px] p-2 sm:p-5 xl:p-3 rounded-xl w-[100px] sm:w-[200px] xl:w-[450px] h-[35px] sm:h-[55px] xl:h-[70px] flex items-center justify-center">
                About Me
              </span>
              <MoveRight className="bg-[#d9d9d9] text-[#121212] p-2 xl:p-3 rounded-xl w-[50px] sm:w-[60px] xl:w-[70px] h-[35px] sm:h-[55px]  xl:h-[70px] xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:rotate-90" />
            </div>
          </Link>
          <span className="font-firacode text-[50px] sm:text-[80px] xl:hidden font-bold -mt-8 xl:mt-0">
            Engineer
          </span>
        </div>

        {/* Subtext Section */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-20 gap-6 mt-6 xl:mt-0">
          <div className="ml-4 xl:ml-20 -mt-2 xl:-mt-10 text-center xl:text-left">
            <span className="text-[#d9d9d9] font-firacode text-[12px] sm:text-[18px] xl:text-[20px] whitespace-pre-wrap">
              Software Engineering Undergraduate
              <br />
              passionate about working on
              <br />
              real-world projects.
            </span>
          </div>
          <div className="-mt-6 xl:-mt-16">
            <span className="font-firacode text-[60px] xl:text-[120px] font-bold hidden xl:flex">
              Engineer
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-7 font-firacode -mt-16 xl:-mt-16">
        {navButtons.map(renderNavButton)}
      </div>

      {/* Carousel */}
      <div className="flex flex-col items-center mt-10 gap-4 xl:gap-8">
        <span className="font-firacode text-[#d9d9d9] text-[12px] sm:text-[15px] xl:text-base">
          .../Featured Projects
        </span>
        <EmblaCarousel slides={[0, 1, 2, 3]} options={{ loop: true }} />
      </div>
    </motion.div>
  );
}

export default Hero;

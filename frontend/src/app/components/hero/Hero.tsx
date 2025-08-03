'use client'
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { FileUser, Github, Linkedin, MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";


function Hero() {
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <div className="py-26">
        <div className="flex justify-center gap-20">
          <span className="font-firacode text-[120px] font-bold">AI / ML</span>
          <Link href="#about">
            <div className="flex gap-5 py-20 cursor-pointer">
              <span className="text-center bg-[#d9d9d9] font-firacode text-[#121212] text-[28px] p-3 rounded-lg w-[450px] h-[70px]">
                About Me
              </span>
              <MoveRight className="bg-[#d9d9d9] text-[#121212] p-3 rounded-lg w-[70px] h-[70px] transition-transform duration-300 ease-in-out hover:rotate-90" />
            </div>
          </Link>
        </div>
        <div className="flex justify-center gap-20">
          <div className="ml-20 -mt-10">
            <span className="text-[#d9d9d9] font-firacode text-[20px] text-wrap whitespace-pre-wrap ">
              Software Engineering Undergraduate
              <br />
              passionate about working on
              <br />
              real-world projects.
            </span>
          </div>
          <div className="-mt-16 ">
            <span className="font-firacode text-[120px] font-bold">
              Engineer
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-7 font-firacode -mt-16">
        <Link href="https://github.com/dextermadh" target="blank">
          <div className="cursor-pointer outline-2 outline-[#d9d9d9] w-32 h-12 flex justify-center p-3 gap-2 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110">
            <Github />
            <span>Github</span>
          </div>
        </Link>
        <Link href="#resume">
          <div className="cursor-pointer outline-2 outline-[#d9d9d9] w-32 h-12 flex justify-center p-3 gap-2 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110">
            <FileUser />
            <span>Resume</span>
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/madhuka-abhishek-wijesundara/"
          target="blank"
        >
          <div className="cursor-pointer outline-2 outline-[#d9d9d9] w-32 h-12 flex justify-center p-3 gap-2 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110">
            <Linkedin />
            <span>Linkedin</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-10 gap-8">
        <span className="font-firacode text-[#d9d9d9]">
          .../Featured Projects
        </span>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}

export default Hero
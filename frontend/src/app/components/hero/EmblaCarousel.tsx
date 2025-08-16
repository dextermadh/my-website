import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { BotMessageSquare, Code, FolderKanban, Logs, Palette, Shirt } from "lucide-react";
import Link from "next/link";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return {
          icon: (
            <BotMessageSquare className="transition-transform duration-300 ease-in-out hover:scale-110 w-12 h-12 sm:w-16 sm:h-16 md:w-36 md:h-36 xl:w-40 xl:h-40 " />
          ),
          title: "Fashion Designer Chatbot",
          description:
            "AI chatbot for fashion designers, built with Streamlit and FastAPI, handling design, collection, and appointment queries with animated, customizable responses.",
          github:
            "https://github.com/dextermadh/Hybrid-Fashion-Designer-Chatbot",
          id: "#project1",
        };
      case 1:
        return {
          icon: (
            <Logs className="transition-transform duration-300 ease-in-out hover:scale-110 w-12 h-12 sm:w-16 sm:h-16 md:w-36 md:h-36 xl:w-40 xl:h-40" />
          ),
          title: "Log Classification System",
          description:
            "A smart log classification system that combines three different techniques to maximize accuracy and efficiency",
          github: "https://github.com/dextermadh/Hybrid-Log-Classification-",
          id: "#project2",
        };
      case 2:
        return {
          icon: (
            <Shirt className="transition-transform duration-300 ease-in-out hover:scale-110 w-12 h-12 sm:w-16 sm:h-16 md:w-36 md:h-36 xl:w-40 xl:h-40" />
          ),
          title: "Fashion Designer Website",
          description:
            "This website is built with Next.js, using TypeScript for type safety and Tailwind CSS for fast, responsive, and modern UI styling.",
          github:
            "https://github.com/dextermadh/fashion-designer-portfolio-project",
          id: "#project3",
        };
      case 3:
        return {
          icon: (
            <FolderKanban className="transition-transform duration-300 ease-in-out hover:scale-110 w-12 h-12 sm:w-16 sm:h-16 md:w-36 md:h-36 xl:w-40 xl:h-40" />
          ),
          title: "Other Projects",
          description: "Go to my Github to view my latest and old projects.",
          github: "https://github.com/dextermadh/",
          id: "#project4",
        };
      default:
        return {
          icon: null,
          title: "Coming Soon",
          description: "Placeholder for future project.",
          github: "#project",
        };
    };
    
  };

  return (
    <section className="embla w-[100vw] xl:w-[70vw]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => {
            const { icon, title, description, github, id } =
              renderSlideContent(index);
            return (
              <div className="embla__slide w-full xl:w-[30vw]" key={index}>
                <div
                  className={`embla__slide__number ${
                    index === selectedIndex ? "bg-[#d9d9d9]" : ""
                  } border-2`}
                >
                  <div className="flex flex-col md:flex-row xl:flex-row flex-grow w-full h-full">
                    <div
                      className={`flex grow p-6 xl:grow-7 md:grow-7 xl:p-10 text-[#121212] ${
                        index === selectedIndex ? "bg-[#d9d9d9]" : ""
                      } rounded-t-3xl xl:rounded-l-4xl xl:rounded-tr-none justify-center items-center`}
                    >
                      {icon}
                    </div>

                    <div
                      className={`grow md:grow-17  xl:grow-17 xl:py-0 xl:px-0 md:py-10 md:px-10   sm:grow-5 ${
                        index === selectedIndex ? "bg-[#3d3d3d21]" : ""
                      }`}
                    >
                      <div className="flex  xl:flex-row font-firacode gap-2 items-center xl:justify-center ml-6 xl:ml-0 mt-2 xl:mt-10">
                        <span className="text-[12px] sm:text-[20px] xl:text-2xl text-black font-bold p-2 xl:p-3 bg-white">
                          0{index + 1}
                        </span>
                        <span className="text-[12px] sm:text-[20px] xl:text-2xl text-black p-2 xl:p-3 font-bold">
                          {title}
                        </span>
                      </div>

                      <p className="mx-4 xl:ml-26 mr-2 text-left xl:mr-5 mt-0 xl:mt-2 text-[#121212e5] p-2 xl:p-3 text-[10px] sm:text-[16px] xl:text-[16px] font-firacode xl:text-left">
                        {description}
                      </p>

                      <div className="flex xl:flex-row justify-center items-center gap-3 xl:gap-4 mt-2 xl:mt-2 md:mt-8 font-firacode">
                        <div
                          className="flex items-center justify-center -mt-0 xl:mt-0 text-[9px] sm:text-[16px] xl:text-[20px] bg-[#d9d9d9] text-[#121212] hover:bg-[#121212] hover:text-[#d9d9d9] rounded-xl p-2 xl:p-3 md:p-3 w-3/6 sm:w-2/6 xl:w-2/6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 xl:hover:scale-110"
                          id={id}
                        >
                          <a href={id}>Read More</a>
                        </div>

                        <div className="flex w-1/6  xl:w-1/6 p-2 sm:p-3 xl:p-4 md:p-4 bg-[#d9d9d9] hover:bg-[#121212] text-[#121212] hover:text-[#d9d9d9] rounded-xl items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 xl:hover:scale-110">
                          <Link href={github} target="blank">
                            <Code className="w-4 h-4 xl:w-6 xl:h-6" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons sm:ml-10">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots text-[#d9d9d9]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot ".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;

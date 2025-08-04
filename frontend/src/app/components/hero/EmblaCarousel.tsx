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
            <BotMessageSquare
              className="transition-transform duration-300 ease-in-out hover:scale-110 w-12 h-12 md:w-40 md:h-40"
            />
          ),
          title: "Fashion Designer Chatbot",
          description:
            "AI chatbot for fashion designers, built with Streamlit and FastAPI, handling design, collection, and appointment queries with animated, customizable responses.",
          github:
            "https://github.com/dextermadh/Hybrid-Fashion-Designer-Chatbot",
          id: '#project1'
        };
      case 1:
        return {
          icon: (
            <Logs className="transition-transform duration-300 ease-in-out hover:scale-110 w-12 h-12 md:w-40 md:h-40" />
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
            <Shirt className="transition-transform duration-300 ease-in-out hover:scale-110 w-12 h-12 md:w-40 md:h-40" />
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
            <FolderKanban className="transition-transform duration-300 ease-in-out hover:scale-110 w-12 h-12 md:w-40 md:h-40" />
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
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => {
            const { icon, title, description, github, id } =
              renderSlideContent(index);
            return (
              <div className="embla__slide w-full md:w-[30vw]" key={index}>
                <div
                  className={`embla__slide__number ${
                    index === selectedIndex ? "bg-[#d9d9d9]" : ""
                  } border-2`}
                >
                  <div className="flex flex-col md:flex-row flex-grow w-full h-full">
                    <div
                      className={`flex grow p-6 md:grow-7 md:p-10 text-[#121212] ${
                        index === selectedIndex ? "bg-[#d9d9d9]" : ""
                      } rounded-t-3xl md:rounded-l-4xl md:rounded-tr-none justify-center items-center`}
                    >
                      {icon}
                    </div>

                    <div
                      className={`grow md:grow-17  ${
                        index === selectedIndex ? "bg-[#3d3d3d21]" : ""
                      }`}
                    >
                      <div className="flex md:flex-row font-firacode gap-2 items-center md:justify-center ml-6 md:ml-0 mt-2 md:mt-10">
                        <span className="text-[12px] md:text-2xl text-black font-bold p-2 md:p-3 bg-white">
                          0{index + 1}
                        </span>
                        <span className="text-[10px] md:text-2xl text-black p-2 md:p-3 font-bold">
                          {title}
                        </span>
                      </div>

                      <p className="mx-4 md:ml-26 mr-2 text-left md:mr-5 mt-0 md:mt-2 text-[#121212e5] p-2 md:p-3 text-[8px] md:text-[16px] font-firacode md:text-left">
                        {description}
                      </p>

                      <div className="flex md:flex-row justify-center items-center gap-3 md:gap-4 mt-2 font-firacode">
                        <div
                          className="flex items-center justify-center -mt-2 dm:mt-0 text-[9px] md:text-[20px] bg-[#d9d9d9] text-[#121212] hover:bg-[#121212] hover:text-[#d9d9d9] rounded-lg p-2 md:p-3 w-3/6 md:w-2/6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 md:hover:scale-110"
                          id={id}
                        >
                          <a href={id}>Read More</a>
                        </div>

                        <div className="flex w-1/6 md:w-1/6 p-2 md:p-3 bg-[#d9d9d9] hover:bg-[#121212] text-[#121212] hover:text-[#d9d9d9] rounded-lg items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 md:hover:scale-110">
                          <Link href={github} target="blank">
                            <Code className="w-4 h-4" />
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
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
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

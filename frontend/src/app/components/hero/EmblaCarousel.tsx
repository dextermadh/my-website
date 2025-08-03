import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { BotMessageSquare, Code } from "lucide-react";
import Link from "next/link";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide w-[30vw] " key={index}>
              <div
                className={`embla__slide__number ${
                  index === selectedIndex ? "bg-[#d9d9d9]" : ""
                } border-2 `}
              >
                <div className="flex flex-grow w-full h-full">
                  <div
                    className={`flex grow-7 p-10 text-[#121212] ${
                      index === selectedIndex ? "bg-[#d9d9d9]" : ""
                    } rounded-l-4xl justify-center items-center`}
                  >
                    <BotMessageSquare
                      width={150}
                      height={150}
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>

                  <div
                    className={`grow-17 ${
                      index === selectedIndex ? "bg-[#3d3d3d21]" : ""
                    }`}
                  >
                    <div className="flex font-firacode gap-2 justify-center mt-10">
                      <span className="text-2xl text-black font-bold p-3 bg-white">
                        01
                      </span>
                      <span className="text-2xl text-black p-3 font-bold">
                        Fashion Designer Chatbot
                      </span>
                    </div>
                    <p className="ml-26 mt-0 mr-5 text-[#121212e5] p-3 text-[16px] font-firacode">
                      AI chatbot for fashion designers, built with Streamlit and
                      FastAPI, handling design, collection, and appointment
                      queries with animated, customizable responses.
                    </p>
                    <div className="flex justify-center gap-4 mt-2 font-firacode">
                      <span className="flex items-center text-[20px] justify-center bg-[#d9d9d9] text-[#121212] hover:bg-[#121212] hover:text-[#d9d9d9] rounded-lg p-3 w-2/6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
                        Read More
                      </span>
                      <div className="flex w-1/6 p-3 bg-[#d9d9d9] hover:bg-[#121212] text-[#121212] hover:text-[#d9d9d9] rounded-lg items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
                        <Link href="https://github.com/dextermadh/Hybrid-Fashion-Designer-Chatbot" target="blank">
                          <Code width={30} height={35} className="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

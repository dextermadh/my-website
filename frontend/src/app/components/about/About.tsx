"use client";

import React from "react";
import svgPaths from "../imports/svg-pmhvsbynx7";
import myimage2 from "../../../../public/assets/about_me/me2.jpg";
import librariesImg from "../../../../public/assets/about_me/frameworks1.png";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Area of Expertise",
    content:
      "Machine Learning, NLP, Computer Vision, Data Science, LLMs, Frontend/Backend Development, Git",
  },
  {
    title: "Programming Languages",
    content: "Python, SQL, Java",
  },
  {
    title: "Python Libraries",
    content:
      "Numpy, Pandas, Scikit-Learn, PyTorch, Tensorflow, Jupyter, FastAPI, Seaborn, Matplotlib, spaCy, OpenCV, Huggingface, Langchain, Groq, Streamlit",
  },
  {
    title: "Other",
    content: "NextJs, Typescript, Tailwind, Mongodb, Chromadb, GCP, Figma",
  },
];

const education = [
  {
    title: "Bachelor of Software Engineering(Hons)",
    institution: "Open University of Sri Lanka",
    extra: "Major in Software Engineering",
    gpa: "GPA - 3.36",
    duration: "NOV 2022 - DEC 2026",
    style: "bg-[#d9d9d9] text-[#121212]",
  },
  {
    title: "O/Ls and A/Ls",
    institution: "Bandaranayake Central College Veyangoda",
    gpa: "",
    gpa2: "",
    duration: "Jan 2011 - AUG 2019",
    style: "border-3 border-[#3d3d3d] text-[#FFF]",
  },
];

const renderSkillCard = (
  skill: { title: string; content: string },
  i: number
) => (
  <div
    key={i}
    className="flex flex-col bg-[#d9d9d9] p-4 xl:p-6 w-66 xl:w-96 rounded-2xl font-firacode gap-2 xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:scale-110 will-change-transform mx-auto"
  >
    <h1 className="text-black font-bold text-[12px] xl:text-[16px]">
      {skill.title}
    </h1>
    <p className="text-[#3d3d3d] text-[12px] xl:text-[16px]">{skill.content}</p>
  </div>
);

type Education = {
  title: string;
  institution: string;
  extra?: string;
  gpa?: string;
  gpa2?: string;
  duration: string;
  style: string;
};

const renderEducationCard = (edu: Education, i: number) => (
  <div
    key={i}
    className={`flex justify-center xl:transition-transform xl:duration-300 xl:ease-in-out ${
      i % 2 === 0 ? "xl:hover:rotate-1" : "xl:hover:-rotate-1"
    } xl:hover:scale-110 will-change-transform mx-auto`}
  >
    <div
      className={`flex flex-col sm:flex-row xl:flex-row font-firacode gap-2 xl:gap-0 justify-evenly ${edu.style} rounded-xl xl:h-32 p-6 mt-5 w-[68vw] sm:w-[76vw]`}
    >
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-[12px] xl:text-[16px]">{edu.title}</h1>
        <p className="text-[12px] xl:text-[16px]">{edu.institution}</p>
        {edu.extra && (
          <li className="text-[12px] xl:text-[16px]">{edu.extra}</li>
        )}
      </div>
      {edu.gpa && (
        <h1 className="font-bold text-[12px] xl:text-[16px]">{edu.gpa}</h1>
      )}
      <h1 className="font-bold text-[12px] xl:text-[16px]">{edu.duration}</h1>
    </div>
  </div>
);

function About() {
  return (
    <motion.div
      className="relative py-12"
      id="about"
      initial={{ opacity: 0, y: 50 }} // Start faded and below
      whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative SVG */}
      <div className="absolute top-36 -left-[8vw] opacity-50 -rotate-10 -z-100">
        <svg className="w-[80vw]" viewBox="0 0 550 513" fill="none">
          <path d={svgPaths.p9a86b80} stroke="#3D3D3D" strokeWidth="5" />
        </svg>
      </div>

      <hr className="bg-[#d9d9d9] opacity-75" />

      {/* Header */}
      <h1 className="font-firacode px-15 xl:px-40 text-[#d9d9d9] text-[10px] sm:text-[16px] xl:text-[14px] mt-5">
        .../About Me
      </h1>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row xl:flex-row justify-between py-10">
        {/* Left Section */}
        <div className="xl:py-20 sm:py-20 px-30 xl:px-60 flex-1">
          <Image
            src={myimage2}
            alt="me2"
            placeholder="blur"
            loading="lazy"
            className="rounded-xl sm:scale-125 sm:w-full sm:h-fit xl:w-full xl:h-fit xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:scale-110 xl:hover:-rotate-3 will-change-transform"
          />
          <div className="py-50 sm:flex hidden xl:flex">
            <Image
              src={librariesImg}
              alt="libraries"
              placeholder="blur"
              loading="lazy"
              className="xl:scale-125 sm:scale-135 xl:-rotate-[14deg] will-change-transform"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-2">
          <p className="text-[12px] sm:text-[15px] xl: xl:text-xl ml-16 sm:ml-4 xl:ml-0  mr-16 mt-5 xl:mr-60 font-firacode text-[#FFFF]">
            Hello! I’m Madhuka Abhishek, a curious and detail-oriented NLP and
            AI enthusiast currently pursuing a degree in Software Engineering. I
            have hands-on experience in text classification and model
            deployment, and I’m passionate about LLM workflows, backend systems,
            and task automation. I’m excited to work on real-world NLP
            applications using Transformers and open-source tools.
          </p>

          <h1 className="font-firacode text-[#d9d9d9] py-8 -ml-6 xl:-ml-20 px-20 -mt-2 xl:mt-0 text-[10px] xl:text-[14px]">
            .../Technical Skills
          </h1>
          <div className="grid place-items-center gap-6 sm:mr-16 xl:mr-70 mx-auto">
            {skills.map(renderSkillCard)}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="flex justify-end font-firacode xl:text-[40px] font-bold mr-20 mt-0 sm:mr-24 xl:mr-61 xl:-mt-20">
          Education
        </h1>
        <div className="flex flex-col gap-2 ">
          {education.map(renderEducationCard)}
        </div>
        <hr className="bg-[#d9d9d9] opacity-75 mt-16" />
      </motion.div>
    </motion.div>
  );
}

export default About;

import React from 'react';
import svgPaths from '../imports/svg-pmhvsbynx7';
import myimage2 from '../../../../public/assets/about_me/me2.jpg';
import librariesImg from '../../../../public/assets/about_me/frameworks1.png';
import Image from 'next/image';

const skills = [
  {
    title: 'Area of Expertise',
    content:
      'Machine Learning, NLP, Computer Vision, Data Science, LLMs, Frontend/Backend Development, Git',
  },
  {
    title: 'Programming Languages',
    content: 'Python, SQL, Java',
  },
  {
    title: 'Python Libraries',
    content:
      'Numpy, Pandas, Scikit-Learn, PyTorch, Tensorflow, Jupyter, FastAPI, Seaborn, Matplotlib, spaCy, OpenCV, Huggingface, Langchain, Groq, Streamlit',
  },
  {
    title: 'Other',
    content: 'NextJs, Typescript, Tailwind, Mongodb, Chromadb, GCP, Figma',
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
    className="flex flex-col bg-[#d9d9d9] p-4 lg:p-6 w-66 lg:w-96 rounded-2xl font-firacode gap-2 transition-transform duration-300 ease-in-out hover:scale-110 mx-auto"
  >
    <h1 className="text-black font-bold text-[12px] lg:text-[16px]">
      {skill.title}
    </h1>
    <p className="text-[#3d3d3d] text-[12px] lg:text-[16px]">{skill.content}</p>
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
    className={`flex justify-center transition-transform duration-300 ease-in-out hover:scale-110 ${
      i % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
    } mx-auto`}
  >
    <div
      className={`flex flex-col lg:flex-row font-firacode gap-2 lg:gap-0 justify-evenly ${edu.style} rounded-xl lg:h-32 p-6 mt-5 w-[68vw]`}
    >
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-[14px] lg:text-[16px]">{edu.title}</h1>
        <p>{edu.institution}</p>
        {edu.extra && <li>{edu.extra}</li>}
      </div>
      {edu.gpa && (
        <h1 className="font-bold text-[14px] lg:text-[16px]">{edu.gpa}</h1>
      )}
      <h1 className="font-bold text-[14px] lg:text-[16px]">{edu.duration}</h1>
    </div>
  </div>
);

function About() {
  return (
    <div className="relative py-12 " id="about">
      {/* Decorative SVG */}
      <div className="absolute top-36 -left-[8vw] opacity-50 -rotate-10 -z-100">
        <svg className="w-[80vw]" viewBox="0 0 550 513" fill="none">
          <path d={svgPaths.p9a86b80} stroke="#3D3D3D" strokeWidth="5" />
        </svg>
      </div>

      <hr className="bg-[#d9d9d9] opacity-75" />

      {/* Header */}
      <h1 className="font-firacode px-15 lg:px-40 text-[#d9d9d9] text-[10px] lg:text-[14px] mt-5">
        .../About Me
      </h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between py-10">
        {/* Left Section */}
        <div className="lg:py-20 px-30 lg:px-60 flex-1">
          <Image
            src={myimage2}
            alt="me2"
            className="rounded-xl  lg:w-full transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-3"
          />
          <div className="py-50 hidden lg:flex">
            <Image
              src={librariesImg}
              alt="libraries"
              className="scale-130 scale-z-100 -rotate-[14deg]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-2">
          <p className="text-[10px] lg:text-lg ml-16 lg:ml-0 mr-16 mt-5  lg:mr-60 font-firacode text-[#FFFF]">
            Hello! I’m Madhuka Abhishek, a curious and detail-oriented NLP and
            AI enthusiast currently pursuing a degree in Software Engineering. I
            have hands-on experience in text classification and model
            deployment, and I’m passionate about LLM workflows, backend systems,
            and task automation. I’m excited to work on real-world NLP
            applications using Transformers and open-source tools.
          </p>

          <h1 className="font-firacode text-[#d9d9d9] py-8 -ml-6 lg:-ml-20 px-20 -mt-2 lg:mt-0 text-[10px] lg:text-[14px]">
            .../Technical Skills
          </h1>
          <div className="grid place-items-center gap-6 lg:mr-70 mx-auto">
            {skills.map(renderSkillCard)}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h1 className="flex justify-end font-firacode  lg:text-[40px] font-bold mr-20 mt-0 lg:mr-61 lg:-mt-20  ">
          Education
        </h1>
        <div className="flex flex-col gap-2">
          {education.map(renderEducationCard)}
        </div>
        <hr className="bg-[#d9d9d9] opacity-75 mt-16" />
      </div>
    </div>
  );
}

export default About;

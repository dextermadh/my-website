import React from 'react'
import svgPaths from "../imports/svg-pmhvsbynx7";
import myimage2 from '../../../../public/assets/about_me/me2.jpg'
import librariesImg from '../../../../public/assets/about_me/frameworks1.png' 
import Image from 'next/image';

function About() {
  return (
    <div className="relative py-12 " id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-36 -left-[8vw]  opacity-50 -rotate-10 -z-100">
        <svg className="w-[50vw]" viewBox="0 0 550 513" fill="none">
          <path
            d={svgPaths.p9a86b80}
            stroke="#3D3D3D"
            strokeWidth="5"
            className=""
          />
        </svg>
      </div>
      <hr className="bg-[#d9d9d9] opacity-75 " />
      {/* page header */}
      <h1 className="font-firacode px-40 text-[#d9d9d9] mt-5">.../About Me</h1>
      <div className="flex justify-between py-10">
        <div className="py-16 px-64 flex-1">
          {/* my image */}
          <div className="w-90">
            <Image
              src={myimage2}
              alt="me2"
              className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-3"
            />
          </div>
          {/* image of libraries */}
          <div className="py-40">
            <Image
              src={librariesImg}
              alt="me2"
              className="scale-130 scale-z-100 -rotate-[14deg]"
            />
          </div>
        </div>
        <div className="flex-2">
          <p className="mr-60 font-firacode text-[#FFFF]">
            Hello! I’m Madhuka Abhishek, I’m Curious, and detail-oriented NLP
            and AI Enthusiast currently pursuing a degree in Software
            Engineering with hands on experience in text classification and
            model deployment. Passionate about LLM workflows, backend systems,
            and task automation. Excited to work on real world NLP applications
            using Transformers and Open source tools.
          </p>
          <h1 className="font-firacode text-[#d9d9d9] py-8 -ml-6">
            .../Techinical Skills
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col bg-[#d9d9d9] -ml-6 p-6 mr-60 rounded-2xl font-firacode gap-2 transition-transform duration-300 ease-in-out hover:scale-110">
              <h1 className="text-black font-bold">Area of Expertise</h1>
              <p className="text-[#3d3d3d]">
                Machine Learning, NLP, Computer Vision, Data Science, LLMs,
                Frontend/Backend Development, Git
              </p>
            </div>
            <div className="flex flex-col bg-[#d9d9d9] -ml-6 p-6 mr-60 rounded-2xl font-firacode gap-2 transition-transform duration-300 ease-in-out hover:scale-110">
              <h1 className="text-black font-bold">Programming Languages</h1>
              <p className="text-[#3d3d3d]">Python, SQL, Java</p>
            </div>
            <div className="flex flex-col bg-[#d9d9d9] -ml-6 p-6 mr-60 rounded-2xl font-firacode gap-2 transition-transform duration-300 ease-in-out hover:scale-110">
              <h1 className="text-black font-bold">Python Libraries</h1>
              <p className="text-[#3d3d3d]">
                Numpy, Pandas, Scikit-Learn, PyTorch, Tensorflow, Jupyter,
                FastAPI, Seaborn, Matplotlib, spaCy, OpenCV, Huggingface,
                Langchain, Groq, Streamlit
              </p>
            </div>
            <div className="flex flex-col bg-[#d9d9d9] -ml-6 p-6 mr-60 rounded-2xl font-firacode gap-2 transition-transform duration-300 ease-in-out hover:scale-110">
              <h1 className="text-black font-bold">Other</h1>
              <p className="text-[#3d3d3d]">
                NextJs, Typescript Tailwind, Mongodb, Chromadb, GCP, Figma
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="flex justify-end font-firacode text-[40px] font-bold mr-61 -mt-40">
          Education
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
            <div className="flex font-firacode justify-evenly bg-[#d9d9d9] rounded-xl h-32 p-6 mt-5 w-[68vw]">
              <div className="flex flex-col gap-1">
                <h1 className="text-[#121212] font-bold">
                  Bachelor of Software Engineering(Hons)
                </h1>
                <p className="text-[#3d3d3d]">Open University of Sri Lanka</p>
                <li className="text-[#3d3d3d]">
                  Major in Software Engineering{" "}
                </li>
              </div>
              <h1 className="text-[#121212] font-bold">GPA - 3.36</h1>
              <h1 className="text-[#121212] font-bold">NOV 2022 - DEC 2026</h1>
            </div>
          </div>
          <div className="flex justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
            <div className="flex font-firacode justify-evenly  border-3 border-[#3d3d3d] rounded-xl h-32 p-6 mt-5 w-[68vw]">
              <div className="flex flex-col gap-1">
                <h1 className="text-[#FFF] font-bold">O/Ls and A/Ls</h1>
                <p className="text-[#d9d9d9]">
                  Bandaranayake Central College Veyangoda
                </p>
              </div>
              <h1></h1>
              <h1></h1>
              <h1 className="text-[#FFF] font-bold">Jan 2011 - AUG 2019</h1>
            </div>
          </div>
        </div>
        <hr className="bg-[#d9d9d9] opacity-75 mt-16" />
      </div>
    </div>
  );
}

export default About
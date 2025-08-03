import Image from "next/image";
import React from "react";
import chatImage from "../../../../public/assets/projects/chat1.png";
import project2Img1 from "../../../../public/assets/projects/project2img1.png";
import project3Img1 from "../../../../public/assets/projects/project3img1.png";
import project3Img2 from "../../../../public/assets/projects/project3img2.png";
import project3Img3 from "../../../../public/assets/projects/project3img3.png";
import project3Img4 from "../../../../public/assets/projects/project3img4.png";
import '../projects/projects.css'
import { Github } from "lucide-react";
import Link from "next/link";

function Projects() {
  return (
    <div className="flex-col" id="projects">
      <div className="flex justify-center">
        <h1 className="font-firacode text-[#d9d9d9]">.../Projects</h1>
      </div>
      <div className="flex justify-center font-firacode mt-8 gap-4 items-center">
        <h1 className="font-bold bg-[#fff] p-3 text-[#121212]">01</h1>
        <h1 className="font-bold">Fashion Designer Chatbot</h1>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Python
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          Scikit-Learn
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Pandas
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          Numpy
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Groq
        </span>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Transformers
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          Streamlit
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          LinearSVC
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          JSON
        </span>
      </div>
      <div className="flex justify-between mr-52 ml-52 mt-10 ">
        <div className="flex-1/2 flex flex-col gap-2 font-firacode mr-16 mt-5">
          <p className="font-firacode text-[#d9d9d9]">
            An interactive AI-powered chatbot designed for fashion designers to
            assist clients with inquiries related to collections, appointments,
            and design-related topics. Built using Streamlit for the frontend
            and FastAPI for the backend, this project offers a smooth and
            stylish user experience with animated responses and customizable
            classification logic.
          </p>
          <h1 className="font-bold font-firacode">Features</h1>
          <p className="text-[#d9d9d9]">
            🎨 Elegant and intuitive chat UI with custom avatars and icons
          </p>
          <p className="text-[#d9d9d9]">
            ⚡ FastAPI-powered backend for classification and logic processing
          </p>
          <p className="text-[#d9d9d9]">
            🧠 Hybrid intent classification using LinearSVC() and Deepseek R1
          </p>
        </div>
        <div className="flex-1/2">
          <Image
            src={chatImage}
            alt="chat image"
            className="border-2 border-[#3d3d3d] w-[80vw] rounded-xl transition-transform duration-300 ease-in-out hover:scale-140 hover:rotate-1"
          />
        </div>
      </div>
      {/* Project 2 */}
      <div className="flex justify-center font-firacode mt-20 gap-4 items-center">
        <h1 className="font-bold bg-[#fff] p-3 text-[#121212]">02</h1>
        <h1 className="font-bold">Log Classification System</h1>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Python
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          Scikit-Learn
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Pandas
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          Numpy
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Groq
        </span>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          BERT
        </span>

        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          Transformers
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Uvicorn
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          Regex
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          CSV
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          MultinomialNB
        </span>
      </div>
      <div className="flex justify-between mr-52 ml-52 mt-10 ">
        <div className="flex-1/2 flex flex-col gap-2 font-firacode mr-16">
          <p className="font-firacode text-[#d9d9d9]">
            A smart log classification system that combines three different
            techniques to maximize accuracy and efficiency:
          </p>
          <div className="flex  font-firacode mt-4 gap-4 items-center">
            <h1 className="bg-white p-3 text-[#121212]">01</h1>
            <h1>Regex-based Matching (Fastest)</h1>
          </div>
          <div className="flex font-firacode mt-4 gap-4 items-center">
            <h1 className=" bg-white p-3 text-[#121212]">02</h1>
            <h1 className="">
              BERT-based Classification  (for moderately available data)
            </h1>
          </div>
          <div className="flex font-firacode mt-4 gap-4 items-center">
            <h1 className=" bg-white p-3 text-[#121212]">03</h1>
            <h1 className="">
              LLM-based Classification using DeepSeek R1 (for low-sample
              scenarios)
            </h1>
          </div>
          <p className="font-firacode text-[#d9d9d9] mt-4">
            Built using FastAPI and served with  Uvicorn, this project is
            designed for real-time log analysis and classification.
          </p>
        </div>
        <div className="flex-1/2">
          <Image
            src={project2Img1}
            alt="chat image"
            className="border-2 border-[#3d3d3d] w-[80vw] rounded-xl transition-transform duration-300 ease-in-out hover:scale-160 hover:rotate-1"
          />
        </div>
      </div>
      {/* Project 3 */}
      <div className="flex justify-center font-firacode mt-20 gap-4 items-center">
        <h1 className="font-bold bg-[#fff] p-3 text-[#121212]">03</h1>
        <h1 className="font-bold">Fashion Designer Website</h1>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Typescript
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          React
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Tailwind
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          Framer
        </span>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Vercel
        </span>

        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          NextJS
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Aceternity UI
        </span>
      </div>
      <div className="flex justify-center mr-52 ml-52 mt-10">
        {/* <div>
          <Image src={project3Img1} alt="project3img1" />
          <Image src={project3Img2} alt="project3img2" />
        </div> */}
        <iframe
          src="https://ashirafernando.vercel.app/"
          width="1280"
          height="650"
          className="iframe rounded-xl"
        />
      </div>
      <div className="mr-52 ml-52 mt-10">
        <span className="font-firacode ">
          <b>Website Link: </b>
          <p className="cursor-pointer">https://ashirafernando.vercel.app/</p>
        </span>
      </div>
      {/* Project 4 */}
      <div className="flex justify-center font-firacode mt-20 gap-4 items-center">
        <h1 className="font-bold bg-[#fff] p-3 text-[#121212]">04</h1>
        <h1 className="font-bold">Other Projects (Visit my Github)</h1>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          CNNs
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          ANNs
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Tensorflow
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          Pytorch
        </span>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          Docker
        </span>

        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
          GCP
        </span>
        <span className="border-2 border-[#3d3d3d] p-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-1">
          OpenCV
        </span>
      </div>
      <div className="w-[20vw] mx-auto">
        <Link href="https://github.com/dextermadh" target="_blank" className="">
          <span className="flex justify-center mt-8 border-2 border-[#3d3d3d] p-6 gap-2 rounded-2xl hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1">
            <Github className="" />
            <p>dextermadh</p>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Projects;

import Image from "next/image";
import React from "react";
import chatImage from "../../../../public/assets/projects/chat1.png";
import project2Img1 from "../../../../public/assets/projects/project2img1.png";
import project3Img1 from "../../../../public/assets/projects/project3img1.png";
import project3Img2 from "../../../../public/assets/projects/project3img2.png";
import project3Img3 from "../../../../public/assets/projects/project3img3.png";
import project3Img4 from "../../../../public/assets/projects/project3img4.png";
import "../projects/projects.css";
import { Code, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const techList = (items: string[]) =>
  items.map((tech, index) => (
    <span
      key={index}
      className={`border-2 border-[#3d3d3d] text-[9px] xl:text-[16px] p-2 xl:p-3 rounded-xl hover:bg-[#d9d9d9] hover:text-[#121212] xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:scale-110 xl:hover:${
        index % 2 === 0 ? "-rotate-1" : "rotate-1"
      }`}
    >
      {tech}
    </span>
  ));

const ProjectSection = ({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) => (
  <div
    className="flex justify-center font-firacode mt-16 mb-5 gap-4 items-center"
    id={id}
  >
    <h1 className="font-bold bg-[#fff] p-3 text-[14px] xl:text-xl text-[#121212]">
      {number}
    </h1>
    <h1 className="font-bold text-[14px] xl:text-xl">{title}</h1>
  </div>
);

function Projects() {
  return (
    <div className="flex-col" id="projects">
      <div className="flex justify-center">
        <h1 className="font-firacode text-[#d9d9d9]">.../Projects</h1>
      </div>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ProjectSection
          id="project1"
          number="01"
          title="Fashion Designer Chatbot"
        />

        <div className="flex justify-center gap-2 xl:gap-4 mt-8">
          {techList(["Python", "Scikit-Learn", "Pandas", "Numpy", "Groq"])}
        </div>
        <div className="flex justify-center gap-2 xl:gap-4 mt-4">
          {techList(["Transformers", "Streamlit", "LinearSVC", "JSON"])}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col xl:flex-row xl:justify-between justify-center xl:mr-52 xl:ml-52 xl:mt-10 mt-4"
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex xl:flex-1/2  flex-col gap-2 font-firacode mr-12 ml-12 sm:ml-24 sm:mr-24 xl:ml-12 xl:mr-16 mt-5 text-[11px] xl:text-[16px]">
          <p className="font-firacode text-[#d9d9d9]">
            An interactive AI-powered chatbot designed for fashion designers to
            assist clients with inquiries related to collections, appointments,
            and design-related topics. Built using Streamlit for the frontend
            and FastAPI for the backend, this project offers a smooth and
            stylish user experience with animated responses and customizable
            classification logic.
          </p>
          <h1 className="font-bold font-firacode">Features</h1>
          {[
            "🎨 Elegant and intuitive chat UI with custom avatars and icons",
            "⚡ FastAPI-powered backend for classification and logic processing",
            "🧠 Hybrid intent classification using LinearSVC() and Deepseek R1",
          ].map((feature, idx) => (
            <p key={idx} className="text-[#d9d9d9]">
              {feature}
            </p>
          ))}
          <a
            href="https://github.com/dextermadh/Hybrid-Fashion-Designer-Chatbot"
            className="mt-2 xl:mt-4 border-2 border-[#d9d9d9] w-1/6 sm:w-1/10 xl:w-1/6 flex justify-center p-1 rounded-lg hover:bg-[#d9d9d9] hover:text-[#121212]"
            target="blank"
          >
            <Code />
          </a>
        </div>
        <div className="xl:flex-1/2 flex justify-center mt-5 xl:mt-0">
          <Image
            src={chatImage}
            alt="chat image"
            loading="lazy"
            className="border-2 border-[#3d3d3d] w-[80vw] sm:w-[] rounded-xl xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:scale-140 xl:hover:rotate-1"
          />
        </div>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ProjectSection
          id="project2"
          number="02"
          title="Log Classification System"
        />
        <div className="flex justify-center gap-2 xl:gap-4 mt-8">
          {techList(["Python", "Scikit-Learn", "Pandas", "Numpy", "Groq"])}
        </div>
        <div className="flex justify-center gap-2 xl:gap-4 mt-4">
          {techList(["BERT", "Transformers", "Uvicorn", "Regex"])}
        </div>
        <div className="flex justify-center gap-2 xl:gap-4 mt-4">
          {techList(["CSV", "MultinomialNB"])}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col xl:flex-row xl:justify-between justify-center xl:mr-52 xl:ml-52 xl:mt-10 mt-8"
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="xl:flex-1/2 flex flex-col gap-2  font-firacode mr-16 ml-16 sm:ml-24 sm:mr-24  xl:ml-12 xl:mr-16 mt-5 text-[11px] xl:text-[16px]">
          <p className="font-firacode text-[#d9d9d9]">
            A smart log classification system that combines three different
            techniques to maximize accuracy and efficiency:
          </p>
          {[
            { num: "01", desc: "Regex-based Matching (Fastest)" },
            {
              num: "02",
              desc: "BERT-based Classification (for moderately available data)",
            },
            {
              num: "03",
              desc: "LLM-based Classification using DeepSeek R1 (for low-sample scenarios)",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="flex font-firacode mt-4 gap-4 items-center"
            >
              <h1 className="bg-white p-3 text-[#121212]">{item.num}</h1>
              <h1>{item.desc}</h1>
            </div>
          ))}
          <p className="font-firacode text-[#d9d9d9] mt-4">
            Built using FastAPI and served with Uvicorn, this project is
            designed for real-time log analysis and classification.
          </p>
          <a
            href="https://github.com/dextermadh/Hybrid-Log-Classification-"
            className="mt-2 xl:mt-4 border-2 border-[#d9d9d9] w-1/6 sm:w-1/10 xl:w-1/6 flex justify-center p-1 rounded-lg hover:bg-[#d9d9d9] hover:text-[#121212]"
            target="blank"
          >
            <Code />
          </a>
        </div>
        <div className="xl:flex-1/2 flex justify-center mt-5 xl:mt-0">
          <Image
            src={project2Img1}
            alt="chat image"
            loading="lazy"
            className="border-2 border-[#3d3d3d] w-[80vw] rounded-xl xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:scale-160 xl:hover:rotate-1"
          />
        </div>
      </motion.div>

      {/* Project 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ProjectSection
          id="project3"
          number="03"
          title="Fashion Designer Website"
        />
        <div className="flex justify-center gap-2 xl:gap-4 mt-8">
          {techList(["Typescript", "React", "Tailwind", "Framer"])}
        </div>
        <div className="flex justify-center gap-2 xl:gap-4 mt-4">
          {techList(["Vercel", "NextJS", "Aceternity UI"])}
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center xl:mr-52 xl:ml-52 mt-10"
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <iframe
          src="https://ashirafernando.vercel.app/"
          className="iframe rounded-xl sm:w-[600px] xl:w-[1280px] h-[600px] xl:h-[650px]"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        className="xl:mr-52 xl:ml-52 mr-16 ml-16 mt-10"
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="font-firacode text-[11px] xl:text-[16px]">
          <b>Website Link: </b>
          <a
            href="https://ashirafernando.vercel.app"
            className="cursor-pointer"
          >
            https://ashirafernando.vercel.app/
          </a>
          <a
            href="https://github.com/dextermadh/fashion-designer-portfolio-project"
            className="mt-2 xl:mt-4 border-2 border-[#d9d9d9] w-1/6 sm:w-1/10 xl:w-1/12 flex justify-center p-1 rounded-lg hover:bg-[#d9d9d9] hover:text-[#121212]"
            target="blank"
          >
            <Code className="scale-90" />
          </a>
        </span>
      </motion.div>

      {/* Project 4 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ProjectSection
          id="project4"
          number="04"
          title="Other Projects (Visit my Github)"
        />
        <div className="flex justify-center gap-2 xl:gap-4 mt-8">
          {techList(["CNNs", "ANNs", "Tensorflow", "Pytorch"])}
        </div>
        <div className="flex justify-center gap-2 xl:gap-4 mt-4">
          {techList(["Docker", "GCP", "OpenCV"])}
        </div>
      </motion.div>
      <motion.div
        className="xl:w-[20vw] w-[40vw] mx-auto"
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link href="https://github.com/dextermadh" target="_blank">
          <span className="flex justify-center text-[11px] xl:text-[18px]  mt-8 border-2 border-[#3d3d3d] p-3 xl:p-4 gap-2 rounded-2xl hover:bg-[#d9d9d9] hover:text-[#121212] xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:scale-110 xl:hover:rotate-1">
            <Github />
            <p>dextermadh</p>
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

export default Projects;

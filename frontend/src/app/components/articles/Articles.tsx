import React from "react";
import "../articles/articles.css";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";

function Articles() {
  return (
    <motion.div
      id="articles"
      initial={{ opacity: 0, y: 50 }} // Start faded and below
      whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <hr className="mt-20" />
      <h1 className="font-firacode flex justify-end xl:mr-61 mr-16 mt-12 text-[20px] xl:text-[40px] font-bold">
        Articles
      </h1>
      <WavyBackground
        className="max-w-4xl mx-auto pb-40 font-firacode"
        backgroundFill="#121212"
      >
        <p className="text-2xl xl:text-7xl text-white font-bold inter-var text-center xl:transition-transform xl:duration-300 xl:ease-in-out will-change-transform">
          Coming Soon...
        </p>
        <p className="text-base xl:text-xl mt-4 text-white font-normal inter-var text-center">
          stay tuned to read my articles
        </p>
      </WavyBackground>
    </motion.div>
  );
}

export default Articles;

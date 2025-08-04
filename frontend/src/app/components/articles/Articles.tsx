import React from 'react'
import '../articles/articles.css'
import { WavyBackground } from '@/components/ui/wavy-background';

function Articles() {
  return (
    <div id='articles'>
      <hr className="mt-20" />
      <h1 className="font-firacode flex justify-end lg:mr-61 mr-16 mt-12 text-[20px] lg:text-[40px] font-bold">
        Articles
      </h1>
      <WavyBackground
        className="max-w-4xl mx-auto pb-40 font-firacode"
        backgroundFill="#121212"
      >
        <p className="text-2xl lg:text-7xl text-white font-bold inter-var text-center">
          Coming Soon...
        </p>
        <p className="text-base lg:text-lg mt-4 text-white font-normal inter-var text-center">
          stay tuned to read my articles
        </p>
      </WavyBackground>
    </div>
  );
}

export default Articles
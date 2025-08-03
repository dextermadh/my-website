import Image from 'next/image'
import React from 'react'
import my_image1 from '../../../../public/assets/navbar/me.jpg'
import svgPaths from "../imports/svg-pmhvsbynx7";
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex items-center px-20 py-8 ">
      {/* Decorative polygons */}
      <div className="absolute -top-[160px] -right-22 w-80 h-90 opacity-50">
        <svg className="w-full h-full" viewBox="0 0 550 513" fill="none">
          <path
            d={svgPaths.p9a86b80}
            stroke="#3D3D3D"
            strokeWidth="5"
            className="rotate-[342deg]"
          />
        </svg>
      </div>
      <div className="absolute -top-32 -left-12 w-96 h-96 opacity-50 -rotate-120">
        <svg className="w-full h-full" viewBox="0 0 550 513" fill="none">
          <path
            d={svgPaths.p9a86b80}
            stroke="#3D3D3D"
            strokeWidth="5"
            className="rotate-[342deg]"
          />
        </svg>
      </div>
      {/* <div className="z-100 cursor-pointer flex justify-start gap-3 fixed top-8 left-30"> */}
      {/* <Image
          src={my_image1}
          width={50}
          height={50}
          alt="me1"
          className="rounded-4xl"
        />
        <div className="flex flex-col text-[#d9d9d9] hover:text-white">
          <span>Madhuka</span>
          <span>Abhishek</span>
        </div> */}
      {/* </div> */}
      <div className="z-100000 flex justify-center flex-grow gap-10 font-opensans bg-[#121212] text-[#d9d9d9] border-2 rounded-2xl p-2 w-2/7  fixed top-10 right-1/3 transition-transform duration-300 ease-in-out hover:scale-110">
        <Link href="#about">
          <span className="cursor-pointer hover:text-white">About</span>
        </Link>
        <Link href="#projects">
          <span className="cursor-pointer hover:text-white">Projects</span>
        </Link>
        <Link href="#articles">
          <span className="cursor-pointer hover:text-white">Articles</span>
        </Link>
        <Link href="#contacts">
          <span className="cursor-pointer hover:text-white">Contacts</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar
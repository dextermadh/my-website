import Image from "next/image";
import React from "react";
import svgPaths from "../imports/svg-pmhvsbynx7";
import Link from "next/link";
import my_image1 from "../../../../public/assets/navbar/me.jpg";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contacts" },
];


const Navbar = () => {
  return (
    <div className="relative flex items-center px-4 py-4 lg:px-20 lg:py-8">
      {/* Decorative polygons */}
      <div className="absolute top-[160px] -right-34 lg:-top-[160px] lg:-right-22 w-80 h-90 opacity-50 -z-100 rotate-12">
        <svg className="w-full h-full" viewBox="0 0 550 513" fill="none">
          <path
            d={svgPaths.p9a86b80}
            stroke="#3D3D3D"
            strokeWidth="5"
            className="rotate-[342deg]"
          />
        </svg>
      </div>
      <div className="absolute top-50 -left-50 lg:-top-32 lg:-left-12 w-100 h-96 opacity-50 -rotate-120 -z-100">
        <svg className="w-full h-full" viewBox="0 0 550 513" fill="none">
          <path
            d={svgPaths.p9a86b80}
            stroke="#3D3D3D"
            strokeWidth="5"
            className="rotate-[342deg]"
          />
        </svg>
      </div>
      {/* Nav Links */}
      <div
        className="z-[100000] fixed top-6 lg:top-10 left-1/2 transform -translate-x-1/2
  flex justify-center gap-6 lg:gap-10 font-opensans
  bg-[#121212] text-[#d9d9d9] text-[12px] lg:text-[15px]
  border-2 rounded-2xl px-4 py-2 w-9/12 sm:w-4/5 lg:w-2/6
  transition-transform duration-300 ease-in-out hover:scale-105"
      >
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <span className="cursor-pointer hover:text-white whitespace-nowrap">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import React from "react";
import svgPaths from "../imports/svg-pmhvsbynx7";
import Link from "next/link";
import my_image1 from "../../../../public/assets/navbar/me.jpg";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contacts" },
];

const Navbar = () => {
  return (
    <div className="relative flex items-center px-4 py-4 xl:px-20 xl:py-8">
      {/* Decorative polygons */}
      <div className="absolute top-[160px] -right-34 xl:-top-[160px] xl:-right-22 w-80 h-90 opacity-50 -z-100 rotate-12">
        <svg className="w-full h-full" viewBox="0 0 550 513" fill="none">
          <path
            d={svgPaths.p9a86b80}
            stroke="#3D3D3D"
            strokeWidth="5"
            className="rotate-[342deg]"
          />
        </svg>
      </div>
      <div className="absolute top-50 -left-50 xl:-top-32 xl:-left-12 w-100 h-96 opacity-50 -rotate-120 -z-100">
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
      <motion.div
        initial={{ opacity: 0 }} // start invisible
        animate={{ opacity: 1 }} // fade in
        transition={{ duration: 1 }} // smooth 1s fade
        className="z-[100000] fixed top-6 xl:top-10 left-1/2 transform -translate-x-1/2
          flex justify-center gap-6 xl:gap-10 font-opensans
          bg-[#121212] text-[#d9d9d9] text-[12px] sm:text-[15px] xl:text-[15px]
          border-2 rounded-2xl px-4 py-2 w-9/12 sm:w-3/6 xl:w-2/6
          xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:scale-105"
      >
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <span className="cursor-pointer hover:text-white whitespace-nowrap">
              {label}
            </span>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;

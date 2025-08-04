import React from "react";
import svgPaths from "../imports/svg-pmhvsbynx7";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contacts" },
];

const Navbar = () => {
  return (
    <div className="relative flex items-center px-4 py-4 lg:px-20 lg:py-8">
      {/* Single optimized decorative polygon */}
      <div className="absolute top-[160px] -right-34 lg:-top-40 lg:-right-22 w-80 h-90 opacity-50 -z-10 rotate-12 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 550 513"
          fill="none"
          aria-hidden="true"
        >
          <path
            d={svgPaths.p9a86b80}
            stroke="#3D3D3D"
            strokeWidth="5"
            className="rotate-[342deg]"
          />
        </svg>
      </div>
      {/* Nav Links */}
      <nav
        className="fixed top-6 lg:top-10 left-1/2 -translate-x-1/2 z-50
        flex justify-center gap-6 lg:gap-10 font-opensans
        bg-[#121212] text-[#d9d9d9] text-[12px] lg:text-[15px]
        border-2 rounded-2xl px-4 py-2 w-9/12 sm:w-4/5 lg:w-2/6
        lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:scale-105"
      >
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <span className="cursor-pointer hover:text-white whitespace-nowrap">
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

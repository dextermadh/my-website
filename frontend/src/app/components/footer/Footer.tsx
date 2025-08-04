import React from "react";
import svgPaths from "../imports/svg-pmhvsbynx7";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const contactLinks = [
  {
    href: "https://github.com/dextermadh/",
    label: "Github",
    icon: <Github />,
    rotate: "rotate-1",
  },
  {
    href: "https://www.linkedin.com/in/madhuka-abhishek-wijesundara/",
    label: "LinkedIn",
    icon: <Linkedin />,
    rotate: "-rotate-1",
  },
  {
    href: "mailto:madhukaabhishek.business@gmail.com",
    label: "Gmail",
    icon: <Mail />,
    rotate: "rotate-1",
  },
];

function Footer() {
  return (
    <div
      className="relative py-12 font-firacode flex flex-col justify-between min-h-[75vh]"
      id="contacts"
    >
      {/* Background Decorative Elements */}
      {/* <div className="absolute top-36 -left-[15vw]  opacity-50 rotate-11 -z-100">
        <svg className="w-[70vw]" viewBox="0 0 550 513" fill="none">
          <path
            d={svgPaths.p9a86b80}
            stroke="#3D3D3D"
            strokeWidth="2"
            className=""
          />
        </svg>
      </div> */}

      <hr />

      <h1 className="absolute top-25 lg:top-40 left-12 lg:left-50 font-firacode text-[35px] lg:text-[70px]">
        Madhuka
      </h1>
      <p className="absolute top-37 lg:top-65 left-10 lg:left-38 font-firacode text-[15px] lg:text-[25px] text-[#d9d9d9]">
        AI/ML Engineer
      </p>
      <h1 className="absolute top-35 lg:top-65 left-44 lg:left-95 font-firacode text-[35px] lg:text-[70px]">
        Abhishek
      </h1>

      <div className="absolute top-55 lg:top-35 right-20 lg:right-50">
        <h1 className="text-[#d9d9d9]">.../Contacts</h1>
        <div className="flex flex-col lg:flex-row gap-6 mt-5">
          {contactLinks.map((link, index) => {
            const commonClasses = `flex justify-center gap-2 border-2 p-3 lg:p-4 rounded-lg hover:bg-[#d9d9d9] hover:text-[#121212] transition-transform duration-300 ease-in-out hover:scale-110 hover:${link.rotate}`;
            const isEmail = link.href.startsWith("mailto:");
            return isEmail ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClasses}
              >
                {link.icon}
                <p>{link.label}</p>
              </a>
            ) : (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClasses}
              >
                {link.icon}
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom copyright text pushed to bottom with mt-auto */}
      <div className="mt-auto text-sm mx-auto px-4 text-center w-full max-w-screen-lg">
        <p>Created by Madhuka Abhishek</p>
        <p className="text-[#d9d9d9]">2025 © All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;


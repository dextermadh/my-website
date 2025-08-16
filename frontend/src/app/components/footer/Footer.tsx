import React from "react";
import svgPaths from "../imports/svg-pmhvsbynx7";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
      className="relative py-12 font-firacode flex flex-col justify-between min-h-[95vh]"
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

      <motion.div
        className="absolute top-25 xl:top-40 left-12 sm:left-24 xl:left-50  font-firacode text-[35px] xl:text-[70px]"
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Madhuka
      </motion.div>
      <motion.div
        className="absolute top-37 xl:top-65 left-10 sm:left-18 xl:left-38 font-firacode text-[15px] xl:text-[25px] text-[#d9d9d9]"
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        AI/ML Engineer
      </motion.div>
      <motion.div
        className="absolute top-35 sm:top-40 xl:top-65 left-44 sm:left-50 xl:left-95 font-firacode text-[35px] xl:text-[70px]"
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Abhishek
      </motion.div>

      <motion.div
        className="absolute top-55 x xl:top-60 right-20 sm:right-20 xl:right-50"
        initial={{ opacity: 0, y: 50 }} // Start faded and below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-[#d9d9d9]">.../Contacts</h1>
        <div className="flex flex-col xl:flex-row gap-6 mt-5">
          {contactLinks.map((link, index) => {
            const commonClasses = `flex justify-center gap-2 border-2 p-3 xl:p-4 rounded-xl hover:bg-[#d9d9d9] hover:text-[#121212] xl:transition-transform xl:duration-300 xl:ease-in-out xl:hover:scale-110 xl:hover:${link.rotate}`;
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
      </motion.div>

      {/* Bottom copyright text pushed to bottom with mt-auto */}
      <div className="mt-auto text-sm mx-auto px-4 text-center w-full max-w-screen-xl">
        <p>Created by Madhuka Abhishek</p>
        <p className="text-[#d9d9d9]">2025 © All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;

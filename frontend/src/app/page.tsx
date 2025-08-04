"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ScrollToTop from "./components/ScrollToTop";

// Dynamically import heavier components with no SSR to reduce initial load
const About = dynamic(() => import("./components/about/About"), { ssr: false });
const Projects = dynamic(() => import("./components/projects/Projects"), {
  ssr: false,
});
const Articles = dynamic(() => import("./components/articles/Articles"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/footer/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />

      <Suspense
        fallback={
          <div className="text-center py-20 text-gray-400">
            Loading About...
          </div>
        }
      >
        <div id="about">
          <About />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <div className="text-center py-20 text-gray-400">
            Loading Projects...
          </div>
        }
      >
        <div id="projects">
          <Projects />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <div className="text-center py-20 text-gray-400">
            Loading Articles...
          </div>
        }
      >
        <div id="articles">
          <Articles />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <div className="text-center py-20 text-gray-400">
            Loading Contact...
          </div>
        }
      >
        <div id="contact">
          <Footer />
        </div>
      </Suspense>

      <ScrollToTop />
    </div>
  );
}

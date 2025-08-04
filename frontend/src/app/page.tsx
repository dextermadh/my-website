"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ScrollToTop from "./components/ScrollToTop";

// Lazy imports – no SSR
const About = dynamic(() => import("./components/about/About"), {
  ssr: false,
  loading: () => <SectionPlaceholder title="Loading About..." />,
});
const Projects = dynamic(() => import("./components/projects/Projects"), {
  ssr: false,
  loading: () => <SectionPlaceholder title="Loading Projects..." />,
});
const Articles = dynamic(() => import("./components/articles/Articles"), {
  ssr: false,
  loading: () => <SectionPlaceholder title="Loading Articles..." />,
});
const Footer = dynamic(() => import("./components/footer/Footer"), {
  ssr: false,
  loading: () => <SectionPlaceholder title="Loading Contact..." />,
});

// Small placeholder component
function SectionPlaceholder({ title }: { title: string }) {
  return (
    <div className="text-center py-20 text-gray-400 font-firacode">{title}</div>
  );
}

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showArticles, setShowArticles] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  // Intersection Observer to load sections only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "about") setShowAbout(true);
            if (id === "projects") setShowProjects(true);
            if (id === "articles") setShowArticles(true);
            if (id === "contact") setShowFooter(true);
          }
        });
      },
      { rootMargin: "200px" } // preload slightly before it enters view
    );

    ["about", "projects", "articles", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />

      <div id="about">{showAbout && <About />}</div>
      <div id="projects">{showProjects && <Projects />}</div>
      <div id="articles">{showArticles && <Articles />}</div>
      <div id="contact">{showFooter && <Footer />}</div>

      <ScrollToTop />
    </div>
  );
}

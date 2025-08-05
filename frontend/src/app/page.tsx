"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ScrollToTop from "./components/ScrollToTop";

// Regular imports
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

// Memoized static components
const MemoizedNavbar = React.memo(Navbar);
const MemoizedHero = React.memo(Hero);

// Small placeholder component
function SectionPlaceholder({ title }: { title: string }) {
  return (
    <div className="text-center py-20 text-gray-400 font-firacode">{title}</div>
  );
}

// Lazy imports – no SSR, memoized
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

const MemoizedAbout = React.memo(About);
const MemoizedProjects = React.memo(Projects);
const MemoizedArticles = React.memo(Articles);
const MemoizedFooter = React.memo(Footer);

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
      <MemoizedNavbar />
      <MemoizedHero />

      <div id="about">{showAbout && <MemoizedAbout />}</div>
      <div id="projects">{showProjects && <MemoizedProjects />}</div>
      <div id="articles">{showArticles && <MemoizedArticles />}</div>
      <div id="contact">{showFooter && <MemoizedFooter />}</div>

      <ScrollToTop />
    </div>
  );
}

'use client'
import About from "./components/about/About";
import Articles from "./components/articles/Articles";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import image from '../../public/assets/about_me/me2.jpg'
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="articles">
        <Articles />
      </div>
      <div id="contact">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

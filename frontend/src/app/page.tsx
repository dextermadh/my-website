import About from "./components/about/About";
import Articles from "./components/articles/Articles";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <div>
      <Navbar/>  
      <Hero />
      <About />
      <Projects />
      <Articles />
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 z-50 p-3 rounded-full bg-[#d9d9d9] text-black shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    )
  );
}

import React from 'react'
import '../articles/articles.css'

function Articles() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-[50vh] bg-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 animate-fade-in uppercase tracking-wide">
            Articles
          </h2>
          <div className="mt-6 relative overflow-hidden">
            <span
              className="text-lg text-gray-600 animate-typewriter whitespace-nowrap inline-block"
              style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
            >
              Coming Soon - Stay Updated
            </span>
            <span className="absolute right-0 top-0 text-lg text-gray-600 animate-blink">
              |
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles
"use client";

import { useState } from "react";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessFlowDiagramProps {
  title?: string;
  steps: ProcessStep[];
}

export default function ProcessFlowDiagram({ 
  title = "Process Flow",
  steps 
}: ProcessFlowDiagramProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate how many slides we need (3 cards per slide)
  const totalSlides = Math.ceil(steps.length / 3);
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const getCurrentSteps = () => {
    const start = currentIndex * 3;
    return steps.slice(start, start + 3);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-12 text-gray-900" style={{ fontFamily: "var(--font-sora)" }}>
        {title}
      </h2>

      {/* Desktop & Tablet Layout - Slider with 3 cards */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideSteps = steps.slice(slideIndex * 3, slideIndex * 3 + 3);
                const cardCount = slideSteps.length;
                
                return (
                  <div
                    key={slideIndex}
                    className={`min-w-full flex gap-6 ${
                      cardCount === 3 
                        ? "justify-start" 
                        : cardCount === 2 
                        ? "justify-center" 
                        : "justify-center"
                    }`}
                  >
                    {slideSteps.map((step, cardIndex) => {
                      const globalIndex = slideIndex * 3 + cardIndex;
                      return (
                        <div 
                          key={globalIndex} 
                          className={`${
                            cardCount === 3 
                              ? "w-full" 
                              : cardCount === 2 
                              ? "w-[calc((100%-1.5rem)/2)]" 
                              : "w-full max-w-md"
                          }`}
                        >
                          {/* Card - Matching metric card styling */}
                          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-full flex flex-col">
                            <div className="text-5xl font-bold text-gray-900/10 mb-4" style={{ fontFamily: "var(--font-sora)" }}>
                              {globalIndex + 1}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900" style={{ fontFamily: "var(--font-sora)" }}>
                              {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed flex-1" style={{ fontFamily: "var(--font-manrope)" }}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-gray-900 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout - Vertical Stack */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Card - Matching metric card styling */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-5xl font-bold text-gray-900/10 mb-4" style={{ fontFamily: "var(--font-sora)" }}>
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900" style={{ fontFamily: "var(--font-sora)" }}>
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
            {/* Connecting Arrow - Bottom */}
            {index < steps.length - 1 && (
              <div className="flex justify-center mt-4">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


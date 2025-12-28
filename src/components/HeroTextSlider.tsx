import { useState, useEffect } from "react";

interface HeroTextSliderProps {
  texts: { line1: string; line2: string; tagline: string }[];
  interval?: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  isLoaded: boolean;
}

export const HeroTextSlider = ({
  texts,
  interval = 5000,
  currentSlide,
  setCurrentSlide,
  isLoaded
}: HeroTextSliderProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((currentSlide % texts.length) + 1);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, texts.length, interval, setCurrentSlide]);

  const currentText = texts[currentSlide - 1] || texts[0];

  return (
    <div className="max-w-xl text-right pr-4 md:pr-8 lg:pr-16">
      {/* Apostle Label with Line - Animated */}
      <div
        className={`flex items-center justify-end gap-4 mb-8 transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <div
          className={`h-[1px] bg-white/50 transition-all duration-1000 ease-out ${
            isLoaded ? "w-16" : "w-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        ></div>
        <span className="text-xs tracking-[0.3em] uppercase text-white/80 font-light">
          Apostle
        </span>
      </div>

      {/* Large Name Heading - With Text Transition */}
      <h1 className="relative overflow-hidden">
        <span
          className={`block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white leading-[0.9] tracking-tight transition-all duration-700 ease-out ${
            isLoaded && !isTransitioning
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isLoaded ? "0ms" : "400ms" }}
        >
          {currentText.line1}
        </span>
        <span
          className={`block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white leading-[0.9] tracking-tight mt-2 transition-all duration-700 ease-out ${
            isLoaded && !isTransitioning
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isLoaded ? "100ms" : "600ms" }}
        >
          {currentText.line2}
        </span>
      </h1>

      {/* Tagline - Fade Up with transition */}
      <p
        className={`mt-8 text-sm md:text-base text-white/60 font-light tracking-wide max-w-md ml-auto transition-all duration-700 ease-out ${
          isLoaded && !isTransitioning
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: isLoaded ? "200ms" : "800ms" }}
      >
        {currentText.tagline}
      </p>
    </div>
  );
};

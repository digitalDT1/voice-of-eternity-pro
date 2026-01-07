import { useState, useEffect } from "react";

interface HeroTextSliderProps {
  texts: { line1: string; line2: string; tagline: string; showApostleLabel?: boolean }[];
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
    <div className="max-w-2xl text-left pl-4 md:pl-8 lg:pl-0">
      {/* Apostle Label with Line - Animated (only show when showApostleLabel is true) */}
      {currentText.showApostleLabel && (
        <div
          className={`flex items-center justify-start gap-4 mb-6 transition-all duration-1000 ease-out ${
            isLoaded && !isTransitioning ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div
            className={`h-[2px] bg-amber-500 transition-all duration-1000 ease-out ${
              isLoaded && !isTransitioning ? "w-12" : "w-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          ></div>
          <span className="text-sm tracking-[0.3em] uppercase text-amber-500 font-medium">
            Apostle
          </span>
        </div>
      )}

      {/* Large Name Heading - With Text Transition */}
      <h1 className="relative overflow-hidden">
        <span
          className={`block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[1] tracking-tight transition-all duration-700 ease-out ${
            isLoaded && !isTransitioning
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isLoaded ? "0ms" : "400ms" }}
        >
          {currentText.line1}
        </span>
        <span
          className={`block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-[1] tracking-tight mt-1 transition-all duration-700 ease-out ${
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
        className={`mt-6 text-sm md:text-base text-white/60 font-light tracking-wide max-w-md transition-all duration-700 ease-out ${
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

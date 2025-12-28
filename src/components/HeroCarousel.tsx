import { useState, useEffect, useCallback } from "react";

interface HeroCarouselProps {
  images: string[];
  interval?: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  heroScale: number;
  heroOpacity: number;
}

export const HeroCarousel = ({ 
  images, 
  interval = 6000, 
  currentSlide, 
  setCurrentSlide,
  heroScale,
  heroOpacity 
}: HeroCarouselProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning, setCurrentSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (currentSlide % images.length) + 1;
      goToSlide(nextSlide);
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, images.length, interval, goToSlide]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            filter: 'grayscale(70%) brightness(0.6)',
            transform: `scale(${heroScale})`,
            opacity: currentSlide === index + 1 ? heroOpacity : 0,
            zIndex: currentSlide === index + 1 ? 1 : 0,
          }}
        />
      ))}
      
      {/* Ken Burns effect overlay for active slide */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 100%)',
          opacity: heroOpacity
        }}
      />
    </div>
  );
};

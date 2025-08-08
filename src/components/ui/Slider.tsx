'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Button from './Button';

interface SliderItem {
  id: string;
  image: string;
  category: string;
  title: string;
}

interface SliderProps {
  items: SliderItem[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Slider: React.FC<SliderProps> = ({ 
  items, 
  className = '',
  autoPlay = false,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const scrollToIndex = useCallback((index: number) => {
    if (index < 0 || index >= items.length) return;
    
    setCurrentIndex(index);
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const scrollLeft = index * sliderWidth;
      sliderRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [items.length]);

  const nextSlide = useCallback(() => {
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  }, [currentIndex, items.length, scrollToIndex]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  }, [currentIndex, items.length, scrollToIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && items.length > 1 && !isUserInteracting) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, items.length, isUserInteracting, nextSlide]);

  // Touch/swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsUserInteracting(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTimeout(() => setIsUserInteracting(false), 1000);
  };

  // Mouse enter/leave for pausing auto-play
  const handleMouseEnter = () => setIsUserInteracting(true);
  const handleMouseLeave = () => {
    setTimeout(() => setIsUserInteracting(false), 1000);
  };

  return (
    <div 
      className={`w-full mt-8 sm:mt-12 lg:mt-[50px] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation buttons */}
      <div className="flex justify-between items-center mb-4 px-4 sm:hidden">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-global-3 rounded-full flex items-center justify-center hover:bg-global-2 transition-colors focus:outline-none focus:ring-2 focus:ring-global-5"
          aria-label="Previous slide"
        >
          <Image
            src="/images/img_arrow_white_a700.svg"
            alt=""
            width={14}
            height={18}
            className="w-3 h-4 rotate-90"
          />
        </button>
        <span className="text-global-4 text-sm">
          {currentIndex + 1} / {items.length}
        </span>
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-global-3 rounded-full flex items-center justify-center hover:bg-global-2 transition-colors focus:outline-none focus:ring-2 focus:ring-global-5"
          aria-label="Next slide"
        >
          <Image
            src="/images/img_arrow_white_a700.svg"
            alt=""
            width={14}
            height={18}
            className="w-3 h-4 -rotate-90"
          />
        </button>
      </div>

      <div 
        ref={sliderRef}
        className="flex gap-4 sm:gap-6 lg:gap-[30px] overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <article 
            key={item.id}
            className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-20px)] relative group cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
            onClick={() => scrollToIndex(index)}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[536px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-[20px]">
                <Button
                  variant="gradient"
                  size="sm"
                  className="text-xs sm:text-sm lg:text-[16px] font-kumbh-sans font-normal px-4 sm:px-6 lg:px-[34px] py-2 sm:py-2 lg:py-[8px] hover:scale-105 transition-transform duration-200"
                >
                  {item.category}
                </Button>
                
                <div className="bg-global-3/90 bg-black max-w-[270px] backdrop-blur-sm p-3 sm:p-4 lg:p-[20px]">
                  <h3 className="text-global-4 text-base sm:text-lg lg:text-xl xl:text-[24px] font-jost font-semibold leading-5 sm:leading-6 lg:leading-7 xl:leading-[28px]">
                    {item.title.replace('\n', ' ')}
                  </h3>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center mt-6 sm:mt-8 gap-2" role="tablist" aria-label="Slide navigation">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-global-5 ${
              index === currentIndex 
                ? 'bg-global-5 w-6 sm:w-8' : 'bg-[#fff] hover:bg-global-6'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
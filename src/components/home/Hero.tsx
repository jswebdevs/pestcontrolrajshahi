import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import heroData from '../../data/hero.json';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [currentSlide]);

  

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-base-200 group">
      
      {/* --- Slider Content --- */}
      {heroData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Dark Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div> {/* Dark Overlay */}
          </div>

          {/* Grid Layout */}
          <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
              
              {/* Left Side: Text Content */}
              <div className="text-white space-y-6 text-center lg:text-left mt-10 lg:mt-0">
                {/* Badge */}
                <div className="inline-block px-4 py-1.5 bg-primary/90 text-white text-sm font-semibold rounded-full uppercase tracking-wide animate-fadeIn">
                  {slide.badge}
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg lg:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0">
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link 
                    to={slide.ctaLink} 
                    className="btn btn-primary btn-lg text-white rounded-full px-8 shadow-lg hover:scale-105 transition-transform"
                  >
                    {slide.ctaText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Right Side: Hero Image (Cutout) */}
              <div className="hidden lg:flex justify-center items-center relative">
                <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] animate-slideUp">
                  {/* Decorative Blob behind image */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl filter transform scale-90"></div>
                  
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* --- Navigation Buttons (Visible on Hover) --- */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-ghost bg-black/30 hover:bg-primary text-white border-none opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-ghost bg-black/30 hover:bg-primary text-white border-none opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* --- Dots Indicator --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
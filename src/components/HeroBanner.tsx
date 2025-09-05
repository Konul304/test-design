import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/73f3e9cbccce117eafb5ce59851bf3b213631fb1.png';

const heroSlides = [
  {
    id: 1,
    title: "Digital Agriculture Platform - Track Your Orders",
    subtitle: "Streamlined order tracking and management system for Turkic state agricultural trade",
    image: heroImage
  },
  {
    id: 2,
    title: "Turkic States Agriculture Summit held in Samarkand",
    subtitle: "Leaders discuss digital transformation in agriculture and sustainable farming practices",
    image: "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1Njg3NTI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Digitalization in Agro Trade: New Report Published",
    subtitle: "Comprehensive analysis of digital adoption across Turkic member states",
    image: "https://images.unsplash.com/photo-1634497140517-5c57a456cbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1Njk2NTQzNnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Record Wheat Harvest Expected This Season",
    subtitle: "Favorable weather conditions boost agricultural productivity across the region",
    image: "https://images.unsplash.com/photo-1659943683173-abc558a5c3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGhhcnZlc3QlMjBmaWVsZHxlbnwxfHx8fDE3NTY5NjU0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ImageWithFallback
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-6">
              <h2 className="text-4xl mb-4">{slide.title}</h2>
              <p className="text-xl mb-6 text-gray-200">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {slide.id === 1 ? 'Track Orders' : 'Read More'}
                </Button>
                <Button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-green-600">
                  {slide.id === 1 ? 'Start Trading' : 'Take Action'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
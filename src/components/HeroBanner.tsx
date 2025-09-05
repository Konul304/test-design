import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
// import heroImage from 'figma:asset/73f3e9cbccce117eafb5ce59851bf3b213631fb1.png';

const heroSlides = [
  {
    id: 1,
    title: "Digital Agriculture Platform - Track Your Orders",
    subtitle: "Streamlined order tracking and management system for Turkic state agricultural trade",
    image: "https://media.istockphoto.com/id/181068280/photo/misty-sunrise-over-wheat-field-in-kansas.jpg?s=612x612&w=0&k=20&c=neGsDgqN2AkxWXg19Pyai7fQRm7Uz_XZWhPchOpSBF0=",
  },
  {
    id: 2,
    title: "Turkic States Agriculture Summit held in Samarkand",
    subtitle: "Leaders discuss digital transformation in agriculture and sustainable farming practices",
    image: "https://static.president.az/upload/1340x1020/2022/11/11/e6ac700ef718dc34006365c719689f6a_9208369.jpg"
  },
  {
    id: 3,
    title: "Digitalization in Agro Trade: New Report Published",
    subtitle: "Comprehensive analysis of digital adoption across Turkic member states",
    image: "https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--3b8a81d5-31bd-410c-9200-5a2f33cb3ba4/env-shutterstock-306313655.jpg?quality=80&preferwebp=true"
  },
  {
    id: 4,
    title: "Record Wheat Harvest Expected This Season",
    subtitle: "Favorable weather conditions boost agricultural productivity across the region",
    image: "https://agrierp.com/blog/wp-content/uploads/2021/12/shutterstock_1213436671-2.jpg"
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
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* <ImageWithFallback
            src="https://static.president.az/upload/1340x1020/2022/11/11/e6ac700ef718dc34006365c719689f6a_9208369.jpg"
            alt={slide?.title}
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-black bg-opacity-30" style={{
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${slide?.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} />
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="text-center text-white max-w-4xl px-6">
              <h2 className="text-4xl mb-4">{slide.title}</h2>
              <p className="text-xl mb-6 text-gray-200">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {slide.id === 1 ? 'Track Orders' : 'Read More'}
                </Button>
                <Button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-green-600">
                  {slide.id === 1 ? 'Start Trading' : 'SHARE on Social Media'}
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
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};
'use client'
import React, { useState, useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import SplitText from '../SplitText/SplitText';
import gsapFadeUpAnimation from "../../../gsap/gsapAnimation.js"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TestimonialLayout = () => {
  gsapFadeUpAnimation(".testmonialimg");


  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      rating: 5,
      text: "I couldn't be happier with the transformation of my home! From our very first consultation, the team took the time to understand my vision and preferences.",
      image: "https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/testimonial-img.jpg",
      author: "Arlene McCoy",
      role: "Co. Founder"
    },
    {
      rating: 5,
      text: "Outstanding service and attention to detail. The team exceeded all my expectations.",
      image: "https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/testimonial-img.jpg",
      author: "Jane Cooper",
      role: "Business Owner"
    },
    {
      rating: 5,
      text: "The best design consultation I've ever experienced. Truly transformative results.",
      image: "https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/testimonial-img.jpg",
      author: "Robert Fox",
      role: "Creative Director"
    }
  ];

  useEffect(() => {
    if (count < 4.82) {
      const timer = setTimeout(() => {
        setCount((prev) => Math.min(prev + 0.01, 4.82));
      }, 5);
      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-2 pb-[150px] flex">
      <div className="w-full flex flex-col justify-between  md:flex-row ">
        {/* Left side - Image */}
        <div className="w-full h-full testmonialimg">
          <div className="relative w-full shineimg h-full bg-gray-200">
            <img 
              src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/testimonial-img.jpg" 
              alt="Modern living room" 
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right side - Testimonials */}
        <div className="w-full space-y-12 flex flex-col justify-around p-5 pl-20">
          <div>
            <div className='flex items-center gap-2'>
              <ArrowRight className="w-5 h-5" />
              <h1 className='main-heading'>Client Testimonials</h1>
            </div>
            <SplitText
              text="Trusted by thousands of"
              delay={50}
              className="main-decription"
            />
            <h2 className="different-color-main-decription">
             people & companies.
            </h2>
          </div>

          <div className="overflow-hidden relative">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              // style={{ transform: translateX(`-${currentSlide * 100}%`) }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex mb-4 text-black">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-7 h-7 fill-current" />
                    ))}
                  </div>
                  <p className="sub-decription mb-6 w-2/3 ">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.author}'s testimonial`} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className='border-gray-200 mt-6' />

          <div className="mt-4 flex items-center gap-4">
            <p className="text-5xl font-bold">{count.toFixed(2)}</p>
            <div>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">2,488 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialLayout;
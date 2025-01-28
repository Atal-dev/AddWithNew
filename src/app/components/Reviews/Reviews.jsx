'use client'
import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


const TestimonialLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      rating: 5,
      text: "I couldn't be happier with the transformation of my home! From our very first consultation, the team took the time to understand my vision and preferences. I couldn't be happier with the transformation of my home! From our very first consultation, the team took the time to understand my vision and preferences.",
      image: "https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/testimonial-img.jpg",
      author: "Arlene McCoy",
      role: "Co. Founder"
    },
    {
      rating: 5,
      text: "Outstanding service and attention to detail. The team exceeded all my expectations.Outstanding service and attention to detail. The team exceeded all my expectations.",
      image: "https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/testimonial-img.jpg",
      author: "Jane Cooper",
      role: "Business Owner"
    },
    {
      rating: 5,
      text: "The best design consultation I've ever experienced. Truly transformative results.The best design consultation I've ever experienced. Truly transformative results.",
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
    <div className="w-full min-h-screen bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="w-full h-full">
            <div className="relative aspect-square bg-[#4A5B4A]">
              <div className="w-full h-full relative">
                <img 
                  src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/testimonial-img.jpg" 
                  alt="Modern living room" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="w-full p-8">
            <div className="mb-8">
                <div className='flex gap-1'>
                     <FaArrowRightLong />
              <p className="text-gray-600 mb-2">Client Testimonials</p>
                </div>
           
              <h2 className="text-4xl font-bold mb-4">
                Trusted by thousands of <span className="text-gray-400">people & companies.</span>
              </h2>
            </div>

            <div className="mb-8 overflow-hidden relative">
              <div 
                className="transition-transform duration-500 ease-in-out flex"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 text-gray-800 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6">{testimonial.text}</p>
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
                <hr  className='text-gray-100 mt-10'/>
            <div className="mt-8">
              <div className="text-left flex gap-3">
                <p className="text-5xl font-bold mb-2">{count.toFixed(2)}</p>
                <div>
<div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 mt-2 text-gray-800 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 ">2,488 reviews</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialLayout;

'use client'
import React, { useState, useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';

const TestimonialLayout = () => {
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
    <div className="w-full  py-2 pb-[150px] flex">
      <div className="w-full flex flex-col justify-between items-center md:flex-row">
        {/* Left side - Image */}
        <div className="w-full h-full">
          <div className="relative w-full h-full bg-gray-200 shineimg">
            <img 
              src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/testimonial-img.jpg" 
              alt="Modern living room" 
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right side - Testimonials */}
        <div className="w-full space-y-12 flex flex-col justify-around p-5">
          <div>
            <div className='flex items-center gap-2 text-gray-600'>
              <ArrowRight className="w-5 h-5" />
              <p>Client Testimonials</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Trusted by thousands of <span className="text-[#9aa88e]">people & companies.</span>
            </h2>
          </div>

          <div className="overflow-hidden relative">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              // style={{ transform: translateX(`-${currentSlide * 100}%`) }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex mb-4 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
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
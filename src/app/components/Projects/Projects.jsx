'use client'

import React, { useEffect, useState } from 'react';
import './Projects.css'; 
import { FaArrowRight } from "react-icons/fa";
import SplitText from '../SplitText/SplitText';
import gsap from 'gsap';
import gsapFadeUpAnimation from "../../../gsap/gsapAnimation.js"
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Portfolio = () => {
  gsapFadeUpAnimation(".projecthead p");
  gsapFadeUpAnimation(".projectdes");
  gsapFadeUpAnimation(".categories");
  gsapFadeUpAnimation(".project");


  const projectsData = [
    {
      id: 1,
      category: 'Architecture',
      title: 'Urban Retreat: Modern Design Meets Comfort',
      image: 'https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/project-1.jpg',
    },
    {
      id: 2,
      category: 'Bedroom',
      title: 'Luxurious Loft: Industrial Chic For Living',
      image: 'https://via.placeholder.com/300x200', 
    },
    {
      id: 3,
      category: 'Furniture',
      title: 'Elegant Dining: Minimalist Furniture Design',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      category: 'Kitchen',
      title: 'Modern Kitchen: Sleek and Functional',
      image: 'https://via.placeholder.com/300x200', 
    },
    {
      id: 5,
      category: 'Architecture',
      title: 'Green Villa: Eco-Friendly Architecture',
      image: 'https://via.placeholder.com/300x200', 
    },
    {
      id: 6,
      category: 'Bedroom',
      title: 'Cozy Retreat: Warm and Inviting Bedroom',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <div className='projecthead'>
        <p>Latest Project</p>
        <SplitText
              text="Creative projects that define our style"
              delay={50}
              className="heading"
        />
       
        </div>
        
        <div className='projectdes'>Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces to functional and stylish commercial interiors.</div>
      </div>

      {/* Category Buttons */}
      <div className="categories">
        <button
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        <button
          className={selectedCategory === 'Architecture' ? 'active' : ''}
          onClick={() => setSelectedCategory('Architecture')}
        >
          Architecture
        </button>
        <button
          className={selectedCategory === 'Bedroom' ? 'active' : ''}
          onClick={() => setSelectedCategory('Bedroom')}
        >
          Bedroom
        </button>
        <button
          className={selectedCategory === 'Furniture' ? 'active' : ''}
          onClick={() => setSelectedCategory('Furniture')}
        >
          Furniture
        </button>
        <button
          className={selectedCategory === 'Kitchen' ? 'active' : ''}
          onClick={() => setSelectedCategory('Kitchen')}
        >
          Kitchen
        </button>
      </div>

      {/* Display Filtered Projects */}
      <div className="projects">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project shineimg"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='transparent'>
                <div className='transArrow'><FaArrowRight className='icon' />
                </div>
            </div>
            <div className="project-content">
              <h2>{project.category}</h2>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
'use client'

import React, { useState } from 'react';
import './Services.css'; 
import { FaArrowRight } from "react-icons/fa";
import Hoverbtn from '../Hoverbtn/Hoverbtn';
import SplitText from '../SplitText/SplitText';
import gsapFadeUpAnimation from "../../../gsap/gsapAnimation.js"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import kitchen from "./img/kitchen.png"


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
    gsapFadeUpAnimation(".main-heading");
    gsapFadeUpAnimation(".different-color-main-decription");
    gsapFadeUpAnimation(".sub-decription");
    gsapFadeUpAnimation(".services_items");
    gsapFadeUpAnimation(".allservicebtn");



    const services_itemsData = [
        {
          id: 1,
          title: 'Modular Kitchens',
          desc: 'We create elegant, room-efficient modular kitchens with seamless finishes, high-quality materials, and clever storage to meet your demands.',
          class: 'service-kitchen',
        },
        {
          id: 2,
          title: 'Modular Furniture',
          desc: 'Our modular furniture offers personalized options that precisely match your house and is made with style, functionality, and space efficiency in mind.',
          class: 'service-furniture',
        },
        {
          id: 3,
          title: 'Doors & Windows ',
          desc: 'Our premium, long-lasting doors and windows combine style and security to improve the appearance and usability of your area.',
          class: 'service-doors',
        },
        {
          id: 4,
          title: 'Inplace Design',
          desc: 'Custom onsite furniture solutions from Inplace Design combine design and accuracy to precisely match the requirements and aesthetic of your space.',
          class: 'service-inplace',
        },
      ];
      

  return (
    <div className="services">
      <div className="services-header">
        <div className='services_itemhead'>
        <h1 className='main-heading'>Our Services</h1>
        <SplitText
              text="interior design solutions that are unique to "
              delay={50}
              className="main-decription"
        />
        <h2 className='different-color-main-decription'>each area</h2>
        </div>
        
        <div className='services_itemdes sub-decription'>
        Our specialty is creating high-end doors and windows, modular kitchens, and modular furnishings that are both aesthetically pleasing and useful. Our on-site furniture service guarantees a flawless fit that is expertly crafted to match your area.
        </div>
      </div>

      {/* Display Filtered services_items */}
      <div className="services_items">
        {services_itemsData.map((services_item) => (
          <div
            key={services_item.id}
            className={`services_item shineimg ${services_item.class} `}
          >
            <div className='transparent'>
                <div className='transArrow'><FaArrowRight className='icon' />
                </div>
            </div>
            <div className="services_item-content">
              <h2>{services_item.title}</h2>
              <h3>{services_item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className='allservicebtn'>
      <Hoverbtn name={'See All Services'} width='200px'/>
      </div>
    </div>
  );
};

export default Services;
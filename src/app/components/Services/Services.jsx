'use client'

import React, { useState } from 'react';
import './Services.css'; 
import { FaArrowRight } from "react-icons/fa";
import Hoverbtn from '../Hoverbtn/Hoverbtn';
import SplitText from '../SplitText/SplitText';
import gsapFadeUpAnimation from "../../../gsap/gsapAnimation.js"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


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
          title: 'Architecture',
          desc: 'Urban Retreat: Modern Design Meets Comfort',
          image: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2023/12/Modern-interior-design-ideas-2025-by-Decorilla-scaled.jpeg',
        },
        {
          id: 2,
          title: 'Bedroom',
          desc: 'Luxurious Loft: Industrial Chic For Living',
          image: 'https://images.unsplash.com/photo-1560185127-6edc48d39a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
        {
          id: 3,
          title: 'Furniture',
          desc: 'Elegant Dining: Minimalist Furniture Design',
          image: 'https://images.unsplash.com/photo-1528159460020-d7e47f03b3d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
      ];
      

  return (
    <div className="services">
      <div className="services-header">
        <div className='services_itemhead'>
        <h1 className='main-heading'>Our Services</h1>
        <SplitText
              text="Innovative design services for "
              delay={50}
              className="main-decription"
        />
        <h2 className='different-color-main-decription'>every need </h2>
        </div>
        
        <div className='services_itemdes sub-decription'>
          We offer a range of bespoke interior design services tailored to your unique needs. From concept development to final installation.
        </div>
      </div>

      {/* Display Filtered services_items */}
      <div className="services_items">
        {services_itemsData.map((services_item) => (
          <div
            key={services_item.id}
            className="services_item shineimg"
            style={{
              backgroundImage: `url(${services_item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
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
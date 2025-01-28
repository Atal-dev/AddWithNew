'use client'
import { FaArrowRightLong } from "react-icons/fa6";
import Hoverbtn from "../Hoverbtn/Hoverbtn";
import "./Hero.css"
import { useEffect } from "react";
import { gsap } from "gsap";

function Hero() {
  
  return (
    <section className="herosection">
        <div className="herosection-inner">
            <h1><FaArrowRightLong /> Inspired Interiors</h1>
            <h2>Designing your dream spaces, one room at a time</h2>
            <p>We specialixe in creating personalized, fuctional, and stylish interiors that reflect your unique vision</p>
            <div>
                <Hoverbtn name='Explore More' />
                <Hoverbtn name='View Projects' />
            </div>
            
        </div>
        
    </section>
  )
}

export default Hero

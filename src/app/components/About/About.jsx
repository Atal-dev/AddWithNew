"use client"
import React, { useEffect } from 'react'
import './About.css'
import Hoverbtn from '../Hoverbtn/Hoverbtn'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from '../SplitText/SplitText'
import gsapFadeUpAnimation from "../../../gsap/gsapAnimation.js"
import Image from "next/image";
import abt1 from "./img/abt1.png"
import abt2 from "./img/abt2.png"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function About() {
  gsapFadeUpAnimation(".bottom_content");
  gsapFadeUpAnimation(".about-h2");
  gsapFadeUpAnimation(".about-p");
  gsapFadeUpAnimation(".image-container1");
  gsapFadeUpAnimation(".image-container2");

  return (
    <>
      <div >
      <section className='addabout'>
  {/* Left Section */}
  <div className="left-sectionabout">
    <div className="image-container1 shineimg">
      <Image src={abt1} alt="Modern living room with stylish furniture, elegant lighting, and a cozy ambiance."/>
    </div>
    <div className="image-container2 shineimg">
      <Image src={abt2} alt="Modern modular kitchen with sleek cabinets, smart storage, and a stylish finish."/>
    </div>
  </div>

  {/* Right Section */}
  <div className="right-sectionabout">
    <p>About Us</p>
            <SplitText
              text="We create custom furniture, perfecting "
              delay={50}
              className='main-decription'
            />
    <h2 className='different-color-main-decription'>every corner.</h2>
    <p className='sub-decription'>
    At AddWith, we create unique furniture pieces that are ideal for your area. From modular kitchens to whole house makeovers, we realize your idea.
    </p>
    <div className='bottom_content'>
      <div className="bottom1">
      <ul>
      <li><span>✔</span> Creative expertise</li>
      <li><span>✔</span> Client-centered approach</li>
    </ul>
    <div className='button_about'>
      <Hoverbtn name ={'Read More'}  width='150px' route='/aboutus'/> 
    </div>
    </div>

      <div className="bottom2">
      <div className="contact-info">
        <p>Need Any Help?</p>
        <p>+1 (235) 800-999</p>
      </div>
      <div className="co-founder">
        <img src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/author-1.jpg" alt="Leslie Alexander" />
        <p>
          <span>Leslie Alexander</span> <br /> Co-Founder
        </p>
      </div>
    </div>
    </div>
    
   
  </div>
</section>

      </div>
    </>
  )
}

export default About

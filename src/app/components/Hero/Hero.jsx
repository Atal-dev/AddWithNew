'use client'
import { FaArrowRightLong } from "react-icons/fa6";
import Hoverbtn from "../Hoverbtn/Hoverbtn";
import "./Hero.css"
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import SplitText from "../SplitText/SplitText";

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Function to track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY); // Get current scroll position
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const backgroundPosition = `center ${scrollY * -0.2}px`;
  
  return (
    <section className="herosection" style={{ backgroundPosition: backgroundPosition,}}>
        <div className="herosection-inner">
            <h1><FaArrowRightLong /> Inspired Interiors</h1>
            <SplitText
              text="Designing your dream spaces, one room at a time"
              className="hero-h2"
              delay={50}
            />
            {/* <h2>Designing your dream spaces, one room at a time</h2> */}
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

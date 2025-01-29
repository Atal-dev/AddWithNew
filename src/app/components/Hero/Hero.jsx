'use client'


import "./Hero.css"
import { Children, useEffect, useState } from "react";
import { gsap } from "gsap";
import SplitText from "../SplitText/SplitText";

function Hero({children , height}) {
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
    <section className="herosection" style={{ backgroundPosition: backgroundPosition,height:height}}>
        {children} 
    </section>
  )
}

export default Hero

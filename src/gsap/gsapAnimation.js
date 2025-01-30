import gsap from "gsap"
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  


export default function gsapFadeUpAnimation(section){
    useEffect(()=>{
        gsap.from(section , {
            translateY:"50px",
            opacity:0,
            duration:3,
            scrollTrigger:section
          })
    },[])
}
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }



export default function gsapFadeUpAnimation(section){
  useGSAP(()=>{
    gsap.from(section , {
      translateY:"50px",
      opacity:0,
      duration:3,
      scrollTrigger:section
    })
  })
       

          return () => {
            gsap.killTweensOf(section);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          };
}
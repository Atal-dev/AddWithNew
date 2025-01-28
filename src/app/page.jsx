import Image from "next/image";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./Footer/Footer";
import Projects from "./components/Projects/Projects"
import WhyUs from "./components/WhyUs/Whyus"
import CursorFollower from "./components/CursorFollower/CursorFollower";
import About from "./components/About/About";
import SkillsSection from "./components/OurSkill/OurSkill";
import TestimonialLayout from "./components/Reviews/Reviews";


export default function Home() {
  return (
    <>
    <CursorFollower/>
     <Navbar/>
     <Hero/>
     <About/>
     <WhyUs/>
     <Projects/>
     <SkillsSection/>
     <TestimonialLayout/>
     <Footer/>
    </>
  );
}

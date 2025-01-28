import Image from "next/image";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./Footer/Footer";
import SkillsSection from "./components/OurSkill/OurSkill";
import TestimonialLayout from "./components/Reviews/Reviews";


export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <SkillsSection/>
     <TestimonialLayout/>
     <Footer/>
    </>
  );
}

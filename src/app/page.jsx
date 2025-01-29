import Image from "next/image";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./Footer/Footer";
import Projects from "./components/Projects/Projects"
import WhyUs from "./components/WhyUs/Whyus"
import CursorFollower from "./components/CursorFollower/CursorFollower";
import About from "./components/About/About";
import OurSkill from "./components/OurSkill/OurSkill"
import Reviews from "./components/Reviews/Reviews"
import Services from "./components/Services/Services"


export default function Home() {
  return (
    <>
    <CursorFollower/>
     <Navbar/>
     <Hero/>
     <About/>
     <WhyUs/>
     <Projects/>
     <OurSkill/>
     <Services/>
     <Reviews/>
     <Footer/>
    </>
  );
}

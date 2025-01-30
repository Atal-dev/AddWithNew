import React from "react";
import Navbar from "../components/Nav/Navbar";
import Team from "../components/Team/Team";
import About from "../components/About/About";
import Reviews from "../components/Reviews/Reviews";
import Hero from "../components/Hero/Hero";
import Footer from "../Footer/Footer";
import VisionMission from "../components/VisionMission/VisionMission";
import BestSelling from "../components/BestSelling/BestSelling";
import AskedQuestion from '../components/AskedQuestion/AskedQuestion'

function Aboutus() {
 
  return (
    <>
      <Navbar />

      <Hero height={"70vh"}>
       <div className="aboutcontent grid place-items-center h-full">
        <h1 className="text-6xl font-bold text-white ">About Us</h1>
       </div>
      </Hero>

        <About />
        <VisionMission/>
        <BestSelling/>
        <Reviews />
        <Team />
        <AskedQuestion/>
      <Footer />
    </>
  );
}

export default Aboutus;

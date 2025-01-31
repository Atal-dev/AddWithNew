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
import { FaArrowRightLong } from "react-icons/fa6";
import Hoverbtn from "./components/Hoverbtn/Hoverbtn";
import SplitText from "./components/SplitText/SplitText";

export default function Home() {
  return (
    <>
    <CursorFollower/>
     <Navbar/>
     <Hero height={"120vh"}>
        <div className="herosection-inner">
            <h1 className="main-heading"><FaArrowRightLong /> Addwith Interiors</h1>
            <SplitText
              text="Creating Modular Spaces in Jaipur and Gangapur"
              className="hero-h2"
              delay={50}
            />
            {/* <h2>Designing your dream spaces, one room at a time</h2> */}
            <p>Create custom furniture, doors, windows, and modular kitchens in Jaipur and Gangapur, Rajasthan. elegant, useful areas with on-site craftsmanship. Makeover your house!</p>
            <div>
                <Hoverbtn name='Contact Us' route="/" />
                <Hoverbtn name='View Services' />
            </div>
            
        </div>
     </Hero>
     <About/>
     <Services/>
     <WhyUs/>
     <Projects/>
     {/* <OurSkill/> */}
     <Reviews/>
     <Footer/>
    </>
  );
}

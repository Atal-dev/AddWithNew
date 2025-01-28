import Image from "next/image";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./Footer/Footer";


export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Footer/>
    </>
  );
}

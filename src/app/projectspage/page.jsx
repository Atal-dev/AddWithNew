import React from 'react'
import Projects from "../components/Projects/Projects"
import Navbar from '../components/Nav/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../Footer/Footer'


function page() {
  return (
    <>
    <Navbar/>
    <Hero height={"70vh"}>
       <div className="aboutcontent grid place-items-center h-full">
        <h1 className="text-6xl font-bold text-white ">Our Projects</h1>
       </div>
      </Hero>
      <Projects/>
      <Footer/>
    </>
  )
}

export default page

import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Nav/Navbar'
import Services from '../components/Services/Services'
import Whyus from '../components/WhyUs/Whyus'
import SkillsSection from '../components/OurSkill/OurSkill'
import Footer from '../Footer/Footer'

function page() {
  return (
    <>
      <Navbar/>
      <Hero height={"70vh"}>
       <div className="aboutcontent grid place-items-center h-full">
        <h1 className="text-6xl font-bold text-white ">Services</h1>
       </div>
      </Hero>
      <Services/>
      <Whyus/>
      <SkillsSection/>
      <Footer/>
    </>
  )
}

export default page

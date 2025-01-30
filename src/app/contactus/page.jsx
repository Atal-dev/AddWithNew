import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Nav/Navbar'
import Footer from '../Footer/Footer'
import Location from '../components/Loaction/Location'

function page() {
  return (
    <>
    <Navbar/>
      <Hero height={"70vh"}>
       <div className="aboutcontent grid place-items-center h-full">
        <h1 className="text-6xl font-bold text-white ">Contact Us</h1>
       </div>
      </Hero>
      <Location/>
      <Footer/>
    </>
  )
}

export default page

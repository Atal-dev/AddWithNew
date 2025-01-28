import React from 'react'
import './About.css'
import Hoverbtn from '../Hoverbtn/Hoverbtn'
function About() {
  return (
    <>
      <div >
      <section className='addabout'>
  {/* Left Section */}
  <div className="left-sectionabout">
    <div className="image-container1">
      <img src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/about-img-1.jpg" alt="Living Room 1" />
      <div className="circle-badge">15+ <br /> Years of experience</div>
    </div>
    <div className="image-container2">
      <img src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/about-img-2.jpg" alt="Living Room 2" />
      <div className='circle-badge2'>
      <div className="dark">95%</div>
      <p>Positive feedback</p>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="right-sectionabout">
    <p>About Us</p>
    <h2>Our passion for design, your <span>vision realized</span></h2>
    <p>
      Our dedicated team of designers works closely with you to understand your
      vision and bring it to life with thoughtful attention to detail. Whether
      it’s transforming a single room or an entire home.
    </p>
    <div className='bottom_content'>
      <div className="bottom1">
      <ul>
      <li><span>✔</span> Creative expertise</li>
      <li><span>✔</span> Client-centered approach</li>
    </ul>
    <div className='button_about'>
    <Hoverbtn name ={'Read'} /> 
    </div>
    </div>

      <div className="bottom2">
      <div className="contact-info">
        <p>Need Any Help?</p>
        <p>+1 (235) 800-999</p>
      </div>
      <div className="co-founder">
        <img src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/author-1.jpg" alt="Leslie Alexander" />
        <p>
          <span>Leslie Alexander</span> <br /> Co-Founder
        </p>
      </div>
    </div>
    </div>
    
   
  </div>
</section>

      </div>
    </>
  )
}

export default About

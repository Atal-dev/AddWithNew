import React from 'react'
import './ContactForm.css'
import Hoverbtn from '../Hoverbtn/Hoverbtn'

function ContactForm() {
  return (
    <>
      <div className='contactform'>
        <div className="contimg">
            <img src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/contact-us-image.jpg" alt="" />
        </div>
        <div className='contfield'>
            <div className="contfieldhead">
            <p>Contact Form</p>
            <h1>We would love to hear <span>from you</span></h1>
            <p>Your email address will not be published. Required fields are marked *</p>
            </div>
            <div className='contfieldinput'>
                <div>
                <input type="text" placeholder='Name*' />
                <input type="email" placeholder='Email Address*' />
                </div>
                
                <input type="number" placeholder='Your Phone*' />
                <input type="text" placeholder='Your Message*' />
                <Hoverbtn name={'Submit'} />
            </div>

            

        </div>
      </div>
    </>
  )
}

export default ContactForm

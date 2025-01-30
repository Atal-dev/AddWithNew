import React from "react";
import "./Location.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

function Location() {
  return (
    <>
      <div className="location_main">
        <div className="location_head">
          <p>Our Contact</p>
          <h1>Get in touch with us</h1>
          <p>
            Get in touch to discuss your employee wellbeing needs today. Please
            give us a call, drop us an email or fill out the contact form and
            we’ll get back to you.
          </p>
        </div>
      </div>
      <div className="location_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.574890935034!2d75.7858685754482!3d26.853470262633884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b9b6c8f910f07fb%3A0x38000afadd080ddd!2sCodeDev!5e0!3m2!1sen!2sin!4v1738223071157!5m2!1sen!2sin"
          width="100%"
          height="550"
          style={{ border: "1" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="location_contact">
        <div className="cont_sec">
          <div className="logo">
            <FaPhone />
          </div>
          <div className="data">
            {" "}
            <h1>Phone Number</h1>
            <br /> +91 1234567890
            <br />
            +91 9876543210
          </div>
        </div>

        <div className="cont_sec">
          <div className="logo">
            <MdEmail />
          </div>
          <div className="data">
            {" "}
            <h1>Email Support</h1>
            <br />
            abc@gmail.com
            <br />
            xyz@gmail.com
          </div>
        </div>

        <div className="cont_sec">
          <div className="logo">
            <IoMdHome />
          </div>
          <div className="data">
            {" "}
            <h1>Headquarter</h1>
            <br />
            CodeDev Ground floor ,Plot, 35-36, Tonk Rd, Jadon Nagar, Mahaveer
            Nagar, Durgapura, Jaipur, Rajasthan 302018 Directions
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;

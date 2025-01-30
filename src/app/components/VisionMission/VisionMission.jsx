import React from 'react';
import './VisionMission.css'; // Import CSS module
import { FaBullseye } from "react-icons/fa";


const VisionMission = () => {
  return (
    <>
      <div className='visionmission'>
        <div className='vmhead'>
            <p>Vision Mission</p>
            <div className='vmheadtxt'>
            <h2>A behind the scenes look at <span>our agency</span> </h2>
            <p>Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors</p>
            </div>
        </div>

        <div className='contentContainer'>
          <div className='vision'>
            <div className='vlogo'>
            <FaBullseye />
            </div>
            <h3>Our Vision</h3>
            <p>
              Our vision is rooted in the belief that thoughtfully designed spaces can transform lives,
              enhancing how people feel, work, and connect. We are committed to creating interiors
              that reflect our clients' unique identities, blending comfort, functionality, and beauty.
              By combining timeless design with modern innovations, we craft spaces that are visually
              stunning and practical.
            </p>
          </div>

          <div className='mission'>
            <div className='mlogo'>
            <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to deliver exceptional interior designs that enhance the quality of life by
              prioritizing comfort, functionality, and aesthetics. We aim to create spaces that are not
              only visually appealing but also tailored to meet the specific needs and desires of our clients.
              By staying true to design innovation, we ensure that every project reflects the perfect balance
              between style and purpose.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
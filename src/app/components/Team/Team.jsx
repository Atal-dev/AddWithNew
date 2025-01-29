'use client';

import React from 'react';
import './Team.css'; 
import { FaArrowRight } from "react-icons/fa";
import Hoverbtn from '../Hoverbtn/Hoverbtn';

const Team = ({
  heading = 'Our Team',
  subHeading = 'Innovative design team for every need',
  description = 'We offer a range of bespoke interior design team tailored to your unique needs. From concept development to final installation.',
  teamData = [],
}) => {
  return (
    <div className="team">
      <div className="team-header">
        <div className='team_itemhead'>
          <p>{heading}</p>
          <h1>{subHeading.split(' ').slice(0, -2).join(' ')} <span>{subHeading.split(' ').slice(-2).join(' ')}</span></h1>
        </div>
        
        <div className='team_itemdes'>{description}</div>
      </div>

      {/* Display Filtered team_items */}
      <div className="team_items">
        {teamData.map((team_item) => (
          <div
            key={team_item.id}
            className="team_item shineimg"
            style={{
              backgroundImage: `url(${team_item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='transparent'>
              <div className='transArrow'><FaArrowRight className='icon' /></div>
            </div>
            <div className="team_item-content">
              <h2>{team_item.title}</h2>
              <h3>{team_item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className='allservicebtn'>
      </div>
    </div>
  );
};

export default Team;

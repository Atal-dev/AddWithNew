import React from 'react'
import Navbar from '../components/Nav/Navbar'
import Team from '../components/Team/Team'
import About from '../components/About/About';

function Aboutus() {

    const teamData = [
        {
          id: 1,
          title: 'John Doe',
          desc: 'Senior Designer',
          image: 'path/to/john-doe.jpg',
        },
        {
          id: 2,
          title: 'Jane Smith',
          desc: 'Lead Developer',
          image: 'path/to/jane-smith.jpg',
        },
        {
            id: 3,
            title: 'Sara',
            desc: 'Head',
            image: 'path/to/jane-smith.jpg',
        }
      ];
  return (
    
    <>
      <Navbar/>
      <div className='herosection'></div>
      <div>
        <About/>
      <Team
        heading="Our Expert Team"
        subHeading="Creative minds always think something"
        description="Our team is dedicated to delivering high-quality designs and development solutions. We believe in a collaborative approach to achieving excellence."
        teamData={teamData}  // Pass the data dynamically
      />
      </div>
    </>
  )
}

export default Aboutus

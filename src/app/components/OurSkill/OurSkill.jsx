'use client'
import React, { useState, useEffect } from 'react';
import "./OurSkill.css"

const SkillsSection = () => {
  const [progress, setProgress] = useState({
    "Space Planning And Layout": 0,
    "Project Challenges And Solutions": 0,
    "Sustainability And Eco-Friendly Features": 0,
  });

  const targetProgress = {
    "Space Planning And Layout": 95,
    "Project Challenges And Solutions": 85,
    "Sustainability And Eco-Friendly Features": 75,
  };

  useEffect(() => {
    setProgress({
      "Space Planning And Layout": 0,
      "Project Challenges And Solutions": 0,
      "Sustainability And Eco-Friendly Features": 0,
    });

    const timer = setTimeout(() => {
      setProgress(targetProgress);
    }, 300);

    return () => {
      clearTimeout(timer);
      setProgress({
        "Space Planning And Layout": 0,
        "Project Challenges And Solutions": 0,
        "Sustainability And Eco-Friendly Features": 0,
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 max-w-full skills">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Skills Content */}
        <div className="flex-1 mb-12 px-4">
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <div className="w-6 h-[1px] bg-gray-400"></div>
            <span>Our Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills that shape your <span className="text-gray-500">dream home</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mb-9 text-[18px] py-5">
            Our dedicated team of designers works closely with you to understand your vision and
            bring it to life with thoughtful attention to detail.
          </p>
          <div className="space-y-11">
            {Object.entries(targetProgress).map(([skill, target]) => (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-800">{skill}</span>
                  <span className="text-gray-600">{progress[skill]}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progress[skill]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div className="flex-1 mb-12 grid grid-cols-2 gap-4 relative  OurSkill-images">
          <div className="space-y-4 z-1 shineimg">
            <img
              src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/our-skill-img-1.jpg"
              alt="Interior design"
              className="OurSkill-img1 w-full h-100 object-cover "
            />
            
          </div>
          <div className='pt-3 z-2 shineimg'>
            <img
              src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/our-skill-img-2.jpg"
              alt="Interior design"
              className="OurSkill-img2 h-100 object-cover"
            />
          </div>
          <div className="OurSkill-img3 relative z-5 shineimg">
            <img
              src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/our-skill-img-3.jpg"
              alt="Interior design"
              className=" h-100 object-cover shadow-lg absolute top-[-180px] left-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

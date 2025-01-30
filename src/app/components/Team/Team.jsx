"use client";

import React, { useState } from "react";
import "./Team.css";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Team = () => {
  const team_itemsData = [
    {
      id: 1,
      title: "John Doe",
      desc: "Senior Designer",
      image:
        "https://static.vecteezy.com/system/resources/previews/007/486/093/non_2x/portrait-of-happy-redhaired-woman-employee-in-optical-glasses-has-satisfied-expression-works-with-modern-gadgets-waits-for-meeting-with-colleague-prepares-accounting-report-sits-in-own-cabinet-free-photo.jpg",
    },
    {
      id: 2,
      title: "Jane Smith",
      desc: "Lead Developer",
      image:
        "https://static.vecteezy.com/system/resources/previews/007/486/093/non_2x/portrait-of-happy-redhaired-woman-employee-in-optical-glasses-has-satisfied-expression-works-with-modern-gadgets-waits-for-meeting-with-colleague-prepares-accounting-report-sits-in-own-cabinet-free-photo.jpg",
    },
    {
      id: 3,
      title: "Sara",
      desc: "Head",
      image:
        "https://static.vecteezy.com/system/resources/previews/007/486/093/non_2x/portrait-of-happy-redhaired-woman-employee-in-optical-glasses-has-satisfied-expression-works-with-modern-gadgets-waits-for-meeting-with-colleague-prepares-accounting-report-sits-in-own-cabinet-free-photo.jpg",
    },
  ];

  return (
    <div className="team">
      <div className="team-header">
        <div className="team_itemhead">
          <p>Meet Our Team</p>
          <h1>
            Creative minds always <span>think something </span>
          </h1>
        </div>

        <div className="team_itemdes">
          We offer a range of bespoke interior design team tailored to your
          unique needs. From concept development to final installation.
        </div>
      </div>

      {/* Display Filtered team_items */}
      <div className="team_items">
        {team_itemsData.map((team_item) => (
          <div
            key={team_item.id}
            className="team_item shineimg"
            style={{
              backgroundImage: `url(${team_item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="transparent">
              <div className="transArrow">
                <FaArrowRight className="icon" />
              </div>
            </div>
            <div className="team_item-content">
              <h2>{team_item.title}</h2>
              <h3>{team_item.desc}</h3>
              <div className="social-icon">
                <a href="" className="icon">
                  <FaInstagram />
                </a>
                <a className="icon">
                  <FaXTwitter />
                </a>
                <a className="icon">
                  <FaFacebook />
                </a>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

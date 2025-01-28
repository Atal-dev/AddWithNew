'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import './CursorFollower.css'; // Import the custom CSS file

const CursorFollower = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    const handleMouseMove = (e) => {
      gsap.to(circle, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Custom Cursor Circle */}
      <div
        ref={circleRef}
        className="cursor-circle"
      ></div>
    </div>
  );
};

export default CursorFollower;

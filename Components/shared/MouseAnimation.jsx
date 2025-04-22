"use client"
import React, { useState, useEffect } from "react";

const MouseAnimation = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-10); // Keep only the last 10 positions
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full">
      {trail.map((pos, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: "10px",
            height: "10px",
            transition: `transform 0.3s ease-out, opacity 0.3s ease-out`,
            transform: `translate(-50%, -50%)`,
            opacity: (index + 1) / trail.length, 
          }}
        />
      ))}
    </div>
  );
};

export default MouseAnimation;

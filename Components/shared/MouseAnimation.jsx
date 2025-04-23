"use client";
import React, { useState, useEffect } from "react";

const MouseAnimation = () => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFinished(true); // Animation will finish after 3 seconds
    }, 3000); // You can adjust this time as needed
  }, []);

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black z-50 transition-all duration-700 ${
        isFinished ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative text-center text-white">
        <h1
          className={`text-6xl md:text-8xl font-extrabold text-white animate__animated animate__fadeInUp animate__delay-1s ${
            isFinished ? "animate__fadeOut" : ""
          }`}
          style={{
            animation: "fadeInUp 1s ease-out, explode 1.5s forwards",
          }}
        >
          Welcome to My Portfolio
        </h1>
        {/* Explosion Effect */}
        <div
          className={`absolute w-full h-full bg-white opacity-20 rounded-full animate__animated ${
            isFinished ? "animate__zoomOut" : "animate__zoomIn"
          }`}
          style={{
            animationDuration: "1.5s",
            animationTimingFunction: "ease-out",
          }}
        />
      </div>
    </div>
  );
};

export default MouseAnimation;


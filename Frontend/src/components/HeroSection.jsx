// src/components/HeroSection.js

import React from 'react';
import HeroImage from '../assets/hero-image.png';
import Spline from '@splinetool/react-spline';



function HeroSection() {
  return (
    <div className="hero min-h-screen hero-bg text-white animate-fade-in">
      <div className="hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12 flex-col lg:flex-row-reverse">
        
        {/* 3D Model Section */}
        <div className="w-full ">
          {/* 2. Replace the <img> tag with the Spline component */}
          <Spline
            scene="https://prod.spline.design/Jl5jY0o4rRJS7V2z/scene.splinecode"
            className="transform  transition-transform duration-300" // You can still apply classes
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-2 sm:p-4 animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Unlock Your Potential Test Your <span className="text-yellow-300">Coding solution</span> with Automation
          </h1>
          <p className="py-4 md:py-6 text-base md:text-lg lg:text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            Discover a new way to achieve your goals. Our cutting-edge platform provides
            unparalleled tools and insights designed to elevate your success. Join
            thousands of satisfied users today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <button className="btn btn-warning btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
              Explore Features
            </button>
            <button className="btn btn-outline btn-warning btn-lg shadow-lg hover:shadow-xl text-white border-white hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
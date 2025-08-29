// src/components/HeroSection.js

import React from 'react';
import HeroImage from '../assets/hero-image.png';




function HeroSection() {
  return (
    <div className="hero min-h-screen hero-bg text-white animate-fade-in">
      <div className="hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12 flex-col lg:flex-row-reverse">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-2 sm:p-4 animate-fade-in-right">
          <img
            src={HeroImage}
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-float"
            alt="Futuristic technology illustration"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-2 sm:p-4 animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Unlock Your Potential Test Your <span className="text-yellow-300">Coding solution</span> Solutions
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
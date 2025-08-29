// src/components/Features.jsx

import React from 'react';

// You can use any icon library you prefer. Here, we're using SVGs directly.
// These are example icons from Heroicons (https://heroicons.com/).

const LightningBoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.611-1.573a8.967 8.967 0 015.776 0L21 20.417c1.169-4.243.635-8.94-.981-12.476z" />
  </svg>
);

const GlobeAltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
  </svg>
);


const featuresData = [
  {
    icon: <LightningBoltIcon />,
    title: 'Blazing Fast Performance',
    description: 'Our architecture is optimized for speed, ensuring your experience is smooth and instantaneous.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Enterprise-Grade Security',
    description: 'With end-to-end encryption and robust protocols, your data is always safe and secure with us.',
  },
  {
    icon: <GlobeAltIcon />,
    title: 'Global Scalability',
    description: 'Built on a distributed network, our platform can scale to meet your demands, wherever you are.',
  },
];

const FeatureCard = ({ icon, title, description, index }) => (
  <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 120}ms` }}>
    <div className="card-body items-center text-center">
      <div className="p-4 bg-primary text-primary-content rounded-full">
        {icon}
      </div>
      <h2 className="card-title mt-4">{title}</h2>
      <p className="text-base-content/80">{description}</p>
    </div>
  </div>
);


const Features = () => {
  return (
    <section className="py-16 sm:py-20 bg-base-200">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Everything You Need, All in One Place
          </h2>
          <p className="mt-4 text-xl text-base-content/70">
            Discover the powerful features that make our platform the best choice for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const AboutPage = () => {
  return (
    <div className="w-full h-full bg-white p-6 pt-32 relative">
      <SpiralBinding />
      <h2 className="text-lg font-bold text-gray-800 mb-4 ml-12">About Us</h2>
      <p className="text-gray-700 leading-relaxed text-sm ml-12">
        Girls Who Code at UVA is one of the largest College Loops in the country,
        founded in 2020 and now 300+ members strong. As part of the national nonprofit,
        our mission is to close the gender gap in tech and support women and allies
        in computing through community, education, and empowerment.
      </p>
    </div>
  );
};

export default AboutPage;



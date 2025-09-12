'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const AboutPage = ({ isMobile = false }) => {
  return (
    <div className={`notebook-page w-full h-full ${isMobile ? 'p-4 pt-6 pb-6' : 'p-6 pt-20 pb-6'} relative`}>
      <div className={`${isMobile ? 'px-4' : 'ml-12'}`}>
        <h2 className="text-lg font-bold text-gray-800 mb-4">about us</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          Girls Who Code at UVA is one of the largest College Loops in the country,
          founded in 2020 and now 300+ members strong. As part of the national nonprofit,
          our mission is to close the gender gap in tech and support women and allies
          in computing through community, education, and empowerment.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
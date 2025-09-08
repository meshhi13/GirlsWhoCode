'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const BackCover = ({ isMobile = false }) => {
  return (
    <div className={`w-full h-full bg-white ${isMobile ? 'p-4 pt-6 pb-8' : 'p-6 pt-20 pb-8'} relative`}>
      <div className={`${isMobile ? 'px-4' : ''}`}>
        <h2 className={`text-lg font-bold text-gray-800 mb-4 ${isMobile ? '' : 'ml-12'}`}>Back Cover</h2>
      </div>
      {!isMobile && (
        <div className="absolute top-0 right-0 h-full flex items-center ml-6">
          <SpiralBinding />
        </div>
      )}

    </div>
  );
};

export default BackCover;

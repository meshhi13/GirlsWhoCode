'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const BackCover = () => {
  return (
    <div className="w-full h-full bg-white p-6 pt-20 relative">
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4 ml-12">Back Cover</h2>
      </div>
      
      <div className="absolute top-0 right-0 h-full flex items-center ml-6">
        <SpiralBinding />
      </div>

    </div>
  );
};

export default BackCover;

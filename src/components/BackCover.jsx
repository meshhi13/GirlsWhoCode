'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const BackCover = ({ isMobile = false }) => {
  if (!isMobile) {
    return (
      <div className={`w-full h-full ${isMobile ? 'p-4 pt-6 pb-6' : 'p-6 pt-20 pb-6'} relative shadow-[0_10px_40px_rgba(0,0,0,0.4)]`}
      style={{
        background: '#8bb7e4',
        borderTopLeftRadius: '20px',
        borderRight: '20px solid #102f76',
      }}>
        <div className={`${isMobile ? 'px-4' : ''}`}>
          <h2 className={`text-lg font-bold text-gray-800 mb-4 ${isMobile ? '' : 'ml-12'}`}></h2>
        </div>
        {!isMobile && (
          <div className="absolute top-0 right-0 h-full flex items-center ml-6">
            
          </div>
        )}
      </div>
    );
  }
  else {
    return
  }
};

export default BackCover;

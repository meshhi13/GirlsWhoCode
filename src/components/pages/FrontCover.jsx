'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const FrontCover = () => {
  return (
    <div className="w-full h-full relative">
      <img
        src="/src/images/logo style mockup.jpg"
        alt="Girls Hoo Hack Logo Mockup"
        className="w-full h-full object-cover"
        onLoad={() => console.log('Logo mockup loaded successfully')}
        onError={(e) => console.error('Logo mockup failed to load:', e)}
      />
      <SpiralBinding />
    </div>
  );
};

export default FrontCover;



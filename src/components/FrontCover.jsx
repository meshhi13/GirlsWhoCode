'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const FrontCover = ({ isMobile = false }) => {
  return (
    <div
      className={`w-full h-full ${isMobile ? 'p-4 pt-6 pb-0' : 'p-6 pt-6 pb-0'} flex items-center justify-center`}
      style={{ background: '#8bb7e4' }}
    >
      {!isMobile && <SpiralBinding />}
      <img
        src="/src/images/logo_style_mockup.jpg"
        alt="Girls Hoo Hack Logo Mockup"
        className={`${isMobile ? 'w-11/12 max-w-[520px]' : 'w-3/4 max-w-[720px]'} h-auto object-contain`}
      />
    </div>
  );
};

export default FrontCover;

'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';
import image from '../images/ghhfront.png';

const FrontCover = ({ isMobile = false }) => {
  return (
<div
  className={`w-full h-full ${isMobile ? 'p-4' : 'p-6'} flex flex-col items-center justify-start text-center shadow-[0_10px_40px_rgba(0,0,0,0.4)] border-l-[20px] border-l-[#1d3557] rounded-tr-2xl z-0`}
  style={{ background: '#8bb7e4' }}
>
  <div className="flex flex-col items-center mt-20">
    {/* Clickable Image */}
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdT1304somoh9ME9QJ64L9ZT-DlU4LdgU_Vvy7_m6ucWfjFDw/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={image}
        alt="Girls Hoo Hack Logo Mockup"
        className={`${isMobile ? 'w-11/12 max-w-[520px]' : 'w-3/4 max-w-[720px]'} h-auto object-contain mx-auto`}
      />
    </a>

    {/* Small Text Under Image */}
    <p className="mt-4 text-sm font-poppins text-white opacity-80">
      click the pearl to register!
    </p>
  </div>
</div>

  );
};

export default FrontCover;

'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

// Import your images
import GoldImg from '../images/cap.jpg';
import SilverImg from '../images/costar.jpg';
import BronzeImg from '../images/bronze.jpg';
import Paperclip from '../images/paperclip.png';

const SponsorsPage = ({ isMobile = false }) => {
  return (
    <div
      className={`notebook-page-right h-full w-full ${
        isMobile ? 'p-4 pt-6 pb-6' : 'pt-20'
      } relative`}
    >
      <h2 className={`mb-6 text-lg font-bold text-gray-800 text-center`}>
        our sponsors
      </h2>

      {/* Gold */}
      <div className={`mb-8 ${isMobile ? 'px-4' : ''}`}>
        <h2 className='!text-[15px] text-base font-semibold text-yellow-600 text-center mb-1'>
          gold sponsor
        </h2>
        <div className='flex justify-center'>
          <div className='relative transform rotate-[-2deg]'>
            {/* Paperclip on left edge, slightly higher */}
            <img
              src={Paperclip}
              alt='Paperclip'
              className='absolute -left-1 w-6 h-15 rotate-[-100deg]'
            />
            <img
              src={GoldImg}
              alt='Gold Sponsor'
              className='shadow-lg object-cover max-w-full max-h-28'
            />
          </div>
        </div>
      </div>

      {/* Silver */}
      <div className={`mb-8 ${isMobile ? 'px-4' : ''}`}>
        <h2 className='!text-[15px] text-base font-semibold text-gray-500 text-center mb-1'>
          silver sponsor
        </h2>
        <div className='flex justify-center'>
          <div className='relative transform rotate-[2deg]'>
            {/* Paperclip on right edge, slightly higher */}
            <img
              src={Paperclip}
              alt='Paperclip'
              className='absolute -right-1 top-0 w-5 h-15 rotate-[10deg]'
            />
            <img
              src={SilverImg}
              alt='Silver Sponsor'
              className='shadow-lg object-cover max-w-full max-h-24'
            />
          </div>
        </div>
      </div>

      {/* Bronze */}
      <div className={`mb-8 ${isMobile ? 'px-4' : ''}`}>
        <h2 className='!text-[15px] text-base font-semibold text-amber-700 text-center mb-1'>
          bronze sponsor
        </h2>
        <div className='flex justify-center'>
          <div className='relative transform rotate-[-1deg]'>
            {/* Paperclip on left edge, slightly higher */}
            <img
              src={Paperclip}
              alt='Paperclip'
              className='absolute -left-4 top-1/4 w-6 h-18'
            />
            <img
              src={BronzeImg}
              alt='Bronze Sponsor'
              className='shadow-lg object-cover max-w-full max-h-32'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;

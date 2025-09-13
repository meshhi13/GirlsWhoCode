'use client';
import React from 'react';

import CapitalOne from '../images/capitalonesponsor.png';
import CoStarGroup from '../images/costargroupsponsor.png';
import SpiralBinding from './SpiralBinding';

const SponsorsPage = ({ isMobile = false }) => {
  return (
    <div
      className={`notebook-page-right h-full w-full ${isMobile ? 'p-4 pt-6 pb-6' : 'p-6 pt-20 pb-6'} relative`}
    >
      <h2 className={`mb-6 text-lg font-bold text-gray-800 ${isMobile ? 'px-4' : 'ml-12'}`}>
        our sponsors
      </h2>

      {/* Gold Sponsors */}
      <div className={`mb-8 ${isMobile ? 'px-4' : 'ml-12'}`}>
        <h3 className='mb-2 text-base font-semibold text-yellow-600'>Gold</h3>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
          {/* Gold sponsors would go here */}
        </div>
      </div>

      {/* Silver Sponsors */}
      <div className={`mb-8 ${isMobile ? 'px-4' : 'ml-12'}`}>
        <h3 className='mb-2 text-base font-semibold text-gray-500'>Silver</h3>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
          <div className='group relative z-0 flex transform-gpu items-center overflow-hidden rounded border-2 border-yellow-500 bg-yellow-50 p-2 text-xs shadow-lg transition duration-200 group-hover:z-10 hover:scale-105 hover:shadow-2xl'>
            <img
              src={CapitalOne}
              alt='Sponsor 1 Logo'
              className='mr-2 h-12 w-100 rounded object-cover transition-transform duration-200 group-hover:scale-110'
            />
          </div>
          <div className='group relative z-0 flex transform-gpu items-center overflow-hidden rounded border border-gray-300 bg-gray-100 p-2 text-xs shadow-sm transition duration-200 group-hover:z-10 hover:scale-105 hover:shadow-md'>
            <img
              src='https://via.placeholder.com/20'
              alt='Sponsor 4 Logo'
              className='mr-2 h-5 w-5 rounded object-cover transition-transform duration-200 group-hover:scale-110'
            />
            <span className='text-xs text-gray-800 transition-colors duration-200'>Sponsor 4</span>
          </div>
        </div>
      </div>

      {/* Bronze Sponsors */}
      <div className={`mb-8 ${isMobile ? 'px-4' : 'ml-12'}`}>
        <h3 className='mb-2 text-base font-semibold text-amber-700'>Bronze</h3>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
          <div className='group relative z-0 flex transform-gpu items-center overflow-hidden rounded border-2 border-yellow-500 bg-yellow-50 p-2 text-xs shadow-lg transition duration-200 group-hover:z-10 hover:scale-105 hover:shadow-2xl'>
            <img
              src={CoStarGroup}
              alt='Sponsor 2 Logo'
              className='mr-2 h-12 w-100 rounded object-cover transition-transform duration-200 group-hover:scale-110'
            />
          </div>
          <div className='group relative z-0 flex transform-gpu items-center overflow-hidden rounded border border-amber-500 bg-amber-50 p-2 text-xs shadow-sm transition duration-200 group-hover:z-10 hover:scale-105 hover:shadow-md'>
            <img
              src='https://via.placeholder.com/16'
              alt='Sponsor 5 Logo'
              className='mr-2 h-4 w-4 rounded object-cover transition-transform duration-200 group-hover:scale-110'
            />
            <span className='text-xs text-gray-800 transition-colors duration-200'>Sponsor 5</span>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className={`mb-8 ${isMobile ? 'px-4' : 'ml-12'}`}>
        <h3 className='mb-2 text-base font-semibold text-blue-700'>Partners</h3>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
          <div className='group relative z-0 flex transform-gpu items-center overflow-hidden rounded border border-blue-300 bg-blue-50 p-2 text-xs shadow-sm transition duration-200 group-hover:z-10 hover:scale-105 hover:shadow-md'>
            <img
              src='https://via.placeholder.com/16'
              alt='Partner 1 Logo'
              className='mr-2 h-4 w-4 rounded object-cover transition-transform duration-200 group-hover:scale-110'
            />
            <span className='text-xs text-gray-800 transition-colors duration-200'>Partner 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;

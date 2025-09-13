'use client';
import React from 'react';

import SpiralBinding from './SpiralBinding';

const MissionPage = ({ isMobile = false }) => (
  <div
    className={`notebook-page-right h-full w-full ${isMobile ? 'p-4 pt-6 pb-6' : 'p-6 pt-20 pb-6'} relative`}
  >
    <div className={`${isMobile ? 'px-4' : 'ml-12'}`}>
      <h2 className='mb-4 text-lg font-bold text-gray-800'>our mission</h2>
      <p className='text-sm text-gray-700'>
        Girls Who Code at the University of Virginia (UVA) is a College Loop of the nationwide Girls
        Who Code nonprofit organization. GWC at UVA aims to close the gender gap in technology by
        creating opportunities for young women to explore technology.
      </p>
    </div>
  </div>
);

export default MissionPage;

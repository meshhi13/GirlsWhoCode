
'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const SchedulePage = ({ isMobile = false }) => (
  <div className={`w-full h-full bg-white ${isMobile ? 'p-4 pt-6 pb-0' : 'p-6 pt-20 pb-0'} relative`}>
    {!isMobile && <SpiralBinding />}
    <div className={`${isMobile ? 'px-4' : 'ml-12'}`}>
      <h2 className="text-lg font-bold text-gray-800 mb-4">Program Schedule</h2>
      <p className="text-sm text-gray-700">Schedule details will be updated closer to the event.</p>
    </div>
  </div>
);

export default SchedulePage;
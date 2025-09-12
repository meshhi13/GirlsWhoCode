'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const MissionPage = ({ isMobile = false }) => (
  <div className={`notebook-page-right w-full h-full ${isMobile ? 'p-4 pt-6 pb-6' : 'p-6 pt-20 pb-6'} relative`}>
    <div className={`${isMobile ? 'px-4' : 'ml-12'}`}>
      <h2 className="text-lg font-bold text-gray-800 mb-4">our mission</h2>
      <p className="text-sm text-gray-700">We work to close the gender gap in technology through community-driven education and events.</p>
    </div>
  </div>
);

export default MissionPage;
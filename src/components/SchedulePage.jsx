'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

import Sched1Img from '../images/sched1.png';
import Sched2Img from '../images/sched2.JPEG';

const SchedulePage = ({ isMobile = false }) => (
  <div className={`notebook-page w-full h-full ${isMobile ? 'p-4 pt-6 pb-6' : 'p-6 pt-20 pb-6'} relative`}>
    <div className={`${isMobile ? 'px-4' : 'ml-12'}`}>
      <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">schedule</h2>

      <div className="flex flex-col items-start gap-0">
        <img src={Sched1Img} alt="Schedule 1" className="max-w-[50%] object-contain self-start shadow-2xl rotate-[-5deg] opacity-75" />
        <img src={Sched2Img} alt="Schedule 2" className="max-w-[50%] object-contain self-end shadow-2xl rotate-[5deg] opacity-75" />
      </div>
    </div>
  </div>
);

export default SchedulePage;
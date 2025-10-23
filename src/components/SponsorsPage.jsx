'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

import GoldImg from '../images/cap.jpg';
import SilverImg from '../images/costar.jpg';
import BronzeImg from '../images/bronze.jpg';
import Paperclip from '../images/paperclip.png';

import FlatlogicImg from '../images/flatlogic.PNG';
import IncogniImg from '../images/incogni.PNG';
import NordPassImg from '../images/nordpass.PNG';
import NordVPNImg from '../images/nordvpn.JPEG';
import SailyImg from '../images/saily.PNG';

const SponsorsPage = ({ isMobile = false }) => {
  return (
    <div
      className={`notebook-page-right h-full w-full !pt-15 ${
        isMobile ? 'p-4 pt-6 pb-6' : 'pt-10'
      } relative`}
    >
      <h2 className={`mb-3 text-lg font-bold text-gray-800 text-center`}>
        our sponsors
      </h2>

      <div className={`mb-6 ${isMobile ? 'px-4' : ''}`}>
        <h2 className='!text-[15px] text-base font-semibold text-yellow-600 text-center mb-1'>
          gold sponsor
        </h2>
        <div className='flex justify-center'>
          <div className='relative transform rotate-[-2deg]'>
            <img
              src={Paperclip}
              alt='Paperclip'
              className='absolute -left-1 w-6 h-15 rotate-[-100deg]'
            />
            <img
              src={GoldImg}
              alt='Gold Sponsor'
              className='shadow-lg object-cover max-w-full max-h-20'
            />
          </div>
        </div>
      </div>

      <div className={`mb-6 ${isMobile ? 'px-4' : ''}`}>
        <h2 className='!text-[15px] text-base font-semibold text-gray-500 text-center mb-1'>
          silver sponsor
        </h2>
        <div className='flex justify-center'>
          <div className='relative transform rotate-[2deg]'>
            <img
              src={Paperclip}
              alt='Paperclip'
              className='absolute -right-1 top-0 w-5 h-15 rotate-[10deg]'
            />
            <img
              src={SilverImg}
              alt='Silver Sponsor'
              className='shadow-lg object-cover max-w-full max-h-20'
            />
          </div>
        </div>
      </div>

<div className={`mb-6 ${isMobile ? 'px-4' : ''}`}>
  <h2 className='!text-[15px] text-base font-semibold text-amber-700 text-center mb-1'>
    bronze sponsor
  </h2>
  <div className='flex justify-center mb-4 gap-4'>
    <div className='relative transform rotate-[-1deg]'>
      <img
        src={Paperclip}
        alt='Paperclip'
        className='absolute -left-4 top-1/4 w-6 h-18'
      />
      <a
        href='https://www.purebuttons.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={BronzeImg}
          alt='Bronze Sponsor'
          className='shadow-lg object-cover max-w-full max-h-24 cursor-pointer'
        />
      </a>
    </div>

    <a
      href='https://flatlogic.com/'
      target='_blank'
      rel='noopener noreferrer'
      className='shadow-lg rounded-lg'
    >
      <img
        src={FlatlogicImg}
        alt='Flatlogic'
        className='shadow-lg object-cover max-h-24 w-auto rounded-lg'
      />
    </a>
  </div>

  <div className='flex justify-center flex-wrap gap-3'>
    <a
      href='https://nordvpn.com/'
      target='_blank'
      rel='noopener noreferrer'
      className='shadow-lg rounded-lg'
    >
      <img
        src={NordVPNImg}
        alt='NordVPN'
        className='h-12 w-auto object-contain rounded-lg'
      />
    </a>
    <a
      href='https://nordpass.com/'
      target='_blank'
      rel='noopener noreferrer'
      className='shadow-lg rounded-lg'
    >
      <img
        src={NordPassImg}
        alt='NordPass'
        className='h-12 w-auto object-contain rounded-lg'
      />
    </a>
    <a
      href='https://incogni.com/'
      target='_blank'
      rel='noopener noreferrer'
      className='shadow-lg rounded-lg'
    >
      <img
        src={IncogniImg}
        alt='Incogni'
        className='h-12 w-auto object-contain rounded-lg'
      />
    </a>
    <a
      href='https://saily.com/'
      target='_blank'
      rel='noopener noreferrer'
      className='shadow-lg rounded-lg'
    >
      <img
        src={SailyImg}
        alt='Saily'
        className='h-12 w-auto object-contain rounded-lg'
      />
    </a>
  </div>
</div>
</div>
  );
};

export default SponsorsPage;

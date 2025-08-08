'use client';
import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import FrontCover from '@components/FrontCover';
import BackCover from '@components/BackCover';
import SpiralBinding from '@components/SpiralBinding';
import AboutPage from '@components/AboutPage';
import MissionPage from '@components/MissionPage';
import SchedulePage from '@components/SchedulePage';
import FAQPage from '@components/FAQPage';
import ContactPage from '@components/ContactUs';
import SponsorsPage from '@components/SponsorsPage';

const Notebook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = 8;
  const isFrontCover = currentPage === 0;
  const isBackCover = currentPage === totalPages - 1;

  let offsetX = '';
  if (windowWidth >= 1400) {
    if (isFrontCover) offsetX = '-translate-x-1/4';
    else if (isBackCover) offsetX = 'translate-x-1/4';
  }
  else offsetX = 'translate-x-0';

  return (
    <div className="flex justify-center items-center min-h-full">
      <HTMLFlipBook
        width={700}
        height={750}
        drawShadow={currentPage !== 0}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={(e) => setCurrentPage(e.data)}
        className={`transition-transform duration-300 relative rounded-xl shadow-2xl ${offsetX} border-none !outline-none !shadow-none !ring-0 !box-shadow-none`}
      >
        <div>
            <SpiralBinding />
            <FrontCover />
        </div>
        <div>
            {windowWidth <= 1440 && ( <SpiralBinding /> ) }

            <AboutPage />
        </div>
        <div>
            <MissionPage />
        </div>
        <div>
            {windowWidth <= 1440 && ( <SpiralBinding /> ) }
            <SchedulePage />
        </div>
        <div>
            <FAQPage />
        </div>
        <div>
            {windowWidth <= 1440 && ( <SpiralBinding /> ) }
            <ContactPage />
        </div>
        <div>
            <SponsorsPage />
        </div>
        <div>
            <BackCover width = {windowWidth}/>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Notebook;
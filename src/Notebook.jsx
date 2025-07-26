'use client';
import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import AboutUs1 from '@components/AboutUs1';
import AboutUs2 from '@components/AboutUs2';
import FrontCover from '@components/FrontCover';
import BackCover from '@components/BackCover';
import Sponsors from '@components/Sponsors';
import Schedule from '@components/Schedule';
import ContactUs from '@components/ContactUs';
import FAQ from '@components/FAQ';

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
  console.log(`Current Page: ${currentPage}, Total Pages: ${totalPages}`);

  // Apply offset only if windowWidth >= 640 (sm breakpoint in Tailwind)
  let offsetX = '';
  if (windowWidth >= 1400) {
    if (isFrontCover) offsetX = '-translate-x-1/4';
    else if (isBackCover) offsetX = 'translate-x-1/4';
  }
  else offsetX = 'translate-x-0';

  return (
    <div className="flex justify-center items-center min-h-full">
      <HTMLFlipBook
        width={windowWidth >= 640 ? 700 : windowWidth * 0.9}
        height={windowWidth >= 640 ? 750 : (windowWidth * 0.9) * (500 / 700)}
        drawShadow={currentPage !== 0}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={(e) => setCurrentPage(e.data)}
        className={`mb-6 mt-6 transition-transform duration-300 relative rounded-xl shadow-2xl ${offsetX} border-none !outline-none !shadow-none !ring-0 !box-shadow-none`}
      >
        <div>
            <FrontCover />
        </div>
        <div>
            <AboutUs1 />
        </div>
        <div>
            <AboutUs2 />
        </div>
        <div>
            <Schedule />
        </div>
        <div>
            <FAQ />
        </div>
        <div>
            <ContactUs />
        </div>
        <div>
            <Sponsors />
        </div>
        <div>
            <BackCover />
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Notebook;
